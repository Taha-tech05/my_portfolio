"use client";

import { useEffect, useRef } from "react";

export default function Cursor({ enabled }) {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (!enabled || isTouch) return;
    root.classList.add("has-custom-cursor");
    const move = (e) => {
      for (const el of [dot.current, ring.current]) {
        if (el) { el.style.left = e.clientX + "px"; el.style.top = e.clientY + "px"; }
      }
    };
    const over = (e) => {
      const t = e.target;
      document.body.classList.remove("cur-link", "cur-text", "cur-code");
      if (!(t instanceof Element)) return;
      if (t.closest('a,button,[role="button"],.tree-item,.proj-row,.commit-hash')) document.body.classList.add("cur-link");
      else if (t.closest(".inspector, .proj-stack")) document.body.classList.add("cur-code");
      else if (t.closest("p,li,textarea,input")) document.body.classList.add("cur-text");
    };
    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over);
    return () => {
      root.classList.remove("has-custom-cursor");
      document.body.classList.remove("cur-link", "cur-text", "cur-code");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, [enabled]);

  return (
    <>
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true" />
    </>
  );
}
