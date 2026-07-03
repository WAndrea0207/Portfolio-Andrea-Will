import { ProjectDetail } from '../types/projects';

export const projectsData: ProjectDetail[] = [
  {
    id: 3,
    title: 'Sophie Bluel',
    description: 'Dynamic portfolio with category filters, upload modal, and login flow.',
    image: '/projects/sophie-bluel.webp',
    tags: ['JavaScript', 'API REST', 'HTML', 'CSS'],
    github: 'https://portfolio-sophie-bluel-gamma.vercel.app/',
    size: 'large',
    context:
      'Sophie Bluel is an architect looking to showcase her portfolio online. After a briefing with her representative Charlotte, the project required creating a professional web platform where potential clients could discover her architectural projects and where Charlotte could manage the gallery remotely.',
    objectives: [
      'Develop a project showcase page from provided HTML/CSS starting point, making it responsive and dynamic',
      'Create an admin login page to allow Charlotte to authenticate securely to the platform',
      'Build an upload modal that allows authenticated admins to add new project images and metadata to the portfolio',
      'Implement category filtering to help visitors browse projects by type',
    ],
    technicalStack: {
      frontend: ['HTML', 'CSS', 'JavaScript'],
      backend: ['REST API'],
      tools: ['Vercel', 'Git'],
    },
    skillsDeveloped: [
      'DOM manipulation',
      'API integration',
      'Form validation',
      'Authentication flow',
      'Responsive design',
      'Modal patterns',
    ],
    results:
      'Successfully delivered a fully functional portfolio site featuring a responsive gallery with category filters, a secure admin login system, and an image upload modal. The platform enables Charlotte to manage Sophie\'s portfolio in real-time.',
    improvements: [],
  },

  {
    id: 1,
    title: 'Kasa',
    description: 'Property rental web app built with React and React Router.',
    image: '/projects/kasa.webp',
    tags: ['React', 'SCSS', 'Vite', 'React Router'],
    github: 'https://kasa-tau-nine.vercel.app/',
    size: 'medium',
    context:
      'Kasa is a property rental platform that needed a complete frontend application built with React. The backend team was still being recruited, so the project provided static JSON data to simulate a full functional backend. The challenge was to build a high-quality, component-based React application following strict coding guidelines.',
    objectives: [
      'Build a complete React application from scratch using Vite',
      'Create reusable React components and manage routes with React Router',
      'Implement a responsive design following Figma mockups for all screen sizes',
      'Develop custom components: Gallery carousel with circular navigation and Collapse accordion menus',
      'Consume static JSON data to populate property listings dynamically',
    ],
    technicalStack: {
      frontend: ['React 18', 'React Router', 'SCSS', 'Vite'],
      tools: ['Figma', 'Git', 'Vercel'],
    },
    skillsDeveloped: [
      'React component architecture',
      'Client-side routing',
      'State management with hooks',
      'Custom hook development',
      'Responsive SCSS',
      'Animation design',
      'Carousel patterns',
    ],
    results:
      'Delivered a fully functional Kasa property rental platform with a polished, responsive design. The application features a gallery carousel with smart navigation (loops back to first/last image), collapsible description sections, and all 20 properties from the JSON file properly displayed.',
    improvements: [],
  },

  {
    id: 4,
    title: 'Nina Carducci',
    description: 'SEO and performance optimization for a photographer portfolio site.',
    image: '/projects/nina-carducci.webp',
    tags: ['SEO', 'Performance', 'Lighthouse', 'Schema.org'],
    github: 'https://wandrea0207.github.io/Nina_Carducci/',
    size: 'medium',
    context:
      'Nina Carducci is a talented photographer whose portfolio site was experiencing significant performance and SEO issues. Her existing website was slow to load and not optimized for search engines, which meant potential clients couldn\'t find her easily online. The project required a comprehensive audit and systematic optimization.',
    objectives: [
      'Perform a complete Lighthouse audit to identify performance bottlenecks',
      'Optimize all images: compression, format conversion (WebP), and responsive sizing',
      'Refactor code structure and remove unnecessary dependencies for faster loading',
      'Implement local SEO using Schema.org structured data for photographer services',
      'Add meta tags and Open Graph tags for social media sharing',
      'Improve accessibility according to WCAG standards using WAVE testing',
    ],
    technicalStack: {
      frontend: ['HTML', 'CSS', 'JavaScript'],
      tools: ['Lighthouse', 'WAVE', 'Google Search Console', 'Schema.org'],
    },
    skillsDeveloped: [
      'Performance optimization',
      'Image optimization',
      'SEO implementation',
      'Schema.org markup',
      'Accessibility testing',
      'Web vitals optimization',
      'Technical SEO',
    ],
    results:
      'Successfully optimized Nina\'s portfolio site with dramatic improvements: Lighthouse performance score increased significantly, page load time reduced by 40%, Core Web Vitals improved to "Good", and SEO score reached 90+. Implemented Schema.org markup for local photographer services and added proper meta descriptions.',
    improvements: [],
  },
];
