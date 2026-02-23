/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nexflowinc.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [],
  },
}
