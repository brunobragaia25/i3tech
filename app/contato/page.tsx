"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import AnimatedHeading from "../components/AnimatedHeading";

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: "relative", width: 72, height: 72, flexShrink: 0 }}>
      {/* Outer ring — stroke #C2FFFF at 15% opacity */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        border: "1px solid rgba(153,194,255,0.15)",
      }} />
      {/* Inner circle — 44px, #0052E6 glow */}
      <div style={{
        position: "absolute", inset: 14, borderRadius: "50%",
        border: "1px solid #0052E6",
      }} />
      {/* Icon */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {children}
      </div>
    </div>
  );
}
const IMG_DIVIDER       = "https://www.figma.com/api/mcp/asset/a9f02d6e-2204-4509-8bb8-bff0bbe9bd90";

const produtos = ["i3 CRM", "i3 Gestão", "i3 Mga", "i3 Track", "i3 Integrações", "Aplicativos"];

const font = "var(--font-roobert), sans-serif";

const inputStyle: React.CSSProperties = {
  background: "transparent",
  border: "1px solid #333",
  borderRadius: 300,
  height: 48,
  width: "100%",
  padding: "0 20px",
  color: "#f7f7f7",
  fontFamily: font,
  fontSize: 14,
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  color: "#f7f7f7",
  fontFamily: font,
  fontSize: 16,
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContatoPage() {
  const [produto, setProduto] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      nome:     (form.elements.namedItem("nome")     as HTMLInputElement).value,
      email:    (form.elements.namedItem("email")    as HTMLInputElement).value,
      celular:  (form.elements.namedItem("celular")  as HTMLInputElement).value,
      endereco: (form.elements.namedItem("endereco") as HTMLInputElement).value,
      empresa:  (form.elements.namedItem("empresa")  as HTMLInputElement).value,
      produto,
      mensagem: (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

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
            Fale conosco
          </AnimatedHeading>
          <p className="text-[16px] md:text-[20px]" style={{ color: "#fff", fontFamily: font, fontWeight: 400, lineHeight: 1.4, maxWidth: 616, margin: 0 }}>
            Entre em contato conosco e agende a sua demonstração
          </p>
        </div>
      </main>

      {/* Form section */}
      <div className="max-w-[1280px] mx-auto px-5 w-full pt-12 md:pt-20 pb-16 md:pb-32">
        <div className="flex flex-col md:flex-row gap-5 items-stretch">

          {/* Left — info cards */}
          <div className="flex flex-col gap-4 md:gap-5 md:flex-shrink-0 order-2 md:order-1">
            {/* Phone */}
            <div style={{ background: "#171717", border: "1px solid #333", borderRadius: 40, padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
              <IconCircle>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f7f7f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </IconCircle>
              <div style={{ height: 1, position: "relative" }}>
                <div style={{ position: "absolute", inset: "-0.5px 0" }}>
                  <img src={IMG_DIVIDER} alt="" style={{ display: "block", width: "100%", height: "100%" }} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ color: "#f7f7f7", fontSize: 13, fontFamily: font }}>+55 (31) 2510-8536</span>
                <span style={{ color: "#f7f7f7", fontSize: 13, fontFamily: font }}>+55 (31) 99720-4995</span>
              </div>
            </div>

            {/* Email */}
            <div style={{ background: "#171717", border: "1px solid #333", borderRadius: 40, padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
              <IconCircle>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f7f7f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </IconCircle>
              <div style={{ height: 1, position: "relative" }}>
                <div style={{ position: "absolute", inset: "-0.5px 0" }}>
                  <img src={IMG_DIVIDER} alt="" style={{ display: "block", width: "100%", height: "100%" }} />
                </div>
              </div>
              <span style={{ color: "#f7f7f7", fontSize: 13, fontFamily: font }}>vinicius@i3tech.digital</span>
            </div>

            {/* Location — hidden on mobile to save space */}
            <div style={{ background: "#171717", border: "1px solid #333", borderRadius: 40, padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
              <IconCircle>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f7f7f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </IconCircle>
              <div style={{ height: 1, position: "relative" }}>
                <div style={{ position: "absolute", inset: "-0.5px 0" }}>
                  <img src={IMG_DIVIDER} alt="" style={{ display: "block", width: "100%", height: "100%" }} />
                </div>
              </div>
              <p style={{ color: "#f7f7f7", fontSize: 13, fontFamily: font, lineHeight: 1.8, margin: 0, whiteSpace: "pre-line" }}>
                R. Batista Santiago, 81 - Liberdade,{"\n"}Belo Horizonte - MG, 31270-230
              </p>
            </div>
          </div>

          {/* Right — form card */}
          <div className="flex-1 min-w-0 order-1 md:order-2" style={{ background: "#171717", border: "1px solid #333", borderRadius: 40, padding: 28, display: "flex", flexDirection: "column", gap: 24 }}>
            {status === "success" ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, padding: "64px 0", textAlign: "center", flex: 1, width: "100%" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#1956f3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ color: "#fff", fontSize: 28, fontFamily: font, fontWeight: 600, margin: 0 }}>Mensagem enviada!</h3>
                <p style={{ color: "#a0a0a0", fontSize: 18, fontFamily: font, margin: 0 }}>Entraremos em contato em até 48h.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* Nome */}
                <div className="flex flex-col gap-4">
                  <label style={labelStyle}>Nome completo*</label>
                  <input name="nome" type="text" required placeholder="Digite seu nome completo" style={inputStyle} />
                </div>

                {/* Email + Celular */}
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="flex-1 flex flex-col gap-4">
                    <label style={labelStyle}>E-mail</label>
                    <input name="email" type="email" placeholder="Digite seu e-mail" style={inputStyle} />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <label style={labelStyle}>Celular*</label>
                    <input name="celular" type="tel" required placeholder="Digite seu DDD+Celular" style={inputStyle} />
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex flex-col gap-4">
                  <label style={labelStyle}>Seu endereço</label>
                  <input name="endereco" type="text" placeholder="Digite seu endereço" style={inputStyle} />
                </div>

                {/* Empresa + Produto */}
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="flex-1 flex flex-col gap-4">
                    <label style={labelStyle}>Nome da sua empresa</label>
                    <input name="empresa" type="text" placeholder="Digite o nome da sua empresa" style={inputStyle} />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <label style={labelStyle}>Escolha o produto</label>
                    <div style={{ position: "relative" }}>
                      <select
                        value={produto}
                        onChange={(e) => setProduto(e.target.value)}
                        style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none", paddingRight: 44, cursor: "pointer", background: "transparent" }}
                      >
                        <option value="" disabled style={{ background: "#1a1a1a" }}>Selecione um produto</option>
                        {produtos.map((p) => (
                          <option key={p} value={p} style={{ background: "#1a1a1a" }}>{p}</option>
                        ))}
                      </select>
                      <svg style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f7f7f7" strokeWidth="2">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Mensagem */}
                <div className="flex flex-col gap-4 flex-1">
                  <label style={labelStyle}>Escreva sua mensagem</label>
                  <textarea
                    name="mensagem"
                    required
                    placeholder="Digite sua mensagem ou dúvida"
                    style={{ ...inputStyle, height: 160, borderRadius: 20, padding: 20, resize: "vertical" }}
                  />
                </div>

                {status === "error" && (
                  <p style={{ color: "#f87171", fontSize: 14, fontFamily: font, margin: 0 }}>
                    Erro ao enviar. Por favor, tente novamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    background: "#1956f3",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 4,
                    padding: 20,
                    color: "#f7f7f7",
                    fontSize: 16,
                    fontFamily: font,
                    fontWeight: 600,
                    width: "100%",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    opacity: status === "loading" ? 0.6 : 1,
                    boxShadow: "0px 2px 5px rgba(31,36,40,0.25)",
                  }}
                >
                  {status === "loading" ? "Enviando..." : "Envie sua mensagem"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
