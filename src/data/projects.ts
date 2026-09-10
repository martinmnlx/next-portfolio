export interface ProjectSpotlight {
  title?: string;
  description: string;
  media?: {
    type?: "image" | "video";
    src?: string;
    alt?: string;
  };
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
  overview: string[];
  stack: string[];
  contributions: string[];
  showcase: ProjectSpotlight[];
  links: ProjectLink[];
  images?: { title: string; src?: string }[];
}

export const PROJECTS: Project[] = [
  {
    slug: "soa-manager",
    title: "Statement-of-Account (SOA) Manager",
    role: "Full-Stack Engineer",
    type: "Freelance",
    period: "Apr 2026 - Present",
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
        title: "Statement Editor & Ledger Workflow",
        description:
          "Designed and engineered a responsive billing management web application to centralize and replace an error-prone, Excel-based Statement of Account (SOA) creation and management workflow.",
        media: {
          type: "image",
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
    images: [
      { title: "Account Dashboard" },
      { title: "Statement Generation" },
      { title: "Payment Ledger" },
    ],
  },
  {
    slug: "talentados",
    title: "Talentados: Applicant-Tracking System (ATS)",
    role: "Backend Engineer",
    type: "School",
    period: "May 2026 - Aug 2026",
    overview: [
      "Talentados is an automated applicant-tracking and candidate pipeline system tailored for modern recruitment workflows. It simplifies job candidate intake, resume processing, and multi-stage evaluation.",
      "Built as a robust backend solution handling high-volume candidate status transitions, automated notifications, and interview scheduling workflows with reliable relational storage.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma ORM",
      "PostgreSQL",
    ],
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
    ],
    links: [
      { label: "Deployed Site", href: "#" },
      { label: "GitHub Repo", href: "https://github.com/martinmnlx" },
    ],
    images: [
      { title: "Applicant Pipeline" },
      { title: "Resume Parser" },
      { title: "Evaluation Matrix" },
    ],
  },
  {
    slug: "taftics",
    title: "Taftics: Establishment Review App",
    role: "Full-Stack Engineer",
    type: "School",
    period: "Jan 2026 - Apr 2026",
    overview: [
      "Taftics is a crowd-sourced establishment discovery and review web application built for the De La Salle University student community along Taft Avenue.",
      "Allows students to discover dining spots, study spaces, and local services with student-verified ratings, reviews, menu details, and budget estimates.",
    ],
    stack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Bootstrap",
      "HTML/CSS",
    ],
    contributions: [
      "Designed and developed the full-stack MERN architecture with MongoDB schemas for establishments and reviews.",
      "Built interactive search, category filters, price-range queries, and user profile management.",
      "Implemented review submission with image attachments and community upvoting mechanisms.",
    ],
    showcase: [
      {
        title: "Establishment Discovery & Reviews",
        description:
          "Browse, search, and review local student spots with verified ratings and detailed feedback.",
        media: {
          type: "image",
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
    images: [
      { title: "Establishment Directory" },
      { title: "Review Feed" },
      { title: "Interactive Taft Map" },
    ],
  },
  {
    slug: "callbot",
    title: "Discord Voice Chat Analytics Bot",
    role: "Backend Engineer",
    type: "Personal",
    period: "Sep 2026 - Present",
    overview: [
      "An automated Discord bot that passively tracks, aggregates, and visualizes voice channel activity, user engagement trends, and duration statistics within gaming and study communities.",
      "Provides real-time activity heatmaps, weekly voice leaderboards, and server health analytics through automated Discord embed reporting.",
    ],
    stack: ["TypeScript", "Node.js", "Discord.js", "SQLite", "Better-SQLite3"],
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
    ],
    links: [
      { label: "GitHub Repo", href: "https://github.com/martinmnlx/callbot" },
    ],
    images: [
      { title: "Voice Session Heatmap" },
      { title: "Member Leaderboards" },
      { title: "Analytics Overview" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
