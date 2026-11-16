import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { SectionHeading, fadeUpVariants, staggerContainer } from './MotionPrimitives';

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects"
          description="Deployed web platforms and full-stack applications built with Spring Boot, React.js, TypeScript, and MySQL."
        />

        <motion.div
          className="projects-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              className="card project-card"
              variants={fadeUpVariants}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            >
              <div className="project-top">
                <span className="project-category">{project.category}</span>
                <span className="live-badge">
                  <span className="live-dot" aria-hidden="true" />
                  Live
                </span>
              </div>

              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">{project.role}</p>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="tag-list" aria-label="Technologies used">
                {project.tech.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <Github size={14} />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
