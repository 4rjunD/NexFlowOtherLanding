'use client';

import { motion } from 'framer-motion'
import { MessageSquareText, UserCog, ShieldCheck } from 'lucide-react'
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
        <section className="py-24 md:py-32 bg-[#F6F4EF]">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-medium text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>
                        AI that tells managers exactly what to do.
                    </h2>
                    <p className="mt-4 text-[#6B6B6B] max-w-2xl mx-auto">
                        What to say. What not to say. Specific actions for each person.
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
                        icon={MessageSquareText}
                        title="Intervention Scripts"
                        description="Talking points for each situation. Open the conversation without making it awkward."
                    >
                        <InterventionVisual />
                    </FeatureCard>

                    <FeatureCard
                        icon={UserCog}
                        title="Behavioral Profiles"
                        description="What helps Sarah is different from what helps Mike. AI learns each person."
                    >
                        <ProfileVisual />
                    </FeatureCard>

                    <FeatureCard
                        icon={ShieldCheck}
                        title="Privacy-First"
                        description="Employees own their data. Managers see only what's needed."
                    >
                        <PrivacyVisual />
                    </FeatureCard>
                </motion.div>

                {/* Results */}
                <motion.div
                    className="mt-16 bg-white rounded-2xl border border-[#E5E2DB] p-8 md:p-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-center text-2xl md:text-3xl font-medium text-[#111111] mb-10" style={{ fontFamily: '"New York", Georgia, serif' }}>
                        Results in 90 days or your money back.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <MetricCard value="$50K+" label="Saved per prevented departure" />
                        <MetricCard value="30%" label="Fewer sick days" />
                        <MetricCard value="94%" label="Check-in completion rate" />
                        <MetricCard value="3 weeks" label="Early warning on burnout" />
                    </div>
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
        className="bg-white rounded-2xl border border-[#E5E2DB] p-6 flex flex-col"
        variants={itemVariants}
    >
        <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#1F4D3A]/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#1F4D3A]" />
            </div>
            <h3 className="text-lg font-medium text-[#111111]">{title}</h3>
        </div>
        <p className="text-[#6B6B6B] text-sm mb-6">{description}</p>
        <div className="mt-auto">
            {children}
        </div>
    </motion.div>
)

interface MetricCardProps {
    value: string
    label: string
}

const MetricCard = ({ value, label }: MetricCardProps) => (
    <div className="text-center">
        <p className="text-3xl md:text-4xl font-semibold text-[#1F4D3A]" style={{ fontFamily: '"New York", Georgia, serif' }}>
            {value}
        </p>
        <p className="text-[#6B6B6B] text-sm mt-1">{label}</p>
    </div>
)

const InterventionVisual = () => (
    <div className="space-y-3">
        <div className="bg-[#C45C5C]/10 rounded-lg p-3 border border-[#C45C5C]/20">
            <p className="text-xs font-medium text-[#C45C5C] mb-1">Alert: Michael Torres</p>
            <p className="text-sm text-[#111111]">Burnout risk increased to 78%</p>
        </div>
        <div className="bg-[#1F4D3A]/5 rounded-lg p-3 border border-[#1F4D3A]/20">
            <p className="text-xs font-medium text-[#1F4D3A] mb-2">Suggested approach:</p>
            <ul className="text-sm text-[#111111] space-y-1">
                <li className="flex gap-2"><span className="text-[#1F4D3A]">✓</span> Ask about workload, not performance</li>
                <li className="flex gap-2"><span className="text-[#1F4D3A]">✓</span> Offer deadline flexibility</li>
                <li className="flex gap-2"><span className="text-[#C45C5C]">✗</span> Avoid mentioning recent mistakes</li>
            </ul>
        </div>
    </div>
)

const ProfileVisual = () => (
    <div className="space-y-3">
        {[
            { label: 'Stress triggers', value: 'Back-to-back meetings, unclear deadlines' },
            { label: 'Recovery pattern', value: 'Needs 7.5+ hrs sleep to function' },
            { label: 'Best check-in time', value: 'Tuesday afternoons' },
        ].map((item, i) => (
            <div key={i} className="bg-[#F6F4EF] rounded-lg p-3 border border-[#E5E2DB]">
                <p className="text-xs text-[#999999] mb-1">{item.label}</p>
                <p className="text-sm text-[#111111]">{item.value}</p>
            </div>
        ))}
    </div>
)

const PrivacyVisual = () => (
    <div className="space-y-3">
        {[
            { text: 'Employees control what data is shared' },
            { text: 'Managers see team trends, not individual data' },
            { text: 'Delete all data anytime with one click' },
        ].map((item, i) => (
            <div key={i} className="bg-[#F6F4EF] rounded-lg p-3 border border-[#E5E2DB] flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1F4D3A]"></div>
                <p className="text-sm text-[#111111]">{item.text}</p>
            </div>
        ))}
    </div>
)
