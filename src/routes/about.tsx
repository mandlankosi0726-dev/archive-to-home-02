import { createFileRoute } from "@tanstack/react-router";
import { Section, Tag } from "@/components/site/primitives";
import { publishedBusinessInfo, whyArpScayl } from "@/config/commercial";
import { engineeringCapabilities, showGithub, siteConfig } from "@/config/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ArpScayl — Infrastructure Engineering Practice" },
      {
        name: "description",
        content:
          "ArpScayl is an independent infrastructure engineering practice based in Johannesburg, focused on reliable, secure and maintainable systems.",
      },
      { property: "og:title", content: "About ArpScayl" },
      {
        property: "og:description",
        content:
          "An independent practice built around systems thinking, operational clarity and inspectable technical evidence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
function AboutPage() {
  const facts = [
    { label: "Location", value: siteConfig.location },
    { label: "Email", value: siteConfig.email },
    ...publishedBusinessInfo,
  ];
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-425 px-5 py-16 sm:px-8 sm:py-20">
          <p className="label-mono">About the practice</p>
          <h1 className="mt-5 text-3xl font-bold sm:text-5xl">About ArpScayl</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            ArpScayl is an independent infrastructure engineering practice focused on cloud systems,
            automation, security and reliable application platforms. Technology is approached as an
            interconnected system rather than a collection of isolated tools.
          </p>
        </div>
      </section>
      <Section eyebrow="01 — Principles" title="Why ArpScayl">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {whyArpScayl.map((item, index) => (
            <article key={item.title} className="bg-surface p-5">
              <span className="font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="02 — Founder" title={siteConfig.founder.title}>
        <div className="border border-border bg-surface p-6 sm:p-8">
          <h3 className="text-2xl font-semibold">{siteConfig.founder.name}</h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {siteConfig.founder.bio}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {showGithub ? (
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-xs uppercase tracking-widest text-primary"
              >
                GitHub
              </a>
            ) : null}
            {siteConfig.linkedinUrl ? (
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-xs uppercase tracking-widest text-primary"
              >
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </Section>
      <Section eyebrow="03 — Capability" title="Systems depth">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {engineeringCapabilities.map((capability) => (
            <article key={capability.title} className="bg-surface p-5">
              <h3 className="text-sm font-semibold">{capability.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {capability.technologies.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="04 — Business information" title="Verified details">
        <dl className="max-w-2xl border border-border bg-surface px-5">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col gap-1 border-b border-border py-4 last:border-b-0 sm:flex-row sm:gap-6"
            >
              <dt className="label-mono sm:w-40">{fact.label}</dt>
              <dd className="text-sm text-muted-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-muted-foreground">
          Registration, address and tax details are not displayed until verified.
        </p>
      </Section>
    </>
  );
}
