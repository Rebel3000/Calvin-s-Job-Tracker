import { ImageOff } from 'lucide-react';

const CATEGORIES = ['Portrait', 'Editorial', 'Creative', 'Brand'] as const;

// Placeholder tiles standing in for real photographs. Swap each one out with an
// actual image (and drop the "Placeholder" styling) once selects are ready.
const PLACEHOLDER_TILES = [
  { category: 'Portrait', tall: true },
  { category: 'Editorial', tall: false },
  { category: 'Creative', tall: false },
  { category: 'Brand', tall: true },
  { category: 'Portrait', tall: false },
  { category: 'Editorial', tall: true },
  { category: 'Creative', tall: false },
  { category: 'Brand', tall: false },
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="px-5 md:px-8 py-24 md:py-32 border-t border-[#D3CEBF]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="font-label-mono-sm uppercase tracking-widest text-[#8C877D] block mb-3">
              Selected Work
            </span>
            <h2 className="font-headline-lg text-[#0D0D0D]">Portrait · Editorial · Creative · Brand</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="font-label-mono-sm uppercase tracking-wider text-[#57544E] border border-[#D3CEBF] px-3 py-1.5"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[220px]">
          {PLACEHOLDER_TILES.map((tile, i) => (
            <div
              key={i}
              className={`relative border border-dashed border-[#D3CEBF] bg-[#f8f3e6] flex flex-col items-center justify-center gap-2 ${
                tile.tall ? 'row-span-2' : 'row-span-1'
              }`}
            >
              <ImageOff className="w-5 h-5 text-[#8C877D]" aria-hidden="true" />
              <span className="font-label-mono-sm uppercase tracking-wider text-[#8C877D]">
                {tile.category}
              </span>
              <span className="font-label-mono-sm uppercase tracking-wider text-[#D3CEBF] absolute top-2 right-2">
                Placeholder
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
