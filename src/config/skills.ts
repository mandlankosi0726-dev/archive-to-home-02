/**
 * Engineering evidence areas. No ratings, no percentage bars — capability plus
 * the evidence that supports it. Edit freely; pages read from here.
 */

export type EvidenceLink = { label: string; to: string };

export type EvidenceArea = {
  id: string;
  category: string;
  description: string;
  evidence: string[];
  links: EvidenceLink[];
  enabled: boolean;
  sortOrder: number;
};

export const evidenceAreas: EvidenceArea[] = [
  {
    id: "linux",
    category: "Linux Infrastructure",
    description:
      "Administering, troubleshooting and hardening Linux hosts that run application workloads.",
    evidence: [
      "Linux administration",
      "System troubleshooting",
      "Hardening",
      "Service and storage layout",
      "Project implementations",
    ],
    links: [
      { label: "Linux labs", to: "/engineering" },
      { label: "Insurance Platform", to: "/projects/insurance-platform" },
    ],
    enabled: true,
    sortOrder: 1,
  },
  {
    id: "networking",
    category: "Networking",
    description:
      "Designing and debugging the paths traffic actually takes: addressing, routing, DNS and filtering.",
    evidence: ["TCP/IP and subnetting", "DNS", "Routing", "Firewalls / nftables", "Packet capture"],
    links: [
      { label: "DNS troubleshooting lab", to: "/engineering" },
      { label: "Tourism Platform", to: "/projects/tourism-platform" },
    ],
    enabled: true,
    sortOrder: 2,
  },
  {
    id: "cloud",
    category: "Cloud Infrastructure",
    description:
      "Multi-tier cloud designs with explicit network boundaries, identity and availability choices.",
    evidence: ["VPC and subnet design", "Compute", "IAM", "Object storage", "Availability zones"],
    links: [{ label: "E-Commerce Platform", to: "/projects/ecommerce-platform" }],
    enabled: true,
    sortOrder: 3,
  },
  {
    id: "iac",
    category: "Infrastructure as Code",
    description: "Environments described in code so they can be rebuilt rather than repaired.",
    evidence: [
      "Terraform",
      "Reusable modules",
      "Remote state and locking",
      "Environment configuration",
      "Infrastructure documentation",
    ],
    links: [{ label: "Terraform lab", to: "/engineering" }],
    enabled: true,
    sortOrder: 4,
  },
  {
    id: "containers",
    category: "Containers",
    description: "Packaging and running applications consistently across environments.",
    evidence: [
      "Docker",
      "Containerised applications",
      "Image configuration",
      "Container networking",
      "Deployment workflows",
    ],
    links: [{ label: "Docker networking lab", to: "/engineering" }],
    enabled: true,
    sortOrder: 5,
  },
  {
    id: "automation",
    category: "Automation",
    description: "Removing manual steps from builds, deployments and routine operations.",
    evidence: ["Python", "Bash", "CI/CD pipelines", "Configuration automation"],
    links: [{ label: "Automation notes", to: "/engineering" }],
    enabled: true,
    sortOrder: 6,
  },
  {
    id: "security",
    category: "Security",
    description: "Reducing attack surface and making access explicit, scoped and auditable.",
    evidence: [
      "Network segmentation",
      "IAM least privilege",
      "Secrets management",
      "Linux hardening",
      "Logging and auditing",
    ],
    links: [{ label: "Security engineering", to: "/engineering" }],
    enabled: true,
    sortOrder: 7,
  },
  {
    id: "reliability",
    category: "Reliability & Observability",
    description: "Knowing when a system is unhealthy and being able to bring it back.",
    evidence: [
      "Metrics and alerting",
      "Centralised logging",
      "Backups and restore tests",
      "Failure testing",
      "Incident analysis",
    ],
    links: [{ label: "Postmortems", to: "/engineering" }],
    enabled: true,
    sortOrder: 8,
  },
];

export const activeEvidenceAreas = evidenceAreas
  .filter((a) => a.enabled)
  .sort((a, b) => a.sortOrder - b.sortOrder);
