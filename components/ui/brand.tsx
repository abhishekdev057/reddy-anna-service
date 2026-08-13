import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Reddy Anna Connect home">
      <span className="brand-mark" aria-hidden="true">RA</span>
      <span className="brand-name">
        <strong>Reddy Anna</strong>
        <span>Connect</span>
      </span>
    </Link>
  );
}
