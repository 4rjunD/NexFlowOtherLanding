import { EnterpriseHeader } from '@/components/ui/enterprise-header'
import { Footer7 } from '@/components/ui/footer-7'

export const metadata = {
  title: 'Privacy Policy - NexFlow',
  description: 'NexFlow Privacy Policy - How we collect, use, and protect your data',
}

export default function PrivacyPolicy() {
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
            Privacy Policy
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
                1. Introduction
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                NexFlow Inc. ("NexFlow," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered operational intelligence platform and related services (collectively, the "Services").
              </p>
              <p className="text-[#94877c] leading-relaxed">
                By accessing or using our Services, you consent to the practices described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use our Services.
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
                2. Information We Collect
              </h2>

              <h3 className="text-lg text-[#000] mt-6 mb-3 font-medium">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li><strong>Account Information:</strong> Name, email address, company name, job title, and password when you create an account</li>
                <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment processors)</li>
                <li><strong>Communications:</strong> Information you provide when contacting us for support or inquiries</li>
                <li><strong>Configuration Data:</strong> Settings, preferences, and rules you configure within the platform</li>
              </ul>

              <h3 className="text-lg text-[#000] mt-6 mb-3 font-medium">2.2 Information from Connected Services</h3>
              <p className="text-[#94877c] leading-relaxed mb-4">
                When you connect third-party services to NexFlow, we collect and process data from those services based on the permissions you grant, including:
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li><strong>Communication Data:</strong> Messages, activity patterns, and metadata from platforms like Slack, Microsoft Teams, and email</li>
                <li><strong>Engineering Data:</strong> Repository activity, commit history, pull requests, and CI/CD metrics from platforms like GitHub and GitLab</li>
                <li><strong>Project Management Data:</strong> Tasks, assignments, status updates, and deadlines from tools like Notion, Linear, Jira, and Asana</li>
                <li><strong>Marketing Data:</strong> Campaign performance, ad spend, and analytics from platforms like Meta Ads, Google Ads, HubSpot, and Salesforce</li>
                <li><strong>Automation Data:</strong> Workflow executions and triggers from N8N, Zapier, and similar tools</li>
                <li><strong>Biometric and Wellness Data:</strong> If enabled, health and wellness metrics from devices like Oura, Whoop, and Apple Health (only with explicit consent)</li>
              </ul>

              <h3 className="text-lg text-[#000] mt-6 mb-3 font-medium">2.3 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li><strong>Usage Data:</strong> Features used, actions taken, and time spent on the platform</li>
                <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
                <li><strong>Log Data:</strong> Server logs, error reports, and performance data</li>
                <li><strong>Cookies and Tracking:</strong> Information collected through cookies and similar technologies</li>
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
                3. How We Use Your Information
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li><strong>Provide Services:</strong> To operate, maintain, and deliver the features and functionality of our platform</li>
                <li><strong>Analytics and Insights:</strong> To analyze patterns, detect anomalies, and generate actionable intelligence for your organization</li>
                <li><strong>Autonomous Actions:</strong> To execute automated actions based on your configured rules and thresholds</li>
                <li><strong>Improve Services:</strong> To understand how users interact with our platform and make improvements</li>
                <li><strong>Communications:</strong> To send service-related notices, updates, and promotional materials (with your consent)</li>
                <li><strong>Support:</strong> To respond to your inquiries and provide customer support</li>
                <li><strong>Security:</strong> To detect, prevent, and address fraud, security issues, and technical problems</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
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
                4. How We Share Your Information
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our Services (e.g., cloud hosting, payment processing, analytics)</li>
                <li><strong>Connected Services:</strong> With third-party applications you choose to integrate, to enable functionality</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Legal Requirements:</strong> When required by law, subpoena, or court order, or to protect our rights and safety</li>
                <li><strong>With Your Consent:</strong> In any other circumstance where you have provided explicit consent</li>
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
                5. Sale of Information
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                We may sell, license, or share aggregated, anonymized, or de-identified data derived from your use of the Services to third parties for commercial purposes, including marketing, analytics, research, and product development. In the future, we may also sell or share personal information with third-party partners for their own marketing or business purposes.
              </p>
              <p className="text-[#94877c] leading-relaxed mb-4">
                <strong>Your Right to Opt Out:</strong> You have the right to opt out of the sale or sharing of your personal information at any time. To opt out, you may:
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li>Email us at privacy@nexflowinc.com with the subject line "Do Not Sell My Information"</li>
                <li>Adjust your privacy settings in your account dashboard</li>
                <li>Submit an opt-out request through our website</li>
              </ul>
              <p className="text-[#94877c] leading-relaxed mb-4">
                <strong>Your Right to Delete:</strong> You may request deletion of your personal information at any time by contacting us at privacy@nexflowinc.com. Upon receiving a verified deletion request, we will delete your personal information from our records within 30 days, unless we are legally required to retain it.
              </p>
              <p className="text-[#94877c] leading-relaxed">
                Please note that opting out of data sales or requesting deletion will not affect data that has already been shared or sold prior to your request.
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
                6. Data Retention
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                We retain your information for as long as necessary to provide our Services and fulfill the purposes described in this Privacy Policy. Specifically:
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li><strong>Account Data:</strong> Retained while your account is active and for 30 days after account deletion</li>
                <li><strong>Connected Service Data:</strong> Processed in real-time and retained according to your configured retention settings (default: 90 days)</li>
                <li><strong>Usage Logs:</strong> Retained for up to 12 months for analytics and troubleshooting</li>
                <li><strong>Legal Compliance:</strong> Certain data may be retained longer if required by law</li>
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
                7. Data Security
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                We implement robust security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li><strong>Encryption:</strong> All data is encrypted at rest (AES-256) and in transit (TLS 1.3)</li>
                <li><strong>Access Controls:</strong> Strict role-based access controls and authentication mechanisms</li>
                <li><strong>Infrastructure:</strong> Hosted on secure cloud infrastructure</li>
                <li><strong>Monitoring:</strong> Continuous security monitoring and vulnerability assessments</li>
                <li><strong>Incident Response:</strong> Established procedures for responding to security incidents</li>
              </ul>
              <p className="text-[#94877c] leading-relaxed">
                While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
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
                8. Your Rights and Choices
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal requirements</li>
                <li><strong>Portability:</strong> Request a portable copy of your data in a structured format</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications and certain data processing activities</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              </ul>
              <p className="text-[#94877c] leading-relaxed">
                To exercise these rights, please contact us at privacy@nexflowinc.com. We will respond to your request within 30 days.
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
                9. International Data Transfers
              </h2>
              <p className="text-[#94877c] leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including Standard Contractual Clauses approved by relevant authorities.
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
                10. Cookies and Tracking Technologies
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                We use cookies and similar tracking technologies to collect information about your browsing activity. Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li><strong>Essential Cookies:</strong> Required for the platform to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our Services</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-[#94877c] leading-relaxed">
                You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our Services.
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
                11. Third-Party Links
              </h2>
              <p className="text-[#94877c] leading-relaxed">
                Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any information.
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
                12. California Privacy Rights
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                California residents have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li>Right to know what personal information is collected, used, shared, or sold</li>
                <li>Right to delete personal information held by businesses</li>
                <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising CCPA rights</li>
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
                13. European Privacy Rights (GDPR)
              </h2>
              <p className="text-[#94877c] leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have rights under the General Data Protection Regulation (GDPR), including those described in Section 7 above. Our legal bases for processing your information include:
              </p>
              <ul className="list-disc pl-6 text-[#94877c] space-y-2 mb-4">
                <li><strong>Contract:</strong> Processing necessary to perform our contract with you</li>
                <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
                <li><strong>Consent:</strong> Processing based on your explicit consent</li>
                <li><strong>Legal Obligation:</strong> Processing necessary to comply with legal requirements</li>
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
                14. Changes to This Privacy Policy
              </h2>
              <p className="text-[#94877c] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of the Services after such changes constitutes acceptance of the updated Privacy Policy.
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
                15. Contact Us
              </h2>
              <p className="text-[#94877c] leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <p className="text-[#94877c] leading-relaxed mt-4">
                NexFlow Inc.<br />
                Email: privacy@nexflowinc.com<br />
                Website: nexflowinc.com
              </p>
              <p className="text-[#94877c] leading-relaxed mt-4">
                For data protection inquiries in the EU, you may also contact your local data protection authority.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer7 />
    </main>
  )
}
