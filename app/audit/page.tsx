"use client"

import { useState } from 'react'
import Link from 'next/link'

const SYNE = 'var(--font-syne), "Syne", sans-serif'
const MONO = 'var(--font-dm-mono), "DM Mono", monospace'

const ACCENT = '#00ff87'
const ACCENT_DIM = 'rgba(0,255,135,0.08)'
const BG = '#0a0a0a'
const SURFACE = '#111111'
const BORDER = '#1e1e1e'
const MUTED = '#666'
const DANGER = '#ff4444'

function AuditForm({
  idPrefix,
  onSuccess,
}: {
  idPrefix: string
  onSuccess?: () => void
}) {
  const [form, setForm] = useState({ firstName: '', company: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!form.firstName || !form.company || !form.email || !form.phone) {
      alert('Please fill in all fields.')
      return
    }
    if (!form.email.includes('@') || !form.email.includes('.')) {
      alert('Please enter a valid email.')
      return
    }

    setLoading(true)
    try {
      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      // Still show success
    } finally {
      setLoading(false)
      setSubmitted(true)
      onSuccess?.()
    }
  }

  if (submitted) {
    return (
      <div className="audit-success">
        <div className="audit-success-icon">✓</div>
        <h3 className="audit-success-title">Audit doc on its way.</h3>
        <p className="audit-success-desc">
          Check your inbox — we&apos;ll also send you a sample risk report so you know exactly what NexFlow catches.
        </p>
        <a
          href="https://calendly.com/arjundixit3508/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="audit-success-btn"
        >
          Book a walkthrough instead →
        </a>
      </div>
    )
  }

  return (
    <div className="audit-form-wrap">
      <div className="audit-form-row">
        <input
          type="text"
          placeholder="First name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          required
          className="audit-input"
        />
        <input
          type="text"
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          required
          className="audit-input"
        />
      </div>
      <div className="audit-form-row">
        <input
          type="email"
          placeholder="Work email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="audit-input"
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          className="audit-input"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="audit-btn-primary"
      >
        {loading ? 'Sending...' : 'Get the Free Audit Doc →'}
      </button>
    </div>
  )
}

/* ── Data ── */
const auditItems = [
  { num: '01', title: 'PR Velocity Analysis', desc: 'Which PRs are sitting too long, which reviewers are bottlenecks, and where review debt is building up.' },
  { num: '02', title: 'Sprint Health Score', desc: 'Velocity trends over 90 days, scope creep signals, and which sprints are headed for a miss right now.' },
  { num: '03', title: 'Blocker Spread Map', desc: 'Blockers about to cascade across teams — caught before they take down two sprints instead of one.' },
  { num: '04', title: 'Context Switch Load', desc: "Engineers context-switching too much drop 40% in output. We show you who's overloaded before it shows up in velocity." },
  { num: '05', title: 'Top 3 Risk Flags', desc: 'The three most urgent things in your org right now, ranked by impact, with a recommended action for each.' },
]

const riskCards = [
  { severity: 'high' as const, label: 'High Risk', title: 'Auth migration stalled', desc: 'Blocked on infra review for 5 days. Two downstream teams waiting. Sprint miss probable.', eta: 'ETA miss: ~4 days' },
  { severity: 'medium' as const, label: 'Medium Risk', title: 'Payments PR backlog', desc: '3 PRs stale >48h. Single reviewer bottleneck identified. Reassignment recommended.', eta: 'Escalate today' },
  { severity: 'medium' as const, label: 'Medium Risk', title: 'Velocity drop — Platform team', desc: 'Sprint velocity down 18% vs 4-week average. Context switch load at 2.4x normal.', eta: 'Investigate scope creep' },
  { severity: 'low' as const, label: 'Stable', title: 'Frontend team on track', desc: 'Velocity consistent. No stale PRs. Low blocker exposure this sprint.', eta: 'No action needed' },
]

const severityColors = { high: DANGER, medium: '#ff9500', low: ACCENT }

