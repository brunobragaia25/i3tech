"use client";

import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "../../components/FadeUp";
import CountUp from "../../components/CountUp";

const font = "var(--font-roobert), sans-serif";

const features = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>,
    title: "Rateio e precificação atuarial",
    desc: "Regras de rateio configuráveis com base atuarial, permitindo precificação justa e sustentável para cada perfil de associado.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>,
    title: "Faturamento com i3Pay",
    desc: "Gestão completa de cobranças integrada ao i3Pay, com controle de inadimplência, régua de cobrança e conciliação automática.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>,
    title: "Remessa bancária automática",
    desc: "Geração e envio automático de arquivos de remessa para os principais bancos homologados, sem retrabalho manual.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Gestão de associados, veículos e contratos",
    desc: "Cadastro centralizado de associados, veículos e contratos com histórico completo, documentos e status em tempo real.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>,
    title: "Relatórios gerenciais e dashboards",
    desc: "Painéis com indicadores de desempenho, inadimplência, cancelamentos e crescimento da base de associados.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
    title: "Módulo i3CRM integrado",
    desc: "CRM nativo para gestão do relacionamento com associados, acompanhamento de leads e automação do processo comercial.",
  },
];

const stats = [
  { to: 100,   prefix: "+",  suffix: "",      label: "Associações utilizando o i3Gestão" },
  { to: 99.99, prefix: "",   suffix: "%",     label: "SLA de estabilidade e sistema no ar", decimals: 2 },
  { to: null,  prefix: "",   suffix: "",      label: "Suporte totalmente humanizado", text: "Humanizado" },
];

export default function GestaoPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Topbar />
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative w-full overflow-hidden" style={{ background: "#0052e6", minHeight: 400 }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/pattern-services.png')", backgroundRepeat: "repeat", backgroundSize: "auto" }} />
          <div className="relative z-10 max-w-[1280px] mx-auto px-5 w-full flex flex-col justify-center gap-6" style={{ minHeight: 400, paddingTop: 60, paddingBottom: 60 }}>
            <h1 className="sr-only">i3 Gestão — Plataforma Completa para Associações</h1>
            <FadeUp>
              <img src="/i3gestao-white.svg" alt="i3Gestão" style={{ height: 48, width: "auto", objectFit: "contain", objectPosition: "left" }} />
            </FadeUp>
            <FadeUp delay={0.15}>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 20, fontFamily: font, fontWeight: 400, lineHeight: 1.5, maxWidth: 560, margin: 0 }}>
                ERP completo para associações de proteção veicular com rateio atuarial e faturamento integrado.
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
                  className="relative z-10 inline-flex items-center justify-center px-[28px] py-[18px] rounded-[8px] text-[16px] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
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
                <span style={{ fontSize: 40, fontWeight: 700, color: "#3385ff", fontFamily: font, lineHeight: 1 }}>
                  {"text" in s && s.text ? s.text : <CountUp to={s.to!} prefix={s.prefix} suffix={s.suffix} decimals={"decimals" in s ? s.decimals : 0} duration={2} />}
                </span>
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
                Tudo que sua associação precisa
              </h2>
              <p style={{ color: "#a0a0a0", fontSize: 18, fontFamily: font, margin: 0, maxWidth: 560, lineHeight: 1.6 }}>
                Do rateio atuarial ao faturamento, o i3Gestão centraliza toda a operação da sua associação de proteção veicular em uma única plataforma.
              </p>
            </FadeUp>

            {/* 2 colunas: imagem + lista */}
            <div className="flex flex-col md:flex-row gap-12 items-stretch">
              {/* Imagem */}
              <div className="flex-1 min-w-0 relative" style={{ alignSelf: "stretch", minHeight: 360, borderRadius: 24, overflow: "hidden" }}>
                <Image src="/inside-gestao.png" alt="i3 Gestão" fill style={{ objectFit: "cover", objectPosition: "bottom" }} />
              </div>

              {/* Lista de funcionalidades */}
              <div className="flex-1 min-w-0 flex flex-col gap-8">
                {features.map((f, i) => (
                  <FadeUp key={f.title} delay={i * 0.07}>
                    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{ width: 40, height: 40, background: "#0052e6", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {f.icon}
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
                className="relative overflow-visible md:overflow-hidden rounded-[8px] flex flex-col md:flex-row items-stretch"
                style={{ background: "white", minHeight: 480 }}
              >
                <img src="/pattern-hero.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
                <div className="relative flex flex-col gap-[40px] justify-center items-center md:items-start flex-1 px-6 md:px-[80px] pt-10 pb-0 md:py-0">
                  <h2
                    className="text-[22px] md:text-[39px] font-semibold leading-[1.3] md:leading-[48px] max-w-[848px] text-center md:text-left"
                    style={{ color: "#0047cc", fontFamily: font, margin: 0 }}
                  >
                    Pronto para modernizar a gestão da sua associação?
                  </h2>
                  <div className="self-center md:self-start" style={{ position: "relative", borderRadius: 10, padding: 2, overflow: "hidden" }}>
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
                      className="relative z-10 inline-flex items-center justify-center px-[28px] py-[18px] rounded-[8px] text-[16px] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                      style={{ background: "#1956f3", color: "#f7f7f7", fontFamily: font, textDecoration: "none" }}
                    >
                      Agende uma demonstração
                    </Link>
                  </div>
                </div>
                <div className="block w-full h-[380px] md:h-auto md:w-[480px] shrink-0" style={{ position: "relative", overflow: "visible" }}>
                  <img src="/logo-3d.png" alt="" className="w-[600px] md:w-[700px] md:min-w-[700px] absolute bottom-[20px] md:bottom-[-60px] left-1/2 md:left-[58%]" style={{ transform: "translateX(-50%)", height: "auto", display: "block", zIndex: 0 }} />
                  <img src="/foto-cta-solucoes.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-[-15%] md:translate-x-0" style={{ width: 480, objectFit: "contain", objectPosition: "bottom", display: "block", zIndex: 1 }} />
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
