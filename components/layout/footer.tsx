import Link from "next/link";
import { Brand } from "@/components/ui/brand";
import { SUPPORT_PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Support", href: "/#support" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Responsible Use", href: "/responsible-use" },
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Information, community and human support for digital entertainment.</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </div>
        <div className="footer-contact">
          <p className="eyebrow">Direct contact</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            {SUPPORT_PHONE_DISPLAY}
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© 2026 Reddy Anna Connect. All rights reserved.</p>
        <p>Designed for clear, responsible communication.</p>
      </div>
    </footer>
  );
}
