"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";

const font = "var(--font-roobert), sans-serif";

const IMG_DIVIDER = "https://www.figma.com/api/mcp/asset/d46e6838-f32e-4357-a92a-9a09de57136c";

const plans = [
  {
    logo: "/i3gestao.svg", logoW: 211, logoH: 51,
    subtitleMaxW: 392,
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
      { label: "0 a 10 usuários",      price: "R$50" },
      { label: "11 a 50 usuários",     price: "R$40" },
      { label: "Acima de 50 usuários", price: "R$30" },
    ],
  },
  {
    logo: "/i3mga.svg", logoW: 165, logoH: 51,
    subtitle: "Para a sua seguradora (Produto fora do combo)",
    tiers: [
      { label: "Implantação",    price: "R$200.000" },
      { label: "Mensalidade",    price: "R$2.000" },
      { label: "Valor garantido", price: "R$50.000" },
    ],
  },
  {
    logo: "/i3app.svg", logoW: 281, logoH: 51,
    subtitle: "Para a sua associação e central de rastreamento (Valor mínimo + adesão dentro do combo)",
    tiers: [
      { label: "App Consultor",      price: "R$200", note: "Personalizado" },
      { label: "App Associado",      price: "R$200", note: "Personalizado" },
      { label: "App Rastreamento",   price: "R$200", note: "Personalizado" },
      { label: "Customizado em Loja", price: "R$200", note: "Personalizado" },
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
  const canPrev = index > 0;
  const canNext = index < plans.length - 2;

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
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center"
          style={{ height: 540, paddingLeft: 20, paddingRight: 20, gap: 20 }}
        >
          <AnimatedHeading as="h1" style={{ color: "#3385ff", fontSize: 48, fontFamily: font, fontWeight: 400, lineHeight: "normal", margin: 0 }}>
            Visão geral dos planos
          </AnimatedHeading>
          <p style={{ color: "#fff", fontSize: 20, fontFamily: font, fontWeight: 400, lineHeight: 1.4, maxWidth: 616, margin: 0 }}>
            Planos flexíveis de acordo com o tamanho e a complexidade da sua operação.
          </p>
        </div>
      </main>
      {/* Nav buttons — constrained */}
      <div className="max-w-[1280px] mx-auto px-5 w-full" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div style={{ display: "flex", gap: 20 }}>
          {[{ dir: -1, disabled: !canPrev }, { dir: 1, disabled: !canNext }].map(({ dir, disabled }, i) => (
            <button
              key={i}
              onClick={() => setIndex((v) => v + dir)}
              disabled={disabled}
              style={{
                width: 73, height: 73,
                background: "#f7f7f7",
                border: "none",
                borderRadius: 12,
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.3 : 1,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "opacity 0.2s",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={dir === -1 ? "/arrow-left.svg" : "/arrow-right.svg"}
                alt=""
                width={28}
                height={28}
                style={{ filter: "brightness(0)" }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Cards — full width */}
      <div style={{ width: "100%", overflow: "hidden", paddingBottom: 128 }}>
        <div
          style={{
            display: "flex",
            gap: 20,
            paddingLeft: 20,
            paddingRight: 20,
            transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
            transform: `translateX(calc(-${index} * (610px + 20px)))`,
          }}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                width: 610, minWidth: 610, height: 750,
                background: "#171717",
                border: "1px solid #242424",
                borderRadius: 32,
                padding: 72,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                opacity: i === index || i === index + 1 ? 1 : 0.6,
                transition: "opacity 0.3s",
              }}
            >
              {/* Top */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <img src={plan.logo} alt="" style={{ height: plan.logoH, width: plan.logoW, objectFit: "contain", objectPosition: "left" }} />
                <p style={{ color: "#f7f7f7", fontSize: 20, fontFamily: font, fontWeight: 500, lineHeight: 1.4, letterSpacing: "-0.36px", margin: 0 }}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Tiers */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {plan.tiers.map((tier, ti) => (
                  <div key={ti} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <CheckIcon />
                        <span style={{ color: "#f7f7f7", fontSize: 16, fontFamily: font, fontWeight: 500, letterSpacing: "-0.36px" }}>
                          {tier.label}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        {"note" in tier && tier.note && (
                          <span style={{ color: "#f7f7f7", fontSize: 12, fontFamily: font, fontWeight: 500 }}>{tier.note}</span>
                        )}
                        <span style={{ color: "#0066ff", fontSize: 40, fontFamily: font, fontWeight: 700, letterSpacing: "-0.36px", lineHeight: 1 }}>
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
                    padding: 20,
                    color: "#f7f7f7",
                    fontSize: 16,
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
