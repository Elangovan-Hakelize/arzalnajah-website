import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arzalnajah.com'
  
  // Main pages
  const mainPages = [
    '',
    '/about',
    '/packages',
    '/contact',
    '/testimonials',
    '/blog',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Service pages
  const servicePages = [
    '/services/mainland-company-setup',
    '/services/freezone-business-setup',
    '/services/offshore-company-formation',
    '/services/visa-services',
    '/services/pro-services',
    '/services/corporate-bank-account',
    '/services/trade-license-services',
    '/services/golden-visa-assistance',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Blog articles
  const blogArticles = [
    '/blog/cost-of-business-setup-dubai-2025',
    '/blog/mainland-vs-freezone-comparison',
    '/blog/investor-visa-uae-guide',
    '/blog/dubai-trade-license-guide',
    '/blog/best-freezones-ecommerce-uae',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...mainPages, ...servicePages, ...blogArticles]
}
