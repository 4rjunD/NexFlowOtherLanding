"use client"

import { motion } from 'framer-motion'

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
}

const terminalLine = {
    hidden: { opacity: 0, x: -8 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
}

const terminalStagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
}

export function HowItWorksSteps() {
    return (
        <section
            id="platform"
            className="py-12 sm:py-16 md:py-20"
            style={{ background: '#000000' }}
        >
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12">
                {/* Section headline */}
                <motion.h2
                    className="text-white mb-6 md:mb-8"
                    style={{
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        letterSpacing: '-0.02em',
                        lineHeight: '1.1',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    Here&apos;s how it works
                </motion.h2>

                {/* 4-column grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {/* 1 — Connect (integration status) */}
                    <motion.div
                        className="relative overflow-hidden flex flex-col"
                        style={{
                            background: '#0A0A0A',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                        variants={fadeInUp}
                    >
                        <div className="px-5 pt-5 pb-5 relative overflow-hidden">
                            <span
                                className="absolute top-2 right-3 select-none pointer-events-none"
                                style={{ fontSize: '80px', fontWeight: 700, color: 'rgba(255,255,255,0.03)', lineHeight: '1' }}
                            >
                                1
                            </span>
                            <h3 className="text-white text-[22px] sm:text-[24px] font-medium mb-2.5 relative z-10">
                                Connect
                            </h3>
                            <p
                                className="text-[13px] relative z-10"
                                style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.6' }}
                            >
                                Plug in once. See everything.
                            </p>
                        </div>

                        {/* Config file visual */}
                        <div className="relative h-[180px] mt-auto px-4 pb-4">
                            <motion.div
                                className="h-full overflow-hidden"
                                style={{
                                    background: '#080808',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    padding: '10px 12px',
                                    fontFamily: 'var(--font-geist-mono), ui-monospace, monospace',
                                }}
                                variants={terminalStagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div className="text-[9px] mb-2" style={{ color: 'rgba(255,255,255,0.2)' }} variants={terminalLine}>
                                    # nexflow.config.yml
                                </motion.div>
                                <motion.div className="text-[9px] mb-1" style={{ color: 'rgba(255,255,255,0.35)' }} variants={terminalLine}>
                                    <span style={{ color: '#f59e0b' }}>integrations</span>:
                                </motion.div>
                                <motion.div className="text-[9px] pl-2.5 flex items-center gap-1.5" variants={terminalLine}>
                                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#22c55e' }} />
                                    <span style={{ color: 'rgba(255,255,255,0.4)' }}>slack:</span>
                                    <span style={{ color: '#22c55e' }}>connected</span>
                                </motion.div>
                                <motion.div className="text-[9px] pl-2.5 flex items-center gap-1.5" variants={terminalLine}>
                                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#22c55e' }} />
                                    <span style={{ color: 'rgba(255,255,255,0.4)' }}>github:</span>
                                    <span style={{ color: '#22c55e' }}>connected</span>
                                </motion.div>
                                <motion.div className="text-[9px] pl-2.5 flex items-center gap-1.5" variants={terminalLine}>
                                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#22c55e' }} />
                                    <span style={{ color: 'rgba(255,255,255,0.4)' }}>jira:</span>
                                    <span style={{ color: '#22c55e' }}>connected</span>
                                </motion.div>
                                <motion.div className="text-[9px] pl-2.5 flex items-center gap-1.5" variants={terminalLine}>
                                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#22c55e' }} />
                                    <span style={{ color: 'rgba(255,255,255,0.4)' }}>linear:</span>
                                    <span style={{ color: '#22c55e' }}>connected</span>
                                </motion.div>
                                <motion.div className="text-[9px] pl-2.5 flex items-center gap-1.5" variants={terminalLine}>
                                    <span className="w-1 h-1 rounded-full shrink-0 animate-pulse" style={{ background: '#f59e0b' }} />
                                    <span style={{ color: 'rgba(255,255,255,0.4)' }}>notion:</span>
                                    <span style={{ color: '#f59e0b' }}>syncing...</span>
                                </motion.div>
                                <motion.div
                                    className="text-[9px] mt-2 pt-1.5"
                                    style={{ color: 'rgba(255,255,255,0.2)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
                                    variants={terminalLine}
                                >
                                    5/6 sources active &middot; last sync 2m ago
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* 2 — Discover (terminal visual) */}
                    <motion.div
                        className="relative overflow-hidden flex flex-col"
                        style={{
                            background: '#0A0A0A',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                        variants={fadeInUp}
                    >
                        <div className="px-5 pt-5 pb-5 relative overflow-hidden">
                            <span
                                className="absolute top-2 right-3 select-none pointer-events-none"
                                style={{ fontSize: '80px', fontWeight: 700, color: 'rgba(255,255,255,0.03)', lineHeight: '1' }}
                            >
                                2
                            </span>
                            <h3 className="text-white text-[22px] sm:text-[24px] font-medium mb-2.5 relative z-10">
                                Discover
                            </h3>
                            <p
                                className="text-[13px] relative z-10"
                                style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.6' }}
                            >
                                Surface risks before they escalate.
                            </p>
                        </div>

                        {/* Terminal scan output */}
                        <div className="relative h-[180px] mt-auto px-4 pb-4">
                            <motion.div
                                className="h-full overflow-hidden"
                                style={{
                                    background: '#080808',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    padding: '10px 12px',
                                    fontFamily: 'var(--font-geist-mono), ui-monospace, monospace',
                                }}
                                variants={terminalStagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div className="text-[9px] mb-2" style={{ color: 'rgba(255,255,255,0.25)' }} variants={terminalLine}>
                                    <span style={{ color: 'rgba(255,255,255,0.15)' }}>$</span> nexflow scan --team eng-2
                                </motion.div>
                                <motion.div className="text-[9px] mb-1.5" style={{ color: 'rgba(255,255,255,0.2)' }} variants={terminalLine}>
                                    Scanning 14 data sources...
                                </motion.div>
                                <motion.div className="text-[9px]" style={{ color: '#f59e0b' }} variants={terminalLine}>
                                    &#9888; Sprint velocity: -34% (2wk)
                                </motion.div>
                                <motion.div className="text-[9px]" style={{ color: '#f59e0b' }} variants={terminalLine}>
                                    &#9888; PR review time: 4.2d avg
                                </motion.div>
                                <motion.div className="text-[9px]" style={{ color: '#ef4444' }} variants={terminalLine}>
                                    &#10007; Burnout risk: HIGH for 3 ICs
                                </motion.div>
                                <motion.div className="text-[9px] pl-2.5" style={{ color: 'rgba(255,255,255,0.3)' }} variants={terminalLine}>
                                    @sarah: 52h/wk, 0 PTO in 90d
                                </motion.div>
                                <motion.div className="text-[9px] pl-2.5" style={{ color: 'rgba(255,255,255,0.3)' }} variants={terminalLine}>
                                    @chen: 18 PRs assigned, 6 stale
                                </motion.div>
                                <motion.div className="text-[9px] pl-2.5" style={{ color: 'rgba(255,255,255,0.3)' }} variants={terminalLine}>
                                    @kai: meetings 68% of calendar
                                </motion.div>
                                <motion.div
                                    className="text-[9px] mt-1.5 pt-1.5"
                                    style={{ color: 'rgba(255,255,255,0.4)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
                                    variants={terminalLine}
                                >
                                    Risk Score: <span className="text-white font-medium">7.2</span> / 10
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* 3 — Report (PDF/report visual) */}
                    <motion.div
                        className="relative overflow-hidden flex flex-col"
                        style={{
                            background: '#0A0A0A',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                        variants={fadeInUp}
                    >
                        <div className="px-5 pt-5 pb-5 relative overflow-hidden">
                            <span
                                className="absolute top-2 right-3 select-none pointer-events-none"
                                style={{ fontSize: '80px', fontWeight: 700, color: 'rgba(255,255,255,0.03)', lineHeight: '1' }}
                            >
                                3
                            </span>
                            <h3 className="text-white text-[22px] sm:text-[24px] font-medium mb-2.5 relative z-10">
                                Report
                            </h3>
                            <p
                                className="text-[13px] relative z-10"
                                style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.6' }}
                            >
                                Weekly reports your leadership can act on.
                            </p>
                        </div>

                        {/* Report/PDF mockup */}
                        <div className="relative h-[180px] mt-auto px-4 pb-4">
                            <motion.div
                                className="h-full overflow-hidden"
                                style={{
                                    background: '#0f0f0f',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    padding: '12px',
                                }}
                                variants={terminalStagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {/* Report header */}
                                <motion.div className="flex items-center justify-between mb-3" variants={terminalLine}>
                                    <div>
                                        <div className="text-[8px] font-medium uppercase" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>Weekly Ops Report</div>
                                        <div className="text-[7px]" style={{ color: 'rgba(255,255,255,0.15)' }}>Week 7 &middot; Feb 2026</div>
                                    </div>
                                    <div className="px-1.5 py-0.5 text-[7px]" style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '3px', color: 'rgba(255,255,255,0.2)' }}>PDF</div>
                                </motion.div>

                                {/* Mini bar chart */}
                                <motion.div className="flex items-end gap-1 mb-3 h-[32px]" variants={terminalLine}>
                                    {[65, 40, 80, 55, 90, 45, 70, 85, 60, 75].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex-1 rounded-sm"
                                            style={{ background: i >= 7 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)' }}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.5 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                                        />
                                    ))}
                                </motion.div>

                                {/* Metric rows */}
                                <motion.div className="flex items-center justify-between py-1" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }} variants={terminalLine}>
                                    <span className="text-[8px]" style={{ color: 'rgba(255,255,255,0.3)' }}>Team Health</span>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-[40px] h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                                            <div className="h-full rounded-full" style={{ width: '72%', background: 'rgba(255,255,255,0.3)' }} />
                                        </div>
                                        <span className="text-[8px] font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>7.2</span>
                                    </div>
                                </motion.div>
                                <motion.div className="flex items-center justify-between py-1" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }} variants={terminalLine}>
                                    <span className="text-[8px]" style={{ color: 'rgba(255,255,255,0.3)' }}>Delivery Risk</span>
                                    <span className="text-[8px] font-medium px-1.5 py-0.5 rounded" style={{ color: '#f59e0b', background: 'rgba(245,158,11,0.1)' }}>Medium</span>
                                </motion.div>
                                <motion.div className="flex items-center justify-between py-1" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }} variants={terminalLine}>
                                    <span className="text-[8px]" style={{ color: 'rgba(255,255,255,0.3)' }}>Blocked</span>
                                    <span className="text-[8px] font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>2 of 8</span>
                                </motion.div>
                                <motion.div className="flex items-center justify-between py-1" variants={terminalLine}>
                                    <span className="text-[8px]" style={{ color: 'rgba(255,255,255,0.3)' }}>Actions Taken</span>
                                    <span className="text-[8px] font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>14 this week</span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* 4 — Act (action log visual) */}
                    <motion.div
                        className="relative overflow-hidden flex flex-col"
                        style={{
                            background: '#0A0A0A',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                        variants={fadeInUp}
                    >
                        <div className="px-5 pt-5 pb-5 relative overflow-hidden">
                            <span
                                className="absolute top-2 right-3 select-none pointer-events-none"
                                style={{ fontSize: '80px', fontWeight: 700, color: 'rgba(255,255,255,0.03)', lineHeight: '1' }}
                            >
                                4
                            </span>
                            <h3 className="text-white text-[22px] sm:text-[24px] font-medium mb-2.5 relative z-10">
                                Act
                            </h3>
                            <p
                                className="text-[13px] relative z-10"
                                style={{ color: 'rgba(255,255,255,0.45)', lineHeight: '1.6' }}
                            >
                                Agents act autonomously. Every action logged.
                            </p>
                        </div>

                        {/* Action log */}
                        <div className="relative h-[180px] mt-auto px-4 pb-4">
                            <motion.div
                                className="h-full overflow-hidden flex flex-col gap-1.5"
                                style={{
                                    background: '#080808',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    padding: '8px',
                                }}
                                variants={terminalStagger}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="flex items-start gap-2 px-2.5 py-2"
                                    style={{ background: 'rgba(34,197,94,0.05)', borderRadius: '6px', border: '1px solid rgba(34,197,94,0.08)' }}
                                    variants={terminalLine}
                                >
                                    <span className="text-[10px] mt-px shrink-0" style={{ color: '#22c55e' }}>&#10003;</span>
                                    <div className="min-w-0">
                                        <span className="text-[10px] block" style={{ color: 'rgba(255,255,255,0.5)' }}>Reassigned INFRA-342 to @chen</span>
                                        <span className="text-[8px]" style={{ color: 'rgba(255,255,255,0.2)' }}>2 min ago</span>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start gap-2 px-2.5 py-2"
                                    style={{ background: 'rgba(34,197,94,0.05)', borderRadius: '6px', border: '1px solid rgba(34,197,94,0.08)' }}
                                    variants={terminalLine}
                                >
                                    <span className="text-[10px] mt-px shrink-0" style={{ color: '#22c55e' }}>&#10003;</span>
                                    <div className="min-w-0">
                                        <span className="text-[10px] block" style={{ color: 'rgba(255,255,255,0.5)' }}>Blocked 3 meetings for Eng-2</span>
                                        <span className="text-[8px]" style={{ color: 'rgba(255,255,255,0.2)' }}>18 min ago</span>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start gap-2 px-2.5 py-2"
                                    style={{ background: 'rgba(34,197,94,0.05)', borderRadius: '6px', border: '1px solid rgba(34,197,94,0.08)' }}
                                    variants={terminalLine}
                                >
                                    <span className="text-[10px] mt-px shrink-0" style={{ color: '#22c55e' }}>&#10003;</span>
                                    <div className="min-w-0">
                                        <span className="text-[10px] block" style={{ color: 'rgba(255,255,255,0.5)' }}>Escalated Q2 blocker to VP Eng</span>
                                        <span className="text-[8px]" style={{ color: 'rgba(255,255,255,0.2)' }}>1 hour ago</span>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start gap-2 px-2.5 py-2"
                                    style={{ background: 'rgba(34,197,94,0.05)', borderRadius: '6px', border: '1px solid rgba(34,197,94,0.08)' }}
                                    variants={terminalLine}
                                >
                                    <span className="text-[10px] mt-px shrink-0" style={{ color: '#22c55e' }}>&#10003;</span>
                                    <div className="min-w-0">
                                        <span className="text-[10px] block" style={{ color: 'rgba(255,255,255,0.5)' }}>Burnout check-in sent to 3 ICs</span>
                                        <span className="text-[8px]" style={{ color: 'rgba(255,255,255,0.2)' }}>3 hours ago</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
