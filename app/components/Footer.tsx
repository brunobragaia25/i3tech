"use client";

import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-center">
      <img src="/logo.svg" alt="i3TECH" style={{ height: 36, width: "auto" }} />
    </div>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Planos", href: "/planos" },
  { label: "Cases", href: "/cases" },
];

const solutions = [
  { label: "i3 Gestão",       href: "/solucoes/gestao" },
  { label: "i3 CRM",          href: "/solucoes/crm" },
  { label: "i3 MGA",          href: "/solucoes/mga" },
  { label: "i3 Aplicativos",  href: "/solucoes/aplicativos" },
  { label: "i3 Integrações",  href: "/solucoes/integracoes" },
  { label: "i3 Track",        href: "/solucoes/track" },
];

const features = [
  { label: "i3 Gestão", href: "/funcionalidades#gestao-comercial" },
  { label: "i3 CRM", href: "/funcionalidades#automacao-vendas" },
  { label: "i3 MGA", href: "/funcionalidades#gestao-clientes" },
  { label: "i3 Aplicativos", href: "/funcionalidades#financeiro" },
  { label: "i3 Integrações", href: "/funcionalidades#relatorios" },
  { label: "i3 Track", href: "/funcionalidades#chatbot" },
];

const empresasDoGrupo = [
  { label: "Delta", href: "#" },
  { label: "Proo Comercial", href: "#" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/i3tech.digital/?hl=pt",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/i3tech-digital/?viewAsMember=true",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1280px] mx-auto px-5 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[200px_repeat(5,1fr)] gap-6 md:gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4" style={{ maxWidth: 200 }}>
            <Logo />
            <p
              className="text-[14px] leading-relaxed max-w-[220px]"
              style={{ color: "#737373", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Com a i3Tech, a sua empresa conseguirá otimizar operações comerciais, gestão administrativa e financeira e gestão de ativos em campo.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#737373] hover:text-white hover:border-[#1956f3] transition-colors"
                  style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {s.icon}
                </Link>
              ))}
            </div>

          </div>

          {/* Navegue */}
          <div>
            <h4
              className="font-medium text-[14px] mb-5"
              style={{ color: "#1956f3", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Navegue
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#737373] hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4
              className="font-medium text-[14px] mb-5"
              style={{ color: "#1956f3", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Soluções
            </h4>
            <ul className="flex flex-col gap-3">
              {solutions.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-[14px] text-[#737373] hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Funcionalidades */}
          <div>
            <h4
              className="font-medium text-[14px] mb-5"
              style={{ color: "#1956f3", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Funcionalidades
            </h4>
            <ul className="flex flex-col gap-3">
              {features.map((f) => (
                <li key={f.label}>
                  <Link
                    href={f.href}
                    className="text-[14px] text-[#737373] hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {f.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4
              className="font-medium text-[14px] mb-5"
              style={{ color: "#1956f3", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Contato
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { text: "+55 (31) 2510-8536",   href: "tel:+553125108536" },
                { text: "+55 (31) 99720-4995",  href: "tel:+5531997204995" },
                { text: "R. Batista Santiago, 81 - Liberdade, Belo Horizonte - MG, 31270-230", href: "https://maps.google.com/?q=R.+Batista+Santiago,+81,+Belo+Horizonte" },
                { text: "comercial@i3tech.digital", href: "mailto:comercial@i3tech.digital" },
              ].map((c) => (
                <li key={c.text}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[14px] text-[#737373] hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {c.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresas do grupo */}
          <div>
            <h4
              className="font-medium text-[14px] mb-5"
              style={{ color: "#1956f3", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Empresas do grupo
            </h4>
            <ul className="flex flex-col gap-3 mb-5">
              {empresasDoGrupo.map((e) => (
                <li key={e.label}>
                  <Link
                    href={e.href}
                    className="text-[14px] text-[#737373] hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <a href="https://apps.apple.com/br/app/i3-consultor/id6775567429" target="_blank" rel="noopener noreferrer" aria-label="Baixar na App Store"
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-[8px] transition-opacity hover:opacity-80"
                style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)", width: "100%" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  <div style={{ color: "#737373", fontSize: 9, lineHeight: 1 }}>Disponível na</div>
                  <div style={{ color: "#f7f7f7", fontSize: 12, fontWeight: 600, lineHeight: 1.4 }}>App Store</div>
                </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Baixar no Google Play"
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-[8px] transition-opacity hover:opacity-80"
                style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)", width: "100%" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M3.18 23.76c.3.17.64.22.99.15l11.55-11.55-3.26-3.26L3.18 23.76zM20.56 10.4l-2.7-1.54-3.64 3.64 3.64 3.64 2.72-1.55c.78-.44.78-1.75-.02-2.19zM2.01 1.05C1.99 1.18 2 1.32 2 1.46v21.08c0 .14.01.28.03.41l11.42-11.42L2.01 1.05zM14.46 12.53l-11.3-11.3c-.17-.1-.35-.17-.54-.19l11.1 11.1.74-.74v.13z"/></svg>
                <div style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  <div style={{ color: "#737373", fontSize: 9, lineHeight: 1 }}>Disponível no</div>
                  <div style={{ color: "#f7f7f7", fontSize: 12, fontWeight: 600, lineHeight: 1.4 }}>Google Play</div>
                </div>
              </a>
            </div>
          </div>

        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-2 text-[13px]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)", color: "#4a4a4a", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          <span>© {new Date().getFullYear()} i3TECH. Todos os direitos reservados.</span>
          <span className="flex items-center gap-2">
            Desenvolvido por
            <a href="https://www.devzdesign.com.br" target="_blank" rel="noopener noreferrer">
              <img src="/logo-devz.svg" alt="devz" style={{ height: 16, width: "auto" }} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
