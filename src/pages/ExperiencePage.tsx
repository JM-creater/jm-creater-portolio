import { MapPin } from 'lucide-react';
import { Reveal, SectionHeading } from '../components/MotionPrimitives';
import { EXPERIENCE } from '../data/portfolio';

export function ExperiencePage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Career"
          title="Work Experience"
          description="Full-stack delivery across enterprise POS and ERP platforms in Agile/Scrum environments."
        />

        <div className="timeline">
          {EXPERIENCE.map((exp) => (
            <Reveal key={exp.company} className="card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-company">{exp.company}</h3>
                </div>
                <span className="exp-location">
                  <MapPin size={14} />
                  {exp.location}
                </span>
              </div>

              <div className="roles-list">
                {exp.roles.map((role) => (
                  <div key={role.title} className="role-row">
                    <span className="role-title">{role.title}</span>
                    <span className="role-period">{role.period}</span>
                  </div>
                ))}
              </div>

              <ul className="highlights-list">
                {exp.highlights.map((item, idx) => (
                  <li key={idx}>
                    {item.label ? <strong>{item.label}: </strong> : null}
                    {item.text}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
