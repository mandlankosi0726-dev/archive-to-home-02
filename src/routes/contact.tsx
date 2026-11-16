import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { siteConfig, showGithub, showLinkedin } from "@/config/site";
import { Section } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { submitEnquiry } from "@/lib/portal/enquiry.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request an Infrastructure Assessment — ArpScayl" },
      {
        name: "description",
        content:
          "Tell ArpScayl what you are building, operating or trying to improve and request an infrastructure assessment or project discussion.",
      },
      { property: "og:title", content: "Request an Infrastructure Assessment — ArpScayl" },
      {
        property: "og:description",
        content:
          "Share your current infrastructure, primary challenge, intended outcome and timeline.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const projectTypes = [
  "Infrastructure Assessment",
  "Cloud Infrastructure",
  "Architecture & Design",
  "Infrastructure Build",
  "DevOps & Automation",
  "Security Hardening",
  "Infrastructure Support",
  "Other",
] as const;
const budgets = [
  "Prefer not to say",
  "Not established",
  "Under R25k",
  "R25k – R75k",
  "R75k – R200k",
  "R200k+",
] as const;
const industries = [
  "Financial services",
  "Insurance",
  "Retail & e-commerce",
  "Tourism & hospitality",
  "Healthcare",
  "Manufacturing",
  "Logistics",
  "Public sector",
  "Technology",
  "Other",
] as const;
const sizes = ["1–10", "11–50", "51–200", "201–1000", "1000+"] as const;
const services = [
  "Infrastructure Engineering",
  "Cloud Infrastructure",
  "DevOps & Automation",
  "Cybersecurity & Hardening",
  "Containers & Platform Engineering",
  "Systems Architecture",
  "Not sure yet",
] as const;
const contactMethods = ["Email", "Phone", "Either"] as const;
const timelines = [
  "Not established",
  "Immediate",
  "Within 1 month",
  "1–3 months",
  "3 months+",
] as const;
const industryOptions = industries;
const sizeOptions = sizes;
const serviceOptions = services;
const contactOptions = contactMethods;
const timelineOptions = timelines;
const budgetOptions = budgets;
const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(100),
  company: z.string().trim().min(1, "Enter your company or organisation.").max(150),
  email: z.string().trim().email("Enter a valid email address.").max(255),
  phone: z.string().trim().max(40),
  website: z.union([
    z.literal(""),
    z.string().trim().url("Enter a full website address, including https://").max(255),
  ]),
  projectName: z.string().trim().max(150),
  industry: z.string().min(1, "Select an industry.").pipe(z.enum(industryOptions)),
  companySize: z.string().min(1, "Select a company size.").pipe(z.enum(sizeOptions)),
  service: z.string().min(1, "Select a service.").pipe(z.enum(serviceOptions)),
  preferredContact: z.string().pipe(z.enum(contactOptions)),
  projectType: z.enum(projectTypes),
  currentInfrastructure: z
    .string()
    .trim()
    .min(10, "Provide a short description of the current environment.")
    .max(2000),
  primaryChallenge: z.string().trim().min(10, "Describe the primary challenge.").max(2000),
  expectedOutcome: z.string().trim().min(10, "Describe the expected outcome.").max(2000),
  timeline: z.string().pipe(z.enum(timelineOptions)),
  budget: z.string().pipe(z.enum(budgetOptions)),
  additionalInformation: z.string().trim().max(3000),
  consent: z.literal("yes", { message: "Please confirm consent so we can respond." }),
});
type ContactForm = z.input<typeof contactSchema>;
const initialForm: ContactForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  website: "",
  projectName: "",
  industry: "",
  companySize: "",
  service: "",
  preferredContact: "Email",
  projectType: "Infrastructure Assessment",
  currentInfrastructure: "",
  primaryChallenge: "",
  expectedOutcome: "",
  timeline: "Not established",
  budget: "Prefer not to say",
  additionalInformation: "",
  consent: "" as unknown as "yes",
};
const field =
  "mt-2 w-full rounded-sm border border-border bg-surface-2 px-3 py-2.5 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const set = (key: keyof ContactForm) => (value: string) =>
    setForm((previous) => ({ ...previous, [key]: value }));
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");
  const submit = async () => {
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    const d = result.data;
    setStatus("sending");
    try {
      await submitEnquiry({
        data: {
          fullName: d.name,
          company: d.company,
          email: d.email,
          phone: d.phone,
          industry: d.industry,
          companySize: d.companySize,
          service: d.service,
          projectType: d.projectType,
          currentSituation: d.currentInfrastructure,
          problem: d.primaryChallenge,
          desiredOutcome: d.expectedOutcome,
          urgency: d.timeline,
          budget: d.budget,
          preferredContact: d.preferredContact,
          additionalInformation: [
            d.projectName && `Project: ${d.projectName}`,
            d.website && `Website: ${d.website}`,
            d.additionalInformation,
          ]
            .filter(Boolean)
            .join("\n"),
          consent: true,
          website_url: honeypot,
        },
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };
  const input = (
    id: keyof ContactForm,
    label: string,
    required = false,
    type = "text",
    placeholder = "",
  ) => (
    <div>
      <label className="label-mono" htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={id}
        type={type}
        maxLength={255}
        className={field}
        value={form[id]}
        onChange={(event) => set(id)(event.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(errors[id])}
        aria-describedby={errors[id] ? `${id}-error` : undefined}
      />
      {errors[id] ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {errors[id]}
        </p>
      ) : null}
    </div>
  );
  const area = (id: keyof ContactForm, label: string, required = false, placeholder = "") => (
    <div>
      <label className="label-mono" htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </label>
      <textarea
        id={id}
        rows={4}
        maxLength={id === "additionalInformation" ? 3000 : 2000}
        className={field}
        value={form[id]}
        onChange={(event) => set(id)(event.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(errors[id])}
        aria-describedby={errors[id] ? `${id}-error` : undefined}
      />
      {errors[id] ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {errors[id]}
        </p>
      ) : null}
    </div>
  );
  const select = (
    id: keyof ContactForm,
    label: string,
    opts: readonly string[],
    required = false,
  ) => (
    <div>
      <label className="label-mono" htmlFor={id}>
        {label}
        {required ? " *" : ""}
      </label>
      <select
        id={id}
        className={field}
        value={form[id]}
        onChange={(e) => set(id)(e.target.value)}
        aria-invalid={Boolean(errors[id])}
      >
        {required ? <option value="">Select…</option> : null}
        {opts.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      {errors[id] ? <p className="mt-2 text-xs text-destructive">{errors[id]}</p> : null}
    </div>
  );
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-425 px-5 py-16 sm:px-8 sm:py-20">
          <p className="label-mono">Start a conversation</p>
          <h1 className="mt-5 text-3xl font-bold sm:text-5xl">
            Request an Infrastructure Assessment
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell us what you’re building, operating or trying to improve. We’ll use the information
            to determine the appropriate next step.
          </p>
          {siteConfig.phoneHref ? (
            <Button
              asChild
              size="lg"
              className="mt-7 h-auto whitespace-normal rounded-sm px-6 py-4"
            >
              <a href={`tel:${siteConfig.phoneHref}`}>
                <Phone className="size-4" /> Call {siteConfig.phone}
              </a>
            </Button>
          ) : null}
        </div>
      </section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {status === "sent" ? (
            <div role="status" className="border border-border bg-surface p-8">
              <p className="label-mono">Enquiry received</p>
              <p className="mt-4 text-lg leading-relaxed">
                Thank you. Your enquiry has been received. Our team will review the information and
                contact you regarding the appropriate next step.
              </p>
            </div>
          ) : (
            <form
              className="border border-border bg-surface p-6"
              noValidate
              onSubmit={(event) => {
                event.preventDefault();
                submit();
              }}
            >
              <p className="label-mono">Project enquiry</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {input("name", "Full name", true, "text", "Your name")}
                {input("company", "Company", true, "text", "Company or organisation")}
                {input("email", "Email", true, "email", "you@company.com")}
                {input("phone", "Phone — optional", false, "tel", "+27 ...")}
                {input(
                  "projectName",
                  "Project / system name — optional",
                  false,
                  "text",
                  "e.g. Customer portal",
                )}
                {input("website", "Company website — optional", false, "url", "https://...")}
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {select("industry", "Industry", industries, true)}
                {select("companySize", "Company size", sizes, true)}
                {select("service", "Service required", services, true)}
                {select("preferredContact", "Preferred contact method", contactMethods)}
              </div>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_url">Leave empty</label>
                <input
                  id="website_url"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <label className="label-mono" htmlFor="projectType">
                  Project type *
                </label>
                <select
                  id="projectType"
                  className={field}
                  value={form.projectType}
                  onChange={(event) => set("projectType")(event.target.value)}
                >
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="mt-5 space-y-5">
                {area(
                  "expectedOutcome",
                  "What are you trying to achieve?",
                  true,
                  "What should be better once the work is done?",
                )}
                {area(
                  "primaryChallenge",
                  "What is the main problem?",
                  true,
                  "What is difficult, risky, unreliable or unclear today?",
                )}
                {area(
                  "currentInfrastructure",
                  "Current infrastructure / technology",
                  true,
                  "Where does it run today? Environments, deployment methods, key dependencies.",
                )}
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="label-mono" htmlFor="timeline">
                    Project urgency
                  </label>
                  <select
                    id="timeline"
                    className={field}
                    value={form.timeline}
                    onChange={(event) => set("timeline")(event.target.value)}
                  >
                    {timelines.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label-mono" htmlFor="budget">
                    Estimated budget — optional
                  </label>
                  <select
                    id="budget"
                    className={field}
                    value={form.budget}
                    onChange={(event) => set("budget")(event.target.value)}
                  >
                    {budgets.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-5">
                {area(
                  "additionalInformation",
                  "Additional information",
                  false,
                  "Relevant constraints, deadlines or context.",
                )}
              </div>
              <div className="mt-6 border-t border-border pt-5">
                <label
                  className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground"
                  htmlFor="consent"
                >
                  <input
                    id="consent"
                    type="checkbox"
                    className="mt-0.5 size-4 shrink-0 accent-primary"
                    checked={form.consent === "yes"}
                    onChange={(event) => set("consent")(event.target.checked ? "yes" : "")}
                  />
                  <span>
                    I consent to ArpScayl Systems using the personal information in this enquiry to
                    respond to my request. It is processed in line with the{" "}
                    <a href="/privacy" className="text-primary underline-offset-4 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and South Africa’s Protection of Personal Information Act (POPIA), and is not
                    shared with third parties for marketing.
                  </span>
                </label>
                {errors["consent"] ? (
                  <p className="mt-2 text-xs text-destructive">{errors["consent"]}</p>
                ) : null}
              </div>
              <Button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 h-auto rounded-sm px-5 py-3 font-mono text-xs uppercase tracking-widest"
              >
                {status === "sending" ? "Sending…" : "Send Enquiry"}{" "}
                <ArrowRight className="size-4" />
              </Button>
              {status === "error" ? (
                <p role="alert" className="mt-4 text-sm text-destructive">
                  Your enquiry could not be sent. Please check the details and try again, or email
                  us directly.
                </p>
              ) : null}
            </form>
          )}
          <div className="space-y-6">
            <div className="border-t border-border pt-6">
              <p className="label-mono">Direct channels</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-primary" />
                  <a className="break-all hover:text-primary" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </li>
                {siteConfig.phone ? (
                  <li className="flex items-center gap-3">
                    <Phone className="size-4 text-primary" />
                    <a className="hover:text-primary" href={`tel:${siteConfig.phoneHref}`}>
                      {siteConfig.phone}
                    </a>
                  </li>
                ) : null}
                {showLinkedin ? (
                  <li className="flex items-center gap-3">
                    <Linkedin className="size-4 text-primary" />
                    <a href={siteConfig.linkedinUrl}>LinkedIn</a>
                  </li>
                ) : null}
                {showGithub ? (
                  <li className="flex items-center gap-3">
                    <Github className="size-4 text-primary" />
                    <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer noopener">
                      GitHub repositories
                    </a>
                  </li>
                ) : null}
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 text-primary" />
                  <span className="text-muted-foreground">{siteConfig.location}</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-border pt-6">
              <p className="label-mono">What happens next</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                ArpScayl reviews the context supplied and responds with a suitable next step. No
                response-time commitment is published until a service standard has been adopted.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
