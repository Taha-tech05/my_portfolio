import {
  mobile,
  backend,
  ml,
  cdev,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  aigenmat,
  carrent,
  jobit,
  tripguide,
  threejs,
  psql,
  c,
  python,
  ml1img1,
  ml1img2,
  ml1img3,
  travel1,
  travel2,
  travel3,
  travel4,
  air1,
  air2,
  drone1,
  drone2,
  shades1,
  shades2,
  shades3,
  book1,
  book2,
  book3,
  news1,
  news2,
  t1,
  t2,
  note1,
  note2,
  note3,
  rent1,
  rent2,
  rent3,
  rent4,
  rent5,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: ml,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "C++ Developer",
    icon: cdev,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "psql",
    icon: psql,
  },
];

const experiences = [
  {
    title: "AI Intern",
    company_name: "AI Genmat",
    icon: aigenmat,
    iconBg: "white",
    date: "June 2025 - August 2025",
    points: [
      "Assisted in developing and testing machine learning models for real-world applications.",
      "Conducted data preprocessing and cleaning to prepare datasets for training and evaluation.",
      "Implemented and optimized algorithms using Python, NumPy, pandas, and scikit-learn.",
      "Gained hands-on experience in AI workflows, and Web-Scraping(Automation)",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects1 = [
  {
    name: "House Pricing Model",
    description: {
      problem: "Property prices are hard to estimate manually from raw housing data with many interacting features.",
      approach: "Built a regression pipeline in Python — cleaned and encoded the dataset, scaled features, and trained a linear regression model.",
      result: "Produced reliable price predictions evaluated with RMSE and R², demonstrating ML applied to real-estate valuation.",
    },
    tags: [
      { name: "Data Preprocessing", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "Linear Regression", color: "pink-text-gradient" },
    ],
    images: [ml1img1, ml1img2, ml1img3],
    source_code_link: "https://github.com/Taha-tech05/House-Prices-ML-model",
    deployed_link: "",
  },
];

const projects2 = [
  {
    name: "AirControlX",
    description: {
      problem: "Air traffic systems must coordinate concurrent flight arrivals, departures, and routing while avoiding airspace violations.",
      approach: "Built a C/C++ simulation applying OS concepts — scheduling, concurrency, and resource management — with a graphical view of aircraft movement.",
      result: "A modular ATCS simulator that detects airspace violations in real time and logs detailed flight analytics.",
    },
    tags: [
      { name: "c++", color: "blue-text-gradient" },
      { name: "os-concepts", color: "green-text-gradient" },
      { name: "simulation", color: "pink-text-gradient" },
    ],
    images: [air1, air2], // wrapped in array
    source_code_link: "https://github.com/Taha-tech05/Air-Traffic-Control-System", // replace with actual repo
    deployed_link: "",
  },
  {
    name: "TravelEase",
    description: {
      problem: "Tour operators, travelers, and admins needed one platform to manage trips, bookings, and payments without fragmented tools.",
      approach: "Built a C# desktop app backed by SQL Server with role-based access and a relational schema covering trips, bookings, payments, and reviews.",
      result: "A centralized travel management system with referential integrity across all entities and a structured booking-to-refund workflow.",
    },
    tags: [
      { name: "c#", color: "blue-text-gradient" },
      { name: "sql-server", color: "green-text-gradient" },
      { name: "desktop-app", color: "pink-text-gradient" },
    ],
    images: [travel1, travel2, travel3, travel4], // wrapped in array
    source_code_link: "https://github.com/Taha-tech05/TravelEase", // replace with actual repo
    deployed_link: "",
  },
  {
    name: "Drone Simulator",
    description: {
      problem: "Testing drone navigation logic safely requires realistic physics and obstacle handling without a physical aircraft.",
      approach: "Built a 3D simulation modeling drone physics and collision detection, integrating A* pathfinding for waypoint navigation.",
      result: "An interactive platform for experimenting with AI-driven flight paths, obstacle avoidance, and swarm coordination scenarios.",
    },
    tags: [
      { name: "c++", color: "blue-text-gradient" },
      { name: "simulation", color: "green-text-gradient" },
      { name: "a*-algorithm", color: "pink-text-gradient" },
    ],
    images: [drone1, drone2], // wrapped in array
    source_code_link: "https://github.com/Taha-tech05/Drone-Simulator", // replace with actual repo
    deployed_link: "",
  },

  {
    name: "Rentify",
    description: {
      problem: "Peer-to-peer rental marketplaces need trust and clear role separation between renters, owners, and admins.",
      approach: "Designed the system end-to-end with Use Case, Class, and SSD diagrams before building a JavaFX + SQL Server multi-tier app.",
      result: "A rental marketplace with dedicated renter, owner, and admin flows backed by a consistent, well-modeled data layer.",
    },
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "javafx", color: "green-text-gradient" },
      { name: "sql-server", color: "pink-text-gradient" },
      { name: "desktop-app", color: "orange-text-gradient" },
    ],
    images: [rent1, rent2, rent3,rent4,rent5], // Replace with your actual project screenshots
    source_code_link: "https://github.com/Taha-tech05/Rentify",
    deployed_link: "",
  },

];

const projects3 = [
  {
    name: "Financial Tracking System",
    description: {
      problem: "A nonprofit team needed real-time visibility into donations across thousands of transactions and dozens of projects.",
      approach: "Built an SSR dashboard with Next.js, Express, and PostgreSQL, with JWT auth, protected routes, and permission-based UI rendering.",
      result: "A production dashboard tracking 1,000+ transactions across 50+ projects, deployed on Vercel with staging/prod configs.",
    },
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "expressjs", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
      { name: "jwt-auth", color: "orange-text-gradient" },
    ],
    images: [],
    source_code_link: "https://github.com/Taha-tech05/Financial-Tracker",
    deployed_link: "https://financial-tracker-donation-manage.vercel.app/login",
  },
  {
    name: "Property Dealer CRM System",
    description: {
      problem: "Solo project needed to manage 500+ real estate leads with a fast, type-safe, reusable component system.",
      approach: "Built a full-stack CRM with Next.js, MongoDB, and TypeScript strict mode, with 20+ reusable components for CRUD, dashboards, and admin panels.",
      result: "A mobile-first Tailwind UI with lazy loading and bundle optimization that hit a 95+ Lighthouse score.",
    },
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "tailwindcss", color: "orange-text-gradient" },
    ],
    images: [],
    source_code_link: "https://github.com/Taha-tech05/Property-Dealer-CRM-System",
    deployed_link: "https://propertycrm.up.railway.app",
  },
  {
    name: "BookNotes",
    description: {
      problem: "Needed a reliable, persistent place to create and manage notes with proper authentication.",
      approach: "Built a Node.js + PostgreSQL backend with secure auth and full CRUD for note creation, editing, and deletion.",
      result: "A clean, schema-driven note-taking app demonstrating backend API and relational database design.",
    },
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "fullstack", color: "pink-text-gradient" },
    ],
    images: [book1, book2, book3], // wrapped in array
    source_code_link: "https://github.com/Taha-tech05/BookNotes", // replace with actual repo
    deployed_link: "",
  },
  {
    name: "Family Travel Tracker",
    description: {
      problem: "Families wanted a shared way to visualize which countries each member had visited.",
      approach: "Built a React + Node.js app with an interactive SVG world map, multi-user profiles with custom colors, and a PostgreSQL backend.",
      result: "A real-time dashboard calculating each member's world-coverage percentage from persistent relational data.",
    },
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
      { name: "svg-mapping", color: "orange-text-gradient" },
    ],
    images: [t1, t2], // Update these to your actual imported image variables
    source_code_link: "https://github.com/Taha-tech05/Family-Travel-Tracker",
    deployed_link: "",
  },

  {
    name: "NoteVault",
    description: {
      problem: "Standard note apps lack quick visual organization for mixed text and checklist content.",
      approach: "Built a React app supporting both text and checklist notes, with custom color-coding and a pinning system for priority items.",
      result: "An interactive personal organization tool with fast, intuitive note categorization.",
    },
    tags: [
      { name: "react", color: "blue-text-gradient" }
    ],
    images: [note1, note2, note3], // Update with your actual imported image variables
    source_code_link: "https://github.com/Taha-tech05/notevault",
    deployed_link: "",
  },

  {
    name: "ShadesCloth",
    description: {
      problem: "A clothing brand needed a responsive storefront to showcase products across devices.",
      approach: "Built an HTML/CSS/Bootstrap e-commerce front end with category browsing and product galleries.",
      result: "A clean, responsive storefront demonstrating consistent styling and mobile-first layout practices.",
    },
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
    ],
    images: [shades1, shades2, shades3], // wrapped in array
    source_code_link: "https://github.com/Taha-tech05/shadescloths", // replace with actual repo
    deployed_link: "",
  },
  {
    name: "Newsletter App",
    description: {
      problem: "Needed a simple, reliable way to collect and manage newsletter subscribers.",
      approach: "Built a Node.js/Express backend integrated with the Mailchimp API for subscription handling and error handling.",
      result: "A working subscription pipeline demonstrating secure third-party API integration and server-side form handling.",
    },
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "mailchimp-api", color: "pink-text-gradient" },
    ],
    images: [news1, news2], // wrapped in array
    source_code_link: "https://github.com/Taha-tech05/Newsletter", // replace with actual repo
    deployed_link: "",
  },
];
export { services, technologies, experiences, testimonials, projects1, projects2, projects3 };
