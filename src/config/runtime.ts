const env = import.meta.env;

const readString = (value: string | undefined, fallback: string) => value?.trim() || fallback;
export const runtimeConfig = {
  siteName: readString(env["VITE_SITE_NAME"], "ArpScayl"),
  companyName: readString(env["VITE_COMPANY_NAME"], "ArpScayl"),
  businessLocation: readString(env["VITE_BUSINESS_LOCATION"], "Johannesburg, South Africa"),
  marketStatement: readString(
    env["VITE_MARKET_STATEMENT"],
    "Independent infrastructure engineering practice based in Johannesburg, South Africa.",
  ),
  contactEmail: readString(env["VITE_CONTACT_EMAIL"], "hello@arp-scayl.com"),
  contactPhone: readString(env["VITE_CONTACT_PHONE"], "+27 79 460 0839"),
  contactPhoneHref: readString(env["VITE_CONTACT_PHONE_HREF"], "+27794600839"),
  githubUrl: readString(env["VITE_GITHUB_URL"], ""),
  linkedinUrl: readString(env["VITE_LINKEDIN_URL"], ""),
  siteUrl: readString(env["VITE_SITE_URL"], "http://localhost:8080"),
} as const;