const mathRows = [
  { label: 'Average cost of one missed engineering deadline', value: '$50,000+', isAccent: false },
  { label: 'NexFlow monthly cost', value: '$300/mo', isAccent: false },
  { label: 'NexFlow annual cost', value: '$3,600/yr', isAccent: false },
  { label: 'ROI from catching one delay per year', value: '13.8x', isAccent: true },
]

const steps = [
  { num: '01', title: 'Connect your stack', desc: 'GitHub, Jira or Linear, Slack. Read-only OAuth. 10 minutes. Nothing changes for your engineers.' },
  { num: '02', title: 'We scan 90 days of signals', desc: "PR cycles, sprint patterns, blocker chains, context switch load. The signals your tools already create — just never synthesized." },
  { num: '03', title: 'Risk report in your inbox', desc: "Every Monday before standup. One page. What's slipping, why, what to do. No dashboard, no noise." },
]

export default function AuditPage() {
  const [heroSubmitted, setHeroSubmitted] = useState(false)

  const handleBottomSuccess = () => {
    setHeroSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="audit-page">
      {/* Grain overlay */}
      <div className="audit-grain" />

      {/* ── NAV ── */}
      <nav className="audit-nav">
        <Link href="/enterprise" className="audit-logo">
          Nex<span>Flow</span>
        </Link>
        <Link href="/enterprise" className="audit-nav-back">
          ← Back to site
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section className="audit-hero">
        <div className="audit-hero-grid">
          {/* Left — copy */}
          <div className="audit-hero-left">
            <div className="audit-badge">
              <span className="audit-pulse audit-badge-dot" />
              Free Engineering Risk Audit
            </div>

            <h1 className="audit-h1">
              Your next missed deadline is <em>already</em> forming.
            </h1>

            <p className="audit-subhead">
              We scan your GitHub, Jira, and Slack and show you exactly which teams
              are about to miss their deadline. Free, 48-hour turnaround.
            </p>

{/* (social proof moved into form card) */}
          </div>

          {/* Right — form card */}
          <div className="audit-hero-right">
            <div className="audit-form-card">
              <p className="audit-form-card-label">
                For VPs of Eng, CTOs, and engineering leaders
              </p>

              {heroSubmitted ? (
                <div className="audit-success">
                  <div className="audit-success-icon">✓</div>
                  <h3 className="audit-success-title">Audit doc on its way.</h3>
                  <p className="audit-success-desc">
                    Check your inbox — we&apos;ll also send you a sample risk report so you know exactly what NexFlow catches.
                  </p>
                  <a
                    href="https://calendly.com/arjundixit3508/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="audit-success-btn"
                  >
                    Book a walkthrough instead →
                  </a>
                </div>
              ) : (
                <AuditForm idPrefix="hero" onSuccess={() => setHeroSubmitted(true)} />
              )}

              <p className="audit-form-note">
                No spam. No pitch. Just the audit doc.
              </p>

              <div className="audit-form-trust">
                {[
                  'Free, yours to keep',
                  'Covers 90 days of data',
                  'Delivered in 48 hours',
                ].map((text) => (
                  <div key={text} className="audit-trust-item">
                    <svg width="12" height="12" fill="none" stroke={ACCENT} strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="audit-divider" />

      {/* ── WHAT YOU GET ── */}
      <section className="audit-section">
        <div className="audit-section-label">What you get</div>
        <h2 className="audit-h2">
          A 5-point risk scan of<br />your engineering org.<br /><span>Free. Yours to keep.</span>
        </h2>

        {/* Audit grid */}
        <div className="audit-grid">
          {auditItems.map((item) => (
            <div key={item.num} className="audit-grid-item">
              <div className="audit-grid-num">{item.num}</div>
              <h3 className="audit-grid-title">{item.title}</h3>
              <p className="audit-grid-desc">{item.desc}</p>
            </div>
          ))}
          <div className="audit-grid-item audit-grid-cta">
            <div className="audit-grid-num">→</div>
            <h3 className="audit-grid-title">Delivered as a one-page report</h3>
            <p className="audit-grid-desc">
              No dashboard to log into. No alerts to configure. One clean document in your inbox before standup.
            </p>
          </div>
        </div>

        {/* Report preview */}
        <div className="audit-report">
          <div className="audit-report-header">
            <div className="audit-report-header-left">
              <div className="audit-dot" style={{ background: DANGER }} />
              <div className="audit-dot" style={{ background: '#ff9500' }} />
              <div className="audit-dot" style={{ background: ACCENT }} />
              <span className="audit-report-title">NexFlow Risk Report — Week of Mar 10, 2026</span>
            </div>
            <span className="audit-report-date">Sample output</span>
          </div>
          <div className="audit-report-body">
            {riskCards.map((card) => (
              <div
                key={card.title}
                className="audit-risk-card"
                style={{ borderLeftColor: severityColors[card.severity] }}
              >
                <div className="audit-risk-label" style={{ color: severityColors[card.severity] }}>
                  {card.label}
                </div>
                <div className="audit-risk-title">{card.title}</div>
                <div className="audit-risk-desc">{card.desc}</div>
                <span className="audit-risk-eta">{card.eta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="audit-divider" />

      {/* ── THE MATH ── */}
      <section className="audit-section">
        <div className="audit-section-label">The math</div>
        <h2 className="audit-h2">
          One caught delay pays<br />for <span>10 years</span> of NexFlow.
        </h2>

        <div className="audit-math-block">
          {mathRows.map((row, i) => (
            <div
              key={row.label}
              className="audit-math-row"
              style={{ borderBottom: i < mathRows.length - 1 ? `1px solid ${BORDER}` : 'none' }}
            >
              <span className="audit-math-label">{row.label}</span>
              <span
                className={`audit-math-value ${row.isAccent ? 'accent' : ''}`}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      <hr className="audit-divider" />

      {/* ── HOW IT WORKS ── */}
      <section className="audit-section">
        <div className="audit-section-label">How it works</div>
        <h2 className="audit-h2">
          Three steps.<br /><span>Report in 48 hours.</span>
        </h2>

        <div className="audit-steps">
          {steps.map((step) => (
            <div key={step.num} className="audit-step">
              <div className="audit-step-num">{step.num}</div>
              <div>
                <h3 className="audit-step-title">{step.title}</h3>
                <p className="audit-step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="audit-bottom-cta">
        <h2 className="audit-bottom-h2">
          See your risks before<br />your next <span>sprint review.</span>
        </h2>
        <p className="audit-bottom-sub">
          Free audit. No commitment. Yours to keep regardless.
        </p>

        {heroSubmitted ? (
          <p className="audit-bottom-done">
            ✓ Your audit is on its way. Check your inbox.
          </p>
        ) : (
          <AuditForm idPrefix="bottom" onSuccess={handleBottomSuccess} />
        )}
      </section>

      {/* ── FOOTER ── */}
      <footer className="audit-footer">
        <Link href="/enterprise" className="audit-footer-logo">
          Nex<span>Flow</span>
        </Link>
        <div className="audit-footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="mailto:arjundixit@nexflowinc.com">Contact</Link>
        </div>
        <span>© 2026 NexFlow Inc.</span>
      </footer>

      {/* ── ALL STYLES ── */}
      <style jsx global>{`
        /* ── Base ── */
        .audit-page {
          background: ${BG};
          color: #f0f0f0;
          font-family: ${MONO};
          font-size: 15px;
          line-height: 1.6;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .audit-grain {
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1000;
          opacity: 0.4;
        }

        /* ── Nav ── */
        .audit-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 40px;
          border-bottom: 1px solid ${BORDER};
          position: sticky;
          top: 0;
          background: rgba(10,10,10,0.92);
          backdrop-filter: blur(12px);
          z-index: 100;
        }

        .audit-logo {
          font-family: ${SYNE};
          font-weight: 800;
          font-size: 18px;
          letter-spacing: -0.5px;
          color: #f0f0f0;
          text-decoration: none;
        }
        .audit-logo span { color: ${ACCENT}; }

        .audit-nav-back {
          color: ${MUTED};
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s;
        }
        .audit-nav-back:hover { color: #f0f0f0; }

        /* ── Hero ── */
        .audit-hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 36px 40px 28px;
        }

        .audit-hero-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .audit-hero-left {
          text-align: left;
        }

        .audit-hero-right {
          display: flex;
          justify-content: flex-end;
        }

        .audit-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: ${ACCENT_DIM};
          border: 1px solid rgba(0,255,135,0.2);
          color: ${ACCENT};
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 2px;
          margin-bottom: 16px;
        }

        .audit-badge-dot {
          width: 6px;
          height: 6px;
          background: ${ACCENT};
          border-radius: 50%;
          display: inline-block;
        }

        .audit-h1 {
          font-family: ${SYNE};
          font-weight: 800;
          font-size: clamp(26px, 3vw, 38px);
          line-height: 1.1;
          letter-spacing: -1.2px;
          margin-bottom: 12px;
        }
        .audit-h1 em {
          font-style: normal;
          color: ${ACCENT};
        }

        .audit-subhead {
          font-size: 14px;
          color: ${MUTED};
          margin: 0 0 20px;
          line-height: 1.6;
        }

        /* Form card */
        .audit-form-card {
          background: ${SURFACE};
          border: 1px solid ${BORDER};
          border-radius: 4px;
          padding: 24px 22px 16px;
          width: 100%;
          max-width: 420px;
        }
        .audit-form-card-label {
          font-size: 10px;
          color: #444;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 16px;
          text-align: center;
        }


        /* ── Form ── */
        .audit-form-wrap {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 440px;
          margin: 0 auto;
        }

        .audit-form-row {
          display: flex;
          gap: 10px;
        }

        .audit-input {
          width: 100%;
          background: ${SURFACE};
          border: 1px solid ${BORDER};
          color: #f0f0f0;
          font-family: ${MONO};
          font-size: 13px;
          padding: 12px 14px;
          border-radius: 2px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          -webkit-appearance: none;
        }
        .audit-input::placeholder { color: #444; }
        .audit-input:focus {
          border-color: rgba(0,255,135,0.4);
          box-shadow: 0 0 0 3px rgba(0,255,135,0.06);
        }

        .audit-btn-primary {
          width: 100%;
          background: ${ACCENT};
          color: #000;
          font-family: ${SYNE};
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.02em;
          padding: 14px 24px;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .audit-btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0,255,135,0.25);
        }
        .audit-btn-primary:active { transform: translateY(0); }
        .audit-btn-primary:disabled { opacity: 0.6; cursor: wait; }

        /* ── Success state ── */
        .audit-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 40px 28px;
          background: ${ACCENT_DIM};
          border: 1px solid rgba(0,255,135,0.2);
          border-radius: 4px;
          max-width: 440px;
          margin: 0 auto;
        }
        .audit-success-icon {
          width: 48px;
          height: 48px;
          background: ${ACCENT};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          font-size: 22px;
          font-weight: 700;
        }
        .audit-success-title {
          font-family: ${SYNE};
          font-weight: 700;
          font-size: 20px;
          color: #f0f0f0;
        }
        .audit-success-desc {
          font-size: 13px;
          color: ${MUTED};
          text-align: center;
        }
        .audit-success-btn {
          background: transparent;
          border: 1px solid rgba(0,255,135,0.3);
          color: ${ACCENT};
          font-family: ${SYNE};
          font-weight: 600;
          font-size: 13px;
          padding: 12px 24px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .audit-success-btn:hover { background: ${ACCENT_DIM}; }

        /* ── Form note + trust bar ── */
        .audit-form-note {
          font-size: 11px;
          color: #444;
          text-align: center;
          margin-top: 12px;
        }

        .audit-form-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid ${BORDER};
          flex-wrap: wrap;
        }
        .audit-trust-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          color: #555;
        }

        /* ── Divider ── */
        .audit-divider {
          border: none;
          border-top: 1px solid ${BORDER};
          margin: 0;
        }

        /* ── Section ── */
        .audit-section {
          max-width: 860px;
          margin: 0 auto;
          padding: 72px 40px;
        }
        .audit-section-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${ACCENT};
          margin-bottom: 16px;
        }
        .audit-h2 {
          font-family: ${SYNE};
          font-weight: 800;
          font-size: clamp(24px, 4vw, 38px);
          letter-spacing: -1px;
          line-height: 1.1;
          margin-bottom: 40px;
        }
        .audit-h2 span { color: ${ACCENT}; }

        /* ── Audit grid ── */
        .audit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: ${BORDER};
          border: 1px solid ${BORDER};
        }
        .audit-grid-item {
          background: ${SURFACE};
          padding: 28px;
          transition: background 0.2s;
        }
        .audit-grid-item:hover { background: #161616; }
        .audit-grid-cta {
          background: ${ACCENT_DIM} !important;
        }
        .audit-grid-num {
          font-size: 11px;
          color: ${ACCENT};
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }
        .audit-grid-title {
          font-family: ${SYNE};
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 8px;
          letter-spacing: -0.3px;
        }
        .audit-grid-desc {
          font-size: 13px;
          color: ${MUTED};
          line-height: 1.6;
        }

        /* ── Report preview ── */
        .audit-report {
          background: ${SURFACE};
          border: 1px solid ${BORDER};
          border-radius: 4px;
          overflow: hidden;
          margin-top: 40px;
        }
        .audit-report-header {
          background: #161616;
          border-bottom: 1px solid ${BORDER};
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .audit-report-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .audit-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .audit-report-title {
          font-family: ${SYNE};
          font-weight: 700;
          font-size: 13px;
          letter-spacing: -0.2px;
        }
        .audit-report-date { font-size: 11px; color: ${MUTED}; }
        .audit-report-body {
          padding: 24px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .audit-risk-card {
          background: #0f0f0f;
          border: 1px solid ${BORDER};
          border-left: 3px solid;
          padding: 16px;
          border-radius: 2px;
        }
        .audit-risk-label {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .audit-risk-title {
          font-family: ${SYNE};
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 6px;
          letter-spacing: -0.2px;
        }
        .audit-risk-desc { font-size: 12px; color: ${MUTED}; line-height: 1.5; }
        .audit-risk-eta {
          display: inline-block;
          margin-top: 10px;
          font-size: 11px;
          background: rgba(255,255,255,0.04);
          padding: 3px 8px;
          border-radius: 2px;
          color: #888;
        }

        /* ── Math block ── */
        .audit-math-block {
          background: ${SURFACE};
          border: 1px solid ${BORDER};
          border-left: 3px solid ${ACCENT};
          padding: 32px;
        }
        .audit-math-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          font-size: 14px;
          gap: 12px;
        }
        .audit-math-label { color: ${MUTED}; flex: 1; }
        .audit-math-value {
          font-family: ${SYNE};
          font-weight: 700;
          white-space: nowrap;
        }
        .audit-math-value.accent {
          color: ${ACCENT};
          font-size: 18px;
        }

        /* ── Steps ── */
        .audit-steps {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: ${BORDER};
          border: 1px solid ${BORDER};
        }
        .audit-step {
          background: ${SURFACE};
          padding: 28px 32px;
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 24px;
          align-items: start;
          transition: background 0.2s;
        }
        .audit-step:hover { background: #161616; }
        .audit-step-num {
          font-family: ${SYNE};
          font-weight: 800;
          font-size: 28px;
          color: ${BORDER};
          line-height: 1;
          margin-top: 2px;
        }
        .audit-step-title {
          font-family: ${SYNE};
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.3px;
          margin-bottom: 6px;
        }
        .audit-step-desc { font-size: 13px; color: ${MUTED}; }

        /* ── Bottom CTA ── */
        .audit-bottom-cta {
          border-top: 1px solid ${BORDER};
          padding: 72px 40px;
          text-align: center;
        }
        .audit-bottom-h2 {
          font-family: ${SYNE};
          font-weight: 800;
          font-size: clamp(26px, 5vw, 48px);
          letter-spacing: -1.5px;
          margin-bottom: 16px;
          line-height: 1.1;
        }
        .audit-bottom-h2 span { color: ${ACCENT}; }
        .audit-bottom-sub {
          color: ${MUTED};
          font-size: 14px;
          margin-bottom: 36px;
        }
        .audit-bottom-done {
          color: ${ACCENT};
          font-size: 14px;
          font-family: ${SYNE};
          font-weight: 600;
        }

        /* ── Footer ── */
        .audit-footer {
          border-top: 1px solid ${BORDER};
          padding: 24px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: #444;
          flex-wrap: wrap;
          gap: 12px;
        }
        .audit-footer-logo {
          font-family: ${SYNE};
          font-weight: 800;
          font-size: 15px;
          color: #f0f0f0;
          text-decoration: none;
        }
        .audit-footer-logo span { color: ${ACCENT}; }
        .audit-footer-links { display: flex; gap: 24px; }
        .audit-footer-links a { color: #444; text-decoration: none; }
        .audit-footer-links a:hover { color: ${MUTED}; }

        /* ── TABLET (≤ 768px) — stack hero ── */
        @media (max-width: 768px) {
          .audit-hero { padding: 36px 20px 28px; }
          .audit-hero-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .audit-hero-left { text-align: center; }
          .audit-hero-right { justify-content: center; }
          .audit-subhead { margin: 0 auto 20px; }
          .audit-h1 { font-size: clamp(26px, 5vw, 40px); letter-spacing: -1px; }


          .audit-form-card {
            max-width: 100%;
            padding: 24px 20px 16px;
          }

          .audit-section { padding: 56px 20px; }
          .audit-bottom-cta { padding: 56px 20px; }
          .audit-nav { padding: 16px 20px; }
          .audit-footer { padding: 20px; }

          .audit-grid { grid-template-columns: repeat(2, 1fr); }

          .audit-step { padding: 24px; gap: 16px; }
          .audit-math-block { padding: 24px; }
          .audit-report-header { padding: 12px 16px; }
          .audit-report-body { padding: 16px; gap: 12px; }
        }

        /* ── MOBILE (≤ 480px) — form visible immediately ── */
        @media (max-width: 480px) {
          .audit-hero { padding: 20px 16px 16px; }
          .audit-hero-grid { gap: 16px; }
          .audit-h1 { font-size: 26px; letter-spacing: -0.8px; margin-bottom: 10px; }
          .audit-subhead { font-size: 13px; margin-bottom: 0; }
          .audit-badge { margin-bottom: 12px; font-size: 10px; padding: 5px 10px; }

          .audit-form-card { padding: 16px 14px 12px; }
          .audit-form-card-label { font-size: 10px; margin-bottom: 12px; }

          .audit-form-row { flex-direction: column; gap: 8px; }
          .audit-form-wrap { gap: 8px; }
          .audit-input { padding: 14px; font-size: 16px; }
          .audit-btn-primary { padding: 16px; font-size: 15px; }

          .audit-form-trust { gap: 10px; }
          .audit-trust-item { font-size: 10px; }

          .audit-form-note { font-size: 10px; margin-top: 10px; }

          .audit-section { padding: 40px 16px; }
          .audit-bottom-cta { padding: 40px 16px; }
          .audit-nav { padding: 12px 16px; }
          .audit-footer {
            padding: 16px;
            flex-direction: column;
            text-align: center;
          }

          .audit-grid { grid-template-columns: 1fr; }
          .audit-grid-item { padding: 20px; }

          .audit-report-body { grid-template-columns: 1fr; }
          .audit-report-header-left { flex-wrap: wrap; }
          .audit-report-title { font-size: 11px; }

          .audit-math-row { flex-direction: column; align-items: flex-start; gap: 4px; }
          .audit-math-label { font-size: 13px; }

          .audit-step { grid-template-columns: 36px 1fr; padding: 20px 16px; gap: 12px; }
          .audit-step-num { font-size: 22px; }
          .audit-step-title { font-size: 16px; }

          .audit-success { padding: 24px 16px; }
          .audit-form-wrap { max-width: 100%; }

          .audit-h2 { font-size: clamp(22px, 5vw, 32px); margin-bottom: 28px; }
          .audit-bottom-h2 { font-size: clamp(24px, 5vw, 40px); }
        }
      `}</style>
    </main>
  )
}
