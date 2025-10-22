import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/demo/',
          '/color-demo/',
          '/email-demo/',
          '/engagement-demo/',
          '/error-test/',
          '/projects-demo/',
          '/projects-demo-v3/',
          '/500/',
        ],
      },
      // Block AI training bots
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Claude-Web'],
        disallow: '/',
      },
      // Block aggressive crawlers
      {
        userAgent: ['Bytespider', 'Amazonbot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://portfolio.dxbmark.com/sitemap.xml',
  }
}
