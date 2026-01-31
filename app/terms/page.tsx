import { EnterpriseHeader } from '@/components/ui/enterprise-header'
import { Footer7 } from '@/components/ui/footer-7'

export const metadata = {
  title: 'Terms of Service - NexFlow',
  description: 'NexFlow Terms of Service and User Agreement',
}

export default function TermsOfService() {
  return (
    <main className="bg-[#fcf6ef]">
      <EnterpriseHeader />
      <div className="pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#000] mb-4"
            style={{
              fontFamily: 'var(--font-halant), Halant, Georgia, serif',
              fontWeight: 400,
              letterSpacing: '-0.03em',
            }}
          >
            Terms of Service
          </h1>
          <p
            className="text-[#94877c] mb-12"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            Last updated: January 30, 2026
          </p>

          <div
            className="prose prose-lg max-w-none text-[#000]"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                1. Acceptance of Terms
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                By accessing or using NexFlow's services, platform, website, or any associated applications (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
              </p>
              <p className="text-[#94877c] leading-relaxed">
                If you do not agree to these Terms, you may not access or use the Services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting. Your continued use of the Services constitutes acceptance of any modified Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                2. Description of Services
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                NexFlow provides an AI-powered operational intelligence platform that connects to various third-party tools and services to aggregate, analyze, and act on organizational data. Our Services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li>Integration with communication, engineering, project management, marketing, and productivity tools</li>
                <li>Real-time monitoring and pattern detection across connected systems</li>
                <li>Predictive analytics and anomaly detection</li>
                <li>Autonomous actions based on configurable rules and thresholds</li>
                <li>Dashboard and reporting capabilities</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                3. Account Registration and Security
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                To use certain features of the Services, you must register for an account. You agree to provide accurate, current, and complete information during registration and to keep this information updated. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
                <li>Ensuring that your use of the Services complies with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                4. Subscription and Payment
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                Access to NexFlow Services requires a paid subscription. By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li>Pay all fees associated with your selected subscription plan</li>
                <li>Provide valid payment information and authorize recurring charges</li>
                <li>Accept that fees are non-refundable except as expressly stated in these Terms</li>
                <li>Acknowledge that we may change pricing with 30 days' notice</li>
              </ul>
              <p className="text-[#94877c] leading-relaxed">
                All sales are final. We do not offer refunds or trials. Subscriptions automatically renew unless cancelled before the renewal date.
              </p>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                5. Acceptable Use
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                You agree not to use the Services to:
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Transmit malware, viruses, or other harmful code</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Interfere with or disrupt the integrity or performance of the Services</li>
                <li>Reverse engineer, decompile, or disassemble any aspect of the Services</li>
                <li>Use the Services for any illegal, fraudulent, or unauthorized purpose</li>
                <li>Collect or harvest user data without proper authorization</li>
                <li>Resell, sublicense, or redistribute the Services without our written consent</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                6. Data and Privacy
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Services, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.
              </p>
              <p className="text-[#94877c] leading-relaxed mb-4">
                You retain ownership of all data you submit to the Services ("Customer Data"). You grant NexFlow a limited, non-exclusive license to process Customer Data solely for the purpose of providing the Services.
              </p>
              <p className="text-[#94877c] leading-relaxed">
                You are responsible for ensuring that you have the necessary rights and consents to submit Customer Data to the Services, including any personal data of your employees or team members.
              </p>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                7. Third-Party Integrations
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                The Services integrate with third-party applications and services. Your use of these integrations is subject to the terms and privacy policies of those third parties. NexFlow is not responsible for the actions or policies of any third-party services.
              </p>
              <p className="text-[#94877c] leading-relaxed">
                You authorize NexFlow to access and process data from connected third-party services on your behalf in accordance with the permissions you grant during integration setup.
              </p>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                8. Intellectual Property
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                The Services, including all software, algorithms, models, designs, text, graphics, and other content, are owned by NexFlow or its licensors and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Services without our express written permission.
              </p>
              <p className="text-[#94877c] leading-relaxed">
                NexFlow reserves the right to use anonymized, aggregated data derived from your use of the Services to improve our products and services.
              </p>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                9. Disclaimer of Warranties
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY.
              </p>
              <p className="text-[#94877c] leading-relaxed">
                We do not warrant that the Services will be uninterrupted, error-free, or secure. You acknowledge that AI-powered features may produce inaccurate results and that autonomous actions should be configured and monitored carefully.
              </p>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                10. Limitation of Liability
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXFLOW AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES.
              </p>
              <p className="text-[#94877c] leading-relaxed">
                OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO NEXFLOW IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                11. Indemnification
              </h2>
              <p className="text-[#94877c] leading-relaxed">
                You agree to indemnify, defend, and hold harmless NexFlow and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or related to your use of the Services, your violation of these Terms, or your violation of any rights of a third party.
              </p>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                12. Termination
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                You may terminate your account at any time by contacting us. We may terminate or suspend your access to the Services immediately, without prior notice, for any reason, including if you breach these Terms.
              </p>
              <p className="text-[#94877c] leading-relaxed">
                Upon termination, your right to use the Services will cease immediately. We may delete your Customer Data within 30 days of termination unless legally required to retain it.
              </p>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                13. Governing Law and Disputes
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
              </p>
              <p className="text-[#94877c] leading-relaxed">
                Any disputes arising out of or related to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in Delaware, and the arbitrator's decision shall be final and binding.
              </p>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                14. General Provisions
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                These Terms constitute the entire agreement between you and NexFlow regarding the Services and supersede any prior agreements. If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in effect.
              </p>
              <p className="text-[#94877c] leading-relaxed">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of that right or provision. You may not assign or transfer these Terms without our prior written consent.
              </p>
            </section>

            <section className="mb-10">
              <h2
                className="text-2xl text-[#000] mb-4"
                style={{
                  fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                  fontWeight: 500,
                }}
              >
                15. Contact Information
              </h2>
              <p className="text-[#94877c] leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-[#94877c] leading-relaxed mt-4">
                NexFlow Inc.<br />
                Email: legal@nexflowinc.com<br />
                Website: nexflowinc.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer7 />
    </main>
  )
}
