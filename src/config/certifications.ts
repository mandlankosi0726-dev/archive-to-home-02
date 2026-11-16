/**
 * Certifications. The section only renders when this list contains an enabled
 * entry — no placeholder badges are ever displayed.
 */

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
  logo?: string;
  enabled: boolean;
};

export const certifications: Certification[] = [
  // {
  //   name: "Demo Infrastructure Security",
  //   issuer: "ArpScayl (Demo)",
  //   date: "2026-09-25",
  //   credentialUrl: "/demo-cert.txt",
  //   credentialId: "DEMO-001",
  //   logo: "",
  //   enabled: true,
  // },
];

export const activeCertifications = certifications.filter((c) => c.enabled);
