import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { ArrowUpRight, FileText } from "lucide-react";
import { Facebook, Github, Linkedin } from "@/components/ui/icons";
// import { ProjectCarousel } from "@/components/ui/project-carousel";
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
      "Vite",
      "HTML/CSS",
    ],
  },
  {
    category: "libraries",
    items: ["shadcn/ui", "Radix UI", "Motion"],
  },
  {
    category: "backend",
    items: ["Node.js", "Express.js", "Prisma ORM", "NextAuth.js"],
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
    label: "years",
    value: "Sep 2024 - Aug 2028*",
  },
  {
    label: "gpa",
    value: "3.64 / 4.00",
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
    name: "Resume",
    href: "/RESUME.pdf",
    icon: FileText,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col w-160 px-5 gap-10">
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
      <section id="about" className="flex flex-col gap-5 scroll-mt-20">
        <Typography variant={"h1"}>Hello!</Typography>
        <Typography variant={"p"}>
          I'm <span className="text-foreground/75">Martin</span>, a third-year
          computer science student at{" "}
          <span className="text-foreground/75">De La Salle University</span>,
          based in Manila, aiming to become a software/design engineer. I'm
          particularly interested in UX research — studying the way people
          interact with apps and engineering creative UI solutions.
        </Typography>
        <Typography variant={"p"}>
          Ever since I fell into this rabbit hole, I have been obsessed over the
          little details that make user experiences feel like they were crafted
          with care and intent.
        </Typography>
      </section>

      <section id="projects" className="flex flex-col gap-5 scroll-mt-20">
        <Typography variant={"h1"}>projects</Typography>
        <div className="flex flex-col gap-5">
          {PROJECTS.map(({ slug, title, type, role, period }) => (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              className="group flex flex-col gap-1 cursor-pointer"
            >
              {/* <ProjectCarousel images={images} projectTitle={title} /> */}
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
                <Typography variant={"h3"}>
                  {type}, {role}
                </Typography>
                <Typography variant={"h3"}>{period}</Typography>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="stack" className="flex flex-col gap-5 scroll-mt-20">
        <Typography variant={"h1"}>stack</Typography>
        <div className="flex flex-col gap-3">
          {TECH_STACK.map(({ category, items }) => (
            <div key={category} className="flex flex-row items-center">
              <Typography
                variant={"h2"}
                className="w-50 shrink-0 select-none whitespace-nowrap"
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

      <section id="education" className="flex flex-col gap-5 scroll-mt-20">
        <Typography variant={"h1"}>education</Typography>
        <div className="flex flex-col gap-3">
          {EDUCATION.map(({ label, value }) => (
            <div key={label} className="flex flex-row items-baseline">
              <Typography
                variant={"h2"}
                className="w-50 shrink-0 select-none whitespace-nowrap"
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

      <section id="connect" className="flex flex-col gap-5 scroll-mt-20">
        <Typography variant={"h1"}>connect</Typography>
        <Typography variant={"p"}>
          I&apos;m open to work whether it be internships or short-term
          projects. If you need something built that would make your life
          easier, feel free to reach out! The best way to reach me is through my
          email,{" "}
          <CopyButton text="martinmanalo5@gmail.com">
            martinmanalo5@gmail.com
          </CopyButton>
          , or any of my social links below.
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
      </section>
    </main>
  );
}
