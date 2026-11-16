import type { Capability, Diagram, EngineeringDoc, Lab, Service } from "./types";

export const nav = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Engineering", to: "/engineering" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

export const heroDiagram: Diagram = {
  title: "Reference request path",
  caption: "Reference request path showing core infrastructure layers and operational controls.",
  nodes: [
    { label: "Internet", detail: "Client traffic, TLS termination at edge" },
    { label: "DNS", detail: "Zones, records, health-based routing" },
    { label: "Load Balancer", detail: "L7 routing, health checks, TLS" },
    { label: "Application", detail: "Stateless app tier, autoscaled", boundary: "Private subnet" },
    { label: "Containers", detail: "Docker images, orchestrated deployment" },
    { label: "Database", detail: "Managed engine, replicas, backups" },
    {
      label: "Monitoring / Backup",
      detail: "Metrics, logs, alerts, restore drills",
      side: ["Alerting", "Retention"],
    },
  ],
};

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Linux Infrastructure",
    description:
      "System administration, services, processes, storage, permissions, system troubleshooting and hardening.",
    evidence: ["Linux Networking Lab", "Linux Security Hardening Lab", "Insurance Platform"],
    href: "/engineering#labs",
  },
  {
    index: "02",
    title: "Networking",
    description:
      "TCP/IP, IPv4/IPv6, subnetting, DNS, routing, switching, VLANs, firewalls and network troubleshooting.",
    evidence: ["DNS Troubleshooting Lab", "Docker Networking Lab", "Tourism Platform"],
    href: "/engineering#labs",
  },
  {
    index: "03",
    title: "Cloud Infrastructure",
    description:
      "Compute, networking, IAM, storage, availability, security and cloud architecture.",
    evidence: ["E-Commerce Platform", "Terraform Infrastructure Lab"],
    href: "/projects",
  },
  {
    index: "04",
    title: "Containers & Orchestration",
    description:
      "Docker, container networking, deployment architecture and Kubernetes fundamentals.",
    evidence: ["Kubernetes Failure Simulation", "Docker Networking Lab"],
    href: "/engineering#labs",
  },
  {
    index: "05",
    title: "Infrastructure Automation",
    description: "Python, Bash, Terraform, CI/CD and infrastructure-as-code practices.",
    evidence: ["Terraform Infrastructure Lab", "E-Commerce Platform"],
    href: "/engineering#automation",
  },
  {
    index: "06",
    title: "Infrastructure Security",
    description:
      "Linux hardening, IAM, network security, secrets management, auditing, logging and security controls.",
    evidence: ["Linux Security Hardening Lab", "Insurance Platform"],
    href: "/engineering#security",
  },
];

export const lifecycle = [
  { index: "01", title: "Understand Requirements", note: "Workload, users, data, obligations." },
  { index: "02", title: "Identify Constraints", note: "Budget, team size, latency, compliance." },
  { index: "03", title: "Design Architecture", note: "Tiers, boundaries, data flow, scaling." },
  { index: "04", title: "Assess Security", note: "Trust boundaries, identity, blast radius." },
  { index: "05", title: "Build Infrastructure", note: "Networks, compute, storage, runtime." },
  { index: "06", title: "Automate", note: "IaC, pipelines, configuration, repeatability." },
  { index: "07", title: "Test Failure", note: "Kill nodes, drop links, expire certificates." },
  { index: "08", title: "Monitor", note: "Metrics, logs, health checks, alert routing." },
  { index: "09", title: "Document", note: "Diagrams, runbooks, decision records." },
  { index: "10", title: "Improve", note: "Postmortems, cost review, hardening passes." },
];

export const currentFocus = [
  { title: "Infrastructure Engineering", note: "Reliable, observable, reproducible systems." },
  { title: "Cloud Architecture", note: "Multi-tier design, availability and cost trade-offs." },
  { title: "Infrastructure Automation", note: "Terraform modules, pipelines, Python tooling." },
  { title: "Cybersecurity", note: "Hardening, segmentation, identity and secrets." },
  { title: "Distributed Systems", note: "State, consistency, partial failure behaviour." },
  { title: "AI Infrastructure", note: "GPU scheduling, model serving, data pipelines." },
];

