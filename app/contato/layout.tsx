import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entre em Contato",
  description:
    "Entre em contato com a i3TECH e agende uma demonstração gratuita. Nossa equipe está pronta para ajudar a transformar sua operação veicular.",
  keywords: [
    "contato i3TECH",
    "agendar demonstração",
    "demonstração CRM veicular",
    "falar com i3TECH",
    "suporte i3TECH",
  ],
  alternates: { canonical: "https://www.i3tech.digital/contato" },
  openGraph: {
    title: "Entre em Contato | i3TECH",
    description:
      "Entre em contato com a i3TECH e agende uma demonstração gratuita. Nossa equipe está pronta para ajudar a transformar sua operação veicular.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contato i3TECH" }],
  },
  twitter: {
    title: "Entre em Contato | i3TECH",
    description:
      "Entre em contato com a i3TECH e agende uma demonstração gratuita. Nossa equipe está pronta para ajudar a transformar sua operação veicular.",
    images: ["/og-image.jpg"],
  },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
