"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Github, 
  Linkedin, 
  Star, 
  GitFork, 
  Eye,
  Calendar,
  TrendingUp,
  ExternalLink,
  RefreshCw,
  Code,
  Users,
  Activity
} from "lucide-react"

// Mock GitHub data (in production, this would come from GitHub API)
const MOCK_GITHUB_REPOS = [
  {
    name: "portfolio-onepage",
    description: "Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS",
    stars: 24,
    forks: 8,
    language: "TypeScript",
    updated: "2025-10-18",
    url: "https://github.com/tariqsaidofficial/portfolio-onepage",
  },
  {
    name: "media-server",
    description: "Self-hosted media server with Jellyfin, Sonarr, and Radarr",
    stars: 15,
    forks: 5,
    language: "Python",
    updated: "2025-10-15",
    url: "https://github.com/tariqsaidofficial/media-server",
  },
  {
    name: "av-automation",
    description: "Audio-visual automation scripts for event production",
    stars: 12,
    forks: 3,
    language: "JavaScript",
    updated: "2025-10-10",
    url: "https://github.com/tariqsaidofficial/av-automation",
  },
  {
    name: "network-monitor",
    description: "Network monitoring dashboard with Grafana and Prometheus",
    stars: 18,
    forks: 6,
    language: "Go",
    updated: "2025-10-05",
    url: "https://github.com/tariqsaidofficial/network-monitor",
  },
  {
    name: "flutter-pos",
    description: "Point of Sale system built with Flutter and Firebase",
    stars: 31,
    forks: 12,
    language: "Dart",
    updated: "2025-09-28",
    url: "https://github.com/tariqsaidofficial/flutter-pos",
  },
]

// Mock LinkedIn activity (in production, this would be limited due to LinkedIn API restrictions)
const MOCK_LINKEDIN_ACTIVITY = [
  {
    type: "post",
    title: "Excited to share my latest project",
    excerpt: "Just launched a new portfolio website with cutting-edge tech stack...",
    engagement: { likes: 142, comments: 23 },
    date: "2025-10-17",
  },
  {
    type: "article",
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "A comprehensive guide to building production-ready applications...",
    engagement: { likes: 287, comments: 45 },
    date: "2025-10-10",
  },
  {
    type: "post",
    title: "Event Production Behind the Scenes",
    excerpt: "Sharing insights from directing the Mediterranean Medical Congress...",
    engagement: { likes: 198, comments: 31 },
    date: "2025-10-03",
  },
]

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  Go: "#00ADD8",
  Dart: "#0175C2",
  PHP: "#777BB4",
}

export function SocialActivityFeed() {
  const [githubRepos, setGithubRepos] = useState(MOCK_GITHUB_REPOS)
  const [linkedinActivity, setLinkedinActivity] = useState(MOCK_LINKEDIN_ACTIVITY)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  // Simulate data refresh
  const handleRefresh = async () => {
    setIsRefreshing(true)
    // In production, this would fetch from API
    await new Promise(resolve => setTimeout(resolve, 1500))
    setLastUpdated(new Date())
    setIsRefreshing(false)
  }

  // Calculate total stats
  const totalStars = githubRepos.reduce((sum, repo) => sum + repo.stars, 0)
  const totalForks = githubRepos.reduce((sum, repo) => sum + repo.forks, 0)
  const totalEngagement = linkedinActivity.reduce((sum, activity) => sum + activity.engagement.likes, 0)

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="glass border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">GitHub Stars</p>
                <p className="text-3xl font-bold text-primary">{totalStars}</p>
              </div>
              <Star className="w-8 h-8 text-primary/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Forks</p>
                <p className="text-3xl font-bold text-primary">{totalForks}</p>
              </div>
              <GitFork className="w-8 h-8 text-primary/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Repositories</p>
                <p className="text-3xl font-bold text-primary">{githubRepos.length}</p>
              </div>
              <Code className="w-8 h-8 text-primary/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn Reach</p>
                <p className="text-3xl font-bold text-primary">{totalEngagement}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary/50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* GitHub Repositories */}
        <Card className="glass border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-primary" />
                <CardTitle>Recent Repositories</CardTitle>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="hover:bg-primary/10"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              </Button>
            </div>
            <CardDescription>
              Latest projects from GitHub
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {githubRepos.map((repo, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary group-hover:underline flex items-center gap-2">
                      {repo.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {repo.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || "#888" }}
                    />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    <span>{repo.forks}</span>
                  </div>
                  <div className="flex items-center gap-1 ml-auto">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(repo.updated).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}

            <Button 
              variant="outline" 
              className="w-full border-primary/20 hover:bg-primary/10"
              asChild
            >
              <a 
                href="https://github.com/tariqsaidofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                View All on GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* LinkedIn Activity */}
        <Card className="glass border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-primary" />
              <CardTitle>LinkedIn Activity</CardTitle>
            </div>
            <CardDescription>
              Recent posts and articles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {linkedinActivity.map((activity, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    {activity.type === "article" ? (
                      <Activity className="w-4 h-4 text-primary" />
                    ) : (
                      <Users className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2">
                      {activity.type === "article" ? "Article" : "Post"}
                    </Badge>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {activity.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {activity.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{activity.engagement.likes} likes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{activity.engagement.comments} comments</span>
                      </div>
                      <div className="flex items-center gap-1 ml-auto">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(activity.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Button 
              variant="outline" 
              className="w-full border-primary/20 hover:bg-primary/10"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/tariqsaidofficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                View Profile on LinkedIn
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Implementation Guide */}
      <Card className="glass border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            Implementation Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 text-primary">🔧 GitHub API Integration</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Endpoint:</strong> <code className="px-2 py-1 bg-secondary rounded">https://api.github.com/users/tariqsaidofficial/repos</code></p>
              <p><strong>Authentication:</strong> Optional for public repos, but recommended for higher rate limits</p>
              <p><strong>Rate Limit:</strong> 60 requests/hour (unauthenticated), 5000/hour (authenticated)</p>
              <p><strong>Caching:</strong> Store data in localStorage or API route with 24h TTL</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border/50">
            <h4 className="font-semibold mb-2 text-primary">💼 LinkedIn Integration</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Challenge:</strong> LinkedIn API is very restricted and requires company approval</p>
              <p><strong>Alternative 1:</strong> Manual updates (current demo approach)</p>
              <p><strong>Alternative 2:</strong> RSS feed (if available on your profile)</p>
              <p><strong>Alternative 3:</strong> Third-party services like RapidAPI</p>
              <p className="text-yellow-500">⚠️ Web scraping is against LinkedIn ToS</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border/50">
            <h4 className="font-semibold mb-2 text-primary">📝 Next Steps</h4>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
              <li>Create GitHub Personal Access Token (Settings → Developer settings)</li>
              <li>Add to .env.local: <code className="px-2 py-1 bg-secondary rounded">GITHUB_TOKEN=your_token</code></li>
              <li>Create API route: <code className="px-2 py-1 bg-secondary rounded">/api/github-repos</code></li>
              <li>Implement caching with Next.js revalidation</li>
              <li>Add error handling and fallback UI</li>
            </ol>
          </div>

          <div className="pt-4 border-t border-border/50 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> {lastUpdated.toLocaleString()}
            </div>
            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
              Live Demo
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
