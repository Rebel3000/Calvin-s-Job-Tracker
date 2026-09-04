import { Mail, MapPin } from 'lucide-react';

// Placeholder — replace with Calvin's real public contact email before launch.
const CONTACT_EMAIL = 'hello@calvinwadejr.com';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="border-t border-[#D3CEBF] px-5 md:px-8 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-headline-lg text-[#0D0D0D] mb-4">
            Interested in working together?
          </h2>
          <button
            onClick={onContactClick}
            className="px-6 py-3 bg-[#0D0D0D] text-[#fef9ec] font-label-mono-sm uppercase tracking-widest hover:bg-[#323028] transition-colors cursor-pointer"
          >
            Start a conversation
          </button>
        </div>

        <div className="space-y-3 md:justify-self-end">
          <p className="font-body-sm text-[#57544E] flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#8C877D]" />
            <span>DMV &mdash; Washington, D.C. &middot; Maryland &middot; Virginia</span>
          </p>
          <p className="font-body-sm text-[#57544E] flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#8C877D]" />
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-[#0D0D0D]">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-14 pt-6 border-t border-[#D3CEBF] font-label-mono-sm uppercase tracking-wider text-[#8C877D]">
        &copy; {new Date().getFullYear()} Calvin Wade Jr.
      </div>
    </footer>
  );
};
