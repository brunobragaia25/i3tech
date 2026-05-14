"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const IMG_ARROW_PREV = "https://www.figma.com/api/mcp/asset/44cb6d13-e65d-45c8-a74d-1c07349be3e8";
const IMG_ARROW_NEXT = "https://www.figma.com/api/mcp/asset/77205470-99b0-4432-986d-6af2ca0812fd";
const IMG_FLAG = "https://www.figma.com/api/mcp/asset/6235f9f1-2180-4c4f-a571-1cec1c01ac30";
const IMG_CHECK = "https://www.figma.com/api/mcp/asset/4d506ffd-4242-4d09-b007-5cbdf891c4a6";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Hero ─────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bg-pages.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center" style={{ height: 540, padding: "0 20px", gap: 20 }}>
        <h1 style={{ color: "#3385ff", fontSize: 48, fontFamily: "var(--font-roobert), sans-serif", fontWeight: 400, lineHeight: "normal", margin: 0 }}>
          Cases de clientes
        </h1>
        <p style={{ color: "#fff", fontSize: 20, fontFamily: "var(--font-roobert), sans-serif", fontWeight: 400, lineHeight: 1.4, maxWidth: 616, margin: 0 }}>
          Conheça empresas que transformaram sua operação com a i3TECH.
        </p>
      </div>
    </section>
  );
}

/* ─── Case Cards ─────────────────────────────────── */
const cases = [
  { id: "01", label: "Case 01" },
  { id: "02", label: "Case 02" },
  { id: "03", label: "Case 03" },
  { id: "04", label: "Case 04" },
];

function CaseCard({ c }: { c: typeof cases[0] }) {
  return (
    <div className="flex-1 flex flex-col gap-10">
      <div
        className="w-full rounded-[32px] h-[200px] md:h-[400px]"
        style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)" }}
      />
      <div className="flex flex-col gap-5">
        <h3
          className="text-[28px] font-semibold"
          style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          {c.label}
        </h3>
        <p
          className="text-[20px] leading-normal"
          style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius nisl sed odio consequat placerat pulvinar vitae nulla. Cras euismod interdum finibus. Praesent ullamcorper tincidunt mauris a semper
        </p>
        <div
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg cursor-pointer hover:brightness-110 transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
          style={{
            background: "#171717",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0px 2px 5px rgba(31,36,40,0.25)",
            width: "fit-content",
          }}
        >
          <span
            className="text-[14px]"
            style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Veja mais
          </span>
        </div>
      </div>
    </div>
  );
}

function CasesGrid() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 pt-16 md:pt-[108px] pb-16 flex flex-col gap-16">
        <FadeUp className="flex flex-col md:flex-row gap-5">
          <CaseCard c={cases[0]} />
          <CaseCard c={cases[1]} />
        </FadeUp>
        <FadeUp className="flex flex-col md:flex-row gap-5">
          <CaseCard c={cases[2]} />
          <CaseCard c={cases[3]} />
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Testimonial Slider ─────────────────────────── */
const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius nisl sed odio consequat placerat pulvinar vitae nulla. Cras euismod interdum finibus. Praesent ullamcorper tincidunt mauris a semper",
    company: "DEVZDESIGN",
    author: "Bruno Bragaia, CEO of DevzDesign",
    desafio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    solucao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    resultado: "Crescimento de 130%",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius nisl sed odio consequat placerat pulvinar vitae nulla. Cras euismod interdum finibus. Praesent ullamcorper tincidunt mauris a semper",
    company: "EMPRESA XYZ",
    author: "João Silva, CEO of Empresa XYZ",
    desafio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    solucao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    resultado: "Crescimento de 200%",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="flex-shrink-0 w-full rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row gap-8 md:gap-16 items-start"
      style={{ background: "#f0f2ef" }}
    >
      {/* Quote + author */}
      <div className="flex-1 flex flex-col justify-between self-stretch">
        <p
          className="text-[28px] leading-[1.4]"
          style={{ color: "#1a1a1a", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          {t.quote}
        </p>
        <div className="flex flex-col gap-2">
          <span
            className="text-[20px] font-extrabold tracking-[1px] uppercase"
            style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            {t.company}
          </span>
          <span
            className="text-[14px] font-semibold"
            style={{ color: "#1a1a1a", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            {t.author}
          </span>
        </div>
      </div>
      {/* Divider */}
      <div className="hidden md:block self-stretch w-px shrink-0" style={{ background: "#d1d1d1" }} />
      {/* Desafio + Solução + Resultado */}
      <div className="flex-1 flex flex-col gap-12">
        <div className="flex gap-6 items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG_FLAG} alt="" className="w-6 h-6 shrink-0 mt-1" />
          <div className="flex flex-col gap-2">
            <span
              className="text-[18px] font-bold"
              style={{ color: "#1a1a1a", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Desafio
            </span>
            <p
              className="text-[16px] leading-[1.6]"
              style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              {t.desafio}
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG_CHECK} alt="" className="w-6 h-6 shrink-0" />
          <div className="flex flex-col gap-2">
            <span
              className="text-[18px] font-bold"
              style={{ color: "#1a1a1a", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Solução
            </span>
            <p
              className="text-[16px] leading-[1.6]"
              style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              {t.solucao}
            </p>
          </div>
        </div>
        <p
          className="text-[36px] font-bold mt-auto"
          style={{ color: "#003a99", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          {t.resultado}
        </p>
      </div>
    </div>
  );
}

function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  function prev() { setCurrent((c) => (c - 1 + total) % total); }
  function next() { setCurrent((c) => (c + 1) % total); }

  return (
    <section style={{ background: "#0d0d0d" }}>
      <FadeUp className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16 flex flex-col gap-16">
        <div className="flex items-end justify-between">
          <h2
            className="text-[32px] md:text-[60px] font-medium leading-[1.17] tracking-[-0.5px] md:tracking-[-1.5px] max-w-[818px]"
            style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Empresas que transformaram sua operação com a i3TECH
          </h2>
          <div className="flex gap-4 shrink-0">
            <button
              onClick={prev}
              className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-150 hover:opacity-80 active:scale-[0.95]"
              style={{ background: "#0052e6" }}
              aria-label="Anterior"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_ARROW_PREV} alt="" className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-150 hover:opacity-80 active:scale-[0.95]"
              style={{ background: "#0052e6" }}
              aria-label="Próximo"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_ARROW_NEXT} alt="" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="overflow-hidden w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <TestimonialCard t={testimonials[current]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </FadeUp>
    </section>
  );
}

export default function CasesPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Topbar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CasesGrid />
        <TestimonialsSlider />
      </main>
      <Footer />
    </div>
  );
}
