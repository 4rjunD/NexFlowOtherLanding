"use client"

import { motion } from 'framer-motion'
import { FileText, GitPullRequest, TrendingUp, AlertTriangle, Users, Network } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const features = [
    {
        icon: FileText,
        title: 'Weekly Status Reports',
        description: 'Auto-generated engineering health summaries delivered every Monday. No more chasing updates.',
    },
    {
        icon: GitPullRequest,
        title: 'PR Health Monitoring',
        description: 'Track review times, stale PRs, and merge bottlenecks across every team and repo.',
    },
    {
        icon: TrendingUp,
        title: 'Sprint Signals',
        description: 'Early warning when sprint commitments are at risk, with specific recommendations to course-correct.',
    },
    {
        icon: AlertTriangle,
        title: 'Bottleneck Detection',
        description: 'Identify which people, processes, or dependencies are slowing your team down — before it escalates.',
    },
    {
        icon: Users,
        title: 'Team Capacity',
        description: 'Understand real workload distribution. Spot overloaded ICs and underutilized capacity.',
    },
    {
        icon: Network,
        title: 'Cross-Team Alignment',
        description: 'Track cross-team dependencies and communication patterns that create hidden delivery risk.',
    },
]

export function FeatureGridSection() {
    return (
        <section id="features" className="bg-white py-16 sm:py-20">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-slate-900 text-[28px] sm:text-[36px] font-semibold tracking-tight mb-3">
                        Everything you need to <span className="font-serif-accent font-normal">ship better</span>
                    </h2>
                    <p className="text-slate-500 text-[15px] max-w-[480px] mx-auto">
                        Six core capabilities that give engineering leaders the visibility they&apos;ve been missing.
                    </p>
                </motion.div>

                {/* 21st.dev swap point — feature grid individual cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {features.map((feature) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={feature.title}
                                className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow"
                                variants={fadeInUp}
                            >
                                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                                    <Icon className="w-4 h-4 text-emerald-500" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-slate-900 text-[16px] font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 text-[14px] leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
