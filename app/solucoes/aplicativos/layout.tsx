import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "i3 Aplicativos — Apps Mobile White Label",
  description:
    "Aplicativos mobile customizados para Android e iOS com a identidade da sua empresa. Apps para Associado, Consultor e Rastreamento Veicular.",
  keywords: [
    "aplicativo proteção veicular",
    "app associado",
    "app consultor",
    "white label mobile",
    "i3 Aplicativos",
    "app rastreamento veicular",
  ],
  openGraph: {
    title: "i3 Aplicativos — Apps Mobile White Label | i3TECH",
    description:
      "Aplicativos mobile customizados para Android e iOS com a identidade da sua empresa. Apps para Associado, Consultor e Rastreamento Veicular.",
  },
  twitter: {
    title: "i3 Aplicativos — Apps Mobile White Label | i3TECH",
    description:
      "Aplicativos mobile customizados para Android e iOS com a identidade da sua empresa. Apps para Associado, Consultor e Rastreamento Veicular.",
  },
};

export default function AplicativosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
