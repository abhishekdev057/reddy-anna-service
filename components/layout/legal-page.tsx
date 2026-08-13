import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, intro, updated, children }: LegalPageProps) {
  return (
    <div className="legal-page">
      <Header />
      <main>
        <header className="legal-hero">
          <div className="shell">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
        </header>
        <section className="legal-content">
          <div className="shell legal-content__inner">
            <aside className="legal-aside">Last updated<br />{updated}</aside>
            <div className="legal-copy">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
