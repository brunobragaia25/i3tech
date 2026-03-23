"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

const IMG_CHECK = "https://www.figma.com/api/mcp/asset/96e8226e-d912-4853-8868-25853034b2c6";

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
      <FadeUp className="max-w-[1280px] mx-auto px-4 md:px-5 pt-16 md:pt-[128px] pb-16 flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16">
        <p
          className="text-[36px] leading-normal w-full md:max-w-[640px]"
          style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Criamos sistemas que{" "}
          <span className="font-semibold" style={{ color: "#0052e6" }}>
            conectam vendas, gestão e dados em um único ambiente
          </span>
          , ajudando empresas a organizar processos, ganhar eficiência e crescer com mais controle.
        </p>
        <p
          className="text-right text-[24px] leading-normal font-light"
          style={{ maxWidth: 424, color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Atuamos ao lado de negócios que{" "}
          <span style={{ color: "#888" }}>
            precisam de mais do que ferramentas isoladas — precisam de uma plataforma confiável
          </span>{" "}
          para sustentar a operação e a tomada de decisão.
        </p>
      </FadeUp>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5">
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
      </div>
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_CHECK} alt="" className="w-6 h-6 shrink-0" />
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

/* ─── CTA Banner ─────────────────────────────────── */
function CTABanner() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16">
        <FadeUp>
          <div
            className="relative overflow-hidden rounded-2xl px-6 py-10 md:px-16 md:py-14 flex items-center justify-between gap-10"
            style={{ background: "#1956f3" }}
          >
            <div className="flex flex-col gap-6 max-w-[540px]">
              <h2
                className="text-[24px] md:text-[36px] font-semibold leading-[1.2] text-white"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Pronto para transformar sua operação?
              </h2>
              <p
                className="text-[18px] leading-[1.4] text-white/80"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Agende uma demonstração e veja como a i3TECH pode impulsionar seu negócio.
              </p>
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
        <ContentBlock
          title="O que nós fazemos?"
          paragraphs={[
            "Desenvolvemos uma plataforma completa de CRM e gestão voltada para empresas do setor veicular, com foco em:",
          ]}
          imageLeft={true}
          checklist={[
            "Organização da operação comercial",
            "Automação de processos",
            "Centralização de dados",
            "Visão estratégica do negócio",
          ]}
          footnote="Tudo isso de forma simples, integrada e escalável."
        />
        <ContentBlock
          title="Tecnologia e propósito"
          paragraphs={[
            "Acreditamos que tecnologia deve simplificar, não complicar. Por isso, nossos sistemas são pensados para reduzir retrabalho, eliminar processos manuais e oferecer informações claras para decisões mais inteligentes.",
            "Nosso propósito é transformar a forma como empresas veiculares gerenciam suas operações, usando tecnologia como aliada do crescimento sustentável.",
          ]}
          imageLeft={false}
        />
        <ContentBlock
          title="Por que criamos a i3TECH"
          paragraphs={[
            "A i3TECH nasceu da observação de dores reais do mercado veicular: sistemas fragmentados, falta de controle sobre vendas, dificuldade de gestão e pouca visibilidade dos dados.",
            "Criamos a i3TECH para resolver esses problemas com uma plataforma única, capaz de integrar pessoas, processos e informações, permitindo que empresas cresçam com mais previsibilidade, segurança e eficiência.",
          ]}
          imageLeft={true}
        />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
