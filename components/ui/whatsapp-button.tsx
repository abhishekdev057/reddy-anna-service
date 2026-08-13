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
      <span className="whatsapp-button__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.4 15.65A10.4 10.4 0 0 1 11 24.75L5.2 26.6l1.9-5.58A10.4 10.4 0 1 1 26.4 15.65Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 10.45c.35-.15.7-.08.9.28l1.15 2.1c.17.3.1.65-.1.9l-.8.95c-.18.2-.2.48-.05.72.55.95 1.45 1.88 2.42 2.43.25.14.53.12.73-.06l.92-.82c.26-.22.62-.28.92-.1l2.1 1.2c.35.2.42.55.26.9-.4.9-1.37 1.72-2.45 1.72-2.2 0-4.62-1.5-6.24-3.12-1.62-1.62-3.1-4.05-3.1-6.25 0-1.08.83-2.05 1.74-2.45Z" fill="currentColor" />
        </svg>
      </span>
      <span>{label}</span>
      {variant !== "mobile-sticky" && <span aria-hidden="true">↗</span>}
    </a>
  );
}
