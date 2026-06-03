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
  openGraph: {
    title: "i3 CRM — Gestão Comercial Inteligente | i3TECH",
    description:
      "O i3 CRM organiza toda a jornada comercial da sua associação: funil de vendas, gestão de leads, histórico de interações e acompanhamento de metas em tempo real.",
  },
  twitter: {
    title: "i3 CRM — Gestão Comercial Inteligente | i3TECH",
    description:
      "O i3 CRM organiza toda a jornada comercial da sua associação: funil de vendas, gestão de leads, histórico de interações e acompanhamento de metas em tempo real.",
  },
};

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
