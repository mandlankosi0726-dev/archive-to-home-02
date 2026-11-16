import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Check,
  CircleAlert,
  Cloud,
  Gauge,
  LockKeyhole,
  Network,
  Rocket,
  ServerCog,
  Settings2,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Section, Tag } from "@/components/site/primitives";
import { activeServices } from "@/config/services";
import { siteConfig } from "@/config/site";
import { projectWorkflow, whyArpScayl } from "@/config/commercial";
import { projects } from "@/data/projects";
import heroImage from "@/assets/ArpScayl-infrastructure-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ArpScayl Systems — Infrastructure Engineering, South Africa" },
      {
        name: "description",
        content:
          "Infrastructure engineering in South Africa: cloud infrastructure, DevOps automation, security hardening and systems architecture for reliable digital systems.",
      },
      { property: "og:title", content: "ArpScayl — Infrastructure Engineering" },
      {
        property: "og:description",
        content:
          "Secure, reliable and maintainable infrastructure for businesses and technology teams.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const problems = [
  "Infrastructure configured manually",
  "Deployments dependent on individual people",
  "Systems becoming difficult to maintain",
  "Weak infrastructure security",
  "Limited monitoring and operational visibility",
  "Growing cloud complexity",
  "Applications approaching production without proper infrastructure",
  "Infrastructure that cannot scale predictably",
];

const outcomes: Record<string, string> = {
  "Infrastructure Engineering":
    "Documented, observable environments your team can operate with confidence.",
  "Cloud Infrastructure":
    "A cloud footprint with a clear architecture, controlled access and predictable growth.",
  "DevOps & Automation":
    "Build reproducible infrastructure that deploys consistently across environments.",
  "Cybersecurity & Hardening":
    "A smaller attack surface and security controls built into the foundation.",
  "Containers & Platform Engineering":
    "Applications that deploy the same way every time, in every environment.",
  "Systems Architecture": "Design gaps found on paper — before they become production incidents.",
};

const serviceIcons = [ServerCog, Cloud, Workflow, ShieldCheck, Boxes, Network];
const workflowIcons = [Gauge, Settings2, Rocket, Check];

const engagements = [
  {
    title: "Infrastructure Assessment",
    text: "Understand the current environment, identify operational and security risks, and establish a practical improvement roadmap.",
    primary: true,
  },
  {
    title: "Infrastructure Architecture",
    text: "Design a production-ready infrastructure architecture around the actual business and application requirements.",
  },
  {
    title: "Infrastructure Implementation",
    text: "Turn the approved architecture into a functioning production environment.",
  },
  {
    title: "Deployment Automation",
    text: "Replace fragile manual deployment processes with repeatable, documented automation.",
  },
  {
    title: "Security Hardening",
    text: "Reduce infrastructure attack surface and establish stronger security controls.",
  },
  {
    title: "Ongoing Infrastructure Engineering",
    text: "Continuing infrastructure engineering capacity without requiring a full internal infrastructure team.",
  },
];
const assessmentDeliverables = [
  "Infrastructure assessment",
  "Architecture review",
  "Security observations",
  "Risk identification",
  "Improvement recommendations",
  "Prioritised roadmap",
];

const audiences = [
  "Businesses launching digital platforms",
  "Companies moving workloads into the cloud",
  "Startups approaching production",
  "Businesses whose infrastructure has become difficult to manage",
  "Development teams that need infrastructure expertise",
  "Companies requiring infrastructure security improvements",
  "Businesses scaling their digital operations",
  "Organisations requiring deployment automation",
];

const evidence = [
  "Architecture Diagrams",
  "Infrastructure as Code",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Cloud Architecture",
  "Security Controls",
  "Monitoring & Observability",
  "Infrastructure Testing",
  "Failure Testing",
  "Runbooks",
  "Architecture Decision Records",
  "GitHub Repositories",
];

const principleLines: Record<string, string> = {
  "Systems-First Engineering":
    "We start with the business and system requirements rather than forcing a technology onto the problem.",
  "Reproducible Infrastructure":
    "Infrastructure should be reproducible rather than dependent on undocumented manual configuration.",
  "Security by Design": "Security is part of architecture, not an afterthought.",
  "Operational Thinking": "A production system must be operable, observable and recoverable.",
  Documentation: "Important engineering decisions should be documented.",
  "Evidence-Based Engineering": "Technical capability should be demonstrated through evidence.",
};

const stack = [
  ["Operating systems", "Linux"],
  ["Cloud", "AWS"],
  ["Infrastructure as Code", "Terraform"],
  ["Containers", "Docker · Kubernetes"],
  ["Databases", "PostgreSQL"],
  ["Caching / messaging", "Redis"],
  ["Automation", "Python · Bash"],
  ["CI/CD", "GitHub Actions"],
  ["Networking", "TCP/IP · DNS · Routing"],
  ["Security", "IAM · TLS · Secrets · Hardening"],
];

function PrimaryCta({ label = siteConfig.ctas.primary }: { label?: string }) {
  return (
    <Link to="/contact" className="btn-primary">
      {label} <ArrowRight className="size-4" />
    </Link>
  );
}

