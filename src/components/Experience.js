"use client";

import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useUI } from "./UIProvider";
import { experience } from "@/data/experience";

export default function Experience() {
  const { showToast } = useUI();

  const copy = (hash) => {
    navigator.clipboard?.writeText(hash).catch(() => {});
    showToast(`[COPIED] ${hash}`, 1400);
  };

  return (
    <section id="experience" aria-label="Experience">
      <SectionHead label="experience" title="experience.log" />
      <Reveal>
        {experience.map((e) => (
          <div className="commit" key={e.hash}>
            <button className="commit-hash" title="Copy commit hash" onClick={() => copy(e.hash)}>{e.hash}</button>
            <div className="commit-body">
              <div className="commit-title">{e.title}</div>
              <div className="commit-meta">{e.date}</div>
              <div className="commit-desc">{e.desc}</div>
              {e.points && <ul className="ex-points">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
