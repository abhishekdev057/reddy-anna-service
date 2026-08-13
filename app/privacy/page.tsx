import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Reddy Anna Connect handles information and external support links.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy / Information"
      title="Privacy, explained plainly."
      intro="This page describes the limited information involved when you visit Reddy Anna Connect or choose to contact support."
      updated="13 August 2026"
    >
      <h2>Information on this website</h2>
      <p>
        Reddy Anna Connect does not ask you to create an account, submit a form,
        or provide payment information on this website. We do not install
        behavioural analytics or fingerprinting tools by default.
      </p>

      <h2>Basic hosting data</h2>
      <p>
        Like most websites, our hosting provider may process limited technical
        information needed to deliver and secure the site, such as IP address,
        browser type, requested page and access time. This information may be
        retained in infrastructure logs according to the hosting provider’s
        policies.
      </p>

      <h2>WhatsApp communication</h2>
      <p>
        If you select a WhatsApp link, you leave this website and open a service
        operated by WhatsApp/Meta. The information you send there is handled
        under WhatsApp’s terms and privacy policy. Only share information needed
        for your support question, and never send passwords or financial details.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This version of the website does not use advertising cookies or invasive
        tracking. If that changes, this notice should be updated before those
        technologies are enabled.
      </p>

      <h2>Contact</h2>
      <p>
        For a privacy question about your support conversation, contact the team
        through <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">the official WhatsApp support link</a>.
      </p>
    </LegalPage>
  );
}
