"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import CommandPalette from "./CommandPalette";
import Cursor from "./Cursor";
import { projects } from "@/data/projects";

const UIContext = createContext(null);
export const useUI = () => useContext(UIContext);

export default function UIProvider({ children }) {
  const [lowMotion, setLowMotionState] = useState(false);
  const [toast, setToast] = useState({ text: "", show: false });
  const [activeProject, setActiveProject] = useState(0);
  const [projectOpen, setProjectOpen] = useState(false);
  const [theme, setThemeState] = useState("dark");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stored = false;
    try { stored = localStorage.getItem("low-motion") === "1"; } catch {}
    setLowMotionState(stored || reduced);
  }, []);

  useEffect(() => {
    setThemeState(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((t) => {
      const next = t === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch {}
      return next;
    });
  }, []);

  const setLowMotion = useCallback((v) => {
    setLowMotionState(v);
    try { localStorage.setItem("low-motion", v ? "1" : "0"); } catch {}
    document.documentElement.setAttribute("data-motion", v ? "low" : "full");
  }, []);

  const showToast = useCallback((text, ms = 1800) => {
    clearTimeout(toastTimer.current);
    setToast({ text, show: true });
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), ms);
  }, []);

  const scrollToId = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: lowMotion ? "auto" : "smooth" });
  }, [lowMotion]);

  const selectProject = useCallback((i, scroll = false) => {
    setActiveProject(i);
    setProjectOpen(true);
    if (scroll) scrollToId("projects");
  }, [scrollToId]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setPaletteOpen(true); }
      if (e.key === "Escape") { setPaletteOpen(false); setLightbox(null); setProjectOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openPalette = useCallback(() => setPaletteOpen(true), []);

  const value = useMemo(() => ({
    lowMotion, setLowMotion, showToast, scrollToId, activeProject, selectProject,
    openPalette, openLightbox: setLightbox, theme, toggleTheme,
    projectOpen, closeProject: () => setProjectOpen(false),
  }), [theme, toggleTheme, projectOpen, lowMotion, setLowMotion, showToast, scrollToId, activeProject, selectProject, openPalette]);

  return (
    <UIContext.Provider value={value}>
      {children}
      <Cursor enabled={!lowMotion} />
      <div className={`toast${toast.show ? " show" : ""}`} role="status" aria-live="polite">{toast.text}</div>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-label="Image preview">
          {lightbox.src
            ? // eslint-disable-next-line @next/next/no-img-element
              <img src={lightbox.src} alt={lightbox.alt || ""} />
            : <div className="lb-msg">No screenshot available yet for {projects[activeProject].name}.</div>}
        </div>
      )}
    </UIContext.Provider>
  );
}
