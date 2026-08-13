import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { ResponsibleSection } from "@/components/sections/responsible-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SupportSteps } from "@/components/sections/support-steps";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <BenefitsSection />
        <SupportSteps />
        <ResponsibleSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton variant="mobile-sticky" label="WhatsApp support" />
    </>
  );
}
