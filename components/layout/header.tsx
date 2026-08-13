import { navItems } from "@/lib/site";
import { Brand } from "@/components/ui/brand";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="header-action">
          <WhatsAppButton variant="header" label="WhatsApp Support" />
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
          </summary>
          <div className="mobile-menu__panel">
            <nav aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <a href={item.href} key={item.href}>
                  <span>0{index + 1}</span>{item.label}
                </a>
              ))}
            </nav>
            <WhatsAppButton label="Message support" />
          </div>
        </details>
      </div>
    </header>
  );
}
