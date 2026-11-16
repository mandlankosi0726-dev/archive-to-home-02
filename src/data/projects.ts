import type { Project } from "./types";

/**
 * Case-study content. Replace the placeholder text with real implementation
 * detail as projects progress — the structure stays identical.
 * Add a new project by appending an object here; routes and cards update
 * automatically.
 */

const commonPipeline = (name: string) => ({
  title: `${name} — delivery pipeline`,
  caption: "Every change reaches production through the same reviewed path.",
  nodes: [
    { label: "Commit", detail: "Feature branch, signed commits, PR required" },
    { label: "Build", detail: "Lint, unit tests, container image build" },
    { label: "Scan", detail: "Dependency, image and IaC policy scanning" },
    { label: "Plan", detail: "terraform plan published to the pull request" },
    { label: "Approve", detail: "Human review gate before any apply" },
    { label: "Deploy", detail: "Rolling release with health verification" },
    { label: "Verify", detail: "Smoke checks, metrics comparison, rollback path" },
  ],
});

export const projects: Project[] = [
  {
    slug: "insurance-platform",
    name: "Insurance Platform",
    type: "Regulated line-of-business web platform",
    status: "In progress — infrastructure design and build",
    label: "Engineering Simulation",
    summary:
      "Production-oriented infrastructure for a modern insurance platform, designed around reliability, security, scalability and operational visibility.",
    tags: ["Linux", "Cloud", "Docker", "Networking", "Security", "Automation"],
    engineeringFocus: ["Security boundaries", "Data protection", "Availability", "Auditability"],
    coreTechnologies: [
      "Ubuntu Linux",
      "AWS",
      "Docker",
      "Terraform",
      "PostgreSQL",
      "Nginx",
      "GitHub Actions",
    ],
    problem:
      "An insurance workflow handles policy documents, quotes, claims and personal data. The platform needs predictable availability during business hours, a defensible security posture around customer data, and an audit trail for every administrative action — without a dedicated operations team to run it.",
    requirements: {
      functional: [
        "Policy, quote and claim workflows with document upload",
        "Role-separated access for customers, agents and administrators",
        "Document storage with retention rules",
        "Reporting exports for finance and compliance",
      ],
      infrastructure: [
        "Separate development, staging and production environments",
        "Encryption in transit and at rest for all customer data",
        "Daily backups with a tested restore procedure",
        "Centralised logs retained for audit review",
        "Recovery objective: RPO 24h, RTO 4h for the initial phase",
      ],
    },
    constraints: [
      "Small budget — managed services preferred over self-hosted clusters",
      "Single engineer operating the platform; low operational complexity is mandatory",
      "Business-hours availability target rather than continuous global uptime",
      "Personal data must not leave the primary region",
      "Deployment must be repeatable by someone other than the original author",
    ],
    architecture: {
      title: "Insurance Platform — system architecture",
      caption: "Reference architecture for the production-oriented demonstration environment.",
      nodes: [
        { label: "Internet", detail: "Customer and agent traffic" },
        { label: "DNS / CDN", detail: "Managed zone, static asset caching, TLS certificates" },
        { label: "Load Balancer", detail: "L7 routing, HTTPS only, health checks" },
        {
          label: "Application Layer",
          detail: "Containerised app instances across two availability zones",
          boundary: "Private application subnet",
        },
        { label: "Database", detail: "Managed PostgreSQL, encrypted, automated backups" },
        { label: "Object Storage", detail: "Policy and claim documents, versioned, private" },
        {
          label: "Monitoring / Logging / Backup",
          detail: "Metrics, centralised logs, alert routing, restore drills",
          side: ["Audit trail", "Retention policy"],
        },
      ],
    },
    networkDiagram: {
      title: "Network and trust boundaries",
      nodes: [
        { label: "Public subnet", detail: "Load balancer and NAT gateway only" },
        {
          label: "Application subnet",
          detail: "No inbound internet route; ingress restricted to the load balancer",
          boundary: "Trust boundary — application",
        },
        {
          label: "Data subnet",
          detail: "Database and cache; ingress only from the application security group",
          boundary: "Trust boundary — data",
        },
        { label: "Egress", detail: "Single NAT path, allow-listed destinations, logged" },
      ],
    },
    pipelineDiagram: commonPipeline("Insurance Platform"),
    sections: [
      {
        id: "compute",
        title: "Compute",
        summary:
          "Stateless application containers on managed compute across two availability zones, sized for business-hours load with headroom for month-end peaks.",
        points: [
          "Instances are disposable; no state is written to local disk",
          "Managed compute chosen over a self-managed cluster to reduce operator load",
          "Scaling policy driven by request concurrency, not CPU alone",
          "Base image built and patched through the pipeline, never by hand",
        ],
      },
      {
        id: "containers",
        title: "Containers",
        summary:
          "Docker images are built once per commit and promoted unchanged through environments.",
        points: [
          "Multi-stage builds producing a minimal non-root runtime image",
          "Images tagged by commit SHA; environments reference immutable tags",
          "Configuration injected at runtime, never baked into the image",
          "Container logs shipped to the central log pipeline",
        ],
      },
      {
        id: "database",
        title: "Database",
        summary:
          "Managed PostgreSQL in the private data subnet, reachable only from the application security group.",
        points: [
          "Encryption at rest and enforced TLS for client connections",
          "Automated daily snapshots plus point-in-time recovery window",
          "Standby replica for failover; restore procedure tested on a schedule",
          "Credentials issued from the secret store and rotated, never in code",
        ],
      },
      {
        id: "security",
        title: "Security",
        summary:
          "Segmented network, least-privilege identity, managed secrets and full audit logging.",
        points: [
          "IAM roles scoped per service with no long-lived user keys",
          "Three-tier segmentation with default-deny security groups",
          "Secrets in a managed store with rotation and access auditing",
          "TLS end to end, including internal application-to-database traffic",
          "Host hardening: key-only SSH, minimal packages, auditd enabled",
          "Threat considerations: credential theft, document exfiltration, privilege escalation via CI",
        ],
      },
      {
        id: "automation",
        title: "Automation",
        summary: "The whole environment is described in Terraform and applied through CI/CD.",
        points: [
          "Terraform modules for network, compute, data and identity",
          "Remote state with locking; plan output reviewed before apply",
          "Bash bootstrap for host baseline configuration",
          "Python tooling for inventory checks and backup verification",
        ],
      },
      {
        id: "observability",
        title: "Observability",
        summary: "Metrics, logs and health checks feed a small number of actionable alerts.",
        points: [
          "Golden signals per service: latency, traffic, errors, saturation",
          "Structured application and access logs in one searchable store",
          "Load balancer and container health checks with defined thresholds",
          "Alerts routed to a single channel with documented response steps",
        ],
      },
      {
        id: "reliability",
        title: "Reliability",
        summary: "Redundancy where it is affordable, and a tested recovery path everywhere else.",
        points: [
          "Failure scenarios: instance loss, AZ loss, database failover, certificate expiry",
          "Multi-AZ application tier behind the load balancer",
          "Backups verified by restoring into an isolated environment",
          "Rolling deployment with automatic rollback on failed health checks",
        ],
      },
      {
        id: "testing",
        title: "Testing",
        summary: "Infrastructure changes are validated before and after apply.",
        points: [
          "Terraform validate, format and policy checks in CI",
          "Post-deploy smoke checks against critical endpoints",
          "Failure simulation: terminate an instance during load and measure recovery",
          "Restore test measured against the stated recovery objective",
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        summary: "Representative investigations recorded during build and testing.",
        points: [
          "Intermittent 502s — health-check timeout was shorter than container cold start; timeout and startup probe corrected",
          "Document upload failures — object storage policy denied a required action for the service role; policy narrowed correctly instead of widened",
          "Slow queries after a data import — missing index identified from query statistics, added via migration",
        ],
      },
    ],
    decisions: [
      {
        id: "ADR-001",
        decision: "Managed PostgreSQL instead of self-hosted",
        context:
          "Customer data requires encryption, backups and failover, operated by a single engineer.",
        options: [
          "Self-hosted PostgreSQL on VMs",
          "Managed relational database",
          "Hosted NoSQL store",
        ],
        chosen: "Managed relational database",
        reason:
          "Backups, patching and failover are provided and verifiable, which removes the highest-risk manual work.",
        tradeoffs:
          "Higher monthly cost and less control over engine tuning and extension availability.",
      },
      {
        id: "ADR-002",
        decision: "Containers on managed compute rather than Kubernetes",
        context: "The workload is a small number of stateless services with modest scale needs.",
        options: ["Managed Kubernetes", "Managed container compute", "VMs with systemd units"],
        chosen: "Managed container compute",
        reason: "Delivers rolling deploys and health checks without a control plane to operate.",
        tradeoffs:
          "Less scheduling flexibility; a future migration to Kubernetes would require rework of deployment definitions.",
      },
      {
        id: "ADR-003",
        decision: "Private application subnet with a single egress path",
        context: "The application tier must not be directly reachable from the internet.",
        options: ["Public instances with firewall rules", "Private subnets with NAT egress"],
        chosen: "Private subnets with NAT egress",
        reason: "Removes an entire class of direct-exposure risk and centralises egress logging.",
        tradeoffs: "Additional cost for NAT and more complex troubleshooting of outbound traffic.",
      },
    ],
    lessons: [
      "Compliance-shaped requirements are mostly ordinary engineering: segmentation, identity, logging and tested backups.",
      "Health-check parameters affect availability as much as replica count.",
      "Writing decision records first exposed requirements that had not been agreed.",
    ],
    future: [
      "Multi-region read replica and a documented regional failover procedure",
      "Automated evidence collection for audit reviews",
      "Policy-as-code gates on infrastructure pull requests",
      "Fine-grained data access logging at the database layer",
    ],
    repositories: [],
  },
  {
    slug: "tourism-platform",
    name: "Tourism Platform",
    type: "Booking and operations platform",
    status: "In progress — infrastructure design and build",
    label: "Engineering Simulation",
    summary:
      "Infrastructure supporting a tourism platform with online bookings, enquiries, customer management, tour operations and payment workflows.",
    tags: ["Cloud", "Containers", "Networking", "CI/CD", "Database", "Monitoring"],
    engineeringFocus: ["Seasonal scaling", "Payment integrity", "Availability", "Observability"],
    coreTechnologies: [
      "AWS",
      "Docker",
      "Terraform",
      "PostgreSQL",
      "Redis",
      "Nginx",
      "GitHub Actions",
    ],
    problem:
      "Bookings arrive in unpredictable seasonal bursts and are tied to payment workflows where a partial failure creates a real financial dispute. The infrastructure must absorb traffic spikes, keep booking state consistent, and make operational problems visible before customers report them.",
    requirements: {
      functional: [
        "Availability search and booking with payment confirmation",
        "Enquiry capture and customer records",
        "Tour operations scheduling and capacity management",
        "Transactional email for confirmations",
      ],
      infrastructure: [
        "Handle a 5–10x traffic burst during peak season",
        "No duplicate or lost bookings under retry conditions",
        "Idempotent payment callback handling",
        "Observability sufficient to detect a failed booking path within minutes",
      ],
    },
    constraints: [
      "Costs must fall back to a low baseline outside peak season",
      "Third-party payment and mapping APIs impose rate limits and latency",
      "Small operations team with limited on-call capacity",
      "Booking correctness takes priority over raw throughput",
      "Deployment windows avoid peak booking hours",
    ],
    architecture: {
      title: "Tourism Platform — system architecture",
      caption: "Reference architecture for the production-oriented demonstration environment.",
      nodes: [
        { label: "Internet", detail: "Visitors, returning customers, partner referrals" },
        { label: "DNS / CDN", detail: "Cached media and static assets, TLS at the edge" },
        { label: "Load Balancer", detail: "L7 routing, sticky-free, health checks" },
        {
          label: "Application Layer",
          detail: "Web and booking services, autoscaled by request concurrency",
          boundary: "Private application subnet",
        },
        { label: "Queue / Cache", detail: "Async payment reconciliation and availability cache" },
        { label: "Database", detail: "Managed PostgreSQL with read replica for search" },
        { label: "Object Storage", detail: "Tour media and generated documents" },
        {
          label: "Monitoring / Logging / Backup",
          detail: "Booking-funnel metrics, error tracking, alerting, backups",
          side: ["Payment webhook audit", "Retention"],
        },
      ],
    },
    networkDiagram: {
      title: "Network and trust boundaries",
      nodes: [
        { label: "Edge / CDN", detail: "Public entry, WAF rules, rate limiting" },
        { label: "Public subnet", detail: "Load balancer and NAT gateway" },
        {
          label: "Application subnet",
          detail: "Private; inbound only from the load balancer security group",
          boundary: "Trust boundary — application",
        },
        {
          label: "Data subnet",
          detail: "Database, replica and cache; no internet route at all",
          boundary: "Trust boundary — data",
        },
        { label: "Partner egress", detail: "Allow-listed payment and mapping endpoints, logged" },
      ],
    },
    pipelineDiagram: commonPipeline("Tourism Platform"),
    sections: [
      {
        id: "compute",
        title: "Compute",
        summary:
          "Autoscaled stateless services with a low off-season baseline and fast scale-out for seasonal peaks.",
        points: [
          "Booking service isolated from the marketing site so a traffic spike cannot starve checkout",
          "Scaling on request concurrency and queue depth",
          "Warm baseline capacity to avoid cold starts during a burst",
          "Background workers separated from request-serving instances",
        ],
      },
      {
        id: "containers",
        title: "Containers",
        summary: "One image per service, promoted by tag across environments.",
        points: [
          "Separate images for web, booking API and worker roles",
          "Health and readiness endpoints exposed by every image",
          "Graceful shutdown handling so in-flight bookings complete on deploy",
          "Registry retention policy to control storage cost",
        ],
      },
      {
        id: "database",
        title: "Database",
        summary:
          "Managed PostgreSQL as the source of truth for bookings, with a read replica for search-heavy queries.",
        points: [
          "Booking writes use transactions with unique constraints to prevent double booking",
          "Read replica serves availability queries to protect write latency",
          "Point-in-time recovery enabled; restores tested quarterly",
          "Connection pooling to survive burst-driven connection storms",
        ],
      },
      {
        id: "security",
        title: "Security",
        summary: "Payment-adjacent traffic is isolated, authenticated and logged end to end.",
        points: [
          "No card data stored; the payment provider is the system of record",
          "Webhook signature verification with replay protection",
          "Per-service IAM roles and short-lived credentials",
          "TLS everywhere; internal service calls authenticated",
          "Rate limiting and bot filtering at the edge",
        ],
      },
      {
        id: "automation",
        title: "Automation",
        summary: "Environments are reproducible and seasonal capacity changes are code changes.",
        points: [
          "Terraform modules parameterised for off-peak and peak capacity profiles",
          "Pipeline-driven deploys with approval outside business hours",
          "Python scripts for data seeding and reconciliation reports",
          "Scheduled jobs defined in code, not in a console",
        ],
      },
      {
        id: "observability",
        title: "Observability",
        summary: "The booking funnel itself is instrumented, not just infrastructure metrics.",
        points: [
          "Funnel metrics: search, hold, payment initiated, payment confirmed",
          "Alert on conversion drop, not only on error rate",
          "Latency and error dashboards per external dependency",
          "Structured logs correlated by booking reference",
        ],
      },
      {
        id: "reliability",
        title: "Reliability",
        summary: "Degrade gracefully rather than fail the transaction.",
        points: [
          "Payment callbacks are idempotent and retried from a durable queue",
          "Availability cache serves stale-but-usable data if the replica is slow",
          "Multi-AZ deployment for application and database tiers",
          "Deployment strategy: rolling with health gates, instant rollback by tag",
        ],
      },
      {
        id: "testing",
        title: "Testing",
        summary: "Load and failure behaviour is measured before the season, not during it.",
        points: [
          "Load test replaying a peak-day traffic profile",
          "Chaos test: kill workers mid-payment to verify idempotency",
          "Dependency failure test with the payment sandbox returning timeouts",
          "Restore drill from backup into a scratch environment",
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        summary: "Representative investigations recorded during build and testing.",
        points: [
          "Duplicate bookings under retry — traced to a non-idempotent callback handler; fixed with an idempotency key and unique constraint",
          "Connection exhaustion during a load test — resolved by adding a pooler and lowering per-instance pool size",
          "Stale availability after a schedule change — cache invalidation missing on the operations write path",
        ],
      },
    ],
    decisions: [
      {
        id: "ADR-001",
        decision: "Queue-based payment reconciliation",
        context: "Payment provider callbacks can arrive late, twice or out of order.",
        options: ["Synchronous callback handling", "Durable queue with idempotent workers"],
        chosen: "Durable queue with idempotent workers",
        reason: "Bookings stay consistent even when the provider retries or the app restarts.",
        tradeoffs: "Extra component to operate and eventual consistency in the confirmation UI.",
      },
      {
        id: "ADR-002",
        decision: "Read replica for availability search",
        context: "Search traffic vastly exceeds writes and was slowing booking transactions.",
        options: [
          "Scale the primary vertically",
          "Add a read replica",
          "Add a search index service",
        ],
        chosen: "Add a read replica",
        reason: "Immediate relief with no new data-synchronisation system to maintain.",
        tradeoffs: "Replication lag must be tolerated by search results and monitored.",
      },
      {
        id: "ADR-003",
        decision: "Separate booking service from the marketing site",
        context: "Campaign traffic must never degrade checkout.",
        options: ["Single deployment", "Separate services behind one load balancer"],
        chosen: "Separate services behind one load balancer",
        reason: "Independent scaling and failure isolation for the revenue path.",
        tradeoffs: "More deployment units and shared-code coordination overhead.",
      },
    ],
    lessons: [
      "Seasonality is an architectural requirement, not an operational detail.",
      "Idempotency is cheaper to design in than to retrofit after a reconciliation incident.",
      "Business-funnel metrics detect real failures faster than infrastructure metrics.",
    ],
    future: [
      "Dedicated search index for availability queries",
      "Automated pre-season load test in the pipeline",
      "Blue/green deployments for zero-downtime peak releases",
      "Cost anomaly alerting tied to seasonal capacity profiles",
    ],
    repositories: [],
  },
  {
    slug: "ecommerce-platform",
    name: "E-Commerce Platform",
    type: "Transactional retail platform",
    status: "In progress — infrastructure design and build",
    label: "Engineering Simulation",
    summary:
      "Scalable infrastructure for an e-commerce application covering application delivery, databases, security, deployment and operational reliability.",
    tags: ["Cloud", "Docker", "Terraform", "CI/CD", "Security", "Observability"],
    engineeringFocus: ["Scalability", "Deployment safety", "Cost control", "Observability"],
    coreTechnologies: [
      "AWS",
      "Docker",
      "Kubernetes fundamentals",
      "Terraform",
      "PostgreSQL",
      "Redis",
      "GitHub Actions",
    ],
    problem:
      "Retail traffic is spiky, checkout failures are directly measurable in lost revenue, and releases happen frequently. The infrastructure must support fast, safe deployments and hold checkout latency steady during campaign peaks while keeping baseline cost predictable.",
    requirements: {
      functional: [
        "Catalogue browsing, cart and checkout",
        "Order management and fulfilment status",
        "Inventory updates from operations",
        "Promotions and campaign landing pages",
      ],
      infrastructure: [
        "Sustain campaign peaks without checkout latency regression",
        "Multiple safe deployments per day with rollback",
        "Inventory consistency under concurrent purchases",
        "Full observability of the checkout path",
      ],
    },
    constraints: [
      "Predictable baseline monthly cost with elastic peak capacity",
      "Frequent releases require automated verification, not manual QA gates",
      "Inventory accuracy takes priority over checkout speed under contention",
      "Small team — every new component must justify its operational burden",
      "Third-party payment and shipping APIs are outside our reliability control",
    ],
    architecture: {
      title: "E-Commerce Platform — system architecture",
      caption: "Reference architecture for the production-oriented demonstration environment.",
      nodes: [
        { label: "Internet", detail: "Shoppers, campaign traffic, crawlers" },
        { label: "DNS / CDN", detail: "Static and product-image caching, WAF, TLS" },
        { label: "Load Balancer", detail: "L7 routing to storefront and checkout services" },
        {
          label: "Application Layer",
          detail: "Storefront, checkout and order services, horizontally scaled",
          boundary: "Private application subnet",
        },
        { label: "Cache", detail: "Product and session cache to protect the database" },
        { label: "Database", detail: "Managed PostgreSQL, multi-AZ, read replica" },
        { label: "Object Storage", detail: "Product media and invoices" },
        {
          label: "Monitoring / Logging / Backup",
          detail: "Checkout SLOs, error budgets, log aggregation, backups",
          side: ["Alerting", "Cost telemetry"],
        },
      ],
    },
    networkDiagram: {
      title: "Network and trust boundaries",
      nodes: [
        { label: "Edge", detail: "CDN and WAF, rate limiting, bot mitigation" },
        { label: "Public subnet", detail: "Load balancer, NAT gateway" },
        {
          label: "Application subnet",
          detail: "Private per-service security groups, default deny between services",
          boundary: "Trust boundary — application",
        },
        {
          label: "Data subnet",
          detail: "Database, replica and cache, no egress route",
          boundary: "Trust boundary — data",
        },
        { label: "Admin access", detail: "Session-based bastion access, MFA, fully logged" },
      ],
    },
    pipelineDiagram: commonPipeline("E-Commerce Platform"),
    sections: [
      {
        id: "compute",
        title: "Compute",
        summary:
          "Horizontally scaled service tiers with checkout capacity reserved independently of storefront traffic.",
        points: [
          "Checkout runs on its own scaling group so campaign browsing cannot starve it",
          "Baseline capacity sized for normal load; burst capacity provisioned on demand",
          "Right-sizing reviewed monthly against utilisation metrics",
          "No SSH into running instances during normal operations",
        ],
      },
      {
        id: "containers",
        title: "Containers",
        summary: "Immutable images with a documented promotion path from build to production.",
        points: [
          "Distroless-style minimal runtime images running as non-root",
          "Image signing and provenance recorded in the pipeline",
          "Kubernetes-compatible manifests kept ready for a future migration",
          "Resource requests and limits defined per service",
        ],
      },
      {
        id: "database",
        title: "Database",
        summary: "Managed PostgreSQL, multi-AZ, with a replica for reporting and catalogue reads.",
        points: [
          "Inventory decrements use row-level locking to prevent oversell",
          "Reporting queries isolated to the replica",
          "Automated backups plus point-in-time recovery, restore drills scheduled",
          "Schema migrations run through the pipeline with a rollback plan",
        ],
      },
      {
        id: "security",
        title: "Security",
        summary: "Segmentation, least privilege and managed secrets across every environment.",
        points: [
          "No cardholder data in scope; payment handled by the provider",
          "Per-service IAM roles, no shared credentials, no static keys in CI",
          "Secrets stored in a managed store and injected at runtime",
          "WAF rules and rate limiting on checkout and login endpoints",
          "Dependency, image and IaC scanning enforced as pipeline gates",
          "Audit logging for administrative and infrastructure changes",
        ],
      },
      {
        id: "automation",
        title: "Automation",
        summary: "Everything from network to deployment is defined in code.",
        points: [
          "Terraform modules shared across environments with per-environment variables",
          "Bash bootstrap scripts for base configuration",
          "Python tooling for release verification and cost reporting",
          "Pipeline-enforced plan review before any production apply",
        ],
      },
      {
        id: "observability",
        title: "Observability",
        summary: "SLO-driven monitoring focused on the revenue path.",
        points: [
          "Checkout availability and latency defined as explicit SLOs",
          "Metrics, logs and traces correlated by request ID",
          "Health checks at load balancer, container and dependency level",
          "Alerts fire on error-budget burn rate rather than raw spikes",
        ],
      },
      {
        id: "reliability",
        title: "Reliability",
        summary: "Safe releases and defined recovery behaviour under partial failure.",
        points: [
          "Failure scenarios: AZ loss, cache loss, payment API outage, bad deploy",
          "Cache loss degrades to database reads with a request cap, not a full outage",
          "Blue/green deployment with automated rollback on SLO regression",
          "Backups verified by restore, not by the presence of a snapshot",
        ],
      },
      {
        id: "testing",
        title: "Testing",
        summary: "Every release path is exercised before it reaches shoppers.",
        points: [
          "Load test on the checkout path at projected peak concurrency",
          "Failure injection: terminate cache and confirm graceful degradation",
          "Automated smoke tests against production after each deploy",
          "Terraform plan diff review as a mandatory change gate",
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        summary: "Representative investigations recorded during build and testing.",
        points: [
          "Checkout latency spike — cache eviction storm after a deploy; warming step added to the release process",
          "Oversell during a load test — race condition in inventory decrement; resolved with row-level locking",
          "Failed deploy left mixed versions — rollout config lacked a maxUnavailable bound; corrected and re-tested",
        ],
      },
    ],
    decisions: [
      {
        id: "ADR-001",
        decision: "Blue/green deployment for the checkout service",
        context: "Frequent releases on the revenue path require a fast, certain rollback.",
        options: ["Rolling update", "Blue/green", "Canary with traffic splitting"],
        chosen: "Blue/green",
        reason: "Rollback is a traffic switch, and verification happens before customers see it.",
        tradeoffs: "Double capacity during a release window and higher release-time cost.",
      },
      {
        id: "ADR-002",
        decision: "Managed container compute now, Kubernetes-ready manifests kept",
        context: "The team cannot operate a cluster today, but growth may require one.",
        options: ["Managed Kubernetes now", "Managed container compute", "VM-based deployment"],
        chosen: "Managed container compute",
        reason: "Lower operational burden now, with a documented migration path preserved.",
        tradeoffs: "Some duplicated deployment configuration to keep the migration path valid.",
      },
      {
        id: "ADR-003",
        decision: "Cache as an optimisation, never as a dependency",
        context: "A cache outage previously took down the entire storefront in testing.",
        options: ["Cache-required reads", "Cache-optional reads with a database fallback"],
        chosen: "Cache-optional reads with a capped database fallback",
        reason: "Degraded performance is acceptable; a full outage is not.",
        tradeoffs: "Additional code paths to maintain and test on every release.",
      },
    ],
    lessons: [
      "Deployment strategy is a reliability control, not a convenience.",
      "Cost and architecture decisions are the same decision at retail scale.",
      "An SLO makes it clear when to stop optimising and when to stop shipping.",
    ],
    future: [
      "Migrate to Kubernetes once service count and team size justify it",
      "Canary releases with automated traffic-shifting analysis",
      "Multi-region static delivery with regional failover for checkout",
      "Automated cost anomaly detection tied to deploys",
    ],
    repositories: [],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
