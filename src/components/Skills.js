"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useUI } from "./UIProvider";
import { skillLayers, usedIn, links, projectsByNode } from "@/data/skills";

const colGap = 150;
const startX = 40;
const rowH = 28;

function buildGraph() {
  const maxRows = Math.max(...skillLayers.map((l) => l.items.length));
  const H = maxRows * rowH + 40;
  const nodes = [];
  skillLayers.forEach((layer, li) => {
    const x = startX + li * colGap;
    const offsetY = 24 + (H - 24 - layer.items.length * rowH) / 2;
    layer.items.forEach((name, ri) => nodes.push({ x, y: offsetY + ri * rowH + rowH / 2, name, layer: li }));
  });
  const byName = Object.fromEntries(nodes.map((n) => [n.name, n]));
  // edges exist only where a project uses both technologies
  const edges = Object.values(links).map((l) => {
    const [a, b] = byName[l.a].x <= byName[l.b].x ? [byName[l.a], byName[l.b]] : [byName[l.b], byName[l.a]];
    return { a, b, projects: l.projects };
  });
  return { nodes, edges, H, W: startX + (skillLayers.length - 1) * colGap + 140 };
}

const graph = buildGraph();
const curve = ({ a, b }) => {
  if (a.x === b.x) {
    const bow = 36 + Math.min(40, Math.abs(a.y - b.y) * 0.25);
    return `M${a.x},${a.y} C${a.x - bow},${a.y} ${b.x - bow},${b.y} ${b.x},${b.y}`;
  }
  const d = (b.x - a.x) * 0.5;
  return `M${a.x},${a.y} C${a.x + d},${a.y} ${b.x - d},${b.y} ${b.x},${b.y}`;
};
const CYCLE_MS = 2000;

export default function Skills() {
  const { lowMotion } = useUI();
  const [hover, setHover] = useState(null); // node name
  const [tick, setTick] = useState(0);
  const { nodes, edges, H, W } = graph;

  const names = hover ? projectsByNode[hover] || [] : [];
  useEffect(() => {
    setTick(0);
    if (names.length < 2) return;
    const id = setInterval(() => setTick((t) => t + 1), CYCLE_MS);
    return () => clearInterval(id);
  }, [hover]); // eslint-disable-line react-hooks/exhaustive-deps

  const current = names.length ? names[tick % names.length] : null;
  // edges of the hovered node that belong to the project currently shown
  const active = hover ? edges.filter((e) => (e.a.name === hover || e.b.name === hover) && e.projects.includes(current)) : [];
  const lit = new Set(active.flatMap((e) => [e.a.name, e.b.name]));
  if (hover) lit.add(hover);

  return (
    <section id="skills" aria-label="Skills">
      <SectionHead label="skills" title="skills.json" />
      <Reveal className="skills-wrap">
        <div className="skills-svg-holder">
          <svg viewBox={`0 0 ${W} ${H + 24}`} width="100%" role="img"
            aria-label="Skills network diagram grouped by category, with connections between technologies used together in a project">
            {edges.map((e, i) => {
              const on = active.includes(e);
              return (
                <path key={i} className="edge" d={curve(e)} fill="none" strokeWidth={on ? 1.6 : 1}
                  stroke={on ? "var(--accent-cyan)" : "var(--border-strong)"}
                  opacity={hover ? (on ? 1 : 0.06) : 0.45} />
              );
            })}
            {!lowMotion && !hover && edges.map((e, i) => i % 6 === 0 && (
              <circle key={`p${i}`} r="2.4" fill="var(--accent-cyan)">
                <animateMotion dur={`${2.4 + (i % 5) * 0.3 + (i % 3) * 0.4}s`} repeatCount="indefinite" path={curve(e)} />
              </circle>
            ))}
            {nodes.map((n) => {
              const bright = !hover || lit.has(n.name);
              return (
                <g key={n.name} className="skill-node" tabIndex={0} role="button" aria-label={n.name} style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHover(n.name)} onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(n.name)} onBlur={() => setHover(null)}>
                  <circle cx={n.x} cy={n.y} r="5" fill={hover === n.name ? "var(--accent-cyan)" : "var(--surface-200)"}
                    stroke={hover && lit.has(n.name) ? "var(--accent-cyan)" : "var(--border-strong)"} strokeWidth="1.5"
                    opacity={bright ? 1 : 0.35} />
                  <text x={n.x + 10} y={n.y + 4} fontSize="12" opacity={bright ? 1 : 0.35}
                    fill={hover && lit.has(n.name) ? "var(--text-primary)" : "var(--text-secondary)"}
                    stroke="var(--bg-900)" strokeWidth="4" paintOrder="stroke" strokeLinejoin="round">{n.name}</text>
                </g>
              );
            })}
            {hover && (
              <text x={startX} y={H + 16} fontSize="12" fill="var(--accent-cyan)" style={{ fontFamily: "var(--font-mono)", pointerEvents: "none" }}>
                {current
                  ? `// ${hover} in: ${current}${names.length > 1 ? `  (${(tick % names.length) + 1}/${names.length})` : ""}`
                  : `// ${hover}: not used in a project yet`}
              </text>
            )}
            {skillLayers.map((layer, li) => (
              <text key={layer.name} x={startX + li * colGap} y="16" fontSize="11" fill="var(--text-tertiary)"
                style={{ fontFamily: "var(--font-mono)" }}>{layer.name}</text>
            ))}
          </svg>
        </div>

        <div className="skills-fallback">
          <div style={{ color: "var(--text-tertiary)", marginBottom: 8 }}>$ ls -la skills/</div>
          {skillLayers.map((layer) => (
            <div key={layer.name}>
              <div style={{ color: "var(--accent-cyan)", marginTop: 8 }}>{layer.name}/</div>
              {layer.items.map((it) => (
                <div className="ls-line" key={it}>
                  <span>{it}</span><span style={{ color: "var(--text-tertiary)", textAlign: "right", marginLeft: 12 }}>{usedIn[it] || ""}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
