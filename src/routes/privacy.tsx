import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/primitives";
import { siteConfig } from "@/config/site";
export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ArpScayl" },
      {
        name: "description",
        content: "How ArpScayl handles information submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy — ArpScayl" },
      {
        property: "og:description",
        content: "How ArpScayl handles website enquiries and personal information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});
function Privacy() {
  return (
    <Section
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Draft privacy notice for ArpScayl Systems. Confirm data handling, retention, business details and rights processes with a privacy professional before launch."
    >
      <div className="max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">Information you provide</h2>
          <p className="mt-2">
            When you submit the enquiry form, the information you provide is sent to ArpScayl’s
            operations system and stored with the resulting enquiry record so the team can assess
            and respond. The form also uses a short-lived, one-way hash of the request IP address to
            limit automated or repeated submissions; the hash is not the original address and
            rate-limit entries older than 48 hours are removed during subsequent submissions.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Sharing and retention</h2>
          <p className="mt-2">
            Enquiry information is available to authorised ArpScayl staff who handle the request.
            ArpScayl does not sell personal information or share it with third parties for
            marketing. Records are retained for communication, business records and applicable legal
            obligations. Please contact ArpScayl to ask about access, correction or deletion,
            subject to applicable record-keeping requirements. This policy is a project draft and
            needs review by a privacy professional before production use.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Contact</h2>
          <p className="mt-2">
            Privacy questions can be sent to{" "}
            <a className="text-primary" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </Section>
  );
}
