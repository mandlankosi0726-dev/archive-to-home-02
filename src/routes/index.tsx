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
  Hand,
  UserRound,
  Puzzle,
  ShieldAlert,
  Eye,
  CloudCog,
  Construction,
  TrendingUp,
  Search,
  DraftingCompass,
  Hammer,
  RefreshCw,
  Shield,
  Infinity as InfinityIcon,
  Rocket as Launch,
  CloudUpload,
  Code2,
  Users,
  Lock,
  BarChart3,
  GitBranch,
  FileCode2,
  Container,
  Ship,
  GitMerge,
  Activity,
  FlaskConical,
  Zap,
  BookOpen,
  FileText,
  Github,
  Target,
  Repeat,
  Terminal,
  Cpu,
  Database,
  Layers,
  Network as NetIcon,
  KeyRound,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
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
const workflowIcons = [Search, DraftingCompass, Rocket, Check];
const tones = ["tone-teal", "tone-sky", "tone-amber", "tone-coral", "tone-emerald", "tone-gold"];
const toneOf = (i: number) => tones[i % tones.length];
const problemIcons: LucideIcon[] = [Hand, UserRound, Puzzle, ShieldAlert, Eye, CloudCog, Construction, TrendingUp];
const engagementIcons: LucideIcon[] = [Search, DraftingCompass, Hammer, RefreshCw, Shield, InfinityIcon];
const audienceIcons: LucideIcon[] = [Launch, CloudUpload, Rocket, Settings2, Code2, Lock, BarChart3, GitBranch];
const evidenceIcons: LucideIcon[] = [DraftingCompass, FileCode2, Container, Ship, GitMerge, Cloud, ShieldCheck, Activity, FlaskConical, Zap, BookOpen, FileText, Github];
const principleIcons: LucideIcon[] = [Target, Repeat, ShieldCheck, Gauge, BookOpen, FlaskConical];
const stackIcons: LucideIcon[] = [Terminal, Cloud, FileCode2, Container, Database, Layers, Cpu, GitMerge, NetIcon, KeyRound];

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
        <div className="hero-glow -top-24 right-0 size-[28rem] bg-tone-teal" aria-hidden />
        <div className="hero-glow -bottom-32 left-1/3 size-[22rem] bg-tone-amber [animation-delay:-6s]" aria-hidden />
        <div
          className="hero-ring pointer-events-none absolute -right-32 top-1/2 z-0 hidden size-[30rem] -translate-y-1/2 rounded-full border border-dashed border-tone-teal/30 lg:block"
          aria-hidden
        >
          <span className="hero-node absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tone-teal" />
          <span className="hero-node absolute bottom-[8%] right-[14%] size-1.5 rounded-full bg-tone-amber [animation-delay:-1.6s]" />
        </div>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
            <span className="relative flex size-2">
              <span className="hero-ping absolute inline-flex size-full rounded-full bg-accent" />
              <span className="relative inline-flex size-2 rounded-full bg-accent shadow-[0_0_14px_var(--color-accent)]" />
            </span>
            ArpScayl Systems · Johannesburg, South Africa
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-6xl">
            Engineering the infrastructure behind <span className="text-gradient">reliable digital systems.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            ArpScayl Systems designs, deploys, secures and improves the infrastructure that powers
            modern applications, platforms and business operations — built for small, growing and
            medium businesses that need enterprise-grade reliability without an enterprise-sized
            team.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryCta />
            <Link to="/projects" className="btn-outline">
              View Engineering Work <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              [Sparkles, "Independent"],
              [Users, "Founder-led"],
              [ServerCog, "For small to medium businesses"],
            ].map(([Icon, item]) => (
              <span
                key={item as string}
                className="rounded-full border border-border/50 bg-surface/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-foreground/75 inline-flex items-center gap-1.5"
              >
                {(() => { const I = Icon as LucideIcon; return <I className="size-3 text-accent" aria-hidden />; })()}
                {item as string}
              </span>
            ))}
          </div>
        </div>
        <div className="relative border-t border-border/40 py-4" aria-hidden>
          <div className="hero-marquee gap-10 px-5">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-10">
                {[
                  "Cloud Infrastructure",
                  "DevOps Automation",
                  "Security Hardening",
                  "Kubernetes",
                  "Terraform",
                  "CI/CD Pipelines",
                  "Monitoring & Observability",
                  "Systems Architecture",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50"
                  >
                    {item}
                    <span className="size-1 rounded-full bg-tone-teal/70" />
                  </span>
                ))}
              </div>
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
          {problems.map((item, i) => {
            const Icon = problemIcons[i] ?? CircleAlert;
            return (
            <li key={item} className={`group flex items-start gap-3 bg-surface p-5 text-sm leading-relaxed transition-colors hover:bg-soft ${toneOf(i + 3)}`}>
              <span className="icon-tile size-9! shrink-0">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span className="pt-1.5">{item}</span>
            </li>
            );
          })}
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
                className={`site-card flex flex-col border border-border bg-surface p-6 ${toneOf(index)}`}
              >
                <div className="flex items-start justify-between">
                  <span className="icon-tile">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="tone-text font-mono text-xs">
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
                className="site-card flex flex-col border border-primary/40 bg-gradient-to-br from-tone-teal/15 via-surface to-tone-amber/20 p-6 sm:p-8"
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
                <article key={e.title} className={`site-card border border-border bg-surface p-5 ${toneOf(i + 1)}`}>
                  <div className="flex items-center justify-between">
                    {(() => { const Icon = engagementIcons[i + 1]; return <span className="icon-tile"><Icon className="size-5" aria-hidden="true" /></span>; })()}
                    <span className="tone-text font-mono text-xs">{String(i + 2).padStart(2, "0")}</span>
                  </div>
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
            {audiences.map((a, i) => {
              const Icon = audienceIcons[i];
              return (
                <li key={a} className={`group flex items-center gap-3 border-b border-border py-3 text-sm transition-transform hover:translate-x-1 ${toneOf(i)}`}>
                  <Icon className="tone-text size-4 shrink-0" aria-hidden="true" /> {a}
                </li>
              );
            })}
          </ul>
          <aside className="site-card flex flex-col justify-between border border-border bg-gradient-to-br from-tone-sky/15 to-tone-amber/20 p-6">
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
          {evidence.map((e, i) => {
            const Icon = evidenceIcons[i];
            return (
            <li key={e}>
              <Link
                to="/evidence"
                className={`group flex h-full min-h-28 flex-col justify-between gap-3 bg-surface p-4 text-sm transition-colors hover:bg-soft ${toneOf(i)}`}
              >
                <span className="icon-tile size-9!"><Icon className="size-4" aria-hidden="true" /></span>
                <span className="flex items-center justify-between gap-2">
                  {e}
                  <ArrowRight className="tone-text size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </li>
            );
          })}
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
              <li key={step.title} className={`site-card border border-border bg-surface p-5 ${toneOf(index)}`}>
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
          {whyArpScayl.map((item, i) => (
            <article key={item.title} className={`site-card bg-surface p-6 ${toneOf(i)}`}>
              {(() => { const Icon = principleIcons[i % principleIcons.length]; return <span className="icon-tile mb-4"><Icon className="size-5" aria-hidden="true" /></span>; })()}
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
          {stack.map(([k, v], i) => (
            <div
              key={k}
              className={`flex flex-col gap-1 border-b border-border py-3 sm:flex-row sm:items-center sm:gap-6 ${toneOf(i)}`}
            >
              <dt className="label-mono flex items-center gap-2 sm:w-52 sm:shrink-0">
                {(() => { const Icon = stackIcons[i]; return <Icon className="tone-text size-4" aria-hidden="true" />; })()}
                {k}
              </dt>
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

      <Section className="bg-soft">
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
