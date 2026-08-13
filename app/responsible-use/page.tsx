import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Responsible Use",
  description: "Practical guidance for balanced, safe and age-appropriate digital entertainment.",
  alternates: { canonical: "/responsible-use" },
};

export default function ResponsibleUsePage() {
  return (
    <LegalPage
      eyebrow="Guidance / Responsible use"
      title="Enjoy digital spaces with balance."
      intro="A few practical habits can make digital entertainment and online communities safer and more enjoyable."
      updated="13 August 2026"
    >
      <h2>Keep a healthy balance</h2>
      <p>
        Decide how much time you want to spend before you begin, take regular
        breaks and make space for sleep, work, study, movement and time with
        people offline.
      </p>

      <h2>Protect personal information</h2>
      <ul>
        <li>Do not share passwords, verification codes or financial details.</li>
        <li>Use unique passwords and enable account security features where available.</li>
        <li>Pause before sharing your name, location or other identifying information.</li>
      </ul>

      <h2>Choose age-appropriate experiences</h2>
      <p>
        Follow the age guidance and community rules for each digital service.
        Parents and guardians should review services used by younger people and
        discuss privacy, respectful behaviour and screen-time boundaries.
      </p>

      <h2>Keep conversations respectful</h2>
      <p>
        Treat other community members and support staff with respect. Step away
        from conversations that become hostile, and use the reporting tools
        offered by a platform if you encounter harassment or unsafe behaviour.
      </p>

      <h2>Know when to step away</h2>
      <p>
        If digital entertainment stops feeling enjoyable or begins affecting
        everyday responsibilities, take a longer break and speak with someone
        you trust.
      </p>
    </LegalPage>
  );
}
