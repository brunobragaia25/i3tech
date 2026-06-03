import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Descubra as soluções da i3TECH: i3 CRM, i3 Gestão, i3 MGA, i3 Track, i3 Integrações e Aplicativos para operações veiculares completas e escaláveis.",
  keywords: [
    "i3 CRM",
    "i3 Gestão",
    "i3 MGA",
    "i3 Track",
    "i3 Integrações",
    "soluções veiculares",
    "software gestão veicular",
  ],
  alternates: { canonical: "https://www.i3tech.digital/solucoes" },
  openGraph: {
    title: "Soluções | i3TECH",
    description:
      "Descubra as soluções da i3TECH: i3 CRM, i3 Gestão, i3 MGA, i3 Track, i3 Integrações e Aplicativos para operações veiculares completas e escaláveis.",
    images: [{ url: "/foto-cta-solucoes.png", width: 1200, height: 630, alt: "Soluções i3TECH" }],
  },
  twitter: {
    title: "Soluções | i3TECH",
    description:
      "Descubra as soluções da i3TECH: i3 CRM, i3 Gestão, i3 MGA, i3 Track, i3 Integrações e Aplicativos para operações veiculares completas e escaláveis.",
    images: ["/foto-cta-solucoes.png"],
  },
};

export default function SolucoesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
