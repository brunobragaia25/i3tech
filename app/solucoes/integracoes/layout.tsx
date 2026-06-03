import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "i3 Integrações — ChatBot e IA para sua Operação",
  description:
    "Automatize o atendimento com ChatBot inteligente integrado ao WhatsApp e outros canais. O i3 Integrações conecta sua operação aos principais sistemas do mercado.",
  keywords: [
    "chatbot veicular",
    "integração WhatsApp",
    "automação atendimento",
    "i3 Integrações",
    "chatbot com IA",
    "integração CRM",
  ],
  alternates: { canonical: "https://www.i3tech.digital/solucoes/integracoes" },
  openGraph: {
    title: "i3 Integrações — ChatBot e IA para sua Operação | i3TECH",
    description:
      "Automatize o atendimento com ChatBot inteligente integrado ao WhatsApp e outros canais. O i3 Integrações conecta sua operação aos principais sistemas do mercado.",
    images: [{ url: "/inside-integracoes.png", width: 1200, height: 630, alt: "i3 Integrações" }],
  },
  twitter: {
    title: "i3 Integrações — ChatBot e IA para sua Operação | i3TECH",
    description:
      "Automatize o atendimento com ChatBot inteligente integrado ao WhatsApp e outros canais. O i3 Integrações conecta sua operação aos principais sistemas do mercado.",
    images: ["/inside-integracoes.png"],
  },
};

export default function IntegracoesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
