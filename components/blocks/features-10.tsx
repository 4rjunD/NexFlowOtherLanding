'use client';

import { motion } from 'framer-motion'
import { Zap, UserCog, ShieldCheck } from 'lucide-react'
import { ReactNode } from 'react'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        }
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function EnterpriseFeatures() {
    return (
        <section className="py-24 md:py-32 bg-[#fcf6ef]">
            <div className="mx-auto max-w-[1200px] px-6 md:px-16">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        className="text-3xl md:text-[42px] text-[#000]"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                            fontWeight: 400,
                            letterSpacing: '-0.05em',
                            lineHeight: '110%',
                        }}
                    >
                        Predictive intelligence for{' '}
                        <span style={{ fontStyle: 'italic' }}>every manager</span>.
                    </h2>
                    <p
                        className="mt-5 text-[#94877c] max-w-2xl mx-auto text-lg"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                        Neural networks that model individual work patterns. Algorithmic optimization for schedules, workloads, and team dynamics.
                    </p>
                </motion.div>

                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <FeatureCard
                        icon={Zap}
                        title="Adaptive Playbooks"
                        description="Machine-generated intervention scripts calibrated to each employee's behavioral profile. Context-aware recommendations that evolve with your team."
                    >
                        <PlaybookVisual />
                    </FeatureCard>

                    <FeatureCard
                        icon={UserCog}
                        title="Behavioral Profiles"
                        description="Individual neural models trained on 200+ signals per person. The system learns unique productivity rhythms, energy patterns, and collaboration preferences."
                    >
                        <ProfileVisual />
                    </FeatureCard>

                    <FeatureCard
                        icon={ShieldCheck}
                        title="Differential Privacy"
                        description="Enterprise-grade data protection. Employees own their data. Managers see aggregated insights through privacy-preserving computation."
                    >
                        <PrivacyVisual />
                    </FeatureCard>
                </motion.div>
            </div>
        </section>
    )
}

interface FeatureCardProps {
    icon: React.ElementType
    title: string
    description: string
    children: ReactNode
}

const FeatureCard = ({ icon: Icon, title, description, children }: FeatureCardProps) => (
    <motion.div
        className="bg-white rounded-2xl border border-[#e5e0d8] p-6 flex flex-col"
        variants={itemVariants}
    >
        <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#1F4D3A]/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#1F4D3A]" />
            </div>
            <h3
                className="text-lg text-[#000]"
                style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 500,
                }}
            >
                {title}
            </h3>
        </div>
        <p
            className="text-[#94877c] text-sm mb-6"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
        >
            {description}
        </p>
        <div className="mt-auto">
            {children}
        </div>
    </motion.div>
)

const PlaybookVisual = () => (
    <div className="space-y-3">
        <div className="bg-[#1F4D3A]/5 rounded-lg p-3 border border-[#1F4D3A]/20">
            <p className="text-xs font-medium text-[#1F4D3A] mb-1" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Insight: Sarah Chen</p>
            <p className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Productivity peaks Tuesday-Thursday mornings</p>
        </div>
        <div className="bg-[#fcf6ef] rounded-lg p-3 border border-[#e5e0d8]">
            <p className="text-xs font-medium text-[#94877c] mb-2" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Optimization tips:</p>
            <ul className="text-sm text-[#000] space-y-1" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                <li className="flex gap-2"><span className="text-[#1F4D3A]">✓</span> Schedule deep work in AM blocks</li>
                <li className="flex gap-2"><span className="text-[#1F4D3A]">✓</span> Meetings after 2pm preferred</li>
                <li className="flex gap-2"><span className="text-[#1F4D3A]">✓</span> Energy dips Fridays—lighter tasks</li>
            </ul>
        </div>
    </div>
)

const ProfileVisual = () => (
    <div className="space-y-3">
        {[
            { label: 'Peak hours', value: '9am-12pm, high focus capacity' },
            { label: 'Energy drivers', value: 'Collaborative projects, clear goals' },
            { label: 'Optimal 1:1 time', value: 'Wednesday afternoons' },
        ].map((item, i) => (
            <div key={i} className="bg-[#fcf6ef] rounded-lg p-3 border border-[#e5e0d8]">
                <p className="text-xs text-[#94877c] mb-1" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>{item.label}</p>
                <p className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>{item.value}</p>
            </div>
        ))}
    </div>
)

const PrivacyVisual = () => (
    <div className="space-y-3">
        {[
            { text: 'Employees control what data is shared' },
            { text: 'Managers see team insights, not individual data' },
            { text: 'Delete all data anytime with one click' },
        ].map((item, i) => (
            <div key={i} className="bg-[#fcf6ef] rounded-lg p-3 border border-[#e5e0d8] flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                <p className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>{item.text}</p>
            </div>
        ))}
    </div>
)
