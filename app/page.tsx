"use client";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

/* ─── Animation helper ───────────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── CountUp ────────────────────────────────────────────── */
function CountUp({ to, duration = 1.8 }: { to: number; duration?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(to);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}
    </span>
  );
}

/* ─── Asset URLs ─────────────────────────────────────────── */
// Hero / Dashboard cards
const IMG_CAR_FRONT       = "/car-front.svg";
const IMG_USER_CHECK      = "/user-round-check.svg";
const IMG_CHART_SPLINE    = "/chart-spline.svg";
const IMG_FOLDER_PEN      = "/folder-pen.svg";
const IMG_TARGET          = "/target.svg";
const IMG_USER_PLUS       = "/user-plus.svg";
// About - usando graphic-image-01.png
const IMG_ABOUT_DIV       = "https://www.figma.com/api/mcp/asset/6f12299d-a4d8-4e88-b253-ce26dbd7adb3";
const IMG_PILLAR_1        = "/list-filter.svg";
const IMG_PILLAR_2        = "/zap.svg";
const IMG_PILLAR_3        = "/chart-no-axes-column-increasing.svg";
// Functionalities
const IMG_FEAT_CRM        = "/layout-dashboard.svg";
const IMG_FEAT_AUTO       = "/send.svg";
const IMG_FEAT_CLIENTS    = "/dollar-sign.svg";
const IMG_FEAT_FIN        = "/users.svg";
const IMG_FEAT_REPORTS    = "/layers.svg";
// Differentials
const IMG_DIFF_BOT        = "https://www.figma.com/api/mcp/asset/a765d049-1394-40b9-ab3b-2d904edaf414";
const IMG_DIFF_BLOCKS     = "https://www.figma.com/api/mcp/asset/5261cf8c-bc6e-4759-a075-11035a51329a";
const IMG_DIFF_SPARKLES   = "https://www.figma.com/api/mcp/asset/a3f61d2c-58b3-49fe-a9ee-8e5220e4dba5";
const IMG_DIFF_GAUGE      = "https://www.figma.com/api/mcp/asset/c364263a-8ba9-4498-95d1-2cadf4314d1e";
const IMG_DIFF_COMBINE    = "https://www.figma.com/api/mcp/asset/2c2a8c5c-004b-4a0c-be5f-feb32ce365bc";
const IMG_DIFF_SHIELD     = "https://www.figma.com/api/mcp/asset/6738431b-3b41-4943-8af5-0ea86a41e2dd";
const IMG_DIFF_DIV        = "https://www.figma.com/api/mcp/asset/0737b004-f143-47a2-b0a4-6ac9a4f92127";
// Target Audience
const IMG_AUD_1           = "https://www.figma.com/api/mcp/asset/35044c7e-acca-4215-aaa1-797797c1a24a";
const IMG_AUD_2           = "https://www.figma.com/api/mcp/asset/6beda39c-0aff-4beb-98f5-77b7b05273e7";
const IMG_AUD_3           = "https://www.figma.com/api/mcp/asset/4ffd3806-9348-4bff-a20f-a0caa6d62c06";
const IMG_AUD_4           = "https://www.figma.com/api/mcp/asset/2264e298-5767-49f3-b94b-e337c7c564c1";

