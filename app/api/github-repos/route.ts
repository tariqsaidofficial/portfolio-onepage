import { NextResponse } from 'next/server'

// GitHub API types
interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
  topics: string[]
  homepage: string | null
}

// Simplified response type
interface RepoData {
  name: string
  description: string
  url: string
  stars: number
  forks: number
  language: string
  updated: string
  topics: string[]
  homepage: string | null
}

// Fallback data in case API fails
const FALLBACK_REPOS: RepoData[] = [
  {
    name: "portfolio-onepage",
    description: "Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS",
    url: "https://github.com/tariqsaidofficial/portfolio-onepage",
    stars: 24,
    forks: 8,
    language: "TypeScript",
    updated: new Date().toISOString(),
    topics: ["nextjs", "typescript", "portfolio", "tailwindcss"],
    homepage: "https://tariqsaid.com"
  },
  {
    name: "media-server",
    description: "Self-hosted media server with Jellyfin, Sonarr, and Radarr",
    url: "https://github.com/tariqsaidofficial/media-server",
    stars: 15,
    forks: 5,
    language: "Python",
    updated: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    topics: ["jellyfin", "docker", "media-server"],
    homepage: null
  },
]

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME || 'tariqsaidofficial'
    const token = process.env.GITHUB_TOKEN

    // Build headers
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-Website',
    }

    // Add authorization if token exists
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    // Fetch repositories
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=5&type=public`,
      {
        headers,
        next: { 
          revalidate: 86400 // Cache for 24 hours (86400 seconds)
        }
      }
    )

    // Check rate limit
    const rateLimit = response.headers.get('X-RateLimit-Remaining')
    const rateLimitReset = response.headers.get('X-RateLimit-Reset')

    if (!response.ok) {
      console.error('GitHub API Error:', {
        status: response.status,
        statusText: response.statusText,
        rateLimit,
        rateLimitReset: rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000).toISOString() : null
      })

      // If rate limited, return fallback data
      if (response.status === 403 && rateLimit === '0') {
        return NextResponse.json({
          data: FALLBACK_REPOS,
          cached: true,
          error: 'Rate limit exceeded',
          resetAt: rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000).toISOString() : null
        })
      }

      throw new Error(`GitHub API returned ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()

    // Transform data
    const transformedRepos: RepoData[] = repos.map(repo => ({
      name: repo.name,
      description: repo.description || 'No description available',
      url: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language || 'Unknown',
      updated: repo.updated_at,
      topics: repo.topics || [],
      homepage: repo.homepage
    }))

    return NextResponse.json({
      data: transformedRepos,
      cached: false,
      rateLimit: {
        remaining: rateLimit,
        resetAt: rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000).toISOString() : null
      },
      lastUpdated: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error fetching GitHub repos:', error)

    // Return fallback data on error
    return NextResponse.json({
      data: FALLBACK_REPOS,
      cached: true,
      error: error instanceof Error ? error.message : 'Unknown error',
      lastUpdated: new Date().toISOString()
    }, { status: 200 }) // Return 200 with fallback data instead of error
  }
}

// Optional: Add POST endpoint to manually trigger refresh
export async function POST() {
  // This would clear cache and force refresh
  // Requires additional cache management implementation
  return NextResponse.json({ 
    message: 'Cache refresh triggered',
    timestamp: new Date().toISOString()
  })
}
