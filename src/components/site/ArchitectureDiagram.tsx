import type { Diagram } from "@/data/types";

/**
 * Renders a vertical engineering flow diagram from structured data.
 * Replace a diagram by editing its `nodes` array in frontend/src/data/*, or swap this
 * component for an <img> of an exported diagram without changing callers.
 */
export function ArchitectureDiagram({
  diagram,
  compact = false,
}: {
  diagram: Diagram;
  compact?: boolean;
}) {
  return (
    <figure className="hairline rounded-md bg-surface">
      <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
        <figcaption className="label-mono">{diagram.title}</figcaption>
        <span className="label-mono hidden sm:inline">fig — flow</span>
      </div>

      <ol className={compact ? "space-y-0 p-4" : "space-y-0 p-4 sm:p-6"}>
        {diagram.nodes.map((node, i) => (
          <li key={node.label}>
            {node.boundary ? (
              <div className="mb-3 flex items-center gap-3">
                <span className="label-mono text-primary">{node.boundary}</span>
                <span className="h-px flex-1 border-t border-dashed border-border-strong" />
              </div>
            ) : null}

            <div className="flex flex-col gap-2 rounded-sm border border-border bg-surface-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold tracking-tight">{node.label}</span>
              </div>
              {node.detail ? (
                <span className="font-mono text-xs text-muted-foreground sm:max-w-[55%] sm:text-right">
                  {node.detail}
                </span>
              ) : null}
            </div>

            {node.side?.length ? (
              <div className="mt-2 flex flex-wrap gap-2 pl-8">
                {node.side.map((s) => (
                  <span
                    key={s}
                    className="label-mono rounded-sm border border-dashed border-border-strong px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            ) : null}

            {i < diagram.nodes.length - 1 ? (
              <div className="flex flex-col items-center py-2" aria-hidden="true">
                <span className="h-5 w-px bg-border-strong" />
                <span className="-mt-1 font-mono text-[10px] leading-none text-border-strong">
                  ▼
                </span>
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      {diagram.caption ? (
        <p className="border-t border-border px-4 py-3 font-mono text-xs text-muted-foreground">
          {diagram.caption}
        </p>
      ) : null}
    </figure>
  );
}
