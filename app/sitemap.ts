import type { MetadataRoute } from "next";

const BASE_URL = "https://www.i3tech.digital";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                              lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/funcionalidades`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/solucoes`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/solucoes/crm`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/solucoes/gestao`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/solucoes/mga`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/solucoes/track`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/solucoes/integracoes`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/solucoes/aplicativos`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/planos`,                  lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/cases`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sobre`,                   lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE_URL}/contato`,                 lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
  ];
}
