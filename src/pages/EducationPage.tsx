import { Award, BadgeCheck, Github, GraduationCap } from 'lucide-react';
import { Reveal, SectionHeading } from '../components/MotionPrimitives';
import { AWARDS, CERTIFICATIONS, EDUCATION } from '../data/portfolio';

export function EducationPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Academic & Credentials"
          title="Education, Certifications & Awards"
        />

        <div className="stack-col">
          <Reveal className="card">
            <div className="exp-header">
              <div>
                <h3
                  className="exp-company"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}
                >
                  <GraduationCap size={20} />
                  {EDUCATION.degree}
                </h3>
                <p className="item-meta" style={{ marginBlockStart: '0.3rem' }}>
                  {EDUCATION.school} · {EDUCATION.location}
                </p>
              </div>
              <span className="role-period">{EDUCATION.period}</span>
            </div>

            <div style={{ paddingBlockStart: '0.85rem', borderBlockStart: '1px solid var(--border)' }}>
              <p className="item-title" style={{ marginBlockEnd: '0.35rem' }}>
                {EDUCATION.capstoneTitle}
              </p>
              <p className="project-desc" style={{ marginBlockEnd: '0.9rem' }}>
                {EDUCATION.capstoneDescription}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {EDUCATION.capstoneLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Github size={14} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="bento-grid">
            <Reveal className="card" delay={0.06}>
              <div className="exp-header">
                <h3
                  className="exp-company"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}
                >
                  <BadgeCheck size={20} />
                  Certifications
                </h3>
              </div>

              <div className="item-list">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="item-row">
                    <div>
                      <p className="item-title">{cert.title}</p>
                      <p className="item-meta">{cert.issuer}</p>
                    </div>
                    <span className="item-date">{cert.date}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="card" delay={0.12}>
              <div className="exp-header">
                <h3
                  className="exp-company"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}
                >
                  <Award size={20} />
                  Awards
                </h3>
              </div>

              <div className="item-list">
                {AWARDS.map((award) => (
                  <div key={award.title} className="item-row">
                    <div>
                      <p className="item-title">{award.title}</p>
                      <p className="item-meta">{award.issuer}</p>
                    </div>
                    <span className="item-date">{award.date}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
