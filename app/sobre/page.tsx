"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const IMG_CHECK = "/Check Circle.svg";
const IMG_DIVIDER = "https://www.figma.com/api/mcp/asset/d3604ced-bb6c-474f-ad6d-a4040ea1238e";
const IMG_VINICIUS = "https://www.figma.com/api/mcp/asset/3615e55c-8ce3-40d9-b040-26107b5fab28";

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
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1340cc 0%, #0a2080 45%, #0d0d0d 100%)" }}
    >
      {/* Cross pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='57' height='57'%3E%3Cpath d='M28.5 22v13M22 28.5h13' stroke='rgba(255,255,255,0.1)' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundSize: "57px 57px",
        }}
      />
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-5 pt-16 pb-16 md:pt-[108px] md:pb-[128px] flex flex-col gap-[10px] items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[32px] md:text-[48px] leading-normal font-normal"
          style={{ color: "#3385ff", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Sobre a i3TECH
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-[16px] md:text-[20px] text-white"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Somos uma empresa de tecnologia especializada no desenvolvimento de soluções para operações veiculares.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Intro text ─────────────────────────────────── */
function IntroSection() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <FadeUp className="max-w-[1280px] mx-auto px-5 py-16 md:py-32 flex flex-col gap-16 items-center">
        {/* Top: Two columns */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-8 md:gap-16">
          {/* Left column - larger text */}
          <div className="flex-1 max-w-[640px]">
            <p className="text-[28px] md:text-[32px] leading-[1.4]" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Somos uma empresa de tecnologia do Grupo Brasil Atuarial, com o{" "}
              <span className="font-semibold" style={{ color: "#0052e6" }}>
                foco no desenvolvimento de inovações e produtos tecnológicos que envolvem a regra atuarial
              </span>
              .
            </p>
          </div>

          {/* Right column - smaller text */}
          <div className="text-right" style={{ width: 380 }}>
            <p className="text-[20px] leading-[1.4] font-light" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Desenvolvemos sistemas e aplicativos que conectam gestão empresarial, vendas e rastreamento inteligente para o nosso segmento.
            </p>
          </div>
        </div>

        {/* Divider */}
        <img src={IMG_DIVIDER} alt="" className="w-full" style={{ height: 1 }} />
      </FadeUp>
    </section>
  );
}

