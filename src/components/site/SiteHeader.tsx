import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import { Brand } from "./Brand";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 shadow-[0_8px_24px_-22px_var(--color-foreground)] backdrop-blur-lg">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        <Link to="/" aria-label="ArpScayl home" onClick={() => setOpen(false)}>
          <Brand />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest text-primary-foreground shadow-md shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90 xl:inline-flex"
        >
          Request an Infrastructure Assessment <ArrowUpRight className="size-3.5" />
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="flex size-10 items-center justify-center border border-border text-muted-foreground xl:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>
      {open ? (
        <nav aria-label="Mobile" className="border-t border-border bg-surface xl:hidden">
          <ul className="mx-auto max-w-7xl px-5 py-2">
            {navigation.map((item) => (
              <li key={item.to} className="border-b border-border last:border-b-0">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground"
            >
              Request an Infrastructure Assessment <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
