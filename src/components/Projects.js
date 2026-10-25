"use client";

import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useUI } from "./UIProvider";
import { projects } from "@/data/projects";

function scoreProject(p, query) {
  const q = query.toLowerCase().trim();
  if (!q) return null;
  const words = q.split(/\s+/).filter(Boolean);
  const hay = `${p.name} ${p.techLine} ${p.impact} ${p.stack.join(" ")} ${
    p.tag === "violet" ? "ai ml computer vision machine learning" : "full-stack web"
  }`.toLowerCase();
  const hits = words.filter((w) => hay.includes(w)).length;
  const score = words.length ? hits / words.length : 0;
  return Math.max(0.05, Math.min(0.98, score * 0.9 + (hay.includes(q) ? 0.1 : 0)));
}

function Cover({ project }) {
  const { openLightbox } = useUI();
  const [idx, setIdx] = useState(0);
  const imgs = project.images;
  const has = imgs.length > 0;

  return (
    <div className="cover-visual">
      <div className="mockup-chrome">
        {project.mobile ? (
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-tertiary)" }}>device</span>
        ) : (
          <>
            <div className="tab" /><div className="tab" /><div className="tab" />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-tertiary)", marginLeft: 8 }}>{project.path}</span>
          </>
        )}
      </div>
      <div className="mockup-body">
        <div className="scan" />
        {has ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgs[idx]} alt={`${project.name} screenshot ${idx + 1}`}
              onClick={() => openLightbox({ src: imgs[idx], alt: project.name })} />
            {imgs.length > 1 && (
              <>
                <button className="carousel-arrow prev" aria-label="Previous screenshot"
                  onClick={() => setIdx((i) => (i - 1 + imgs.length) % imgs.length)}>‹</button>
                <button className="carousel-arrow next" aria-label="Next screenshot"
                  onClick={() => setIdx((i) => (i + 1) % imgs.length)}>›</button>
              </>
            )}
          </>
        ) : (
          <div className="cover-fallback" role="button" tabIndex={0} onClick={() => openLightbox({})}
            onKeyDown={(e) => { if (e.key === "Enter") openLightbox({}); }}
            style={{
              background: `linear-gradient(135deg,${project.tag === "violet" ? "rgba(124,111,255,0.18)" : "rgba(34,211,238,0.18)"},transparent)`,
              color: "var(--text-tertiary)",
            }}>
            No screenshot yet — {project.name}
          </div>
        )}
      </div>
      {has && imgs.length > 1 && (
        <div className="dot-indicator" style={{ position: "absolute", bottom: 8, left: 0, right: 0 }}>
          {imgs.map((_, i) => (
            <button key={i} className={i === idx ? "active" : ""} aria-label={`Screenshot ${i + 1}`} onClick={() => setIdx(i)} />
          ))}
        </div>
      )}
    </div>
  );
}

function Inspector({ project, index, onClose }) {
  const diagram = project.second
    ? `INPUT ──> PROCESS ──> OUTPUT\n          └──> ${project.second}`
    : "INPUT ──> PROCESS ──> OUTPUT";
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="inspector">
      <div className="insp-header">
        <span className="insp-path">{num} · {project.path}</span>
        {project.live && (
          <a className="live-badge" href={project.live} target="_blank" rel="noopener noreferrer">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--diff-green)", display: "inline-block" }} />LIVE ↗
          </a>
        )}
        {project.github && (
          <a className="gh-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">⌥ GitHub</a>
        )}
        {onClose && <button className="modal-close" onClick={onClose} aria-label="Close project">✕</button>}
      </div>
      <div className="insp-body">
        <div className="tech-row">
          {project.stack.map((t) => <span key={t} className={`tag-chip ${project.tag}`}>{t}</span>)}
        </div>
        <div className="impact-line">{project.impact}</div>
        <Cover key={project.slug} project={project} />
        <div className="pipeline">
          <h4>1. THE PROBLEM (INPUT)</h4>
          <p style={{ fontSize: 14, margin: 0 }}>{project.problem}</p>
          <h4>2. ARCHITECTURE &amp; WORKFLOW (PROCESS)</h4>
          <div className="ascii-diagram">{diagram}</div>
          <ul>{project.arch.map((a) => <li key={a}>{a}</li>)}</ul>
          <h4>3. DELIVERED IMPACT (OUTPUT)</h4>
          <ul>{project.impactList.map((a) => <li key={a}>{a}</li>)}</ul>
        </div>
        <div className="footer-line">$ tech --stack: {project.techLine}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { activeProject, selectProject, projectOpen, closeProject } = useUI();
  const [query, setQuery] = useState("");

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const on = () => setMobile(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const modal = mobile && projectOpen;
  useEffect(() => {
    if (!modal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [modal]);

  const rows = useMemo(() => {
    const scored = projects.map((p, i) => ({ p, i, score: scoreProject(p, query) }));
    if (query.trim()) scored.sort((a, b) => (b.score || 0) - (a.score || 0));
    return scored;
  }, [query]);

  return (
    <section id="projects" aria-label="Projects">
      <SectionHead label="projects" title="projects/" />
      <Reveal className="query-bar">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} autoComplete="off"
          aria-label="Query projects"
          placeholder="Query projects (e.g. 'Next.js database', 'computer vision', 'full-stack')…" />
      </Reveal>
      <Reveal className="projects-grid">
        <div className="proj-stack">
          {rows.map(({ p, i, score }) => (
            <div key={p.slug} className={`proj-row${i === activeProject ? " active" : ""}`} role="button" tabIndex={0}
              onClick={() => selectProject(i)} onKeyDown={(e) => { if (e.key === "Enter") selectProject(i); }}>
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              <span className={`dot${p.live ? " live" : ""}`} />
              <span>{p.path}</span>
              {score != null && <span className="score">{score.toFixed(2)}</span>}
            </div>
          ))}
        </div>
        {!mobile && <Inspector project={projects[activeProject]} index={activeProject} />}
      </Reveal>
      {modal && (
        <div className="modal-backdrop" onClick={closeProject}>
          <div className="modal-card" role="dialog" aria-modal="true" aria-label={projects[activeProject].name}
            onClick={(e) => e.stopPropagation()}>
            <Inspector project={projects[activeProject]} index={activeProject} onClose={closeProject} />
          </div>
        </div>
      )}
    </section>
  );
}
