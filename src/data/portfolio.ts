export interface ProjectRepoLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubLinks?: ProjectRepoLink[];
  category: string;
  badge?: string;
  year?: string;
}

export interface ExperienceHighlight {
  label?: string;
  text: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
  current?: boolean;
  summary?: string;
  highlights?: ExperienceHighlight[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  roles: ExperienceRole[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: string[];
}

export interface CredentialItem {
  title: string;
  issuer: string;
  date: string;
}

export const PROFILE = {
  name: 'Joseph Martin T. Garado',
  shortName: 'JM Garado',
  role: 'Full-Stack Software Developer',
  location: 'Cebu City, Philippines',
  phone: '+63 956 991 1935',
  email: 'garadojosephmartin98@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joseph-martin-garado-19b5a6202',
  linkedinDisplay: 'linkedin.com/in/joseph-martin-garado-19b5a6202',
  github: 'https://github.com/JM-creater',
  githubDisplay: 'github.com/JM-creater',
  resumePath: '/Joseph Martin T. Garado - Resume.pdf',
  avatarPath: '/profile_img.jpg',
  summary:
    'Full-Stack Software Developer with over 2 years of experience in designing and implementing web, desktop, and mobile applications using Java, Spring Boot, and React.js. Skilled in RESTful API architecture, MySQL optimization, and Agile delivery methodologies.',
};

export const PROJECTS: Project[] = [
  {
    id: 'tabunok-drrm',
    title: 'Tabunok DRRM System Core',
    role: 'Full-Stack Developer',
    category: 'Public Safety · Full-Stack',
    year: '2026',
    description:
      'Developed a robust backend using Java and Spring Boot for a disaster risk reduction and management platform, enhancing incident reporting capabilities. Secured REST APIs with JWT authentication and optimized deployment using Docker, facilitating real-time incident management.',
    tech: ['Java', 'Spring Boot', 'JWT', 'Docker', 'MySQL'],
    liveUrl: 'https://disaster-information.shop/login',
    githubUrl: 'https://github.com/JM-creater/ddrm-system-core',
  },
  {
    id: 'barangay-eservices',
    title: 'Barangay Cansojong e-Services Platform',
    role: 'Full-Stack Developer',
    category: 'Civic Tech · Full-Stack',
    year: '2026',
    description:
      'Created a digital public-service portal that automated citizen document requests and appointment scheduling. Ensured seamless integration of the React frontend with Spring Boot REST APIs, improving user interaction and service efficiency.',
    tech: ['Spring Boot', 'React.js', 'TypeScript', 'RESTful APIs', 'MySQL'],
    liveUrl: 'https://barangay-eservices.pages.dev/',
    githubUrl: 'https://github.com/JM-creater/Barangay-eServices',
  },
  {
    id: 'amor-fuzzia',
    title: 'Amor Fuzzia – Custom Bouquet Ordering Platform',
    role: 'Full-Stack Developer',
    category: 'E-Commerce · Web App',
    year: '2026',
    description:
      'Implemented a custom e-commerce platform using React.js and TypeScript, facilitating handcrafted bouquet orders. Configured CI/CD pipelines with GitHub Actions for continuous integration and deployment, accelerating the development cycle.',
    tech: ['React.js', 'TypeScript', 'GitHub Actions', 'CI/CD', 'Firebase Hosting'],
    liveUrl: 'https://amor-fuzzia-011.web.app/',
    githubUrl: 'https://github.com/JM-creater/amor-fuzzia',
  },
];

export const COLLEGE_PROJECTS: Project[] = [
  {
    id: 'knowledge-site-app',
    title: 'LearNest – Knowledge Site App',
    role: 'Full-Stack Developer',
    category: 'EdTech · Full-Stack',
    badge: 'Alliance Jumpstart',
    description:
      'Developed during the Alliance Jumpstart Program with Alliance Software Inc. A digital learning and knowledge-sharing platform designed to provide users with structured access to educational resources, study materials, and collaborative content.',
    tech: ['TypeScript', 'React.js', 'C#', 'ASP.NET Core'],
    githubUrl: 'https://github.com/JM-creater/Knowledge-Site-App',
  },
  {
    id: 'evotery',
    title: 'eVotery – Online Voting System',
    role: 'Full-Stack Developer',
    category: 'Civic Tech · Academic',
    badge: 'College Project',
    description:
      'Built a secure digital voting web application with an ASP.NET Core Web API backend and TypeScript frontend, featuring dedicated voter and administrator portals, candidate and election period management, authentication workflows, and automated vote tallying.',
    tech: ['ASP.NET Core Web API', 'C#', 'TypeScript', 'React.js'],
    githubUrl: 'https://github.com/JM-creater/eVotery',
  },
  {
    id: 'unitee',
    title: 'UniTee – School Uniform & Merchandise Platform',
    role: 'Full-Stack Developer',
    category: 'E-Commerce · Capstone',
    badge: 'Capstone Project',
    description:
      'Engineered a full-stack university uniform and merchandise e-commerce storefront for the BSIT Capstone Project at University of Cebu, built with a TypeScript frontend and a C# / .NET backend across dedicated repositories.',
    tech: ['TypeScript', 'React.js', 'C#', '.NET Web API'],
    githubLinks: [
      { label: 'Frontend Repo', url: 'https://github.com/JM-creater/unitee' },
      { label: 'Backend Repo', url: 'https://github.com/JM-creater/UNITEE_BACKEND' },
    ],
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
        current: true,
        summary:
          'Promoted from Technical Specialist I to Technical Specialist II and then to Associate Technical Specialist I for coordinated team execution, consistent full-stack feature delivery, and module ownership.',
        highlights: [
          {
            text: 'Developed and optimized full-stack ERP features and RESTful APIs with a focus on efficient SQL and MySQL query execution for enhanced reporting performance.',
          },
          {
            text: 'Implemented Request for Comments (RFCs) and aligned technical specifications with the development team.',
          },
          {
            text: 'Identified and resolved software bugs and production issues, leading to improved application stability and operational workflows.',
          },
          {
            text: 'Communicated directly with clients alongside cross-functional team members to investigate and resolve urgent production issues.',
          },
          {
            text: 'Coordinated closely with team members and the Project Manager to align feature deliverables, timelines, and project requirements.',
          },
          {
            text: 'Facilitated peer code reviews, conducted quality assurance (QA) and testing using JUnit, Jest, and AI-assisted automation testing, and managed code releases within Agile/Scrum environments.',
          },
          {
            text: 'Leveraged agentic workflows to accelerate development tasks and improve delivery speed.',
          },
        ],
      },
      {
        title: 'Software Developer – Technical Specialist I',
        period: 'July 2024 – February 2026',
        summary:
          'Partnered with cross-functional teams to enhance application features and ensure high-quality deliverables.',
        highlights: [
          {
            text: 'Built and maintained Point of Sale (POS) features across desktop and web platforms using Electron.js, React.js, Ant Design, TypeScript, Java, and Spring Boot.',
          },
          {
            text: 'Engineered a cross-platform mobile POS application alongside the development team using React Native.',
          },
          {
            text: 'Designed and maintained RESTful APIs, integrating them with MySQL databases to streamline data access and retrieval.',
          },
          {
            text: 'Executed manual testing and quality assurance (QA) alongside the QA team, contributing to a reduced bug rate in production.',
          },
          {
            text: 'Engaged in code reviews to uphold standards using Agile methodologies, improving team productivity.',
          },
        ],
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Strongly-typed application logic and relational querying',
    skills: ['Java', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    subtitle: 'Backend architecture, security, and cross-platform UI',
    skills: [
      'Spring Boot',
      'Spring Data JPA / Hibernate',
      'Spring Security',
      'JWT',
      'React.js',
      'Ant Design',
      'React Native',
      'Electron.js',
    ],
  },
  {
    id: 'databases-devops',
    title: 'Databases & DevOps',
    subtitle: 'Relational databases, containerization, CI/CD pipelines, and APIs',
    skills: ['MySQL', 'Docker', 'CI/CD', 'GitHub Actions', 'Git', 'RESTful APIs'],
  },
  {
    id: 'tools-practices',
    title: 'Tools & Practices',
    subtitle: 'Agile delivery, agentic AI workflows, and quality assurance',
    skills: [
      'Agile / Scrum',
      'Agentic Workflows',
      'AI-Assisted Development',
      'GitHub Copilot',
      'Gemini Skills',
      'JUnit',
      'Jest',
      'AI Automation Testing',
      'Manual Testing',
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

export const CERTIFICATIONS: CredentialItem[] = [
  {
    title: 'JavaScript Essentials 2',
    issuer: 'Cisco',
    date: 'June 2024',
  },
  {
    title: 'Accenture Technology Academy',
    issuer: 'Accenture in the Philippines',
    date: 'May 2024',
  },
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco',
    date: 'May 2024',
  },
  {
    title: 'Hackathon Competition',
    issuer: 'University of Cebu',
    date: 'April 2024',
  },
  {
    title: 'Frontend Fundamentals Bootcamp',
    issuer: 'OneCodeCamp',
    date: 'April 2024',
  },
  {
    title: 'Alliance Jumpstart Program',
    issuer: 'Alliance Software Inc.',
    date: 'December 2023',
  },
];

export const AWARDS: CredentialItem[] = [
  {
    title: "Dean's Lister",
    issuer: 'University of Cebu',
    date: '2021 – 2023',
  },
  {
    title: 'Service Award – Public Information Officer (PIO)',
    issuer: 'Philippine Society of Information Technology Students (PSITS)',
    date: '2021 – 2023',
  },
];
