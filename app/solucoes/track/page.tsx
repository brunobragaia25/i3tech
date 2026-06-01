"use client";

import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeUp from "../../components/FadeUp";
import CountUp from "../../components/CountUp";
import Link from "next/link";
import { motion } from "framer-motion";

const font = "var(--font-roobert), sans-serif";

const features = [
  {
    icon: "/map-pin.svg",
    title: "Monitoramento em tempo real",
    desc: "Acompanhe a localização de toda a sua frota em um mapa integrado, com atualização contínua e histórico de deslocamentos.",
  },
  {
    icon: "/radar.svg",
    title: "Geocerca com alertas",
    desc: "Defina zonas geográficas e receba alertas automáticos quando um veículo entra ou sai da área configurada.",
  },
  {
    icon: "/shield-check.svg",
    title: "Gestão de sinistros",
    desc: "Registre ocorrências, acompanhe o histórico completo e acione equipes de recuperação diretamente pela plataforma.",
  },
  {
    icon: "/chart-column.svg",
    title: "Relatórios e dashboards",
    desc: "Relatórios de deslocamento, velocidade, acessos e instalações. Dashboard operacional com tudo em uma única tela.",
  },
  {
    icon: "/scan.svg",
    title: "+400 modelos homologados",
    desc: "Compatível com mais de 400 modelos de rastreadores homologados, com conectividade nas principais operadoras do Brasil.",
  },
  {
    icon: "/lock.svg",
    title: "Bloqueio remoto de veículos",
    desc: "Bloqueie veículos inadimplentes ou em situação de sinistro diretamente pela plataforma, com segurança e rastreabilidade.",
  },
];

const stats = [
  { to: 400, prefix: "+", suffix: "",   label: "Rastreadores homologados" },
  { to: 99,  prefix: "",  suffix: "%",  label: "Disponibilidade na plataforma" },
  { to: 24,  prefix: "",  suffix: "/7", label: "Suporte técnico especializado" },
];

export default function TrackPage() {
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
              <img src="/i3track-white.svg" alt="i3Track" style={{ height: 48, width: "auto", objectFit: "contain", objectPosition: "left" }} />
            </FadeUp>
            <FadeUp delay={0.15}>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 20, fontFamily: font, fontWeight: 400, lineHeight: 1.5, maxWidth: 560, margin: 0 }}>
                Software completo de rastreamento veicular com inteligência de dados para centrais de rastreamento.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div style={{ position: "relative", borderRadius: 10, padding: 2, overflow: "hidden", display: "inline-block", alignSelf: "flex-start" }}>
                <motion.div
                  style={{ position: "absolute", inset: "-150%", background: "conic-gradient(from 0deg, transparent 0%, transparent 65%, #66a3ff 78%, #ffffff 83%, #66a3ff 88%, transparent 100%)" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <Link href="/contato" className="relative z-10 inline-flex items-center justify-center px-[20px] py-[14px] rounded-[8px] text-[14px] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]" style={{ background: "white", color: "#0052e6", fontFamily: font, fontWeight: 600, textDecoration: "none" }}>
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
                <span style={{ fontSize: 40, fontWeight: 700, color: "#3385ff", fontFamily: font, lineHeight: 1 }}><CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} duration={2} /></span>
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
                Tudo que sua central precisa
              </h2>
              <p style={{ color: "#a0a0a0", fontSize: 18, fontFamily: font, margin: 0, maxWidth: 560, lineHeight: 1.6 }}>
                Do monitoramento ao faturamento, o i3Track centraliza a operação da sua central de rastreamento em uma única plataforma.
              </p>
            </FadeUp>

            <div className="flex flex-col md:flex-row gap-12 items-stretch">
              <div className="flex-1 min-w-0" style={{ alignSelf: "stretch" }}>
                <img src="/inside-track.png" alt="i3Track" style={{ width: "100%", height: "100%", minHeight: 360, objectFit: "cover", objectPosition: "bottom", borderRadius: 24, display: "block" }} />
              </div>
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
              <div className="rounded-[12px] p-[12px]" style={{ background: "linear-gradient(180deg, rgba(102,163,255,0.4) 0%, rgba(102,163,255,0) 100%)", border: "1px solid rgba(102,163,255,0.5)", boxShadow: "0px 0px 15.4px 0px rgba(0,0,0,0.35)", backdropFilter: "blur(5.45px)" }}>
                <div className="relative overflow-hidden rounded-[8px] flex items-center justify-center px-6 md:px-[80px] py-16 md:py-0" style={{ background: "white", minHeight: 400 }}>
                  <img src="/pattern-hero.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
                  <div className="relative flex flex-col gap-[40px] items-center w-full text-center">
                    <h2 className="text-[22px] md:text-[39px] font-semibold leading-[1.3] md:leading-[48px] max-w-[848px]" style={{ color: "#0047cc", fontFamily: font, margin: 0 }}>
                      Pronto para modernizar sua central de rastreamento?
                    </h2>
                    <div style={{ position: "relative", borderRadius: 10, padding: 2, overflow: "hidden" }}>
                      <motion.div style={{ position: "absolute", inset: "-150%", background: "conic-gradient(from 0deg, transparent 0%, transparent 65%, #66a3ff 78%, #ffffff 83%, #66a3ff 88%, transparent 100%)" }} animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
                      <Link href="/contato" className="relative z-10 inline-flex items-center justify-center px-[20px] py-[14px] rounded-[8px] text-[14px] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]" style={{ background: "#1956f3", color: "#f7f7f7", fontFamily: font, textDecoration: "none" }}>
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
