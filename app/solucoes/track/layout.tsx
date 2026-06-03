import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "i3 Track — Rastreamento Veicular para Centrais",
  description:
    "Monitore frotas em tempo real, gerencie veículos e centralize informações de rastreamento. O i3 Track foi criado para centrais de rastreamento escaláveis.",
  keywords: [
    "rastreamento veicular",
    "software rastreamento",
    "central de rastreamento",
    "monitoramento de frota",
    "i3 Track",
    "gestão de frota",
  ],
  openGraph: {
    title: "i3 Track — Rastreamento Veicular para Centrais | i3TECH",
    description:
      "Monitore frotas em tempo real, gerencie veículos e centralize informações de rastreamento. O i3 Track foi criado para centrais de rastreamento escaláveis.",
  },
  twitter: {
    title: "i3 Track — Rastreamento Veicular para Centrais | i3TECH",
    description:
      "Monitore frotas em tempo real, gerencie veículos e centralize informações de rastreamento. O i3 Track foi criado para centrais de rastreamento escaláveis.",
  },
};

export default function TrackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
