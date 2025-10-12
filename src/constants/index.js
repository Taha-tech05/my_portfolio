import {
  mobile,
  backend,
  ml,
  cdev,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
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
  news2
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences1 = [
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
const experiences2 = [
  // {
  //   title: "Web Intern",
  //   company_name: "AI Genmat",
  //   icon: aigenmat,
  //   iconBg: "white",
  //   date: "June 2025 - August 2025",
  //   points: [
  //     "Assisted in developing and testing machine learning models for real-world applications.",
  //     "Conducted data preprocessing and cleaning to prepare datasets for training and evaluation.",
  //     "Implemented and optimized algorithms using Python, NumPy, pandas, and scikit-learn.",
  //     "Gained hands-on experience in AI workflows, and Web-Scraping(Automation)",
  //   ],
  // },
];
const experiences3 = [
  // {
  //   // title: "System Intern",
  //   // company_name: "AI Genmat",
  //   // icon: aigenmat,
  //   // iconBg: "white",
  //   // date: "June 2025 - August 2025",
  //   // points: [
  //   //   "Assisted in developing and testing machine learning models for real-world applications.",
  //   //   "Conducted data preprocessing and cleaning to prepare datasets for training and evaluation.",
  //   //   "Implemented and optimized algorithms using Python, NumPy, pandas, and scikit-learn.",
  //   //   "Gained hands-on experience in AI workflows, and Web-Scraping(Automation)",
  //   // ],
  // },
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
    description:
      "The House Pricing Model predicts property prices based on key features such as location, size, number of rooms, and amenities. Using regression techniques, the model analyzes historical housing data to identify patterns and relationships between property attributes and their market values. Data preprocessing steps such as handling missing values, encoding categorical variables, and feature scaling were applied to improve accuracy. The model was trained and evaluated using metrics like RMSE and R², ensuring reliable performance. This project demonstrates practical application of machine learning for real estate price estimation and decision-making support",
    tags: [
      { name: "Data Preprocessing", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "Linear Regression", color: "pink-text-gradient" },
    ],
    images: [ml1img1, ml1img2, ml1img3],
    source_code_link: "https://github.com/Taha-tech05/House-Prices-ML-model",
  },
];

const projects2 = [
  {
    name: "AirControlX",
    description:
      "AirControlX is a C/C++ simulation of an Automated Air Traffic Control System (ATCS). It integrates multiple operating system concepts such as scheduling, concurrency, and resource management to handle flight arrivals, departures, and routing. The system detects airspace violations, maintains detailed analytics, and provides a graphical simulation for visualization of aircraft movements. Designed as a modular project, it emphasizes real-time decision-making, system reliability, and safety in air traffic management.",
    tags: [
      { name: "c++", color: "blue-text-gradient" },
      { name: "os-concepts", color: "green-text-gradient" },
      { name: "simulation", color: "pink-text-gradient" },
    ],
    images: [air1,air2], // wrapped in array
    source_code_link: "https://github.com/Taha-tech05/Air-Traffic-Control-System", // replace with actual repo
  },
  {
    name: "TravelEase",
    description:
      "TravelEase is a desktop-based travel management system built with C# and SQL Server. It provides a centralized platform connecting tour operators, travelers, admins, and service providers. The system supports modules such as trip creation and management, booking and payment handling, refunds, and user reviews. Its relational database ensures strong referential integrity across entities like Trips, Travellers, Operators, Services, Payments, and Reviews. With role-based access control and a structured workflow, TravelEase streamlines travel planning and management with efficiency and security.",
    tags: [
      { name: "c#", color: "blue-text-gradient" },
      { name: "sql-server", color: "green-text-gradient" },
      { name: "desktop-app", color: "pink-text-gradient" },
    ],
    images: [travel1,travel2,travel3,travel4], // wrapped in array
    source_code_link: "https://github.com/Taha-tech05/TravelEase", // replace with actual repo
  },
  {
    name: "Drone Simulator",
    description:
      "The Drone Simulator is a 3D simulation project built to replicate real-world drone navigation and control. It models realistic drone physics, directional movement, while supporting collision detection and obstacle avoidance. The system integrates the A* pathfinding algorithm to optimize drone navigation between waypoints, ensuring efficient and safe route planning. This makes it not only an interactive simulation but also a platform for experimenting with AI-driven flight algorithms, swarm coordination, and advanced aerial navigation scenarios.",
    tags: [
      { name: "c++", color: "blue-text-gradient" },
      { name: "simulation", color: "green-text-gradient" },
      { name: "a*-algorithm", color: "pink-text-gradient" },
    ],
    images: [drone1,drone2], // wrapped in array
    source_code_link: "https://github.com/Taha-tech05/Drone-Simulator", // replace with actual repo
  },

];

const projects3 = [
  {
    name: "BookNotes",
    description:
      "A full-stack note-taking web application developed using Node.js and PostgreSQL. The system provides secure user authentication, note creation, editing, deletion, and persistent storage in a relational database. It is designed for efficiency, scalability, and reliability, demonstrating core concepts of backend APIs, database schema design, and CRUD functionality. With a focus on data integrity and clean architecture, BooNotes showcases both backend engineering and database management skills.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "fullstack", color: "pink-text-gradient" },
    ],
    images: [book1,book2,book3], // wrapped in array
    source_code_link: "https://github.com/Taha-tech05/BookNotes", // replace with actual repo
  },
  {
    name: "ShadesCloth",
    description:
    "An e-commerce clothing website built with HTML, CSS, and Bootstrap. The platform features a clean and modern UI with responsive layouts, ensuring smooth browsing across all devices. Users can explore different categories of clothing, view product galleries, and interact with a professional storefront design. The project highlights front-end web development skills, styling consistency, and user-focused interface design, making it a great demonstration of responsive design practices.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
    ],
    images: [shades1,shades2,shades3], // wrapped in array
    source_code_link: "https://github.com/Taha-tech05/shadescloths", // replace with actual repo
  },
  {
    name: "Newsletter App",
    description:
      "A newsletter subscription system built using Node.js and Express.js with integration to the Mailchimp API. Users can easily subscribe by entering their email, which is then securely stored in the mailing list database. The app focuses on seamless API communication, error handling, and user-friendly interactions. It demonstrates backend-to-third-party service integration, server-side form handling, and secure data management for scalable communication solutions.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "mailchimp-api", color: "pink-text-gradient" },
    ],
    images: [news1,news2], // wrapped in array
    source_code_link: "https://github.com/Taha-tech05/Newsletter", // replace with actual repo
  },
];
export { services, technologies, experiences1, experiences2, experiences3, testimonials, projects1, projects2, projects3 };