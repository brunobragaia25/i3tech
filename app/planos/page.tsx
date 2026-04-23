"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";

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
  return (
    <motion.div
      ref={ref}
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
          Escolha o plano sob medida para a sua empresa
        </motion.h1>
      </div>
    </section>
  );
}

/* ─── Info section ─────────────────────────────– */
function InfoSection() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <FadeUp className="max-w-[1280px] mx-auto px-4 md:px-5 py-16 md:py-24 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div>
            <p
              className="text-[18px] leading-[1.6]"
              style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Optando pelo combo i3Gestão + Qualquer outra tecnologia (o valor da segunda solução será por valor adicional)
            </p>
          </div>
          <div>
            <p
              className="text-[18px] leading-[1.6]"
              style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Optando somente por 1 tecnologia abaixo, o valor seguirá conforme o plano escolhido.
            </p>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

/* ─── Pricing card ─────────────────────────────– */
function PricingCard({
  title,
  subtitle,
  rows,
  delay = 0,
}: {
  title: string;
  subtitle: string;
  rows: Array<{ label: string; price: string }>;
  delay?: number;
}) {
  return (
    <FadeUp delay={delay} className="h-full">
      <div className="bg-white rounded-2xl p-8 md:p-10 flex flex-col h-full">
        <h3
          className="text-[20px] font-semibold mb-2"
          style={{ color: "#171717", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          {title}
        </h3>
        <p
          className="text-[14px] mb-8 leading-[1.5]"
          style={{ color: "#737373", fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          {subtitle}
        </p>

        <div className="flex flex-col gap-0 flex-1">
          {rows.map((row, i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b border-[#e5e5e5] last:border-b-0">
              <span
                className="text-[14px]"
                style={{ color: "#737373", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {row.label}
              </span>
              <span
                className="text-[16px] font-semibold"
                style={{ color: "#1956f3", fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {row.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

/* ─── Pricing section ──────────────────────────– */
function PricingSection() {
  const products = [
    {
      title: "I3Gestão",
      subtitle: "Para a sua associação (Valor mínimo e adesão dentro do combo)",
      rows: [
        { label: "0 a 1.000 itens", price: "R$1,35" },
        { label: "1.000 a 3.000 itens", price: "R$1,10" },
        { label: "Acima de 5.000 itens", price: "R$0,90" },
      ],
    },
    {
      title: "I3CRM (Todas as Versões)",
      subtitle: "Para a sua associação (Valor mínimo + adesão ou valor avulso dentro do combo)",
      rows: [
        { label: "0 a 10 usuários", price: "R$50,00" },
        { label: "11 a 50 usuários", price: "R$40,00" },
        { label: "Acima de 50 usuários", price: "R$30,00" },
      ],
    },
    {
      title: "I3Mga",
      subtitle: "Para a sua seguradora (Produto fora do combo)",
      rows: [
        { label: "Implantação", price: "R$200.000,00" },
        { label: "Mensalidade", price: "R$5.000,00" },
        { label: "Valor garantido", price: "R$50.000,00" },
      ],
    },
    {
      title: "I3Aplicativos",
      subtitle: "Para a sua associação e central de rastreamento (Valor mínimo + adesão dentro do combo)",
      rows: [
        { label: "App Consultor (Personalizado)", price: "R$200,00" },
        { label: "App Associado (Personalizado)", price: "R$200,00" },
        { label: "App Rastreamento (Personalizado)", price: "R$200,00" },
        { label: "Customizado em Loja", price: "R$2.000,00" },
      ],
    },
    {
      title: "I3Track",
      subtitle: "Para a sua central de rastreamento (Valor mínimo + adesão ou valor avulso dentro do combo)",
      rows: [
        { label: "0 a 500 veículos", price: "R$4,00" },
        { label: "501 a 1.000 veículos", price: "R$3,00" },
        { label: "Acima de 1.000 veículos", price: "R$2,00" },
      ],
    },
    {
      title: "I3Integrações",
      subtitle: "Para a sua associação (Valor mínimo dentro do combo)",
      rows: [
        { label: "Chatbot sem IA", price: "R$300,00" },
        { label: "Chatbot com IA", price: "R$600,00" },
      ],
    },
  ];

  return (
    <section style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <PricingCard
              key={product.title}
              title={product.title}
              subtitle={product.subtitle}
              rows={product.rows}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ───────────────────────────────– */
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
                Tem dúvidas sobre qual plano escolher?
              </h2>
              <p
                className="text-[18px] leading-[1.4] text-white/80"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Entre em contato conosco para um orçamento personalizado.
              </p>
              <a
                href="/#contato"
                className="inline-flex items-center px-6 py-3 rounded-lg text-[15px] font-medium transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg"
                style={{
                  background: "white",
                  color: "#1956f3",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  width: "fit-content",
                }}
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────– */
export default function PlanosPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Topbar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InfoSection />
        <PricingSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
