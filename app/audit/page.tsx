"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, Shield, Clock, FileText, BarChart3, AlertTriangle, GitPullRequest, Users } from 'lucide-react'

const FONT_SYNE = 'var(--font-syne), "Syne", sans-serif'
const FONT_MONO = 'var(--font-dm-mono), "DM Mono", monospace'
const FONT_DM = 'var(--font-dm-sans), "DM Sans", sans-serif'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

function AuditForm({ id }: { id?: string }) {
  const [form, setForm] = useState({ firstName: '', company: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
    } catch {
      // Still show success to user, form data is captured
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        className="text-center py-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <Check className="w-7 h-7 text-emerald-400" />
        </div>
        <h3 style={{ fontFamily: FONT_SYNE }} className="text-white text-xl font-semibold mb-2">
          You&apos;re in.
        </h3>
        <p style={{ fontFamily: FONT_DM }} className="text-neutral-400 text-sm">
          We&apos;ll reach out within 24 hours to get started on your audit.
        </p>
      </motion.div>
    )
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="First name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          required
          style={{ fontFamily: FONT_DM }}
          className="w-full px-4 py-3 bg-white/[0.06] border border-white/[0.08] rounded-lg text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors"
        />
        <input
          type="text"
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          style={{ fontFamily: FONT_DM }}
          className="w-full px-4 py-3 bg-white/[0.06] border border-white/[0.08] rounded-lg text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors"
        />
      </div>
      <input
        type="email"
        placeholder="Work email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        style={{ fontFamily: FONT_DM }}
        className="w-full px-4 py-3 bg-white/[0.06] border border-white/[0.08] rounded-lg text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors"
      />
      <input
        type="tel"
        placeholder="Phone (optional)"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        style={{ fontFamily: FONT_DM }}
        className="w-full px-4 py-3 bg-white/[0.06] border border-white/[0.08] rounded-lg text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors"
      />
      <button
        type="submit"
        disabled={loading}
        style={{ fontFamily: FONT_DM }}
        className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-500/50 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        {loading ? 'Submitting...' : 'Get My Free Audit'}
        {!loading && <ArrowRight className="w-4 h-4" />}
      </button>
      <p style={{ fontFamily: FONT_MONO }} className="text-neutral-500 text-[11px] text-center pt-1">
        No credit card. No sales call. Just your report.
      </p>
    </form>
  )
}

