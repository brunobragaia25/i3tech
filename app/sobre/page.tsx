"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHeading from "../components/AnimatedHeading";
import CountUp from "../components/CountUp";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const font = "var(--font-roobert), sans-serif";

function ViniciusCard({ font }: { font: string }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div style={{ flex: 1, background: "#262626", borderRadius: 16, padding: 12 }}>
      <div style={{ background: "#171717", borderRadius: 8, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <motion.div
          animate={{ height: isMobile ? 300 : hovered ? 460 : 360 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => !isMobile && setHovered(true)}
          onMouseLeave={() => !isMobile && setHovered(false)}
          style={{ borderRadius: 4, overflow: "hidden", position: "relative", background: "#d9d9d9", flexShrink: 0 }}
        >
          <img
            src="https://www.figma.com/api/mcp/asset/6568e389-49ac-4b9b-be16-8f104aee1cc6"
            alt="Vinicius da Costa"
            style={{ position: "absolute", width: "100%", top: "-20.57%", left: 0, maxWidth: "none" }}
          />
        </motion.div>
        <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ color: "#0066ff", fontSize: 24, fontFamily: font, fontWeight: 500, lineHeight: 1 }}>
            Vinicius da Costa
          </span>
          <span style={{ color: "#f7f7f7", fontSize: 12, fontFamily: font, textTransform: "uppercase", lineHeight: 1 }}>
            Sócio e Diretor Comercial da i3Tech (Em Execução)
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SobrePage() {
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
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-20 md:py-0 gap-5" style={{ minHeight: 400, ["--md-h" as string]: "540px" }}>
          <AnimatedHeading as="h1" className="text-[32px] md:text-[48px]" style={{ color: "#3385ff", fontFamily: font, fontWeight: 400, lineHeight: "normal", margin: 0 }}>
            Sobre a i3TECH
          </AnimatedHeading>
          <p className="text-[16px] md:text-[20px]" style={{ color: "#fff", fontFamily: font, fontWeight: 400, lineHeight: 1.4, maxWidth: 616, margin: 0 }}>
            Somos uma empresa de tecnologia especializada no desenvolvimento de soluções para operações veiculares.
          </p>
        </div>
      </main>

      {/* Section 1 */}
      <div className="max-w-[1280px] mx-auto px-5 w-full flex flex-col gap-10 md:gap-[60px] items-center pt-16 md:pt-[128px] pb-10 md:pb-16">

        {/* Text block */}
        <div className="flex flex-col gap-6 md:gap-10 items-center text-center">
          <AnimatedHeading as="p" className="text-[20px] md:text-[32px]" style={{ color: "#f7f7f7", fontFamily: font, fontWeight: 400, lineHeight: "normal", maxWidth: 1008, margin: 0 }}>
            Somos uma empresa de tecnologia do Grupo Brasil Atuarial, com o{" "}
            <span style={{ fontWeight: 600, color: "#0066ff" }}>foco no desenvolvimento de inovações e produtos tecnológicos que envolvem a regra atuarial</span>.
          </AnimatedHeading>
          <p className="text-[16px] md:text-[24px]" style={{ color: "#f7f7f7", fontFamily: font, fontWeight: 400, lineHeight: 1.4, maxWidth: 840, margin: 0 }}>
            Desenvolvemos sistemas e aplicativos que conectam gestão empresarial, vendas e rastreamento inteligente para o nosso segmento.
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, width: "100%", background: "rgba(255,255,255,0.08)" }} />

        {/* Video + stats */}
        <div className="flex flex-col gap-12 md:gap-[72px] items-center w-full">

          {/* Video placeholder */}
          <div className="w-full rounded-[40px] p-2.5" style={{ background: "#cce0ff", height: "clamp(240px, 45vw, 680px)" }}>
            <div style={{ width: "100%", height: "100%", background: "#242424", border: "1px solid rgba(51,133,255,0.5)", borderRadius: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 120, height: 120, borderRadius: "50%", background: "#cce0ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 96, height: 96, borderRadius: "50%", background: "#1956f3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Stats — 2×2 on mobile, 4 in a row on desktop */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-[60px] w-full">
            {[
              { to: 2300,  prefix: "+ de ", suffix: "",      label: "entidade de proteção patrimonial mutualista;" },
              { to: 60000, prefix: "+ de ", suffix: "",      label: "itens na gestão administrativa" },
              { to: 3,     prefix: "+ de ", suffix: " Mga",  label: "atendidos" },
              { to: 45,    prefix: "+ de ", suffix: "",      label: "centrais utilizando nosso sistema" },
            ].map((stat, i, arr) => (
              <div key={i} className="flex items-center gap-8 md:gap-[60px]">
                <div className="flex flex-col gap-3 items-center text-center flex-1">
                  <span className="text-[26px] md:text-[34px]" style={{ color: "#f7f7f7", fontFamily: font, fontWeight: 700, lineHeight: 1 }}>
                    <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} duration={2} />
                  </span>
                  <span className="text-[13px] md:text-[16px]" style={{ color: "#66a3ff", fontFamily: font, fontWeight: 600, lineHeight: 1.4, maxWidth: 231 }}>
                    {stat.label}
                  </span>
                </div>
                {/* Divider only on desktop between items */}
                {i < arr.length - 1 && (
                  <div className="hidden md:block" style={{ width: 1, alignSelf: "stretch", background: "rgba(255,255,255,0.12)" }} />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Nossa Diretoria */}
      <div className="max-w-[1280px] mx-auto px-5 w-full flex flex-col gap-8 md:gap-10 items-center pt-10 md:pt-16 pb-10 md:pb-16">

        <AnimatedHeading as="h2" className="text-[28px] md:text-[40px]" style={{ color: "#0052e6", fontFamily: font, fontWeight: 600, lineHeight: 1.2, textAlign: "center", margin: 0 }}>
          Nossa Diretoria
        </AnimatedHeading>

        <div className="w-full rounded-[20px] p-4" style={{ background: "#171717" }}>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Card 1 — Enrico Neto */}
            <div style={{ flex: 1, background: "#262626", borderRadius: 16, padding: 12 }}>
              <div style={{ background: "#171717", borderRadius: 8, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div style={{ height: 300, background: "#d9d9d9", borderRadius: 4 }} />
                <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 10 }}>
                  <span style={{ color: "#0066ff", fontSize: 22, fontFamily: font, fontWeight: 500, lineHeight: 1 }}>
                    Enrico Neto
                  </span>
                  <span style={{ color: "#f7f7f7", fontSize: 12, fontFamily: font, textTransform: "uppercase", lineHeight: 1 }}>
                    Sócio e fundador da i3Tech (Em Execução)
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 — Vinicius da Costa */}
            <ViniciusCard font={font} />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
