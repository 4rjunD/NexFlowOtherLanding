import { EnterpriseHeader } from '@/components/ui/enterprise-header'
import { EnterpriseHero } from '@/components/blocks/enterprise-hero'
import { CommandCenterSection } from '@/components/blocks/command-center-section'
import { HowItWorksSteps } from '@/components/blocks/how-it-works-steps'
import { WhyNexflowSection } from '@/components/blocks/why-nexflow-section'
import { PricingSection } from '@/components/blocks/pricing-section-new'

export default function Enterprise() {
  return (
    <main className="bg-[#000000]">
      <EnterpriseHeader />
      <EnterpriseHero />
      <CommandCenterSection />
      <WhyNexflowSection />
      <HowItWorksSteps />
      <PricingSection />
    </main>
  )
}
