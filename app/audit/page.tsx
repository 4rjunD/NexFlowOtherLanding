"use client"

import { useState, useRef } from 'react'
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

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: SURFACE,
  border: `1px solid ${BORDER}`,
  color: '#f0f0f0',
  fontFamily: MONO,
  fontSize: 14,
  padding: '14px 16px',
  borderRadius: 2,
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          padding: 40,
          background: ACCENT_DIM,
          border: '1px solid rgba(0,255,135,0.2)',
          borderRadius: 4,
          maxWidth: 440,
          margin: '0 auto',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            background: ACCENT,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          ✓
        </div>
        <h3 style={{ fontFamily: SYNE, fontWeight: 700, fontSize: 20, color: '#f0f0f0' }}>
          Audit doc on its way.
        </h3>
        <p style={{ fontSize: 13, color: MUTED, textAlign: 'center', fontFamily: MONO }}>
          Check your inbox — we&apos;ll also send you a sample risk report so you know exactly what NexFlow catches.
        </p>
        <a
          href="https://calendly.com/arjundixit3508/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'transparent',
            border: '1px solid rgba(0,255,135,0.3)',
            color: ACCENT,
            fontFamily: SYNE,
            fontWeight: 600,
            fontSize: 13,
            padding: '12px 24px',
            borderRadius: 2,
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
        >
          Book a live demo instead →
        </a>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 440, margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: 10 }}>
        <input
          type="text"
          placeholder="First name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          required
          style={inputStyle}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,255,135,0.4)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,255,135,0.06)' }}
          onBlur={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = 'none' }}
        />
        <input
          type="text"
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          required
          style={inputStyle}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,255,135,0.4)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,255,135,0.06)' }}
          onBlur={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = 'none' }}
        />
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <input
          type="email"
          placeholder="Work email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          style={inputStyle}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,255,135,0.4)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,255,135,0.06)' }}
          onBlur={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = 'none' }}
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          style={inputStyle}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,255,135,0.4)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,255,135,0.06)' }}
          onBlur={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.boxShadow = 'none' }}
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          width: '100%',
          background: ACCENT,
          color: '#000',
          fontFamily: SYNE,
          fontWeight: 700,
          fontSize: 15,
          letterSpacing: '0.02em',
          padding: '16px 24px',
          border: 'none',
          borderRadius: 2,
          cursor: loading ? 'wait' : 'pointer',
          transition: 'transform 0.15s, box-shadow 0.15s',
          opacity: loading ? 0.6 : 1,
        }}
        onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,255,135,0.25)' } }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
      >
        {loading ? 'Sending...' : `Get the Free Audit Doc →`}
      </button>
    </div>
  )
}

/* ── Audit grid items ── */
const auditItems = [
  { num: '01', title: 'PR Velocity Analysis', desc: 'Which PRs are sitting too long, which reviewers are bottlenecks, and where review debt is building up.' },
  { num: '02', title: 'Sprint Health Score', desc: 'Velocity trends over 90 days, scope creep signals, and which sprints are headed for a miss right now.' },
  { num: '03', title: 'Blocker Spread Map', desc: 'Blockers that are about to cascade across teams — caught before they take down two sprints instead of one.' },
  { num: '04', title: 'Context Switch Load', desc: "Engineers context-switching too much drop 40% in output. We show you who's overloaded before it shows up in velocity." },
  { num: '05', title: 'Top 3 Risk Flags', desc: 'The three most urgent things in your org right now, ranked by impact, with a recommended action for each.' },
]

/* ── Risk cards for preview ── */
const riskCards = [
  { severity: 'high' as const, label: 'High Risk', title: 'Auth migration stalled', desc: 'Blocked on infra review for 5 days. Two downstream teams waiting. Sprint miss probable.', eta: 'ETA miss: ~4 days' },
  { severity: 'medium' as const, label: 'Medium Risk', title: 'Payments PR backlog', desc: '3 PRs stale >48h. Single reviewer bottleneck identified. Reassignment recommended.', eta: 'Escalate today' },
  { severity: 'medium' as const, label: 'Medium Risk', title: 'Velocity drop — Platform team', desc: 'Sprint velocity down 18% vs 4-week average. Context switch load at 2.4x normal.', eta: 'Investigate scope creep' },
  { severity: 'low' as const, label: 'Stable', title: 'Frontend team on track', desc: 'Velocity consistent. No stale PRs. Low blocker exposure this sprint.', eta: 'No action needed' },
]

