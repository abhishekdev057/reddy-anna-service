import { GraphicIcon } from "@/components/ui/graphic-icon";
import { CustomerSupportIllustration } from "@/components/ui/customer-support-illustration";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-dots" aria-hidden="true" />
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-glow hero-glow--amber" />
        <span className="hero-glow hero-glow--cool" />
        <span className="hero-ring hero-ring--one" />
        <span className="hero-ring hero-ring--two" />
        <span className="hero-symbol hero-symbol--play"><GraphicIcon name="play" /></span>
        <span className="hero-symbol hero-symbol--sparkle"><GraphicIcon name="sparkle" /></span>
        <span className="hero-symbol hero-symbol--chat"><GraphicIcon name="chat" /></span>
        <span className="hero-trail hero-trail--one" />
        <span className="hero-trail hero-trail--two" />
      </div>

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

        <div className="hero-visual reveal reveal--delay">
          <div className="hero-visual__art">
            <span className="hero-visual__halo" aria-hidden="true" />
            <CustomerSupportIllustration />
          </div>
          <div className="hero-visual__caption">
            <span className="hero-visual__kicker"><i /> Human support</span>
            <p>Real people. Clear answers.<br />One direct conversation.</p>
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
