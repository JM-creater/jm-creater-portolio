import { motion } from 'framer-motion';
import { ExternalLink, Github, GraduationCap } from 'lucide-react';
import { COLLEGE_PROJECTS, PROJECTS, type Project } from '../data/portfolio';
import { SectionHeading, fadeUpVariants, staggerContainer } from './MotionPrimitives';

function ProjectCard({ project }: { project: Project }) {
  const repoLinks =
    project.githubLinks && project.githubLinks.length > 0
      ? project.githubLinks
      : project.githubUrl
        ? [{ label: 'Source Code', url: project.githubUrl }]
        : [];

  return (
    <motion.article
      className="card project-card"
      variants={fadeUpVariants}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
    >
      <div className="project-top">
        <span className="project-category">{project.category}</span>
        {project.liveUrl ? (
          <span className="live-badge">
            <span className="live-dot" aria-hidden="true" />
            {project.year ? `Live · ${project.year}` : 'Live'}
          </span>
        ) : (
          <span className="college-badge">
            <GraduationCap size={13} aria-hidden="true" />
            <span>{project.badge ?? 'Academic'}</span>
          </span>
        )}
      </div>

      <div className="project-header">
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
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
          >
            <ExternalLink size={14} />
            <span>Live Demo</span>
          </a>
        ) : null}

        {repoLinks.map((repo) => (
          <a
            key={repo.url}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <Github size={14} />
            <span>{repo.label}</span>
          </a>
        ))}

        {!project.liveUrl && repoLinks.length === 1 ? (
          <span className="no-demo-badge">No live demo yet</span>
        ) : null}
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Work · 2026"
          title="2026 Projects"
          description="Latest 2026 deployed web platforms and full-stack applications built with Spring Boot, React.js, TypeScript, and MySQL."
        />

        <motion.div
          className="projects-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <div className="projects-subsection">
          <SectionHeading
            eyebrow="Academic & Training"
            title="College Projects"
            description="Full-stack web applications developed during my BSIT studies at University of Cebu and the Alliance Jumpstart Program."
          />

          <motion.div
            className="projects-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {COLLEGE_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
