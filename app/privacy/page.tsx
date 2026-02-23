import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Privacy Policy - NexFlow',
  description: 'NexFlow Privacy Policy - How we collect, use, and protect your data',
}

const dmSans = 'var(--font-dm-sans), "DM Sans", -apple-system, sans-serif'

export default function PrivacyPolicy() {
  return (
    <main style={{ background: '#f9f8f6', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="nf-legal-header" style={{ maxWidth: 720, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/enterprise">
            <Image src="/logo.png" alt="NexFlow" width={437} height={387} style={{ height: 24, width: 'auto', objectFit: 'contain' }} />
          </Link>
          <Link href="/enterprise" style={{ fontFamily: dmSans, fontSize: 13, color: '#999', textDecoration: 'none' }}>Back to home</Link>
        </div>
      </header>

      <div className="nf-legal-content" style={{ maxWidth: 720, margin: '0 auto', padding: '64px 24px 96px' }}>
        <h1 className="nf-legal-title" style={{ fontFamily: dmSans, fontSize: 36, fontWeight: 700, color: '#1a1a2e', letterSpacing: '-0.03em', marginBottom: 8 }}>
          Privacy Policy
        </h1>
        <p style={{ fontFamily: dmSans, fontSize: 14, color: '#999', marginBottom: 48 }}>
          Last updated: February 22, 2026
        </p>

        {[
          {
            title: '1. Introduction',
            content: 'NexFlow Inc. ("NexFlow," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our engineering intelligence platform and related services (collectively, the "Services"). By accessing or using our Services, you consent to the practices described in this Privacy Policy.',
          },
          {
            title: '2. Information We Collect',
            content: 'We collect information you provide directly (account details, payment information, communications), information from connected services you authorize (GitHub, Slack, Linear, Jira, calendar data, repository activity, project management data), and information collected automatically (usage data, device information, cookies). We only access third-party data based on permissions you explicitly grant.',
          },
          {
            title: '3. How We Use Your Information',
            content: 'We use collected information to: operate and deliver our platform features; analyze engineering patterns and generate health reports; provide predictive analytics and risk detection; improve our services; send service-related communications; respond to support inquiries; detect and prevent security issues; and comply with applicable laws.',
          },
          {
            title: '4. How We Share Your Information',
            content: 'We may share information with: trusted service providers who assist in operating our Services (cloud hosting, analytics); connected third-party applications you choose to integrate; in connection with a merger, acquisition, or sale of assets; when required by law; or with your explicit consent. We do not sell your personal information to third parties.',
          },
          {
            title: '5. Data Security',
            content: 'We implement robust security measures including: encryption at rest (AES-256) and in transit (TLS 1.3); strict role-based access controls; secure cloud infrastructure; continuous security monitoring and vulnerability assessments; and established incident response procedures. While we strive to protect your information, no method of transmission is 100% secure.',
          },
          {
            title: '6. Data Retention',
            content: 'Account data is retained while your account is active and for 30 days after deletion. Connected service data is processed in real-time and retained according to your configured settings (default: 90 days). Usage logs are retained for up to 12 months. Certain data may be retained longer if required by law.',
          },
          {
            title: '7. Your Rights',
            content: 'Depending on your location, you may have rights to: access a copy of your personal information; correct inaccurate data; request deletion of your data; obtain a portable copy; opt out of marketing communications; restrict or object to certain processing. To exercise these rights, contact us at privacy@nexflowinc.com. We will respond within 30 days.',
          },
          {
            title: '8. California Privacy Rights (CCPA)',
            content: 'California residents have additional rights under the CCPA: right to know what personal information is collected, used, or shared; right to delete personal information; right to opt out of data sales (we do not sell personal information); and right to non-discrimination for exercising CCPA rights.',
          },
          {
            title: '9. European Privacy Rights (GDPR)',
            content: 'If you are in the EEA, UK, or Switzerland, our legal bases for processing include: contract performance, legitimate business interests, explicit consent, and legal obligation. You may also contact your local data protection authority. International data transfers are protected by Standard Contractual Clauses.',
          },
          {
            title: '10. Cookies',
            content: 'We use essential cookies (required for platform functionality), analytics cookies (to understand usage patterns), and preference cookies (to remember your settings). You can control cookies through your browser settings. Disabling certain cookies may affect functionality.',
          },
          {
            title: '11. Changes to This Policy',
            content: 'We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy and changing the "Last updated" date. Continued use of the Services after changes constitutes acceptance.',
          },
          {
            title: '12. Contact Us',
            content: 'NexFlow Inc.\nEmail: privacy@nexflowinc.com\nGeneral inquiries: arjundixit@nexflowinc.com\nWebsite: nexflowinc.com',
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
        <div className="nf-footer-responsive" style={{ maxWidth: 720, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
