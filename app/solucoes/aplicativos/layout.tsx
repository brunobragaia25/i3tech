import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "i3 Aplicativos — Apps Mobile White Label",
  description:
    "Aplicativos mobile customizados para Android e iOS com a identidade da sua empresa. Apps para Associado, Consultor e Rastreamento Veicular.",
  keywords: [
    "aplicativo proteção veicular",
    "app associado",
    "app consultor",
    "white label mobile",
    "i3 Aplicativos",
    "app rastreamento veicular",
  ],
  alternates: { canonical: "https://www.i3tech.digital/solucoes/aplicativos" },
  openGraph: {
    title: "i3 Aplicativos — Apps Mobile White Label | i3TECH",
    description:
      "Aplicativos mobile customizados para Android e iOS com a identidade da sua empresa. Apps para Associado, Consultor e Rastreamento Veicular.",
    images: [{ url: "/inside-app.png", width: 1200, height: 630, alt: "i3 Aplicativos" }],
  },
  twitter: {
    title: "i3 Aplicativos — Apps Mobile White Label | i3TECH",
    description:
      "Aplicativos mobile customizados para Android e iOS com a identidade da sua empresa. Apps para Associado, Consultor e Rastreamento Veicular.",
    images: ["/inside-app.png"],
  },
};

export default function AplicativosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "i3 Aplicativos",
        applicationCategory: "MobileApplication",
        operatingSystem: "Android, iOS",
        description: "Aplicativos mobile customizados para Associado, Consultor e Rastreamento Veicular publicados com a identidade da sua empresa.",
        url: "https://www.i3tech.digital/solucoes/aplicativos",
        offers: { "@type": "Offer", priceCurrency: "BRL", seller: { "@type": "Organization", name: "i3TECH" } },
      }) }} />
    </>
  );
}
