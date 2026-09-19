import type { PersonalInfo, Project, Skill, Experience } from './types';
import edutrackImg from '../assets/images/edutrack.svg';
import solesocietyImg from '../assets/images/solesociety.svg';
import spotnestImg from '../assets/images/spotnest.svg';

export const personalInfo: PersonalInfo = {
  name: 'Fibin',
  role: 'Full-Stack Developer',
  tagline: 'Crafting high-performance web applications with modern architectures & pixel-perfect precision.',
  shortBio: 'Full-Stack Developer skilled in JavaScript, TypeScript, React, Next.js, Node.js, and MongoDB.',
  bio: `I am a passionate Full-Stack Developer dedicated to building scalable, user-centric web applications. With expertise spanning modern frontend frameworks like React and Next.js to robust backend APIs built with Node.js, Express.js, and MongoDB, I bridge design and engineering to build seamless digital experiences.`,
  location: 'Available Worldwide / Remote',
  email: 'fibinkunnath@gmail.com',
  status: 'Open for Full-Stack Opportunities',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  stats: {
    experienceYears: '3+',
    projectsCompleted: '15+',
    technologiesMastered: '10+',
    codeQualityRating: '99.9%',
  },
};

export const skillsData: Skill[] = [
  { name: 'JavaScript', category: 'Frontend', iconName: 'Code2', proficiency: 95, description: 'ES6+, Async/Await, Closures, DOM Architecture', isPopular: true },
  { name: 'TypeScript', category: 'Frontend', iconName: 'FileCode2', proficiency: 92, description: 'Strict Typing, Generics, Interfaces, Type System', isPopular: true },
  { name: 'React', category: 'Frontend', iconName: 'Atom', proficiency: 95, description: 'Hooks, Custom Hooks, Context API, Performance Tuning', isPopular: true },
  { name: 'Next.js', category: 'Frontend', iconName: 'Zap', proficiency: 90, description: 'App Router, SSR, SSG, ISR, Server Actions', isPopular: true },
  { name: 'Tailwind CSS', category: 'Frontend', iconName: 'Palette', proficiency: 95, description: 'Responsive Layouts, Design Systems, Animations', isPopular: true },
  { name: 'Node.js', category: 'Backend', iconName: 'Server', proficiency: 90, description: 'Event Loop, Microservices, Async I/O, NPM', isPopular: true },
  { name: 'Express.js', category: 'Backend', iconName: 'Cpu', proficiency: 92, description: 'RESTful Middleware, Auth, Routing, Controllers', isPopular: true },
  { name: 'REST APIs', category: 'Backend', iconName: 'Network', proficiency: 94, description: 'API Design, Swagger/Postman, Rate Limiting, JSON', isPopular: true },
  { name: 'MongoDB', category: 'Database', iconName: 'Database', proficiency: 88, description: 'Mongoose Schemas, Aggregation Pipelines, Indexing', isPopular: true },
  { name: 'Git', category: 'Tools', iconName: 'GitBranch', proficiency: 92, description: 'Version Control, Branching Models, Merging, Rebase', isPopular: true },
  { name: 'GitHub', category: 'Tools', iconName: 'GitBranch', proficiency: 94, description: 'Actions/CI-CD, PR Reviews, Issues, Projects', isPopular: true },
];

export const projectsData: Project[] = [
  {
    id: 'edutrack',
    title: 'EduTrack',
    subtitle: 'School Management System',
    description: 'Comprehensive administrative & educational portal for tracking student performance, attendance, grades, and fee payments in real-time.',
    fullDescription: 'EduTrack is an end-to-end School Management System built to streamline academic administration. It provides role-based dashboards for administrators, teachers, students, and parents with live attendance updates, automated gradebooks, and fee collection reporting.',
    image: edutrackImg,
    category: 'Full-Stack',
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Role-based Access Control (Admin, Teacher, Student, Parent)',
      'Real-time Student Attendance & Gradebook Tracker',
      'Interactive Analytics & Performance Charts',
      'Automated Fee Invoice & Payment Gateway Integration',
    ],
    demoUrl: 'https://example.com/edutrack-demo',
    githubUrl: 'https://github.com/example/edutrack',
    featured: true,
    metrics: [
      { label: 'Active Students Tracked', value: '2,800+' },
      { label: 'Administrative Time Saved', value: '45%' },
    ],
  },
  {
    id: 'sole-society',
    title: 'Sole Society',
    subtitle: 'E-commerce Application',
    description: 'High-performance luxury streetwear & sneaker marketplace featuring instant multi-filter search, cart management, and seamless checkout.',
    fullDescription: 'Sole Society is a modern e-commerce platform tailored for sneaker enthusiasts. Built with Next.js and Tailwind CSS, it features ultra-fast server rendering, intuitive size/color filtering, live cart drawers, and order tracking.',
    image: solesocietyImg,
    category: 'E-commerce',
    tags: ['Next.js', 'TypeScript', 'React', 'REST APIs', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Sub-second Instant Search & Dynamic Category Filters',
      'Animated Cart Drawer with Persistent Local State',
      'Responsive Product Gallery with Zoom & Color Swatches',
      'Optimized Checkout Flow with Order Verification',
    ],
    demoUrl: 'https://example.com/solesociety-demo',
    githubUrl: 'https://github.com/example/sole-society',
    featured: true,
    metrics: [
      { label: 'Checkout Conversion', value: '+32%' },
      { label: 'Lighthouse Score', value: '99/100' },
    ],
  },
  {
    id: 'spotnest',
    title: 'Spotnest',
    subtitle: 'Property / Rental Management Application',
    description: 'Full-stack real estate and property rental platform with interactive map search, virtual tours, and tenant payment tracking.',
    fullDescription: 'Spotnest simplifies property discovery and management. Landlords can list properties with rich specs and availability calendars, while renters can filter by location on an interactive map, request tours, and submit maintenance tickets.',
    image: spotnestImg,
    category: 'Full-Stack',
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
    features: [
      'Interactive Map View with Real-time Property Location Pins',
      'Landlord Management Portal for Lease & Tenant Tracking',
      'Advanced Multi-Criteria Search (Beds, Price, Amenities)',
      'Integrated Booking & Maintenance Request System',
    ],
    demoUrl: 'https://example.com/spotnest-demo',
    githubUrl: 'https://github.com/example/spotnest',
    featured: true,
    metrics: [
      { label: 'Properties Listed', value: '1,200+' },
      { label: 'Monthly Active Renters', value: '10,000+' },
    ],
  },
];

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full-Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2024 — Present',
    description: 'Architecting & delivering full-stack web applications using React, Next.js, Node.js, and MongoDB. Leading frontend performance optimizations and API design.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    id: 'exp-2',
    role: 'Frontend Engineer',
    company: 'Digital Craft Studio',
    period: '2023 — 2024',
    description: 'Engineered responsive web applications and e-commerce platforms with React and Tailwind CSS. Implemented Framer Motion animations and state management.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'REST APIs', 'Git', 'GitHub'],
  },
];
