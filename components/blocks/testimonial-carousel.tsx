'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        company: "SERIES A STARTUP",
        quote: "We reduced attrition by 40% in the first quarter. NexFlow sees what we couldn't.",
    },
    {
        company: "ENTERPRISE TECH CO",
        quote: "384 workforce decisions a day. Now they're automated. Our managers focus on what matters.",
    },
    {
        company: "HEALTHCARE NETWORK",
        quote: "$2.4M saved in replacement costs. ROI in 90 days. The predictive alerts changed everything.",
    },
    {
        company: "FINTECH UNICORN",
        quote: "We deployed to 500 employees in 3 weeks. Burnout flags appeared immediately. We acted.",
    },
    {
        company: "MANUFACTURING CORP",
        quote: "The playbooks gave our managers exactly what to say. Retention up 28%.",
    },
    {
        company: "CONSULTING FIRM",
        quote: "We were losing top performers. NexFlow predicted departures 3 weeks out. We kept them.",
    },
];

export function TestimonialCarousel() {
    return (
        <section className="py-24 md:py-32 bg-[#fcf6ef] overflow-hidden">
            <div className="mx-auto max-w-[1200px] px-6 md:px-16 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p
                        className="text-sm text-[#1F4D3A] uppercase tracking-wider mb-4"
                        style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 500,
                        }}
                    >
                        What Our Partners Say
                    </p>
                    <h2
                        className="text-3xl md:text-[42px] text-[#000] mb-5"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                            fontWeight: 400,
                            letterSpacing: '-0.05em',
                            lineHeight: '110%',
                        }}
                    >
                        Results that speak{' '}
                        <span style={{ fontStyle: 'italic' }}>for themselves</span>
                    </h2>
                </motion.div>
            </div>

            {/* Scrolling testimonials */}
            <div className="relative">
                <motion.div
                    className="flex gap-6 px-6"
                    animate={{
                        x: [0, -1920],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[400px] bg-white rounded-2xl border border-[#e5e0d8] p-8"
                        >
                            <p
                                className="text-[#1F4D3A] text-xs uppercase tracking-wider mb-4"
                                style={{
                                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                                    fontWeight: 600,
                                }}
                            >
                                {testimonial.company}
                            </p>
                            <p
                                className="text-[#000] text-lg leading-relaxed"
                                style={{
                                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                                }}
                            >
                                "{testimonial.quote}"
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
