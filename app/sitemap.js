export default function sitemap() {
  const base = "https://fox-berens.com";
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
