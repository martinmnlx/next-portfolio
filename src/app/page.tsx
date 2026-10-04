import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { ArrowUpRight, Download } from "lucide-react";
import { Facebook, Github, Linkedin } from "@/components/ui/icons";
import { CopyButton } from "@/components/ui/copy-button";
import { PROJECTS } from "@/data/projects";

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
      "HTML/CSS",
      "Vite",
    ],
  },
  {
    category: "libraries",
    items: ["shadcn/ui", "Radix UI", "Motion", "Playwright"],
  },
  {
    category: "backend",
    items: ["Node.js", "REST APIs", "Express.js", "Prisma ORM"],
  },
  {
    category: "database",
    items: ["Supabase", "MongoDB", "MySQL", "SQLite "],
  },
  {
    category: "tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Slack", "Jira"],
  },
  {
    category: "ai",
    items: ["ChatGPT", "Codex", "Gemini"],
  },
];

const EDUCATION = [
  {
    label: "school",
    value: "De La Salle University",
  },
  {
    label: "location",
    value: "Manila, Philippines",
  },
  {
    label: "program",
    value: "BS Computer Science, Major in Software Technology",
  },
  {
    label: "duration",
    value: "Sep 2024 - Aug 2028*",
  },
  {
    label: "gpa",
    value: "3.64 / 4.00",
  },
];

const CONNECT_LINKS = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/martin-d-manalo/",
    icon: Linkedin,
  },
  {
    name: "github",
    href: "https://github.com/martinmnlx",
    icon: Github,
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/martinmnlx",
    icon: Facebook,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col w-full md:w-160 px-5 gap-10">
      <div className="flex flex-row items-center gap-4">
        <Image
          src="/me+ironman.jpg"
          alt="Martin Manalo"
          width={64}
          height={64}
          priority
          className="size-16 rounded-lg object-cover border border-border"
        />
        <Image
          src="/signature.png"
          alt="Martin Manalo signature"
          width={112}
          height={64}
          className="h-10 w-auto object-contain dark:invert select-none pointer-events-none opacity-80"
        />
      </div>

      {/* About Section */}
      <section id="about" className="flex flex-col gap-5 scroll-mt-20">
        <Typography variant={"h1"}>Hello!</Typography>
        <Typography variant={"p"}>
          I&apos;m <span className="text-foreground/75">Martin</span>, a
          third-year computer science student at{" "}
          <span className="text-foreground/75">De La Salle University</span>,
          based in Manila, aiming to become a software/design engineer. I&apos;m
          particularly interested in UX research — studying the way people
          interact with apps and engineering creative UI solutions.
        </Typography>
        <Typography variant={"p"}>
          Ever since I fell into this rabbit hole, I have been obsessed over the
          little details that make user experiences feel like they were crafted
          with care and intent.
        </Typography>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex flex-col gap-5 scroll-mt-20">
        <Typography variant={"h1"}>projects</Typography>
        <div className="flex flex-col gap-5">
          {PROJECTS.map(({ slug, title, type, role, year }, index) => {
            const showYear =
              year && (index === 0 || PROJECTS[index - 1].year !== year);

            return (
              <Link
                key={slug}
                href={`/projects/${slug}`}
                className="group flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center">
                    <ViewTransition name={`project-title-${slug}`}>
                      <Typography
                        variant={"h4"}
                        className="transition-colors duration-200 text-foreground/75 group-hover:text-foreground"
                      >
                        {title}
                      </Typography>
                    </ViewTransition>
                    <span className="inline-flex items-center justify-center overflow-hidden w-0 opacity-0 -translate-x-1.5 transition-all duration-200 ease-out group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-1">
                      <ArrowUpRight className="size-3.5 text-foreground shrink-0" />
                    </span>
                  </div>
                  {showYear && (
                    <Typography
                      variant={"h3"}
                      className="select-none font-mono"
                    >
                      {year}
                    </Typography>
                  )}
                </div>
                <div className="flex flex-row items-center gap-2">
                  <ViewTransition name={`project-badge-${slug}`}>
                    <Badge variant="mono">{type}</Badge>
                  </ViewTransition>
                  <ViewTransition name={`project-role-${slug}`}>
                    <Typography variant={"p"}>{role}</Typography>
                  </ViewTransition>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="flex flex-col gap-5 scroll-mt-20">
        <Typography variant={"h1"}>stack</Typography>
        <div className="flex flex-col gap-5 md:gap-3">
          {TECH_STACK.map(({ category, items }) => (
            <div
              key={category}
              className="flex flex-row items-baseline md:pb-0"
            >
              <Typography
                variant={"h2"}
                className="w-30 md:w-40 shrink-0 select-none whitespace-nowrap"
              >
                {category}
              </Typography>
              <div className="flex flex-row items-center gap-2 flex-wrap">
                {items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="flex flex-col gap-5 scroll-mt-20">
        <Typography variant={"h1"}>education</Typography>
        <div className="flex flex-col gap-3">
          {EDUCATION.map(({ label, value }) => (
            <div key={label} className="flex flex-row items-baseline">
              <Typography
                variant={"h2"}
                className="w-30 md:w-40 shrink-0 select-none whitespace-nowrap"
              >
                {label}
              </Typography>
              <Typography variant={"p"} as="span">
                {value}
              </Typography>
            </div>
          ))}
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="flex flex-col gap-5 scroll-mt-20">
        <Typography variant={"h1"}>connect</Typography>
        <Typography variant={"p"}>
          I&apos;m open to work whether it be internships or short-term
          projects. If you need something built to improve business or optimize
          workflows, feel free to reach out! The best way to reach me is through
          my email,{" "}
          <CopyButton text="martinmanalo5@gmail.com">
            martinmanalo5@gmail.com
          </CopyButton>
          , or any of my social links below.
        </Typography>
        <Typography>
          You may download and view my{" "}
          <a
            href="/RESUME - MANALO, CARL MARTIN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-foreground/75 hover:text-foreground transition-all duration-300 cursor-pointer"
          >
            professional resume
            <Download className="size-3.5" />
          </a>
          .
        </Typography>
        <div className="flex flex-row gap-10 items-start">
          {CONNECT_LINKS.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-sans text-foreground/75 hover:text-foreground hover:underline hover:underline-offset-4 transition-all duration-300 cursor-pointer"
            >
              <Icon className="size-4" />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
