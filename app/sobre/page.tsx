"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import AnimatedHeading from "../components/AnimatedHeading";
import CountUp from "../components/CountUp";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import MuxPlayer from "@mux/mux-player-react";
import type MuxPlayerElement from "@mux/mux-player";

const font = "var(--font-roobert), sans-serif";

const MUX_PLAYBACK_ID = "HnpffWGQ6UmotVIoBbjibc00VHv801e2V2Yjm00knbdLac";

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<MuxPlayerElement>(null);

  function handlePlay() {
    setPlaying(true);
    setTimeout(() => playerRef.current?.play(), 50);
  }

  return (
    <div className="w-full rounded-[40px] overflow-hidden relative" style={{ background: "#000", aspectRatio: "16/9" }}>
      <MuxPlayer
        ref={playerRef}
        playbackId={MUX_PLAYBACK_ID}
        style={{ width: "100%", height: "100%", display: "block", ["--controls" as string]: playing ? undefined : "none" }}
        accentColor="#1956f3"
      />

      <AnimatePresence>
        {!playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)" }}
            onClick={handlePlay}
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.18, 1], opacity: [0.25, 0.08, 0.25] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }}
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.15, 0.35] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                style={{ position: "absolute", width: 108, height: 108, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }}
              />
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                transition={{ duration: 0.2 }}
                style={{ width: 80, height: 80, borderRadius: "50%", background: "#1956f3", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(25,86,243,0.5), 0 2px 8px rgba(0,0,0,0.4)", position: "relative", zIndex: 1 }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 4 }}>
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </motion.div>
            </div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-6 text-[14px] font-semibold uppercase"
              style={{ color: "rgba(255,255,255,0.7)", fontFamily: font, letterSpacing: "0.12em" }}
            >
              Assistir vídeo
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function EnricoCard({ font }: { font: string }) {
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
          style={{ borderRadius: 4, overflow: "hidden", position: "relative", flexShrink: 0 }}
        >
          <img
            src="/foto-enrico.png"
            alt="Enrico Neto"
            style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          />
        </motion.div>
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
  );
}

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
            src="/FOTO VINICIUS DA COSTA (3).jpeg"
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
        </div>

        {/* Divider */}
        <div style={{ height: 1, width: "100%", background: "rgba(255,255,255,0.08)" }} />

        {/* Video + stats */}
        <div className="flex flex-col gap-12 md:gap-[72px] items-center w-full">

          {/* Video placeholder */}
          <VideoPlayer />

          {/* Stats — 2×2 on mobile, 4 in a row on desktop */}
          {(() => {
            const stats = [
              { to: 2300,   prefix: "+ De ", suffix: "",      label: "entidade de proteção patrimonial mutualista;" },
              { to: 60000,  prefix: "+ De ", suffix: "",      label: "itens na gestão administrativa;" },
              { to: 160000, prefix: "+ De ", suffix: "",      label: "cotações realizadas;" },
              { to: 3,      prefix: "+ De ", suffix: " Mga",  label: "atendidos;" },
              { to: 45,     prefix: "+ De ", suffix: "",      label: "Centrais de rastreamento utilizando o nosso sistema." },
            ];
            const StatItem = ({ stat, showDivider }: { stat: typeof stats[0]; showDivider: boolean }) => (
              <div className="flex items-center gap-8 md:gap-[60px]">
                <div className="flex flex-col gap-3 items-center text-center flex-1">
                  <span className="text-[26px] md:text-[34px]" style={{ color: "#f7f7f7", fontFamily: font, fontWeight: 700, lineHeight: 1 }}>
                    <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} duration={2} />
                  </span>
                  <span className="text-[13px] md:text-[16px]" style={{ color: "#66a3ff", fontFamily: font, fontWeight: 600, lineHeight: 1.4, maxWidth: 231 }}>
                    {stat.label}
                  </span>
                </div>
                {showDivider && <div className="hidden md:block" style={{ width: 1, alignSelf: "stretch", background: "rgba(255,255,255,0.12)" }} />}
              </div>
            );
            return (
              <div className="flex flex-col gap-8 w-full items-center">
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-[60px] justify-center">
                  {stats.slice(0, 3).map((stat, i) => <StatItem key={i} stat={stat} showDivider={i < 2} />)}
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-[60px] md:justify-center">
                  {stats.slice(3).map((stat, i) => <StatItem key={i} stat={stat} showDivider={i < 1} />)}
                </div>
              </div>
            );
          })()}

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
            <EnricoCard font={font} />

            {/* Card 2 — Vinicius da Costa */}
            <ViniciusCard font={font} />
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-5 py-[64px] w-full">
          {/* Outer glass card */}
          <div
            className="rounded-[12px] p-[12px]"
            style={{
              background: "linear-gradient(180deg, rgba(102,163,255,0.4) 0%, rgba(102,163,255,0) 100%)",
              border: "1px solid rgba(102,163,255,0.5)",
              boxShadow: "0px 0px 15.4px 0px rgba(0,0,0,0.35)",
              backdropFilter: "blur(5.45px)",
            }}
          >
            {/* Inner white card */}
            <div
              className="relative overflow-visible md:overflow-hidden rounded-[8px] flex flex-col md:flex-row items-stretch"
              style={{ background: "white", minHeight: 560 }}
            >
              <img src="/pattern-hero.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
              <div className="relative flex flex-col gap-[40px] justify-center items-center md:items-start flex-1 px-6 md:px-[80px] pt-10 pb-0 md:py-0" style={{ zIndex: 1 }}>
                <AnimatedHeading
                  as="h2"
                  className="text-[22px] md:text-[39px] font-semibold leading-[1.3] md:leading-[48px] max-w-[848px] text-center md:text-left"
                  style={{ color: "#0047cc", fontFamily: "var(--font-roobert), sans-serif" }}
                >
                  Pronto para se conectar no que há de mais inovador no segmento.
                </AnimatedHeading>
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
                    className="relative z-10 inline-flex items-center justify-center px-[20px] py-[14px] rounded-[8px] text-[14px] transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                    style={{ background: "#1956f3", color: "#f7f7f7", fontFamily: "var(--font-roobert), sans-serif" }}
                  >
                    Agende uma demonstração
                  </Link>
                </div>
              </div>
              <div className="block w-full h-[380px] md:h-auto md:w-[480px] shrink-0" style={{ position: "relative", overflow: "visible" }}>
                <img src="/foto-cta-sobre.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0" style={{ width: "90%", height: "90%", objectFit: "contain", objectPosition: "bottom", display: "block", zIndex: 1 }} />
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }} className="absolute bottom-[60px] left-[16px] md:bottom-[220px] md:left-[-80px] scale-[0.75] md:scale-100 origin-bottom-left" style={{ zIndex: 2 }}>
                  <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", borderRadius: 16, padding: 8 }}>
                    <div style={{ background: "white", borderRadius: 10, display: "flex", alignItems: "center", gap: 12, padding: "12px 20px 12px 12px" }}>
                      <div style={{ width: 44, height: 44, background: "#dae3ff", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0052e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span style={{ fontSize: 15, fontWeight: 600, color: "#0d0d0d", fontFamily: "var(--font-roobert), sans-serif", whiteSpace: "nowrap" }}>Tecnologia própria</span>
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }} className="absolute top-[160px] md:top-[380px] right-[16px] md:right-[120px] scale-[0.75] md:scale-100 origin-bottom-right" style={{ zIndex: 2 }}>
                  <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", borderRadius: 16, padding: 8 }}>
                    <div style={{ background: "white", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", padding: 14 }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0052e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