/* ─── Content sections ───────────────────────────── */
function ContentBlock({
  title,
  paragraphs,
  imageLeft,
  checklist,
  footnote,
}: {
  title: string;
  paragraphs: string[];
  imageLeft: boolean;
  checklist?: string[];
  footnote?: string;
}) {
  const textBlock = (
    <div className="flex-1 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h2
          className="text-[28px] md:text-[40px] font-semibold leading-[1.2]"
          style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          {title}
        </h2>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-[16px] md:text-[20px] leading-[1.4]"
            style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            {p}
          </p>
        ))}
      </div>
      {checklist && (
        <div className="flex flex-col gap-8">
          {checklist.map((item) => (
            <div key={item} className="flex items-center gap-5">
              <div className="flex items-center justify-center shrink-0" style={{ width: 24, height: 24, background: "#3385ff", borderRadius: "50%" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG_CHECK} alt="" className="w-4 h-4" />
              </div>
              <span
                className="text-[20px] leading-[1.4]"
                style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      )}
      {footnote && (
        <p
          className="text-[20px] leading-[1.4]"
          style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          {footnote}
        </p>
      )}
    </div>
  );

  const imageBlock = (
    <div
      className="flex-1 rounded-[12px] shrink-0 h-[300px] md:h-[500px] w-full"
      style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)" }}
    />
  );

  return (
    <section style={{ background: "#0d0d0d" }}>
      <FadeUp className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-[60px]">
        {imageLeft ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </FadeUp>
    </section>
  );
}

/* ─── Video Section ──────────────────────────────── */
function VideoSection() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <FadeUp className="max-w-[1280px] mx-auto px-5 pb-16 md:pb-20 flex items-center justify-center">
        <div
          className="w-full rounded-[16px] flex items-center justify-center p-2.5"
          style={{ background: "#cce0ff", minHeight: 680 }}
        >
          <div
            className="w-full rounded-lg flex items-center justify-center"
            style={{ background: "#242424", border: "1px solid rgba(51, 133, 255, 0.5)", minHeight: 660 }}
          >
            <button
              className="w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              style={{ background: "#3385ff" }}
              aria-label="Play video"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21" />
              </svg>
            </button>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

/* ─── Directors Section ──────────────────────────── */
function DirectorsSection() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <FadeUp className="max-w-[1280px] mx-auto px-4 md:px-5 pb-16 md:pb-32 flex flex-col gap-16 items-center">
        <h2
          className="text-[40px] font-semibold text-center"
          style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Nossa Diretoria
        </h2>

        <div className="w-full flex flex-col md:flex-row gap-6">
          {/* Enrico Neto */}
          <div
            className="flex-1 rounded-[20px] p-4 flex flex-col overflow-hidden"
            style={{ background: "#171717" }}
          >
            <div
              className="w-full h-[360px] rounded-[8px] mb-6"
              style={{ background: "#d9d9d9" }}
            />
            <div className="px-6 pb-6">
              <h3
                className="text-[24px] font-medium mb-3"
                style={{ color: "#3385ff", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Enrico Neto
              </h3>
              <p
                className="text-[12px] uppercase"
                style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Sócio e fundador da i3Tech (Em Execução)
              </p>
            </div>
          </div>

          {/* Vinicius da Costa */}
          <div
            className="flex-1 rounded-[20px] p-4 flex flex-col overflow-hidden"
            style={{ background: "#171717" }}
          >
            <div
              className="w-full h-[360px] rounded-[8px] mb-6 overflow-hidden"
              style={{ background: "#d9d9d9" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_VINICIUS}
                alt="Vinicius da Costa"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
            <div className="px-6 pb-6">
              <h3
                className="text-[24px] font-medium mb-3"
                style={{ color: "#3385ff", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Vinicius da Costa
              </h3>
              <p
                className="text-[12px] uppercase"
                style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Sócio e Diretor Comercial da i3Tech (Em Execução)
              </p>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

/* ─── Counter Component ──────────────────────────── */
function Counter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasStartedRef.current) return;

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedRef.current) {
            hasStartedRef.current = true;
            observer.disconnect();

            let start: number | null = null;
            const startAnimation = (timestamp: number) => {
              if (start === null) start = timestamp;
              const progress = Math.min((timestamp - start) / (duration * 1000), 1);
              const currentCount = Math.floor(progress * target);
              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(startAnimation);
              } else {
                setCount(target);
              }
            };

            requestAnimationFrame(startAnimation);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return <span ref={containerRef}>{count.toLocaleString("pt-BR")}</span>;
}

/* ─── Stats Section ──────────────────────────────── */
function StatsSection() {
  const stats = [
    {
      target: 2300,
      prefix: "+ de ",
      description: "entidade de proteção patrimonial mutualista;",
    },
    {
      target: 60000,
      prefix: "+ de ",
      description: "itens na gestão administrativa;",
    },
    {
      target: 3,
      prefix: "+ de ",
      description: "atendidos;",
    },
    {
      target: 45,
      prefix: "+ de ",
      description: "centrais utilizando nosso sistema.",
    },
  ];

  return (
    <section style={{ background: "#0d0d0d" }}>
      <FadeUp className="max-w-[1280px] mx-auto px-4 md:px-5 pb-16 flex flex-col gap-16 items-center">
        <h2
          className="text-[40px] font-semibold text-center"
          style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Nossa números falam por si só
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.target}
              className="rounded-[12px] p-8 flex flex-col justify-between min-h-[200px]"
              style={{ border: "1px solid #99c2ff", background: "#0d0d0d" }}
            >
              <h3
                className="text-[34px] font-bold"
                style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {stat.prefix}
                <Counter target={stat.target} duration={2} />
              </h3>
              <p
                className="text-[16px] font-semibold"
                style={{ color: "#66a3ff", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}

/* ─── CTA Banner ─────────────────────────────────── */
function CTABanner() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16">
        <FadeUp>
          <div
            className="relative overflow-hidden rounded-2xl px-6 py-10 md:px-16 md:py-14 flex items-center justify-between gap-10"
            style={{ background: "#1956f3", minHeight: 430 }}
          >
            <div className="flex flex-col gap-6 max-w-[540px]">
              <h2
                className="text-[24px] md:text-[36px] font-semibold leading-[1.2] text-white"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Pronto para se conectar no que a de mais inovador no segmento.
              </h2>
              <Link
                href="/#contato"
                className="inline-flex items-center px-6 py-3 rounded-lg text-[15px] font-medium transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg"
                style={{
                  background: "white",
                  color: "#1956f3",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  width: "fit-content",
                }}
              >
                Agende uma demonstração
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Topbar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IntroSection />
        <VideoSection />
        <DirectorsSection />
        <StatsSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
