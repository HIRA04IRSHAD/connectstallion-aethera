import { CONTACT, NAV, SERVICES } from '../content';
import Reveal from './Reveal';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-8 border-b border-line pb-16 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-5xl leading-[0.95] tracking-[-2px] sm:text-7xl">
            Ready to scale your <em className="italic text-muted">customer operations?</em>
          </h2>
          <a href="#contact" className="rounded-full bg-ink px-10 py-4 text-base text-white transition-transform duration-300 hover:scale-[1.03]">
            Get a Quote
          </a>
        </Reveal>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr_1fr]">
          <div>
            <a href="#home" aria-label="Stallion Connect home" className="inline-block">
              <img
                src={`${import.meta.env.BASE_URL}assets/img/logo-full.webp`}
                alt="Stallion Connect — Where every connection counts"
                width={900}
                height={281}
                loading="lazy"
                className="h-20 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Call centre, sales, customer support and back-office outsourcing for businesses across India and overseas.
            </p>
            {/* TODO: replace # with the company's social media profile links */}
            <ul className="mt-6 flex gap-4 text-sm text-muted">
              <li><a href="#" className="transition-colors hover:text-ink">LinkedIn</a></li>
              <li><a href="#" className="transition-colors hover:text-ink">Facebook</a></li>
              <li><a href="#" className="transition-colors hover:text-ink">Instagram</a></li>
            </ul>
          </div>
          <nav aria-label="Company">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted">Company</h3>
            <ul className="mt-5 grid gap-3 text-sm">
              {NAV.slice(1).map((n) => <li key={n.href}><a href={n.href} className="transition-colors hover:text-muted">{n.label}</a></li>)}
            </ul>
          </nav>
          <nav aria-label="Services">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted">Services</h3>
            <ul className="mt-5 grid gap-3 text-sm">
              {SERVICES.map((s) => <li key={s.id}><a href={`#${s.id}`} className="transition-colors hover:text-muted">{s.title}</a></li>)}
            </ul>
          </nav>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted">Get in touch</h3>
            {/* TODO: replace with the company's real address, phone and email */}
            <ul className="mt-5 grid gap-3 text-sm">
              <li className="text-muted">{CONTACT.address}</li>
              <li><a href={CONTACT.phoneHref} className="hover:underline">{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:underline">{CONTACT.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-line pt-8 text-xs text-muted sm:flex-row">
          <p>© {year} Stallion Connect Pvt Ltd. All rights reserved.</p>
          <a href="#home" className="hover:text-ink">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
