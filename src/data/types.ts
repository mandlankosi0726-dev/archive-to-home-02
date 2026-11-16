/**
 * Shared content types.
 * All site content lives in frontend/src/data/* as plain typed objects so new projects,
 * labs, services or documents can be added without touching components.
 */

export type DiagramNode = {
  /** Layer or tier label, e.g. "Load Balancer" */
  label: string;
  /** Short technical annotation shown under the label */
  detail?: string;
  /** Optional side-channel components attached to this layer */
  side?: string[];
  /** Marks a security / trust boundary starting at this layer */
  boundary?: string;
};

export type Diagram = {
  title: string;
  caption?: string;
  nodes: DiagramNode[];
};

export type KeyValue = { key: string; value: string };

export type DecisionRecord = {
  id: string;
  decision: string;
  context: string;
  options: string[];
  chosen: string;
  reason: string;
  tradeoffs: string;
};

export type CaseStudySection = {
  id: string;
  title: string;
  summary: string;
  points: string[];
};

export type Project = {
  slug: string;
  name: string;
  type: string;
  status: string;
  /** "Portfolio Project" | "Lab" | "Design Exercise" | "Experiment" */
  label: string;
  summary: string;
  tags: string[];
  engineeringFocus: string[];
  coreTechnologies: string[];
  problem: string;
  requirements: { functional: string[]; infrastructure: string[] };
  constraints: string[];
  architecture: Diagram;
  networkDiagram: Diagram;
  pipelineDiagram: Diagram;
  sections: CaseStudySection[];
  decisions: DecisionRecord[];
  lessons: string[];
  future: string[];
  repositories: { label: string; kind: string; url: string }[];
};

export type Capability = {
  index: string;
  title: string;
  description: string;
  evidence: string[];
  href: string;
};

export type Lab = {
  slug: string;
  title: string;
  label: string;
  objective: string;
  environment: string;
  experiment: string;
  result: string;
  learned: string;
};

export type Service = {
  title: string;
  solves: string;
  deliverables: string[];
  technologies: string[];
};

export type EngineeringDoc = {
  title: string;
  label: string;
  summary: string;
  items: string[];
};
