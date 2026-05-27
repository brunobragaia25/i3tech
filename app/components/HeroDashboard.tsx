"use client";

import { motion } from "framer-motion";

const BLUE = "#0052e6";
const LIGHT_BLUE = "#cce0ff";
const font = "DM Sans, sans-serif";

function Icon({ d, size = 10 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

const NAV_ITEMS = [
  { label: "Dashboard",          d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", active: true },
  { label: "Associados",         d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
  { label: "Veículos",           d: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" },
  { label: "CRM",                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6" },
  { label: "Financeiro",         d: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" },
  { label: "Envio de mensagens", d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" },
  { label: "Sinistros",          d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" },
  { label: "Vistorias",          d: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" },
  { label: "Relatórios",         d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8" },
  { label: "Cadastros gerais",   d: "M4 6h16M4 10h16M4 14h16M4 18h16" },
  { label: "Integrações",        d: "M18 20V10M12 20V4M6 20v-6" },
  { label: "Importar ativos",    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" },
];

const STAT_CARDS = [
  { label: "VEÍCULOS ATIVOS",        value: "9", color: "#2aa876" },
  { label: "VEÍCULOS INATIVOS",      value: "0", color: "#e24747" },
  { label: "VEÍCULOS INADIMPLENTES", value: "0", color: "#e89717" },
  { label: "VEÍCULOS CANCELADOS",    value: "0", color: "#444444" },
];

/* ── Veículos por Período — line chart ── */
function VeiculosChart() {
  const W = 520, H = 200;
  const padL = 36, padR = 12, padT = 10, padB = 24;
  const cW = W - padL - padR, cH = H - padT - padB;
  const dates = ["30/04","05/05","10/05","15/05","20/05","25/05"];
  // flat line at y=0 (middle), slight curve for aesthetics
  const dataY = [0, 0, 0, 0, 0, 0];
  const yMin = -1, yMax = 1;
  const yTicks = [1, 0.8, 0.6, 0.4, 0.2, 0, -0.2, -0.4, -0.6, -0.8, -1];

  const toSvgX = (i: number) => padL + (i / (dates.length - 1)) * cW;
  const toSvgY = (v: number) => padT + ((yMax - v) / (yMax - yMin)) * cH;

  const pts = dataY.map((v, i) => ({ x: toSvgX(i), y: toSvgY(v) }));
  const linePath = `M ${pts.map(p => `${p.x},${p.y}`).join(" L ")}`;
  const areaPath = `${linePath} L ${pts[pts.length-1].x},${H - padB} L ${pts[0].x},${H - padB} Z`;

  // Legend
  const legend = [
    { label: "ATIVO",        color: "#2aa876" },
    { label: "INATIVO",      color: "#e24747" },
    { label: "INADIMPLENTE", color: "#e89717" },
    { label: "CANCELADO",    color: "#444" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BLUE} stopOpacity="0.15" />
            <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Y grid + labels */}
        {yTicks.map((v) => {
          const y = toSvgY(v);
          return (
            <g key={v}>
              <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="rgba(0,82,230,0.1)" strokeWidth="0.5" strokeDasharray="3 3" />
              <text x={padL - 3} y={y + 3} textAnchor="end" fontSize="6" fill="#888" fontFamily={font}>{v.toFixed(1)}</text>
            </g>
          );
        })}
        {/* Zero line */}
        <line x1={padL} y1={toSvgY(0)} x2={W - padR} y2={toSvgY(0)} stroke="rgba(0,82,230,0.25)" strokeWidth="0.8" />
        {/* Area */}
        <path d={areaPath} fill="url(#areaGrad)" />
        {/* Line */}
        <motion.path d={linePath} fill="none" stroke={BLUE} strokeWidth="1.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} />
        {/* Dots */}
        {pts.map((p, i) => (
          <motion.circle key={i} cx={p.x} cy={p.y} r="3.5" fill="white" stroke={BLUE} strokeWidth="1.5"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }} />
        ))}
        {/* X labels */}
        {dates.map((d, i) => (
          <text key={d} x={toSvgX(i)} y={H - 4} textAnchor="middle" fontSize="6.5" fill="#888" fontFamily={font}>{d}</text>
        ))}
        {/* Vertical cursor line at midpoint */}
        <line x1={toSvgX(2)} y1={padT} x2={toSvgX(2)} y2={H - padB} stroke="rgba(0,82,230,0.2)" strokeWidth="0.8" strokeDasharray="3 2" />
      </svg>
      {/* Legend */}
      <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 4 }}>
        {legend.map(l => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 13, height: 9, border: `0.6px solid ${l.color}`, borderRadius: 1 }} />
            <span style={{ fontSize: 7, color: "#333", fontFamily: font, letterSpacing: "0.35px" }}>{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Tipo de Associados — horizontal bar chart ── */
function TipoAssociadosChart() {
  const W = 300, H = 200;
  const padL = 36, padR = 10, padT = 8, padB = 20;
  const cW = W - padL - padR, cH = H - padT - padB;
  const categories = ["Pessoa\nFísica", "Pessoa\nJurídica"];
  const values = [16, 0]; // Pessoa Física = 16, Jurídica = 0
  const maxV = 16;
  const yTicks = [0, 2, 4, 6, 8, 10, 12, 14, 16];
  const barW = cW / (categories.length * 2);
  const colors = ["#2aa876", "#0052e6"];

  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
      {/* Y grid + labels */}
      {yTicks.map((v) => {
        const y = padT + cH - (v / maxV) * cH;
        return (
          <g key={v}>
            <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="rgba(0,82,230,0.1)" strokeWidth="0.5" strokeDasharray="3 3" />
            <text x={padL - 3} y={y + 3} textAnchor="end" fontSize="6" fill="#888" fontFamily={font}>{v}</text>
          </g>
        );
      })}
      {/* X axis */}
      <line x1={padL} y1={padT + cH} x2={W - padR} y2={padT + cH} stroke="rgba(0,82,230,0.2)" strokeWidth="0.8" />
      {/* Bars */}
      {categories.map((cat, i) => {
        const barH = (values[i] / maxV) * cH;
        const x = padL + i * (cW / categories.length) + barW * 0.5;
        const y = padT + cH - barH;
        return (
          <g key={cat}>
            <motion.rect x={x} y={y} width={barW} height={barH} fill={colors[i]} rx="2"
              initial={{ scaleY: 0, originY: 1 }} animate={{ scaleY: 1 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }} />
            {/* Label */}
            <text x={x + barW / 2} y={padT + cH + 10} textAnchor="middle" fontSize="6" fill="#333" fontFamily={font}>
              {i === 0 ? "Pess. Física" : "Pess. Jurídica"}
            </text>
            {/* Value on top */}
            {values[i] > 0 && (
              <text x={x + barW / 2} y={y - 3} textAnchor="middle" fontSize="7" fill={colors[i]} fontFamily={font} fontWeight="600">
                100%
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* ── Faixa Etária dos Associados — concentric circles / radar ── */
function FaixaEtariaChart() {
  const cx = 150, cy = 140, maxR = 120;
  const rings = [1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
  const ages = ["18-25","26-35","36-45","46-55","56-65","65+"];
  const dataR = [0.3, 0.65, 0.9, 0.75, 0.5, 0.25];
  const angStep = (2 * Math.PI) / ages.length;

  const toXY = (r: number, angle: number) => ({
    x: cx + r * maxR * Math.cos(angle - Math.PI / 2),
    y: cy + r * maxR * Math.sin(angle - Math.PI / 2),
  });

  const polyPts = ages.map((_, i) => {
    const p = toXY(dataR[i], i * angStep);
    return `${p.x},${p.y}`;
  }).join(" ");

  return (
    <svg width="100%" height="230" viewBox="0 0 300 260" preserveAspectRatio="xMidYMid meet">
      {/* Concentric circles */}
      {rings.map((r, i) => (
        <circle key={i} cx={cx} cy={cy} r={r * maxR}
          fill="none" stroke="rgba(0,82,230,0.12)" strokeWidth="0.8" />
      ))}
      {/* Axis lines */}
      {ages.map((_, i) => {
        const outer = toXY(1, i * angStep);
        return <line key={i} x1={cx} y1={cy} x2={outer.x} y2={outer.y} stroke="rgba(0,82,230,0.1)" strokeWidth="0.5" />;
      })}
      {/* Data polygon */}
      <motion.polygon points={polyPts} fill={`${BLUE}20`} stroke={BLUE} strokeWidth="1.2"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ transformOrigin: `${cx}px ${cy}px` }} />
      {/* Data dots */}
      {ages.map((_, i) => {
        const p = toXY(dataR[i], i * angStep);
        return <motion.circle key={i} cx={p.x} cy={p.y} r="3" fill="white" stroke={BLUE} strokeWidth="1.2"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 0.7 + i * 0.08 }} />;
      })}
      {/* Axis labels */}
      {ages.map((label, i) => {
        const p = toXY(1.18, i * angStep);
        return <text key={i} x={p.x} y={p.y + 3} textAnchor="middle" fontSize="7" fill="#555" fontFamily={font}>{label}</text>;
      })}
      {/* Ring labels */}
      <text x={cx + 4} y={cy - maxR * 1.0 + 3} fontSize="6.5" fill="#888" fontFamily={font}>1.0</text>
      <text x={cx + 4} y={cy - maxR * 0.5 + 3} fontSize="6.5" fill="#888" fontFamily={font}>0.5</text>
      <text x={cx + 4} y={cy + 3} fontSize="6.5" fill="#888" fontFamily={font}>0%</text>
      {/* Legend */}
      <text x={cx} y={cy + maxR + 28} textAnchor="middle" fontSize="6.5" fill="#333" fontFamily={font}>100% — Pessoa Física</text>
    </svg>
  );
}

/* ── Fabricantes Mais Utilizados — donut chart ── */
function FabricantesChart() {
  const cx = 150, cy = 130, outerR = 100, innerR = 55;
  const fabricantes = [
    { label: "Fiat",       pct: 0.35, color: "#0052e6" },
    { label: "Chevrolet",  pct: 0.22, color: "#2aa876" },
    { label: "Volkswagen", pct: 0.18, color: "#e89717" },
    { label: "Toyota",     pct: 0.15, color: "#e24747" },
    { label: "Ford",       pct: 0.10, color: "#9b59b6" },
  ];

  const arcPath = (startAngle: number, endAngle: number, oR: number, iR: number) => {
    const toXY = (angle: number, r: number) => ({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    });
    const p1 = toXY(startAngle, oR);
    const p2 = toXY(endAngle, oR);
    const p3 = toXY(endAngle, iR);
    const p4 = toXY(startAngle, iR);
    const lg = endAngle - startAngle > Math.PI ? 1 : 0;
    return `M ${p1.x} ${p1.y} A ${oR} ${oR} 0 ${lg} 1 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${iR} ${iR} 0 ${lg} 0 ${p4.x} ${p4.y} Z`;
  };

  let angle = -Math.PI / 2;
  const segments = fabricantes.map(f => {
    const start = angle;
    const end = angle + f.pct * 2 * Math.PI;
    angle = end;
    return { ...f, start, end };
  });

  return (
    <svg width="100%" height="250" viewBox="0 0 300 280" preserveAspectRatio="xMidYMid meet">
      {/* Donut segments */}
      {segments.map((seg, i) => (
        <motion.path key={seg.label} d={arcPath(seg.start, seg.end, outerR, innerR)} fill={seg.color}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.1 }} />
      ))}
      {/* Center text */}
      <text x={cx} y={cy - 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="#333" fontFamily={font}>5</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="7" fill="#888" fontFamily={font}>fabricantes</text>
      {/* Legend */}
      {fabricantes.map((f, i) => (
        <g key={f.label} transform={`translate(20, ${205 + i * 14})`}>
          <rect width="10" height="10" rx="2" fill={f.color} />
          <text x="14" y="8" fontSize="7" fill="#333" fontFamily={font}>{f.label}</text>
          <text x="270" y="8" fontSize="7" fill="#888" fontFamily={font} textAnchor="end">{Math.round(f.pct * 100)}%</text>
        </g>
      ))}
    </svg>
  );
}

/* ── Section card wrapper ── */
function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ fontSize: 7, color: "#888", fontFamily: font, letterSpacing: "0.7px", textTransform: "uppercase", paddingLeft: 3 }}>
        {title}
      </div>
      <div style={{ background: LIGHT_BLUE, borderRadius: 9, padding: 4, flex: 1 }}>
        <div style={{ background: "white", border: `0.6px solid rgba(51,133,255,0.5)`, borderRadius: 5, padding: "12px", height: "100%", overflow: "hidden" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function HeroDashboard() {
  return (
    <div style={{
      width: 1240,
      background: "linear-gradient(180deg, rgba(102,163,255,0.4) 0%, rgba(102,163,255,0.2) 100%)",
      backdropFilter: "blur(5.45px)",
      border: "1px solid rgba(102,163,255,0.5)",
      borderRadius: 12,
      padding: 12,
      boxShadow: "0px 0px 15.4px rgba(0,0,0,0.35)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}>
      {/* Browser dots */}
      <div style={{ padding: "4px 8px", display: "flex", alignItems: "center", gap: 6 }}>
        {["#e24747", "#e89717", "#2aa876"].map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
        ))}
      </div>

      {/* Dashboard body */}
      <div style={{ background: "#f0f3f8", borderRadius: 8, display: "flex", height: 690 }}>

        {/* Sidebar */}
        <div style={{ width: 156, flexShrink: 0, background: BLUE, display: "flex", flexDirection: "column", padding: "11px 8px 15px", gap: 0 }}>
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.15)", padding: "0 5px 12px", marginBottom: 9 }}>
            <span style={{ color: "white", fontSize: 11, fontWeight: 700, letterSpacing: 0.5, fontFamily: font }}>
              i3<span style={{ fontWeight: 300 }}>Gestão</span>
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {NAV_ITEMS.map(item => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5.7px 7.7px", borderRadius: 5, background: item.active ? "rgba(255,255,255,0.18)" : "transparent", color: "white" }}>
                <div style={{ width: 10, height: 10, flexShrink: 0 }}><Icon d={item.d} size={10} /></div>
                <span style={{ fontSize: 8.3, fontFamily: font, whiteSpace: "nowrap" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* Header */}
          <div style={{ background: "white", borderBottom: "1px solid rgba(136,136,136,0.2)", height: 41, display: "flex", alignItems: "center", padding: "0 15px", gap: 8, flexShrink: 0 }}>
            <div style={{ background: LIGHT_BLUE, border: "0.6px solid rgba(51,133,255,0.5)", borderRadius: 5, padding: "4px 10px", fontSize: 7.7, color: "#333", fontFamily: font, whiteSpace: "nowrap" }}>
              Dashboard / Veículos
            </div>
            <div style={{ background: LIGHT_BLUE, borderRadius: 6, padding: "5px 10px", display: "flex", alignItems: "center", gap: 6, width: 320 }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <span style={{ fontSize: 8.3, color: "#757575", fontFamily: font, flex: 1 }}>Pesquisar ou digitar comando</span>
              <span style={{ fontSize: 7, color: "#888", background: "white", border: "0.6px solid rgba(51,133,255,0.5)", borderRadius: 4, padding: "2px 6px", fontFamily: font }}>Ctrl + K</span>
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 24, height: 14, background: "#888", borderRadius: 637, display: "flex", alignItems: "center", padding: "1px 1px" }}>
                <div style={{ width: 11, height: 11, background: "white", borderRadius: "50%" }} />
              </div>
              <span style={{ fontSize: 7.7, color: "#333", fontFamily: font }}>Dark</span>
            </div>
            <div style={{ background: LIGHT_BLUE, borderRadius: 6, padding: "5px 9px", display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 14, height: 14, background: "rgba(0,0,0,0.06)", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="#333"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 7.7, color: "#333", fontFamily: font }}>Nenhuma associaç...</div>
                <div style={{ fontSize: 7, color: BLUE, fontFamily: font }}>Mudar associação</div>
              </div>
            </div>
          </div>

          {/* Main */}
          <div style={{ flex: 1, padding: "14px 15px 16px", display: "flex", flexDirection: "column", gap: 14, overflow: "hidden" }}>

            {/* Row 1: stat cards + line chart */}
            <div style={{ display: "flex", gap: 14, flexShrink: 0 }}>
              {/* Stat cards */}
              <div style={{ width: 204, flexShrink: 0, display: "flex", flexDirection: "column", gap: 0 }}>
                <div style={{ fontSize: 7, color: "#888", fontFamily: font, letterSpacing: "0.7px", textTransform: "uppercase", paddingLeft: 3, marginBottom: 8 }}>
                  DISTRIBUIÇÃO ATUAL DE VEÍCULOS
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {STAT_CARDS.map((card, i) => (
                    <motion.div key={card.label}
                      initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      style={{ background: LIGHT_BLUE, borderRadius: 9, padding: 4 }}>
                      <div style={{ background: "white", borderLeft: `2px solid ${card.color}`, borderRadius: 5, padding: "10px 13px" }}>
                        <div style={{ fontSize: 7, color: "#888", fontFamily: font, letterSpacing: "0.56px", textTransform: "uppercase", marginBottom: 5 }}>{card.label}</div>
                        <div style={{ fontSize: 22, fontWeight: 700, color: card.color, fontFamily: font, lineHeight: 1 }}>{card.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Line chart */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 7, color: "#888", fontFamily: font, letterSpacing: "0.7px", textTransform: "uppercase", paddingLeft: 3 }}>
                    VEÍCULOS POR PERÍODO
                  </div>
                  <div style={{ display: "flex", gap: 9 }}>
                    {[["Período","30 dias"],["Visualização","Linha"]].map(([lbl, val]) => (
                      <div key={lbl} style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <span style={{ fontSize: 7, color: "#888", fontFamily: font }}>{lbl}</span>
                        <div style={{ background: "white", border: "0.6px solid rgba(51,133,255,0.5)", borderRadius: 4, padding: "3px 10px", fontSize: 7.7, color: "#333", fontFamily: font }}>{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                  style={{ background: LIGHT_BLUE, borderRadius: 9, padding: 4, flex: 1 }}>
                  <div style={{ background: "white", border: "0.6px solid rgba(51,133,255,0.5)", borderRadius: 5, padding: "10px 12px", height: "100%", boxSizing: "border-box" }}>
                    <VeiculosChart />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Row 2: 3-column charts */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, height: 260 }}>
              <ChartCard title="TIPO DE ASSOCIADOS">
                <TipoAssociadosChart />
              </ChartCard>
              <ChartCard title="FAIXA ETÁRIA DOS ASSOCIADOS">
                <FaixaEtariaChart />
              </ChartCard>
              <ChartCard title="FABRICANTES MAIS UTILIZADOS">
                <FabricantesChart />
              </ChartCard>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