export const principles = [
  {
    title: "Design for failure before scale",
    body: "Every component is assumed to fail. Architecture starts from failure modes and recovery paths, not from throughput numbers.",
  },
  {
    title: "Constraints define the architecture",
    body: "Budget, team size and operational capacity shape a design far more than technology preference. The simplest system that satisfies the constraints wins.",
  },
  {
    title: "Boundaries are explicit",
    body: "Network segments, identities and secrets are drawn on the diagram before anything is deployed. If a boundary cannot be described, it does not exist.",
  },
  {
    title: "If it is not automated, it is not finished",
    body: "Infrastructure is described in code and applied through pipelines so environments can be rebuilt rather than repaired.",
  },
  {
    title: "Operations is part of the design",
    body: "Metrics, logs, alerts, backups and runbooks are delivered with the system, not added after the first incident.",
  },
  {
    title: "Documentation is engineering output",
    body: "Diagrams, decision records and runbooks are how a system survives handover. Undocumented infrastructure is a liability.",
  },
];

export const labs: Lab[] = [
  {
    slug: "linux-networking",
    title: "Linux Networking Lab",
    label: "Lab",
    objective: "Understand how Linux resolves, routes and filters traffic across interfaces.",
    environment: "Three Ubuntu VMs, isolated bridged network, nftables, iproute2, tcpdump.",
    experiment:
      "Built static routes between subnets, then progressively restricted traffic with nftables while capturing packets at each hop.",
    result:
      "Traffic followed the expected path; a misordered nftables rule silently dropped return traffic until the chain policy was corrected.",
    learned:
      "Rule order and default chain policy matter more than rule count. Packet capture at both ends removes guesswork.",
  },
  {
    slug: "docker-networking",
    title: "Docker Networking Lab",
    label: "Lab",
    objective: "Map container-to-container and container-to-host traffic paths.",
    environment: "Docker Engine, bridge / host / custom overlay networks, iptables inspection.",
    experiment:
      "Compared service discovery and reachability across bridge, user-defined bridge and overlay networks under partial DNS failure.",
    result:
      "Embedded DNS resolved service names only on user-defined networks; the default bridge required explicit links.",
    learned:
      "Container networking behaviour is a property of the network driver, not the application.",
  },
  {
    slug: "dns-troubleshooting",
    title: "DNS Troubleshooting Lab",
    label: "Lab",
    objective: "Diagnose resolution failures caused by caching, TTL and delegation errors.",
    environment: "BIND authoritative zone, recursive resolver, dig, systemd-resolved clients.",
    experiment:
      "Introduced stale delegation and long TTL records, then measured client behaviour during a simulated failover.",
    result:
      "Failover was invisible to clients for the length of the cached TTL, extending the effective outage.",
    learned:
      "TTL is a reliability parameter. Failover plans must be designed around cache behaviour.",
  },
  {
    slug: "kubernetes-failure",
    title: "Kubernetes Failure Simulation",
    label: "Experiment",
    objective: "Observe workload behaviour during node loss and probe misconfiguration.",
    environment: "Three-node kind cluster, deployments with readiness and liveness probes.",
    experiment:
      "Drained and killed nodes during load, and deliberately misconfigured a readiness probe on a dependent service.",
    result:
      "Rescheduling worked, but a permissive readiness probe routed traffic to pods that were not ready to serve.",
    learned: "Probes are traffic-control policy. A wrong probe is worse than no replica.",
  },
  {
    slug: "terraform-infrastructure",
    title: "Terraform Infrastructure Lab",
    label: "Lab",
    objective: "Build a reproducible multi-tier network with modules and remote state.",
    environment:
      "Terraform, remote state backend with locking, reusable network and compute modules.",
    experiment:
      "Applied, destroyed and re-applied the full stack, then tested concurrent applies against the state lock.",
    result: "Rebuilds were consistent; concurrent applies were correctly blocked by state locking.",
    learned:
      "State handling, not resource syntax, is where infrastructure-as-code succeeds or fails.",
  },
  {
    slug: "linux-hardening",
    title: "Linux Security Hardening Lab",
    label: "Lab",
    objective: "Reduce attack surface on a public-facing Linux host and verify the result.",
    environment: "Ubuntu host, SSH key-only auth, nftables, auditd, fail2ban, CIS-style checklist.",
    experiment:
      "Applied hardening controls incrementally and re-scanned after each change to measure impact.",
    result: "Exposed surface reduced to a single service port with audited privileged access.",
    learned: "Hardening is only credible when each control is verified rather than assumed.",
  },
  {
    slug: "python-sockets",
    title: "Python Socket Programming Lab",
    label: "Lab",
    objective: "Understand connection handling, timeouts and back-pressure at the socket layer.",
    environment: "Python asyncio TCP server and client, artificial latency and packet loss.",
    experiment:
      "Compared blocking and asynchronous servers under slow-client and half-open connection conditions.",
    result: "Missing timeouts caused connection exhaustion long before CPU or memory saturated.",
    learned: "Most 'server is slow' incidents are connection-lifecycle problems.",
  },
  {
    slug: "load-balancing",
    title: "Load Balancing Experiment",
    label: "Experiment",
    objective: "Compare balancing algorithms and health-check behaviour under uneven load.",
    environment: "Nginx and HAProxy in front of four backends with variable response times.",
    experiment:
      "Ran round-robin, least-connections and weighted distribution while failing backends mid-test.",
    result:
      "Least-connections held tail latency down; aggressive health-check intervals caused flapping.",
    learned: "Health-check tuning affects availability as much as the algorithm choice.",
  },
];

