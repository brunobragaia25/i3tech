"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

/* ─── Figma assets ───────────────────────────────────────── */
const IMG_CHECK = "https://www.figma.com/api/mcp/asset/c52b93e4-e8f2-4051-8eeb-ea0df63fb69c";
const IMG_CTA_GRAPHIC = "https://www.figma.com/api/mcp/asset/240265d9-52b6-46a9-9b3f-568e635f49a2";

/* ─── animation helper ───────────────────────────────────── */
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

/* ─── Plan data ──────────────────────────────────────────── */
const plans = [
  {
    name: "Plano Gestão Comercial",
    price: "R$0",
    period: "/mês",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  {
    name: "Plano Gestão para Associações",
    price: "R$0",
    period: "/mês",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  {
    name: "Plano MGA / Seguros",
    price: "R$0",
    period: "/mês",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  {
    name: "Plano Rastreamento",
    price: "R$0",
    period: "/mês",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  {
    name: "Plano Expansão",
    price: "R$0",
    period: "/mês",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
];

/* ─── Plan card (fiel ao Figma: bg branco, tipografia exata) */
function PlanCard({ plan, delay = 0 }: { plan: (typeof plans)[0]; delay?: number }) {
  return (
    <FadeUp delay={delay} className="h-full">
      <motion.div
        whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}
        className="bg-white rounded-2xl p-10 flex flex-col justify-between h-full"
        style={{ minHeight: 580 }}
      >
        {/* Plan name */}
        <p
          className="text-[20px] text-black font-normal"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          {plan.name}
        </p>

        {/* Price block */}
        <div className="flex flex-col gap-2.5 mt-6">
          <div className="flex items-end">
            <span
              className="text-[48px] font-semibold text-[#171717] leading-[1.1]"
              style={{ letterSpacing: "-1.92px", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              {plan.price}
            </span>
            <span
              className="text-[16px] text-[#737373] mb-1 ml-1"
              style={{ letterSpacing: "-0.32px", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              {plan.period}
            </span>
          </div>
          <p
            className="text-[18px] font-medium text-[#737373] leading-[1.5]"
            style={{ letterSpacing: "-0.36px", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            {plan.desc}
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-3 mt-6 flex-1">
          {plan.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0"
                style={{ background: "#0066ff" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG_CHECK} alt="" className="w-3 h-3" />
              </div>
              <span
                className="text-[16px] text-[#737373]"
                style={{
                  letterSpacing: "-0.36px",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                }}
              >
                {feat}
              </span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <button
          className="w-full py-[10px] rounded-lg text-[14px] text-[#f7f7f7] mt-8 hover:bg-[#1444cc] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:brightness-110 hover:shadow-[0_8px_24px_rgba(25,86,243,0.4)]"
          style={{
            background: "#1956f3",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0px 2px 5px rgba(31,36,40,0.25)",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          Teste de graça
        </button>
      </motion.div>
    </FadeUp>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */
function PlansHero() {
  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center text-center"
      style={{
        background: "linear-gradient(180deg, #1340cc 0%, #0a2080 40%, #0d0d0d 100%)",
        minHeight: 320,
      }}
    >
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-5 py-28 flex flex-col items-center gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[28px] md:text-[48px] font-normal leading-[1.1]"
          style={{ color: "#3385ff", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Visão geral dos planos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[20px] text-white leading-normal"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Planos flexíveis de acordo com o tamanho e a complexidade da sua operação.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Pricing grid ───────────────────────────────────────── */
function PricingGrid() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-5 py-16 flex flex-col gap-5">
        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.slice(0, 3).map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} delay={i * 0.08} />
          ))}
        </div>
        {/* Row 2 — 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {plans.slice(3).map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA banner (fiel: gráfico ASCII + botão) ───────────── */
function CTABanner() {
  return (
    <section className="px-5 py-6" style={{ background: "#0d0d0d" }}>
      <FadeUp>
        <div
          className="max-w-[1280px] mx-auto rounded-2xl overflow-hidden relative flex flex-col md:flex-row items-center justify-between"
          style={{ background: "#1956f3", minHeight: 320 }}
        >
          {/* Text side */}
          <div className="relative z-10 flex flex-col gap-4 px-6 py-10 md:px-16 md:py-16 max-w-lg">
            <h2
              className="text-[24px] md:text-[36px] font-semibold text-white leading-tight"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p
              className="text-white/80 text-[16px] leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-4">
              <Link
                href="/#contato"
                className="inline-block bg-white font-semibold text-[14px] px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg"
                style={{ color: "#1956f3", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Solicitar orçamento personalizado
              </Link>
            </div>
          </div>

          {/* Graphic side — ASCII art from Figma */}
          <div className="relative flex-1 h-full min-h-[320px] flex items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMG_CTA_GRAPHIC}
              alt=""
              className="absolute right-0 top-0 h-full object-cover opacity-60"
              style={{ width: "438px", maxWidth: "100%" }}
            />
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function PlanosPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <PlansHero />
        <PricingGrid />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