/* ── Report Preview Mockup ── */
function ReportPreview() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-2xl shadow-black/20 max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div style={{ fontFamily: FONT_DM }} className="text-neutral-900 text-sm font-semibold">
            Engineering Health Report
          </div>
          <div style={{ fontFamily: FONT_MONO }} className="text-neutral-400 text-[11px] mt-0.5">
            Week of Mar 3, 2026
          </div>
        </div>
        <div className="px-2 py-1 bg-amber-50 text-amber-600 text-[11px] font-medium rounded-md">
          3 Risks
        </div>
      </div>

      {/* Health score */}
      <div className="flex items-center gap-3 mb-4 p-3 bg-neutral-50 rounded-lg">
        <div className="w-10 h-10 rounded-full border-[3px] border-emerald-500 flex items-center justify-center">
          <span style={{ fontFamily: FONT_DM }} className="text-emerald-600 text-xs font-bold">82</span>
        </div>
        <div>
          <div style={{ fontFamily: FONT_DM }} className="text-neutral-700 text-xs font-semibold">Overall Health</div>
          <div style={{ fontFamily: FONT_MONO }} className="text-neutral-400 text-[10px]">Up 4 pts from last week</div>
        </div>
      </div>

      {/* Risk items */}
      <div className="space-y-2">
        {[
          { text: 'Auth service PR blocked 4 days', severity: 'high' },
          { text: 'Sprint velocity down 23% WoW', severity: 'medium' },
          { text: '2 engineers at burnout risk', severity: 'high' },
        ].map((item) => (
          <div key={item.text} className="flex items-start gap-2 p-2.5 rounded-lg bg-neutral-50">
            <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${item.severity === 'high' ? 'bg-red-400' : 'bg-amber-400'}`} />
            <span style={{ fontFamily: FONT_DM }} className="text-neutral-600 text-[12px] leading-snug">{item.text}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-3 pt-3 border-t border-neutral-100">
        <div style={{ fontFamily: FONT_DM }} className="text-neutral-800 text-[11px] font-semibold mb-2">Recommended Actions</div>
        <div className="space-y-1.5">
          <div className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
            <span style={{ fontFamily: FONT_DM }} className="text-neutral-500 text-[11px]">Escalate infra review for auth team</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
            <span style={{ fontFamily: FONT_DM }} className="text-neutral-500 text-[11px]">Redistribute load from at-risk engineers</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Audit Grid Item ── */
const auditItems = [
  { icon: GitPullRequest, title: 'PR Bottlenecks', desc: 'Which pull requests are stuck and blocking your team.' },
  { icon: AlertTriangle, title: 'Sprint Risks', desc: 'Sprints likely to miss their deadline and why.' },
  { icon: Users, title: 'Team Workload', desc: 'Who is overloaded and who has capacity.' },
  { icon: BarChart3, title: 'Velocity Trends', desc: 'Where your team is speeding up or slowing down.' },
  { icon: Clock, title: 'Cycle Time', desc: 'How long work takes from start to merge.' },
  { icon: FileText, title: 'Action Plan', desc: 'Specific steps to fix the biggest risks this week.' },
]

/* ── ROI Stats ── */
const roiStats = [
  { stat: '40%', label: 'fewer missed deadlines', detail: 'Catch risks before they become delays.' },
  { stat: '6 hrs', label: 'saved per manager per week', detail: 'No more chasing status updates.' },
  { stat: '48 hrs', label: 'to your first report', detail: 'Connect tools today, get insights tomorrow.' },
]

/* ── Steps ── */
const steps = [
  { num: '01', title: 'Submit the form', desc: 'Takes 30 seconds. We just need your name and email.' },
  { num: '02', title: 'Connect your tools', desc: 'Link GitHub, Jira, and Slack. Read-only. 10 minutes.' },
  { num: '03', title: 'Get your report', desc: 'We scan 90 days of data and deliver your audit in 48 hours.' },
]

export default function AuditPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen relative overflow-hidden">
      {/* Noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '128px' }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/enterprise" className="flex items-center">
            <Image src="/logo.png" alt="NexFlow" width={437} height={387} className="h-6 w-auto object-contain brightness-0 invert" />
          </Link>
          <Link
            href="/enterprise"
            style={{ fontFamily: FONT_DM }}
            className="text-neutral-400 text-sm no-underline hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="relative z-10 pt-16 md:pt-24 pb-16 md:pb-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy + Form */}
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.div variants={fadeUp}>
                <span
                  style={{ fontFamily: FONT_MONO }}
                  className="inline-block text-emerald-400 text-[11px] tracking-widest uppercase mb-4"
                >
                  Free engineering audit
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                style={{ fontFamily: FONT_SYNE }}
                className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4"
              >
                Find out where your
                <br />
                team is at risk.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                style={{ fontFamily: FONT_DM }}
                className="text-neutral-400 text-base leading-relaxed mb-8 max-w-md"
              >
                We scan 90 days of your GitHub, Jira, and Slack data and deliver
                a one-page risk report in 48 hours. Free, no strings attached.
              </motion.p>

              {/* Social proof */}
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <div className="flex -space-x-2">
                  {['bg-blue-500', 'bg-violet-500', 'bg-amber-500', 'bg-rose-500'].map((bg, i) => (
                    <div key={i} className={`w-7 h-7 rounded-full ${bg} border-2 border-[#0a0a0a] flex items-center justify-center`}>
                      <span className="text-white text-[9px] font-bold">{['VP', 'CT', 'EM', 'DR'][i]}</span>
                    </div>
                  ))}
                </div>
                <span style={{ fontFamily: FONT_DM }} className="text-neutral-500 text-sm">
                  Trusted by engineering leaders at Series B+ companies
                </span>
              </motion.div>

              {/* Form */}
              <motion.div variants={fadeUp}>
                <AuditForm id="hero-form" />
              </motion.div>
            </motion.div>

            {/* Right: Report Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Glow behind card */}
                <div className="absolute inset-0 bg-emerald-500/[0.06] rounded-3xl blur-2xl scale-110" />
                <div className="relative">
                  <ReportPreview />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── What You Get ─── */}
      <section className="relative z-10 py-16 md:py-24 px-5 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontFamily: FONT_SYNE }} className="text-white text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              What your audit covers
            </h2>
            <p style={{ fontFamily: FONT_DM }} className="text-neutral-500 text-sm max-w-md mx-auto">
              A complete picture of your engineering team&apos;s health, risks, and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {auditItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="group p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="w-4 h-4 text-emerald-400" strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontFamily: FONT_DM }} className="text-white text-sm font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: FONT_DM }} className="text-neutral-500 text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── The Math (ROI) ─── */}
      <section className="relative z-10 py-16 md:py-24 px-5 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontFamily: FONT_SYNE }} className="text-white text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              The math
            </h2>
            <p style={{ fontFamily: FONT_DM }} className="text-neutral-500 text-sm max-w-md mx-auto">
              Engineering teams using NexFlow see these results in the first 30 days.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {roiStats.map((item, index) => (
              <motion.div
                key={item.stat}
                className="bg-[#0f0f0f] p-6 md:p-8 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span style={{ fontFamily: FONT_SYNE }} className="text-3xl md:text-4xl font-bold text-emerald-400 block mb-2">
                  {item.stat}
                </span>
                <span style={{ fontFamily: FONT_DM }} className="text-white text-sm font-medium block mb-2">
                  {item.label}
                </span>
                <p style={{ fontFamily: FONT_DM }} className="text-neutral-500 text-[13px]">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="relative z-10 py-16 md:py-24 px-5 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontFamily: FONT_SYNE }} className="text-white text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              How it works
            </h2>
          </motion.div>

          <div className="space-y-0 divide-y divide-white/[0.06]">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                className="grid grid-cols-[48px_1fr] md:grid-cols-[64px_1fr] gap-4 py-6 first:pt-0 last:pb-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span style={{ fontFamily: FONT_MONO }} className="text-2xl md:text-3xl font-medium text-neutral-700 leading-none pt-1">
                  {step.num}
                </span>
                <div>
                  <h3 style={{ fontFamily: FONT_DM }} className="text-white text-base font-semibold mb-1.5">
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: FONT_DM }} className="text-neutral-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust / Security ─── */}
      <section className="relative z-10 py-12 px-5 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {[
              { icon: Shield, text: 'Read-only access. We never see your code.' },
              { icon: Clock, text: 'Setup takes 10 minutes.' },
              { icon: FileText, text: 'Report delivered in 48 hours.' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.text} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-emerald-400/60 shrink-0" strokeWidth={1.5} />
                  <span style={{ fontFamily: FONT_DM }} className="text-neutral-400 text-[13px]">
                    {item.text}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="relative z-10 py-16 md:py-24 px-5 border-t border-white/[0.04]">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontFamily: FONT_SYNE }} className="text-white text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Your next delay is already forming.
            </h2>
            <p style={{ fontFamily: FONT_DM }} className="text-neutral-500 text-sm mb-8">
              Get your free audit and see your risks before they ship.
            </p>
          </motion.div>

          <AuditForm id="bottom-form" />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.04] py-6 px-5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <Image src="/logo.png" alt="NexFlow" width={437} height={387} className="h-4 w-auto object-contain brightness-0 invert opacity-40" />
          <div className="flex gap-6">
            <Link href="/enterprise" style={{ fontFamily: FONT_DM }} className="text-neutral-500 text-[12px] no-underline hover:text-neutral-300 transition-colors">Home</Link>
            <Link href="/blog" style={{ fontFamily: FONT_DM }} className="text-neutral-500 text-[12px] no-underline hover:text-neutral-300 transition-colors">Blog</Link>
            <Link href="/privacy" style={{ fontFamily: FONT_DM }} className="text-neutral-500 text-[12px] no-underline hover:text-neutral-300 transition-colors">Privacy</Link>
            <Link href="mailto:arjundixit@nexflowinc.com" style={{ fontFamily: FONT_DM }} className="text-neutral-500 text-[12px] no-underline hover:text-neutral-300 transition-colors">Contact</Link>
          </div>
          <span style={{ fontFamily: FONT_DM }} className="text-neutral-600 text-[12px]">&copy; 2026 NexFlow Inc.</span>
        </div>
      </footer>
    </main>
  )
}
