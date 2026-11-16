/**
 * PROJECT CONFIGURATION
 * Status, ordering, links, incidents, measurements and limitations per project.
 * Case-study narrative content stays in frontend/src/data/projects.ts.
 */

export type ProjectStatus =
  | "Planning"
  | "In Development"
  | "Infrastructure Build"
  | "Testing"
  | "Completed"
  | "Experimental / Lab";

export type ProjectKind = "Internal Engineering Project / Simulation" | "Engineering Lab";

export type Incident = {
  title: string;
  simulated: boolean;
  symptom: string;
  investigation: string;
  rootCause: string;
  resolution: string;
  prevention: string;
};

export type Metric = { label: string; value: string };

export type ProjectMeta = {
  slug: string;
  /** One-sentence problem statement shown on the card. */
  oneLiner: string;
  status: ProjectStatus;
  kind: ProjectKind;
  /** Infrastructure focus categories, not a technology dump. */
  categories: string[];
  keyTechnologies: string[];
  githubUrl: string;
  demoUrl: string;
  documentationUrl: string;
  architectureImage: string;
  featured: boolean;
  sortOrder: number;
  metricsEnabled: boolean;
  /** Leave empty while measurements do not exist. */
  metrics: Metric[];
  metricsNote: string;
  incidents: Incident[];
  limitations: string[];
};

export const projectsConfig: ProjectMeta[] = [
  {
    slug: "insurance-platform",
    oneLiner:
      "An insurance workflow handling policy documents and personal data needs a defensible security posture and a tested recovery path, with no dedicated operations team.",
    status: "In Development",
    kind: "Internal Engineering Project / Simulation",
    categories: ["Architecture", "Security", "Networking", "Reliability"],
    keyTechnologies: ["Linux", "AWS", "Docker", "Terraform", "PostgreSQL"],
    githubUrl: "",
    demoUrl: "",
    documentationUrl: "",
    architectureImage: "",
    featured: true,
    sortOrder: 1,
    metricsEnabled: false,
    metrics: [],
    metricsNote: "Testing in progress — no measurements published yet.",
    incidents: [
      {
        title: "Health-check failure during deployment",
        simulated: true,
        symptom: "Intermittent 502 responses while a new application revision rolled out.",
        investigation:
          "Compared load-balancer target health timings against container start-up logs.",
        rootCause: "Health-check timeout was shorter than the application cold-start time.",
        resolution: "Raised the initial grace period and added a readiness endpoint.",
        prevention:
          "Start-up budget is now recorded with the deployment settings for each service.",
      },
      {
        title: "Database connectivity blocked",
        simulated: true,
        symptom: "Application containers timed out when opening database connections.",
        investigation: "Traced the path from the application subnet and inspected security rules.",
        rootCause: "Asymmetric security-group rule allowed egress but not the matching ingress.",
        resolution: "Corrected the rule pair and re-tested from a disposable host.",
        prevention: "Network rules are defined in Terraform as paired ingress/egress modules.",
      },
    ],
    limitations: [
      "Single region; no cross-region failover yet",
      "Restore procedure documented and exercised manually, not automated",
      "Business-hours availability target rather than continuous uptime",
    ],
  },
  {
    slug: "tourism-platform",
    oneLiner:
      "A booking and enquiry platform must stay responsive during seasonal demand spikes while payment and customer workflows remain consistent.",
    status: "In Development",
    kind: "Internal Engineering Project / Simulation",
    categories: ["Cloud", "Containers", "Networking", "Observability"],
    keyTechnologies: ["AWS", "Docker", "Terraform", "PostgreSQL", "GitHub Actions"],
    githubUrl: "",
    demoUrl: "",
    documentationUrl: "",
    architectureImage: "",
    featured: true,
    sortOrder: 2,
    metricsEnabled: false,
    metrics: [],
    metricsNote: "Measurement not yet available.",
    incidents: [
      {
        title: "DNS failover slower than expected",
        simulated: true,
        symptom: "Clients kept resolving the old endpoint after a planned failover.",
        investigation: "Queried resolvers directly and inspected the record TTL.",
        rootCause: "A 3600s TTL on the primary record extended the effective outage.",
        resolution: "Lowered TTL ahead of planned changes and re-tested the cutover.",
        prevention: "TTL is treated as a reliability parameter in the change checklist.",
      },
    ],
    limitations: [
      "Load behaviour modelled, not measured against real seasonal traffic",
      "Caching layer designed but not yet implemented",
    ],
  },
  {
    slug: "ecommerce-platform",
    oneLiner:
      "A retail platform needs repeatable deployments, protected payment paths and enough observability to diagnose checkout failures quickly.",
    status: "In Development",
    kind: "Internal Engineering Project / Simulation",
    categories: ["IaC", "Automation", "Security", "Observability"],
    keyTechnologies: ["AWS", "Docker", "Terraform", "CI/CD", "PostgreSQL"],
    githubUrl: "",
    demoUrl: "",
    documentationUrl: "",
    architectureImage: "",
    featured: true,
    sortOrder: 3,
    metricsEnabled: false,
    metrics: [],
    metricsNote: "Testing in progress — load and recovery results will be published here.",
    incidents: [
      {
        title: "Disk exhaustion on a container host",
        simulated: true,
        symptom: "Containers failed to start and writes began erroring.",
        investigation: "Inspected disk usage per path and container log sizes.",
        rootCause: "Container logs were never rotated on the host.",
        resolution: "Applied log rotation limits to the container runtime configuration.",
        prevention: "Disk usage is alerted on and rotation is part of the base image.",
      },
      {
        title: "Deployment failed on missing permissions",
        simulated: true,
        symptom: "Pipeline apply stage failed part-way through a change.",
        investigation: "Read the apply logs and compared the role policy with required actions.",
        rootCause: "The deployment role lacked one action added by a new resource type.",
        resolution: "Extended the policy with the narrowest action set and re-ran the plan.",
        prevention: "Plan output is reviewed against role permissions before apply.",
      },
    ],
    limitations: [
      "Payment integration is represented architecturally, not processed live",
      "No production traffic; scaling behaviour is designed rather than proven",
    ],
  },
];

export const getProjectMeta = (slug: string) => projectsConfig.find((p) => p.slug === slug);

export const orderedProjectMeta = [...projectsConfig].sort((a, b) => a.sortOrder - b.sortOrder);

export const featuredProjectMeta = orderedProjectMeta.filter((p) => p.featured);
