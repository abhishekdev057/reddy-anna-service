import { GraphicIcon } from "@/components/ui/graphic-icon";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const orbitItems = [
  { label: "Explore", icon: "play" as const, position: "top" },
  { label: "Have fun", icon: "sparkle" as const, position: "right" },
  { label: "Get support", icon: "chat" as const, position: "bottom" },
] as const;

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

        <div className="hero-aside reveal reveal--delay" aria-label="Explore entertainment and get direct support">
          <div className="hero-aside__top">
            <span>Connection / 01</span>
            <span className="status"><i /> Support channel</span>
          </div>

          <div className="orbit-stage" aria-hidden="true">
            <div className="orbit-ring orbit-ring--outer">
              <span className="orbit-dot orbit-dot--one" />
              <span className="orbit-dot orbit-dot--two" />
            </div>
            <div className="orbit-ring orbit-ring--inner" />
            <div className="orbit-core">
              <span>Discover</span>
              <strong>Connect</strong>
              <small>Together</small>
            </div>
            {orbitItems.map((item) => (
              <div className={`orbit-token orbit-token--${item.position}`} key={item.label}>
                <GraphicIcon name={item.icon} />
                <span>{item.label}</span>
              </div>
            ))}
            <span className="orbit-spark orbit-spark--one" />
            <span className="orbit-spark orbit-spark--two" />
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