export const engineeringDocs: EngineeringDoc[] = [
  {
    title: "Architecture Decisions",
    label: "Engineering Simulation",
    summary:
      "Decision records captured per project: context, options considered, chosen approach, reason and trade-offs.",
    items: [
      "ADR-001 — Managed database over self-hosted PostgreSQL",
      "ADR-002 — Containers on managed compute instead of a full Kubernetes cluster",
      "ADR-003 — Private subnets with a single egress path",
      "ADR-004 — Secrets in a managed store rather than pipeline variables",
    ],
  },
  {
    title: "Troubleshooting",
    label: "Lab",
    summary:
      "Structured investigations: symptom, hypothesis, evidence gathered, root cause, correction and prevention.",
    items: [
      "Intermittent 502s traced to health-check timeout shorter than app cold start",
      "DNS failover delayed by a 3600s TTL on the primary record",
      "Container-to-database timeouts caused by an asymmetric security-group rule",
      "Disk exhaustion from unrotated container logs on the host",
    ],
  },
  {
    title: "Security Engineering",
    label: "Design Exercise",
    summary:
      "Threat-informed design notes covering identity, segmentation, secrets, transport security and audit.",
    items: [
      "Trust boundary map per environment",
      "Least-privilege IAM role matrix",
      "Secrets lifecycle: issue, rotate, revoke, audit",
      "Logging and audit retention design",
    ],
  },
  {
    title: "Automation",
    label: "Engineering Simulation",
    summary:
      "Infrastructure-as-code modules, configuration automation and pipeline definitions with review gates.",
    items: [
      "Reusable Terraform network and compute modules",
      "Bash bootstrap and hardening scripts",
      "Python operational tooling for inventory and checks",
      "CI/CD pipeline with plan review before apply",
    ],
  },
  {
    title: "Technical Documentation",
    label: "Engineering Simulation",
    summary:
      "Architecture documents written so another engineer can operate the system without a handover call.",
    items: [
      "System overview and component inventory",
      "Network and data-flow diagrams",
      "Environment and configuration reference",
      "Dependency and ownership map",
    ],
  },
  {
    title: "Infrastructure Runbooks",
    label: "Engineering Simulation",
    summary: "Step-by-step operational procedures for predictable and unplanned events.",
    items: [
      "Deploy and roll back a release",
      "Rotate credentials and certificates",
      "Restore a database from backup",
      "Respond to a failed availability zone",
    ],
  },
  {
    title: "Postmortems",
    label: "Design Exercise",
    summary:
      "Blameless write-ups from simulated incidents: timeline, impact, root cause, actions and follow-up.",
    items: [
      "Simulated node loss during deployment",
      "Certificate expiry on an internal service",
      "Backup restore exceeding the recovery objective",
    ],
  },
];

