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
                        Predict burnout.{' '}
                        <span style={{ fontStyle: 'italic' }}>Prevent it</span>.
                    </h2>
                    <p
                        className="mt-5 text-[#94877c] max-w-2xl mx-auto text-lg"
                        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                    >
                        The system detects health risk. Generates recovery protocols. Deploys them to managers. Autonomously.
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
                        title="Recovery Playbooks"
                        description="Personalized intervention protocols. Workload adjustments. Schedule optimization. Generated from each employee's health data."
                    >
                        <PlaybookVisual />
                    </FeatureCard>

                    <FeatureCard
                        icon={UserCog}
                        title="Wellness Profiles"
                        description="Stress tolerance. Recovery patterns. Energy cycles. A complete physiological model for every team member."
                    >
                        <ProfileVisual />
                    </FeatureCard>

                    <FeatureCard
                        icon={ShieldCheck}
                        title="Health Data Privacy"
                        description="Employees control their health data. Managers see team wellness trends. Individual records stay protected."
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
            <p className="text-xs font-medium text-[#1F4D3A] mb-1" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Alert: Sarah Chen</p>
            <p className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Recovery score dropped 23% this week</p>
        </div>
        <div className="bg-[#fcf6ef] rounded-lg p-3 border border-[#e5e0d8]">
            <p className="text-xs font-medium text-[#94877c] mb-2" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Recommended actions:</p>
            <ul className="text-sm text-[#000] space-y-1" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                <li className="flex gap-2"><span className="text-[#1F4D3A]">✓</span> Reduce meeting load by 30%</li>
                <li className="flex gap-2"><span className="text-[#1F4D3A]">✓</span> Block recovery time Thursday PM</li>
                <li className="flex gap-2"><span className="text-[#1F4D3A]">✓</span> Reassign Q4 deadline to backup</li>
            </ul>
        </div>
    </div>
)

const ProfileVisual = () => (
    <div className="space-y-3">
        {[
            { label: 'Stress tolerance', value: 'High capacity, 72hr recovery needed' },
            { label: 'Sleep quality', value: '6.2hr avg, below optimal threshold' },
            { label: 'HRV trend', value: 'Declining 12% over 2 weeks' },
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
            { text: 'Health data stays with the employee' },
            { text: 'Managers see wellness scores, not raw data' },
            { text: 'Enterprise-grade encryption at rest and in transit' },
        ].map((item, i) => (
            <div key={i} className="bg-[#fcf6ef] rounded-lg p-3 border border-[#e5e0d8] flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                <p className="text-sm text-[#000]" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>{item.text}</p>
            </div>
        ))}
    </div>
)
