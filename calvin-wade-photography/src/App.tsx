import { useState } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fef9ec]">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 bg-[#0D0D0D] text-[#fef9ec] px-4 py-2"
      >
        Skip to content
      </a>
      <Nav onContactClick={() => setContactOpen(true)} />
      <main>
        <Hero onContactClick={() => setContactOpen(true)} />
        <Work />
        <About />
      </main>
      <Footer onContactClick={() => setContactOpen(true)} />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  );
}

export default App;
