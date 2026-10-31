import { CONTACT, EXPERIENCE, HIRING, JOBS, PERKS } from '../content';
import { useFormSubmit } from '../lib/forms';
import Reveal from './Reveal';
import { Em, Field, FormStatus, SectionHead, card, inputClass } from './ui';

type Props = { role: string; onRoleChange: (role: string) => void };

export default function Careers({ role, onRoleChange }: Props) {
  const { status, onSubmit, sending } = useFormSubmit('Thank you for applying! Our HR team will contact you if your profile is shortlisted.');

  return (
    <section id="careers" className="bg-soft py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow="Careers"
            title={<>Build your career with <Em>Stallion Connect.</Em></>}
            lead="Join a growing team where freshers are trained from day one and good work gets noticed."
          />
          <Reveal delay={250} className="flex flex-wrap gap-3">
            <a href="#openings" className="rounded-full bg-ink px-6 py-2.5 text-sm text-white transition-transform duration-300 hover:scale-[1.03]">View openings</a>
            <a href="#apply" className="rounded-full border border-black/15 bg-white/70 px-6 py-2.5 text-sm backdrop-blur transition-transform duration-300 hover:scale-[1.03]">Apply now</a>
          </Reveal>
        </div>

        {/* Why join */}
        <Reveal as="p" className="mt-20 text-xs uppercase tracking-[0.2em] text-muted">
          Why join us — more than a job: a place to grow
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map((p, i) => (
            <Reveal as="article" key={p.title} delay={(i % 3) * 100} className={`${card} p-7`}>
              <h3 className="font-display text-3xl leading-tight tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Openings */}
        <div id="openings" className="mt-24 grid scroll-mt-6 gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Reveal as="p" className="text-xs uppercase tracking-[0.2em] text-muted">Current openings</Reveal>
            <Reveal as="h3" delay={100} className="mt-5 font-display text-5xl tracking-tight">Find your role</Reveal>
            <Reveal as="p" delay={200} className="mt-4 text-sm leading-relaxed text-muted">Apply online and our HR team will contact shortlisted candidates.</Reveal>
            <Reveal as="p" delay={250} className="mt-10 text-xs uppercase tracking-[0.2em] text-muted">Hiring process</Reveal>
            <ol className="mt-4 grid gap-3">
              {HIRING.map((h, i) => (
                <Reveal as="li" key={h.title} delay={300 + i * 80} className="flex gap-4 text-sm">
                  <span className="font-display text-xl italic text-muted">{i + 1}</span>
                  <span><b className="font-medium">{h.title}.</b> <span className="text-muted">{h.text}</span></span>
                </Reveal>
              ))}
            </ol>
          </div>
          <ul className="border-t border-black/10">
            {JOBS.map((job, i) => (
              <Reveal as="li" key={job.title} delay={i * 70} className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-black/10 py-6">
                <span className="w-8 text-sm text-muted">{String(i + 1).padStart(2, '0')}</span>
                <div className="min-w-0 flex-1 basis-60">
                  <h4 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">{job.title}</h4>
                  <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.12em] text-muted">
                    {job.meta.map((m) => <span key={m}>{m}</span>)}
                  </p>
                </div>
                <a
                  href="#apply"
                  onClick={() => onRoleChange(job.title)}
                  className="ml-14 rounded-full border border-black/15 px-5 py-2 text-sm transition-colors duration-300 hover:bg-ink hover:text-white sm:ml-0"
                >
                  Apply
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Apply */}
        <div id="apply" className="mt-24 grid scroll-mt-6 gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Reveal as="p" className="text-xs uppercase tracking-[0.2em] text-muted">Apply now</Reveal>
            <Reveal as="h3" delay={100} className="mt-5 font-display text-5xl leading-none tracking-tight">Send us your <em className="italic text-muted">application</em></Reveal>
            <Reveal as="p" delay={200} className="mt-4 text-sm leading-relaxed text-muted">Fill in the form and our HR team will get in touch if your profile matches an opening.</Reveal>
            <Reveal delay={250} className={`${card} mt-8 p-6`}>
              <h4 className="font-display text-2xl">Prefer email?</h4>
              <p className="mt-1 text-sm text-muted">
                Send your resume to <a className="text-ink underline underline-offset-4" href={`mailto:${CONTACT.careersEmail}`}>{CONTACT.careersEmail}</a> with the role you're applying for in the subject line.
              </p>
            </Reveal>
          </div>

          <Reveal as="form" delay={150} className={`${card} p-6 sm:p-8`} onSubmit={onSubmit} noValidate method="post" encType="multipart/form-data">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" htmlFor="a-name" required><input id="a-name" name="name" type="text" autoComplete="name" required className={inputClass} /></Field>
              <Field label="Phone" htmlFor="a-phone" required><input id="a-phone" name="phone" type="tel" autoComplete="tel" pattern="[0-9 +\-]{10,16}" title="Enter a valid phone number" required className={inputClass} /></Field>
              <Field label="Email" htmlFor="a-email" required><input id="a-email" name="email" type="email" autoComplete="email" required className={inputClass} /></Field>
              <Field label="City" htmlFor="a-city" required><input id="a-city" name="city" type="text" autoComplete="address-level2" required className={inputClass} /></Field>
              <Field label="Position" htmlFor="position" required>
                <select id="position" name="position" required value={role} onChange={(e) => onRoleChange(e.target.value)} className={inputClass}>
                  <option value="">Select a role</option>
                  {JOBS.map((j) => <option key={j.title}>{j.title}</option>)}
                  <option>Other / general application</option>
                </select>
              </Field>
              <Field label="Experience" htmlFor="experience" required>
                <select id="experience" name="experience" required defaultValue="" className={inputClass}>
                  <option value="">Select experience</option>
                  {EXPERIENCE.map((x) => <option key={x}>{x}</option>)}
                </select>
              </Field>
              <Field label="Resume" htmlFor="resume" optional="PDF or Word, optional" full>
                <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" className={`${inputClass} file:mr-3 file:rounded-full file:border-0 file:bg-soft file:px-3 file:py-1 file:text-xs`} />
              </Field>
              <Field label="Tell us about yourself" htmlFor="a-about" optional="optional" full>
                <textarea id="a-about" name="message" rows={4} className={inputClass} />
              </Field>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <button type="submit" disabled={sending} className="rounded-full bg-ink px-8 py-3.5 text-sm text-white transition-transform duration-300 hover:scale-[1.03] disabled:opacity-60">
                {sending ? 'Sending…' : 'Submit application'}
              </button>
              <p className="text-xs text-muted">By applying you agree to be contacted about job opportunities.</p>
            </div>
            <FormStatus kind={status.kind} message={status.message} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
