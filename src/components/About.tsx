import { ABOUT, HIGHLIGHTS } from '../content';
import Reveal from './Reveal';
import { CheckList, Em, SectionHead, card } from './ui';

export default function About() {
  return (
    <>
      {/* At a glance */}
      <section aria-label="At a glance" className="mx-auto max-w-7xl px-6 sm:px-8">
        <ul className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal as="li" key={h.label} delay={i * 90} className={`px-2 py-10 sm:px-6 ${i % 2 ? 'border-l border-line' : ''} ${i > 1 ? 'border-t border-line lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}>
              <strong className="block font-display text-6xl font-normal tracking-[-2px] sm:text-7xl">{h.value}</strong>
              <span className="mt-3 block text-sm text-muted">{h.label}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-28 sm:px-8 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="About Stallion Connect"
              title={<>Your outsourcing partner for <Em>customer experience</Em> and operations.</>}
            />
            <div className="mt-10 grid max-w-2xl gap-5">
              {ABOUT.paragraphs.map((p, i) => (
                <Reveal as="p" key={i} delay={i * 80} className="text-base leading-relaxed text-muted">
                  {p}
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={150} className="self-start rounded-3xl bg-ink p-8 text-white sm:p-10">
            <h3 className="font-display text-3xl tracking-tight">Our scope of work</h3>
            <p className="mt-2 text-sm text-white/60">Everything we are set up to deliver for our clients.</p>
            <ul className="mt-8 divide-y divide-white/10">
              {ABOUT.scope.map((s, i) => (
                <li key={s} className="flex items-baseline gap-4 py-3 text-sm text-white/85">
                  <span className="font-display text-lg text-white/40">{String(i + 1).padStart(2, '0')}</span>
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Mission, vision, values */}
        <div className="mt-24 grid gap-4 md:grid-cols-3">
          {ABOUT.drives.map((d, i) => (
            <Reveal as="article" key={d.title} delay={i * 110} className={`${card} p-8`}>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">What drives us</p>
              <h3 className="mt-6 font-display text-4xl tracking-tight">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{d.text}</p>
              {d.tags && (
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {d.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-xs">{t}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        {/* Why us */}
        <div className="mt-24 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Why Stallion Connect"
              title={<>A partner that works like an <Em>extension of your team.</Em></>}
              lead="Skilled people, clear processes and the right tools add up to consistent results, whether you need ten agents or a full operations floor."
            />
            <Reveal delay={250}>
              <CheckList items={ABOUT.why} className="mt-10" />
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {ABOUT.pillars.map((p, i) => (
              <Reveal as="article" key={p.title} delay={i * 90} className={`${card} p-7`}>
                <span className="font-display text-2xl italic text-muted">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-8 font-display text-3xl tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* What sets us apart */}
        <div className="mt-24">
          <SectionHead
            eyebrow="What sets us apart"
            title={<>People, process and technology, <Em>working together.</Em></>}
            lead="The things our clients can count on, whatever the size of the engagement."
          />
          <ul className="mt-12 border-t border-line">
            {ABOUT.apart.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 80} className="grid gap-2 border-b border-line py-7 sm:grid-cols-[4rem_1fr_1.4fr] sm:items-baseline sm:gap-8">
                <span className="text-sm text-muted">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-3xl tracking-tight">{a.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{a.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
