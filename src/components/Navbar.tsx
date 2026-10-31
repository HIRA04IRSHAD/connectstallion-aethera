import { useEffect, useState } from 'react';
import { NAV } from '../content';

// Height of the bar at the top of the page; the hero reserves this much space.
export const NAV_HEIGHT = 88;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  // On scroll: turn into a floating glass pill, and highlight the section
  // whose top has passed 40% of the way down the screen
  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector<HTMLElement>(n.href)).filter((el): el is HTMLElement => !!el);
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const line = window.innerHeight * 0.4;
      let current = sections[0];
      for (const s of sections) if (s.getBoundingClientRect().top <= line) current = s;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setActive(`#${(atBottom ? sections[sections.length - 1] : current).id}`);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
          scrolled
            ? 'mt-3 max-w-5xl rounded-full border border-black/5 bg-white/75 py-2.5 pr-2.5 pl-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.3)] backdrop-blur-xl'
            : 'mt-0 max-w-7xl rounded-full border border-transparent px-5 py-6'
        }`}
      >
        <a href="#home" className={`font-display tracking-tight text-[#000000] transition-all duration-500 ${scrolled ? 'text-2xl' : 'text-3xl'}`}>
          Stallion Connect
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? 'true' : undefined}
                className={`relative text-sm transition-colors hover:text-[#000000] ${active === item.href ? 'text-[#000000]' : 'text-[#6F6F6F]'}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-black transition-opacity duration-300 ${active === item.href ? 'opacity-100' : 'opacity-0'}`}
                  aria-hidden="true"
                />
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
        className={`absolute inset-x-4 top-full mt-2 rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 lg:hidden ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}
      >
        <ul className="grid gap-1">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-2 font-display text-3xl tracking-tight ${active === item.href ? 'text-[#000000]' : 'text-[#6F6F6F]'}`}
              >
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
