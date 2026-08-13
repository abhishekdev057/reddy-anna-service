import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  ["01", "Simple experience", "A concise website with clear paths and plain-language information."],
  ["02", "Human support", "A direct WhatsApp connection when a conversation is more useful."],
  ["03", "Mobile friendly", "A responsive experience built to work comfortably on smaller screens."],
  ["04", "Direct communication", "One consistent support channel without confusing forms or hand-offs."],
] as const;

export function BenefitsSection() {
  return (
    <section className="section section--dark" id="why-us">
      <div className="shell benefits-layout">
        <div className="benefits-intro">
          <SectionHeading eyebrow="Why us / 03" title="Built for clarity, not clutter." light />
          <p>Good support starts with an experience that respects your time.</p>
        </div>
        <div className="benefits-list">
          {benefits.map(([number, title, copy]) => (
            <article className="benefit-row" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
