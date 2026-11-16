export type Solution = {
  id: string;
  title: string;
  problem: string;
  situation: string;
  approach: string;
  deliverables: string[];
  services: string[];
};
export const solutions: Solution[] = [
  {
    id: "new-platform",
    title: "Building a New Digital Platform",
    problem: "A new application needs a dependable production foundation before launch.",
    situation:
      "The product exists, but infrastructure boundaries, deployment, security and recovery have not been defined.",
    approach:
      "Translate application and business requirements into a documented infrastructure architecture, then implement it in controlled stages.",
    deliverables: [
      "Requirements and constraints",
      "Architecture and network design",
      "Deployment foundation",
      "Operational documentation",
    ],
    services: ["Architecture & Design", "Infrastructure Build"],
  },
  {
    id: "modernisation",
    title: "Modernising Existing Infrastructure",
    problem:
      "Manual configuration, weak documentation or accumulated complexity makes change risky.",
    situation:
      "The current environment operates, but ownership, dependencies and recovery paths are unclear.",
    approach:
      "Establish the current state, prioritise operational risk, and move toward documented, repeatable infrastructure.",
    deliverables: [
      "Current-state assessment",
      "Risk register",
      "Target architecture",
      "Phased improvement roadmap",
    ],
    services: ["Infrastructure Assessment", "Infrastructure Build"],
  },
  {
    id: "cloud",
    title: "Moving Workloads to the Cloud",
    problem:
      "A workload needs a deliberate cloud architecture rather than a direct server-for-server move.",
    situation:
      "The business is evaluating or preparing migration, but networking, identity, availability and cost decisions remain open.",
    approach:
      "Assess dependencies and constraints before designing the target network, identity, compute, storage and migration path.",
    deliverables: [
      "Migration assessment",
      "Cloud architecture",
      "Security boundaries",
      "Implementation plan",
    ],
    services: ["Cloud Infrastructure", "Architecture & Design"],
  },
  {
    id: "deployment",
    title: "Improving Deployment Processes",
    problem: "Manual releases are inconsistent, difficult to audit and hard to reverse.",
    situation:
      "The application works, but deployments depend on individual knowledge or repeated manual steps.",
    approach:
      "Containerise where appropriate, automate build and release stages, and define verification and rollback procedures.",
    deliverables: [
      "Container standards",
      "CI/CD workflow",
      "Environment configuration",
      "Rollback documentation",
    ],
    services: ["DevOps & Deployment Automation"],
  },
  {
    id: "security",
    title: "Strengthening Infrastructure Security",
    problem:
      "Infrastructure controls have grown unevenly or have not been reviewed as a connected system.",
    situation:
      "Identity, network access, secrets, logging or host configuration may expose avoidable risk.",
    approach:
      "Assess the attack surface and trust boundaries, then apply prioritised, documented controls.",
    deliverables: [
      "Security findings",
      "Hardening baseline",
      "Access and network controls",
      "Remediation roadmap",
    ],
    services: ["Security Hardening", "Infrastructure Assessment"],
  },
  {
    id: "growth",
    title: "Preparing Infrastructure for Growth",
    problem:
      "Higher demand or a larger delivery team is exposing architectural and operational limits.",
    situation:
      "Performance, deployment, cost or support concerns are appearing as usage increases.",
    approach:
      "Identify bottlenecks and failure modes, then improve capacity, isolation, observability and operational procedures.",
    deliverables: [
      "Capacity and reliability review",
      "Scaling architecture",
      "Monitoring design",
      "Priority implementation plan",
    ],
    services: ["Systems Architecture", "Infrastructure Support"],
  },
];
