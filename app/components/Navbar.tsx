"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Soluções", href: "/solucoes" },
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

  return (
    <>
      <nav
        className="w-full sticky top-0 z-50 backdrop-blur-md"
        style={{
          background: "rgba(13,13,13,0.92)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 h-16 flex items-center justify-between gap-8">
          <Logo />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[14px] whitespace-nowrap transition-colors duration-200 hover:text-white after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                style={{ color: "#a0a0a0", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block shrink-0">
            <Link
              href="/contato"
              className="text-[14px] text-[#f7f7f7] px-5 py-[10px] rounded-lg hover:bg-[#1444cc] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:brightness-110 hover:shadow-[0_8px_24px_rgba(25,86,243,0.4)]"
              style={{
                background: "#1956f3",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0px 2px 5px rgba(31,36,40,0.25)",
                fontFamily: "var(--font-dm-sans), sans-serif",
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

      {/* Mobile menu — fixed overlay outside nav stacking context */}
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[18px] py-1 transition-all duration-200 hover:text-white hover:translate-x-1"
                style={{ color: "#a0a0a0", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setMobileOpen(false)}
              className="text-[16px] text-[#f7f7f7] px-5 py-3 rounded-lg text-center mt-2 hover:bg-[#1444cc] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:brightness-110 hover:shadow-[0_8px_24px_rgba(25,86,243,0.4)]"
              style={{
                background: "#1956f3",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Falar conosco
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
