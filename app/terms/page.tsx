import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Terms of Service - NexFlow',
  description: 'NexFlow Terms of Service and User Agreement',
}

const dmSans = 'var(--font-dm-sans), "DM Sans", -apple-system, sans-serif'

export default function TermsOfService() {
  return (
    <main style={{ background: '#f9f8f6', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/enterprise">
            <Image src="/logo.png" alt="NexFlow" width={437} height={387} style={{ height: 24, width: 'auto', objectFit: 'contain' }} />
          </Link>
          <Link href="/enterprise" style={{ fontFamily: dmSans, fontSize: 13, color: '#999', textDecoration: 'none' }}>Back to home</Link>
        </div>
      </header>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '64px 24px 96px' }}>
        <h1 style={{ fontFamily: dmSans, fontSize: 36, fontWeight: 700, color: '#1a1a2e', letterSpacing: '-0.03em', marginBottom: 8 }}>
          Terms of Service
        </h1>
        <p style={{ fontFamily: dmSans, fontSize: 14, color: '#999', marginBottom: 48 }}>
          Last updated: February 22, 2026
        </p>

        {[
          {
            title: '1. Acceptance of Terms',
            content: 'By accessing or using NexFlow\'s services, platform, website, or any associated applications (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization. If you do not agree, you may not use the Services.',
          },
          {
            title: '2. Description of Services',
            content: 'NexFlow provides an AI-powered engineering intelligence platform that connects to third-party tools to aggregate, analyze, and report on engineering health data. Our Services include: integration with engineering, communication, and project management tools; real-time monitoring and pattern detection; predictive analytics and risk identification; weekly engineering health reports; and dashboard capabilities.',
          },
          {
            title: '3. Account Registration and Security',
            content: 'To use certain features, you must register for an account with accurate information. You are responsible for: maintaining the confidentiality of your credentials; all activities under your account; notifying us immediately of unauthorized use; and ensuring your use complies with applicable laws.',
          },
          {
            title: '4. Subscription and Payment',
            content: 'Access to NexFlow requires a paid subscription. You agree to pay all fees for your selected plan, provide valid payment information, and accept that fees are non-refundable except as expressly stated. We may change pricing with 30 days\' notice. Subscriptions automatically renew unless cancelled before the renewal date.',
          },
          {
            title: '5. Acceptable Use',
            content: 'You agree not to: violate any applicable laws or third-party rights; transmit malware or harmful code; attempt unauthorized access to our systems; interfere with service performance; reverse engineer any aspect of the Services; use the Services for illegal purposes; collect user data without authorization; or resell the Services without written consent.',
          },
          {
            title: '6. Data and Privacy',
            content: 'Your use is also governed by our Privacy Policy. You retain ownership of all data you submit ("Customer Data"). You grant NexFlow a limited license to process Customer Data solely for providing the Services. You are responsible for ensuring you have the necessary rights and consents to submit data, including personal data of team members.',
          },
          {
            title: '7. Third-Party Integrations',
            content: 'The Services integrate with third-party applications subject to their own terms and policies. NexFlow is not responsible for third-party actions or policies. You authorize NexFlow to access and process data from connected services on your behalf per the permissions you grant.',
          },
          {
            title: '8. Intellectual Property',
            content: 'The Services, including all software, algorithms, models, designs, and content, are owned by NexFlow or its licensors and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission. NexFlow may use anonymized, aggregated data to improve products and services.',
          },
          {
            title: '9. Disclaimer of Warranties',
            content: 'THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. We do not warrant uninterrupted, error-free, or secure operation. AI-powered features may produce inaccurate results and should be monitored carefully.',
          },
          {
            title: '10. Limitation of Liability',
            content: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXFLOW SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, OR GOODWILL. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO NEXFLOW IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.',
          },
          {
            title: '11. Indemnification',
            content: 'You agree to indemnify, defend, and hold harmless NexFlow and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the Services, violation of these Terms, or violation of any third-party rights.',
          },
          {
            title: '12. Termination',
            content: 'You may terminate your account at any time by contacting us. We may terminate or suspend access immediately for any breach of these Terms. Upon termination, your right to use the Services ceases and Customer Data may be deleted within 30 days unless legally required to be retained.',
          },
          {
            title: '13. Governing Law',
            content: 'These Terms are governed by the laws of the State of Delaware. Any disputes shall be resolved through binding arbitration in accordance with the American Arbitration Association rules, taking place in Delaware.',
          },
          {
            title: '14. General Provisions',
            content: 'These Terms constitute the entire agreement between you and NexFlow regarding the Services. If any provision is unenforceable, the remaining provisions remain in effect. Our failure to enforce any right is not a waiver. You may not assign these Terms without our written consent.',
          },
          {
            title: '15. Contact Information',
            content: 'NexFlow Inc.\nEmail: legal@nexflowinc.com\nGeneral inquiries: arjundixit@nexflowinc.com\nWebsite: nexflowinc.com',
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: dmSans, fontSize: 20, fontWeight: 700, color: '#1a1a2e', marginBottom: 12 }}>
              {section.title}
            </h2>
            <p style={{ fontFamily: dmSans, fontSize: 15, color: '#666', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ background: '#f9f8f6', borderTop: '1px solid rgba(0,0,0,0.06)', padding: 24 }}>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Image src="/logo.png" alt="NexFlow" width={437} height={387} style={{ height: 18, width: 'auto', objectFit: 'contain' }} />
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/privacy" style={{ fontFamily: dmSans, fontSize: 13, color: '#999', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/terms" style={{ fontFamily: dmSans, fontSize: 13, color: '#999', textDecoration: 'none' }}>Terms</Link>
            <Link href="mailto:arjundixit@nexflowinc.com" style={{ fontFamily: dmSans, fontSize: 13, color: '#999', textDecoration: 'none' }}>Contact</Link>
          </div>
          <span style={{ fontFamily: dmSans, fontSize: 13, color: '#999' }}>&copy; 2026 NexFlow Inc.</span>
        </div>
      </footer>
    </main>
  )
}
