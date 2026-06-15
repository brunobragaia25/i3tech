"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedHeading from "../components/AnimatedHeading";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
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
    <section className="relative w-full overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 py-20 md:py-0 gap-5" style={{ minHeight: 400 }}>
        <AnimatedHeading as="h1" className="text-[32px] md:text-[48px]" style={{ color: "#3385ff", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 400, lineHeight: "normal", margin: 0 }}>
          Cases
        </AnimatedHeading>
        <p className="text-[16px] md:text-[20px]" style={{ color: "#fff", fontFamily: "var(--font-roobert), sans-serif", fontWeight: 400, lineHeight: 1.4, maxWidth: 616, margin: 0 }}>
          Conheça empresas que transformaram sua operação com a i3TECH.
        </p>
      </div>
    </section>
  );
}

/* ─── Case Cards ─────────────────────────────────── */
const cases = [
  { id: "01", cliente: "Proterbem",    video: "/video-proterbem.mp4" as string | null },
  { id: "02", cliente: "Grupo Conor",  video: null as string | null },
  { id: "03", cliente: "Álamo",        video: null as string | null },
];

function CaseCard({ c, index }: { c: typeof cases[0]; index: number }) {
  return (
    <motion.div
      className="flex flex-col rounded-[24px] overflow-hidden"
      style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Área de vídeo */}
      <div className="relative w-full flex items-center justify-center" style={{ aspectRatio: "16/9", background: "#0d1a33" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 40%, #1956f333 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        {c.video ? (
          <video src={c.video} className="absolute inset-0 w-full h-full object-cover" controls />
        ) : (
          <div className="relative flex flex-col items-center gap-3">
            <div className="flex items-center justify-center rounded-full" style={{ width: 64, height: 64, background: "rgba(0,82,230,0.2)", border: "1px solid rgba(0,82,230,0.5)", backdropFilter: "blur(8px)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#3385ff">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span style={{ color: "#555", fontSize: 12, fontFamily: "var(--font-roobert), sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>Em breve</span>
          </div>
        )}
        <span className="absolute bottom-5 left-6 font-bold select-none" style={{ fontSize: 80, color: "rgba(255,255,255,0.05)", fontFamily: "var(--font-dm-sans), sans-serif", lineHeight: 1 }}>
          {c.id}
        </span>
      </div>

      {/* Nome */}
      <div className="px-6 py-5">
        <span className="text-[12px] font-semibold uppercase tracking-widest" style={{ color: "#555", fontFamily: "var(--font-dm-sans), sans-serif" }}>Cliente</span>
        <h3 className="text-[22px] font-semibold mt-1" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>{c.cliente}</h3>
      </div>
    </motion.div>
  );
}

function CasesGrid() {
  return (
    <section style={{ background: "#0d0d0d" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-5 pt-12 md:pt-[108px] pb-16 md:pb-20">
        <div className="grid grid-cols-1 gap-5">
          {cases.map((c, i) => (
            <CaseCard key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonial Slider ─────────────────────────── */
const testimonials = [
  {
    quote: "A i3Tech transformou completamente a forma como gerenciamos nossa operação. Tínhamos processos manuais que consumiam horas da nossa equipe todo dia — hoje tudo é automatizado e integrado em uma única plataforma.",
    company: "GRUPO CONOR",
    author: "Diretor Operacional, Grupo Conor",
    desafio: "Operação descentralizada com múltiplos sistemas sem integração, gerando retrabalho e dificuldade no controle financeiro e comercial.",
    solucao: "Implementação do i3Gestão e i3CRM integrados, centralizando toda a gestão administrativa, comercial e financeira em uma única plataforma.",
    resultado: "Redução de 60% no tempo operacional",
  },
  {
    quote: "O suporte da i3Tech é diferente de tudo que já experimentamos. Não é um chatbot, é uma equipe real que entende o nosso negócio e resolve de verdade. Isso faz toda a diferença no dia a dia.",
    company: "ÁLAMO",
    author: "Gestor de TI, Álamo",
    desafio: "Dificuldade em rastrear a frota de forma eficiente e integrar as informações com a área financeira e de sinistros.",
    solucao: "Adoção do i3Track com integração nativa ao módulo financeiro, permitindo monitoramento em tempo real e gestão completa de sinistros.",
    resultado: "+400 veículos monitorados",
  },
  {
    quote: "Conseguimos escalar nossa carteira de associados sem precisar aumentar nossa equipe administrativa. A plataforma da i3Tech dá conta de tudo — do cadastro ao boleto — de forma simples e confiável.",
    company: "PROTERBEM",
    author: "CEO, Proterbem",
    desafio: "Crescimento acelerado de associados sem estrutura tecnológica capaz de suportar o volume de cobranças, vistorias e contratos.",
    solucao: "Implantação do i3Gestão com automação de cobranças via remessa bancária, fluxo de vistoria digital e assinatura eletrônica de contratos.",
    resultado: "Crescimento de 3x na carteira",
  },
];

function TestimonialCard({ t, cardWidth }: { t: typeof testimonials[0]; cardWidth: number }) {
  const isMobile = cardWidth < 768;
  return (
    <div
      className="flex-shrink-0 w-full rounded-[32px] flex flex-col md:flex-row gap-8 md:gap-16 items-stretch"
      style={{ background: "#f0f2ef", padding: isMobile ? 28 : 64, flex: 1 }}
    >
      {/* Quote + author */}
      <div className="flex-1 flex flex-col justify-between gap-8">
        <p className="text-[18px] md:text-[28px] leading-[1.4]" style={{ color: "#1a1a1a", fontFamily: "var(--font-dm-sans), sans-serif" }}>
          {t.quote}
        </p>
        <div className="flex flex-col gap-2">
          <span className="text-[18px] md:text-[20px] font-extrabold tracking-[1px] uppercase" style={{ color: "#0052e6", fontFamily: "var(--font-dm-sans), sans-serif" }}>{t.company}</span>
          <span className="text-[13px] md:text-[14px] font-semibold" style={{ color: "#1a1a1a", fontFamily: "var(--font-dm-sans), sans-serif" }}>{t.author}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block self-stretch w-px shrink-0" style={{ background: "#d1d1d1" }} />
      <div className="block md:hidden" style={{ height: 1, background: "#d1d1d1" }} />

      {/* Desafio + Solução + Resultado */}
      <div className="flex-1 flex flex-col gap-8 md:gap-10 justify-between">
        <div className="flex gap-5 items-start">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0052e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1">
            <path d="M4 22V4C4 3.84475 4.03614 3.69164 4.10557 3.55279C4.175 3.41393 4.2758 3.29315 4.4 3.2C5.43858 2.42107 6.70178 2 8 2C11 2 13 4 15.333 4C16.6663 4 17.6887 3.73333 18.4 3.2C18.5486 3.08857 18.7252 3.02072 18.9102 3.00404C19.0952 2.98736 19.2811 3.02252 19.4472 3.10557C19.6133 3.18863 19.753 3.31629 19.8507 3.47427C19.9483 3.63224 20 3.81429 20 4V14C20 14.1552 19.9639 14.3084 19.8944 14.4472C19.825 14.5861 19.7242 14.7069 19.6 14.8C18.5614 15.5789 17.2982 16 16 16C13 16 11 14 8 14C6.52412 14 5.10002 14.544 4 15.528" />
          </svg>
          <div className="flex flex-col gap-1">
            <span className="text-[16px] md:text-[18px] font-bold" style={{ color: "#1a1a1a", fontFamily: "var(--font-dm-sans), sans-serif" }}>Desafio</span>
            <p className="text-[14px] md:text-[16px] leading-[1.6]" style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}>{t.desafio}</p>
          </div>
        </div>
        <div className="flex gap-5 items-start">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0052e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <path d="M21.8006 9.99999C22.2573 12.2413 21.9318 14.5714 20.8785 16.6018C19.8251 18.6322 18.1075 20.24 16.0121 21.1573C13.9167 22.0746 11.5702 22.2458 9.36391 21.6424C7.15758 21.0389 5.2248 19.6974 3.88789 17.8414C2.55097 15.9854 1.89073 13.7272 2.01728 11.4434C2.14382 9.15952 3.04949 6.98808 4.58326 5.29116C6.11703 3.59424 8.18619 2.47442 10.4457 2.11844C12.7052 1.76247 15.0184 2.19185 16.9996 3.33499M8.99961 11L11.9996 14L21.9996 3.99999" />
          </svg>
          <div className="flex flex-col gap-1">
            <span className="text-[16px] md:text-[18px] font-bold" style={{ color: "#1a1a1a", fontFamily: "var(--font-dm-sans), sans-serif" }}>Solução</span>
            <p className="text-[14px] md:text-[16px] leading-[1.6]" style={{ color: "#333", fontFamily: "var(--font-dm-sans), sans-serif" }}>{t.solucao}</p>
          </div>
        </div>
        <p className="text-[26px] md:text-[36px] font-bold" style={{ color: "#003a99", fontFamily: "var(--font-dm-sans), sans-serif" }}>{t.resultado}</p>
      </div>
    </div>
  );
}

function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(1240);
  const total = testimonials.length;
  const canPrev = current > 0;
  const canNext = current < total - 1;

  useEffect(() => {
    function update() {
      setCardWidth(window.innerWidth < 768 ? window.innerWidth - 40 : 1240);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section style={{ background: "#0d0d0d" }}>
      <FadeUp className="flex flex-col gap-8 md:gap-12 py-10 md:py-16">
        {/* Header */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-5 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="text-[26px] md:text-[60px] font-medium leading-[1.2] md:leading-[1.17] tracking-[-0.5px] md:tracking-[-1.5px] max-w-[818px]"
            style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Empresas que transformaram sua operação com a i3TECH
          </h2>
          <div className="flex gap-4 shrink-0">
            {[{ fn: () => { if (canPrev) setCurrent(c => c - 1); }, can: canPrev, label: "Anterior", prev: true },
              { fn: () => { if (canNext) setCurrent(c => c + 1); }, can: canNext, label: "Próximo", prev: false }].map((btn) => (
              <button
                key={btn.label}
                onClick={btn.fn}
                disabled={!btn.can}
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center transition-all duration-150 hover:opacity-80 active:scale-[0.95]"
                style={{ background: "#0052e6", opacity: btn.can ? 1 : 0.3, cursor: btn.can ? "pointer" : "not-allowed" }}
                aria-label={btn.label}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f7f7f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {btn.prev ? <path d="M15 18L9 12L15 6" /> : <path d="M9 18L15 12L9 6" />}
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Cards slider */}
        <div style={{ width: "100%", overflow: "hidden", paddingBottom: 40 }}>
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: 20,
              paddingLeft: 20,
              paddingRight: 20,
              transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
              transform: `translateX(calc(-${current} * (${cardWidth}px + 20px)))`,
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} style={{ minWidth: cardWidth, width: cardWidth, display: "flex" }}>
                <TestimonialCard t={t} cardWidth={cardWidth} />
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

export default function CasesPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Topbar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CasesGrid />
      </main>
      <Footer />
    </div>
  );
}
