"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const plans = [
    {
        name: 'Weekly Reports',
        price: '$149',
        period: '/mo',
        description: 'Everything you need to understand engineering health at a glance.',
        highlighted: true,
        cta: 'Get Started',
        ctaHref: 'https://cal.com/arjun-dixit-0nwkzi/30min',
        features: [
            'Weekly engineering health report',
            'PR cycle time tracking',
            'Sprint velocity signals',
            'Bottleneck detection',
            'Up to 30 engineers',
            'Slack & email delivery',
        ],
    },
    {
        name: 'Full Platform',
        price: 'Coming Soon',
        period: '',
        description: 'Real-time dashboard, alerts, and AI-powered recommendations.',
        highlighted: false,
        cta: 'Join Waitlist',
        ctaHref: 'https://cal.com/arjun-dixit-0nwkzi/30min',
        features: [
            'Everything in Weekly Reports',
            'Real-time dashboard',
            'Custom alert thresholds',
            'AI-powered action items',
            'Unlimited engineers',
            'Priority support',
        ],
    },
]

export function PricingSection() {
    return (
        <section id="pricing" className="bg-slate-50 py-16 sm:py-20">
            <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-10">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-slate-900 text-[28px] sm:text-[36px] font-semibold tracking-tight mb-3">
                        Simple, transparent <span className="font-serif-accent font-normal">pricing</span>
                    </h2>
                    <p className="text-slate-500 text-[15px] max-w-[440px] mx-auto">
                        Start with weekly reports. Upgrade when you&apos;re ready.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                >
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            className={`rounded-xl p-6 sm:p-8 ${
                                plan.highlighted
                                    ? 'bg-white border-2 border-emerald-500 shadow-sm'
                                    : 'bg-white border border-slate-200 shadow-sm'
                            }`}
                            variants={fadeInUp}
                        >
                            {plan.highlighted && (
                                <div className="text-emerald-500 text-[11px] font-semibold uppercase tracking-wider mb-3">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-slate-900 text-[20px] font-semibold mb-1">
                                {plan.name}
                            </h3>
                            <div className="flex items-baseline gap-1 mb-3">
                                <span className="text-slate-900 text-[36px] font-semibold tracking-tight">
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span className="text-slate-400 text-[14px]">{plan.period}</span>
                                )}
                            </div>
                            <p className="text-slate-500 text-[14px] mb-6 leading-relaxed">
                                {plan.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2.5">
                                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                                        <span className="text-slate-600 text-[14px]">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.ctaHref}
                                target="_blank"
                                className={`block w-full text-center py-3 text-[14px] font-medium rounded-lg transition-colors ${
                                    plan.highlighted
                                        ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                }`}
                            >
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
