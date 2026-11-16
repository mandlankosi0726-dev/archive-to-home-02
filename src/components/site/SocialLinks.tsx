import { Github, Linkedin, Mail } from "lucide-react";
import { showGithub, showLinkedin, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "icon";

const base =
  "inline-flex items-center gap-2 rounded-sm font-mono text-xs uppercase tracking-widest transition-colors";

const styles: Record<Variant, string> = {
  solid: "bg-primary px-5 py-3 text-primary-foreground hover:opacity-90",
  outline:
    "border border-border-strong px-4 py-2.5 text-foreground hover:border-primary hover:text-primary",
  icon: "size-9 justify-center border border-border text-muted-foreground hover:border-primary hover:text-primary",
};

/**
 * Renders GitHub / LinkedIn / CV / email links from frontend/src/config/site.ts.
 * Any link with an empty configuration value is not rendered at all.
 */
export function SocialLinks({
  variant = "outline",
  includeEmail = false,
  className,
}: {
  variant?: Variant;
  includeEmail?: boolean;
  className?: string;
}) {
  const iconOnly = variant === "icon";

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {showGithub ? (
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub profile"
          className={cn(base, styles[variant])}
        >
          <Github className="size-4" aria-hidden="true" />
          {iconOnly ? null : "GitHub"}
        </a>
      ) : null}

      {showLinkedin ? (
        <a
          href={siteConfig.linkedinUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn profile"
          className={cn(base, styles[variant])}
        >
          <Linkedin className="size-4" aria-hidden="true" />
          {iconOnly ? null : "LinkedIn"}
        </a>
      ) : null}

      {includeEmail ? (
        <a
          href={`mailto:${siteConfig.email}`}
          aria-label="Send an email"
          className={cn(base, styles[variant])}
        >
          <Mail className="size-4" aria-hidden="true" />
          {iconOnly ? null : "Email"}
        </a>
      ) : null}
    </div>
  );
}
