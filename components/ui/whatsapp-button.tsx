import { WHATSAPP_URL } from "@/lib/site";

type WhatsAppButtonProps = {
  label?: string;
  variant?: "primary" | "header" | "mobile-sticky";
};

export function WhatsAppButton({
  label = "Chat on WhatsApp",
  variant = "primary",
}: WhatsAppButtonProps) {
  return (
    <a
      className={`whatsapp-button whatsapp-button--${variant}`}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
    >
      <span className="whatsapp-button__mark" aria-hidden="true">WA</span>
      <span>{label}</span>
      {variant !== "mobile-sticky" && <span aria-hidden="true">↗</span>}
    </a>
  );
}
