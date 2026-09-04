import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavProps {
  onContactClick: () => void;
}

export const Nav: React.FC<NavProps> = ({ onContactClick }) => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fef9ec]/90 backdrop-blur-sm border-b border-[#D3CEBF]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-label-mono-sm uppercase tracking-widest text-[#0D0D0D] font-medium">
          Calvin Wade Jr.
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-label-mono-sm uppercase tracking-wider text-[#57544E] hover:text-[#0D0D0D] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onContactClick}
            className="px-4 py-2 bg-[#0D0D0D] text-[#fef9ec] font-label-mono-sm uppercase tracking-widest hover:bg-[#323028] transition-colors cursor-pointer"
          >
            Get in touch
          </button>
        </nav>

        <button
          className="md:hidden p-2 text-[#0D0D0D]"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[#D3CEBF] px-5 py-4 flex flex-col gap-4 bg-[#fef9ec]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-label-mono-sm uppercase tracking-wider text-[#57544E]"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onContactClick();
            }}
            className="w-full text-center px-4 py-3 bg-[#0D0D0D] text-[#fef9ec] font-label-mono-sm uppercase tracking-widest cursor-pointer"
          >
            Get in touch
          </button>
        </nav>
      )}
    </header>
  );
};
