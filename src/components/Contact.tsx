import { CONTACT } from '../content';
import { useFormSubmit } from '../lib/forms';
import Reveal from './Reveal';
import { Em, Field, FormStatus, SectionHead, card, inputClass } from './ui';

type Props = { service: string; onServiceChange: (id: string) => void };

const SERVICE_OPTIONS = [
  ['call-centre', 'Call Centre Operations'],
  ['banking', 'Banking & Financial Services'],
  ['sales', 'Inbound & Outbound Sales'],
  ['bpo-ites', 'BPO & ITES Operations'],
  ['support-leads', 'Customer Support & Lead Generation'],
  ['recruitment', 'Recruitment & Training'],
  ['back-office', 'Back-Office & Admin'],
] as const;

export default function Contact({ service, onServiceChange }: Props) {
  const { status, onSubmit, sending } = useFormSubmit('Thank you! Your enquiry has been received and our team will get back to you shortly.');
  const info = [
    { label: 'Visit us', value: CONTACT.address },
    { label: 'Call us', value: CONTACT.phone, href: CONTACT.phoneHref },
    { label: 'Email us', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: 'Working hours', value: CONTACT.hours },
  ];

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-28 sm:px-8 sm:py-36">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <SectionHead
            eyebrow="Contact us"
            title={<>Let's talk about <Em>your business.</Em></>}
            lead="Tell us about your requirements and our team will get back to you with the right solution. Whether you need a full team or want to start with a pilot, we're happy to help."
          />
          {/* TODO: replace with the company's real contact details */}
          <dl className="mt-12 border-t border-line">
            {info.map((item, i) => (
              <Reveal key={item.label} delay={i * 80} className="grid grid-cols-[8rem_1fr] gap-4 border-b border-line py-5 text-sm">
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">{item.label}</dt>
                <dd>{item.href ? <a href={item.href} className="underline-offset-4 hover:underline">{item.value}</a> : item.value}</dd>
              </Reveal>
            ))}
          </dl>
          <Reveal as="p" delay={300} className="mt-8 text-sm text-muted">
            Looking for a job? <a href="#openings" className="text-ink underline underline-offset-4">See our current openings.</a>
          </Reveal>
        </div>

        <Reveal as="form" delay={150} className={`${card} self-start p-6 shadow-[0_40px_80px_-50px_rgba(0,0,0,0.3)] sm:p-10`} onSubmit={onSubmit} noValidate method="post">
          <h3 className="font-display text-4xl tracking-tight">Send us an enquiry</h3>
          <p className="mt-1 text-sm text-muted">Fill in the form and our team will get back to you shortly.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Field label="Full name" htmlFor="name" required><input id="name" name="name" type="text" autoComplete="name" required className={inputClass} /></Field>
            <Field label="Company" htmlFor="company" optional="optional"><input id="company" name="company" type="text" autoComplete="organization" className={inputClass} /></Field>
            <Field label="Email" htmlFor="email" required><input id="email" name="email" type="email" autoComplete="email" required className={inputClass} /></Field>
            <Field label="Phone" htmlFor="phone" required><input id="phone" name="phone" type="tel" autoComplete="tel" pattern="[0-9 +\-]{10,16}" title="Enter a valid phone number" required className={inputClass} /></Field>
            <Field label="Service you're interested in" htmlFor="service" full>
              <select id="service" name="service" value={service} onChange={(e) => onServiceChange(e.target.value)} className={inputClass}>
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                <option value="other">Something else</option>
              </select>
            </Field>
            <Field label="Your requirements" htmlFor="message" required full>
              <textarea id="message" name="message" rows={5} required placeholder="Tell us about your process, expected volumes and timelines" className={inputClass} />
            </Field>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <button type="submit" disabled={sending} className="rounded-full bg-ink px-8 py-3.5 text-sm text-white transition-transform duration-300 hover:scale-[1.03] disabled:opacity-60">
              {sending ? 'Sending…' : 'Send enquiry'}
            </button>
            <p className="text-xs text-muted">We'll never share your details with anyone else.</p>
          </div>
          <FormStatus kind={status.kind} message={status.message} />
        </Reveal>
      </div>
    </section>
  );
}