function Home() {
  return (
    <>
      <section className="site-hero navy-band relative isolate overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
          className="pointer-events-none absolute inset-0 -z-20 size-full object-cover"
          aria-hidden
        />
        <div
          className="grid-field pointer-events-none absolute inset-0 -z-10 opacity-30"
          aria-hidden
        />
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_14px_var(--color-accent)]" />
            ArpScayl Systems · Johannesburg, South Africa
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-6xl">
            Engineering the infrastructure behind reliable digital systems.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            ArpScayl Systems designs, deploys, secures and improves the infrastructure that powers
            modern applications, platforms and business operations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryCta />
            <Link to="/projects" className="btn-outline">
              View Engineering Work <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {["Independent", "Founder-led", "Infrastructure engineering"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/50 bg-surface/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-foreground/75"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section
        className="bg-surface-2/40"
        eyebrow="01 — The problem"
        title="Is your technology becoming harder to operate?"
        intro="Most infrastructure problems build up quietly — until a release, an outage or growth exposes them."
      >
        <ul className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item) => (
            <li key={item} className="flex gap-3 bg-surface p-5 text-sm leading-relaxed">
              <CircleAlert
                className="mt-0.5 size-4 shrink-0 text-accent-foreground"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl border-l-2 border-primary pl-5 text-lg leading-relaxed">
          ArpScayl engineers the systems underneath your applications so your business can operate
          on a more reliable technical foundation.
        </p>
      </Section>

      <Section
        eyebrow="02 — What ArpScayl does"
        title="Six engineering capabilities. One outcome: dependable systems."
        intro="Technology is the implementation mechanism. Business reliability is the outcome."
      >
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {activeServices.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <article
                key={service.title}
                className="site-card flex flex-col border border-border bg-surface p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="icon-tile">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="label-mono mt-4">Problem</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {service.solves}
                </p>
                <p className="label-mono mt-4">Outcome</p>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-foreground/90">
                  {outcomes[service.title] ?? service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                  {service.technologies.map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryCta />
          <Link to="/services" className="btn-ghost">
            Service details <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="03 — Engagements"
        title="How We Can Work With Your Business"
        intro="Defined starting points. Scope, timing and commercial terms are confirmed after discovery."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
          {engagements
            .filter((e) => e.primary)
            .map((e) => (
              <article
                key={e.title}
                className="site-card flex flex-col border border-primary/40 bg-gradient-to-br from-primary/10 via-surface to-accent/10 p-6 sm:p-8"
              >
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">
                  <LockKeyhole className="size-4" aria-hidden="true" /> Recommended starting point
                </span>
                <h3 className="mt-3 text-2xl font-semibold">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {assessmentDeliverables.map((d) => (
                    <li key={d} className="flex gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <PrimaryCta />
                </div>
              </article>
            ))}
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {engagements
              .filter((e) => !e.primary)
              .map((e, i) => (
                <article key={e.title} className="site-card border border-border bg-surface p-5">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-base font-semibold">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                </article>
              ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="04 — Who we work with" title="Who We Work With">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {audiences.map((a) => (
              <li key={a} className="flex gap-3 border-b border-border py-3 text-sm">
                <span className="mt-2 size-1 shrink-0 bg-primary" aria-hidden="true" /> {a}
              </li>
            ))}
          </ul>
          <aside className="site-card flex flex-col justify-between border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-6">
            <div>
              <h3 className="text-xl font-semibold">Not sure what you need?</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Start with an infrastructure assessment.
              </p>
            </div>
            <div className="mt-6">
              <PrimaryCta label="Start an Assessment" />
            </div>
          </aside>
        </div>
      </Section>

      <Section
        eyebrow="05 — Engineering portfolio"
        title="Engineering case studies."
        intro="Engineering portfolio projects — not client deployments. Each documents context, architecture, security, failure scenarios and engineering decisions."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="mt-8">
          <Link to="/contact" className="btn-outline">
            Discuss a Project <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      <Section
        className="bg-surface-2/40"
        eyebrow="06 — Evidence"
        title="Engineering Evidence"
        intro="ArpScayl does not simply claim technical capability — it demonstrates it."
      >
        <ul className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
          {evidence.map((e) => (
            <li key={e}>
              <Link
                to="/evidence"
                className="group flex h-full min-h-24 flex-col justify-between gap-3 bg-surface p-4 text-sm transition-colors hover:bg-primary/5"
              >
                {e}
                <ArrowRight className="size-3.5 text-primary" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="07 — Process"
        title="Our Engineering Process"
        intro="Disciplined, documented, repeatable and accountable at every stage."
      >
        <ol className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {projectWorkflow.map((step, index) => {
            const Icon = workflowIcons[index % workflowIcons.length];
            return (
              <li key={step.title} className="site-card border border-border bg-surface p-5">
                <span className="icon-tile mb-4">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-2 text-sm font-semibold">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Section>

      <Section className="bg-surface-2/40" eyebrow="08 — Principles" title="How We Engineer">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {whyArpScayl.map((item) => (
            <article key={item.title} className="bg-surface p-6">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                {principleLines[item.title]}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="09 — Technology"
        title="Technology stack"
        intro="Technology selection is driven by system requirements, operational constraints and business objectives."
      >
        <dl className="grid gap-x-10 sm:grid-cols-2">
          {stack.map(([k, v]) => (
            <div
              key={k}
              className="flex flex-col gap-1 border-b border-border py-3 sm:flex-row sm:gap-6"
            >
              <dt className="label-mono sm:w-44 sm:shrink-0">{k}</dt>
              <dd className="text-sm text-foreground/90">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section eyebrow="10 — Leadership" title="Founder-led engineering practice">
        <div className="max-w-3xl">
          <p className="text-base font-semibold">{siteConfig.founder.name}</p>
          <p className="label-mono mt-1">{siteConfig.founder.title}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {siteConfig.founder.bio}
          </p>
          <Link to="/about" className="btn-ghost mt-6">
            About ArpScayl <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="label-mono">Next step</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold sm:text-4xl">
              Build on a more reliable technical foundation.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground">
              Tell us what you’re building, operating or trying to improve. We’ll recommend the
              appropriate next step. Email{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryCta />
            <Link to="/contact" className="btn-outline">
              Discuss a Project
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
