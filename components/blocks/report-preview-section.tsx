"use client"

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react'

export function ReportPreviewSection() {
    return (
        <section id="report-preview" className="bg-slate-50 py-16 sm:py-20">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left column — text */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-slate-900 text-[28px] sm:text-[36px] font-semibold tracking-tight mb-4"
                            variants={fadeInUp}
                        >
                            Reports that actually get <span className="font-serif-accent font-normal">read</span>
                        </motion.h2>
                        <motion.p
                            className="text-slate-500 text-[15px] leading-relaxed mb-6 max-w-[440px]"
                            variants={fadeInUp}
                        >
                            Every Monday, your inbox gets a concise engineering health report. No dashboards to check. No meetings to schedule. Just the signals that matter.
                        </motion.p>
                        <motion.ul className="space-y-3 mb-8" variants={fadeInUp}>
                            {[
                                'Health score with trend comparison',
                                'Sprint progress and velocity signals',
                                'PR review times by team',
                                'At-risk items with owner attribution',
                                'Recommended actions for the week',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                                    <span className="text-slate-600 text-[14px]">{item}</span>
                                </li>
                            ))}
                        </motion.ul>
                        <motion.a
                            href="https://cal.com/arjun-dixit-0nwkzi/30min"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-600 text-[14px] font-medium transition-colors"
                            variants={fadeInUp}
                        >
                            See a live sample <ArrowRight className="w-3.5 h-3.5" />
                        </motion.a>
                    </motion.div>

                    {/* Right column — report card mockup (21st.dev swap point) */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 sm:p-8">
                            {/* Report header */}
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <div className="text-slate-900 text-[16px] font-semibold">Engineering Health Report</div>
                                    <div className="text-slate-400 text-[12px] mt-0.5">Week of Feb 17, 2026</div>
                                </div>
                                <div className="px-2.5 py-1 bg-emerald-50 text-emerald-600 text-[12px] font-medium rounded-md">
                                    Healthy
                                </div>
                            </div>

                            {/* Health score */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-slate-500 text-[13px]">Overall Health Score</span>
                                    <span className="text-slate-900 text-[20px] font-semibold">82<span className="text-slate-400 text-[14px]">/100</span></span>
                                </div>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '82%' }} />
                                </div>
                            </div>

                            {/* Metrics grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-slate-50 rounded-lg p-3">
                                    <div className="text-slate-400 text-[11px] uppercase tracking-wider mb-1">Sprint Progress</div>
                                    <div className="text-slate-900 text-[18px] font-semibold">73%</div>
                                    <div className="text-emerald-500 text-[11px]">+8% vs last week</div>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-3">
                                    <div className="text-slate-400 text-[11px] uppercase tracking-wider mb-1">Avg PR Time</div>
                                    <div className="text-slate-900 text-[18px] font-semibold">1.4d</div>
                                    <div className="text-emerald-500 text-[11px]">-0.6d improvement</div>
                                </div>
                            </div>

                            {/* At-risk items */}
                            <div className="border-t border-slate-100 pt-4 mb-4">
                                <div className="text-slate-900 text-[13px] font-semibold mb-3">At-Risk Items</div>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                                        <span className="text-slate-600 text-[13px]">Auth service migration — blocked on infra review</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                                        <span className="text-slate-600 text-[13px]">3 PRs stale &gt;48h in payments team</span>
                                    </div>
                                </div>
                            </div>

                            {/* Recommended actions */}
                            <div className="border-t border-slate-100 pt-4">
                                <div className="text-slate-900 text-[13px] font-semibold mb-3">Recommended Actions</div>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                        <span className="text-slate-600 text-[13px]">Unblock infra review for auth migration</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                        <span className="text-slate-600 text-[13px]">Reassign stale PR reviews in payments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
