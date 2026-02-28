"use client"

import { motion } from 'framer-motion'
import { MessageSquare, Mail, Users, AlertTriangle, ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const channels = [
    {
        icon: MessageSquare,
        name: 'Slack',
        description: 'Posted to any channel, every Monday',
        active: true,
    },
    {
        icon: Mail,
        name: 'Email',
        description: 'Digest in your inbox with one-click drill-down',
        active: true,
    },
    {
        icon: Users,
        name: 'MS Teams',
        description: 'Coming soon',
        active: false,
    },
]

export function DeliverySection() {
    return (
        <section className="bg-slate-50 py-20 md:py-28">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left column — text + channel list */}
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
                            It comes to <span className="font-playfair">you.</span>
                        </motion.h2>
                        <motion.p
                            className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-[440px]"
                            variants={fadeInUp}
                        >
                            No dashboards to check. No logins to remember. Your engineering health report
                            arrives where your team already works — every Monday at 9am.
                        </motion.p>

                        <motion.div className="space-y-4" variants={fadeInUp}>
                            {channels.map((channel) => {
                                const Icon = channel.icon
                                return (
                                    <div
                                        key={channel.name}
                                        className="flex items-center gap-3.5"
                                    >
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${channel.active ? 'bg-emerald-50' : 'bg-slate-100'}`}>
                                            <Icon className={`w-5 h-5 ${channel.active ? 'text-emerald-500' : 'text-slate-400'}`} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <div className={`text-[14px] font-semibold ${channel.active ? 'text-slate-900' : 'text-slate-400'}`}>
                                                {channel.name}
                                                {!channel.active && (
                                                    <span className="ml-2 text-[11px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                                                        Soon
                                                    </span>
                                                )}
                                            </div>
                                            <div className={`text-[13px] ${channel.active ? 'text-slate-500' : 'text-slate-400'}`}>
                                                {channel.description}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </motion.div>

                    {/* Right column — Slack mockup card */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                            {/* Slack channel header */}
                            <div className="px-5 py-3 border-b border-slate-100 flex items-center gap-2">
                                <span className="text-slate-400 text-[14px]">#</span>
                                <span className="text-slate-700 text-[14px] font-semibold">eng-leadership</span>
                            </div>

                            {/* Message area */}
                            <div className="p-5">
                                {/* Bot identity */}
                                <div className="flex items-center gap-2.5 mb-3">
                                    <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center">
                                        <span className="text-white text-[13px] font-bold">N</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-slate-900 text-[14px] font-bold">NexFlow</span>
                                            <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">APP</span>
                                        </div>
                                        <span className="text-slate-400 text-[12px]">9:00 AM</span>
                                    </div>
                                </div>

                                {/* Report card inside Slack */}
                                <div className="ml-[46px] bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <div className="text-slate-900 text-[14px] font-semibold mb-0.5">
                                        Weekly Engineering Health Report
                                    </div>
                                    <div className="text-slate-400 text-[12px] mb-4">
                                        Feb 24 – Mar 2, 2026
                                    </div>

                                    {/* Metric pills */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[12px] font-medium rounded-md">
                                            Health: 82
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 text-slate-600 text-[12px] font-medium rounded-md">
                                            Sprint: 73%
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-700 text-[12px] font-medium rounded-md">
                                            At-Risk: 3
                                        </span>
                                    </div>

                                    {/* At-risk items */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-start gap-2">
                                            <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                                            <span className="text-slate-600 text-[13px]">Auth migration blocked on infra review (5 days)</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                                            <span className="text-slate-600 text-[13px]">3 PRs stale &gt;48h in payments team</span>
                                        </div>
                                    </div>

                                    {/* View full report link */}
                                    <div className="flex items-center gap-1 text-emerald-600 text-[13px] font-medium">
                                        View Full Report <ArrowRight className="w-3 h-3" />
                                    </div>
                                </div>

                                {/* Reactions */}
                                <div className="ml-[46px] mt-3 flex items-center gap-3">
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-200 rounded-full text-[12px] text-slate-500">
                                        <span>👀</span> 3
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-200 rounded-full text-[12px] text-slate-500">
                                        <span>✅</span> 2
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
