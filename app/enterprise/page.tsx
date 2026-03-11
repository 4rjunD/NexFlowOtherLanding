"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Menu, X, Link2, BarChart3, Zap, TrendingDown, GitPullRequest, Shuffle, AlertTriangle } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { DarkCtaSection } from '@/components/blocks/dark-cta-section'

const CAL_LINK = 'https://calendly.com/arjundixit3508/30min'

const heroTransition = {
  container: {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

const heroCtaTransition = {
  container: {
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.75,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

const navItems = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'The Offer', href: '#offer' },
  { label: 'Why NexFlow', href: '#why-us' },
]

/* ── Navbar ── */
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative z-10 flex justify-center pt-3 px-4 md:pt-5 md:px-6">
      <motion.nav
        className="grid grid-cols-[1fr_auto_1fr] items-center px-4 h-[52px] max-w-[960px] w-full rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04)]"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left — logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="NexFlow" width={437} height={387} className="block object-contain h-7 w-auto" />
          </Link>
        </div>

        {/* Center — nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium text-slate-600 tracking-tight no-underline hover:text-slate-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right — CTA (mirrors logo width for symmetry) */}
        <div className="flex items-center justify-end">
          <Link
            href="/audit"
            className="hidden md:inline-flex text-[13px] font-medium text-white bg-emerald-600 px-5 py-2 rounded-full no-underline tracking-tight hover:bg-emerald-500 transition-colors"
          >
            Get Free Audit
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-transparent border-none cursor-pointer p-1.5 flex items-center justify-center text-slate-600"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <motion.div
          className="absolute top-[60px] left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-2 z-[100]"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-[15px] font-medium text-slate-600 no-underline rounded-xl"
            >
              {item.label}
            </Link>
          ))}
          <div className="h-px bg-black/5 mx-4 my-1" />
          <Link
            href="/audit"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 text-[15px] font-medium text-white bg-emerald-600 rounded-xl no-underline text-center my-1"
          >
            Get Free Audit
          </Link>
        </motion.div>
      )}
    </div>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <div className="relative z-[2] pt-20 md:pt-28 pb-12 md:pb-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimatedGroup variants={heroTransition}>
          <h1 className="text-balance text-4xl md:text-6xl xl:text-7xl font-medium tracking-[-0.03em] leading-[1.08] text-[#2a1f14]">
            See engineering delays{' '}
            <span className="font-playfair">before they happen.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-balance text-base md:text-lg text-slate-500">
            NexFlow reads your GitHub, Jira, and Slack to flag risks 2-3 weeks early.
          </p>
        </AnimatedGroup>

        <AnimatedGroup
          variants={heroCtaTransition}
          className="mt-8 flex flex-col items-center justify-center gap-3"
        >
          <div className="rounded-[14px] border border-slate-200 bg-slate-900/10 p-0.5">
            <Link
              href={CAL_LINK}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 rounded-xl px-6 py-3 text-white text-[15px] font-medium no-underline tracking-tight hover:bg-slate-800 transition-colors"
            >
              Get Your Free 48-Hour Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-[14px] text-slate-400 tracking-tight">
            See which teams are at risk. Free report in 48 hours.
          </p>
        </AnimatedGroup>
      </div>
    </div>
  )
}


