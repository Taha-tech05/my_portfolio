"use client";

import { useEffect, useState } from "react";
import { useUI } from "./UIProvider";
import { sections } from "@/data/sections";
import { projects } from "@/data/projects";

export default function Shell({ children }) {
  const { scrollToId, selectProject, openPalette, theme, toggleTheme } = useUI();
  const [drawer, setDrawer] = useState(false);
  const [projOpen, setProjOpen] = useState(true);
  const [current, setCurrent] = useState("hero");

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) setCurrent(en.target.id); }),
      { rootMargin: "-40% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (id) => { scrollToId(id); setDrawer(false); };
  const pick = (i) => { selectProject(i, true); setDrawer(false); };
  const label = sections.find((s) => s.id === current)?.file ?? current;

  return (
    <>
      <div className={`drawer-backdrop${drawer ? " open" : ""}`} onClick={() => setDrawer(false)} />
      <div className="shell">
        <nav className={`sidebar${drawer ? " open" : ""}`} aria-label="Section navigation">
          <div className="sidebar-brand">~/taha-irfan<span style={{ color: "var(--accent-cyan)" }}>/portfolio</span></div>
          {sections.map((s) => {
            if (s.id === "projects") {
              return (
                <div key={s.id}>
                  <div className={`tree-group${projOpen ? " open" : ""}`} role="button" tabIndex={0}
                    onClick={() => setProjOpen((o) => !o)}
                    onKeyDown={(e) => { if (e.key === "Enter") setProjOpen((o) => !o); }}>
                    <span className="chev">▸</span><span>projects/</span><span className="status status-plus">+</span>
                  </div>
                  {projOpen && (
                    <div className="tree-sub">
                      {projects.map((p, i) => (
                        <div key={p.slug} className="tree-item" role="button" tabIndex={0}
                          onClick={() => pick(i)} onKeyDown={(e) => { if (e.key === "Enter") pick(i); }}>
                          <span>{p.slug}.jsx</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <div key={s.id} className={`tree-item${current === s.id ? " active" : ""}`} role="button" tabIndex={0}
                onClick={() => go(s.id)} onKeyDown={(e) => { if (e.key === "Enter") go(s.id); }}>
                <span>{s.file}</span>
                {s.status && <span className={`status ${s.statusClass}`}>{s.status}</span>}
              </div>
            );
          })}
        </nav>

        <div className="main">
          <header className="breadcrumb">
            <button className="sidebar-toggle" aria-label="Toggle navigation" aria-expanded={drawer} onClick={() => setDrawer((d) => !d)}>☰</button>
            <span className="path">src/components/<span style={{ color: "var(--text-primary)" }}>{label}</span></span>
            <button className="kbd-hint" onClick={openPalette} aria-label="Open command palette">
              <kbd>⌘</kbd><kbd>K</kbd> command palette
            </button>
            <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>{theme === "light" ? "☾" : "☀"}</button>
          </header>
          {children}
        </div>
      </div>
    </>
  );
}
