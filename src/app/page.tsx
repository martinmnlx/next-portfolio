import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";

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
  },
  {
    title: "Talentados: Applicant-Tracking System (ATS)",
    role: "Backend Engineer",
    period: "May 2026 - Aug 2026",
  },
  {
    title: "Taftics: Establishment Review App",
    role: "Full-Stack Engineer",
    period: "Jan 2026 - Apr 2026",
  },
  {
    title: "Discord Voice Chat Analytics Bot",
    role: "Backend Engineer",
    period: "Sep 2026 - Present",
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
        <div className="flex flex-col gap-5">
          {PROJECTS.map(({ title, role, period }) => (
            <div
              key={title}
              className="group flex flex-col gap-1 cursor-pointer"
            >
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
    </main>
  );
}
