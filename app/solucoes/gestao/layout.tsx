import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "i3 Gestão — Plataforma Completa para Associações",
  description:
    "Gerencie clientes, contratos, cobranças, vistorias e sinistros em um único lugar. O i3 Gestão é a plataforma completa para associações de proteção veicular.",
  keywords: [
    "gestão de associação",
    "software proteção veicular",
    "gestão de contratos",
    "cobrança automática",
    "i3 Gestão",
    "plataforma associação veicular",
  ],
  openGraph: {
    title: "i3 Gestão — Plataforma Completa para Associações | i3TECH",
    description:
      "Gerencie clientes, contratos, cobranças, vistorias e sinistros em um único lugar. O i3 Gestão é a plataforma completa para associações de proteção veicular.",
  },
  twitter: {
    title: "i3 Gestão — Plataforma Completa para Associações | i3TECH",
    description:
      "Gerencie clientes, contratos, cobranças, vistorias e sinistros em um único lugar. O i3 Gestão é a plataforma completa para associações de proteção veicular.",
  },
};

export default function GestaoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
