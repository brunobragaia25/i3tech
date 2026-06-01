"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";

const font = "var(--font-roobert), sans-serif";

const IMG_DIVIDER = "https://www.figma.com/api/mcp/asset/d46e6838-f32e-4357-a92a-9a09de57136c";

const plans = [
  {
    logo: "/i3gestao.svg", logoW: 211, logoH: 51,
    subtitle: "Para a sua associação (Valor mínimo e adesão dentro do combo)",
    tiers: [
      { label: "0 a 1.000 itens",      price: "R$1,35" },
      { label: "1.000 a 3.000 itens",  price: "R$1,10" },
      { label: "Acima de 5.000 itens", price: "R$0,90" },
    ],
  },
  {
    logo: "/i3crm.svg", logoW: 171, logoH: 51,
    subtitle: "Para a sua associação (Valor mínimo + adesão ou valor avulso dentro do combo)",
    tiers: [
      { label: "0 a 10 usuários",      price: "R$50,00" },
      { label: "11 a 50 usuários",     price: "R$40,00" },
      { label: "Acima de 50 usuários", price: "R$30,00" },
    ],
  },
  {
    logo: "/i3mga.svg", logoW: 165, logoH: 51,
    subtitle: "Para a sua seguradora (Produto fora do combo)",
    tiers: [
      { label: "Implantação",    price: "R$200.000,00" },
      { label: "Mensalidade",    price: "R$5.000,00" },
      { label: "Valor garantido", price: "R$50.000,00" },
    ],
  },
  {
    logo: "/i3app.svg", logoW: 281, logoH: 51,
    subtitle: "Para a sua associação e central de rastreamento (Valor mínimo + adesão dentro do combo)",
    tiers: [
      { label: "App Consultor",       price: "R$200,00", note: "Personalizado" },
      { label: "App Associado",       price: "R$200,00", note: "Personalizado" },
      { label: "App Rastreamento",    price: "R$200,00", note: "Personalizado" },
      { label: "Customizado em Loja", price: "R$2.000,00" },
    ],
  },
  {
    logo: "/i3track.svg", logoW: 200, logoH: 51,
    subtitle: "Para a sua central de rastreamento (Valor mínimo + adesão ou valor avulso dentro do combo)",
    tiers: [
      { label: "0 a 500 veículos",          price: "R$4,00" },
      { label: "501 a 1.000 veículos",      price: "R$3,00" },
      { label: "Acima de 1.000 veículos",   price: "R$2,00" },
    ],
  },
  {
    name: "i3Integrações",
    subtitle: "Para a sua associação (Valor mínimo dentro do combo) — Produto adicional",
    tiers: [
      { label: "Chatbot sem IA", price: "R$300,00" },
      { label: "Chatbot com IA", price: "R$600,00" },
    ],
  },
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 10l4 4 8-8" stroke="#0066ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PlanosPage() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(610);

  useEffect(() => {
    function update() {
      setCardWidth(window.innerWidth < 768 ? window.innerWidth - 40 : 610);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isMobile = cardWidth < 610;
  const visibleCount = isMobile ? 1 : 2;
  const canPrev = index > 0;
  const canNext = index < plans.length - visibleCount;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((v) => (v < plans.length - visibleCount ? v + 1 : 0));
    }, 2500);
    return () => clearInterval(timer);
  }, [visibleCount]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Topbar />
      <Navbar />
      <main className="flex-1 relative overflow-hidden">
        {/* Hero bg */}
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

        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-20 md:py-0 gap-5" style={{ minHeight: 400 }}>
          <AnimatedHeading as="h1" className="text-[32px] md:text-[48px]" style={{ color: "#3385ff", fontFamily: font, fontWeight: 400, lineHeight: "normal", margin: 0 }}>
            Visão geral dos planos
          </AnimatedHeading>
          <p className="text-[16px] md:text-[20px]" style={{ color: "#fff", fontFamily: font, fontWeight: 400, lineHeight: 1.4, maxWidth: 616, margin: 0 }}>
            Escolha o plano sob medida para a sua empresa
          </p>
        </div>
      </main>

      {/* Nav buttons + combo info */}
      <div className="max-w-[1280px] mx-auto px-5 w-full pt-12 md:pt-20 pb-16">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          {/* Combo info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ color: "#f7f7f7", fontSize: isMobile ? 15 : 20, fontFamily: font, fontWeight: 400, lineHeight: 1.5, margin: 0 }}>
              <span style={{ color: "#3385ff", fontWeight: 600 }}>Optando pelo combo i3Gestão + Qualquer outra tecnologia</span> — o valor da 2ª solução será por valor adicional.
            </p>
            <p style={{ color: "#f7f7f7", fontSize: isMobile ? 15 : 20, fontFamily: font, fontWeight: 400, lineHeight: 1.5, margin: 0 }}>
              Optando somente por <span style={{ color: "#3385ff", fontWeight: 600 }}>1 tecnologia abaixo</span>, o valor seguirá conforme o plano escolhido.
            </p>
          </div>

          {/* Arrows */}
          <div style={{ display: "flex", gap: 16, flexShrink: 0 }}>
            {[{ dir: -1, disabled: !canPrev }, { dir: 1, disabled: !canNext }].map(({ dir, disabled }, i) => (
              <button
                key={i}
                onClick={() => setIndex((v) => v + dir)}
                disabled={disabled}
                style={{
                  width: 56, height: 56,
                  background: "#f7f7f7",
                  border: "none",
                  borderRadius: 12,
                  cursor: disabled ? "not-allowed" : "pointer",
                  opacity: disabled ? 0.3 : 1,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "opacity 0.2s",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {dir === -1 ? <path d="M15 18L9 12L15 6" /> : <path d="M9 18L15 12L9 6" />}
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards slider */}
      <div style={{ width: "100%", overflow: "hidden", paddingBottom: 80 }}>
        <div
          style={{
            display: "flex",
            gap: 20,
            paddingLeft: 20,
            paddingRight: 20,
            transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
            transform: `translateX(calc(-${index} * (${cardWidth}px + 20px)))`,
          }}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                width: cardWidth,
                minWidth: cardWidth,
                background: "#171717",
                border: "1px solid #242424",
                borderRadius: 32,
                padding: isMobile ? 28 : 72,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 32,
                opacity: i >= index && i < index + visibleCount ? 1 : 0.6,
                transition: "opacity 0.3s",
              }}
            >
              {/* Top */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {"logo" in plan && plan.logo ? (
                  <img
                    src={plan.logo} alt=""
                    style={{
                      height: isMobile ? (plan.logoH ?? 51) * 0.75 : (plan.logoH ?? 51),
                      width: "auto",
                      objectFit: "contain",
                      objectPosition: "left",
                    }}
                  />
                ) : (
                  <span style={{ color: "#f7f7f7", fontSize: isMobile ? 22 : 32, fontFamily: font, fontWeight: 700, letterSpacing: "-0.5px" }}>
                    {"name" in plan ? plan.name : ""}
                  </span>
                )}
                <p style={{ color: "#f7f7f7", fontSize: isMobile ? 15 : 20, fontFamily: font, fontWeight: 500, lineHeight: 1.4, letterSpacing: "-0.36px", margin: 0 }}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Tiers */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {plan.tiers.map((tier, ti) => (
                  <div key={ti} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <CheckIcon />
                        <span style={{ color: "#f7f7f7", fontSize: isMobile ? 13 : 16, fontFamily: font, fontWeight: 500, letterSpacing: "-0.36px" }}>
                          {tier.label}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                        {"note" in tier && tier.note && (
                          <span style={{ color: "#f7f7f7", fontSize: 11, fontFamily: font, fontWeight: 500 }}>{tier.note}</span>
                        )}
                        <span style={{ color: "#0066ff", fontSize: isMobile ? 24 : 40, fontFamily: font, fontWeight: 700, letterSpacing: "-0.36px", lineHeight: 1 }}>
                          {tier.price}
                        </span>
                      </div>
                    </div>
                    {ti < plan.tiers.length - 1 && (
                      <div style={{ height: 1, position: "relative" }}>
                        <div style={{ position: "absolute", inset: "-0.5px 0" }}>
                          <img src={IMG_DIVIDER} alt="" style={{ display: "block", width: "100%", height: "100%" }} />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ position: "relative", borderRadius: 6, padding: 2, overflow: "hidden" }}>
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
                  style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "#1956f3",
                    borderRadius: 4,
                    padding: isMobile ? 16 : 20,
                    color: "#f7f7f7",
                    fontSize: 15,
                    fontFamily: font,
                    fontWeight: 600,
                    textDecoration: "none",
                    boxShadow: "0px 2px 5px rgba(31,36,40,0.25)",
                  }}
                >
                  Agende uma demonstração
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
