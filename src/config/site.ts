/** Primary ArpScayl identity and public runtime configuration. */
import { runtimeConfig } from "./runtime";

export const siteConfig = {
  siteName: runtimeConfig.siteName,
  companyName: runtimeConfig.companyName,
  descriptor: "Infrastructure & Technology Engineering",
  tagline: "Engineering reliable, secure and maintainable technology systems.",
  valueProposition:
    "ArpScayl designs, builds and improves secure, reliable and maintainable infrastructure for businesses and technology teams.",
  heroHeadline: "Engineering the infrastructure behind reliable digital systems.",
  heroDescription:
    "ArpScayl designs, builds and improves secure, reliable and maintainable infrastructure for businesses and technology teams.",
  location: runtimeConfig.businessLocation,
  marketStatement: runtimeConfig.marketStatement,
  email: runtimeConfig.contactEmail,
  phone: runtimeConfig.contactPhone,
  phoneHref: runtimeConfig.contactPhoneHref,
  githubUrl: runtimeConfig.githubUrl,
  linkedinUrl: runtimeConfig.linkedinUrl,
  founder: {
    name: "Mandla W. Nkosi",
    title: "Founder & Principal Infrastructure Engineer",
    bio: "Mandla leads ArpScayl’s infrastructure engineering work across Linux systems, networking, cloud infrastructure, automation, security and systems architecture. His approach centres on explicit requirements, reproducible implementation, operational clarity and inspectable evidence.",
    extendedBioPlaceholder:
      "[FOUNDER BIO — add verified experience, certifications, professional development and location]",
  },
  ctas: {
    primary: "Request an Infrastructure Assessment",
    secondary: "Explore Our Engineering Work",
  },
} as const;

export const capabilityStrip = [
  "Infrastructure Engineering",
  "Cloud Infrastructure",
  "DevOps & Automation",
  "Cybersecurity & Hardening",
  "Containers & Platform Engineering",
  "Systems Architecture",
] as const;

export const engineeringCapabilities = [
  { title: "Linux & Systems", technologies: ["Linux", "systemd", "Bash", "Hardening"] },
  { title: "Networking", technologies: ["DNS", "TCP/IP", "Routing", "Segmentation"] },
  { title: "Cloud Infrastructure", technologies: ["AWS", "IAM", "Compute", "Storage"] },
  { title: "Containers & Orchestration", technologies: ["Docker", "Kubernetes", "Registries"] },
  { title: "Infrastructure Automation", technologies: ["Terraform", "Python", "GitHub Actions"] },
  { title: "Security", technologies: ["IAM", "Secrets", "TLS", "Auditing"] },
  { title: "Observability", technologies: ["Metrics", "Logging", "Health checks", "Alerting"] },
  { title: "Distributed Systems", technologies: ["Failure modes", "Data flows", "Recovery"] },
] as const;

export const showGithub = siteConfig.githubUrl.length > 0;
export const showLinkedin = siteConfig.linkedinUrl.length > 0;
