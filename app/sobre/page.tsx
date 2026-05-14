"use client";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedHeading from "../components/AnimatedHeading";

const font = "var(--font-roobert), sans-serif";

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
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center"
          style={{ height: 540, paddingLeft: 20, paddingRight: 20, gap: 20 }}
        >
          <AnimatedHeading as="h1" style={{ color: "#3385ff", fontSize: 48, fontFamily: font, fontWeight: 400, lineHeight: "normal", margin: 0 }}>
            Sobre a i3TECH
          </AnimatedHeading>
          <p style={{ color: "#fff", fontSize: 20, fontFamily: font, fontWeight: 400, lineHeight: 1.4, maxWidth: 616, margin: 0 }}>
            Somos uma empresa de tecnologia especializada no desenvolvimento de soluções para operações veiculares.
          </p>
        </div>
      </main>
      {/* Section 1 */}
      <div className="max-w-[1280px] mx-auto px-5 w-full" style={{ paddingTop: 128, paddingBottom: 64, display: "flex", flexDirection: "column", gap: 60, alignItems: "center" }}>

        {/* Text block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40, alignItems: "center", textAlign: "center" }}>
          <AnimatedHeading as="p" style={{ color: "#f7f7f7", fontSize: 32, fontFamily: font, fontWeight: 400, lineHeight: "normal", maxWidth: 1008, margin: 0 }}>
            Somos uma empresa de tecnologia do Grupo Brasil Atuarial, com o{" "}
            <span style={{ fontWeight: 600, color: "#0066ff" }}>foco no desenvolvimento de inovações e produtos tecnológicos que envolvem a regra atuarial</span>.
          </AnimatedHeading>
          <p style={{ color: "#f7f7f7", fontSize: 24, fontFamily: font, fontWeight: 400, lineHeight: 1.4, maxWidth: 840, margin: 0 }}>
            Desenvolvemos sistemas e aplicativos que conectam gestão empresarial, vendas e rastreamento inteligente para o nosso segmento.
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, width: "100%", background: "rgba(255,255,255,0.08)" }} />

        {/* Video + stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 72, alignItems: "center", width: "100%" }}>

          {/* Video placeholder */}
          <div style={{ width: "100%", height: 680, background: "#cce0ff", borderRadius: 40, padding: 10 }}>
            <div style={{ width: "100%", height: "100%", background: "#242424", border: "1px solid rgba(51,133,255,0.5)", borderRadius: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 168, height: 168, borderRadius: "50%", background: "#cce0ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 140, height: 140, borderRadius: "50%", background: "#1956f3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
            {[
              { value: "+ de 2.300",  label: "entidade de proteção patrimonial mutualista;" },
              { value: "+ de 60.000", label: "itens na gestão administrativa" },
              { value: "+ de 3 Mga",  label: "atendidos" },
              { value: "+ de 45",     label: "centrais utilizando nosso sistema" },
            ].map((stat, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 60 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center", textAlign: "center" }}>
                  <span style={{ color: "#f7f7f7", fontSize: 34, fontFamily: font, fontWeight: 700, lineHeight: 1 }}>
                    {stat.value}
                  </span>
                  <span style={{ color: "#66a3ff", fontSize: 16, fontFamily: font, fontWeight: 600, lineHeight: 1.4, maxWidth: 231 }}>
                    {stat.label}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ width: 1, alignSelf: "stretch", background: "rgba(255,255,255,0.12)" }} />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
      {/* Nossa Diretoria */}
      <div className="max-w-[1280px] mx-auto px-5 w-full" style={{ paddingTop: 64, paddingBottom: 64, display: "flex", flexDirection: "column", gap: 40, alignItems: "center" }}>

        <AnimatedHeading as="h2" style={{ color: "#0052e6", fontSize: 40, fontFamily: font, fontWeight: 600, lineHeight: 1.2, textAlign: "center", margin: 0 }}>
          Nossa Diretoria
        </AnimatedHeading>

        <div style={{ background: "#171717", borderRadius: 20, padding: 16, width: "100%" }}>
          <div style={{ display: "flex", gap: 16 }}>
            {/* Card 1 — Enrico Neto */}
            <div style={{ flex: 1, background: "#262626", borderRadius: 16, padding: 12 }}>
              <div style={{ background: "#171717", borderRadius: 8, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div style={{ height: 360, background: "#d9d9d9", borderRadius: 4 }} />
                <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: 10 }}>
                  <span style={{ color: "#0066ff", fontSize: 24, fontFamily: font, fontWeight: 500, lineHeight: 1 }}>
                    Enrico Neto
                  </span>
                  <span style={{ color: "#f7f7f7", fontSize: 12, fontFamily: font, textTransform: "uppercase", lineHeight: 1 }}>
                    Sócio e fundador da i3Tech (Em Execução)
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 — Vinicius da Costa */}
            <div style={{ flex: 1, background: "#262626", borderRadius: 16, padding: 12 }}>
              <div style={{ background: "#171717", borderRadius: 8, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div style={{ height: 360, borderRadius: 4, overflow: "hidden", position: "relative", background: "#d9d9d9" }}>
                  <img
                    src="https://www.figma.com/api/mcp/asset/6568e389-49ac-4b9b-be16-8f104aee1cc6"
                    alt="Vinicius da Costa"
                    style={{ position: "absolute", width: "100%", top: "-20.57%", left: 0, maxWidth: "none" }}
                  />
                </div>
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
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
