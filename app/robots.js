export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://fox-berens.com/sitemap.xml",
    host: "https://fox-berens.com",
  };
}
