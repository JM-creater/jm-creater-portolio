import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import {
  Reveal,
  SectionHeading,
  fadeUpVariants,
  staggerContainer,
} from '../components/MotionPrimitives';
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

              <motion.div
                className="roles-timeline"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {exp.roles.map((role) => (
                  <motion.div
                    key={`${role.title}-${role.period}`}
                    variants={fadeUpVariants}
                    className="role-block"
                  >
                    <span
                      className={`role-dot${role.current ? ' role-dot-current' : ''}`}
                      aria-hidden="true"
                    />
                    <div className="role-row">
                      <div className="role-title-wrap">
                        <span className="role-title">{role.title}</span>
                        {role.current ? (
                          <span className="live-badge">
                            <span className="live-dot" aria-hidden="true" />
                            Current
                          </span>
                        ) : null}
                      </div>
                      <span className="role-period">{role.period}</span>
                    </div>

                    {role.highlights && role.highlights.length > 0 ? (
                      <ul className="highlights-list">
                        {role.highlights.map((item, idx) => (
                          <li key={idx}>
                            {item.label ? <strong>{item.label}: </strong> : null}
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </motion.div>
                ))}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
