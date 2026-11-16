export type ServiceConfig = {
  title: string;
  description: string;
  solves: string;
  capabilities: string[];
  deliverables: string[];
  technologies: string[];
  enabled: boolean;
};

export const servicesConfig: ServiceConfig[] = [
  {
    title: "Infrastructure Engineering",
    description:
      "Reliable Linux-based infrastructure, application environments, networking, compute, storage and operational systems.",
    solves:
      "Systems run on hosts nobody fully understands. ArpScayl designs and builds infrastructure that is documented, observable and repeatable.",
    capabilities: [
      "Environment design",
      "Linux systems",
      "Networking and storage",
      "Operational readiness",
    ],
    deliverables: [
      "Environment and host design",
      "Hardened Linux baseline",
      "Service, storage and network layout",
      "Operational runbooks",
    ],
    technologies: ["Linux", "DNS", "TCP/IP", "PostgreSQL"],
    enabled: true,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Cloud architecture with deliberate choices around networking, identity, compute, storage, availability and security.",
    solves:
      "Cloud accounts grow without an architecture. ArpScayl defines the network, identity and availability model before more resources are added.",
    capabilities: ["Cloud architecture", "VPC and routing", "IAM design", "Deployment foundations"],
    deliverables: [
      "Cloud architecture diagram",
      "VPC, subnet and routing design",
      "Least-privilege IAM model",
      "Deployment foundation",
    ],
    technologies: ["AWS", "IAM", "VPC", "Object storage"],
    enabled: true,
  },
  {
    title: "DevOps & Automation",
    description:
      "Repeatable infrastructure and delivery workflows that reduce manual changes and make environments easier to review and rebuild.",
    solves:
      "Manual changes make environments impossible to reproduce. ArpScayl moves infrastructure and delivery into reviewable code.",
    capabilities: [
      "Infrastructure as Code",
      "CI/CD",
      "Configuration automation",
      "Operational tooling",
    ],
    deliverables: [
      "Terraform modules and state layout",
      "CI/CD pipelines",
      "Configuration automation scripts",
      "Change and rollback procedure",
    ],
    technologies: ["Terraform", "GitHub Actions", "Python", "Bash"],
    enabled: true,
  },
  {
    title: "Cybersecurity & Hardening",
    description:
      "Practical infrastructure controls covering attack surface, network boundaries, identity, secrets, auditing and secure operation.",
    solves:
      "Security is often added late. ArpScayl reduces attack surface and tightens identity, secrets and network boundaries as part of the build.",
    capabilities: [
      "System hardening",
      "Network segmentation",
      "Least-privilege IAM",
      "Logging and audit",
    ],
    deliverables: [
      "Hardening baseline and checklist",
      "Network segmentation design",
      "Secrets and identity model",
      "Audit logging configuration",
    ],
    technologies: ["IAM", "TLS", "nftables", "Managed secrets"],
    enabled: true,
  },
  {
    title: "Containers & Platform Engineering",
    description:
      "Containerized application environments, orchestration foundations and deployment architecture designed for dependable operation.",
    solves:
      "Applications work locally but are hard to deploy. ArpScayl builds container and orchestration foundations that deploy the same way every time.",
    capabilities: [
      "Container architecture",
      "Image standards",
      "Orchestration foundations",
      "Platform reliability",
    ],
    deliverables: [
      "Container image standards",
      "Compose or Kubernetes manifests",
      "Health checks and restart policy",
      "Deployment workflow",
    ],
    technologies: ["Docker", "Kubernetes", "Registries", "Health probes"],
    enabled: true,
  },
  {
    title: "Systems Architecture",
    description:
      "Architecture design grounded in system boundaries, data flows, failure analysis, scalability, observability and operations.",
    solves:
      "Growth exposes design gaps. ArpScayl models boundaries, data flows and failure modes before they become incidents.",
    capabilities: [
      "Requirements analysis",
      "System decomposition",
      "Failure modelling",
      "Operational planning",
    ],
    deliverables: [
      "Architecture and data-flow diagrams",
      "Architecture decision records",
      "Failure-mode analysis",
      "Observability and operations plan",
    ],
    technologies: ["Architecture diagrams", "ADRs", "Runbooks", "Observability"],
    enabled: true,
  },
];

export const activeServices = servicesConfig.filter((service) => service.enabled);

export const supportingCapabilities = [
  "Requirements analysis",
  "Architecture decision records",
  "Network and DNS design",
  "Backup and recovery planning",
  "Monitoring and alerting",
  "Cost-aware sizing",
  "Documentation and handover",
  "Knowledge transfer",
];

export const engagementNote =
  "Engagements are scoped individually. ArpScayl is an emerging practice: the work delivered is engineering artefacts — diagrams, infrastructure code, controls, runbooks and documentation — with no managed-service or availability guarantees implied.";

export const businessProblems = [
  {
    problem: "Your infrastructure is manually configured and difficult to reproduce.",
    capability: "DevOps & Automation",
  },
  {
    problem: "Your cloud environment is growing without a clear architecture.",
    capability: "Cloud Infrastructure",
  },
  {
    problem: "Your systems lack monitoring, logging and operational visibility.",
    capability: "Infrastructure Engineering",
  },
  {
    problem: "Your infrastructure needs stronger security controls.",
    capability: "Cybersecurity & Hardening",
  },
  {
    problem: "Your business is preparing for increased traffic and needs a scalable foundation.",
    capability: "Systems Architecture",
  },
  {
    problem:
      "Your development team needs reliable infrastructure without building an operations function from scratch.",
    capability: "Infrastructure Engineering",
  },
] as const;
