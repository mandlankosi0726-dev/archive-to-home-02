import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("editorial-section border-t border-border", className)}>
      <div className="mx-auto w-full max-w-425 px-6 py-16 sm:px-8 sm:py-24">
        {eyebrow ? <p className="label-mono mb-4 text-primary">{eyebrow}</p> : null}
        {title ? (
          <h2 className="max-w-3xl text-[28px] font-bold leading-tight sm:text-4xl">{title}</h2>
        ) : null}
        {intro ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {intro}
          </p>
        ) : null}
        {children ? <div className={title || intro ? "mt-10" : ""}>{children}</div> : null}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="label-mono rounded-sm border border-border bg-surface-2 px-2 py-1 text-foreground/80">
      {children}
    </span>
  );
}

export function StatusChip({ children }: { children: ReactNode }) {
  return (
    <span className="label-mono inline-flex items-center gap-2 rounded-sm border border-primary/40 px-2 py-1 text-primary">
      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
      {children}
    </span>
  );
}

export function MetaRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-border py-3 sm:flex-row sm:items-baseline sm:gap-6">
      <dt className="label-mono sm:w-44 sm:shrink-0">{label}</dt>
      <dd className="text-sm text-foreground/90">{value}</dd>
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-2 size-1 shrink-0 bg-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
