import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const roobert = localFont({
  variable: "--font-roobert",
  src: [
    { path: "../public/fonts/RoobertTRIAL-Light-BF67243fd502239.otf",           weight: "300", style: "normal" },
    { path: "../public/fonts/RoobertTRIAL-LightItalic-BF67243fd51b2c9.otf",     weight: "300", style: "italic" },
    { path: "../public/fonts/RoobertTRIAL-Regular-BF67243fd53fdf2.otf",         weight: "400", style: "normal" },
    { path: "../public/fonts/RoobertTRIAL-RegularItalic-BF67243fd5414aa.otf",   weight: "400", style: "italic" },
    { path: "../public/fonts/RoobertTRIAL-Medium-BF67243fd53e059.otf",          weight: "500", style: "normal" },
    { path: "../public/fonts/RoobertTRIAL-MediumItalic-BF67243fd54022e.otf",    weight: "500", style: "italic" },
    { path: "../public/fonts/RoobertTRIAL-SemiBold-BF67243fd54213d.otf",        weight: "600", style: "normal" },
    { path: "../public/fonts/RoobertTRIAL-SemiBoldItalic-BF67243fd5409dc.otf",  weight: "600", style: "italic" },
    { path: "../public/fonts/RoobertTRIAL-Bold-BF67243fd540abb.otf",            weight: "700", style: "normal" },
    { path: "../public/fonts/RoobertTRIAL-BoldItalic-BF67243fd540e4b.otf",      weight: "700", style: "italic" },
    { path: "../public/fonts/RoobertTRIAL-Heavy-BF67243fd53e164.otf",           weight: "800", style: "normal" },
    { path: "../public/fonts/RoobertTRIAL-HeavyItalic-BF67243fd53f821.otf",     weight: "800", style: "italic" },
  ],
});

const BASE_URL = "https://www.i3tech.digital";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
    url: BASE_URL,
    siteName: "i3TECH",
    title: "i3TECH — CRM Inteligente para Operações Veiculares",
    description:
      "Centralize vendas, clientes e processos em uma única plataforma. A i3TECH conecta sua operação comercial à gestão completa do negócio.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "i3TECH" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "i3TECH — CRM Inteligente para Operações Veiculares",
    description:
      "Centralize vendas, clientes e processos em uma única plataforma. A i3TECH conecta sua operação comercial à gestão completa do negócio.",
    images: ["/og-image.png"],
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
      className={`${roobert.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-roobert), sans-serif" }}
      >
        {children}
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "i3TECH",
              url: "https://www.i3tech.digital",
              logo: "https://www.i3tech.digital/logo.svg",
              description:
                "Plataforma de CRM e gestão criada para organizar, automatizar e escalar operações veiculares.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                availableLanguage: "Portuguese",
                url: "https://www.i3tech.digital/contato",
              },
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
