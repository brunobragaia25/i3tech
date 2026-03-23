import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "i3TECH — CRM Inteligente para Operações Veiculares",
    template: "%s | i3TECH",
  },
  description:
    "Centralize vendas, clientes e processos em uma única plataforma. A i3TECH conecta sua operação comercial à gestão completa do negócio.",
  keywords: [
    "CRM veicular",
    "gestão comercial",
    "automação de vendas",
    "operações veiculares",
    "gestão de clientes",
    "funil de vendas",
    "i3TECH",
    "software veicular",
  ],
  authors: [{ name: "i3TECH" }],
  creator: "i3TECH",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "i3TECH",
    title: "i3TECH — CRM Inteligente para Operações Veiculares",
    description:
      "Centralize vendas, clientes e processos em uma única plataforma. A i3TECH conecta sua operação comercial à gestão completa do negócio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "i3TECH — CRM Inteligente para Operações Veiculares",
    description:
      "Centralize vendas, clientes e processos em uma única plataforma. A i3TECH conecta sua operação comercial à gestão completa do negócio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${inter.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
