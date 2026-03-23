"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

const IMG_PHONE    = "https://www.figma.com/api/mcp/asset/ab932fa4-06d6-4465-a365-1b6362f7b2e5";
const IMG_EMAIL    = "https://www.figma.com/api/mcp/asset/9eee197b-33ce-40bd-b615-5cc088af3dfc";
const IMG_LOCATION = "https://www.figma.com/api/mcp/asset/98cdcb81-8143-4149-a793-d66c7d5e1d71";

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

const produtos = ["i3 CRM", "i3 Gestão", "i3 Mga", "i3 Track", "i3 Expansão", "Aplicativos"];

const inputStyle: React.CSSProperties = {
  background: "transparent",
  border: "1px solid #f7f7f7",
  borderRadius: 4,
  height: 48,
  width: "100%",
  padding: "0 12px",
  color: "#f7f7f7",
  fontFamily: "var(--font-dm-sans), sans-serif",
  fontSize: 16,
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  color: "#f7f7f7",
  fontFamily: "var(--font-dm-sans), sans-serif",
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
      <main className="flex-1">
        <section style={{ background: "#0d0d0d" }}>
          <div className="max-w-[1280px] mx-auto px-4 md:px-5 pt-16 md:pt-[108px] pb-16 flex flex-col gap-16">

            {/* Header + contact info */}
            <FadeUp className="flex flex-col gap-10">
              <div className="flex flex-col gap-2.5 items-center text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[28px] md:text-[48px] leading-[1.1] text-center max-w-[764px]"
                  style={{ color: "#e6f0ff", fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  Entre em contato conosco e agende uma demonstração
                </motion.h1>
                <p className="text-[20px]" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Entraremos em contato com você em até 48h.
                </p>
              </div>

              {/* Contact info columns */}
              <div className="flex flex-col gap-0">
                <div className="flex flex-col md:flex-row items-start md:items-center md:h-[240px]">
                  {/* Phone */}
                  <div className="flex-1 flex flex-col gap-10 py-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={IMG_PHONE} alt="Telefone" className="w-[72px] h-[72px]" />
                    <div className="flex flex-col gap-5">
                      <span className="text-[14px] font-light leading-[1.6]" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>+55 31 99999 9999</span>
                      <span className="text-[14px] font-light leading-[1.6]" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>+55 31 99999 9999</span>
                    </div>
                  </div>
                  <div className="hidden md:block self-stretch w-px shrink-0" style={{ background: "rgba(255,255,255,0.1)" }} />
                  {/* Email */}
                  <div className="flex-1 flex flex-col gap-10 py-8 px-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={IMG_EMAIL} alt="Email" className="w-[72px] h-[72px]" />
                    <div className="flex flex-col gap-5">
                      <span className="text-[14px] font-light leading-[1.6]" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>contato@i3tech.com.br</span>
                      <span className="text-[14px] font-light leading-[1.6]" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>adm@i3tech.com.br</span>
                    </div>
                  </div>
                  <div className="hidden md:block self-stretch w-px shrink-0" style={{ background: "rgba(255,255,255,0.1)" }} />
                  {/* Location */}
                  <div className="flex-1 flex flex-col gap-10 py-8 px-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={IMG_LOCATION} alt="Endereço" className="w-[72px] h-[72px]" />
                    <span className="text-[14px] leading-[1.1]" style={{ color: "#f7f7f7", fontFamily: "var(--font-dm-sans), sans-serif" }}>Rua Seu endereço aqui, 000</span>
                  </div>
                </div>
                <div style={{ height: 1, background: "rgba(255,255,255,0.1)" }} />
              </div>
            </FadeUp>

            {/* Form heading */}
            <FadeUp>
              <p className="text-[24px]" style={{ color: "#0066ff", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Ou preencha nosso formulário abaixo
              </p>
            </FadeUp>

            {/* Form */}
            <FadeUp>
              {status === "success" ? (
                <div className="flex flex-col items-center gap-6 py-16 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#1956f3" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-[28px] font-semibold text-white" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Mensagem enviada!
                  </h3>
                  <p className="text-[18px]" style={{ color: "#a0a0a0", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Entraremos em contato em até 48h.
                  </p>
                </div>
              ) : (
                <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                  {/* Row 1 */}
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1 flex flex-col gap-5">
                      <label style={labelStyle}>Nome completo*</label>
                      <input name="nome" type="text" required style={inputStyle} />
                    </div>
                    <div className="flex-1 flex flex-col gap-5">
                      <label style={labelStyle}>Seu e-mail*</label>
                      <input name="email" type="email" required style={inputStyle} />
                    </div>
                    <div className="flex-1 flex flex-col gap-5">
                      <label style={labelStyle}>Celular*</label>
                      <input name="celular" type="tel" style={inputStyle} />
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1 flex flex-col gap-5">
                      <label style={labelStyle}>Seu endereço*</label>
                      <input name="endereco" type="text" style={inputStyle} />
                    </div>
                    <div className="flex-1 flex flex-col gap-5">
                      <label style={labelStyle}>Nome da sua empresa*</label>
                      <input name="empresa" type="text" style={inputStyle} />
                    </div>
                    <div className="flex-1 flex flex-col gap-5">
                      <label style={labelStyle}>Escolha o produto*</label>
                      <div className="relative" style={{ height: 48 }}>
                        <select
                          value={produto}
                          onChange={(e) => setProduto(e.target.value)}
                          style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none", paddingRight: 40, cursor: "pointer" }}
                        >
                          <option value="" disabled style={{ background: "#1a1a1a" }}></option>
                          {produtos.map((p) => (
                            <option key={p} value={p} style={{ background: "#1a1a1a" }}>{p}</option>
                          ))}
                        </select>
                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f7f7f7" strokeWidth="2">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="flex flex-col gap-5">
                    <label style={labelStyle}>Escreva a sua mensagem*</label>
                    <textarea
                      name="mensagem"
                      required
                      style={{ ...inputStyle, height: 164, padding: "12px", resize: "vertical" }}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-[14px] text-red-400" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      Erro ao enviar. Por favor, tente novamente.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-2.5 rounded-lg text-[14px] transition-all duration-200 hover:bg-[#1444cc] hover:scale-[1.03] active:scale-[0.97] hover:brightness-110 hover:shadow-[0_8px_24px_rgba(25,86,243,0.4)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      background: "#1956f3",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0px 2px 5px rgba(31,36,40,0.25)",
                      color: "#f7f7f7",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    {status === "loading" ? "Enviando..." : "Envie sua mensagem"}
                  </button>
                </form>
              )}
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
