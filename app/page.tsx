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
// About Section
const IMG_ABOUT_GRAPHIC = "https://www.figma.com/api/mcp/asset/5e589dfc-fbba-4170-a0ea-a1433fc527de";
const IMG_ABOUT_ICON_1 = "https://www.figma.com/api/mcp/asset/e48a363e-0260-4365-87df-085eff33434f";
const IMG_ABOUT_DIVIDER = "https://www.figma.com/api/mcp/asset/278d03d6-cd3e-4c71-a51c-c13977dabe3a";
const IMG_ABOUT_ICON_2 = "https://www.figma.com/api/mcp/asset/409783bb-9dd3-4084-8c25-f0e897ebd27b";
const IMG_ABOUT_ICON_3 = "https://www.figma.com/api/mcp/asset/5c3f7373-364f-4ed8-8f55-8c4dfabba091";
// Functionalities — Products/Solutions
const IMG_I3_GESTAO = "https://www.figma.com/api/mcp/asset/11f7dbd5-de9b-41e6-a15c-e4e9f4ba5ef8";
const IMG_I3_CRM = "https://www.figma.com/api/mcp/asset/7e2e0715-83f3-48c6-8e83-315feff2d7ef";
const IMG_I3_MGA = "https://www.figma.com/api/mcp/asset/6507f8f0-e793-41e4-858f-74e2e499dc58";
const IMG_I3_APP = "https://www.figma.com/api/mcp/asset/13768d7e-877b-4f4d-af05-efb8f1c000fc";
const IMG_I3_TRACK = "https://www.figma.com/api/mcp/asset/3725b471-f84b-4699-b4ac-92d6b3673393";
// Old Functionalities
const IMG_FEAT_CRM        = "/layout-dashboard.svg";
const IMG_FEAT_AUTO       = "/send.svg";
const IMG_FEAT_CLIENTS    = "/dollar-sign.svg";
const IMG_FEAT_FIN        = "/users.svg";
const IMG_FEAT_REPORTS    = "/layers.svg";
// Differentials
const IMG_DIFF_BOT        = "/bot.svg";
const IMG_DIFF_BLOCKS     = "/blocks.svg";
const IMG_DIFF_SPARKLES   = "/sparkles.svg";
const IMG_DIFF_GAUGE      = "/circle-gauge.svg";
const IMG_DIFF_COMBINE    = "/combine.svg";
const IMG_DIFF_SHIELD     = "/shield-check.svg";
const IMG_DIFF_DIV        = "https://www.figma.com/api/mcp/asset/0737b004-f143-47a2-b0a4-6ac9a4f92127";
// Target Audience
const IMG_AUD_1           = "/tags.svg";
const IMG_AUD_2           = "/map-pinned.svg";
const IMG_AUD_3           = "/clipboard-list.svg";
const IMG_AUD_4           = "/car-front-01.svg";

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
          {/* Title */}
          <motion.h1
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            initial="hidden"
            animate="visible"
            className="text-[28px] md:text-[48px] leading-[1.3] font-normal text-white w-full text-center"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            {["Tecnologias", "inteligentes", "para", "a", "gestão", "e", "controle", "da", "sua"].map((word, i) => (
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
            {["entidade", "de", "proteção", "patrimonial", "mutualista,", "centrais", "de", "rastreamento", "e", "seguradoras."].map((word, i) => (
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
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[16px] leading-[1.4] text-white max-w-[782px]"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Com a i3Tech, a sua empresa conseguirá otimizar operações comerciais, gestão administrativa e financeira e gestão de ativos em campo.
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
      <div className="max-w-[1280px] mx-auto px-5 py-16 md:py-20 flex flex-col gap-10">

        {/* Top: paragraph left + graphic right */}
        <FadeUp className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[24px] font-light text-white leading-[1.4]" style={{ fontFamily: "var(--font-dm-sans), sans-serif", width: 708 }}>
            A i3Tech é a 1º empresa do mercado brasileiro, a desenvolver tecnologias de origem atuarial, para sua proteção patrimonial mutualista, central de rastreamento e seguradoras.
          </p>
          <img src={IMG_ABOUT_GRAPHIC} alt="" className="shrink-0 w-[299px] h-[237px] object-cover" />
        </FadeUp>

        {/* Bottom: 3 columns with icons and descriptions */}
        <div className="flex gap-8 items-stretch" style={{ height: 240 }}>
          {/* Column 1: Proteção Patrimonial Mutualista */}
          <FadeUp delay={0} className="flex flex-col justify-between flex-1">
            <img src={IMG_ABOUT_ICON_1} alt="" className="w-[72px] h-[72px]" />
            <div className="flex flex-col gap-5">
              <h3 className="text-[16px] font-medium leading-[1.4]" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Para sua proteção patrimonial mutualista
              </h3>
              <p className="text-[14px] font-light leading-[1.6] text-[#f7f7f7]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Com as soluções i3Tech, a sua proteção patrimonial terá total controle em gestão administrativa financeira e comercial. Com as soluções i3Gestão e i3Crm a sua organização estará em outro patamar.
              </p>
            </div>
          </FadeUp>

          {/* Divider */}
          <img src={IMG_ABOUT_DIVIDER} alt="" className="w-px flex-shrink-0" style={{ height: 240 }} />

          {/* Column 2: Central de Rastreamento */}
          <FadeUp delay={0.07} className="flex flex-col justify-between flex-1">
            <img src={IMG_ABOUT_ICON_2} alt="" className="w-[72px] h-[72px]" />
            <div className="flex flex-col gap-5">
              <h3 className="text-[16px] font-medium leading-[1.4]" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Para sua central de rastreamento
              </h3>
              <p className="text-[14px] font-light leading-[1.6] text-[#f7f7f7]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Com as soluções i3Tech, a sua central de rastreamento terá total controle dos ativos em campo. Com as soluções i3Track e i3Aplicativos, a sua central estará em outro patamar.
              </p>
            </div>
          </FadeUp>

          {/* Divider */}
          <img src={IMG_ABOUT_DIVIDER} alt="" className="w-px flex-shrink-0" style={{ height: 240 }} />

          {/* Column 3: Seguradora */}
          <FadeUp delay={0.14} className="flex flex-col justify-between flex-1">
            <img src={IMG_ABOUT_ICON_3} alt="" className="w-[72px] h-[72px]" />
            <div className="flex flex-col gap-5">
              <h3 className="text-[16px] font-medium leading-[1.4]" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Para sua seguradora
              </h3>
              <p className="text-[14px] font-light leading-[1.6] text-[#f7f7f7]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Com as soluções i3Tech, a sua seguradora terá total controle em gestão administrativa financeira e operacional. Com a solução i3Mga, a sua seguradora estará em outro patamar.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ───────────────────────────────────────────── */
function Services() {
  const services = [
    [
      {
        logo: IMG_I3_GESTAO,
        title: "i3 Gestão",
        desc: "Plataforma ERP (Gestão empresarial) para proteção patrimonial mutualista.",
        href: "#"
      },
      {
        logo: IMG_I3_CRM,
        title: "i3 CRM",
        desc: "Sistema CRM (Gestão Comercial) para proteção patrimonial mutualista",
        href: "#"
      },
      {
        logo: IMG_I3_MGA,
        title: "i3 Mga",
        desc: "Sistema MGA (Gestão completa de Seguros) para seguradoras.",
        href: "#"
      },
    ],
    [
      {
        logo: IMG_I3_APP,
        title: "i3 Aplicativos",
        desc: "Aplicativos personalizados e customizados (Consultor, Associado, Rastreamento) para proteção patrimonial mutualista e centrais de rastreamento.",
        href: "#"
      },
      {
        logo: IMG_I3_TRACK,
        title: "i3 Track",
        desc: "Plataforma de rastreamento completa com o foco na recuperação de ativos em campo, para centrais de rastreamento.",
        href: "#"
      },
      {
        title: "i3 Integrações",
        desc: "Integrações de chatbot e Ia para proteção patrimonial mutualista, centrais de rastreamento e seguradoras.",
        href: "#",
        isIntegrations: true
      },
    ],
  ];

  return (
    <section className="w-full" style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16 flex flex-col gap-10">
        <FadeUp className="text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.2]" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Veja todos os<br />nossos serviços
          </h2>
        </FadeUp>

        <FadeUp>
          <div className="rounded-[20px] p-4 flex flex-col gap-4" style={{ background: "#171717" }}>
            {services.map((row, ri) => (
              <div key={ri} className="flex flex-col md:flex-row gap-4">
                {row.map((card, ci) => (
                  <FadeUp key={card.title} delay={ri * 0.1 + ci * 0.07} className="flex-1">
                    <div className="flex items-center justify-center p-3 rounded-[16px] h-[320px]" style={{ background: "#262626" }}>
                      <div className="flex flex-col justify-between items-start w-full h-full p-10 rounded-lg" style={{ background: "#171717" }}>
                        {card.logo && (
                          <img src={card.logo} alt={card.title} style={{
                            height: "39.088px",
                            width: card.title === "i3 Gestão" ? "162.363px" :
                                   card.title === "i3 CRM" ? "131.468px" :
                                   card.title === "i3 Mga" ? "127.068px" :
                                   card.title === "i3 Aplicativos" ? "215.801px" :
                                   card.title === "i3 Track" ? "142.88px" : "auto"
                          }} />
                        )}
                        {card.isIntegrations && (
                          <h3 className="text-[24px] font-semibold text-white" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                            I3<span className="italic text-[#0052e6]">Integrações</span>
                          </h3>
                        )}
                        <p className="text-[14px] leading-[1.6] text-[#888888]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                          {card.desc}
                        </p>
                        <Link
                          href={card.href}
                          className="inline-block bg-[#171717] border border-[rgba(255,255,255,0.08)] px-5 py-2.5 rounded-lg text-[#f7f7f7] text-[14px] hover:bg-[#1a1a1a] transition-colors"
                          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
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
          {/* Row 1 — 3 cards */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* i3 Gestão */}
            <FadeUp delay={0} className="flex-1">
              <div className="bg-[#171717] border border-[#2e2e2e] rounded-[12px] flex flex-col gap-4 p-8 h-full" style={{ minHeight: 400 }}>
                <img src={IMG_I3_GESTAO} alt="i3 Gestão" style={{ height: "29.755px", width: "123.597px" }} />
                <p className="text-[14px] leading-[1.6] text-[#888888]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Rateio e precificação configurados em regra atuarial, Faturamento, Relatórios, Gestão de cobranças com i3Pay, Remessa automática com os Bancos, Regra atuarial e Módulo i3Crm habilitado dentro do sistema.
                </p>
                <div className="mt-auto">
                  <Link href="#" className="inline-block bg-[#171717] border border-[rgba(255,255,255,0.08)] px-5 py-2.5 rounded-lg text-[#f7f7f7] text-[14px] hover:bg-[#1a1a1a] transition-colors" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Saiba mais
                  </Link>
                </div>
              </div>
            </FadeUp>

            {/* i3 CRM */}
            <FadeUp delay={0.07} className="flex-1">
              <div className="bg-[#171717] border border-[#2e2e2e] rounded-[12px] flex flex-col gap-4 p-8 h-full" style={{ minHeight: 400 }}>
                <img src={IMG_I3_CRM} alt="i3 CRM" style={{ height: "29.755px", width: "100.078px" }} />
                <p className="text-[14px] leading-[1.6] text-[#888888]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Mais Gestão comercial com: Funil de Vendas, Landing Page, Cotações Rápidas, Planos e preços configurados, Pagamentos online, Tabelas de preços, Relatórios, Regionais e Módulo i3Gestão habilitado dentro do sistema.
                </p>
                <div className="mt-auto">
                  <Link href="#" className="inline-block bg-[#171717] border border-[rgba(255,255,255,0.08)] px-5 py-2.5 rounded-lg text-[#f7f7f7] text-[14px] hover:bg-[#1a1a1a] transition-colors" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Saiba mais
                  </Link>
                </div>
              </div>
            </FadeUp>

            {/* i3 Mga */}
            <FadeUp delay={0.14} className="flex-1">
              <div className="bg-[#171717] border border-[#2e2e2e] rounded-[12px] flex flex-col gap-4 p-8 h-full" style={{ minHeight: 400 }}>
                <img src={IMG_I3_MGA} alt="i3 Mga" style={{ height: "29.755px", width: "96.729px" }} />
                <p className="text-[14px] leading-[1.6] text-[#888888]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Seu Mga conseguirá: Realizar emissões de apólice já integradas com a seguradora, Relatórios, Auditoria online, Pagamentos, Cotações e Planos pré configurados e Gestão dos Faturáveis.
                </p>
                <div className="mt-auto">
                  <Link href="#" className="inline-block bg-[#171717] border border-[rgba(255,255,255,0.08)] px-5 py-2.5 rounded-lg text-[#f7f7f7] text-[14px] hover:bg-[#1a1a1a] transition-colors" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Saiba mais
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Row 2 — 3 cards (last one spans full height) */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* i3 Aplicativos */}
            <FadeUp delay={0.21} className="flex-1">
              <div className="bg-[#171717] border border-[#2e2e2e] rounded-[12px] flex flex-col gap-4 p-8 h-full" style={{ minHeight: 400 }}>
                <img src={IMG_I3_APP} alt="i3 Aplicativos" style={{ height: "29.755px", width: "164.275px" }} />
                <p className="text-[14px] leading-[1.6] text-[#888888]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Aplicativos desenvolvidos e customizados para: Associado, Consultor, Gestão Multinível de comissionamento, Vistoria, Termo de Aceite e Rastreamento Veicular.
                </p>
                <div className="mt-auto">
                  <Link href="#" className="inline-block bg-[#171717] border border-[rgba(255,255,255,0.08)] px-5 py-2.5 rounded-lg text-[#f7f7f7] text-[14px] hover:bg-[#1a1a1a] transition-colors" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Saiba mais
                  </Link>
                </div>
              </div>
            </FadeUp>

            {/* i3 Track */}
            <FadeUp delay={0.28} className="flex-1">
              <div className="bg-[#171717] border border-[#2e2e2e] rounded-[12px] flex flex-col gap-4 p-8 h-full" style={{ minHeight: 400 }}>
                <img src={IMG_I3_TRACK} alt="i3 Track" style={{ height: "29.755px", width: "108.766px" }} />
                <p className="text-[14px] leading-[1.6] text-[#888888]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Software completo de rastreamento com funcionalidades para prevenção de furto e roubo. Com i3Track, a sua central de rastreamento terá: Relatórios, Histórico, Geocerca, Gestão de sinistros, Alertas, Localização e Dashboard.
                </p>
                <div className="mt-auto">
                  <Link href="#" className="inline-block bg-[#171717] border border-[rgba(255,255,255,0.08)] px-5 py-2.5 rounded-lg text-[#f7f7f7] text-[14px] hover:bg-[#1a1a1a] transition-colors" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Saiba mais
                  </Link>
                </div>
              </div>
            </FadeUp>

            {/* i3 Integrações */}
            <FadeUp delay={0.35} className="flex-1">
              <div className="bg-[#171717] border border-[#2e2e2e] rounded-[12px] flex flex-col gap-4 p-8 h-full" style={{ minHeight: 400 }}>
                <div>
                  <h3 className="text-[24px] font-semibold text-white" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    I3<span className="italic text-[#0052e6]">Integrações</span>
                  </h3>
                </div>
                <p className="text-[14px] leading-[1.6] text-[#888888]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Utilize ferramentas como chatbot e Ia dentro das tecnologias da i3TECH.
                </p>
                <div className="mt-auto">
                  <Link href="#" className="inline-block bg-[#171717] border border-[rgba(255,255,255,0.08)] px-5 py-2.5 rounded-lg text-[#f7f7f7] text-[14px] hover:bg-[#1a1a1a] transition-colors" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Saiba mais
                  </Link>
                </div>
              </div>
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
  { icon: IMG_AUD_1, title: "Proteção patrimonial mutualista",  desc: "Associações de proteção veicular." },
  { icon: IMG_AUD_2, title: "Centrais de Rastreamento",          desc: "Empresas de LBS que realizam a prevenção dos veículos furtados e roubados." },
  { icon: IMG_AUD_3, title: "Seguradoras",       desc: "Mga que representam as seguradas parceiras e já homologadas." },
];

function TargetAudience() {
  return (
    <section className="w-full" style={{ background: "#161616" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-10 md:py-16 flex flex-col gap-10">
        <FadeUp className="text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.2]" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Nosso segmento
          </h2>
        </FadeUp>

        {/* Figma: flex items-center justify-between — 3 dashed-border columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {audiences.map((a, i) => (
            <FadeUp key={a.title} delay={i * 0.1}>
              <div className="flex flex-col gap-7 p-10" style={{ border: "1px dashed #626262", ...(i === 0 ? { height: "100%" } : {}) }}>
                <div className="flex items-center justify-center shrink-0" style={{ width: 44, height: 44, background: "#0052e6", borderRadius: "50%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.icon} alt="" className="w-6 h-6" />
                </div>
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
            <div className="relative z-10 flex flex-col gap-4 px-6 py-10 md:px-16 md:py-16 max-w-3xl">
              <h2
                className="text-[24px] md:text-[36px] font-semibold text-white leading-tight"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif", whiteSpace: "pre-wrap" }}
              >
                Entenda como podemos{"\n"}transformar a sua empresa{"\n"}com tecnologias que irão{"\n"}te colocar em outro patamar.
              </h2>
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
