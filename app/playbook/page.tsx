import { PlaybookHeader } from '@/components/ui/playbook-header'
import { Footer7 } from '@/components/ui/footer-7'
import { PlaybookHero } from '@/components/ui/playbook-hero'
import FeaturedSectionStats from '@/components/ui/featured-section-stats'
import GlobeFeatureSection from '@/components/ui/globe-feature-section'

export default function Playbook() {
  return (
    <main className="pt-28 bg-[#F6F4EF] min-h-screen">
      <PlaybookHeader />
      <PlaybookHero />
      <FeaturedSectionStats />
      <div className="pb-24 px-4">
        <GlobeFeatureSection />
      </div>
      <Footer7 />
    </main>
  )
}
