type GraphicIconName =
  | "chat"
  | "community"
  | "entertainment"
  | "mobile"
  | "play"
  | "sparkle";

type GraphicIconProps = {
  name: GraphicIconName;
  className?: string;
};

export function GraphicIcon({ name, className }: GraphicIconProps) {
  const common = {
    className,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  if (name === "play") {
    return (
      <svg {...common}>
        <circle cx="16" cy="16" r="11.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13.4 11.8 21 16l-7.6 4.2v-8.4Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "sparkle") {
    return (
      <svg {...common}>
        <path d="M16 3.5c.75 6.35 3.15 8.75 9.5 9.5-6.35.75-8.75 3.15-9.5 9.5-.75-6.35-3.15-8.75-9.5-9.5 6.35-.75 8.75-3.15 9.5-9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M25.5 21.25c.28 2.4 1.1 3.22 3.5 3.5-2.4.28-3.22 1.1-3.5 3.5-.28-2.4-1.1-3.22-3.5-3.5 2.4-.28 3.22-1.1 3.5-3.5Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "chat") {
    return (
      <svg {...common}>
        <path d="M7 8.5h18v12H14l-5.5 4v-4H7v-12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 13h10M11 16.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "community") {
    return (
      <svg {...common}>
        <circle cx="10" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.5 23c.5-4.25 2.35-6.25 5.5-6.25s5 2 5.5 6.25M16.5 23c.5-4.25 2.35-6.25 5.5-6.25s5 2 5.5 6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 8.25h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 3" />
      </svg>
    );
  }

  if (name === "mobile") {
    return (
      <svg {...common}>
        <rect x="9" y="3.75" width="14" height="24.5" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 7h6M14 24.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="m13.5 16 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M7 20.5 9.5 12h13l2.5 8.5c.65 2.2-2.05 3.7-3.5 1.9L19.5 20h-7l-2 2.4C9.05 24.2 6.35 22.7 7 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11 16h4M13 14v4M20.5 14.75h.01M22.5 17h.01" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M13 9.25c1.6-1.3 4.4-1.3 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
