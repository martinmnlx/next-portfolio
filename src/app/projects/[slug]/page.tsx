import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";
import { FormattedText } from "@/components/ui/formatted-text";
import { PROJECTS, getProjectBySlug, type ProjectVideo } from "@/data/projects";
import { Undo2 } from "lucide-react";
import { ShowcaseGallery } from "@/components/ui/showcase-gallery";

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
    description: project.overview[0]?.replace(/\*\*/g, ""),
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const videoData: ProjectVideo | null = project.video
    ? typeof project.video === "string"
      ? { src: project.video }
      : project.video
    : null;

  return (
    <main className="flex flex-col w-full md:w-160 px-5 gap-10">
      {/* Top Header & Project Identity */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center gap-5">
          <Typography variant="h1">project</Typography>
          <Link
            href="/"
            className="group inline-flex items-center text-xs font-mono tracking-wider lowercase text-foreground/50 hover:text-foreground transition-colors cursor-pointer"
          >
            <span>back</span>
            <span className="inline-flex items-center justify-center overflow-hidden w-0 opacity-0 -translate-x-1.5 transition-all duration-200 ease-out group-hover:w-3.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-1">
              <Undo2 className="size-3 shrink-0" />
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex flex-row items-center justify-between">
            <ViewTransition name={`project-title-${project.slug}`}>
              <Typography variant="h4">{project.title}</Typography>
            </ViewTransition>
            {/* <Typography variant="h3">{project.period}</Typography> */}
          </div>
          <div className="flex flex-row items-center gap-2">
            <ViewTransition name={`project-badge-${project.slug}`}>
              <Badge variant="mono">{project.type}</Badge>
            </ViewTransition>
            <ViewTransition name={`project-role-${project.slug}`}>
              <Typography variant="p">{project.role}</Typography>
            </ViewTransition>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="flex flex-col gap-5">
        <Typography variant="h1">overview</Typography>
        <div className="flex flex-col gap-3">
          {project.overview.map((paragraph, idx) => (
            <div key={idx} className="flex flex-row items-start">
              <Typography variant="p" className="leading-[150%]">
                <FormattedText text={paragraph} />
              </Typography>
            </div>
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
        <div className="flex flex-col gap-3">
          {project.contributions.map((item, idx) => (
            <div key={idx} className="flex flex-row items-start">
              <Typography variant="h2" className="w-10 shrink-0 select-none">
                {idx + 1}
              </Typography>
              <Typography variant="p" className="leading-[150%]">
                <FormattedText text={item} />
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Showcase Section */}
      {(videoData || (project.showcase && project.showcase.length > 0)) && (
        <div className="flex flex-col gap-5">
          <Typography variant="h1">showcase</Typography>
          {videoData ? (
            <div className="flex flex-col gap-5">
              <div className="relative w-full aspect-16/10 rounded-lg overflow-hidden border border-border bg-black shadow-xs">
                <video
                  src={videoData.src}
                  poster={videoData.poster}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              {(videoData.title || videoData.description) && (
                <div className="flex flex-row items-start gap-5">
                  <div className="flex flex-col gap-1">
                    {videoData.title && (
                      <Typography variant="p" className="text-foreground/75">
                        {videoData.title}
                      </Typography>
                    )}
                    {videoData.description && (
                      <Typography variant="p" className="leading-[150%]">
                        <FormattedText text={videoData.description} />
                      </Typography>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : project.showcase && project.showcase.length > 0 ? (
            <ShowcaseGallery
              items={project.showcase}
              projectTitle={project.title}
            />
          ) : null}
        </div>
      )}

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
