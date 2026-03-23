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
  { label: "Soluções", href: "/solucoes" },
  { label: "Planos", href: "/planos" },
  { label: "Cases", href: "/cases" },
];

const solutions = [
  { label: "i3 CRM", href: "#" },
  { label: "i3 Gestão", href: "#" },
  { label: "i3 Mga", href: "#" },
  { label: "i3 Truck", href: "#" },
  { label: "i3 Expansão", href: "#" },
  { label: "Aplicativos", href: "#" },
];

const features = [
  { label: "Gestão Comercial", href: "#" },
  { label: "Automação de Vendas", href: "#" },
  { label: "Gestão de Clientes", href: "#" },
  { label: "Financeiro & Comissões", href: "#" },
  { label: "Relatórios & Integrações", href: "#" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
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
    href: "#",
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Logo />
            <p
              className="text-[14px] leading-relaxed max-w-[220px]"
              style={{ color: "#737373", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              CRM inteligente para operações veiculares que precisam{" "}
              <span style={{ color: "#3385ff" }}>vender, organizar e escalar</span>
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
              {["+55 11 99999 9999", "+55 11 99999 9998", "Rua Seu endereço aqui, 000", "contato@i3tech.com.br"].map((c) => (
                <li key={c}>
                  <span
                    className="text-[14px]"
                    style={{ color: "#737373", fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {c}
                  </span>
                </li>
              ))}
            </ul>
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
