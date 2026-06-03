import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "i3 MGA — Gestão para Seguradoras e MGAs",
  description:
    "Plataforma completa para seguradoras e MGAs: gestão de apólices, sinistros, comissões e relatórios integrados. Escale sua operação com o i3 MGA.",
  keywords: [
    "software MGA",
    "gestão seguradora",
    "i3 MGA",
    "gestão de apólices",
    "sinistros seguros",
    "plataforma seguradora",
  ],
  alternates: { canonical: "https://www.i3tech.digital/solucoes/mga" },
  openGraph: {
    title: "i3 MGA — Gestão para Seguradoras e MGAs | i3TECH",
    description:
      "Plataforma completa para seguradoras e MGAs: gestão de apólices, sinistros, comissões e relatórios integrados. Escale sua operação com o i3 MGA.",
    images: [{ url: "/inside-mga.png", width: 1200, height: 630, alt: "i3 MGA" }],
  },
  twitter: {
    title: "i3 MGA — Gestão para Seguradoras e MGAs | i3TECH",
    description:
      "Plataforma completa para seguradoras e MGAs: gestão de apólices, sinistros, comissões e relatórios integrados. Escale sua operação com o i3 MGA.",
    images: ["/inside-mga.png"],
  },
};

export default function MgaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "i3 MGA",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "Sistema completo de gestão de seguros para MGAs com emissão de apólice, cotações e faturamento integrados à seguradora.",
        url: "https://www.i3tech.digital/solucoes/mga",
        offers: { "@type": "Offer", priceCurrency: "BRL", seller: { "@type": "Organization", name: "i3TECH" } },
      }) }} />
    </>
  );
}
