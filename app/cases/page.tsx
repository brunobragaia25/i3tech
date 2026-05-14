"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedHeading from "../components/AnimatedHeading";

const IMG_ARROW_PREV = "/arrow-left.svg";
const IMG_ARROW_NEXT = "/arrow-right.svg";
const IMG_FLAG = "/flag.svg";
const IMG_CHECK = "/circle-check-big.svg";

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
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center"
        style={{ height: 540, padding: "0 20px", gap: 20 }}
      >
        <AnimatedHeading
          as="h1"
          style={{
            color: "#3385ff",
            fontSize: 48,
            fontFamily: "var(--font-roobert), sans-serif",
            fontWeight: 400,
            lineHeight: "normal",
            margin: 0,
          }}
        >
          Cases
        </AnimatedHeading>
        <p style={{ color: "#fff", fontSize: 20, fontFamily: "var(--font-roobert), sans-serif", fontWeight: 400, lineHeight: 1.4, maxWidth: 616, margin: 0 }}>
          Conheça empresas que transformaram sua operação com a i3TECH.
        </p>
      </div>
    </section>
  );
}

/* ─── Case Cards ─────────────────────────────────── */
const cases = [
  {
    id: "01",
    empresa: "Empresa Alpha",
    solucao: "I3Gestão",
    descricao: "Centralização de processos financeiros e administrativos com visibilidade total da operação em tempo real.",
    resultado: "+130% eficiência",
  },
  {
    id: "02",
    empresa: "Empresa Beta",
    solucao: "I3CRM",
    descricao: "Gestão completa do funil comercial, automação de follow-ups e aumento expressivo na taxa de conversão.",
    resultado: "+85% conversão",
  },
  {
    id: "03",
    empresa: "Empresa Gamma",
    solucao: "I3MGA",
    descricao: "Modernização da gestão de seguros com rastreabilidade de apólices e relatórios automatizados.",
    resultado: "60% menos retrabalho",
  },
  {
    id: "04",
    empresa: "Empresa Delta",
    solucao: "I3Track",
    descricao: "Rastreamento de ativos em campo com alertas em tempo real e dashboards de desempenho da frota.",
    resultado: "+200% visibilidade",
  },
];

function CaseCard({ c, index }: { c: typeof cases[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex-1 flex flex-col rounded-[24px] overflow-hidden cursor-pointer"
      style={{
        background: "#141414",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "border-color 0.3s",
        borderColor: hovered ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.06)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image area */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: 280, background: "#0d1a33" }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 30% 40%, #1956f333 0%, transparent 70%)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Case number */}
        <span
          className="absolute bottom-5 left-6 font-bold leading-none select-none"
          style={{ fontSize: 80, color: "rgba(255,255,255,0.07)", fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1 }}
        >
          {c.id}
        </span>
        {/* Solution badge */}
        <span
          className="absolute top-5 left-6 px-3 py-1 rounded-full text-[12px] font-semibold"
          style={{
            background: "rgba(25,86,243,0.15)",
            border: "1px solid rgba(25,86,243,0.4)",
            color: "#66a3ff",
            fontFamily: "var(--font-dm-sans), sans-serif",
            backdropFilter: "blur(8px)",
          }}
        >
          {c.solucao}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex flex-col gap-1">
          <span
            className="text-[12px] font-semibold uppercase tracking-widest"
            style={{ color: "#555", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Cliente
          </span>
          <h3
            className="text-[20px] font-semibold"
            style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            {c.empresa}
          </h3>
        </div>
        <p
          className="text-[14px] leading-relaxed flex-1"
          style={{ color: "#888", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          {c.descricao}
        </p>
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span
            className="text-[18px] font-bold"
            style={{ color: "#1956f3", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            {c.resultado}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function CasesGrid() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 pt-16 md:pt-[108px] pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <CaseCard key={c.id} c={c} index={i} />
          ))}
        </div>
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
      className="flex-shrink-0 w-full rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row gap-8 md:gap-16 items-stretch"
      style={{ background: "#f0f2ef", height: 610 }}
    >
      {/* Quote + author */}
      <div className="flex-1 flex flex-col justify-between" style={{ height: "100%" }}>
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
      <div className="flex-1 flex flex-col justify-between" style={{ gap: 40 }}>
        <div className="flex gap-6 items-start">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1">
            <path d="M4 22V4C4 3.84475 4.03614 3.69164 4.10557 3.55279C4.175 3.41393 4.2758 3.29315 4.4 3.2C5.43858 2.42107 6.70178 2 8 2C11 2 13 4 15.333 4C16.6663 4 17.6887 3.73333 18.4 3.2C18.5486 3.08857 18.7252 3.02072 18.9102 3.00404C19.0952 2.98736 19.2811 3.02252 19.4472 3.10557C19.6133 3.18863 19.753 3.31629 19.8507 3.47427C19.9483 3.63224 20 3.81429 20 4V14C20 14.1552 19.9639 14.3084 19.8944 14.4472C19.825 14.5861 19.7242 14.7069 19.6 14.8C18.5614 15.5789 17.2982 16 16 16C13 16 11 14 8 14C6.52412 14 5.10002 14.544 4 15.528" />
          </svg>
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <path d="M21.8006 9.99999C22.2573 12.2413 21.9318 14.5714 20.8785 16.6018C19.8251 18.6322 18.1075 20.24 16.0121 21.1573C13.9167 22.0746 11.5702 22.2458 9.36391 21.6424C7.15758 21.0389 5.2248 19.6974 3.88789 17.8414C2.55097 15.9854 1.89073 13.7272 2.01728 11.4434C2.14382 9.15952 3.04949 6.98808 4.58326 5.29116C6.11703 3.59424 8.18619 2.47442 10.4457 2.11844C12.7052 1.76247 15.0184 2.19185 16.9996 3.33499M8.99961 11L11.9996 14L21.9996 3.99999" />
          </svg>
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
  const canPrev = current > 0;
  const canNext = current < total - 1;

  function prev() { if (canPrev) setCurrent((c) => c - 1); }
  function next() { if (canNext) setCurrent((c) => c + 1); }

  return (
    <section style={{ background: "#0d0d0d" }}>
      <FadeUp className="flex flex-col gap-12 py-10 md:py-16">
        {/* Header — constrained */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-5 w-full flex items-end justify-between">
          <h2
            className="text-[32px] md:text-[60px] font-medium leading-[1.17] tracking-[-0.5px] md:tracking-[-1.5px] max-w-[818px]"
            style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Empresas que transformaram sua operação com a i3TECH
          </h2>
          <div className="flex gap-4 shrink-0">
            <button
              onClick={prev}
              disabled={!canPrev}
              className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-150 hover:opacity-80 active:scale-[0.95]"
              style={{ background: "#0052e6", opacity: canPrev ? 1 : 0.3, cursor: canPrev ? "pointer" : "not-allowed" }}
              aria-label="Anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f7f7f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18L9 12L15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-150 hover:opacity-80 active:scale-[0.95]"
              style={{ background: "#0052e6", opacity: canNext ? 1 : 0.3, cursor: canNext ? "pointer" : "not-allowed" }}
              aria-label="Próximo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f7f7f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18L15 12L9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards — full width, slide */}
        <div style={{ width: "100%", overflow: "hidden", paddingBottom: 80 }}>
          <div
            style={{
              display: "flex",
              gap: 20,
              paddingLeft: 20,
              paddingRight: 20,
              transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
              transform: `translateX(calc(-${current} * (1240px + 20px)))`,
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} style={{ minWidth: 1240, width: 1240 }}>
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
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
