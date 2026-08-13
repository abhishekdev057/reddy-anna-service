import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section className="section section--ivory" id="about">
      <div className="shell about-grid">
        <SectionHeading eyebrow="About / 01" title="Entertainment made easier to understand." />
        <div className="about-copy">
          <p>
            Reddy Anna Connect is an information and support destination for
            people exploring non-money digital entertainment and community
            experiences. We keep the journey focused: useful context first,
            direct human help when it is needed.
          </p>
          <p>
            There are no payment, deposit, wagering or prize features on this
            website. Our purpose here is clear communication and customer
            assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
