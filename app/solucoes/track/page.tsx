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
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/></svg>,
    title: "Monitoramento em tempo real",
    desc: "Acompanhe a localização de toda a sua frota em um mapa integrado, com atualização contínua e histórico de deslocamentos.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: "Geocerca com alertas",
    desc: "Defina zonas geográficas e receba alertas automáticos quando um veículo entra ou sai da área configurada.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>,
    title: "Gestão de sinistros",
    desc: "Registre ocorrências, acompanhe o histórico completo e acione equipes de recuperação diretamente pela plataforma.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>,
    title: "Relatórios e dashboards",
    desc: "Relatórios de deslocamento, velocidade, acessos e instalações. Dashboard operacional com tudo em uma única tela.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>,
    title: "+400 modelos homologados",
    desc: "Compatível com mais de 400 modelos de rastreadores homologados, com conectividade nas principais operadoras do Brasil.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    title: "Bloqueio remoto de veículos",
    desc: "Bloqueie veículos inadimplentes ou em situação de sinistro diretamente pela plataforma, com segurança e rastreabilidade.",
  },
];

const stats = [
  { to: 45,    prefix: "+", suffix: "",  label: "Centrais de rastreamento atendidas" },
  { to: null,  prefix: "",  suffix: "",  label: "Suporte Humanizado", text: "Humanizado" },
  { to: 20000, prefix: "+", suffix: "",  label: "Itens rastreados" },
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
                <span style={{ fontSize: 40, fontWeight: 700, color: "#3385ff", fontFamily: font, lineHeight: 1 }}>
                  {"text" in s && s.text ? s.text : <CountUp to={s.to!} prefix={s.prefix} suffix={s.suffix} duration={2} />}
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
              <div className="rounded-[12px] p-[12px]" style={{ background: "linear-gradient(180deg, rgba(102,163,255,0.4) 0%, rgba(102,163,255,0) 100%)", border: "1px solid rgba(102,163,255,0.5)", boxShadow: "0px 0px 15.4px 0px rgba(0,0,0,0.35)", backdropFilter: "blur(5.45px)" }}>
                <div className="relative overflow-hidden rounded-[8px] flex flex-col md:flex-row items-stretch" style={{ background: "white", minHeight: 480 }}>
                  <img src="/pattern-hero.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
                  <div className="relative flex flex-col gap-[40px] justify-center flex-1 px-6 md:px-[80px] py-16 md:py-0">
                    <h2 className="text-[22px] md:text-[39px] font-semibold leading-[1.3] md:leading-[48px] max-w-[848px]" style={{ color: "#0047cc", fontFamily: font, margin: 0 }}>
                      Pronto para modernizar sua central de rastreamento?
                    </h2>
                    <div style={{ position: "relative", borderRadius: 10, padding: 2, overflow: "hidden", alignSelf: "flex-start" }}>
                      <motion.div style={{ position: "absolute", inset: "-150%", background: "conic-gradient(from 0deg, transparent 0%, transparent 65%, #66a3ff 78%, #ffffff 83%, #66a3ff 88%, transparent 100%)" }} animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
                      <Link href="/contato" className="relative z-10 inline-flex items-center justify-center px-[20px] py-[14px] rounded-[8px] text-[14px] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]" style={{ background: "#1956f3", color: "#f7f7f7", fontFamily: font, textDecoration: "none" }}>
                        Agende uma demonstração
                      </Link>
                    </div>
                  </div>
                  <div className="hidden md:block w-[480px] shrink-0" style={{ position: "relative", overflow: "visible" }}>
                    <img src="/foto-cta-solucoes.png" alt="" style={{ position: "absolute", bottom: 0, left: "-15%", width: 480, objectFit: "contain", objectPosition: "bottom", display: "block" }} />
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }} style={{ position: "absolute", bottom: 60, left: -80 }}>
                      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", borderRadius: 16, padding: 8 }}>
                        <div style={{ background: "white", borderRadius: 10, display: "flex", alignItems: "center", gap: 12, padding: "12px 20px 12px 12px" }}>
                          <div style={{ width: 44, height: 44, background: "#dae3ff", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0052e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                          </div>
                          <span style={{ fontSize: 15, fontWeight: 600, color: "#0d0d0d", fontFamily: font, whiteSpace: "nowrap" }}>Veículo rastreado</span>
                        </div>
                      </motion.div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }} style={{ position: "absolute", top: 200, right: 140 }}>
                      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", borderRadius: 16, padding: 8 }}>
                        <div style={{ background: "white", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", padding: 14 }}>
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0052e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                        </div>
                      </motion.div>
                    </motion.div>
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
