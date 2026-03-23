import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a i3TECH, a plataforma de CRM e gestão criada para transformar operações veiculares com tecnologia, inteligência e foco em resultados.",
  keywords: ["sobre i3TECH", "empresa CRM veicular", "quem somos", "i3TECH história"],
  openGraph: {
    title: "Sobre Nós | i3TECH",
    description:
      "Conheça a i3TECH, a plataforma de CRM e gestão criada para transformar operações veiculares com tecnologia, inteligência e foco em resultados.",
  },
  twitter: {
    title: "Sobre Nós | i3TECH",
    description:
      "Conheça a i3TECH, a plataforma de CRM e gestão criada para transformar operações veiculares com tecnologia, inteligência e foco em resultados.",
  },
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
