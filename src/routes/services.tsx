import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { activeServices, engagementNote, supportingCapabilities } from "@/config/services";
import { projectWorkflow, servicePackages } from "@/config/commercial";
import { ServiceCard } from "@/components/site/cards";
import { BulletList, Section, Tag } from "@/components/site/primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Infrastructure Engineering Services — ArpScayl" },
      {
        name: "description",
        content:
          "Infrastructure assessments, architecture, builds, deployment automation, security hardening and ongoing infrastructure support.",
      },
      { property: "og:title", content: "Infrastructure Engineering Services — ArpScayl" },
      {
        property: "og:description",
        content: "Technical capabilities and clearly defined ways to engage ArpScayl.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-425 px-5 py-16 sm:px-8 sm:py-20">
          <p className="label-mono">Services</p>
          <h1 className="mt-5 text-3xl font-bold sm:text-5xl">
            Infrastructure engineering with defined outputs.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            ArpScayl connects technical capability to specific infrastructure outcomes, from
            assessment and architecture through implementation, verification and handover.
          </p>
        </div>
      </section>
      <Section
        eyebrow="01 — Technical capability"
        title="Core Services"
        intro="The six engineering disciplines that underpin each engagement."
      >
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {activeServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <div className="mt-8 border border-border bg-surface p-6">
          <p className="label-mono">Supporting capabilities</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {supportingCapabilities.map((capability) => (
              <Tag key={capability}>{capability}</Tag>
            ))}
          </div>
          <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
            {engagementNote}
          </p>
        </div>
      </Section>
      <Section
        eyebrow="02 — Engagement packages"
        title="How We Can Engage"
        intro="These packages provide a practical starting point. Final scope and terms are established after discovery."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {servicePackages.map((service, index) => (
            <article key={service.title} className="border border-border bg-surface p-6">
              <span className="font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.purpose}
              </p>
              <div className="mt-5 border-t border-border pt-5">
                <p className="label-mono mb-3">Potential deliverables</p>
                <BulletList items={[...service.deliverables]} />
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                Timing and commercial terms available after scoping.
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="03 — Process"
        title="Our Engineering Process"
        intro="A disciplined, documented path from discovery to handover and support."
      >
        <ol className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {projectWorkflow.map((step, index) => (
            <li key={step.title} className="bg-surface p-5">
              <span className="font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-sm font-semibold">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>
      <Section className="bg-surface">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="label-mono">Next step</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Start with an infrastructure assessment.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              Describe the current environment and the main concern. ArpScayl will determine the
              appropriate next step.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-primary px-5 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground"
          >
            Request an Assessment <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
