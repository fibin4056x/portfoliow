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
  backendGithubUrl?: string;
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
  location: "Kerala, India",
  email: "fibinkunnath@gmail.com",
  phone: "+91 7907238198",
  pitch: "I build full-stack web applications, from the database to the deployed product.",
  aboutBrief: "Full Stack Developer with hands-on experience building and deploying web applications using React.js, Node.js, Express.js and MongoDB. Developed two major applications during a Full Stack Developer internship: an e-commerce platform and a student management system. Experienced in REST API development, authentication and role-based authorization, CRUD operations, database integration, email services, data import/export, debugging, testing, and production deployment. Now expanding into Next.js, TypeScript, PostgreSQL and Prisma.",
  status: "OPEN TO WORK",
  resumeUrl: "/resume.pdf", // PLACEHOLDER: Replace with your actual PDF in /public/resume.pdf
  socials: {
    github: "https://github.com/fibin4056x",
    linkedin: "https://www.linkedin.com/in/fibin/",
  },
  clientSpec: {
    contractor: "FIBIN",
    primaryRole: "Full Stack Developer (MERN / Next.js)",
    location: "Kerala, India",
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
    liveUrl: "", // PLACEHOLDER: Replace with your live demo URL
    githubUrl: "https://github.com/spotnest/spotnest-frontend",
    backendGithubUrl: "https://github.com/spotnest/spotnest-backend",
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

  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JWT",
    "bcrypt"
  ],

  summary:
    "A full-stack e-commerce platform for browsing products, managing wishlists and shopping carts, placing orders, and administering the product catalog through authenticated role-based access.",

  liveUrl: "https://e-comercer-frontend.vercel.app/",

  githubUrl:
    "https://github.com/fibin4056x/e-comercer-frontend",

  backendGithubUrl:
    "https://github.com/fibin4056x/e-comerce-backend",

  coreJourney: [
    {
      step: 1,
      title: "Register",
      description:
        "Users create accounts and authenticate securely before accessing protected shopping and account features."
    },
    {
      step: 2,
      title: "Discover",
      description:
        "Customers browse the product catalog and explore available products through the storefront interface."
    },
    {
      step: 3,
      title: "Inspect",
      description:
        "Customers open product details to review product information before deciding what to purchase."
    },
    {
      step: 4,
      title: "Wishlist",
      description:
        "Authenticated customers can save products to their wishlist for later consideration."
    },
    {
      step: 5,
      title: "Cart",
      description:
        "Customers manage selected products through the shopping cart before proceeding with an order."
    },
    {
      step: 6,
      title: "Checkout",
      description:
        "Authenticated customers proceed through the order creation workflow from their selected cart items."
    },
    {
      step: 7,
      title: "Orders",
      description:
        "Customers can access their order history and track previously created orders."
    },
    {
      step: 8,
      title: "Manage",
      description:
        "Authorized administrators manage products, categories, inventory-related information, and other catalog operations."
    }
  ],

  userRoles: [
    {
      role: "Customer",
      title: "Customer / Shopper",
      description:
        "Authenticated users who browse products, manage wishlists and carts, and place orders.",
      features: [
        "Account registration and authentication",
        "Product catalog browsing",
        "Product detail viewing",
        "Wishlist management",
        "Shopping cart management",
        "Order placement",
        "Order history access"
      ]
    },
    {
      role: "Admin",
      title: "Store Administrator",
      description:
        "Authorized administrators responsible for managing the store catalog and administrative operations.",
      features: [
        "Product CRUD operations",
        "Category management",
        "Product catalog administration",
        "Stock and product information management",
        "Authenticated administrative access",
        "Role-based access control"
      ]
    }
  ],

  keyFeatures: [
    {
      id: "product-catalog",
      title: "Product Catalog Management",
      description:
        "Structured product catalog supporting product creation, updates, deletion, category organization, and product information management.",
      calloutPoint: { x: 20, y: 25 }
    },
    {
      id: "product-discovery",
      title: "Product Discovery",
      description:
        "Customer-facing storefront for browsing and exploring available products through the application's catalog interface.",
      calloutPoint: { x: 45, y: 20 }
    },
    {
      id: "product-details",
      title: "Detailed Product Views",
      description:
        "Dedicated product views expose relevant product information so customers can inspect items before adding them to their shopping workflow.",
      calloutPoint: { x: 75, y: 25 }
    },
    {
      id: "wishlist",
      title: "Wishlist Management",
      description:
        "Authenticated customers can save products to a personal wishlist, allowing products to be retained for later consideration.",
      calloutPoint: { x: 25, y: 50 }
    },
    {
      id: "shopping-cart",
      title: "Shopping Cart Workflow",
      description:
        "Customers can maintain a collection of selected products in their cart before continuing into the order workflow.",
      calloutPoint: { x: 55, y: 50 }
    },
    {
      id: "orders",
      title: "Order Creation & History",
      description:
        "The platform supports authenticated order creation and customer access to previously created orders.",
      calloutPoint: { x: 80, y: 55 }
    },
    {
      id: "authentication",
      title: "JWT Authentication",
      description:
        "Authentication is implemented using JWT-based sessions with bcrypt password hashing for protected user access.",
      calloutPoint: { x: 35, y: 75 }
    },
    {
      id: "rbac",
      title: "Role-Based Administration",
      description:
        "Administrative functionality is separated from regular customer access through authenticated role-based authorization.",
      calloutPoint: { x: 70, y: 80 }
    }
  ],

  architecture: {
    frontend:
      "React.js SPA + Tailwind CSS (Deployed on Vercel)",

    api:
      "Express.js REST API + Node.js (Deployed on Render)",

    database:
      "MongoDB Atlas Cloud Document Store",

    auth:
      "JWT Tokens + bcrypt Password Encryption"
  }
},
{
  id: "edutrack",
  sheetNumber: "DWG-03-C",
  title: "EduTrack — Student Management System",
  subtitle: "Academic Operations, Attendance & Automated Reporting Platform",
  featured: false,
  status: "LIVE",

  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Brevo"
  ],

  summary:
    "An institutional student management platform for organizing students, teachers, classes and divisions while supporting attendance tracking, Excel data operations, academic reporting, PDF exports, and transactional email workflows.",

  liveUrl:
    "https://es1-beta.vercel.app/login",

  githubUrl:
    "https://github.com/fibin4056x/EduTrack-frontend",

  backendGithubUrl:
    "https://github.com/fibin4056x/EduTrack-backend",

  coreJourney: [
    {
      step: 1,
      title: "Authenticate",
      description:
        "Authorized users authenticate through the application's JWT-based authentication system before accessing protected school-management operations."
    },
    {
      step: 2,
      title: "Configure",
      description:
        "School administrators organize the academic structure through students, teachers, classes, and division records."
    },
    {
      step: 3,
      title: "Manage",
      description:
        "Administrators maintain student and teacher records and manage the relationships between academic entities."
    },
    {
      step: 4,
      title: "Attendance",
      description:
        "Daily attendance records can be created and managed for students within the academic structure."
    },
    {
      step: 5,
      title: "Import",
      description:
        "Bulk student information can be imported through Excel-based data operations."
    },
    {
      step: 6,
      title: "Analyze",
      description:
        "Academic and attendance information can be organized into reports for administrative use."
    },
    {
      step: 7,
      title: "Export",
      description:
        "Academic information can be exported into PDF documents for printable and shareable records."
    },
    {
      step: 8,
      title: "Notify",
      description:
        "Transactional email workflows support verification and other application communication requirements."
    }
  ],

  userRoles: [
    {
      role: "Admin",
      title: "School Administrator",
      description:
        "Administrative users manage the school's academic structure, records, attendance, reports, and operational data.",
      features: [
        "Student record management",
        "Teacher directory management",
        "Class and division management",
        "Attendance management",
        "Excel data import/export",
        "Academic report generation",
        "PDF document export"
      ]
    },
    {
      role: "Customer",
      title: "System User",
      description:
        "Authenticated application users access the functionality permitted by their assigned authorization level.",
      features: [
        "JWT authentication",
        "Protected application access",
        "Authorized data operations",
        "Attendance-related workflows",
        "Academic information access"
      ]
    }
  ],

  keyFeatures: [
    {
      id: "academic-structure",
      title: "Academic Hierarchy Management",
      description:
        "Structured management of students, teachers, classes, and division records provides the foundation for the school's academic data model.",
      calloutPoint: { x: 20, y: 25 }
    },
    {
      id: "student-management",
      title: "Student Record Management",
      description:
        "The system maintains student information within the academic structure, allowing administrative records to be managed centrally.",
      calloutPoint: { x: 45, y: 20 }
    },
    {
      id: "teacher-management",
      title: "Teacher Directory",
      description:
        "Teacher records are managed alongside classes and divisions to maintain the school's academic organization.",
      calloutPoint: { x: 75, y: 25 }
    },
    {
      id: "attendance",
      title: "Daily Attendance Tracking",
      description:
        "The attendance workflow allows student attendance to be recorded and managed against the school's class and division structure.",
      calloutPoint: { x: 25, y: 50 }
    },
    {
      id: "excel",
      title: "Excel Import & Export",
      description:
        "Excel-based data utilities support bulk data ingestion and export workflows for managing larger sets of student information.",
      calloutPoint: { x: 55, y: 50 }
    },
    {
      id: "reports",
      title: "Academic Reporting",
      description:
        "The platform organizes academic and attendance information into reports that can be used for administrative review.",
      calloutPoint: { x: 80, y: 55 }
    },
    {
      id: "pdf",
      title: "PDF Document Export",
      description:
        "Academic information can be converted into printable PDF documents for reporting and record-keeping purposes.",
      calloutPoint: { x: 35, y: 75 }
    },
    {
      id: "email",
      title: "Transactional Email Workflow",
      description:
        "The application uses Brevo as its transactional email engine for verification, password-related communication, and other supported email workflows.",
      calloutPoint: { x: 70, y: 80 }
    }
  ],

  architecture: {
    frontend:
      "React.js Single Page Application (Deployed on Vercel)",

    api:
      "Express.js REST API + Middleware (Deployed on Render)",

    database:
      "MongoDB Document Database",

    auth:
      "JWT Auth + Brevo Transactional Email Engine"
  }
},
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
