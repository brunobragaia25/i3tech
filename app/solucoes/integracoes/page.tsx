"use client";

import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ExpansaoPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d0d0d" }}>
      <Topbar />
      <Navbar />
      <main className="flex-1">
        <section className="relative w-full overflow-hidden" style={{ background: "#0052e6", height: 400 }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "url('/pattern-services.png')", backgroundRepeat: "repeat", backgroundSize: "auto" }}
          />
          <div className="relative z-10 max-w-[1280px] mx-auto px-5 w-full flex items-center" style={{ height: "100%" }}>
            <img src="/i3integracoes-white.svg" alt="i3Integrações" style={{ height: 110, width: "auto" }} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
