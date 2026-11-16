import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Reveal } from '../components/MotionPrimitives';
import { PROFILE } from '../data/portfolio';

export function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section className="section">
      <div className="container">
        <Reveal className="card contact-card">
          <div>
            <span className="section-eyebrow">Get In Touch</span>
            <h1 className="section-title" style={{ marginBlock: '0.45rem 0.75rem' }}>
              Let&apos;s build something reliable.
            </h1>
            <p className="section-desc">
              Based in {PROFILE.location}. Open to discussing full-stack engineering opportunities, collaborations, and software projects.
            </p>
          </div>

          <div className="contact-actions">
            <div className="contact-row">
              <a href={`mailto:${PROFILE.email}`} className="contact-row-left">
                <Mail size={16} />
                <span>{PROFILE.email}</span>
              </a>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <a href={`tel:${PROFILE.phone}`} className="contact-row">
              <span className="contact-row-left">
                <Phone size={16} />
                <span>{PROFILE.phone}</span>
              </span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-row"
            >
              <span className="contact-row-left">
                <Linkedin size={16} />
                <span>{PROFILE.linkedinDisplay}</span>
              </span>
              <ArrowUpRight size={15} />
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="contact-row"
            >
              <span className="contact-row-left">
                <Github size={16} />
                <span>{PROFILE.githubDisplay}</span>
              </span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
