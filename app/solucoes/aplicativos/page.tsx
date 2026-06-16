"use client";

import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeUp from "../../components/FadeUp";
import CountUp from "../../components/CountUp";

const font = "var(--font-roobert), sans-serif";

const features = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>,
    title: "App do Associado com rastreamento em tempo real",
    desc: "O associado acompanha a localização do seu veículo diretamente pelo app, com histórico de deslocamentos e alertas instantâneos.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "App do Consultor com comissionamento multinível",
    desc: "Consultores visualizam sua carteira, indicadores de desempenho e comissões em tempo real, com gestão de rede multinível.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>,
    title: "Vistoria digital com termo de aceite",
    desc: "Realize vistorias completas pelo celular com captura de fotos, preenchimento de dados e assinatura digital do associado.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
    title: "Notificações e alertas personalizados",
    desc: "Envie notificações push segmentadas para associados e consultores com mensagens relevantes no momento certo.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>,
    title: "Resumos diários de desempenho veicular",
    desc: "O associado recebe relatórios automáticos com dados de uso do veículo, km percorridos e comportamento ao volante.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="white"/><circle cx="17.5" cy="10.5" r=".5" fill="white"/><circle cx="8.5" cy="7.5" r=".5" fill="white"/><circle cx="6.5" cy="12.5" r=".5" fill="white"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
    title: "White label com identidade visual da empresa",
    desc: "Os aplicativos são publicados com o nome, logo e cores da sua associação nas lojas Android e iOS.",
  },
];

const stats = [
  { to: 9000, prefix: "+", suffix: "", label: "Consultores cadastrados" },
  { to: 300,  prefix: "+", suffix: "", label: "Aplicativos baixados" },
];

export default function AplicativosPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Topbar />
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative w-full overflow-hidden" style={{ background: "#0052e6", minHeight: 400 }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/pattern-services.png')", backgroundRepeat: "repeat", backgroundSize: "auto" }} />
          <div className="relative z-10 max-w-[1280px] mx-auto px-5 w-full flex flex-col justify-center gap-6" style={{ minHeight: 400, paddingTop: 60, paddingBottom: 60 }}>
            <h1 className="sr-only">i3 Aplicativos — Apps Mobile White Label</h1>
            <FadeUp>
              <img src="/i3app-white.svg" alt="i3 Aplicativos" style={{ height: 48, width: "auto", objectFit: "contain", objectPosition: "left" }} />
            </FadeUp>
            <FadeUp delay={0.15}>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 20, fontFamily: font, fontWeight: 400, lineHeight: 1.5, maxWidth: 560, margin: 0 }}>
                Aplicativos mobile customizados para Android e iOS com a identidade da sua empresa.
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
                Tudo que sua associação precisa no celular
              </h2>
              <p style={{ color: "#a0a0a0", fontSize: 18, fontFamily: font, margin: 0, maxWidth: 560, lineHeight: 1.6 }}>
                Apps nativos para associados e consultores, publicados com a identidade visual da sua empresa nas lojas Android e iOS.
              </p>
            </FadeUp>

            {/* 2 colunas: imagem + lista */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Imagem */}
              <div className="flex-1 min-w-0 relative" style={{ alignSelf: "stretch", minHeight: 360, borderRadius: 24, overflow: "hidden" }}>
                <Image src="/inside-app.png" alt="i3 Aplicativos" fill style={{ objectFit: "cover", objectPosition: "bottom" }} />
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
                  <h2 className="text-[22px] md:text-[39px] font-semibold leading-[1.3] md:leading-[48px] max-w-[848px] text-center md:text-left" style={{ color: "#0047cc", fontFamily: font, margin: 0 }}>
                    Pronto para levar sua associação para o celular dos seus associados?
                  </h2>
                  <div className="self-center md:self-start" style={{ position: "relative", borderRadius: 10, padding: 2, overflow: "hidden" }}>
                    <motion.div style={{ position: "absolute", inset: "-150%", background: "conic-gradient(from 0deg, transparent 0%, transparent 65%, #66a3ff 78%, #ffffff 83%, #66a3ff 88%, transparent 100%)" }} animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
                    <Link href="/contato" className="relative z-10 inline-flex items-center justify-center px-[28px] py-[18px] rounded-[8px] text-[16px] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]" style={{ background: "#1956f3", color: "#f7f7f7", fontFamily: font, textDecoration: "none" }}>Agende uma demonstração</Link>
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
