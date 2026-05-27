"use client";

import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "../../components/FadeUp";

const font = "var(--font-roobert), sans-serif";

const features = [
  {
    icon: "/scan.svg",
    title: "Emissão de apólice integrada à seguradora",
    desc: "Emita apólices diretamente pela plataforma, já integradas com as seguradoras parceiras e homologadas, sem retrabalho ou processos paralelos.",
  },
  {
    icon: "/chart-column.svg",
    title: "Relatórios e auditoria online",
    desc: "Acompanhe indicadores de desempenho da operação com relatórios detalhados e auditoria online em tempo real.",
  },
  {
    icon: "/shield-check.svg",
    title: "Gestão de pagamentos",
    desc: "Controle todos os pagamentos da operação com conciliação automática e visibilidade completa dos faturáveis.",
  },
  {
    icon: "/map-pin.svg",
    title: "Cotações e planos pré-configurados",
    desc: "Configure planos e preços com antecedência e gere cotações rápidas para segurados com poucos cliques.",
  },
  {
    icon: "/radar.svg",
    title: "Gestão dos faturáveis",
    desc: "Centralize o controle de todos os itens faturáveis da operação, com visão consolidada e gestão simplificada.",
  },
  {
    icon: "/lock.svg",
    title: "Operação 100% integrada com a seguradora",
    desc: "MGA totalmente alinhado às regras da seguradora, com indicadores facilitados e gestão efetiva da operação.",
  },
];

const stats = [
  { value: "100%", label: "Integrado à seguradora" },
  { value: "99%",  label: "Disponibilidade na plataforma" },
  { value: "24/7", label: "Suporte técnico especializado" },
];

export default function MgaPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Topbar />
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative w-full overflow-hidden" style={{ background: "#0052e6", minHeight: 400 }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/pattern-services.png')", backgroundRepeat: "repeat", backgroundSize: "auto" }} />
          <div className="relative z-10 max-w-[1280px] mx-auto px-5 w-full flex flex-col justify-center gap-6" style={{ minHeight: 400, paddingTop: 60, paddingBottom: 60 }}>
            <FadeUp>
              <img src="/i3mga-white.svg" alt="i3 MGA" style={{ height: 48, width: "auto", objectFit: "contain", objectPosition: "left" }} />
            </FadeUp>
            <FadeUp delay={0.15}>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 20, fontFamily: font, fontWeight: 400, lineHeight: 1.5, maxWidth: 560, margin: 0 }}>
                Sistema completo de gestão de seguros para MGAs com emissão de apólice, cotações e faturamento integrados à seguradora.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div style={{ position: "relative", borderRadius: 10, padding: 2, overflow: "hidden", display: "inline-block", alignSelf: "flex-start" }}>
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
                  className="relative z-10 inline-flex items-center justify-center px-[20px] py-[14px] rounded-[8px] text-[14px] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                  style={{ background: "white", color: "#0052e6", fontFamily: font, fontWeight: 600, textDecoration: "none" }}
                >
                  Agendar uma demonstração
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: "#111111", borderBottom: "1px solid #242424" }}>
          <div className="max-w-[1280px] mx-auto px-5 py-12 flex flex-col md:flex-row gap-8 justify-between">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1} className="flex-1 flex flex-col items-center text-center gap-2">
                <span style={{ fontSize: 40, fontWeight: 700, color: "#3385ff", fontFamily: font, lineHeight: 1 }}>{s.value}</span>
                <span style={{ fontSize: 16, color: "#a0a0a0", fontFamily: font }}>{s.label}</span>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="max-w-[1280px] mx-auto px-5 py-20">
          <div className="flex flex-col gap-12">
            <FadeUp className="flex flex-col gap-4">
              <h2 style={{ color: "#f7f7f7", fontSize: 36, fontWeight: 600, fontFamily: font, margin: 0 }}>
                Gestão completa para a sua operação de seguros
              </h2>
              <p style={{ color: "#a0a0a0", fontSize: 18, fontFamily: font, margin: 0, maxWidth: 560, lineHeight: 1.6 }}>
                Da cotação à apólice, o i3MGA centraliza toda a operação da sua MGA com integração nativa às seguradoras parceiras homologadas.
              </p>
            </FadeUp>

            {/* 2 colunas: imagem + lista */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Imagem */}
              <FadeUp className="flex-1 min-w-0">
                <img src="/inside-mga.png" alt="i3 MGA" className="w-full h-full object-cover object-bottom rounded-[24px]" style={{ minHeight: 360 }} />
              </FadeUp>

              {/* Lista de funcionalidades */}
              <div className="flex-1 min-w-0 flex flex-col gap-8">
                {features.map((f, i) => (
                  <FadeUp key={f.title} delay={i * 0.07}>
                    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{ width: 40, height: 40, background: "#0052e6", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <img src={f.icon} alt="" style={{ width: 20, height: 20, filter: "brightness(0) invert(1)" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <h3 style={{ color: "#f7f7f7", fontSize: 16, fontWeight: 600, fontFamily: font, margin: 0 }}>{f.title}</h3>
                        <p style={{ color: "#a0a0a0", fontSize: 14, fontFamily: font, margin: 0, lineHeight: 1.7 }}>{f.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full" style={{ background: "#0d0d0d" }}>
          <div className="max-w-[1280px] mx-auto px-5 py-[64px]">
            <FadeUp>
            <div
              className="rounded-[12px] p-[12px]"
              style={{
                background: "linear-gradient(180deg, rgba(102,163,255,0.4) 0%, rgba(102,163,255,0) 100%)",
                border: "1px solid rgba(102,163,255,0.5)",
                boxShadow: "0px 0px 15.4px 0px rgba(0,0,0,0.35)",
                backdropFilter: "blur(5.45px)",
              }}
            >
              <div
                className="relative overflow-hidden rounded-[8px] flex items-center justify-center px-6 md:px-[80px] py-16 md:py-0"
                style={{ background: "white", minHeight: 400 }}
              >
                <img src="/pattern-hero.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
                <div className="relative flex flex-col gap-[40px] items-center w-full text-center">
                  <h2
                    className="text-[22px] md:text-[39px] font-semibold leading-[1.3] md:leading-[48px] max-w-[848px]"
                    style={{ color: "#0047cc", fontFamily: font, margin: 0 }}
                  >
                    Pronto para modernizar a gestão da sua operação de seguros?
                  </h2>
                  <div style={{ position: "relative", borderRadius: 10, padding: 2, overflow: "hidden" }}>
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
                      className="relative z-10 inline-flex items-center justify-center px-[20px] py-[14px] rounded-[8px] text-[14px] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                      style={{ background: "#1956f3", color: "#f7f7f7", fontFamily: font, textDecoration: "none" }}
                    >
                      Agende uma demonstração
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            </FadeUp>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
