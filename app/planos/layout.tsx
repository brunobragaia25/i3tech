import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos e Preços",
  description:
    "Conheça os planos da i3TECH e encontre a solução ideal para o tamanho e as necessidades da sua operação veicular. Comece gratuitamente.",
  keywords: [
    "planos i3TECH",
    "preços CRM veicular",
    "plano CRM",
    "assinatura i3TECH",
    "planos gestão veicular",
  ],
  alternates: { canonical: "https://www.i3tech.digital/planos" },
  openGraph: {
    title: "Planos e Preços | i3TECH",
    description:
      "Conheça os planos da i3TECH e encontre a solução ideal para o tamanho e as necessidades da sua operação veicular. Comece gratuitamente.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Planos i3TECH" }],
  },
  twitter: {
    title: "Planos e Preços | i3TECH",
    description:
      "Conheça os planos da i3TECH e encontre a solução ideal para o tamanho e as necessidades da sua operação veicular. Comece gratuitamente.",
    images: ["/og-image.jpg"],
  },
};

export default function PlanosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
