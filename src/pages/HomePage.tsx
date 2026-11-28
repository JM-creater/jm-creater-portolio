import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Download, FolderGit2, Github, GraduationCap, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUpVariants, staggerContainer } from '../components/MotionPrimitives';
import { SkillsSection } from '../components/SkillsSection';
import { PROFILE } from '../data/portfolio';

const QUICK_CARDS = [
  {
    to: '/projects',
    icon: FolderGit2,
    title: 'Projects',
    meta: '3 live 2026 platforms · 3 college projects',
    desc: '2026 deployed platforms (Tabunok DRRM, Barangay e-Services, Amor Fuzzia) and college projects.',
  },
  {
    to: '/experience',
    icon: Briefcase,
    title: 'Work Experience',
    meta: 'Alliance Software Inc.',
    desc: 'Associate Technical Specialist I building ERP and POS systems.',
  },
  {
    to: '/education',
    icon: GraduationCap,
    title: 'Education',
    meta: 'University of Cebu · BSIT',
    desc: 'Bachelor of Science in Information Technology, certifications, and academic awards.',
  },
];

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            className="hero-content"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUpVariants} className="hero-badge">
              <span className="status-dot" aria-hidden="true" />
              <span>Associate Technical Specialist I · Alliance Software Inc.</span>
            </motion.div>

            <motion.h1 variants={fadeUpVariants} className="hero-title">
              {PROFILE.name}
            </motion.h1>

            <motion.p variants={fadeUpVariants} className="hero-subtitle">
              {PROFILE.role} · {PROFILE.location}
            </motion.p>

            <motion.p variants={fadeUpVariants} className="hero-summary">
              {PROFILE.summary}
            </motion.p>

            <motion.div variants={fadeUpVariants} className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowUpRight size={17} />
              </Link>
              <a
                href={PROFILE.resumePath}
                download="Joseph Martin T. Garado - Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="hero-socials">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="social-link">
                <Github size={16} />
                <span>{PROFILE.githubDisplay}</span>
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="social-link">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a href={`mailto:${PROFILE.email}`} className="social-link">
                <Mail size={16} />
                <span>{PROFILE.email}</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-media"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="avatar-frame"
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            >
              <img
                src={PROFILE.avatarPath}
                alt={`${PROFILE.name} portrait`}
                className="avatar-img"
                fetchPriority="high"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingBlockStart: '0.5rem' }}>
        <div className="container">
          <motion.div
            className="projects-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {QUICK_CARDS.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.to}
                  variants={fadeUpVariants}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                >
                  <Link to={item.to} className="card quick-card">
                    <div className="project-top">
                      <span className="quick-icon">
                        <Icon size={18} />
                      </span>
                      <ArrowUpRight size={17} className="quick-arrow" />
                    </div>
                    <div>
                      <h2 className="project-title">{item.title}</h2>
                      <p className="project-role">{item.meta}</p>
                    </div>
                    <p className="project-desc">{item.desc}</p>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <SkillsSection />
    </>
  );
}
