import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://eight3.ca'
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/legal/'] }],
    sitemap: `${base}/sitemap.xml`,
  }
}
