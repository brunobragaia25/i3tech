import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a i3TECH, a plataforma de CRM e gestão criada para transformar operações veiculares com tecnologia, inteligência e foco em resultados.",
  keywords: ["sobre i3TECH", "empresa CRM veicular", "quem somos", "i3TECH história"],
  alternates: { canonical: "https://www.i3tech.digital/sobre" },
  openGraph: {
    title: "Sobre Nós | i3TECH",
    description:
      "Conheça a i3TECH, a plataforma de CRM e gestão criada para transformar operações veiculares com tecnologia, inteligência e foco em resultados.",
    images: [{ url: "/foto-cta-sobre.png", width: 1200, height: 630, alt: "Sobre a i3TECH" }],
  },
  twitter: {
    title: "Sobre Nós | i3TECH",
    description:
      "Conheça a i3TECH, a plataforma de CRM e gestão criada para transformar operações veiculares com tecnologia, inteligência e foco em resultados.",
    images: ["/foto-cta-sobre.png"],
  },
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
