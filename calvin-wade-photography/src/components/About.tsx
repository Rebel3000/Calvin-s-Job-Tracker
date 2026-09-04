export const About: React.FC = () => {
  return (
    <section id="about" className="px-5 md:px-8 py-24 md:py-32 border-t border-[#D3CEBF]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <span className="font-label-mono-sm uppercase tracking-widest text-[#8C877D] block mb-3">
            About
          </span>
          <h2 className="font-headline-lg text-[#0D0D0D]">Calvin Wade Jr.</h2>
        </div>

        <div className="md:col-span-8 space-y-8">
          <p className="font-body-lg text-[#57544E]">
            I'm interested in people, identity, culture, and the moments that often go
            unnoticed. My work moves between portraiture, editorial photography, and visual
            documentation, with a focus on creating images that feel honest, intentional,
            and alive.
          </p>

          <blockquote className="font-headline-sm text-[#0D0D0D] border-l-2 border-[#0D0D0D] pl-6 py-1">
            I'm drawn to the space between being seen and being understood. A portrait can
            say something about a person without explaining everything about them. That is
            what keeps me behind the camera.
          </blockquote>

          <p className="font-body-lg text-[#57544E]">
            I work with creatives, artists, families, and brands to create photographs that
            feel personal rather than manufactured. Whether it is a carefully constructed
            portrait or a moment that happens naturally, I want the image to have a point
            of view.
          </p>

          <p className="font-label-mono-sm text-[#8C877D] uppercase tracking-wide pt-2">
            Based in the DMV. Available for portrait, editorial, creative, and brand
            projects.
          </p>
        </div>
      </div>
    </section>
  );
};
