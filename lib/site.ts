export const SUPPORT_PHONE_DISPLAY = "+91 73578 20018";
export const SUPPORT_PHONE_E164 = "917357820018";
export const SUPPORT_MESSAGE =
  "Hello Reddy Anna team, I would like to know more about your services.";

export const WHATSAPP_URL = `https://wa.me/${SUPPORT_PHONE_E164}?text=${encodeURIComponent(
  SUPPORT_MESSAGE,
)}`;

export const SITE_NAME = "Reddy Anna Connect";

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Support", href: "/#support" },
] as const;
