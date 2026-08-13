import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the Reddy Anna Connect information and support website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms / Website use"
      title="Clear terms for a simple service."
      intro="These terms apply to your use of this informational website and its links to customer support."
      updated="13 August 2026"
    >
      <h2>Purpose of the website</h2>
      <p>
        Reddy Anna Connect provides general information about non-money digital
        entertainment, community and customer support. It does not provide
        wagering, deposits, withdrawals, monetary prizes or payment services.
      </p>

      <h2>Appropriate use</h2>
      <p>
        Use this website lawfully and respectfully. Do not attempt to disrupt
        the site, misrepresent your identity, interfere with other visitors, or
        use the support channel for abusive, fraudulent or unlawful activity.
      </p>

      <h2>Information and availability</h2>
      <p>
        We aim to keep the information clear and current, but website content may
        change. Access may occasionally be interrupted for maintenance, hosting
        issues or updates. No statement on this site is a guarantee of continuous
        availability or a specific outcome.
      </p>

      <h2>External services</h2>
      <p>
        WhatsApp is a third-party service with its own terms and privacy policy.
        Opening a WhatsApp link does not make WhatsApp part of this website, and
        your use of that service is governed by its applicable terms.
      </p>

      <h2>Age and local rules</h2>
      <p>
        Use age-appropriate services and follow the rules that apply in your
        location. Parents and guardians should guide younger users’ access to
        online communities and digital entertainment.
      </p>
    </LegalPage>
  );
}
