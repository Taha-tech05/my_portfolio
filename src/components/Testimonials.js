import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials">
      <SectionHead label="testimonials" title="testimonials.md" />
      <Reveal className="testi-grid">
        {testimonials.map((t) => (
          <div className="testi-card" key={t.quote}>
            <span className="tag">{"/* review */"}</span>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <div className="attr">— {t.attr}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
