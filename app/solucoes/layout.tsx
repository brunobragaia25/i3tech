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
  openGraph: {
    title: "Soluções | i3TECH",
    description:
      "Descubra as soluções da i3TECH: i3 CRM, i3 Gestão, i3 MGA, i3 Track, i3 Integrações e Aplicativos para operações veiculares completas e escaláveis.",
  },
  twitter: {
    title: "Soluções | i3TECH",
    description:
      "Descubra as soluções da i3TECH: i3 CRM, i3 Gestão, i3 MGA, i3 Track, i3 Integrações e Aplicativos para operações veiculares completas e escaláveis.",
  },
};

export default function SolucoesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
