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
        <section className="py-[120px] bg-[#f6f0e9]">
            <div className="mx-auto max-w-[1200px] px-8 md:px-16">
                <motion.div
                    className="text-center mb-[64px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        className="text-[32px] md:text-[40px] font-medium text-[#2b180a]"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, serif',
                            lineHeight: '110%',
                            letterSpacing: '-0.05em'
                        }}
                    >
                        Managers get the playbook.
                    </h2>
                    <p
                        className="mt-[16px] text-[16px] text-[#6b5d52] max-w-[555px] mx-auto"
                        style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            lineHeight: '1.6'
                        }}
                    >
                        What to say. What not to say. Tailored for each person.
                    </p>
                </motion.div>

                <motion.div
                    className="grid gap-[24px] md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <FeatureCard
                        icon={MessageSquareText}
                        title="Conversation Scripts"
                        description="Talking points for every situation. No awkward guessing."
                    >
                        <InterventionVisual />
                    </FeatureCard>

                    <FeatureCard
                        icon={UserCog}
                        title="Personal Profiles"
                        description="What works for Sarah differs from Mike. AI learns each person."
                    >
                        <ProfileVisual />
                    </FeatureCard>

                    <FeatureCard
                        icon={ShieldCheck}
                        title="Privacy First"
                        description="Employees own their data. Managers see what matters."
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
        className="bg-white rounded-[16px] border border-[#e8d3c0] p-[24px] flex flex-col"
        variants={itemVariants}
    >
        <div className="flex items-center gap-[12px] mb-[12px]">
            <div className="w-[40px] h-[40px] rounded-[12px] bg-[#2b180a]/10 flex items-center justify-center">
                <Icon className="w-[20px] h-[20px] text-[#2b180a]" />
            </div>
            <h3
                className="text-[18px] font-medium text-[#2b180a]"
                style={{
                    fontFamily: 'var(--font-halant), Halant, serif',
                    letterSpacing: '-0.05em'
                }}
            >
                {title}
            </h3>
        </div>
        <p
            className="text-[14px] text-[#6b5d52] mb-[24px]"
            style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                lineHeight: '1.5'
            }}
        >
            {description}
        </p>
        <div className="mt-auto">
            {children}
        </div>
    </motion.div>
)

const InterventionVisual = () => (
    <div className="space-y-[12px]">
        <div className="bg-[#c45c5c]/10 rounded-[8px] p-[12px] border border-[#c45c5c]/20">
            <p className="text-[12px] font-medium text-[#c45c5c] mb-[4px]">Alert: Michael Torres</p>
            <p className="text-[14px] text-[#2b180a]">Burnout risk increased to 78%</p>
        </div>
        <div className="bg-[#2b180a]/5 rounded-[8px] p-[12px] border border-[#2b180a]/10">
            <p className="text-[12px] font-medium text-[#2b180a] mb-[8px]">Suggested approach:</p>
            <ul className="text-[14px] text-[#2b180a] space-y-[4px]">
                <li className="flex gap-[8px]"><span className="text-[#2b180a]">✓</span> Ask about workload, not performance</li>
                <li className="flex gap-[8px]"><span className="text-[#2b180a]">✓</span> Offer deadline flexibility</li>
                <li className="flex gap-[8px]"><span className="text-[#c45c5c]">✗</span> Avoid mentioning recent mistakes</li>
            </ul>
        </div>
    </div>
)

const ProfileVisual = () => (
    <div className="space-y-[12px]">
        {[
            { label: 'Stress triggers', value: 'Back-to-back meetings, unclear deadlines' },
            { label: 'Recovery pattern', value: 'Needs 7.5+ hrs sleep to function' },
            { label: 'Best check-in time', value: 'Tuesday afternoons' },
        ].map((item, i) => (
            <div key={i} className="bg-[#f6f0e9] rounded-[8px] p-[12px] border border-[#e8d3c0]">
                <p className="text-[12px] text-[#6b5d52] mb-[4px]">{item.label}</p>
                <p className="text-[14px] text-[#2b180a]">{item.value}</p>
            </div>
        ))}
    </div>
)

const PrivacyVisual = () => (
    <div className="space-y-[12px]">
        {[
            { text: 'Employees control what data is shared' },
            { text: 'Managers see team trends, not individual data' },
            { text: 'Delete all data anytime with one click' },
        ].map((item, i) => (
            <div key={i} className="bg-[#f6f0e9] rounded-[8px] p-[12px] border border-[#e8d3c0] flex items-center gap-[12px]">
                <div className="w-[8px] h-[8px] rounded-full bg-[#2b180a]"></div>
                <p className="text-[14px] text-[#2b180a]">{item.text}</p>
            </div>
        ))}
    </div>
)