const severityColors = { high: DANGER, medium: '#ff9500', low: ACCENT }

/* ── Math rows ── */
const mathRows = [
  { label: 'Average cost of one missed engineering deadline', value: '$50,000+', isAccent: false },
  { label: 'NexFlow monthly cost', value: '$300/mo', isAccent: false },
  { label: 'NexFlow annual cost', value: '$3,600/yr', isAccent: false },
  { label: 'ROI from catching one delay per year', value: '13.8x', isAccent: true },
]

/* ── Steps ── */
const steps = [
  { num: '01', title: 'Connect your stack', desc: 'GitHub, Jira or Linear, Slack. Read-only OAuth. 10 minutes. Nothing changes for your engineers.' },
  { num: '02', title: 'We scan 90 days of signals', desc: "PR cycles, sprint patterns, blocker chains, context switch load. The signals your tools already create — just never synthesized." },
  { num: '03', title: 'Risk report in your inbox', desc: "Every Monday before standup. One page. What's slipping, why, what to do. No dashboard, no noise." },
]

export default function AuditPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [heroSubmitted, setHeroSubmitted] = useState(false)

  const handleBottomSuccess = () => {
    setHeroSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main
      style={{
        background: BG,
        color: '#f0f0f0',
        fontFamily: MONO,
        fontSize: 15,
        lineHeight: 1.6,
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      {/* Grain overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
          zIndex: 1000,
          opacity: 0.4,
        }}
      />

      {/* ── NAV ── */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 40px',
          borderBottom: `1px solid ${BORDER}`,
          position: 'sticky',
          top: 0,
          background: 'rgba(10,10,10,0.92)',
          backdropFilter: 'blur(12px)',
          zIndex: 100,
        }}
      >
        <Link
          href="/enterprise"
          style={{
            fontFamily: SYNE,
            fontWeight: 800,
            fontSize: 18,
            letterSpacing: -0.5,
            color: '#f0f0f0',
            textDecoration: 'none',
          }}
        >
          Nex<span style={{ color: ACCENT }}>Flow</span>
        </Link>
        <Link
          href="/enterprise"
          style={{ color: MUTED, textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
        >
          ← Back to site
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          maxWidth: 860,
          margin: '0 auto',
          padding: '100px 40px 80px',
          textAlign: 'center',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: ACCENT_DIM,
            border: '1px solid rgba(0,255,135,0.2)',
            color: ACCENT,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '6px 14px',
            borderRadius: 2,
            marginBottom: 32,
          }}
        >
          <span
            className="audit-pulse"
            style={{
              width: 6,
              height: 6,
              background: ACCENT,
              borderRadius: '50%',
              display: 'inline-block',
            }}
          />
          Free Engineering Risk Audit
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: SYNE,
            fontWeight: 800,
            fontSize: 'clamp(36px, 6vw, 62px)',
            lineHeight: 1.05,
            letterSpacing: -2,
            marginBottom: 24,
          }}
        >
          Your next missed<br />deadline is <em style={{ fontStyle: 'normal', color: ACCENT }}>already</em><br />forming.
        </h1>

        {/* Subhead */}
        <p
          style={{
            fontSize: 16,
            color: MUTED,
            maxWidth: 520,
            margin: '0 auto 48px',
            lineHeight: 1.7,
          }}
        >
          Get a free audit showing exactly which projects in your engineering org are at risk — before your next sprint review.
        </p>

        {/* Form / Success */}
        {heroSubmitted ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
              padding: 40,
              background: ACCENT_DIM,
              border: '1px solid rgba(0,255,135,0.2)',
              borderRadius: 4,
              maxWidth: 440,
              margin: '0 auto',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                background: ACCENT,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              ✓
            </div>
            <h3 style={{ fontFamily: SYNE, fontWeight: 700, fontSize: 20, color: '#f0f0f0' }}>
              Audit doc on its way.
            </h3>
            <p style={{ fontSize: 13, color: MUTED, textAlign: 'center' }}>
              Check your inbox — we&apos;ll also send you a sample risk report so you know exactly what NexFlow catches.
            </p>
            <a
              href="https://calendly.com/arjundixit3508/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent',
                border: '1px solid rgba(0,255,135,0.3)',
                color: ACCENT,
                fontFamily: SYNE,
                fontWeight: 600,
                fontSize: 13,
                padding: '12px 24px',
                borderRadius: 2,
                textDecoration: 'none',
              }}
            >
              Book a live demo instead →
            </a>
          </div>
        ) : (
          <AuditForm idPrefix="hero" onSuccess={() => setHeroSubmitted(true)} />
        )}

        {/* Form note */}
        <p style={{ fontSize: 12, color: '#444', textAlign: 'center', marginTop: 24 }}>
          No spam. No pitch on the first email. Just the audit doc.
        </p>

        {/* Social proof */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            marginTop: 40,
            flexWrap: 'wrap',
          }}
        >
          {[
            'Read-only access, no code seen',
            '10 min to connect your stack',
            'Report in 48 hours',
          ].map((text) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#555' }}>
              <svg width="14" height="14" fill="none" stroke={ACCENT} strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: `1px solid ${BORDER}`, margin: 0 }} />

      {/* ── WHAT YOU GET ── */}
      <section style={{ maxWidth: 860, margin: '0 auto', padding: '80px 40px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>
          What you get
        </div>
        <h2 style={{ fontFamily: SYNE, fontWeight: 800, fontSize: 'clamp(26px, 4vw, 38px)', letterSpacing: -1, lineHeight: 1.1, marginBottom: 48 }}>
          A 5-point risk scan of<br />your engineering org.<br /><span style={{ color: ACCENT }}>Free. Yours to keep.</span>
        </h2>

        {/* Audit grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 1,
            background: BORDER,
            border: `1px solid ${BORDER}`,
          }}
        >
          {auditItems.map((item) => (
            <div
              key={item.num}
              style={{ background: SURFACE, padding: 28, transition: 'background 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#161616' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = SURFACE }}
            >
              <div style={{ fontSize: 11, color: ACCENT, letterSpacing: '0.1em', marginBottom: 12 }}>
                {item.num}
              </div>
              <h3 style={{ fontFamily: SYNE, fontWeight: 700, fontSize: 16, marginBottom: 8, letterSpacing: -0.3 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}

          {/* Special 6th item */}
          <div style={{ background: ACCENT_DIM, padding: 28 }}>
            <div style={{ fontSize: 11, color: ACCENT, letterSpacing: '0.1em', marginBottom: 12 }}>→</div>
            <h3 style={{ fontFamily: SYNE, fontWeight: 700, fontSize: 16, marginBottom: 8, letterSpacing: -0.3 }}>
              Delivered as a one-page report
            </h3>
            <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>
              No dashboard to log into. No alerts to configure. One clean document in your inbox before standup.
            </p>
          </div>
        </div>

        {/* ── Report preview ── */}
        <div
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 4,
            overflow: 'hidden',
            marginTop: 48,
          }}
        >
          {/* Report header */}
          <div
            style={{
              background: '#161616',
              borderBottom: `1px solid ${BORDER}`,
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: DANGER }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff9500' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: ACCENT }} />
              <span style={{ fontFamily: SYNE, fontWeight: 700, fontSize: 13, letterSpacing: -0.2 }}>
                NexFlow Risk Report — Week of Mar 10, 2026
              </span>
            </div>
            <span style={{ fontSize: 11, color: MUTED }}>Sample output</span>
          </div>

          {/* Report body — risk cards */}
          <div
            style={{
              padding: 24,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 16,
            }}
            className="audit-report-body"
          >
            {riskCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#0f0f0f',
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${severityColors[card.severity]}`,
                  padding: 16,
                  borderRadius: 2,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                    color: severityColors[card.severity],
                  }}
                >
                  {card.label}
                </div>
                <div style={{ fontFamily: SYNE, fontWeight: 600, fontSize: 14, marginBottom: 6, letterSpacing: -0.2 }}>
                  {card.title}
                </div>
                <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.5 }}>{card.desc}</div>
                <span
                  style={{
                    display: 'inline-block',
                    marginTop: 10,
                    fontSize: 11,
                    background: 'rgba(255,255,255,0.04)',
                    padding: '3px 8px',
                    borderRadius: 2,
                    color: '#888',
                  }}
                >
                  {card.eta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: `1px solid ${BORDER}`, margin: 0 }} />

      {/* ── THE MATH ── */}
      <section style={{ maxWidth: 860, margin: '0 auto', padding: '80px 40px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>
          The math
        </div>
        <h2 style={{ fontFamily: SYNE, fontWeight: 800, fontSize: 'clamp(26px, 4vw, 38px)', letterSpacing: -1, lineHeight: 1.1, marginBottom: 48 }}>
          One caught delay pays<br />for <span style={{ color: ACCENT }}>10 years</span> of NexFlow.
        </h2>

        <div
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderLeft: `3px solid ${ACCENT}`,
            padding: 32,
          }}
        >
          {mathRows.map((row, i) => (
            <div
              key={row.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: i < mathRows.length - 1 ? `1px solid ${BORDER}` : 'none',
                fontSize: 14,
                flexWrap: 'wrap',
                gap: 8,
              }}
            >
              <span style={{ color: MUTED }}>{row.label}</span>
              <span
                style={{
                  fontFamily: SYNE,
                  fontWeight: 700,
                  color: row.isAccent ? ACCENT : '#f0f0f0',
                  fontSize: row.isAccent ? 18 : 14,
                }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <hr style={{ border: 'none', borderTop: `1px solid ${BORDER}`, margin: 0 }} />

      {/* ── HOW IT WORKS ── */}
      <section style={{ maxWidth: 860, margin: '0 auto', padding: '80px 40px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>
          How it works
        </div>
        <h2 style={{ fontFamily: SYNE, fontWeight: 800, fontSize: 'clamp(26px, 4vw, 38px)', letterSpacing: -1, lineHeight: 1.1, marginBottom: 48 }}>
          Three steps.<br /><span style={{ color: ACCENT }}>Report in 48 hours.</span>
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            background: BORDER,
            border: `1px solid ${BORDER}`,
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                background: SURFACE,
                padding: '28px 32px',
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                gap: 24,
                alignItems: 'start',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#161616' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = SURFACE }}
            >
              <div
                style={{
                  fontFamily: SYNE,
                  fontWeight: 800,
                  fontSize: 28,
                  color: BORDER,
                  lineHeight: 1,
                  marginTop: 2,
                }}
              >
                {step.num}
              </div>
              <div>
                <h3 style={{ fontFamily: SYNE, fontWeight: 700, fontSize: 18, letterSpacing: -0.3, marginBottom: 6 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 13, color: MUTED }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: '80px 40px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontFamily: SYNE, fontWeight: 800, fontSize: 'clamp(28px, 5vw, 48px)', letterSpacing: -1.5, marginBottom: 16, lineHeight: 1.1 }}>
          See your risks before<br />your next <span style={{ color: ACCENT }}>sprint review.</span>
        </h2>
        <p style={{ color: MUTED, fontSize: 14, marginBottom: 40 }}>
          Free audit. No commitment. Yours to keep regardless.
        </p>

        {heroSubmitted ? (
          <p style={{ color: ACCENT, fontSize: 14, fontFamily: SYNE, fontWeight: 600 }}>
            ✓ Your audit is on its way. Check your inbox.
          </p>
        ) : (
          <AuditForm idPrefix="bottom" onSuccess={handleBottomSuccess} />
        )}
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: '24px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 12,
          color: '#444',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <Link
          href="/enterprise"
          style={{
            fontFamily: SYNE,
            fontWeight: 800,
            fontSize: 15,
            color: '#f0f0f0',
            textDecoration: 'none',
          }}
        >
          Nex<span style={{ color: ACCENT }}>Flow</span>
        </Link>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link href="/privacy" style={{ color: '#444', textDecoration: 'none' }}>Privacy</Link>
          <Link href="/terms" style={{ color: '#444', textDecoration: 'none' }}>Terms</Link>
          <Link href="mailto:arjundixit@nexflowinc.com" style={{ color: '#444', textDecoration: 'none' }}>Contact</Link>
        </div>
        <span>© 2026 NexFlow Inc.</span>
      </footer>

      {/* Responsive overrides */}
      <style jsx>{`
        @media (max-width: 600px) {
          .audit-report-body {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
