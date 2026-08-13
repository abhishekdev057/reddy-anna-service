import Link from "next/link";

export function ResponsibleSection() {
  return (
    <section className="responsible-section">
      <div className="shell responsible-inner">
        <div className="responsible-mark" aria-hidden="true">18+</div>
        <div>
          <p className="eyebrow">Responsible use</p>
          <h2>Keep digital entertainment balanced and age-appropriate.</h2>
        </div>
        <p>
          Take regular breaks, protect your personal information and follow the
          age guidance that applies to each service you use.
        </p>
        <Link className="text-link text-link--light" href="/responsible-use">
          Read our guidance <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
