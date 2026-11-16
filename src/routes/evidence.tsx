import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { activeEvidenceAreas } from "@/config/skills";
import { showGithub, siteConfig } from "@/config/site";
import { EvidenceCard } from "@/components/site/cards";
import { Section } from "@/components/site/primitives";

export const Route = createFileRoute("/evidence")({
  head: () => ({
    meta: [
      { title: "Engineering Evidence — ArpScayl" },
      {
        name: "description",
        content:
          "Inspect ArpScayl architecture, infrastructure as code, networking, security, automation, container, CI/CD, monitoring and failure-testing work.",
      },
      { property: "og:title", content: "Engineering Evidence — ArpScayl" },
      {
        property: "og:description",
        content: "Inspectable technical work rather than unsupported marketing claims.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EvidencePage,
});
function EvidencePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="label-mono">Inspectable technical work</p>
          <h1 className="mt-5 text-3xl font-bold sm:text-5xl">Engineering Evidence</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Where appropriate, ArpScayl documents its engineering decisions, infrastructure
            implementations and technical experiments so that the work can be examined rather than
            simply described.
          </p>
        </div>
      </section>
      <Section
        eyebrow="01 — Evidence areas"
        title="Capability tied to implementation."
        intro="Current links point only to published material within this website. External repositories and demonstrations remain unpublished until verified."
      >
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {activeEvidenceAreas.map((area) => (
            <EvidenceCard key={area.id} area={area} />
          ))}
        </div>
      </Section>
      <Section className="bg-surface" eyebrow="02 — Source" title="Repositories and documentation">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          This catalogue links to engineering material available to inspect today. Each item is
          presented with its context and limitations so the evidence can be assessed on its merits.
        </p>
        {showGithub ? (
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary"
          >
            View current GitHub profile <ExternalLink className="size-4" />
          </a>
        ) : null}
      </Section>
    </>
  );
}
