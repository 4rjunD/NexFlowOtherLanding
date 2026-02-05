import { EnterpriseHeader } from '@/components/ui/enterprise-header'
import { Footer7 } from '@/components/ui/footer-7'
import { EnterpriseHero } from '@/components/blocks/enterprise-hero'
import { Features } from '@/components/blocks/features-11'
import { EnterpriseFeaturesSection } from '@/components/blocks/enterprise-features-section'
import { TestimonialSection } from '@/components/blocks/testimonial-section'
import { WhoItsFor } from '@/components/blocks/who-its-for'
import { HowItWorks } from '@/components/blocks/how-it-works'
import { EnterpriseContact } from '@/components/blocks/enterprise-contact'

export default function Enterprise() {
  return (
    <main className="bg-[#fcf6ef]">
      {/* Header */}
      <EnterpriseHeader />

      {/* 1. Hero Section */}
      <EnterpriseHero />

      {/* 2. Problem Section */}
      <EnterpriseFeaturesSection />

      {/* 3. Solution - Connected intelligence, integrations */}
      <Features />

      {/* 4. Social Proof */}
      <TestimonialSection />

      {/* 5. Who It's For */}
      <WhoItsFor />

      {/* 6. How It Works - 3 clear steps */}
      <HowItWorks />

      {/* 7. Final CTA */}
      <EnterpriseContact />

      {/* Footer */}
      <Footer7 />
    </main>
  )
}
