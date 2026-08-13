import { SectionHeading } from "@/components/ui/section-heading";
import { GraphicIcon } from "@/components/ui/graphic-icon";

const services = [
  {
    number: "01",
    icon: "entertainment",
    title: "Digital Entertainment",
    copy: "Learn about casual, non-money digital experiences in one clear place.",
  },
  {
    number: "02",
    icon: "community",
    title: "Sports Community",
    copy: "Connect around sports conversations, shared interests and community updates.",
  },
  {
    number: "03",
    icon: "chat",
    title: "Customer Assistance",
    copy: "Ask service questions and get practical guidance from a real support person.",
  },
  {
    number: "04",
    icon: "mobile",
    title: "Mobile Support",
    copy: "Reach the team through a familiar WhatsApp chat, wherever you are.",
  },
] as const;

export function ServicesSection() {
  return (
    <section className="section section--paper" id="services">
      <div className="shell">
        <SectionHeading
          eyebrow="Services / 02"
          title="A focused set of services. Nothing hidden."
          copy="Clear information and direct support, designed around simple digital access."
        />
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card__top">
                <span>{service.number}</span>
                <i aria-hidden="true" />
              </div>
              <div className="service-card__icon">
                <GraphicIcon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
