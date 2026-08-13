import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { SUPPORT_PHONE_DISPLAY } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="shell final-cta__inner">
        <div>
          <p className="eyebrow">A direct connection</p>
          <h2>Need help? Talk directly with our team.</h2>
        </div>
        <div className="final-cta__action">
          <p>{SUPPORT_PHONE_DISPLAY}</p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
