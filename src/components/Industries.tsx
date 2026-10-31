import { APPROACH, INDUSTRIES } from '../content';
import Reveal from './Reveal';
import { Em, SectionHead, card } from './ui';

export default function Industries() {
  return (
    <section id="industries" className="mx-auto max-w-7xl px-6 py-28 sm:px-8 sm:py-36">
      <SectionHead
        center
        eyebrow="Industries we serve"
        title={<>Built for sectors that run on <Em>customer conversations.</Em></>}
        lead="Every industry has its own customers, regulations and pressure points. We build teams that understand yours."
      />

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {INDUSTRIES.map((ind, i) => (
          <Reveal as="article" key={ind.id} id={ind.id} delay={(i % 4) * 90} className={`${card} flex scroll-mt-6 flex-col p-7 transition-transform duration-500 hover:-translate-y-1`}>
            <span className="font-display text-xl italic text-muted">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-8 font-display text-3xl leading-tight tracking-tight">{ind.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{ind.text}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
              {ind.tags.map((t) => (
                <li key={t} className="rounded-full bg-soft px-3 py-1 text-xs text-muted">{t}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <Reveal as="article" className="rounded-3xl bg-ink p-8 text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Our approach</p>
          <h3 className="mt-6 font-display text-4xl leading-tight tracking-tight">Built around your industry</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/65">Generic scripts don't win customers. Every team we set up is shaped by the sector it serves.</p>
        </Reveal>
        {APPROACH.map((a, i) => (
          <Reveal as="article" key={a.title} delay={(i + 1) * 100} className={`${card} p-8`}>
            <h3 className="font-display text-3xl leading-tight tracking-tight">{a.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{a.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal as="p" className="mt-12 text-center text-sm text-muted">
        Don't see your industry? Our processes adapt to most customer-facing businesses.{' '}
        <a href="#contact" className="text-ink underline underline-offset-4">Tell us about yours.</a>
      </Reveal>
    </section>
  );
}
