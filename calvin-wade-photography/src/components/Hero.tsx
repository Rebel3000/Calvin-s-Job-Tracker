import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="top" className="relative min-h-[92vh] flex flex-col justify-center px-5 md:px-8 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <span className="font-label-mono-sm uppercase tracking-widest text-[#8C877D] block mb-6">
          DMV-Based Photographer &amp; Visual Storyteller
        </span>

        <h1 className="font-headline-xl text-[#0D0D0D] max-w-3xl">
          The space between being seen and being understood.
        </h1>

        <p className="font-body-lg text-[#57544E] max-w-xl mt-6">
          Portraiture, editorial photography, and visual documentation — images that feel
          honest, intentional, and alive.
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-9">
          <a
            href="#work"
            className="px-6 py-3 bg-[#0D0D0D] text-[#fef9ec] font-label-mono-sm uppercase tracking-widest hover:bg-[#323028] transition-colors"
          >
            View the work
          </a>
          <button
            onClick={onContactClick}
            className="px-6 py-3 border border-[#0D0D0D] text-[#0D0D0D] font-label-mono-sm uppercase tracking-widest hover:bg-[#ede8db] transition-colors cursor-pointer"
          >
            Get in touch
          </button>
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#8C877D] hover:text-[#0D0D0D] transition-colors"
      >
        <span className="font-label-mono-sm uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 motion-safe:animate-bounce" />
      </a>
    </section>
  );
};
