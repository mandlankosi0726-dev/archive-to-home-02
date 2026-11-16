import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/primitives";
export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — ArpScayl" },
      {
        name: "description",
        content: "Website terms for ArpScayl infrastructure and technology engineering services.",
      },
      { property: "og:title", content: "Terms of Service — ArpScayl" },
      { property: "og:description", content: "Terms applying to use of the ArpScayl website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});
function Terms() {
  return (
    <Section
      eyebrow="Legal"
      title="Terms of Service"
      intro="Website terms draft. Project-specific scope, responsibilities and commercial terms are agreed separately in writing; have this notice reviewed before launch."
    >
      <div className="max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">Website information</h2>
          <p className="mt-2">
            Content on this website is general information and does not constitute a binding
            proposal, warranty or guarantee.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Case studies</h2>
          <p className="mt-2">
            Reference architectures, simulations and demonstrations are presented as technical
            evidence. They are not claims of customer deployment unless explicitly stated.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Engagements</h2>
          <p className="mt-2">
            Services begin only after scope, deliverables, responsibilities, fees and terms are
            agreed in writing.
          </p>
        </section>
      </div>
    </Section>
  );
}
