import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "i3 Gestão — Plataforma Completa para Associações",
  description:
    "Gerencie clientes, contratos, cobranças, vistorias e sinistros em um único lugar. O i3 Gestão é a plataforma completa para associações de proteção veicular.",
  keywords: [
    "gestão de associação",
    "software proteção veicular",
    "gestão de contratos",
    "cobrança automática",
    "i3 Gestão",
    "plataforma associação veicular",
  ],
  alternates: { canonical: "https://www.i3tech.digital/solucoes/gestao" },
  openGraph: {
    title: "i3 Gestão — Plataforma Completa para Associações | i3TECH",
    description:
      "Gerencie clientes, contratos, cobranças, vistorias e sinistros em um único lugar. O i3 Gestão é a plataforma completa para associações de proteção veicular.",
    images: [{ url: "/inside-gestao.png", width: 1200, height: 630, alt: "i3 Gestão" }],
  },
  twitter: {
    title: "i3 Gestão — Plataforma Completa para Associações | i3TECH",
    description:
      "Gerencie clientes, contratos, cobranças, vistorias e sinistros em um único lugar. O i3 Gestão é a plataforma completa para associações de proteção veicular.",
    images: ["/inside-gestao.png"],
  },
};

export default function GestaoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "i3 Gestão",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "ERP completo para associações de proteção veicular com rateio atuarial, contratos, cobranças e faturamento integrado.",
        url: "https://www.i3tech.digital/solucoes/gestao",
        offers: { "@type": "Offer", priceCurrency: "BRL", seller: { "@type": "Organization", name: "i3TECH" } },
      }) }} />
    </>
  );
}
