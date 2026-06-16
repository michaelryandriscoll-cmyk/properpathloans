// app/sitemap.js
import stateCityMap from "@/app/lib/stateCityMap";

const BASE_URL = "https://properpathloans.com";

const LOAN_TYPES = [
  "debt-consolidation",
  "bad-credit",
  "emergency-loans",
  "home-improvement",
];

export default function sitemap() {
  const urls = [];

  // Static pages
  const staticPages = [
    "",
    "/personal-loans",
    "/get-quote",
    "/about",
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  for (const page of staticPages) {
    urls.push({
      url: `${BASE_URL}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page === "" ? 1.0 : 0.8,
    });
  }

  // State pages
  for (const [stateSlug, stateData] of Object.entries(stateCityMap)) {
    urls.push({
      url: `${BASE_URL}/personal-loans/${stateSlug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });

    // City pages
    for (const city of stateData.cities) {
      urls.push({
        url: `${BASE_URL}/personal-loans/${stateSlug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });

      // Vertical pages
      for (const loanType of LOAN_TYPES) {
        urls.push({
          url: `${BASE_URL}/personal-loans/${stateSlug}/${city.slug}/${loanType}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.5,
        });
      }
    }
  }

  return urls;
}
