import { Link } from "@tanstack/react-router";
import { ArrowRight, Boxes } from "lucide-react";
import type { Project } from "@/data/types";
import { getProjectMeta } from "@/config/projects";
import { Tag } from "./primitives";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const meta = getProjectMeta(project.slug);
  const status = meta?.status ?? project.status;
  const kind = meta?.kind ?? project.label;
  const categories = meta?.categories ?? project.engineeringFocus;
  const technologies = meta?.keyTechnologies ?? project.tags;

  return (
    <article className="site-card group flex h-full flex-col overflow-hidden border border-border bg-surface">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-surface-2/70 px-5 py-3">
        <span className="label-mono">
          {String(index + 1).padStart(2, "0")} / {kind}
        </span>
        <span className="label-mono text-primary">{status}</span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="icon-tile mb-4"><Boxes className="size-5" aria-hidden="true" /></span>
        <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {meta?.oneLiner ?? project.summary}
        </p>

        <dl className="mt-5 space-y-2 border-y border-border py-4 font-mono text-xs text-muted-foreground">
          <div className="flex gap-3">
            <dt className="w-24 shrink-0 uppercase tracking-widest">Focus</dt>
            <dd className="text-foreground/80">{categories.join(" · ")}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-24 shrink-0 uppercase tracking-widest">Status</dt>
            <dd className="text-foreground/80">{status}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="mt-6 inline-flex items-center gap-2 self-start border-b border-primary/50 pb-1 font-mono text-xs uppercase tracking-widest text-primary transition-colors hover:border-primary"
        >
          View Case Study
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
