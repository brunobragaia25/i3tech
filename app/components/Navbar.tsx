"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ICON_BG_BLUE   = "blue";
const ICON_BG_PURPLE = "purple";
const IMG_ICON_GESTAO    = "/Layers 1.svg";
const IMG_ICON_CRM       = "/Sort.svg";
const IMG_ICON_MGA       = "/Chart.svg";
const IMG_ICON_APP       = "/Smartphone 3.svg";
const IMG_ICON_TRACK     = "/Map Point Wave.svg";
const IMG_ICON_EXPANSAO  = "/Dialog 3.svg";

const solutionCols = [
  [
    { label: "I3Gestão",   desc: "Plataforma ERP (Gestão empresarial)",  href: "/solucoes/gestao",      iconBg: ICON_BG_BLUE,   icon: IMG_ICON_GESTAO },
    { label: "I3CRM",      desc: "Sistema CRM (Gestão Comercial)",        href: "/solucoes/crm",         iconBg: ICON_BG_BLUE,   icon: IMG_ICON_CRM },
    { label: "I3Mga",      desc: "Sistema MGA (Gestão de Seguros)",       href: "/solucoes/mga",         iconBg: ICON_BG_BLUE, icon: IMG_ICON_MGA },
  ],
  [
    { label: "I3Aplicativos", desc: "Apps personalizados e customizados", href: "/solucoes/aplicativos", iconBg: ICON_BG_BLUE,   icon: IMG_ICON_APP },
    { label: "I3Track",    desc: "Plataforma de rastreamento completa",   href: "/solucoes/track",       iconBg: ICON_BG_BLUE, icon: IMG_ICON_TRACK },
    { label: "I3Integrações", desc: "Integrações de chatbot e IA",         href: "/solucoes/integracoes",    iconBg: ICON_BG_BLUE,   icon: IMG_ICON_EXPANSAO },
  ],
];

