"use client"

import { motion } from 'framer-motion'
import { DollarSign, BellOff, GitPullRequest, CalendarClock } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const stats = [
    {
        icon: DollarSign,
        stat: '$50K',
        label: 'per dev, per year',
        description: 'Lost to inefficiency, context switching, and invisible blockers.',
    },
    {
        icon: BellOff,
        stat: '97%',
        label: 'alert noise',
        description: 'Most monitoring tools flood managers with signals that don\'t matter.',
    },
    {
        icon: GitPullRequest,
        stat: '4+ days',
        label: 'avg PR wait time',
        description: 'Stale PRs kill momentum and quietly erode developer experience.',
    },
    {
        icon: CalendarClock,
        stat: '62%',
        label: 'miss deadlines',
        description: 'Of engineering teams consistently miss sprint commitments.',
    },
]

export function PainStatsSection() {
    return (
        <section className="bg-slate-50 py-16 sm:py-20">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-slate-900 text-[28px] sm:text-[36px] font-semibold tracking-tight mb-3">
                        The problems no one <span className="font-serif-accent font-normal">talks about</span>
                    </h2>
                    <p className="text-slate-500 text-[15px] max-w-[480px] mx-auto">
                        Engineering orgs are bleeding time and money in ways dashboards don&apos;t show.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {stats.map((item) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={item.stat}
                                className="bg-white rounded-xl border border-slate-200 shadow-sm p-6"
                                variants={fadeInUp}
                            >
                                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                                    <Icon className="w-4 h-4 text-emerald-500" strokeWidth={1.5} />
                                </div>
                                <div className="text-slate-900 text-[32px] font-semibold tracking-tight leading-none mb-1">
                                    {item.stat}
                                </div>
                                <div className="text-slate-400 text-[13px] font-medium mb-3">
                                    {item.label}
                                </div>
                                <p className="text-slate-500 text-[13px] leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
