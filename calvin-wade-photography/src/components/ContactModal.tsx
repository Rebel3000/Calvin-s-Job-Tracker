import { useState, useEffect } from 'react';
import { X, CheckCircle, Send, MapPin, Mail } from 'lucide-react';

// Placeholder — replace with Calvin's real public contact email before launch.
const CONTACT_EMAIL = 'hello@calvinwadejr.com';

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'portrait',
    timeline: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend is wired up here, so submitting opens a pre-filled email
    // instead of claiming a message was sent when nothing was transmitted.
    const subject = encodeURIComponent(
      `New inquiry from ${formData.name || 'website'} — ${formData.projectType}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject type: ${formData.projectType}\nTimeline: ${formData.timeline}\n\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0D0D0D]/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="contact-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative w-full max-w-3xl bg-[#fef9ec] border border-[#D3CEBF] shadow-2xl p-6 md:p-10"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-[#D3CEBF]">
          <div>
            <span className="font-label-mono-sm uppercase text-[#8C877D] tracking-widest block">
              Portrait &middot; Editorial &middot; Creative &middot; Brand
            </span>
            <h2 id="contact-modal-title" className="font-headline-lg text-[#0D0D0D] uppercase tracking-tight mt-1">
              Contact
            </h2>
          </div>

          <button
            id="contact-modal-close-btn"
            onClick={onClose}
            className="p-1.5 border border-[#D3CEBF] hover:bg-[#ede8db] text-[#0D0D0D] transition-colors cursor-pointer"
            aria-label="Close the contact form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-16 text-center space-y-4">
            <CheckCircle className="w-12 h-12 text-[#0D0D0D] mx-auto" />
            <h3 className="font-headline-sm uppercase text-[#0D0D0D]">
              Almost there
            </h3>
            <p className="font-body-lg text-[#57544E] max-w-md mx-auto">
              Your email client should have opened with this message ready to send.
              If it didn't, reach out directly at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-[#0D0D0D]">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 bg-[#0D0D0D] text-[#fef9ec] font-label-mono-lg uppercase tracking-wider cursor-pointer"
            >
              Back to the site
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left: Contact Info */}
            <div className="md:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="font-label-mono-sm uppercase text-[#8C877D] tracking-wider block">
                  Direct Contact
                </span>
                <p className="font-headline-sm text-[#0D0D0D] uppercase font-bold">
                  Calvin Wade Jr.
                </p>
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

              <div className="pt-4 border-t border-[#D3CEBF] font-body-sm">
                <p className="text-[#57544E]">
                  Available for portrait, editorial, creative, and brand projects.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="md:col-span-7 space-y-4">
              <div>
                <label htmlFor="contact-name" className="font-label-mono-sm uppercase text-[#57544E] block mb-1">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Jordan Ellis"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#f8f3e6] border border-[#D3CEBF] focus:border-[#0D0D0D] text-[#0D0D0D] font-mono text-xs focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="font-label-mono-sm uppercase text-[#57544E] block mb-1">
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="jordan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-[#f8f3e6] border border-[#D3CEBF] focus:border-[#0D0D0D] text-[#0D0D0D] font-mono text-xs focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="contact-type" className="font-label-mono-sm uppercase text-[#57544E] block mb-1">
                    Project Type
                  </label>
                  <select
                    id="contact-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-2 bg-[#f8f3e6] border border-[#D3CEBF] focus:border-[#0D0D0D] text-[#0D0D0D] font-mono text-xs focus:outline-none"
                  >
                    <option value="portrait">Portrait</option>
                    <option value="editorial">Editorial</option>
                    <option value="creative">Creative</option>
                    <option value="brand">Brand</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-timeline" className="font-label-mono-sm uppercase text-[#57544E] block mb-1">
                    Timeline
                  </label>
                  <input
                    id="contact-timeline"
                    type="text"
                    placeholder="e.g. Spring 2026"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3 py-2 bg-[#f8f3e6] border border-[#D3CEBF] focus:border-[#0D0D0D] text-[#0D0D0D] font-mono text-xs focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="font-label-mono-sm uppercase text-[#57544E] block mb-1">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me a bit about the project, timeline, and what you have in mind..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 bg-[#f8f3e6] border border-[#D3CEBF] focus:border-[#0D0D0D] text-[#0D0D0D] font-mono text-xs focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                id="contact-form-submit-btn"
                className="w-full py-3 bg-[#0D0D0D] text-[#fef9ec] font-label-mono-lg uppercase font-bold tracking-wider hover:bg-[#323028] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
