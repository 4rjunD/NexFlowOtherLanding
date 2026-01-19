import { EnterpriseHeader } from '@/components/ui/enterprise-header'
import { Footer7 } from '@/components/ui/footer-7'
import { EnterpriseHero } from '@/components/blocks/enterprise-hero'
import { EnterpriseFeaturesSection } from '@/components/blocks/enterprise-features-section'
import { EnterpriseFeatures } from '@/components/blocks/features-10'
import { EnterprisePricing } from '@/components/blocks/enterprise-pricing'
import { EnterpriseFAQ } from '@/components/blocks/enterprise-faq'
import { EnterpriseContact } from '@/components/blocks/enterprise-contact'

export default function Enterprise() {
  return (
    <main className="bg-[#F6F4EF]">
      <EnterpriseHeader />
      <EnterpriseHero />
      <EnterpriseFeaturesSection />
      <EnterpriseFeatures />
      <EnterprisePricing />
      <EnterpriseFAQ />
      <EnterpriseContact />
      <Footer7 />
    </main>
  )
}
