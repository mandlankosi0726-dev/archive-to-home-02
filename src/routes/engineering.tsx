import { createFileRoute } from "@tanstack/react-router";
import { engineeringDocs, labs, lifecycle, principles } from "@/data/site";
import { BulletList, MetaRow, Section, Tag } from "@/components/site/primitives";

export const Route = createFileRoute("/engineering")({
  head: () => ({
    meta: [
      { title: "Engineering Approach — Principles & Methodology" },
      {
        name: "description",
        content:
          "Documented labs, architecture decision records, troubleshooting investigations, automation, security design and operational runbooks.",
      },
      { property: "og:title", content: "Engineering Approach — Principles & Methodology" },
      {
        property: "og:description",
        content:
          "How infrastructure is designed, tested against failure, automated, secured and documented.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/engineering" },
    ],
    links: [{ rel: "canonical", href: "/engineering" }],
  }),
  component: EngineeringPage,
});

function EngineeringPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-425 px-5 py-16 sm:px-8 sm:py-20">
          <p className="label-mono">Engineering knowledge base</p>
          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Engineering Approach
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            The reasoning, experiments and documentation behind the systems ArpScayl designs. Labs
            are run to observe behaviour under failure, not to collect technologies.
          </p>
        </div>
      </section>

      <Section
        eyebrow="01 — Principles"
        title="Engineering Principles"
        intro="The positions that shape every design decision ArpScayl records on this site."
      >
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {principles.map((p, i) => (
            <article key={p.title} className="bg-surface p-6">
              <span className="font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="lifecycle"
        eyebrow="02 — Lifecycle"
        title="Infrastructure Lifecycle"
        intro="The repeatable sequence applied from requirements through to continuous improvement."
      >
        <ol className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {lifecycle.map((step) => (
            <li key={step.index} className="bg-surface p-5">
              <span className="font-mono text-xs text-primary">{step.index}</span>
              <h3 className="mt-2 text-sm font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                {step.note}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="labs"
        eyebrow="03 — Labs"
        title="Labs & Failure Experiments"
        intro="Each lab records objective, environment, what was tested, what happened and what it changed about the way ArpScayl designs systems."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {labs.map((lab) => (
            <article key={lab.slug} className="border border-border bg-surface">
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="label-mono">{lab.title}</span>
                <Tag>{lab.label}</Tag>
              </div>
              <dl className="px-5 pb-5">
                <MetaRow label="Objective" value={lab.objective} />
                <MetaRow label="Environment" value={lab.environment} />
                <MetaRow label="Experiment" value={lab.experiment} />
                <MetaRow label="Result" value={lab.result} />
                <div className="flex flex-col gap-1 pt-3 sm:flex-row sm:items-baseline sm:gap-6">
                  <dt className="label-mono text-primary sm:w-44 sm:shrink-0">What we learned</dt>
                  <dd className="text-sm text-foreground/90">{lab.learned}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="documentation"
        eyebrow="04 — Documentation"
        title="Engineering Documentation"
        intro="Decision records, troubleshooting write-ups, security design notes, automation and runbooks. Placeholder entries below are structured so real artefacts can replace them directly."
      >
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {engineeringDocs.map((doc) => (
            <article
              key={doc.title}
              className="bg-surface p-6"
              id={doc.title.toLowerCase().split(" ")[0]}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base font-semibold tracking-tight">{doc.title}</h3>
                <Tag>{doc.label}</Tag>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{doc.summary}</p>
              <div className="mt-5 border-t border-border pt-4">
                <BulletList items={doc.items} />
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
