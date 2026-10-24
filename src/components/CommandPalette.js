"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useUI } from "./UIProvider";
import { projects } from "@/data/projects";
import { sections } from "@/data/sections";
import { profile } from "@/data/profile";

function fuzzy(q, text) {
  q = q.toLowerCase();
  text = text.toLowerCase();
  let ti = 0;
  for (const ch of q) {
    ti = text.indexOf(ch, ti);
    if (ti === -1) return false;
    ti++;
  }
  return true;
}

export default function CommandPalette({ open, onClose }) {
  const { lowMotion, setLowMotion, scrollToId, selectProject, showToast } = useUI();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const actions = useMemo(() => [
    ...sections.map((s) => ({ label: `Jump to: ${s.file}`, hint: "section", run: () => scrollToId(s.id) })),
    ...projects.map((p, i) => ({
      label: `Jump to project: ${p.name}`, hint: String(i + 1).padStart(2, "0"),
      run: () => selectProject(i, true),
    })),
    { label: "$ download cv.pdf", hint: "action", run: () => { const a = document.createElement("a"); a.href = "/cv.pdf"; a.download = "Muhammad_Taha_Irfan_CV.pdf"; a.click(); } },
    { label: "Copy email", hint: "action", run: () => { navigator.clipboard?.writeText(profile.email).catch(() => {}); showToast("[COPIED] " + profile.email); } },
    { label: "Open GitHub", hint: "⌘ open", run: () => window.open(profile.github, "_blank") },
    { label: "Open LinkedIn", hint: "⌘ open", run: () => window.open(profile.linkedin, "_blank") },
    { label: "Toggle low-motion mode", hint: lowMotion ? "on" : "off", run: () => setLowMotion(!lowMotion) },
  ], [lowMotion, setLowMotion, scrollToId, selectProject, showToast]);

  const filtered = query.trim() ? actions.filter((a) => fuzzy(query.trim(), a.label)) : actions;

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      const t = setTimeout(() => inputRef.current?.focus(), 10);
      return () => clearTimeout(t);
    }
  }, [open]);

  const run = (a) => { if (a) { a.run(); onClose(); } };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((i) => Math.min(i + 1, filtered.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); run(filtered[active]); }
    else if (e.key === "Escape") onClose();
  };

  return (
    <div className={`palette-backdrop${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Command palette"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="palette">
        <input ref={inputRef} type="text" placeholder="Type a command or search…" autoComplete="off"
          value={query} onChange={(e) => { setQuery(e.target.value); setActive(0); }} onKeyDown={onKeyDown} />
        <div className="palette-list">
          {filtered.length === 0 && <div className="palette-item">No matches</div>}
          {filtered.map((a, i) => (
            <div key={a.label} className={`palette-item${i === active ? " active" : ""}`} onClick={() => run(a)}>
              <span>{a.label}</span><span className="hint">{a.hint}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
