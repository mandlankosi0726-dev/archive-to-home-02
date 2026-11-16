import { cn } from "@/lib/utils";
import logoSymbol from "@/assets/arpscayl-logo-symbol.png";

export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src={logoSymbol}
      role="img"
      aria-label="ArpScayl logo"
      alt="ArpScayl mark"
      className={cn("h-10 w-14 object-contain", className)}
    />
  );
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-logo inline-flex flex-col gap-2">
      <span className="flex items-center gap-3">
        <BrandMark className="shrink-0" />
        <span className="border-l border-primary/40 pl-3 leading-none">
          <span className="block font-display text-2xl font-extrabold">ArpScayl</span>
          <span className="brand-systems mt-1.5 block font-display text-[10px] font-semibold uppercase text-primary">
            Systems
          </span>
        </span>
      </span>
      {!compact ? (
        <span className="brand-tagline text-[7px] font-bold text-muted-foreground">
          BUILD • DEPLOY • SECURE • SCALE
        </span>
      ) : null}
    </span>
  );
}
