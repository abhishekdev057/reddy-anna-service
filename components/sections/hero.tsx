import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="shell hero-inner">
        <div className="hero-copy reveal">
          <p className="eyebrow hero-eyebrow"><span /> Reddy Anna Connect</p>
          <h1 id="hero-title">
            Digital entertainment.<br />
            Simple support.<br />
            <em>One direct connection.</em>
          </h1>
          <p className="hero-intro">
            A straightforward place to learn about our non-money digital
            entertainment community and speak with a real support person when
            you need guidance.
          </p>
          <div className="hero-actions">
            <WhatsAppButton />
            <a className="text-link" href="#services">
              Explore services <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-aside reveal reveal--delay" aria-label="Reddy Anna Connect service summary">
          <div className="hero-aside__top">
            <span>Connection / 01</span>
            <span className="status"><i /> Support channel</span>
          </div>
          <div className="hero-aside__words" aria-hidden="true">
            <span>Discover</span>
            <strong>Connect</strong>
            <span>Get support</span>
          </div>
          <div className="hero-aside__bottom">
            <p>Clear information.<br />Direct communication.</p>
            <span className="monogram">RA</span>
          </div>
        </div>
      </div>
      <div className="shell hero-foot">
        <span>Non-money digital entertainment</span>
        <span>Community-led support</span>
        <span>Mobile-first access</span>
      </div>
    </section>
  );
}
