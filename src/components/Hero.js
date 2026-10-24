"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { useUI } from "./UIProvider";
import { profile } from "@/data/profile";

const FULL = "$ whoami\nTaha\n\n$ npm run build --profile=fullstack-ai\n";
const SPINNER = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

function BootLine({ lowMotion }) {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | spin:n | done | hidden
  const [skip, setSkip] = useState(true);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("boot-seen") === "1"; } catch {}
    if (lowMotion || seen) return;
    try { sessionStorage.setItem("boot-seen", "1"); } catch {}
    setSkip(false);
    const timers = [];
    const later = (fn, ms) => timers.push(setTimeout(fn, ms));
    let i = 0;
    const type = () => {
      if (i < FULL.length) {
        i++;
        setText(FULL.slice(0, i));
        later(type, 18 + Math.random() * 22);
      } else spin(0);
    };
    const spin = (n) => {
      if (n < 10) { setPhase(`spin:${n}`); later(() => spin(n + 1), 70); }
      else { setPhase("done"); later(() => setPhase("hidden"), 400); }
    };
    later(type, 250);
    return () => timers.forEach(clearTimeout);
  }, [lowMotion]);

  if (skip) return <div className="boot" aria-hidden="true" style={{ display: "none" }} />;
  return (
    <div className="boot" aria-hidden="true" style={phase === "hidden" ? { opacity: 0, transition: "opacity 300ms" } : undefined}>
      {text}
      {phase === "typing" && <span className="cursor-blink" />}
      {phase.startsWith("spin:") && <span className="dim">{SPINNER[Number(phase.slice(5)) % SPINNER.length]} building…</span>}
      {(phase === "done" || phase === "hidden") && <span style={{ color: "var(--diff-green)" }}>done</span>}
    </div>
  );
}

export default function Hero() {
  const { lowMotion } = useUI();
  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <BootLine lowMotion={lowMotion} />
      <Reveal as="h1" className="headline">Hello 👋 I&apos;m {profile.name}</Reveal>
      <Reveal as="p" className="subtext">{profile.intro}</Reveal>
      <Reveal className="hero-cta-row">
        <a className="btn btn-primary" href="/cv.pdf" download="Muhammad_Taha_Irfan_CV.pdf">
          $ Download CV
        </a>
        <a className="export-pill" href={profile.github} target="_blank" rel="noopener noreferrer">{"export { github }"}</a>
        <a className="export-pill" href={profile.linkedin} target="_blank" rel="noopener noreferrer">{"export { linkedin }"}</a>
      </Reveal>
      <Reveal className="metrics-strip">
        {profile.metrics.map((m) => (
          <div className="metric" key={m.label}><span className="num">{m.num}</span><span className="label">{m.label}</span></div>
        ))}
      </Reveal>
    </section>
  );
}
