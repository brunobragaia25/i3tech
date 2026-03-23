"use client";

import Link from "next/link";

export default function Topbar() {
  return (
    <div className="hidden md:block w-full bg-[#1956f3] py-2 px-6">
      <div className="max-w-[1280px] mx-auto px-5 flex items-center justify-between text-[13px] text-white">
        <div className="flex items-center gap-6">
          <span>+55 11 99999 9999</span>
          <span className="opacity-40">|</span>
          <span>Sua Seu endereço aqui, 000</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white">Siga nas redes</span>
          {/* Facebook */}
          <Link
            href="#"
            className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Facebook"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
          {/* Instagram */}
          <Link
            href="#"
            className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Instagram"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </Link>
          {/* LinkedIn */}
          <Link
            href="#"
            className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
