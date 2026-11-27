export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
  highlights?: { label?: string; text: string }[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  roles: ExperienceRole[];
}

export const PROFILE = {
  name: 'Joseph Martin T. Garado',
  shortName: 'JM Garado',
  role: 'Full-Stack Software Developer',
  location: 'Cebu City, Philippines',
  phone: '09569911935',
  email: 'garadojosephmartin98@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joseph-martin-garado-19b5a6202',
  linkedinDisplay: 'linkedin.com/in/joseph-martin-garado-19b5a6202',
  github: 'https://github.com/JM-creater',
  githubDisplay: 'github.com/JM-creater',
  resumePath: '/Joseph-Martin-Garado-Resume.pdf',
  avatarPath: '/profile_img.jpg',
  summary:
    'Full-Stack Software Developer with 2+ years of experience designing and implementing features across web, desktop, and mobile applications using Java, Spring Boot, React.js, Electron.js, React Native, TypeScript, and MySQL. Experienced in RESTful API architecture, relational database optimization, automated testing, and cross-functional Agile delivery.',
};

export const PROJECTS: Project[] = [
  {
    id: 'barangay-eservices',
    title: 'Barangay Cansojong e-Services Platform',
    role: 'Full-Stack Developer',
    category: 'Civic Tech · Full-Stack',
    description:
      'Engineered a digital public-service portal using Spring Boot, React.js, TypeScript, and MySQL to automate citizen document requests (clearances, certificates of indigency, cedulas) and appointment scheduling.',
    tech: ['Spring Boot', 'React.js', 'TypeScript', 'MySQL'],
    liveUrl: 'https://barangay-eservices.pages.dev/',
    githubUrl: 'https://github.com/JM-creater/Barangay-eServices',
  },
  {
    id: 'tabunok-drrm',
    title: 'Tabunok DRRM System Core',
    role: 'Full-Stack Developer',
    category: 'Public Safety · Full-Stack',
    description:
      'Built a disaster risk reduction and management (DRRM) backend and web platform using Java, Spring Boot, Spring Security (JWT), and MySQL for incident reporting, hazard safety tracking, and early warning alerts.',
    tech: ['Java', 'Spring Boot', 'Spring Security (JWT)', 'MySQL'],
    liveUrl: 'https://disaster-information.shop/login',
    githubUrl: 'https://github.com/JM-creater/ddrm-system-core',
  },
  {
    id: 'amor-fuzzia',
    title: 'AMor Fuzzia – Custom Bouquet Ordering Platform',
    role: 'Full-Stack Developer',
    category: 'E-Commerce · Web App',
    description:
      'Built a custom e-commerce ordering web application using React.js, TypeScript, and Firebase Hosting with automated GitHub Actions CI/CD deployment for made-to-order handcrafted fuzzy-wire bouquets.',
    tech: ['React.js', 'TypeScript', 'Firebase Hosting', 'GitHub Actions'],
    liveUrl: 'https://amor-fuzzia-011.web.app/',
    githubUrl: 'https://github.com/JM-creater/amor-fuzzia',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Alliance Software Inc.',
    location: 'Cebu City, Philippines',
    roles: [
      {
        title: 'Software Developer – Associate Technical Specialist I',
        period: 'February 2026 – Present',
        highlights: [
          {
            text: 'Promoted to Associate Technical Specialist I for consistent full-stack feature delivery and module ownership.',
          },
          {
            text: 'Engineered new Point of Sale (POS) features, including a mobile POS application across platforms using React Native, Electron.js, React.js, TypeScript, Java, and Spring Boot.',
          },
          {
            text: 'Developed and optimized full-stack ERP features and RESTful APIs with a focus on efficient SQL and MySQL query execution for enhanced reporting performance.',
          },
          {
            text: 'Identified and resolved software bugs and production issues, leading to improved application stability and operational workflows.',
          },
          {
            text: 'Facilitated peer code reviews and implemented software testing, managing code releases within Agile/Scrum environments.',
          },
          {
            text: 'Leveraged agentic workflows to accelerate development tasks and improve delivery speed.',
          },
        ],
      },
      {
        title: 'Software Developer – Technical Specialist II',
        period: 'February 2026',
      },
      {
        title: 'Software Developer – Technical Specialist I',
        period: 'July 2024 – February 2026',
        highlights: [
          {
            text: 'Collaborated on cross-functional teams to enhance application features and ensured high-quality deliverables.',
          },
          {
            text: 'Designed and maintained RESTful APIs, integrating them with MySQL databases to streamline data access and retrieval.',
          },
          {
            text: 'Executed software testing, contributing to a reduced bug rate in production by approximately 25%.',
          },
          {
            text: 'Engaged in code reviews to uphold standards using Agile methodologies, improving team productivity.',
          },
        ],
      },
    ],
  },
];

export const EDUCATION = {
  degree: 'Bachelor of Science in Information Technology (BSIT)',
  school: 'University of Cebu',
  period: 'September 2020 – June 2024',
  location: 'Cebu City, Philippines',
  capstoneTitle: 'Capstone Project – UniTee',
  capstoneDescription:
    'Developed a full-stack capstone web application with separate frontend and backend repositories.',
  capstoneLinks: [
    { label: 'Frontend Repo', url: 'https://github.com/JM-creater/unitee' },
    { label: 'Backend Repo', url: 'https://github.com/JM-creater/UNITEE_BACKEND' },
  ],
};