/* ─── Hero ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#0d0d0d" }}>
      {/* Cross pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='57' height='57'%3E%3Cpath d='M28.5 22v13M22 28.5h13' stroke='rgba(255,255,255,0.14)' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundSize: "57px 57px",
        }}
      />
      {/* Blue sphere — left */}
      <div
        className="absolute left-0 top-0 w-[700px] h-[700px] rounded-full pointer-events-none -translate-x-1/3 -translate-y-1/4"
        style={{ background: "radial-gradient(circle, rgba(25,86,243,0.5) 0%, rgba(0,52,230,0.2) 40%, transparent 70%)" }}
      />
      {/* Blue sphere — right */}
      <div
        className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/4"
        style={{ background: "radial-gradient(circle, rgba(25,86,243,0.4) 0%, rgba(0,52,230,0.15) 40%, transparent 70%)" }}
      />

      {/* Hero text — Figma node 32:2: pt-[108px] pb-[32px] px-[20px], items-center, gap-[40px] */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-5 pt-16 md:pt-[108px] pb-8 flex flex-col gap-10 items-center text-center">
        <div className="flex flex-col gap-5 items-center">
          {/* Title word-by-word */}
          <motion.h1
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            initial="hidden"
            animate="visible"
            className="text-[28px] md:text-[48px] leading-[1.3] font-normal text-white max-w-[782px] text-center"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            {["CRM", "inteligente", "para", "operações", "veiculares", "que"].map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: "110%" },
                    visible: { opacity: 1, y: "0%", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
            {["precisam", "vender,", "organizar", "e", "escalar."].map((word, i) => (
              <span key={`b-${i}`} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: "110%" },
                    visible: { opacity: 1, y: "0%", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="inline-block font-semibold"
                  style={{ color: "#0052e6" }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-[16px] leading-[1.4] text-white max-w-[782px]"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Centralize vendas, clientes e processos em uma única plataforma.{"\n"}
            A i3TECH conecta sua operação comercial à gestão completa do negócio.
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-5 flex-wrap justify-center"
        >
          <Link
            href="/#contato"
            className="text-[14px] text-[#f7f7f7] px-5 py-[10px] rounded-lg transition-all duration-200 hover:bg-[#1444cc] hover:scale-[1.03] active:scale-[0.97] hover:brightness-110 hover:shadow-[0_8px_24px_rgba(25,86,243,0.4)]"
            style={{ background: "#1956f3", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0px 2px 5px rgba(31,36,40,0.25)", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Solicitar demonstração
          </Link>
          <Link
            href="/planos"
            className="text-[14px] text-[#f7f7f7] px-5 py-[10px] rounded-lg transition-all duration-200 hover:bg-[#3a3a3a] hover:scale-[1.03] active:scale-[0.97] hover:brightness-110"
            style={{ background: "#333", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0px 2px 5px rgba(31,31,31,0.25)", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Nossos planos
          </Link>
        </motion.div>
      </div>

      {/* Dashboard cards — Figma node 35:5897: flex gap-[20px] items-center justify-center pt-[32px] pb-[64px] px-[20px] */}
      <motion.div
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: 1.15 } } }}
        initial="hidden"
        animate="visible"
        className="hidden md:flex relative z-10 max-w-[1280px] mx-auto px-5 pt-8 pb-16 gap-5 items-center justify-center flex-wrap"
      >
        {/* Card 1: Veículos + Associados — 291×287 */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 48 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
          className="bg-[#cce0ff] p-[10px] rounded-2xl flex items-center justify-center shrink-0 w-[291px] h-[287px]"
        >
          <div className="bg-white flex-1 h-full rounded-lg p-7 flex flex-col justify-between" style={{ border: "1px solid rgba(51,133,255,0.5)" }}>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG_CAR_FRONT} alt="" className="w-5 h-5 shrink-0" />
                <span className="text-[16px] text-[#0052e6]" style={{ fontFamily: "var(--font-dm-sans)", lineHeight: "23.94px" }}>N° Veículos Ativos</span>
              </div>
              <span className="text-[32px] font-bold text-[#333] leading-none" style={{ fontFamily: "var(--font-dm-sans)" }}><CountUp to={14019} /></span>
            </div>
            {/* Divider */}
            <div className="w-full shrink-0" style={{ height: 1, background: "#e5e5e5" }} />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG_USER_CHECK} alt="" className="w-5 h-5 shrink-0" />
                <span className="text-[16px] text-[#0052e6]" style={{ fontFamily: "var(--font-dm-sans)", lineHeight: "23.94px" }}>N° Associados Ativos</span>
              </div>
              <span className="text-[32px] font-bold text-[#333] leading-none" style={{ fontFamily: "var(--font-dm-sans)" }}><CountUp to={11623} /></span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Bar chart — 291×373 */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 48 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
          className="bg-[#cce0ff] p-[10px] rounded-2xl flex items-center justify-center shrink-0 w-[291px] h-[373px]"
        >
          <div className="bg-white border rounded-lg p-8 flex flex-col justify-between shrink-0 w-[271px] h-full" style={{ border: "1px solid rgba(51,133,255,0.5)" }}>
            <div className="flex items-start gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_CHART_SPLINE} alt="" className="w-5 h-5 shrink-0 mt-0.5" />
              <span className="text-[16px] text-[#0052e6] leading-5" style={{ fontFamily: "var(--font-dm-sans)" }}>Evolução custos<br />eventos</span>
            </div>
            {/* Bar chart: each bar is a horizontal pill rotated -90deg */}
            <div className="flex items-end justify-between flex-1 mt-4">
              {[
                { label: "2020 1", w: 59 },
                { label: "2020 2", w: 73 },
                { label: "2020 3", w: 92 },
                { label: "2020 4", w: 113 },
                { label: "2020 5", w: 133 },
              ].map((b, i) => (
                <div key={b.label} className="flex flex-col items-center justify-end gap-2.5 flex-1">
                  <div className="flex items-center justify-center" style={{ height: b.w, width: 20 }}>
                    <div className="-rotate-90" style={{ width: b.w }}>
                      <motion.div
                        className="rounded-full h-5"
                        style={{ background: "#66a3ff", border: "1px solid #cce0ff" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: b.w }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 1.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center h-10 w-4">
                    <span className="-rotate-90 text-[12px] text-[#333] whitespace-nowrap" style={{ fontFamily: "var(--font-dm-sans)" }}>{b.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 3: Meta table — 291×335 */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 48 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
          className="bg-[#cce0ff] p-[10px] rounded-2xl flex items-center justify-center shrink-0 w-[291px] h-[335px]"
        >
          <div className="bg-white border rounded-lg p-7 flex items-center justify-between shrink-0 w-[271px] h-full" style={{ border: "1px solid rgba(51,133,255,0.5)" }}>
            {/* Column 1: Nome meta */}
            <div className="flex flex-col gap-2 items-center flex-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_FOLDER_PEN} alt="" className="w-5 h-5" />
              <span className="text-[14px] font-medium text-[#0052e6] text-center" style={{ fontFamily: "var(--font-dm-sans)" }}>Nome meta</span>
              <div className="w-full shrink-0" style={{ height: 1, background: "#e5e5e5" }} />
              {["Meta Geral","Regional INS","Regional SIA","Regional FSA","Regional CRS","Regional PLT","Total","Recuperações","Faturamento"].map((r) => (
                <span key={r} className="text-[11px] font-semibold text-[#333] text-center" style={{ fontFamily: "var(--font-dm-sans)" }}>{r}</span>
              ))}
            </div>
            {/* Column 2: Meta */}
            <div className="flex flex-col gap-2 items-center flex-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_TARGET} alt="" className="w-5 h-5" />
              <span className="text-[14px] font-medium text-[#0052e6] text-center" style={{ fontFamily: "var(--font-dm-sans)" }}>Meta</span>
              <div className="w-full shrink-0" style={{ height: 1, background: "#e5e5e5" }} />
              {["14.453","330","175","230","45","100","940","230","R$2.547k"].map((v, i) => (
                <span key={i} className="text-[11px] font-semibold text-[#333] text-center" style={{ fontFamily: "var(--font-dm-sans)" }}>{v}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 4: Adesões — 291×222 */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 48 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
          className="bg-[#cce0ff] p-[10px] rounded-2xl flex items-center justify-center shrink-0 w-[291px] h-[222px]"
        >
          <div className="bg-white border rounded-lg p-7 flex flex-col justify-between shrink-0 w-[271px] h-full" style={{ border: "1px solid rgba(51,133,255,0.5)" }}>
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_USER_PLUS} alt="" className="w-5 h-5 shrink-0" />
              <span className="text-[16px] text-[#0052e6]" style={{ fontFamily: "var(--font-dm-sans)", lineHeight: "23.94px" }}>N° Adesões</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[12px] font-semibold text-[#333]" style={{ fontFamily: "var(--font-dm-sans)" }}>Plano Personalizado</span>
              <motion.div
                className="h-5 rounded-full flex items-center justify-end px-3 overflow-hidden"
                style={{ background: "#66a3ff", border: "1px solid #cce0ff" }}
                initial={{ width: 0 }}
                whileInView={{ width: 215 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 1.57, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[12px] text-white whitespace-nowrap" style={{ fontFamily: "var(--font-dm-sans)" }}>9.063</span>
              </motion.div>
            </div>
            {/* Divider */}
            <div className="w-full shrink-0" style={{ height: 1, background: "#e5e5e5" }} />
            <div className="flex flex-col gap-1.5">
              <span className="text-[12px] font-semibold text-[#333]" style={{ fontFamily: "var(--font-dm-sans)" }}>Plano Premium</span>
              <motion.div
                className="h-5 rounded-full flex items-center justify-end px-3 overflow-hidden"
                style={{ background: "#66a3ff", border: "1px solid #cce0ff" }}
                initial={{ width: 0 }}
                whileInView={{ width: 88 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 1.67, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[12px] text-white whitespace-nowrap" style={{ fontFamily: "var(--font-dm-sans)" }}>3.045</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── About ──────────────────────────────────────────────── */
function About() {
  return (
    <section className="w-full" style={{ background: "#0d0d0d" }}>
      {/* Figma: px-[20px] py-[64px], flex flex-col gap-[40px] */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16 flex flex-col gap-10">

        {/* Top: paragraph left + globe right */}
        <FadeUp className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p
            className="text-[20px] md:text-[24px] font-light text-white leading-[1.4]"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", maxWidth: 666 }}
          >
            A i3TECH é um sistema de CRM e gestão desenvolvido para empresas do{" "}
            <span className="font-semibold">
              setor veicular que precisam de controle, automação e visão estratégica em tempo real.
            </span>
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/graphic-image-01.png" alt="" className="shrink-0 w-[299px] h-[237px] object-cover rounded-lg" />
        </FadeUp>

        {/* Bottom: 3 pillars — Figma: flex items-center justify-between, h=240 */}
        <div className="hidden md:flex items-stretch" style={{ height: 240 }}>
          {/* Pillar 1 */}
          <FadeUp delay={0} className="flex flex-col justify-between flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center shrink-0" style={{ border: "1px solid rgba(153, 194, 255, 0.15)" }}>
              <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center" style={{ border: "2px solid #0052e6", background: "rgba(0, 82, 230, 0.1)" }}>
                <img src={IMG_PILLAR_1} alt="" className="w-[24px] h-[24px]" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[20px] font-medium leading-[1.4]" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Mais controle sobre o funil de vendas
              </h3>
              <p className="text-[14px] font-light leading-[1.6] text-[#f7f7f7]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Tenha visibilidade total de cada oportunidade, desde o primeiro contato até o fechamento. Acompanhe o desempenho da equipe, identifique gargalos e tome decisões com base em dados reais.
              </p>
            </div>
          </FadeUp>

          {/* Vertical divider SVG */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG_ABOUT_DIV} alt="" className="self-stretch mx-8" style={{ width: 1 }} />

          {/* Pillar 2 */}
          <FadeUp delay={0.1} className="flex flex-col justify-between flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center shrink-0" style={{ border: "1px solid rgba(153, 194, 255, 0.15)" }}>
              <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center" style={{ border: "2px solid #0052e6", background: "rgba(0, 82, 230, 0.1)" }}>
                <img src={IMG_PILLAR_2} alt="" className="w-[20px] h-[20px]" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[20px] font-medium leading-[1.4]" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Menos retrabalho operacional
              </h3>
              <p className="text-[14px] font-light leading-[1.6] text-[#f7f7f7]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Automatize tarefas repetitivas e centralize informações em um único sistema. Reduza erros, elimine processos manuais e permita que sua equipe foque no que realmente importa: vender e crescer.
              </p>
            </div>
          </FadeUp>

          {/* Vertical divider SVG */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG_ABOUT_DIV} alt="" className="self-stretch mx-8" style={{ width: 1 }} />

          {/* Pillar 3 */}
          <FadeUp delay={0.2} className="flex flex-col justify-between flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center shrink-0" style={{ border: "1px solid rgba(153, 194, 255, 0.15)" }}>
              <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center" style={{ border: "2px solid #0052e6", background: "rgba(0, 82, 230, 0.1)" }}>
                <img src={IMG_PILLAR_3} alt="" className="w-[20px] h-[20px]" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[20px] font-medium leading-[1.4]" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Mais previsibilidade e crescimento
              </h3>
              <p className="text-[14px] font-light leading-[1.6] text-[#f7f7f7]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Com indicadores claros e relatórios em tempo real, sua operação ganha previsibilidade. Planeje melhor, escale com segurança e cresça de forma estruturada e sustentável.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Mobile pillars */}
        <div className="flex flex-col gap-10 md:hidden">
          {[
            { icon: IMG_PILLAR_1, title: "Mais controle sobre o funil de vendas", desc: "Tenha visibilidade total de cada oportunidade, desde o primeiro contato até o fechamento." },
            { icon: IMG_PILLAR_2, title: "Menos retrabalho operacional", desc: "Automatize tarefas repetitivas e centralize informações em um único sistema." },
            { icon: IMG_PILLAR_3, title: "Mais previsibilidade e crescimento", desc: "Com indicadores claros e relatórios em tempo real, sua operação ganha previsibilidade." },
          ].map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.1} className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ border: "1px solid rgba(153, 194, 255, 0.15)" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ border: "2px solid #0052e6", background: "rgba(0, 82, 230, 0.1)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.icon} alt="" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-[18px] font-medium" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>{p.title}</h3>
              <p className="text-[14px] font-light leading-[1.6] text-[#f7f7f7]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>{p.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ───────────────────────────────────────────── */
// Figma: outer bg-[#171717] rounded-[20px] p-[16px], inner rows with bg-[#262626] cards
function Services() {
  const rows = [
    [
      { logo: "/i3crm.png", name: "i3CRM", href: "/solucoes#crm" },
      { logo: "/i3gestao.png", name: "i3Gestão", href: "/solucoes#gestao" },
      { logo: "/i3mga.png", name: "i3Mga", href: "/solucoes#mga" },
    ],
    [
      { logo: "/i3track.png", name: "i3Track", href: "/solucoes#track" },
      { logo: "/i3expansao.png", name: "i3Expansão", href: "/solucoes#expansao" },
      { logo: "/i3app.png", name: "Aplicativos", href: "/solucoes#apps" },
    ],
  ];

  return (
    <section className="w-full" style={{ background: "#161616" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16 flex flex-col gap-10">
        <FadeUp className="text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.2]" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Veja todos os<br />nossos serviços
          </h2>
        </FadeUp>

        {/* Outer wrapper: bg-[#171717], rounded-[20px], p-[16px] */}
        <FadeUp>
          <div className="rounded-[20px] p-4 flex flex-col gap-4" style={{ background: "#171717" }}>
            {rows.map((row, ri) => (
              <div key={ri} className="flex flex-col md:flex-row gap-4">
                {row.map((card, ci) => (
                  <FadeUp key={card.name} delay={ri * 0.1 + ci * 0.07} className="flex-1 min-w-0">
                    {/* bg-[#262626] outer border card, h-[287px], p-[12px], rounded-[16px] */}
                    <div className="flex items-center justify-center p-3 rounded-2xl h-auto md:h-[287px]" style={{ background: "#262626" }}>
                      {/* bg-[#171717] inner card, h-[263px], p-[40px], rounded-[8px] */}
                      <div className="flex flex-col justify-between items-start flex-1 h-auto md:h-[263px] p-6 md:p-10 rounded-lg" style={{ background: "#171717" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={card.logo} alt={card.name} className="h-10 w-auto object-contain" />
                        <Link
                          href={card.href}
                          className="self-start text-[14px] text-[#f7f7f7] px-5 py-[10px] rounded-lg transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:brightness-110"
                          style={{ background: "#171717", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0px 2px 5px rgba(31,36,40,0.25)", fontFamily: "var(--font-dm-sans), sans-serif" }}
                        >
                          Saiba mais
                        </Link>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Functionalities ────────────────────────────────────── */
// Figma: 3 cards row 1 (each size-[400px]), 2 cards row 2 (first 400px, second flex-1)
const functionalities = [
  {
    icon: IMG_FEAT_CRM, title: "Gestão comercial (CRM)",
    desc: <>Organize <strong className="text-[#f7f7f7]">leads, acompanhe negociações e tenha controle total do funil de vendas</strong> em um só lugar.</>,
  },
  {
    icon: IMG_FEAT_AUTO, title: "Automação de vendas",
    desc: <>Automatize <strong className="text-[#f7f7f7]">contatos, follow-ups e propostas para vender mais</strong>, com menos esforço operacional.</>,
  },
  {
    icon: IMG_FEAT_FIN, title: "Gestão de clientes e associados",
    desc: <>Centralize <strong className="text-[#f7f7f7]">dados de clientes, veículos e contratos</strong> com histórico completo e sempre atualizado.</>,
  },
  {
    icon: IMG_FEAT_CLIENTS, title: "Financeiro e comissões",
    desc: <>Controle <strong className="text-[#f7f7f7]">pagamentos, comissões e resultados financeiros</strong> com mais clareza e segurança.</>,
  },
  {
    icon: IMG_FEAT_REPORTS, title: "Relatórios e integrações",
    desc: <>Acompanhe <strong className="text-[#f7f7f7]">indicadores em tempo real e conecte a i3TECH</strong> aos principais canais da sua operação.</>,
  },
];

function FuncCard({ f, className = "" }: { f: typeof functionalities[0]; className?: string }) {
  return (
    <div
      className={`flex flex-col gap-4 p-8 rounded-xl ${className}`}
      style={{ background: "#171717", border: "1px solid #2e2e2e" }}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "#CCE0FF" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={f.icon} alt="" className="w-4 h-4" />
        </div>
        <span className="text-[16px] font-semibold leading-[1.2]" style={{ color: "#66a3ff", fontFamily: "var(--font-dm-sans), sans-serif" }}>
          {f.title}
        </span>
      </div>
      <p className="text-[14px] leading-[1.6]" style={{ color: "#888", fontFamily: "var(--font-dm-sans), sans-serif" }}>
        {f.desc}
      </p>
      <div className="mt-auto">
        <button
          className="text-[14px] text-[#f7f7f7] px-5 py-[10px] rounded-lg"
          style={{ background: "#171717", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0px 2px 5px rgba(31,36,40,0.25)", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
}

function Functionalities() {
  return (
    <section className="w-full" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16 flex flex-col gap-10">
        <FadeUp className="text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.2]" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Conheça todas as nossas funcionalidades
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-5">
          {/* Row 1 — 3 equal cards, each flex-1 */}
          <div className="flex flex-col md:flex-row gap-5">
            {functionalities.slice(0, 3).map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.07} className="flex-1 min-w-0">
                <FuncCard f={f} className="h-auto md:h-[400px]" />
              </FadeUp>
            ))}
          </div>
          {/* Row 2 — card 4 at ~400px, card 5 takes remaining space */}
          <div className="flex flex-col md:flex-row gap-5">
            <FadeUp delay={0.07} className="md:w-[400px] md:shrink-0 w-full">
              <FuncCard f={functionalities[3]} className="w-full h-auto md:h-[400px]" />
            </FadeUp>
            <FadeUp delay={0.14} className="flex-1 min-w-0">
              <FuncCard f={functionalities[4]} className="w-full h-auto md:h-[400px]" />
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Differentials ──────────────────────────────────────── */
// Figma: single bg-[#171717] card with 3 columns × 2 items each
const diffCols = [
  [
    { icon: IMG_DIFF_BOT,     title: "Automação inteligente de processos", desc: "Fluxos automatizados que reduzem tarefas manuais e aumentam a eficiência da operação." },
    { icon: IMG_DIFF_BLOCKS,  title: "Sistema modular e escalável",        desc: "Adapte o sistema ao tamanho e à complexidade do seu negócio, sem limitações." },
  ],
  [
    { icon: IMG_DIFF_SPARKLES, title: "Interface simples e intuitiva",   desc: "Uma plataforma fácil de usar, pensada para produtividade desde o primeiro acesso." },
    { icon: IMG_DIFF_GAUGE,    title: "Performance comercial real",       desc: "Dados claros para acompanhar resultados, corrigir rotas e vender com mais consistência." },
  ],
  [
    { icon: IMG_DIFF_COMBINE, title: "Centralização total da operação",    desc: "Vendas, clientes, financeiro e dados reunidos em um único ambiente." },
    { icon: IMG_DIFF_SHIELD,  title: "Segurança e confiabilidade dos dados", desc: "Informações protegidas, com controle, estabilidade e total confiabilidade." },
  ],
];

function Differentials() {
  return (
    <section className="w-full" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16 flex flex-col gap-10">
        <FadeUp className="text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.2]" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Saiba sobre os<br />diferenciais do CRM
          </h2>
        </FadeUp>

        {/* Single card, 3 columns — exact Figma layout */}
        <FadeUp>
          <div className="flex flex-col md:flex-row gap-8 p-8 rounded-xl" style={{ background: "#171717", border: "1px solid #2e2e2e" }}>
            {diffCols.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-8 flex-1 min-w-0">
                {col.map((item, ii) => (
                  <div key={item.title} className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2.5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.icon} alt="" className="w-6 h-6 shrink-0" />
                        <span className="text-[16px] font-semibold" style={{ color: "#e6f0ff", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[14px] leading-[1.6] text-white" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>
                    {/* Horizontal divider between rows */}
                    {ii < col.length - 1 && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={IMG_DIFF_DIV} alt="" className="w-full" style={{ height: 1 }} />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Target Audience ────────────────────────────────────── */
// Figma: flex items-center justify-between, 4 cols, border-dashed border-[#626262], p-[40px], gap-[28px]
const audiences = [
  { icon: IMG_AUD_1, title: "Associações de proteção veicular",  desc: "Controle total de associados, contratos e vendas com automação e previsibilidade." },
  { icon: IMG_AUD_2, title: "Centrais de rastreamento",          desc: "Organize vendas, contratos e clientes em uma única plataforma integrada e eficiente." },
  { icon: IMG_AUD_3, title: "Empresas de gestão veicular",       desc: "Centralize processos, dados e indicadores para ganhar escala e eficiência operacional." },
  { icon: IMG_AUD_4, title: "Empresas de comércio automotivo",   desc: "Aumente a conversão de leads e tenha mais controle sobre todo o processo comercial." },
];

function TargetAudience() {
  return (
    <section className="w-full" style={{ background: "#161616" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16 flex flex-col gap-10">
        <FadeUp className="text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.2]" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Para quem é o nosso CRM
          </h2>
        </FadeUp>

        {/* Figma: flex items-center justify-between — 4 dashed-border columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {audiences.map((a, i) => (
            <FadeUp key={a.title} delay={i * 0.1}>
              <div className="flex flex-col gap-7 p-10" style={{ border: "1px dashed #626262" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.icon} alt="" className="w-11 h-11" />
                <h3 className="text-[20px] font-medium leading-[1.4]" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  {a.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-white" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  {a.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─────────────────────────────────────────── */
// Figma: bg-[#1956f3], rounded-2xl, 1240×430, text left + ASCII art right
function CTABanner() {
  return (
    <section className="w-full py-16" id="contato" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-5">
        <FadeUp>
          <div
            className="rounded-2xl overflow-hidden relative flex flex-col md:flex-row items-center justify-between"
            style={{ background: "#1956f3", minHeight: 430 }}
          >
            {/* ASCII art pattern — right side overlay */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none select-none overflow-hidden font-mono text-white flex flex-col"
              aria-hidden
              style={{ fontSize: "11px", lineHeight: "1.4" }}
            >
              {Array.from({ length: 30 }).map((_, r) => (
                <div key={r} className="whitespace-nowrap">
                  {".-+##%%%##+=-..-*@@@@@@%%%%%##+=-..:####@@@@@@@@@@@%%###+=-.+@@@@@@@@@@@@@@@@@@%%%%##===-."}
                </div>
              ))}
            </div>

            {/* Text side */}
            <div className="relative z-10 flex flex-col gap-4 px-6 py-10 md:px-16 md:py-16 max-w-lg">
              <h2
                className="text-[24px] md:text-[36px] font-semibold text-white leading-tight"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <p className="text-white/80 text-[16px] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-4">
                <Link
                  href="/planos"
                  className="inline-block bg-white font-semibold text-[14px] px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg"
                  style={{ color: "#1956f3", fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  Agende uma demonstração
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Functionalities />
        <Differentials />
        <TargetAudience />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
