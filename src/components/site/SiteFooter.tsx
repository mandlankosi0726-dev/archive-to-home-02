import { Link } from "@tanstack/react-router";
import { navigation } from "@/config/navigation";
import { publishedBusinessInfo } from "@/config/commercial";
import { showGithub, showLinkedin, siteConfig } from "@/config/site";
import { Brand } from "./Brand";

export function SiteFooter() {
  const verified = [
    { label: "Location", value: siteConfig.location },
    { label: "Email", value: siteConfig.email },
    ...(siteConfig.phone ? [{ label: "Phone", value: siteConfig.phone }] : []),
    ...publishedBusinessInfo,
  ];
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.7fr_0.9fr_1.1fr]">
        <div>
          <Brand />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            {siteConfig.valueProposition}
          </p>
        </div>
        <div>
          <p className="label-mono">Navigate</p>
          <ul className="mt-4 space-y-2">
            {navigation.slice(1).map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-muted-foreground hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-mono">Business information</p>
          <dl className="mt-4 space-y-3">
            {verified.map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[10px] uppercase text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-1 break-all text-xs text-foreground/80">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <p className="label-mono">Connect</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-foreground">
                {siteConfig.email}
              </a>
            </li>
            {showGithub ? (
              <li>
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
            ) : null}
            {showLinkedin ? (
              <li>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-5 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 ArpScayl Systems. All rights reserved.</span>
          <span className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
