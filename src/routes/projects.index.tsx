import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Section } from "@/components/site/primitives";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Infrastructure Engineering" },
      {
        name: "description",
        content:
          "Infrastructure case studies covering cloud architecture, networking, containers, security, automation and operational reliability.",
      },
      { property: "og:title", content: "Case Studies — Infrastructure Engineering" },
      {
        property: "og:description",
        content:
          "Three documented platforms: insurance, tourism and e-commerce infrastructure architecture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className=" mx-auto max-w-425 px-5 py-16 sm:px-8 sm:py-20">
          <p className="label-mono">Case study index</p>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Engineering Case Studies
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Internal engineering simulations designed to demonstrate infrastructure architecture,
            implementation, security, automation and operational thinking. They are not presented as
            client or production deployments.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <p className="label-mono mt-8">
          Each case study follows the same structure: problem → constraints → architecture →
          security → automation → operations → decisions.
        </p>
      </Section>
    </>
  );
}
