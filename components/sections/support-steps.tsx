import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  ["01", "Visit Reddy Anna Connect", "Review our services and find the information you need."],
  ["02", "Message the support team", "Open the pre-filled WhatsApp chat from this website."],
  ["03", "Get assistance", "Ask your question and receive guidance through the conversation."],
] as const;

export function SupportSteps() {
  return (
    <section className="section section--ivory" id="support">
      <div className="shell">
        <SectionHeading
          eyebrow="Support / 04"
          title="Three simple steps to a real conversation."
        />
        <ol className="steps-grid">
          {steps.map(([number, title, copy]) => (
            <li key={number}>
              <span className="step-number">{number}</span>
              <div className="step-line" aria-hidden="true"><i /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
