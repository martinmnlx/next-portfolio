import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { Facebook, Github, Linkedin } from "@/components/ui/icons";
import { ProjectCarousel } from "@/components/ui/project-carousel";

const TECH_STACK = [
  {
    category: "languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C", "C++"],
  },
  {
    category: "frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
      "HTML/CSS",
    ],
  },
  {
    category: "ui libraries",
    items: ["shadcn/ui", "Radix UI", "Motion"],
  },
  {
    category: "backend",
    items: ["Node.js", "Express", "Prisma ORM", "NextAuth.js"],
  },
  {
    category: "database",
    items: ["Supabase", "MongoDB", "MySQL"],
  },
  {
    category: "tools",
    items: ["Git", "GitHub", "Figma", "VS Code", "IntelliJ IDEA", "Vercel"],
  },
];

const PROJECTS = [
  {
    title: "Statement-of-Account (SOA) Manager",
    role: "Full-Stack Engineer",
    period: "May 2026 - Present",
    images: [
      { title: "Account Dashboard" },
      { title: "Statement Generation" },
      { title: "Payment Ledger" },
    ],
  },
  {
    title: "Talentados: Applicant-Tracking System (ATS)",
    role: "Backend Engineer",
    period: "May 2026 - Aug 2026",
    images: [
      { title: "Applicant Pipeline" },
      { title: "Resume Parser" },
      { title: "Evaluation Matrix" },
    ],
  },
  {
    title: "Taftics: Establishment Review App",
    role: "Full-Stack Engineer",
    period: "Jan 2026 - Apr 2026",
    images: [
      { title: "Establishment Directory" },
      { title: "Review Feed" },
      { title: "Interactive Taft Map" },
    ],
  },
  {
    title: "Discord Voice Chat Analytics Bot",
    role: "Backend Engineer",
    period: "Sep 2026 - Present",
    images: [
      { title: "Voice Session Heatmap" },
      { title: "Member Leaderboards" },
      { title: "Analytics Overview" },
    ],
  },
];

const CONNECT_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/martinmnlx",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/martin-d-manalo/",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/martinmnlx",
    icon: Facebook,
  },
  {
    name: "Email",
    href: "mailto:martinmanalo5@gmail.com",
    icon: Mail,
  },
  {
    name: "Resume",
    href: "/RESUME.pdf",
    icon: FileText,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col w-160 px-5 gap-10">
      <div className="flex flex-col gap-5">
        <Typography variant={"h1"}>Hello!</Typography>
        <Typography variant={"p"}>
          I&apos;m <span className="text-foreground/75">Martin</span>, an
          undergrad CS student at De La Salle University, based in the{" "}
          <span className="text-foreground/75">Philippines</span>, aiming to
          become a software/design engineer in the industry.
        </Typography>
        <Typography variant={"p"}>
          Ever since I fell into this rabbit hole, I have obsessed over the
          little details that make user experiences feel like they were crafted
          with care and intent.
        </Typography>
      </div>

      <div className="flex flex-col gap-5">
        <Typography variant={"h1"}>projects</Typography>
        <div className="flex flex-col gap-8">
          {PROJECTS.map(({ title, role, period, images }) => (
            <div
              key={title}
              className="group flex flex-col gap-3 cursor-pointer"
            >
              <ProjectCarousel images={images} projectTitle={title} />
              <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center">
                  <span className="inline-flex items-center justify-center overflow-hidden w-0 opacity-0 -translate-x-1.5 transition-all duration-200 ease-out group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-1">
                    <ArrowUpRight className="size-3.5 text-foreground shrink-0" />
                  </span>
                  <Typography
                    variant={"h4"}
                    className="transition-transform duration-200 text-foreground/75 group-hover:text-foreground"
                  >
                    {title}
                  </Typography>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Typography variant={"h3"}>{role}</Typography>
                  <Typography variant={"h3"}>{period}</Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <Typography variant={"h1"}>Tech Stack</Typography>
        <div className="flex flex-col gap-4">
          {TECH_STACK.map(({ category, items }) => (
            <div
              key={category}
              className="flex flex-row items-center w-full justify-between gap-4"
            >
              <Typography variant={"h2"} className="whitespace-nowrap">
                {category}
              </Typography>
              <div className="flex flex-row items-center gap-2 flex-wrap justify-end">
                {items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <Typography variant={"h1"}>connect</Typography>
        <Typography variant={"p"}>
          I&apos;m open to work whether it be internships or short-term
          projects. If you need something built that would make your life
          easier, feel free to reach out!
        </Typography>
        <div className="flex flex-row items-center gap-4 flex-wrap">
          {CONNECT_LINKS.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              title={name}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto:") ? undefined : "noopener noreferrer"
              }
              className="text-foreground/75 hover:text-foreground transition-colors"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
