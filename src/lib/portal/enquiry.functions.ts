import { siteConfig } from "@/config/site";

type Enquiry = { data: Record<string, unknown> & { fullName: string; email: string; website_url?: string } };

// Temporary: enquiries open the visitor's email app until the database is migrated.
export async function submitEnquiry({ data }: Enquiry) {
  if (data.website_url) return;
  const body = Object.entries(data)
    .filter(([k, v]) => v && k !== "website_url" && k !== "consent")
    .map(([k, v]) => `${k}: ${String(v)}`)
    .join("\n");
  window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Project enquiry from ${data.fullName}`,
  )}&body=${encodeURIComponent(body)}`;
}
