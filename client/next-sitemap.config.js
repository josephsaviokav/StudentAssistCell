/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL ?? "https://kalavedhi.ksucet.in";

const staticRoutes = [
  "/",
  "/about",
  "/minor",
];

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 50000,

  // Ensure static/app routes are included
  additionalPaths: async (config) => {
    const lastmod = new Date().toISOString();
    return staticRoutes.map((path) => ({
      // loc can be a path (next-sitemap will prefix siteUrl)
      loc: path,
      lastmod,
      changefreq: "weekly",
      priority: 0.7,
    }));
  },
};