import type { ReactNode } from 'react';
import Reveal from './Reveal';

export function SectionHead({ eyebrow, title, lead, center = false }: { eyebrow: string; title: ReactNode; lead?: string; center?: boolean }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Reveal as="p" className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {eyebrow}
      </Reveal>
      <Reveal as="h2" delay={100} className="mt-5 font-display text-4xl leading-[0.98] tracking-[-1.2px] sm:text-6xl">
        {title}
      </Reveal>
      {lead && (
        <Reveal as="p" delay={200} className={`mt-6 text-base leading-relaxed text-muted sm:text-lg ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {lead}
        </Reveal>
      )}
    </div>
  );
}

export const Em = ({ children }: { children: ReactNode }) => <em className="italic text-muted">{children}</em>;

export function Pill({ href, children, onClick, variant = 'dark', size = 'md' }: { href: string; children: ReactNode; onClick?: () => void; variant?: 'dark' | 'light'; size?: 'md' | 'lg' }) {
  const sizes = size === 'lg' ? 'px-14 py-5 text-base' : 'px-6 py-2.5 text-sm';
  const colors = variant === 'dark' ? 'bg-ink text-white' : 'border border-ink/15 bg-white/70 text-ink backdrop-blur';
  return (
    <a href={href} onClick={onClick} className={`inline-flex items-center justify-center rounded-full ${sizes} ${colors} transition-transform duration-300 hover:scale-[1.03]`}>
      {children}
    </a>
  );
}

export function CheckList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`grid gap-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/80">
          <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-ink" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export const card = 'rounded-3xl border border-line bg-white/70 backdrop-blur-xl';

export const inputClass =
  'w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink/40 focus:ring-4 focus:ring-ink/5 user-invalid:border-red-400';

export function Field({ label, htmlFor, required, optional, full, children }: { label: string; htmlFor: string; required?: boolean; optional?: string; full?: boolean; children: ReactNode }) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label htmlFor={htmlFor} className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
        {label} {required && <span className="text-ink">*</span>}
        {optional && <span className="normal-case tracking-normal text-muted/80"> ({optional})</span>}
      </label>
      {children}
    </div>
  );
}

export function FormStatus({ kind, message }: { kind: string; message: string }) {
  if (!message) return null;
  const tone = kind === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700';
  return (
    <p role="status" className={`mt-4 rounded-2xl px-4 py-3 text-sm ${tone}`}>
      {message}
    </p>
  );
}
