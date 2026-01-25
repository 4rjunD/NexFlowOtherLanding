'use client';

import { motion } from 'framer-motion';

const products = [
    {
        id: "/0.1",
        name: "Monitor",
        description: "Continuous health signals. Stress markers. Recovery scores. HRV. Sleep quality. Real-time.",
    },
    {
        id: "/0.2",
        name: "Predict",
        description: "Burnout probability. Energy depletion risk. Performance decline. 3 weeks before symptoms.",
    },
    {
        id: "/0.3",
        name: "Intervene",
        description: "Recovery protocols. Workload rebalancing. Manager alerts. Automated when thresholds hit.",
    },
    {
        id: "/0.4",
        name: "Command",
        description: "Team health dashboard. Department wellness scores. Executive visibility. Full drill-down.",
    },
    {
        id: "/0.5",
        name: "Integrate",
        description: "Wearables. Sleep trackers. Calendar data. The complete health picture.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        }
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ProductTaxonomy() {
    return (
        <section className="py-24 md:py-32 bg-[#1F4D3A]">
            <div className="mx-auto max-w-[1200px] px-6 md:px-16">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p
                        className="text-sm text-white/60 uppercase tracking-wider mb-4"
                        style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 500,
                        }}
                    >
                        Our Platform
                    </p>
                    <h2
                        className="text-3xl md:text-[42px] text-white mb-5"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                            fontWeight: 400,
                            letterSpacing: '-0.05em',
                            lineHeight: '110%',
                        }}
                    >
                        The layer beneath{' '}
                        <span style={{ fontStyle: 'italic' }}>performance</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="space-y-0"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="flex items-start gap-6 py-6 border-t border-white/20"
                            variants={itemVariants}
                        >
                            <span
                                className="text-white/40 text-sm font-mono shrink-0 w-12"
                                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                            >
                                {product.id}
                            </span>
                            <div className="flex-1">
                                <h3
                                    className="text-white text-xl md:text-2xl mb-2"
                                    style={{
                                        fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    {product.name}
                                </h3>
                                <p
                                    className="text-white/70"
                                    style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
                                >
                                    {product.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
