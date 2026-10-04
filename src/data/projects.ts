export interface ProjectSpotlight {
  title: string;
  description: string;
  media?: {
    type?: "image" | "video";
    src?: string;
    alt?: string;
  };
}

export interface ProjectVideo {
  src: string;
  title?: string;
  description?: string;
  poster?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  role: string;
  type: string;
  period: string;
  year?: number;
  overview: string[];
  stack: string[];
  contributions: string[];
  showcase?: ProjectSpotlight[];
  video?: ProjectVideo | string;
  links: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    slug: "soa-manager",
    title: "Statement of Account (SOA) Manager",
    role: "Full Stack Engineer",
    type: "work",
    period: "Apr 2026 - Present",
    year: 2026,
    overview: [
      "My mother and her fellow staff members spent hours every week manually drafting billing statements, wrestling long spreadsheets, and tracking unpaid and overdue payments and client receipts. That workflow, by their words, was incredibly time-consuming and prone to small but costly errors.",
      "To solve this, I built a full-stack cloud-based application with a Google Docs-style editor and a centralized ledger to track and manage the relational statements, clients, and payments data. The app has been integrated to their weekly workflow for more than 4+ months now, saving them approximately 4+ hours per week.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Supabase",
    ],
    contributions: [
      "Designed a Google Docs-style live statement editor with incremental auto-naming, cloud auto-save, undo/redo, and draft recovery.",
      "Engineered an automated PDF export feature that combines edited statements with uploaded PDF/image attachments.",
      "Designed interactive ledger tables for statements, clients, and payments with search queries, column filters, row actions, and slide-out drawers, allowing staff to quickly find, edit, and create data records.",
      "Added summary columns across data tables that automatically compute the number of unpaid/overdue statements, payment statuses, and outstanding balances in both PHP and USD.",
      "Built a multi-statement payment feature that allows staff to log a single payment across multiple invoices, automatically updating the affected tables.",
      "Optimized app performance and data security using page lazy-loading, data caching, and database permission rules (RLS), keeping page loads snappy while ensuring financial records stay private.",
    ],
    showcase: [
      {
        title: "Live Statement Editor (A4 Layout)",
        description:
          "Google Docs-style live billing statement editor with incremental auto-naming, cloud auto-save, undo/redo, draft recovery, and automated PDF export.",
        media: {
          type: "image",
          src: "/projects/soa-manager/03-editor-document-a4.png",
          alt: "Live statement editor with A4 document layout",
        },
      },
      {
        title: "Statements Master Table & Ledger",
        description:
          "Centralized data table with search queries, multi-column filters, payment status indicators, and dual-currency summary balances in PHP and USD.",
        media: {
          type: "image",
          src: "/projects/soa-manager/04-statements-master-table.png",
          alt: "Statements master ledger table",
        },
      },
      {
        title: "Clients Directory & Profile Management",
        description:
          "Relational directory to organize client records, contact details, statement histories, and active billing statuses.",
        media: {
          type: "image",
          src: "/projects/soa-manager/05-clients-directory.png",
          alt: "Clients directory and management table",
        },
      },
      {
        title: "Payments Registry & Audit Trail",
        description:
          "Comprehensive payment log tracking client receipts, payment dates, allocation modes, and connected invoice statements.",
        media: {
          type: "image",
          src: "/projects/soa-manager/06-payments-registry.png",
          alt: "Payments registry tracking receipts",
        },
      },
      {
        title: "Multi-Statement Payment Allocation",
        description:
          "Modal workflow allowing staff to record a single lump-sum payment across multiple overdue invoices with automatic balance recalculation.",
        media: {
          type: "image",
          src: "/projects/soa-manager/09-log-payment-modal.png",
          alt: "Log payment modal for multi-statement allocations",
        },
      },
      {
        title: "New Statement Creation Drawer",
        description:
          "Slide-out creation drawer allowing staff to quickly draft new billing statements without losing their place in the master ledger.",
        media: {
          type: "image",
          src: "/projects/soa-manager/10-new-statement-drawer.png",
          alt: "Slide-out drawer for creating new statements",
        },
      },
    ],
    links: [
      { label: "Deployed Site", href: "#" },
      {
        label: "GitHub Repo",
        href: "https://github.com/martinmnlx/soa-manager",
      },
    ],
  },
  {
    slug: "talentados",
    title: "Talentados: Applicant Tracking System",
    role: "Backend Engineer",
    type: "school",
    period: "May 2026 - Aug 2026",
    year: 2026,
    overview: [
      "Talentados is an automated applicant-tracking and candidate pipeline system tailored for modern recruitment workflows. It simplifies job candidate intake, resume processing, and multi-stage evaluation.",
      "Built as a robust backend solution handling high-volume candidate status transitions, automated notifications, and interview scheduling workflows with reliable relational storage.",
    ],
    stack: ["Next.js", "TypeScript", "Express.js", "Supabase", "Prisma ORM"],
    contributions: [
      "Architected relational candidate-pipeline database schema and status state-machine with Prisma ORM.",
      "Engineered RESTful API endpoints for candidate application intake, document uploads, and scoring criteria.",
      "Implemented role-based access control for recruiters, hiring managers, and interviewers.",
    ],
    showcase: [
      {
        title: "Applicant Pipeline Overview",
        description:
          "Visualized candidate application progression through customized Kanban-style pipeline stages.",
        media: {
          type: "image",
        },
      },
      {
        title: "Resume Parser & Candidate Intake",
        description:
          "Automated ingestion and parsing of applicant documents to populate structured candidate profiles and qualification metrics.",
        media: {
          type: "image",
        },
      },
      {
        title: "Evaluation Matrix & Rubrics",
        description:
          "Multi-criteria scoring system enabling hiring teams to record feedback, ratings, and collaborative interview decisions.",
        media: {
          type: "image",
        },
      },
    ],
    links: [
      { label: "Deployed Site", href: "#" },
      { label: "GitHub Repo", href: "https://github.com/martinmnlx" },
    ],
  },
  {
    slug: "taftics",
    title: "Taftics: Establishment Review App",
    role: "Full Stack Engineer",
    type: "school",
    period: "Jan 2026 - Apr 2026",
    year: 2026,
    overview: [
      "Taftics is a crowd-sourced establishment discovery and review web application built for the De La Salle University student community along Taft Avenue.",
      "Allows students to discover dining spots, study spaces, and local services with student-verified ratings, reviews, menu details, and budget estimates.",
    ],
    stack: [
      "React",
      "JavaScript",
      "Bootstrap",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Cloudinary",
    ],
    contributions: [
      "Designed and developed the full-stack MERN architecture with MongoDB schemas for establishments and reviews.",
      "Built interactive search, category filters, price-range queries, and user profile management.",
      "Implemented review submission with image attachments and community upvoting mechanisms.",
    ],
    showcase: [
      {
        title: "Landing & Discovery Portal",
        description:
          "Welcome portal highlighting trending Taft Avenue establishments, featured dining spots, and community review highlights.",
        media: {
          type: "image",
          src: "/projects/taftics/landing.png",
          alt: "Taftics landing page and discovery portal",
        },
      },
      {
        title: "Establishment Directory & Filters",
        description:
          "Curated directory of student spots with category filters, price-range indicators, and verified community ratings.",
        media: {
          type: "image",
          src: "/projects/taftics/browse.png",
          alt: "Browse directory with search and category filters",
        },
      },
      {
        title: "Establishment Details & Review Feed",
        description:
          "Detailed venue profiles featuring student ratings, photo attachments, menu information, and community upvoting.",
        media: {
          type: "image",
          src: "/projects/taftics/individual-review.png",
          alt: "Individual establishment page with detailed review feed",
        },
      },
    ],
    links: [
      { label: "Deployed Site", href: "#" },
      {
        label: "GitHub Repo",
        href: "https://github.com/Gabiesaur/CCAPDEV-MCO",
      },
    ],
  },
  {
    slug: "callbot",
    title: "CallBot: Discord Voice Call Analytics Bot",
    role: "Backend Engineer",
    type: "personal",
    period: "Sep 2026 - Present",
    year: 2026,
    overview: [
      "An automated Discord bot that passively tracks, aggregates, and visualizes voice channel activity, user engagement trends, and duration statistics within gaming and study communities.",
      "Provides real-time activity heatmaps, weekly voice leaderboards, and server health analytics through automated Discord embed reporting.",
    ],
    stack: ["TypeScript", "Node.js", "Discord.js", "SQLite"],
    contributions: [
      "Developed event listeners to track voice channel joins, leaves, mutes, and deafens with millisecond precision.",
      "Engineered an efficient SQLite persistence layer recording session durations and aggregated weekly leaderboards.",
      "Designed automated weekly digest reports delivered directly to administrative Discord channels.",
    ],
    showcase: [
      {
        title: "Voice Channel Activity Leaderboards",
        description:
          "Automated tracking and periodic reporting of community voice engagement and member trends.",
        media: {
          type: "image",
        },
      },
      {
        title: "Voice Session Heatmap",
        description:
          "Visual distribution of active hours and peak engagement periods across community Discord voice rooms.",
        media: {
          type: "image",
        },
      },
      {
        title: "Server Health & Analytics Overview",
        description:
          "Aggregated weekly digests and session telemetry delivered directly to administrative Discord channels.",
        media: {
          type: "image",
        },
      },
    ],
    links: [
      { label: "GitHub Repo", href: "https://github.com/martinmnlx/callbot" },
    ],
  },
  {
    slug: "eventbuddy",
    title: "EventBuddy: Hall Reservation System",
    role: "Frontend Engineer",
    type: "school",
    period: "Oct 2025 - Dec 2025",
    year: 2025,
    overview: [
      "EventBuddy is an online hall and multipurpose venue reservation management platform designed to streamline room scheduling, prevent double-bookings, and coordinate event logistics across university organizations.",
      "Features interactive venue availability calendars, automated reservation request reviews, and administrative approval pipelines.",
    ],
    stack: ["Java", "JSwing", "Java Database Connectivity (JDBC)", "MySQL"],
    contributions: [
      "Built responsive interactive calendar and venue slot booking interfaces with dynamic conflict-checking.",
      "Designed administrative dashboard for managing venue bookings, equipment checklists, and approval queues.",
      "Engineered client-side form validation and multi-step venue reservation request flows.",
    ],
    video: {
      src: "/projects/eventbuddy/eventbuddy.mp4",
      title: "Interactive Hall Reservation Demo",
      description:
        "Full demonstration of interactive venue availability calendars, multi-step booking request flows, and administrative approvals.",
    },
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/martinmnlx/eventbuddy",
      },
    ],
  },
  {
    slug: "digital-loveprint",
    title: "Digital Loveprint: For My Girlfriend",
    role: "Frontend Engineer",
    type: "personal",
    period: "Aug 2025",
    year: 2025,
    overview: [
      "Digital Loveprint is a digital time capsule I made for my girlfriend as an early anniversary gift, mimicing retro browser UI with interactive draggable tabs. My first side project focusing on frontend styling with Tailwind and development with vanilla HTML, CSS, and JavaScript.",
    ],
    stack: ["HTML/CSS", "JavaScript", "Tailwind CSS"],
    contributions: [
      "Designed the UI based on the aesthetic of retro browsers.",
      "Created tabs for a scrollable gallery, time counter, love letter, and music player.",
      "Added scripting for the tabs interactive, overlapping, and draggable behavior.",
    ],
    showcase: [
      {
        title: "Main Keepsake Desktop",
        description:
          "Interactive digital desktop environment featuring personal milestone counters, ambient widgets, and customized navigation windows.",
        media: {
          type: "image",
          src: "/projects/digital-loveprint/01-main-window.png",
          alt: "Digital Loveprint main interactive desktop window",
        },
      },
      {
        title: "Memory Gallery Pop-Up",
        description:
          "Interactive photo gallery modal showcasing relationship milestones and memories with responsive grid layouts.",
        media: {
          type: "image",
          src: "/projects/digital-loveprint/02-popup-gallery.png",
          alt: "Memory photo gallery pop-up modal",
        },
      },
      {
        title: "Relationship Milestone Counter",
        description:
          "Live anniversary counter tracking total days, hours, and minutes together with animated celebratory micro-interactions.",
        media: {
          type: "image",
          src: "/projects/digital-loveprint/03-popup-since.png",
          alt: "Anniversary and relationship milestone counter popup",
        },
      },
      {
        title: "Ambient Music Player Widget",
        description:
          "Custom audio player widget with music playback controls, interactive playlist selection, and ambient soundscapes.",
        media: {
          type: "image",
          src: "/projects/digital-loveprint/05-popup-music.png",
          alt: "Ambient audio and playlist music player popup",
        },
      },
      {
        title: "Multi-Window Experience Overview",
        description:
          "Complete overview displaying multiple interactive draggable pop-up windows open simultaneously across the viewport.",
        media: {
          type: "image",
          src: "/projects/digital-loveprint/06-all-popups-overview.png",
          alt: "Full desktop overview showing all active interactive pop-up windows",
        },
      },
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/martinmnlx/digital-loveprint",
      },
    ],
  },
  {
    slug: "crown-of-vengeance",
    title: "Crown of Vengeance: Turn-Based Fighting Game",
    role: "Java Engineer",
    type: "school",
    period: "Jan 2025 - Apr 2025",
    year: 2025,
    overview: [
      "Crown of Vengeance, my final project for **CCPROG3: Object-Oriented Programming**, is a turn-based 2D fighting game developed in Java. It introduced me to concepts like OOP principles, MVC architecture, GUI integration, and basic game engines.",
    ],
    stack: ["Java", "JavaFX"],
    contributions: [
      "Implemented character class inheritance hierarchies, polymorphic ability trees, and combat state calculations.",
      "Programmed turn-based combat battle loop with initiative queues and damage calculation algorithms.",
      "Designed dynamic 2D UI status bars, combat log readouts, and character animation sprites with JavaFX.",
    ],
    video: {
      src: "/projects/crown-of-vengeance/crown-of-vengeance.mp4",
      title: "Combat Arena & Gameplay Demo",
      description:
        "Gameplay walkthrough of the JavaFX turn-based combat system, character class abilities, damage calculations, and skill tree progression.",
    },
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/martinmnlx/crown-of-vengeance",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
