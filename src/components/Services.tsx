import { useState } from 'react';
import { SERVICES, STEPS } from '../content';
import Reveal from './Reveal';
import { CheckList, Em, SectionHead, card } from './ui';

export default function Services({ onEnquire }: { onEnquire: (serviceId: string) => void }) {
  const [open, setOpen] = useState<string | null>(SERVICES[0].id);

  return (
    <section id="services" className="relative overflow-hidden bg-soft py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead eyebrow="What we do" title={<>End-to-end outsourcing, <Em>under one roof.</Em></>} />
          <Reveal as="p" delay={200} className="max-w-md text-base leading-relaxed text-muted">
            From the first sales call to the last line of paperwork, our trained teams handle the work that keeps your customers happy and your
            business moving.
          </Reveal>
        </div>

        <ul className="mt-16 border-t border-black/10">
          {SERVICES.map((s, i) => {
            const isOpen = open === s.id;
            return (
              <Reveal as="li" key={s.id} id={s.id} delay={i * 70} className="scroll-mt-6 border-b border-black/10">
                <h3>
                  <button
                    type="button"
                    className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-7 text-left sm:grid-cols-[4rem_1fr_auto] sm:gap-8"
                    aria-expanded={isOpen}
                    aria-controls={`${s.id}-panel`}
                    onClick={() => setOpen(isOpen ? null : s.id)}
                  >
                    <span className="text-sm text-muted">{String(i + 1).padStart(2, '0')}</span>
                    <span>
                      <span className="block font-display text-3xl leading-tight tracking-tight sm:text-4xl">{s.title}</span>
                      <span className="mt-1 block text-sm text-muted">{s.short}</span>
                    </span>
                    <span className={`grid h-11 w-11 place-items-center rounded-full border border-black/10 transition-all duration-500 group-hover:bg-ink group-hover:text-white ${isOpen ? 'rotate-45 bg-ink text-white' : ''}`} aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </button>
                </h3>
                <div id={`${s.id}-panel`} className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="grid gap-8 pb-10 sm:pl-24 lg:grid-cols-[1.4fr_1fr]">
                      <div>
                        <p className="max-w-xl text-base leading-relaxed text-muted">{s.lead}</p>
                        <CheckList items={s.points} className="mt-6 sm:grid-cols-2 sm:gap-x-8" />
                      </div>
                      <div className={`${card} p-6`}>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted">Ideal for</p>
                        <p className="mt-2 text-sm leading-relaxed">{s.idealFor}</p>
                        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted">What you get</p>
                        <CheckList items={s.youGet} className="mt-3" />
                        <a
                          href="#contact"
                          onClick={() => onEnquire(s.id)}
                          className="mt-7 inline-flex rounded-full bg-ink px-6 py-2.5 text-sm text-white transition-transform duration-300 hover:scale-[1.03]"
                        >
                          Enquire about this service
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-black/10 bg-white/70 p-8 backdrop-blur-xl sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-3xl tracking-tight">Need something custom?</h3>
            <p className="mt-1 text-sm text-muted">Tell us how your process works and we'll design a team around it.</p>
          </div>
          <a href="#contact" className="rounded-full bg-ink px-6 py-2.5 text-sm text-white transition-transform duration-300 hover:scale-[1.03]">
            Talk to us
          </a>
        </Reveal>

        {/* How we work */}
        <div className="mt-28">
          <SectionHead
            eyebrow="How we work"
            title={<>From first call to full operations <Em>in four steps.</Em></>}
            lead="A simple, transparent onboarding process that gets your team live quickly and keeps improving after launch."
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 110} className={`${card} p-7`}>
                <span className="font-display text-5xl italic text-muted">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-10 font-display text-3xl tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