/* ── Solution Section (features-5 style) ── */
function SolutionSection() {
  const signals = [
    { icon: GitPullRequest, label: 'PR reviews stuck too long' },
    { icon: TrendingDown, label: 'Sprint velocity dropping' },
    { icon: Shuffle, label: 'Too much context switching' },
    { icon: AlertTriangle, label: 'Blockers about to spread' },
  ]

  return (
    <section className="bg-slate-50 py-16 md:py-24 px-6">
      <div className="mx-auto max-w-xl md:max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0 text-center md:text-left">
              <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl tracking-tight text-slate-900">
                What if you knew <span className="font-playfair">3 weeks early?</span>
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                We read the signals your tools already create. Then we tell you what&apos;s about to go wrong.
              </p>
            </div>
            <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {signals.map((signal) => {
                const Icon = signal.icon
                return (
                  <li key={signal.label} className="flex items-center gap-3 py-3">
                    <Icon className="size-5 text-emerald-500 shrink-0" strokeWidth={1.5} />
                    <span className="text-slate-700 text-[15px]">{signal.label}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="relative rounded-3xl border border-slate-200 p-3 lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              {/* Mini report preview */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-slate-900 text-[15px] font-semibold">Risk Summary</div>
                  <div className="text-slate-400 text-[12px] mt-0.5">Week of Feb 24, 2026</div>
                </div>
                <div className="px-2.5 py-1 bg-amber-50 text-amber-600 text-[12px] font-medium rounded-md">
                  3 At-Risk
                </div>
              </div>
              <div className="space-y-3 mb-5">
                {[
                  { risk: 'Auth migration blocked on infra review', days: '5d', severity: 'high' },
                  { risk: '3 PRs stale >48h in payments team', days: '3d', severity: 'medium' },
                  { risk: 'Sprint velocity down 18% vs last week', days: '—', severity: 'medium' },
                ].map((item) => (
                  <div key={item.risk} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${item.severity === 'high' ? 'bg-red-400' : 'bg-amber-400'}`} />
                    <div className="flex-1">
                      <div className="text-slate-700 text-[13px] font-medium">{item.risk}</div>
                    </div>
                    <span className="text-slate-400 text-[12px] font-medium shrink-0">{item.days}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100">
                <div className="text-slate-900 text-[13px] font-semibold mb-2">Recommended Actions</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span className="text-slate-500 text-[13px]">Escalate infra review — 2 teams blocked</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span className="text-slate-500 text-[13px]">Reassign stale PR reviews in payments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── How It Works (CTO-perspective) ── */
const howItWorksSteps = [
  {
    num: '01',
    title: 'Connect your tools',
    description: 'GitHub, Jira, Slack. 10 minutes. Read-only.',
    detail: 'Nothing changes for your team.',
    icon: Link2,
  },
  {
    num: '02',
    title: 'We scan 90 days of data',
    description: 'PR cycles, sprint patterns, workload signals.',
    detail: 'Things you can\'t see in a standup.',
    icon: BarChart3,
  },
  {
    num: '03',
    title: 'Get a report every Monday',
    description: 'What\'s slipping, why, what to do.',
    detail: 'One page. In your inbox before standup.',
    icon: Zap,
  },
]

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-2">
            Three steps. Report in <span className="font-playfair">48 hours.</span>
          </h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-slate-100">
          {howItWorksSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                className="group grid grid-cols-1 md:grid-cols-[64px_1fr_auto] gap-3 md:gap-6 items-start py-6 first:pt-0 last:pb-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Step number */}
                <span className="text-[40px] font-semibold tracking-tight text-slate-200 leading-none hidden md:block">
                  {step.num}
                </span>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="md:hidden text-xs font-semibold text-slate-300 tracking-wider uppercase">Step {step.num}</span>
                  </div>
                  <h3 className="text-slate-900 text-lg font-semibold tracking-tight mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                  <p className="text-slate-400 text-[13px] mt-2">
                    {step.detail}
                  </p>
                </div>

                {/* Icon */}
                <div className="hidden md:flex w-10 h-10 rounded-lg bg-slate-50 items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors duration-300 mt-1">
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors duration-300" strokeWidth={1.5} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── What NexFlow Replaces ── */
const replacesItems = [
  { label: 'Status meetings', detail: 'Hours wasted every week chasing updates across teams' },
  { label: 'OKR spreadsheets & Notion docs', detail: 'Hours of manual upkeep that go stale by Wednesday' },
  { label: 'Quarterly retros', detail: 'Finding problems months after they already shipped' },
  { label: 'Managers chasing updates', detail: 'Your best people context-switching instead of leading' },
]

function ReplacesSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-2">
            What NexFlow <span className="font-playfair">replaces.</span>
          </h2>
          <p className="text-slate-500 text-[15px]">One weekly report replaces all of this.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
          {replacesItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="bg-white p-6 md:p-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                <span className="text-slate-900 text-[15px] font-semibold">{item.label}</span>
              </div>
              <p className="text-slate-500 text-[14px] leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Grand Slam Offer ── */
const valueMetrics = [
  {
    stat: '2-3 wks',
    label: 'early warning',
    description: 'Catch delays weeks before they hit sprint review.',
  },
  {
    stat: '1 report',
    label: 'replaces your status meetings',
    description: 'No more chasing updates across Slack and Jira.',
  },
  {
    stat: '10min',
    label: 'setup, zero eng time',
    description: 'Connect your tools. Your team changes nothing.',
  },
]

function GrandSlamOffer() {
  return (
    <section id="offer" className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-emerald-600 text-sm font-medium tracking-wide uppercase mb-3">
            The Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3 leading-[1.15]">
            Be the leader who{' '}
            <span className="font-playfair">always knows what&apos;s shipping.</span>
          </h2>
          <p className="text-slate-500 text-[15px] max-w-md mx-auto leading-relaxed">
            No more fire drills. No more &quot;we need two more weeks.&quot;
          </p>
        </motion.div>

        {/* Value metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 mb-10">
          {valueMetrics.map((metric, index) => (
            <motion.div
              key={metric.stat}
              className="bg-white p-6 md:p-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 block mb-1">
                {metric.stat}
              </span>
              <span className="text-sm font-medium text-slate-400 block mb-2">
                {metric.label}
              </span>
              <p className="text-slate-500 text-[13px] leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-slate-500 text-[15px] max-w-md mx-auto mb-6 leading-relaxed">
            We audit 90 days of your data and send you a risk report in 48 hours. Free. Keep it no matter what.
          </p>
          <Link
            href={CAL_LINK}
            target="_blank"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-900 px-8 text-[15px] font-medium text-white no-underline transition-all duration-300 hover:bg-slate-800 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-slate-900/20"
          >
            Get Your Free 48-Hour Audit
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="text-xs font-medium text-emerald-600 mt-4">
            Only 10 audit slots open this month.
          </p>
        </motion.div>
      </div>
    </section>
  )
}


/* ── Why NexFlow — Bento Grid ── */
const bentoItems = [
  {
    title: 'Plugs into your existing stack',
    description: 'GitHub, Jira, Slack. No new tools. Nothing changes for your engineers.',
    status: 'Plug & Play',
    tags: ['GitHub', 'Jira', 'Slack'],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: 'Predicts, not just reports',
    description: 'Most tools show what happened. We show what\'s about to happen.',
    status: 'Predictive',
    tags: ['AI', 'Forecasting'],
  },
  {
    title: 'One page, every Monday',
    description: 'No dashboards. No alerts. One report in your inbox.',
    status: 'Simple',
    tags: ['Reports'],
  },
  {
    title: 'We never see your code',
    description: 'Read-only metadata access. No source code, no messages.',
    status: 'Secure',
    tags: ['Metadata', 'Read-only'],
    colSpan: 2,
  },
]

function WhyUsSection() {
  return (
    <section id="why-us" className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Why <span className="font-playfair">NexFlow?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              className={cn(
                'group relative p-5 rounded-xl overflow-hidden transition-all duration-300',
                'border border-slate-200 bg-white',
                'hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]',
                'hover:-translate-y-0.5 will-change-transform',
                item.colSpan === 2 ? 'md:col-span-2' : 'col-span-1',
                item.hasPersistentHover && 'shadow-[0_2px_12px_rgba(0,0,0,0.04)] -translate-y-0.5',
              )}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Dot pattern on hover */}
              <div className={`absolute inset-0 ${item.hasPersistentHover ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
              </div>

              <div className="relative flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-1 rounded-lg bg-slate-50 text-slate-500 transition-colors duration-300 group-hover:bg-slate-100">
                    {item.status}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-medium text-slate-900 tracking-tight text-[15px]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-snug">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-xs text-slate-400 mt-2">
                  {item.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-slate-50 transition-all duration-200 hover:bg-slate-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-black/[0.06] py-6 px-4 md:px-6">
      <div className="max-w-[960px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 text-center md:text-left">
        <Image src="/logo.png" alt="NexFlow" width={437} height={387} className="h-5 w-auto object-contain" />
        <div className="flex gap-6">
          <Link href="/blog" className="text-[13px] text-slate-400 no-underline hover:text-slate-600 transition-colors">Blog</Link>
          <Link href="/privacy" className="text-[13px] text-slate-400 no-underline hover:text-slate-600 transition-colors">Privacy</Link>
          <Link href="/terms" className="text-[13px] text-slate-400 no-underline hover:text-slate-600 transition-colors">Terms</Link>
          <Link href="mailto:arjundixit@nexflowinc.com" className="text-[13px] text-slate-400 no-underline hover:text-slate-600 transition-colors">Contact</Link>
        </div>
        <span className="text-[13px] text-slate-400">&copy; 2026 NexFlow Inc.</span>
      </div>
    </footer>
  )
}

/* ── Page ── */
export default function Enterprise() {
  return (
    <main className="bg-white min-h-screen">
      {/* Full extended background behind hero */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat z-0"
          style={{ backgroundImage: 'url(/hero-bg-extended.jpg)', backgroundPosition: 'center top' }}
        />

        <section className="relative overflow-hidden">
          {/* Radial white fade */}
          <div
            className="absolute inset-0 z-[1]"
            style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 45%, rgba(255,252,250,0.7) 0%, rgba(255,252,250,0.4) 35%, rgba(255,255,255,0) 65%)' }}
          />

          <Navbar />
          <Hero />
        </section>

        {/* Fade out */}
        <div className="relative z-[1] h-[60px]" style={{ background: 'linear-gradient(to bottom, transparent, #fff)' }} />
      </div>

      <SolutionSection />

      <HowItWorksSection />
      <ReplacesSection />
      <GrandSlamOffer />

      <WhyUsSection />

      <DarkCtaSection
        heading={<>Your next missed deadline is already <span className="font-playfair">forming.</span></>}
        description="See your risks 3 weeks early. Free audit, 48 hours."
        buttonText="Get Your Free 48-Hour Audit"
        calLink={CAL_LINK}
      />

      <Footer />
    </main>
  )
}
