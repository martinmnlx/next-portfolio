import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { Image as ImageIcon } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Martin Manalo",
    };
  }

  return {
    title: `${project.title} | Martin Manalo`,
    description: project.overview[0],
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col w-160 px-5 gap-10">
      {/* Top back navigation */}
      <div>
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-wider lowercase text-foreground/50 hover:text-foreground transition-colors"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
            ←
          </span>
          <span>back</span>
        </Link>
      </div>

      {/* Overview Section */}
      <div className="flex flex-col gap-5">
        <Typography variant="h1">overview</Typography>
        <div className="flex flex-col gap-1">
          <Typography variant="h4">{project.title}</Typography>
          <div className="flex flex-row items-center justify-between">
            <Typography variant="h3">{project.role}</Typography>
            <Typography variant="h3">{project.period}</Typography>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {project.overview.map((paragraph, idx) => (
            <Typography key={idx} variant="p">
              {paragraph}
            </Typography>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="flex flex-col gap-5">
        <Typography variant="h1">stack</Typography>
        <div className="flex flex-row items-center gap-2 flex-wrap">
          {project.stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>

      {/* Contributions Section */}
      <div className="flex flex-col gap-5">
        <Typography variant="h1">contributions</Typography>
        <div className="flex flex-col gap-4">
          {project.contributions.map((item, idx) => (
            <div key={idx} className="flex flex-row items-start gap-4">
              <Typography
                variant="h2"
                className="w-4 shrink-0 pt-0.5 select-none"
              >
                {idx + 1}
              </Typography>
              <Typography variant="p" className="leading-[150%]">
                {item}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Showcase Section */}
      <div className="flex flex-col gap-5">
        <Typography variant="h1">showcase</Typography>
        <div className="flex flex-col gap-8">
          {project.showcase.map((spotlight, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-gradient-to-b from-muted/60 via-muted/30 to-muted/50 dark:from-muted/30 dark:via-muted/15 dark:to-muted/20 flex flex-col justify-between p-4 sm:p-5 select-none">
                {spotlight.media?.src ? (
                  <Image
                    src={spotlight.media.src}
                    alt={
                      spotlight.media.alt || spotlight.title || project.title
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover"
                  />
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="size-2 rounded-full bg-foreground/15" />
                        <div className="size-2 rounded-full bg-foreground/15" />
                        <div className="size-2 rounded-full bg-foreground/15" />
                      </div>
                      <div className="text-[10px] font-mono tracking-wider text-foreground/35 uppercase">
                        spotlight // {idx + 1} of {project.showcase.length}
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 text-center my-auto">
                      <div className="flex size-10 items-center justify-center rounded-lg border border-border/60 bg-background/50 backdrop-blur-xs text-foreground/40 shadow-xs">
                        <ImageIcon className="size-5" />
                      </div>
                      <span className="text-xs font-mono text-foreground/70">
                        {spotlight.title || `${project.title} Preview`}
                      </span>
                    </div>
                    <div className="h-2" />
                  </>
                )}
              </div>
              <div className="flex flex-row items-start gap-4">
                <Typography
                  variant="h3"
                  className="w-4 shrink-0 pt-0.5 select-none font-mono"
                >
                  {idx + 1}
                </Typography>
                <Typography
                  variant="p"
                  className="text-foreground/75 leading-[150%]"
                >
                  {spotlight.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Links Section */}
      <div className="flex flex-col gap-5">
        <Typography variant="h1">links</Typography>
        <div className="flex flex-row items-center gap-6 flex-wrap">
          {project.links.map(({ label, href }) => (
            <Typography
              key={label}
              variant="h4"
              asChild
              className="text-foreground/75 hover:text-foreground transition-colors cursor-pointer"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </Typography>
          ))}
        </div>
      </div>
    </main>
  );
}
