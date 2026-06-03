import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases de Clientes",
  description:
    "Conheça empresas que transformaram sua operação com a i3TECH. Resultados reais de clientes que cresceram com organização, automação e inteligência comercial.",
  keywords: [
    "cases i3TECH",
    "clientes i3TECH",
    "resultados CRM veicular",
    "histórias de sucesso",
    "depoimentos i3TECH",
  ],
  alternates: { canonical: "https://www.i3tech.digital/cases" },
  openGraph: {
    title: "Cases de Clientes | i3TECH",
    description:
      "Conheça empresas que transformaram sua operação com a i3TECH. Resultados reais de clientes que cresceram com organização, automação e inteligência comercial.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Cases i3TECH" }],
  },
  twitter: {
    title: "Cases de Clientes | i3TECH",
    description:
      "Conheça empresas que transformaram sua operação com a i3TECH. Resultados reais de clientes que cresceram com organização, automação e inteligência comercial.",
    images: ["/og-image.jpg"],
  },
};

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Cases de Clientes i3TECH",
        url: "https://www.i3tech.digital/cases",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Proterbem", description: "Crescimento de 3x na carteira de associados com i3Gestão." },
          { "@type": "ListItem", position: 2, name: "Grupo Conor", description: "Redução de 60% no tempo operacional com i3Gestão e i3CRM." },
          { "@type": "ListItem", position: 3, name: "Álamo", description: "+400 veículos monitorados com i3Track." },
        ],
      }) }} />
    </>
  );
}
