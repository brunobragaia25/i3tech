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
  alternates: { canonical: "https://www.i3tech.digital/solucoes/track" },
  openGraph: {
    title: "i3 Track — Rastreamento Veicular para Centrais | i3TECH",
    description:
      "Monitore frotas em tempo real, gerencie veículos e centralize informações de rastreamento. O i3 Track foi criado para centrais de rastreamento escaláveis.",
    images: [{ url: "/inside-track.png", width: 1200, height: 630, alt: "i3 Track" }],
  },
  twitter: {
    title: "i3 Track — Rastreamento Veicular para Centrais | i3TECH",
    description:
      "Monitore frotas em tempo real, gerencie veículos e centralize informações de rastreamento. O i3 Track foi criado para centrais de rastreamento escaláveis.",
    images: ["/inside-track.png"],
  },
};

export default function TrackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
