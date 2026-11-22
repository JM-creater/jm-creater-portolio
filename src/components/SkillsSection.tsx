import { useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { Code2, Cpu, Database, Layers, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES, type SkillCategory } from '../data/portfolio';
import { SectionHeading } from './MotionPrimitives';

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  languages: Code2,
  frontend: Layers,
  backend: Database,
  devops: Wrench,
  ai: Cpu,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.97,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillListVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.08,
    },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 360, damping: 24 },
  },
};

interface SkillGroupCardProps {
  category: SkillCategory;
}

function SkillGroupCard({ category }: SkillGroupCardProps) {
  const Icon = CATEGORY_ICONS[category.id] ?? Code2;

  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="card skill-card"
    >
      <div className="skill-card-header">
        <div className="skill-card-title-row">
          <span className="skill-card-icon" aria-hidden="true">
            <Icon size={18} />
          </span>
          <div>
            <h3 className="skill-group-title">{category.title}</h3>
            <p className="skill-group-subtitle">{category.subtitle}</p>
          </div>
        </div>
        <span className="skill-count">{category.skills.length}</span>
      </div>

      <motion.div
        className="skill-pills-wrap"
        variants={pillListVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {category.skills.map((skill) => (
          <motion.span
            key={skill}
            variants={pillVariants}
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 420, damping: 22 }}
            className="skill-pill"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.article>
  );
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const totalSkills = SKILL_CATEGORIES.reduce(
    (sum, category) => sum + category.skills.length,
    0,
  );

  const visibleCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((category) => category.id === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical Skills"
          description="Core languages, frameworks, databases, DevOps tooling, and agentic workflows used across production POS, ERP, and full-stack web platforms."
        />

        <div
          className="skills-filter-bar"
          role="group"
          aria-label="Filter skills by category"
        >
          <button
            type="button"
            className={`skills-filter-btn${activeCategory === 'all' ? ' is-active' : ''}`}
            onClick={() => setActiveCategory('all')}
            aria-pressed={activeCategory === 'all'}
          >
            {activeCategory === 'all' ? (
              <motion.span
                layoutId="skills-filter-pill"
                className="skills-filter-active-bg"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            ) : null}
            <span className="skills-filter-label">All ({totalSkills})</span>
          </button>

          {SKILL_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                className={`skills-filter-btn${isActive ? ' is-active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
              >
                {isActive ? (
                  <motion.span
                    layoutId="skills-filter-pill"
                    className="skills-filter-active-bg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : null}
                <span className="skills-filter-label">
                  {category.title} ({category.skills.length})
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="skills-grid">
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((category) => (
              <SkillGroupCard key={category.id} category={category} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
