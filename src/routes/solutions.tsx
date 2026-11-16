import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/config/solutions";
import { BulletList, Section, Tag } from "@/components/site/primitives";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Infrastructure Solutions for Business Situations — ArpScayl" },
      {
        name: "description",
        content:
          "Engineering approaches for new platforms, infrastructure modernisation, cloud migration, deployment improvement, security and growth.",
      },
      { property: "og:title", content: "Infrastructure Solutions — ArpScayl" },
      {
        property: "og:description",
        content:
          "Connect infrastructure engineering services to the situation your business needs to address.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-425 px-5 py-16 sm:px-8 sm:py-20">
          <p className="label-mono">Business situations</p>
          <h1 className="mt-5 text-3xl font-bold sm:text-5xl">
            Infrastructure solutions tied to the problem.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Begin with what the organisation is building or trying to improve. The engineering
            approach follows the actual constraints.
          </p>
        </div>
      </section>
      <Section eyebrow="01 — Solutions" title="Choose the situation closest to yours.">
        <div className="space-y-6">
          {solutions.map((solution, index) => (
            <article key={solution.id} className="border border-border bg-surface">
              <header className="border-b border-border p-6">
                <span className="font-mono text-xs text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-xl font-semibold">{solution.title}</h2>
              </header>
              <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-surface p-5">
                  <p className="label-mono">Problem</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {solution.problem}
                  </p>
                </div>
                <div className="bg-surface p-5">
                  <p className="label-mono">Typical situation</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {solution.situation}
                  </p>
                </div>
                <div className="bg-surface p-5">
                  <p className="label-mono">Engineering approach</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {solution.approach}
                  </p>
                </div>
                <div className="bg-surface p-5">
                  <p className="label-mono mb-3">Potential deliverables</p>
                  <BulletList items={solution.deliverables} />
                </div>
              </div>
              <footer className="flex flex-col justify-between gap-4 border-t border-border p-5 sm:flex-row sm:items-center">
                <div className="flex flex-wrap gap-2">
                  {solution.services.map((service) => (
                    <Tag key={service}>{service}</Tag>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary"
                >
                  Discuss this situation <ArrowRight className="size-3.5" />
                </Link>
              </footer>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