export const services: Service[] = [
  {
    title: "Infrastructure Architecture",
    solves:
      "Teams building without a clear picture of tiers, boundaries, failure modes or growth path.",
    deliverables: [
      "Architecture diagram and component inventory",
      "Requirements and constraints document",
      "Decision records with trade-offs",
      "Phased implementation plan",
    ],
    technologies: ["Cloud provider services", "Linux", "Docker", "Terraform"],
  },
  {
    title: "Cloud Infrastructure",
    solves: "Manually created cloud resources nobody can reproduce, audit or safely change.",
    deliverables: [
      "VPC, subnet and routing design",
      "Compute, storage and IAM configuration",
      "Environment separation",
      "Cost and availability review",
    ],
    technologies: ["AWS", "Terraform", "IAM", "Object storage"],
  },
  {
    title: "Linux Infrastructure",
    solves: "Inconsistent servers, unclear service ownership and slow troubleshooting.",
    deliverables: [
      "Standard base image and bootstrap scripts",
      "Service, storage and permission layout",
      "Log rotation and resource monitoring",
      "Troubleshooting runbook",
    ],
    technologies: ["Ubuntu", "systemd", "nftables", "Bash"],
  },
  {
    title: "Containerization",
    solves: "Applications that behave differently across machines and environments.",
    deliverables: [
      "Dockerfiles and image build standards",
      "Container networking and volume design",
      "Registry and tagging strategy",
      "Local and deployed parity setup",
    ],
    technologies: ["Docker", "Compose", "Container registries", "Kubernetes fundamentals"],
  },
  {
    title: "Infrastructure Automation",
    solves: "Manual changes that drift, break environments and cannot be reviewed.",
    deliverables: [
      "Terraform modules with remote state and locking",
      "Configuration and bootstrap automation",
      "Python operational tooling",
      "Change review workflow",
    ],
    technologies: ["Terraform", "Python", "Bash", "Git"],
  },
  {
    title: "CI/CD",
    solves: "Slow, risky releases performed by hand.",
    deliverables: [
      "Build, test and deploy pipeline",
      "Environment promotion with approvals",
      "Rollback procedure",
      "Pipeline secrets handling",
    ],
    technologies: ["GitHub Actions", "Docker", "Terraform", "Managed secrets"],
  },
  {
    title: "Infrastructure Security",
    solves: "Flat networks, shared credentials and no audit trail.",
    deliverables: [
      "Network segmentation and firewall policy",
      "Least-privilege identity model",
      "Secrets management and rotation",
      "Logging, auditing and hardening baseline",
    ],
    technologies: ["IAM", "nftables / security groups", "TLS", "Managed secret stores"],
  },
  {
    title: "Deployment & Production Readiness",
    solves: "Systems that work in development but have no operational plan for production.",
    deliverables: [
      "Readiness review against a defined checklist",
      "Monitoring, alerting and health checks",
      "Backup and restore verification",
      "Runbooks and handover documentation",
    ],
    technologies: ["Prometheus-style metrics", "Centralised logging", "Backups", "Load balancing"],
  },
];
