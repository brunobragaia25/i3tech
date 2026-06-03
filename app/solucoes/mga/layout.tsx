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
  openGraph: {
    title: "i3 MGA — Gestão para Seguradoras e MGAs | i3TECH",
    description:
      "Plataforma completa para seguradoras e MGAs: gestão de apólices, sinistros, comissões e relatórios integrados. Escale sua operação com o i3 MGA.",
  },
  twitter: {
    title: "i3 MGA — Gestão para Seguradoras e MGAs | i3TECH",
    description:
      "Plataforma completa para seguradoras e MGAs: gestão de apólices, sinistros, comissões e relatórios integrados. Escale sua operação com o i3 MGA.",
  },
};

export default function MgaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
