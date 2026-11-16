import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Cloud,
  ExternalLink,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { Incident, Metric } from "@/config/projects";
import type { Certification } from "@/config/certifications";
import type { EvidenceArea } from "@/config/skills";
import type { ServiceConfig } from "@/config/services";
import { Tag } from "./primitives";

export function EvidenceCard({ area }: { area: EvidenceArea }) {
  return (
    <article className="flex flex-col bg-surface p-6">
      <h3 className="text-base font-semibold tracking-tight">{area.category}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.description}</p>

      <p className="label-mono mt-5">Evidence</p>
      <ul className="mt-3 flex flex-1 flex-wrap gap-2">
        {area.evidence.map((e) => (
          <li key={e}>
            <Tag>{e}</Tag>
          </li>
        ))}
      </ul>

      {area.links.length ? (
        <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4">
          {area.links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary"
            >
              {l.label} <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="bg-surface p-5">
      <p className="label-mono">{metric.label}</p>
      <p className="mt-2 font-mono text-lg text-primary">{metric.value}</p>
    </div>
  );
}

export function IncidentCard({ incident }: { incident: Incident }) {
  const rows = [
    ["Symptom", incident.symptom],
    ["Investigation", incident.investigation],
    ["Root cause", incident.rootCause],
    ["Resolution", incident.resolution],
    ["Prevention", incident.prevention],
  ] as const;

  return (
    <article className="border border-border bg-surface">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-3">
        <h3 className="text-sm font-semibold tracking-tight">{incident.title}</h3>
        <span className="label-mono text-primary">
          {incident.simulated ? "Simulated failure" : "Encountered"}
        </span>
      </header>
      <dl className="px-5 py-2">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex flex-col gap-1 border-b border-border py-3 last:border-b-0 sm:flex-row sm:gap-6"
          >
            <dt className="label-mono sm:w-36 sm:shrink-0">{label}</dt>
            <dd className="text-sm leading-relaxed text-muted-foreground">{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <article className="bg-surface p-5">
      <h3 className="text-sm font-semibold tracking-tight">{certification.name}</h3>
      <p className="label-mono mt-2">
        {certification.issuer} · {certification.date}
      </p>
      {certification.credentialUrl ? (
        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary"
        >
          Verify credential <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      ) : null}
    </article>
  );
}

export function ServiceCard({ service, index }: { service: ServiceConfig; index: number }) {
  const ServiceIcon = [ServerCog, Cloud, Workflow, ShieldCheck, Boxes, Network][index % 6];
  return (
    <article className="site-card flex flex-col border border-border bg-surface p-6">
      <div className="flex items-start justify-between">
        <span className="icon-tile"><ServiceIcon className="size-5" aria-hidden="true" /></span>
        <span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-5 text-base font-semibold tracking-tight">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.solves}</p>

      <p className="label-mono mt-5">Typical deliverables</p>
      <ul className="mt-3 flex-1 space-y-2">
        {service.deliverables.map((d) => (
          <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 size-1 shrink-0 bg-primary" aria-hidden="true" />
            <span>{d}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
        {service.technologies.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </article>
  );
}
