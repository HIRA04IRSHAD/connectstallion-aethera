import Navbar, { NAV_HEIGHT } from './Navbar';
import VideoBackground from './VideoBackground';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden">
      <VideoBackground />
      <Navbar />
      {/* the navbar is fixed, so keep its original space in the layout */}
      <div style={{ height: NAV_HEIGHT }} aria-hidden="true" />

      <section
        className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 text-center"
        style={{ paddingTop: 'calc(8rem - 75px)' }}
      >
        <p className="animate-fade-rise mb-8 text-xs font-medium uppercase tracking-[0.2em] text-[#6F6F6F]">
          Where every connection counts
        </p>
        <h1
          className="animate-fade-rise max-w-7xl font-display text-5xl font-normal text-[#000000] sm:text-7xl md:text-8xl"
          style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
        >
          Customer <em className="italic text-[#6F6F6F]">conversations</em> that grow <em className="italic text-[#6F6F6F]">your business.</em>
        </h1>
        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
          Stallion Connect runs call centre, sales, customer support and back-office operations for banks, financial services firms and
          growing brands in India and overseas, so your team can focus on what it does best.
        </p>
        <a
          href="#contact"
          className="animate-fade-rise-delay-2 mt-12 rounded-full bg-[#000000] px-14 py-5 text-base text-[#FFFFFF] transition-transform duration-300 hover:scale-[1.03]"
        >
          Get a Free Consultation
        </a>
        <ul className="animate-fade-rise-delay-2 mt-10 flex flex-wrap justify-center gap-2">
          {['Domestic & international', 'Inbound & outbound', 'BFSI specialists'].map((point) => (
            <li key={point} className="rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs text-[#6F6F6F] backdrop-blur">
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
