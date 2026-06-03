import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "i3 CRM — Gestão Comercial Inteligente",
  description:
    "O i3 CRM organiza toda a jornada comercial da sua associação: funil de vendas, gestão de leads, histórico de interações e acompanhamento de metas em tempo real.",
  keywords: [
    "CRM veicular",
    "gestão comercial",
    "funil de vendas",
    "gestão de leads",
    "i3 CRM",
    "software CRM associação",
  ],
  alternates: { canonical: "https://www.i3tech.digital/solucoes/crm" },
  openGraph: {
    title: "i3 CRM — Gestão Comercial Inteligente | i3TECH",
    description:
      "O i3 CRM organiza toda a jornada comercial da sua associação: funil de vendas, gestão de leads, histórico de interações e acompanhamento de metas em tempo real.",
    images: [{ url: "/inside-crm.png", width: 1200, height: 630, alt: "i3 CRM" }],
  },
  twitter: {
    title: "i3 CRM — Gestão Comercial Inteligente | i3TECH",
    description:
      "O i3 CRM organiza toda a jornada comercial da sua associação: funil de vendas, gestão de leads, histórico de interações e acompanhamento de metas em tempo real.",
    images: ["/inside-crm.png"],
  },
};

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
