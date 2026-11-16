/**
 * ArpScayl EDITABLE COMMERCIAL CONTENT
 * Search this file for "[" to find every value that still needs verification.
 * Placeholder values are never printed publicly unless `publish` is set to true.
 */
export type EditableValue = { value: string; publish: boolean };

export const editableBusiness = {
  registeredName: { value: "ArpScayl Systems (PTY) LTD", publish: true },
  registrationNumber: { value: "[COMPANY REGISTRATION NUMBER]", publish: false },
  address: { value: "[BUSINESS ADDRESS]", publish: false },
  country: { value: "South Africa", publish: true },
  vatNumber: { value: "4655876987988", publish: false },
  registrationDetails: { value: "[BUSINESS REGISTRATION DETAILS — IF APP]", publish: false },
  geographicMarket: { value: "[TARGET GEOGRAPHIC MARKET]", publish: false },
  linkedIn: { value: "[LINKEDIN]", publish: false },
} satisfies Record<string, EditableValue>;

export const businessLabels: Record<string, string> = {
  registeredName: "Registered name",
  registrationNumber: "Registration number",
  address: "Address",
  country: "Country",
  vatNumber: "VAT number",
  registrationDetails: "Registration details",
  geographicMarket: "Market",
  linkedIn: "LinkedIn",
};

/** Published business fields with human labels; unverified "[...]" values are always hidden. */
export const publishedBusinessInfo = Object.entries(editableBusiness)
  .filter(([, item]) => item.publish && !item.value.startsWith("["))
  .map(([key, item]) => ({ label: businessLabels[key] ?? key, value: item.value }));

export const targetCustomers = [
  {
    title: "Growing Businesses",
    description:
      "Businesses whose technology has outgrown manually managed or undocumented infrastructure.",
    placeholder: "[TARGET CUSTOMER TYPE 1]",
  },
  {
    title: "Software Teams",
    description:
      "Development teams that need dependable deployment, environments, automation and infrastructure support.",
    placeholder: "[TARGET CUSTOMER TYPE 2]",
  },
  {
    title: "Startups & New Digital Platforms",
    description:
      "Organisations planning their first production environment and requiring a sound technical foundation.",
    placeholder: "[TARGET CUSTOMER TYPE 3]",
  },
  {
    title: "Businesses Modernising Infrastructure",
    description:
      "Organisations addressing legacy systems, operational complexity, security weaknesses or poor documentation.",
    placeholder: "[TARGET CUSTOMER TYPE 4]",
  },
  {
    title: "Technology Projects",
    description:
      "Teams requiring infrastructure architecture and implementation for a new digital product.",
    placeholder: "[TARGET CUSTOMER TYPE 5]",
  },
] as const;

export const servicePackages = [
  {
    title: "Infrastructure Assessment",
    purpose:
      "Review an existing infrastructure environment and identify risks, weaknesses, operational problems and improvement opportunities.",
    deliverables: [
      "Current-state architecture overview",
      "Infrastructure assessment",
      "Security and reliability findings",
      "Operational risks",
      "Documentation gaps",
      "Priority recommendations",
      "Improvement roadmap",
    ],
    commercial: [
      "[ASSESSMENT DURATION]",
      "[DELIVERABLE FORMAT]",
      "[STARTING PRICE OR CONTACT FOR QUOTE]",
    ],
  },
  {
    title: "Architecture & Design",
    purpose: "Design infrastructure for a new or existing application or platform.",
    deliverables: [
      "Requirements analysis",
      "Architecture design",
      "Network and security architecture",
      "Compute and storage design",
      "Availability considerations",
      "Deployment architecture",
      "Technology recommendations",
      "Architecture documentation",
    ],
    commercial: ["[COMMON PROJECT SIZE]", "[TYPICAL DELIVERY PERIOD]", "[PRICING MODEL]"],
  },
  {
    title: "Infrastructure Build",
    purpose: "Implement infrastructure according to an approved architecture.",
    deliverables: [
      "Environment provisioning",
      "Networking, compute and storage",
      "Identity and access controls",
      "Security configuration",
      "Monitoring",
      "Backup configuration",
      "Documentation",
    ],
    commercial: [],
  },
  {
    title: "DevOps & Deployment Automation",
    purpose: "Make application deployment reproducible and less dependent on manual processes.",
    deliverables: [
      "Containerisation",
      "CI/CD pipelines",
      "Infrastructure as Code",
      "Environment management",
      "Secrets management",
      "Automated deployments",
      "Rollback procedures",
      "Deployment documentation",
    ],
    commercial: [],
  },
  {
    title: "Security Hardening",
    purpose: "Reduce infrastructure attack surface and improve security controls.",
    deliverables: [
      "Security assessment",
      "System hardening",
      "Network controls",
      "Identity and access review",
      "Firewall configuration",
      "Secrets management",
      "Logging",
      "Security documentation",
      "Remediation roadmap",
    ],
    commercial: [],
  },
  {
    title: "Infrastructure Support & Consulting",
    purpose:
      "Provide ongoing technical assistance after implementation, where a suitable support arrangement is agreed.",
    deliverables: [
      "Ad-hoc engineering support",
      "Monthly infrastructure retainer",
      "Technical advisory",
      "Infrastructure maintenance",
      "Monitoring and incident assistance",
    ],
    commercial: [
      "[SUPPORT HOURS]",
      "[RESPONSE TARGET]",
      "[MONTHLY RETAINER OPTIONS]",
      "[ESCALATION PROCESS]",
    ],
  },
] as const;

