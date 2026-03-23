import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases de Clientes",
  description:
    "Conheça empresas que transformaram sua operação com a i3TECH. Resultados reais de clientes que cresceram com organização, automação e inteligência comercial.",
  keywords: [
    "cases i3TECH",
    "clientes i3TECH",
    "resultados CRM veicular",
    "histórias de sucesso",
    "depoimentos i3TECH",
  ],
  openGraph: {
    title: "Cases de Clientes | i3TECH",
    description:
      "Conheça empresas que transformaram sua operação com a i3TECH. Resultados reais de clientes que cresceram com organização, automação e inteligência comercial.",
  },
  twitter: {
    title: "Cases de Clientes | i3TECH",
    description:
      "Conheça empresas que transformaram sua operação com a i3TECH. Resultados reais de clientes que cresceram com organização, automação e inteligência comercial.",
  },
};

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
