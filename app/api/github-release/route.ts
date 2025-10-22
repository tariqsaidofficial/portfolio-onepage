import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Cache for 1 hour

interface GitHubRelease {
  tag_name: string
  name: string
  assets: Array<{
    name: string
    browser_download_url: string
    size: number
  }>
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const repo = searchParams.get('repo')

  if (!repo) {
    return NextResponse.json(
      { error: 'Repository parameter is required' },
      { status: 400 }
    )
  }

  try {
    // Fetch latest release from GitHub API
    const response = await fetch(
      `https://api.github.com/repos/${repo}/releases/latest`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // Add GitHub token if available for higher rate limits
          ...(process.env.GITHUB_TOKEN && {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
          })
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: 'No releases found for this repository' },
          { status: 404 }
        )
      }
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const release: GitHubRelease = await response.json()

    // Find APK file in assets
    const apkAsset = release.assets.find(asset => 
      asset.name.toLowerCase().endsWith('.apk')
    )

    if (!apkAsset) {
      return NextResponse.json(
        { error: 'No APK file found in the latest release' },
        { status: 404 }
      )
    }

    // Format size to MB
    const sizeInMB = (apkAsset.size / (1024 * 1024)).toFixed(2)

    return NextResponse.json({
      version: release.tag_name,
      name: release.name,
      apk: {
        url: apkAsset.browser_download_url,
        name: apkAsset.name,
        size: apkAsset.size,
        sizeFormatted: `${sizeInMB} MB`
      }
    })

  } catch (error) {
    console.error('Error fetching GitHub release:', error)
    return NextResponse.json(
      { error: 'Failed to fetch release information' },
      { status: 500 }
    )
  }
}