export const projectWorkflow = [
  {
    title: "Discovery",
    description:
      "Understand the business, application, infrastructure and operational requirements.",
  },
  {
    title: "Assessment",
    description: "Evaluate the current environment, constraints, risks and technical requirements.",
  },
  {
    title: "Architecture",
    description:
      "Define the proposed architecture, technologies, security boundaries and implementation strategy.",
  },
  {
    title: "Proposal",
    description: "Provide scope, deliverables, assumptions, timeline and commercial terms.",
  },
  { title: "Implementation", description: "Build and configure the agreed infrastructure." },
  {
    title: "Verification",
    description: "Test deployment, security, reliability, monitoring and recovery mechanisms.",
  },
  {
    title: "Handover",
    description: "Provide documentation, operational procedures and relevant technical knowledge.",
  },
  {
    title: "Support",
    description:
      "Where required, provide continued infrastructure engineering and advisory support.",
  },
] as const;

export const workflowStatus = "";
export const workflowPlaceholder = "[ArpScayl STANDARD PROJECT WORKFLOW]";

export const whyArpScayl = [
  {
    title: "Systems-First Engineering",
    description:
      "Infrastructure decisions begin with requirements, constraints, dependencies and failure modes.",
  },
  {
    title: "Reproducible Infrastructure",
    description:
      "Where appropriate, infrastructure is managed through automation and Infrastructure as Code rather than undocumented manual configuration.",
  },
  {
    title: "Security by Design",
    description:
      "Security boundaries, identity, access control, secrets and attack surface are considered during architecture and implementation.",
  },
  {
    title: "Operational Thinking",
    description:
      "Systems are designed with deployment, monitoring, maintenance, failure and recovery in mind.",
  },
  {
    title: "Documentation",
    description:
      "Important infrastructure decisions and operational procedures are documented so systems can remain understandable and maintainable.",
  },
  {
    title: "Evidence-Based Engineering",
    description:
      "Technical work is supported by architecture diagrams, configuration, documentation, testing and other inspectable evidence where appropriate.",
  },
] as const;

export const engagementModels = [
  {
    title: "Fixed-Scope Projects",
    description: "For clearly defined infrastructure implementation or engineering projects.",
  },
  {
    title: "Assessment Engagements",
    description: "For infrastructure, architecture, security or operational assessments.",
  },
  {
    title: "Project-Based Engineering",
    description: "For larger infrastructure design and implementation work.",
  },
  {
    title: "Support",
    description: "For organisations requiring continued infrastructure engineering assistance.",
  },
  {
    title: "Technical Advisory",
    description: "For businesses requiring infrastructure architecture or engineering guidance.",
  },
] as const;

export const commercialPlaceholders = {
  minimumProjectSize: "[MINIMUM PROJECT SIZE]",
  typicalProjectDuration: "[TYPICAL PROJECT DURATION]",
  hourlyRate: "[HOURLY RATE IF APPLICABLE]",
  dayRate: "[DAY RATE IF APPLICABLE]",
  retainerModel: "[RETAINER MODEL]",
  paymentTerms: "[PAYMENT TERMS]",
};

export const evidenceLinks = {
  github: "[GitHub URL]",
  architectureRepository: "[ARCHITECTURE REPOSITORY]",
  infrastructureRepository: "[INFRASTRUCTURE REPOSITORY]",
  documentation: "[DOCUMENTATION]",
  technicalBlog: "[TECHNICAL BLOG]",
  demoEnvironment: "[DEMO ENVIRONMENT]",
};
