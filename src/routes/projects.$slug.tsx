import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { getProjectMeta } from "@/config/projects";
import { showGithub, siteConfig } from "@/config/site";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";
import { IncidentCard, MetricCard } from "@/components/site/cards";
import { BulletList, MetaRow, Section, StatusChip, Tag } from "@/components/site/primitives";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const description = project.summary;
    return {
      meta: [
        { title: `${project.name} — Infrastructure Case Study` },
        { name: "description", content: description },
        { property: "og:title", content: `${project.name} — Infrastructure Case Study` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${project.name} — Infrastructure Case Study`,
            description,
            about: project.coreTechnologies,
          }),
        },
      ],
    };
  },
  component: CaseStudy,
});

function SubSection({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-10 first:border-t-0">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-primary">{index}</span>
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug);
  const meta = getProjectMeta(project.slug);

  let n = 0;
  const idx = () => String(++n).padStart(2, "0");

  return (
    <>
      <section className="relative border-b border-border">
        <div className="grid-field pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <div className="relative max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" /> All case studies
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <StatusChip>{project.status}</StatusChip>
            <Tag>{project.label}</Tag>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl">{project.name}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.summary}
          </p>

          <dl className="mt-10 max-w-3xl">
            <MetaRow label="Project type" value={project.type} />
            <MetaRow label="Status" value={project.status} />
            <MetaRow label="Core technologies" value={project.coreTechnologies.join(" · ")} />
            <MetaRow label="Engineering focus" value={project.engineeringFocus.join(" · ")} />
          </dl>
        </div>
      </section>

      <div className="mx-auto w-full max-w-420 px-5 py-10 sm:px-8">
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-5">
          <nav aria-label="Case study sections" className="hidden lg:block">
            <div className="sticky top-24">
              <p className="label-mono">Contents</p>
              <ul className="mt-4 space-y-2">
                {[
                  { id: "problem", label: "Problem" },
                  { id: "requirements", label: "Requirements" },
                  { id: "constraints", label: "Constraints" },
                  { id: "architecture", label: "Architecture" },
                  { id: "networking", label: "Networking" },
                  ...project.sections.map((s) => ({ id: s.id, label: s.title })),
                  { id: "decisions", label: "Engineering Decisions" },
                  ...(meta?.metricsEnabled ? [{ id: "measurements", label: "Measurements" }] : []),
                  ...(meta?.incidents.length ? [{ id: "incidents", label: "Incidents" }] : []),
                  ...(meta?.limitations.length
                    ? [{ id: "limitations", label: "Limitations" }]
                    : []),
                  { id: "lessons", label: "Lessons Learned" },
                  { id: "future", label: "Future Improvements" },
                  { id: "implementation", label: "View Implementation" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div>
            <SubSection id="problem" index={idx()} title="Business Problem">
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.problem}
              </p>
            </SubSection>

            <SubSection id="requirements" index={idx()} title="Requirements">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="label-mono mb-3">Functional</p>
                  <BulletList items={project.requirements.functional} />
                </div>
                <div>
                  <p className="label-mono mb-3">Infrastructure</p>
                  <BulletList items={project.requirements.infrastructure} />
                </div>
              </div>
            </SubSection>

            <SubSection id="constraints" index={idx()} title="Constraints">
              <BulletList items={project.constraints} />
            </SubSection>

            <SubSection id="architecture" index={idx()} title="Architecture">
              <ArchitectureDiagram diagram={project.architecture} />
            </SubSection>

            <SubSection id="networking" index={idx()} title="Networking">
              <ArchitectureDiagram diagram={project.networkDiagram} />
            </SubSection>

            {project.sections.map((section) => (
              <SubSection key={section.id} id={section.id} index={idx()} title={section.title}>
                <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {section.summary}
                </p>
                <div className="mt-5">
                  <BulletList items={section.points} />
                </div>
                {section.id === "automation" ? (
                  <div className="mt-8">
                    <ArchitectureDiagram diagram={project.pipelineDiagram} compact />
                  </div>
                ) : null}
              </SubSection>
            ))}

            <SubSection id="decisions" index={idx()} title="Engineering Decisions">
              <div className="space-y-4">
                {project.decisions.map((d) => (
                  <article key={d.id} className="border border-border bg-surface">
                    <header className="flex flex-wrap items-center gap-3 border-b border-border px-5 py-3">
                      <span className="label-mono text-primary">{d.id}</span>
                      <h3 className="text-sm font-semibold tracking-tight">{d.decision}</h3>
                    </header>
                    <dl className="px-5 py-4">
                      <MetaRow label="Context" value={d.context} />
                      <MetaRow label="Options considered" value={d.options.join(" · ")} />
                      <MetaRow label="Chosen approach" value={d.chosen} />
                      <MetaRow label="Reason" value={d.reason} />
                      <MetaRow label="Trade-offs" value={d.tradeoffs} />
                    </dl>
                  </article>
                ))}
              </div>
            </SubSection>

            {meta?.metricsEnabled ? (
              <SubSection id="measurements" index={idx()} title="Measurements">
                {meta.metrics.length ? (
                  <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                    {meta.metrics.map((m) => (
                      <MetricCard key={m.label} metric={m} />
                    ))}
                  </div>
                ) : (
                  <p className="max-w-3xl border border-border bg-surface p-5 font-mono text-xs leading-relaxed text-muted-foreground">
                    {meta.metricsNote}
                  </p>
                )}
              </SubSection>
            ) : null}

            {meta?.incidents.length ? (
              <SubSection id="incidents" index={idx()} title="Failure & Recovery">
                <p className="mb-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  Failure scenarios exercised against this environment, each recorded from symptom
                  through to prevention.
                </p>
                <div className="space-y-4">
                  {meta.incidents.map((incident) => (
                    <IncidentCard key={incident.title} incident={incident} />
                  ))}
                </div>
              </SubSection>
            ) : null}

            {meta?.limitations.length ? (
              <SubSection id="limitations" index={idx()} title="Known Limitations">
                <p className="mb-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  What this build does not currently do, stated plainly.
                </p>
                <BulletList items={meta.limitations} />
              </SubSection>
            ) : null}

            <SubSection id="lessons" index={idx()} title="Lessons Learned">
              <BulletList items={project.lessons} />
            </SubSection>

            <SubSection id="future" index={idx()} title="Future Improvements">
              <BulletList items={project.future} />
            </SubSection>

            <SubSection id="implementation" index={idx()} title="Evidence">
              {project.repositories.length || meta?.githubUrl ? (
                <>
                  <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    This page explains the system. Verified links below provide the available
                    implementation evidence.
                  </p>
                  <ul className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-2">
                    {[
                      ...(meta?.githubUrl
                        ? [
                            {
                              kind: "Repository",
                              label: "Source & infrastructure code",
                              url: meta.githubUrl,
                            },
                          ]
                        : []),
                      ...(meta?.documentationUrl
                        ? [
                            {
                              kind: "Documentation",
                              label: "Technical documentation",
                              url: meta.documentationUrl,
                            },
                          ]
                        : []),
                      ...(meta?.demoUrl
                        ? [{ kind: "Demo", label: "Live environment", url: meta.demoUrl }]
                        : []),
                      ...project.repositories,
                    ].map((repo) => (
                      <li key={repo.label} className="bg-surface">
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-surface-2"
                        >
                          <span>
                            <span className="label-mono block">{repo.kind}</span>
                            <span className="mt-1 block text-sm">{repo.label}</span>
                          </span>
                          <ExternalLink
                            className="size-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="max-w-3xl border border-border bg-surface p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Implementation code for this build is not published yet. Work in progress is
                    available on GitHub, and documentation can be shared on request.
                  </p>
                  {showGithub ? (
                    <a
                      href={siteConfig.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary"
                    >
                      View general GitHub profile{" "}
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              )}
            </SubSection>
          </div>
        </div>
      </div>

      <Section eyebrow="Continue" title="Other case studies">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="bg-surface p-6 transition-colors hover:bg-surface-2"
            >
              <span className="label-mono">{p.type}</span>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
