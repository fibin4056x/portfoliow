export interface Project {
  id: string;
  sheetNumber: string;
  title: string;
  subtitle: string;
  featured: boolean;
  status: 'APPROVED' | 'IN PRODUCTION' | 'LIVE' | 'COMPLETED';
  stack: string[];
  team?: string;
  duration?: string;
  role?: string;
  summary: string;
  liveUrl: string;
  githubUrl: string;
  coreJourney?: {
    step: number;
    title: string;
    description: string;
  }[];
  userRoles?: {
    role: 'Admin' | 'Owner' | 'Customer' | 'Tenant';
    title: string;
    description: string;
    features: string[];
  }[];
  keyFeatures: {
    id: string;
    title: string;
    description: string;
    calloutPoint?: { x: number; y: number }; // percentage on drawing schema
  }[];
  architecture?: {
    frontend: string;
    api: string;
    orm?: string;
    database: string;
    auth: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  code: string;
  skills: {
    name: string;
    relatedProjects: string[]; // project ids
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  field: string;
  period: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  pitch: string;
  aboutBrief: string;
  status: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
  };
  clientSpec: {
    contractor: string;
    primaryRole: string;
    location: string;
    availability: string;
    currentFocus: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "FIBIN",
  title: "MERN Stack Developer",
  location: "Calicut, India",
  email: "fibinkunnath@gmail.com",
  phone: "+91 7907238198",
  pitch: "I build full-stack web applications, from the database to the deployed product.",
  aboutBrief: "Full Stack Developer with hands-on experience building and deploying web applications using React.js, Node.js, Express.js and MongoDB. Developed two major applications during a Full Stack Developer internship: an e-commerce platform and a student management system. Experienced in REST API development, authentication and role-based authorization, CRUD operations, database integration, email services, data import/export, debugging, testing, and production deployment. Now expanding into Next.js, TypeScript, PostgreSQL and Prisma.",
  status: "OPEN TO WORK",
  resumeUrl: "/resume.pdf", // PLACEHOLDER: Replace with your actual PDF in /public/resume.pdf
  socials: {
    github: "https://github.com/fibin4056x", // PLACEHOLDER: Replace with your exact GitHub profile URL
    linkedin: "https://linkedin.com/in/fibin-kunnath", // PLACEHOLDER: Replace with your exact LinkedIn profile URL
  },
  clientSpec: {
    contractor: "FIBIN",
    primaryRole: "Full Stack Developer (MERN / Next.js)",
    location: "Calicut, Kerala, India",
    availability: "Available for Full-time Roles & Projects",
    currentFocus: "Next.js 15, TypeScript, PostgreSQL, Prisma ORM & Scalable APIs"
  }
};

export const projects: Project[] = [
  {
    id: "rental-system",
    sheetNumber: "DWG-03-A",
    title: "Rental Property Marketplace & Management System",
    subtitle: "End-to-End Real Estate & Lease Operations Platform",
    featured: true,
    status: "IN PRODUCTION",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js (TypeScript)",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "bcrypt"
    ],
    team: "4 Developers",
    duration: "1 Month (MVP)",
    role: "[Full-Stack Developer — REST APIs, Prisma Schemas, Lease Logic & Next.js UI]", // PLACEHOLDER: Replace with your exact role description if different
    summary: "A unified web platform connecting property owners with prospective tenants while providing owners comprehensive tools to manage active leases, rent collections, and maintenance requests in real-time.",
    liveUrl: "https://rental-property-demo.vercel.app", // PLACEHOLDER: Replace with your live demo URL
    githubUrl: "https://github.com/fibin4056x/rental-property-system", // PLACEHOLDER: Replace with your repo URL
    coreJourney: [
      { step: 1, title: "List", description: "Owners list properties with detailed specifications, bedrooms, amenities, and rent terms." },
      { step: 2, title: "Discover", description: "Customers browse verified properties with real-time status indicators." },
      { step: 3, title: "Search", description: "Multi-parameter filter matrix for rent, location, room count, and amenities." },
      { step: 4, title: "Request", description: "Prospects submit formal rental applications with proposed move-in dates." },
      { step: 5, title: "Approve", description: "Owners review candidate profiles and approve applications into binding requests." },
      { step: 6, title: "Rent", description: "Accepted requests automatically initiate formal lease creation with deposit security." },
      { step: 7, title: "Manage", description: "Ongoing lease tracking, automated rent collection logs, and ticketed maintenance." }
    ],
    userRoles: [
      {
        role: "Admin",
        title: "Platform Administrator",
        description: "Full system oversight, platform metrics, user management, and global listing moderation.",
        features: [
          "Global system analytics & revenue statistics",
          "User role management & moderation",
          "Platform-wide audit logs & dispute resolution",
          "Property listing verification & flag removal"
        ]
      },
      {
        role: "Owner",
        title: "Property Owner / Landlord",
        description: "Complete control over property listings, applicant evaluation, active leases, and maintenance ticketing.",
        features: [
          "Property CRUD with multi-image gallery & amenity tags",
          "Rental request evaluation (Accept / Reject workflow)",
          "Lease agreement generation & status tracking",
          "Monthly rent tracking dashboard (Pending / Paid / Overdue)",
          "Maintenance ticket assignment to workers & verification"
        ]
      },
      {
        role: "Customer",
        title: "Prospective Buyer / Applicant",
        description: "Public discovery tier to search listings, apply filters, and request rental agreements.",
        features: [
          "Advanced multi-criteria search & paginated listings",
          "Detailed property views (Rent, Deposit, Amenities, Status)",
          "In-app rental request submission with status tracking",
          "Real-time notifications on application updates"
        ]
      },
      {
        role: "Tenant",
        title: "Active Resident / Leaseholder",
        description: "Transitioned automatically when an Owner accepts a Customer's application.",
        features: [
          "Active lease agreement dashboard & renewal terms",
          "Monthly rent breakdown, payment history & receipt refs",
          "Maintenance request submission (Plumbing, Electrical, AC, Leakage)",
          "In-app lease & maintenance status alerts"
        ]
      }
    ],
    keyFeatures: [
      {
        id: "listings",
        title: "Dynamic Property Inventory & Availability",
        description: "Comprehensive listings categorized by property type (House, Apartment, Villa, PG, Office, Shop) with live status tags: Available, Pending, Occupied, Unavailable.",
        calloutPoint: { x: 20, y: 30 }
      },
      {
        id: "search-filter",
        title: "Multi-Criteria Search Engine",
        description: "High-performance paginated queries filtering by location, min/max price bounds, room configuration, specific amenities, and immediate availability.",
        calloutPoint: { x: 45, y: 25 }
      },
      {
        id: "request-workflow",
        title: "Separated Rental Application Pipeline",
        description: "Decoupled application logic (Pending → Accepted / Rejected) keeping initial inquiry inquiries cleanly separated from active legal lease contracts.",
        calloutPoint: { x: 75, y: 35 }
      },
      {
        id: "lease-mgmt",
        title: "End-to-End Lease Management",
        description: "Automated lease lifecycle (Approved → Active → Completed / Terminated) storing binding rent terms, security deposits, start/end timelines, and due dates.",
        calloutPoint: { x: 30, y: 60 }
      },
      {
        id: "rent-tracking",
        title: "Financial Ledger & Payment Tracking",
        description: "Granular monthly ledger classifying payments (Pending / Paid / Overdue), compiling audit-ready transaction references and payment histories.",
        calloutPoint: { x: 60, y: 65 }
      },
      {
        id: "maintenance",
        title: "6-Stage Maintenance Resolution Workflow",
        description: "Structured ticket lifecycle: Submit → Review → Assign Worker → Resolve → Verify → Close across Plumbing, Electrical, Leakage, AC, and Appliance categories.",
        calloutPoint: { x: 80, y: 70 }
      },
      {
        id: "notifications",
        title: "Real-Time Notification Dispatch",
        description: "Instant in-app alerts for application status changes, upcoming/overdue rent reminders, maintenance ticket progress, and lease expirations.",
        calloutPoint: { x: 25, y: 85 }
      },
      {
        id: "dashboards",
        title: "Role-Based Intelligence Dashboards",
        description: "Tailored executive charts analyzing monthly rental income, occupancy rates, pending rent balances, and maintenance velocity.",
        calloutPoint: { x: 70, y: 88 }
      }
    ],
    architecture: {
      frontend: "Next.js 15 (App Router) + TypeScript + Tailwind CSS",
      api: "Express.js REST Server (TypeScript) + JWT Middleware",
      orm: "Prisma ORM with Type-safe Database Migrations",
      database: "PostgreSQL Database Engine",
      auth: "Stateless JWT Auth + Role-Based Access Control (RBAC) + bcrypt"
    }
  },
  {
    id: "sole-society",
    sheetNumber: "DWG-03-B",
    title: "Sole Society — E-Commerce Platform",
    subtitle: "Full-Stack Retail Application with Role-Based Access Control",
    featured: false,
    status: "LIVE",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    summary: "A complete full-stack e-commerce solution featuring full product management, catalog indexing, wishlist functionality, secure shopping cart workflows, and authenticated checkout pipelines.",
    liveUrl: "https://sole-society-demo.vercel.app", // PLACEHOLDER: Replace with your live demo URL
    githubUrl: "https://github.com/fibin4056x/sole-society", // PLACEHOLDER: Replace with your repo URL
    keyFeatures: [
      {
        id: "product-crud",
        title: "Catalog & Product Management",
        description: "Complete product CRUD operations, dynamic category taxonomies, stock indicators, and instant search.",
        calloutPoint: { x: 30, y: 40 }
      },
      {
        id: "commerce-flow",
        title: "Shopping Cart & Orders",
        description: "Stateful persistent cart, wishlist management, order creation, and customer history tracking.",
        calloutPoint: { x: 70, y: 40 }
      },
      {
        id: "auth-security",
        title: "JWT Authentication & Hashing",
        description: "Secure user registration, bcrypt password hashing, JWT session maintenance, and role-based admin controls.",
        calloutPoint: { x: 50, y: 75 }
      }
    ],
    architecture: {
      frontend: "React.js SPA + Tailwind CSS (Deployed on Vercel)",
      api: "Express.js REST API + Node.js (Deployed on Render)",
      database: "MongoDB Atlas Cloud Document Store",
      auth: "JWT Tokens + bcrypt Password Encryption"
    }
  },
  {
    id: "edutrack",
    sheetNumber: "DWG-03-C",
    title: "EduTrack — Student Management System",
    subtitle: "Academic Operations, Attendance & Automated Reporting Platform",
    featured: false,
    status: "LIVE",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Brevo"],
    summary: "An institutional administration platform enabling schools to manage students, faculty, classes, and division assignments alongside automated attendance tracking, Excel imports, and PDF report generation.",
    liveUrl: "https://edutrack-demo.vercel.app", // PLACEHOLDER: Replace with your live demo URL
    githubUrl: "https://github.com/fibin4056x/edutrack", // PLACEHOLDER: Replace with your repo URL
    keyFeatures: [
      {
        id: "academic-structure",
        title: "Academic Hierarchy Management",
        description: "Structured organizational data model for students, faculty members, class grades, and section divisions.",
        calloutPoint: { x: 25, y: 35 }
      },
      {
        id: "email-brevo",
        title: "Brevo Email Verification System",
        description: "Migrated from Nodemailer to Brevo for high-deliverability email verification, password resets, and announcements.",
        calloutPoint: { x: 75, y: 35 }
      },
      {
        id: "data-io",
        title: "Excel Import/Export & PDF Exports",
        description: "Bulk student records import via Excel sheets, automated gradebook exports, and printable PDF transcript generation.",
        calloutPoint: { x: 50, y: 70 }
      }
    ],
    architecture: {
      frontend: "React.js Single Page Application (Deployed on Vercel)",
      api: "Express.js REST API + Middleware (Deployed on Render)",
      database: "MongoDB Document Database",
      auth: "JWT Auth + Brevo Transactional Email Engine"
    }
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    id: "languages",
    category: "Languages",
    code: "MAT-01",
    skills: [
      { name: "JavaScript (ES6+)", relatedProjects: ["rental-system", "sole-society", "edutrack"] },
      { name: "TypeScript", relatedProjects: ["rental-system"] },
      { name: "HTML5", relatedProjects: ["rental-system", "sole-society", "edutrack"] },
      { name: "CSS3", relatedProjects: ["rental-system", "sole-society", "edutrack"] }
    ]
  },
  {
    id: "frontend",
    category: "Frontend",
    code: "MAT-02",
    skills: [
      { name: "React.js", relatedProjects: ["rental-system", "sole-society", "edutrack"] },
      { name: "Next.js (App Router)", relatedProjects: ["rental-system"] },
      { name: "Tailwind CSS", relatedProjects: ["rental-system", "sole-society"] }
    ]
  },
  {
    id: "backend",
    category: "Backend",
    code: "MAT-03",
    skills: [
      { name: "Node.js", relatedProjects: ["rental-system", "sole-society", "edutrack"] },
      { name: "Express.js", relatedProjects: ["rental-system", "sole-society", "edutrack"] },
      { name: "REST APIs", relatedProjects: ["rental-system", "sole-society", "edutrack"] },
      { name: "CRUD Operations", relatedProjects: ["rental-system", "sole-society", "edutrack"] },
      { name: "Middleware & Routing", relatedProjects: ["rental-system", "sole-society", "edutrack"] }
    ]
  },
  {
    id: "databases",
    category: "Databases & ORM",
    code: "MAT-04",
    skills: [
      { name: "PostgreSQL", relatedProjects: ["rental-system"] },
      { name: "Prisma ORM", relatedProjects: ["rental-system"] },
      { name: "MongoDB", relatedProjects: ["sole-society", "edutrack"] },
      { name: "Mongoose", relatedProjects: ["sole-society", "edutrack"] }
    ]
  },
  {
    id: "auth",
    category: "Authentication & Security",
    code: "MAT-05",
    skills: [
      { name: "JSON Web Tokens (JWT)", relatedProjects: ["rental-system", "sole-society", "edutrack"] },
      { name: "Role-Based Access Control", relatedProjects: ["rental-system", "sole-society", "edutrack"] },
      { name: "Password Hashing (bcrypt)", relatedProjects: ["rental-system", "sole-society", "edutrack"] }
    ]
  },
  {
    id: "tools",
    category: "Tools & Deployment Services",
    code: "MAT-06",
    skills: [
      { name: "Git & GitHub", relatedProjects: ["rental-system", "sole-society", "edutrack"] },
      { name: "Postman API Testing", relatedProjects: ["rental-system", "sole-society", "edutrack"] },
      { name: "Vercel Deployment", relatedProjects: ["rental-system", "sole-society", "edutrack"] },
      { name: "Render Cloud Hosting", relatedProjects: ["sole-society", "edutrack"] },
      { name: "Brevo Transactional Email", relatedProjects: ["edutrack"] }
    ]
  },
  {
    id: "other",
    category: "Data & Systems Integration",
    code: "MAT-07",
    skills: [
      { name: "Excel Data Import/Export", relatedProjects: ["edutrack"] },
      { name: "PDF Export Utilities", relatedProjects: ["edutrack"] },
      { name: "API Integration & Debugging", relatedProjects: ["rental-system", "sole-society", "edutrack"] },
      { name: "Production Deployment & Support", relatedProjects: ["rental-system", "sole-society", "edutrack"] }
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    id: "bridgeon-intern",
    role: "Full Stack Developer Intern",
    company: "Bridgeon IT Solutions",
    location: "Kerala, India",
    period: "Apr 2025 – Present",
    badge: "ACTIVE CONTRACT",
    highlights: [
      "Independently developed two major full-stack web applications using the MERN stack: Sole Society (e-commerce) and EduTrack (student management).",
      "Built robust REST APIs with Node.js and Express.js and integrated them with responsive React.js frontends and MongoDB databases.",
      "Implemented JWT authentication and role-based authorization with separate permissions for administrators and regular users.",
      "Built e-commerce features: product CRUD, shopping cart, order placement, customer wishlist, and category management.",
      "Built student management features: student profiles, teacher directories, class and division structures, daily attendance logging, academic reports, and school events.",
      "Implemented email verification and delivery workflows; successfully troubleshot production email delivery issues and migrated from Nodemailer to Brevo API.",
      "Implemented Excel data import/export utilities for bulk data ingestion and PDF document export functionality.",
      "Deployed frontends on Vercel and backends on Render; used Git/GitHub for version control; systematically debugged frontend, backend, API, and production deployment issues."
    ]
  }
];

export const education: EducationItem[] = [
  {
    id: "higher-secondary",
    degree: "Higher Secondary Education (12th)",
    institution: "GHSS Porur",
    field: "Bio Science Stream",
    period: "2023 – 2025",
    location: "Porur, Kerala"
  },
  {
    id: "secondary",
    degree: "Secondary Education (10th)",
    institution: "GHSS Porur",
    field: "General Studies",
    period: "2022 – 2023",
    location: "Porur, Kerala"
  }
];
