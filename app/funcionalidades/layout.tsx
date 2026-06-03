import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funcionalidades",
  description:
    "Gestão Comercial (CRM), Automação de Vendas, Gestão de Clientes, Financeiro e Comissões, Relatórios e Integrações — tudo em uma plataforma para operações veiculares.",
  keywords: [
    "funcionalidades CRM",
    "gestão comercial",
    "automação de vendas",
    "gestão de clientes",
    "financeiro e comissões",
    "relatórios integração",
    "i3TECH funcionalidades",
  ],
  alternates: { canonical: "https://www.i3tech.digital/funcionalidades" },
  openGraph: {
    title: "Funcionalidades | i3TECH",
    description:
      "Gestão Comercial (CRM), Automação de Vendas, Gestão de Clientes, Financeiro e Comissões, Relatórios e Integrações — tudo em uma plataforma.",
    images: [{ url: "/foto-cta-funcionalidades.png", width: 1200, height: 630, alt: "Funcionalidades i3TECH" }],
  },
  twitter: {
    title: "Funcionalidades | i3TECH",
    description:
      "Gestão Comercial (CRM), Automação de Vendas, Gestão de Clientes, Financeiro e Comissões, Relatórios e Integrações — tudo em uma plataforma.",
    images: ["/foto-cta-funcionalidades.png"],
  },
};

export default function FuncionalidadesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