// keep solutions flat for footer/other usages
const solutions = solutionCols.flat();

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Soluções", href: "/solucoes", dropdown: true },
  { label: "Funcionalidades", href: "/funcionalidades" },
  { label: "Planos", href: "/planos" },
  { label: "Cases", href: "/cases" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0">
      <img src="/logo.svg" alt="i3TECH" style={{ height: 36, width: "auto" }} />
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (!dropdownOpen) return;
    function handleScroll() { setDropdownOpen(false); }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dropdownOpen]);


  return (
    <>
      <div
        className="w-full"
        style={{
          background: "rgba(13,13,13,0.92)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <nav style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="px-5 h-16 flex items-center justify-between gap-8">
            <Logo />

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-7 flex-1 justify-center">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.href} ref={ref} className="relative">
                    <button
                      onClick={() => setDropdownOpen((v) => !v)}
                      className="flex items-center gap-1 text-[14px] whitespace-nowrap transition-colors duration-200 hover:text-white"
                      style={{
                        color: dropdownOpen ? "#fff" : "#a0a0a0",
                        fontFamily: "var(--font-roobert), sans-serif",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      {link.label}
                      <svg
                        width="12" height="12" viewBox="0 0 12 12" fill="none"
                        style={{ transition: "transform 0.25s", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <div style={{ position: "fixed", top: 108, left: "50%", transform: "translateX(-50%)", zIndex: 9999 }}>
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          style={{
                            width: 1260,
                            background: "#171717",
                            border: "1px solid #242424",
                            borderRadius: 32,
                            padding: 40,
                            display: "flex",
                            gap: 40,
                            zIndex: 9999,
                            boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
                          }}
                        >
                          {/* Left blue card */}
                          <div style={{
                            background: "#0052E6",
                            borderRadius: 20,
                            paddingRight: 40,
                            width: 547,
                            minWidth: 547,
                            display: "flex",
                            flexDirection: "row",
                            gap: 24,
                            alignItems: "stretch",
                            minHeight: 220,
                          }}>
                            {/* Foto */}
                            <div style={{
                              width: 260,
                              minWidth: 260,
                              borderTopLeftRadius: 12,
                              borderBottomLeftRadius: 12,
                              overflow: "hidden",
                              flexShrink: 0,
                            }}>
                              <img src="/foto-cta-dropdown.jpeg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                            </div>

                            {/* Texto + botão */}
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 32, flex: 1, paddingTop: 40, paddingBottom: 40, width: "100%" }}>
                            <p style={{
                              color: "#f7f7f7",
                              fontSize: 22,
                              lineHeight: 1.4,
                              fontFamily: "var(--font-roobert), sans-serif",
                              fontWeight: 400,
                              margin: 0,
                              whiteSpace: "pre-line",
                            }}>
                              Está interessado{"\n"}em alguma de{"\n"}nossas soluções?
                            </p>
                            <div style={{ position: "relative", borderRadius: 6, padding: 2, overflow: "hidden", alignSelf: "flex-start" }}>
                              <motion.div
                                style={{
                                  position: "absolute",
                                  inset: "-150%",
                                  background: "conic-gradient(from 0deg, transparent 0%, transparent 65%, #66a3ff 78%, #ffffff 83%, #66a3ff 88%, transparent 100%)",
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                              />
                              <Link
                                href="/contato"
                                onClick={() => setDropdownOpen(false)}
                                style={{
                                  position: "relative",
                                  zIndex: 10,
                                  background: "#f7f7f7",
                                  borderRadius: 4,
                                  padding: "14px 20px",
                                  color: "#242424",
                                  fontSize: 14,
                                  fontFamily: "var(--font-roobert), sans-serif",
                                  fontWeight: 600,
                                  textAlign: "center",
                                  display: "inline-block",
                                  boxShadow: "0px 2px 5px rgba(31,36,40,0.25)",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Agende uma demonstração
                              </Link>
                            </div>
                            </div>
                          </div>

                          {/* Right solutions list */}
                          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 40 }}>
                            <p style={{
                              color: "#888",
                              fontSize: 14,
                              letterSpacing: "1.68px",
                              fontFamily: "var(--font-roobert), sans-serif",
                              fontWeight: 600,
                              margin: 0,
                              textTransform: "uppercase",
                            }}>
                              Soluções
                            </p>
                            <div style={{ display: "flex", gap: 60, flex: 1 }}>
                              {solutionCols.map((col, ci) => (
                                <div key={ci} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 28 }}>
                                  {col.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => setDropdownOpen(false)}
                                      className="flex items-center gap-3 group rounded-[12px] px-3 py-2 -mx-3 transition-all duration-200 hover:bg-white/5"
                                      style={{ textDecoration: "none" }}
                                    >
                                      <div className="shrink-0 relative" style={{ width: 40, height: 40 }}>
                                        <div style={{
                                          position: "absolute", inset: 0, borderRadius: "50%",
                                          border: `1.5px solid ${item.iconBg === "blue" ? "rgba(55,135,255,0.7)" : "rgba(160,80,255,0.7)"}`,
                                          background: item.iconBg === "blue" ? "rgba(55,135,255,0.08)" : "rgba(160,80,255,0.08)",
                                          boxShadow: item.iconBg === "blue" ? "0 0 8px 2px rgba(55,135,255,0.15)" : "0 0 8px 2px rgba(160,80,255,0.15)",
                                        }} />
                                        <img src={item.icon} alt="" style={{ position: "absolute", inset: "25%", width: "50%", height: "50%" }} />
                                      </div>
                                      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                        <span className="group-hover:text-white transition-colors" style={{ color: "#f7f7f7", fontSize: 14, fontFamily: "var(--font-roobert), sans-serif", fontWeight: 600 }}>
                                          {item.label}
                                        </span>
                                        <span style={{ color: "#888", fontSize: 12, fontFamily: "var(--font-roobert), sans-serif" }}>
                                          {item.desc}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative text-[14px] whitespace-nowrap transition-colors duration-200 hover:text-white after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    style={{ color: "#a0a0a0", fontFamily: "var(--font-roobert), sans-serif" }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden md:block shrink-0" style={{ position: "relative", borderRadius: 6, padding: 2, overflow: "hidden" }}>
              <motion.div
                style={{
                  position: "absolute",
                  inset: "-150%",
                  background: "conic-gradient(from 0deg, transparent 0%, transparent 65%, #66a3ff 78%, #ffffff 83%, #66a3ff 88%, transparent 100%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <Link
                href="/contato"
                className="relative z-10 text-[14px] text-[#f7f7f7] px-5 rounded-[4px] hover:bg-[#1444cc] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:brightness-110"
                style={{
                  background: "#1956f3",
                  fontFamily: "var(--font-roobert), sans-serif",
                  height: 42,
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Falar conosco
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2 flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
              aria-label="Menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[2px] w-5 bg-white origin-center rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-[2px] w-5 bg-white rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[2px] w-5 bg-white origin-center rounded-full"
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 z-50 flex flex-col px-5 pt-8 pb-10 gap-6 overflow-y-auto"
            style={{ background: "#111" }}
          >
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileSolOpen((v) => !v)}
                    className="w-full flex items-center justify-between text-[18px] py-1 transition-colors duration-200 hover:text-white"
                    style={{ color: "#a0a0a0", fontFamily: "var(--font-roobert), sans-serif", background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}
                  >
                    {link.label}
                    <svg
                      width="14" height="14" viewBox="0 0 12 12" fill="none"
                      style={{ transition: "transform 0.25s", transform: mobileSolOpen ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
                    >
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileSolOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="flex flex-col gap-1 pt-3 pl-3">
                          {solutions.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => { setMobileOpen(false); setMobileSolOpen(false); }}
                              className="flex items-center gap-3 py-2 px-3 rounded-xl transition-colors duration-200 hover:bg-white/5"
                              style={{ textDecoration: "none" }}
                            >
                              <div className="shrink-0 relative" style={{ width: 36, height: 36 }}>
                                <div style={{
                                  position: "absolute", inset: 0, borderRadius: "50%",
                                  border: `1.5px solid ${s.iconBg === "blue" ? "rgba(55,135,255,0.7)" : "rgba(160,80,255,0.7)"}`,
                                  background: s.iconBg === "blue" ? "rgba(55,135,255,0.08)" : "rgba(160,80,255,0.08)",
                                  boxShadow: s.iconBg === "blue" ? "0 0 8px 2px rgba(55,135,255,0.15)" : "0 0 8px 2px rgba(160,80,255,0.15)",
                                }} />
                                <img src={s.icon} alt="" style={{ position: "absolute", inset: "25%", width: "50%", height: "50%" }} />
                              </div>
                              <div className="flex flex-col gap-0.5">
                                <span className="text-[15px] font-semibold" style={{ color: "#f7f7f7", fontFamily: "var(--font-roobert), sans-serif" }}>{s.label}</span>
                                <span className="text-[12px]" style={{ color: "#888", fontFamily: "var(--font-roobert), sans-serif" }}>{s.desc}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[18px] py-1 transition-all duration-200 hover:text-white hover:translate-x-1"
                  style={{ color: "#a0a0a0", fontFamily: "var(--font-roobert), sans-serif" }}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contato"
              onClick={() => setMobileOpen(false)}
              className="text-[16px] text-[#f7f7f7] px-5 py-3 rounded-lg text-center mt-2 hover:bg-[#1444cc] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:brightness-110 hover:shadow-[0_8px_24px_rgba(25,86,243,0.4)]"
              style={{ background: "#1956f3", fontFamily: "var(--font-roobert), sans-serif" }}
            >
              Falar conosco
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
