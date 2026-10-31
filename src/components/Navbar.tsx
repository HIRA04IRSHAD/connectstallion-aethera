import { useState } from 'react';
import { NAV } from '../content';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6" aria-label="Main">
        <a href="#home" className="font-display text-3xl tracking-tight text-[#000000]">
          Stallion Connect
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map((item, i) => (
            <li key={item.href}>
              <a href={item.href} className={`text-sm transition-colors hover:text-[#000000] ${i === 0 ? 'text-[#000000]' : 'text-[#6F6F6F]'}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden rounded-full bg-[#000000] px-6 py-2.5 text-sm text-white transition-transform duration-300 hover:scale-[1.03] sm:inline-flex">
            Get a Quote
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/60 backdrop-blur lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-px w-4 bg-black transition-transform duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0.5'}`} />
              <span className={`absolute left-0 h-px w-4 bg-black transition-transform duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-2.5'}`} />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`absolute inset-x-4 top-full rounded-3xl border border-black/5 bg-white/85 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 lg:hidden ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}
      >
        <ul className="grid gap-1">
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)} className="block py-2 font-display text-3xl tracking-tight">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" onClick={() => setOpen(false)} className="mt-5 inline-flex rounded-full bg-black px-6 py-2.5 text-sm text-white">
          Get a Quote
        </a>
      </div>
    </header>
  );
}
