"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useUI } from "./UIProvider";
import { profile } from "@/data/profile";

const tokens = profile.bio.split(/(\s+)/);

function Bio({ lowMotion }) {
  const [count, setCount] = useState(tokens.length);
  const timer = useRef(null);
  const done = count >= tokens.length;

  useEffect(() => {
    if (lowMotion) { setCount(tokens.length); return; }
    let i = 0;
    setCount(0);
    const step = () => {
      i++;
      setCount(i);
      if (i < tokens.length) timer.current = setTimeout(step, 55 + Math.random() * 40);
    };
    timer.current = setTimeout(step, 55);
    return () => clearTimeout(timer.current);
  }, [lowMotion]);

  const complete = () => { clearTimeout(timer.current); setCount(tokens.length); };

  return (
    <div className="bio-block" tabIndex={0} role="button" aria-label="Click to finish typing"
      onClick={complete} onKeyDown={(e) => { if (e.key === "Enter") complete(); }}>
      <span className="typed-primary">{tokens.slice(0, count).join("")}</span>
      {!done && <span className="cursor-blink" style={{ background: "var(--accent-cyan)" }} />}
    </div>
  );
}

export default function About() {
  const { lowMotion } = useUI();
  return (
    <section id="about" aria-label="About">
      <SectionHead label="about" title="about.jsx" />
      <Reveal><Bio lowMotion={lowMotion} /></Reveal>
      <Reveal className="focus-cards">
        {profile.focus.map((f) => (
          <div className="focus-card" key={f.title}><h3>{f.title}</h3><p>{f.text}</p></div>
        ))}
      </Reveal>
    </section>
  );
}
