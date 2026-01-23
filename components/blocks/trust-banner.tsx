"use client"

import { motion } from 'framer-motion'
import { Shield, Lock, Trash2 } from 'lucide-react'

export function TrustBanner() {
    return (
        <section className="py-[80px] bg-[#1F4D3A]">
            <div className="mx-auto max-w-[1200px] px-8 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-[48px]"
                >
                    <h2
                        className="text-[32px] md:text-[40px] font-medium text-white mb-[16px]"
                        style={{
                            fontFamily: 'var(--font-halant), Halant, serif',
                            lineHeight: '110%',
                            letterSpacing: '-0.05em'
                        }}
                    >
                        Your data stays yours
                    </h2>
                    <p
                        className="text-[16px] text-white/70 max-w-[500px] mx-auto"
                        style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            lineHeight: '1.6'
                        }}
                    >
                        Privacy is not a feature. It is the foundation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-[24px]"
                >
                    <div className="flex flex-col items-center text-center p-[32px] rounded-[16px] bg-white/10 backdrop-blur-sm">
                        <div className="w-[56px] h-[56px] rounded-full bg-white/20 flex items-center justify-center mb-[20px]">
                            <Shield className="w-[28px] h-[28px] text-white" />
                        </div>
                        <h3
                            className="text-[20px] font-medium text-white mb-[8px]"
                            style={{
                                fontFamily: 'var(--font-halant), Halant, serif',
                                letterSpacing: '-0.05em'
                            }}
                        >
                            Employee-owned data
                        </h3>
                        <p
                            className="text-[14px] text-white/70"
                            style={{
                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                lineHeight: '1.5'
                            }}
                        >
                            Employees control exactly what gets shared. Managers see insights, not raw data.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center p-[32px] rounded-[16px] bg-white/10 backdrop-blur-sm">
                        <div className="w-[56px] h-[56px] rounded-full bg-white/20 flex items-center justify-center mb-[20px]">
                            <Lock className="w-[28px] h-[28px] text-white" />
                        </div>
                        <h3
                            className="text-[20px] font-medium text-white mb-[8px]"
                            style={{
                                fontFamily: 'var(--font-halant), Halant, serif',
                                letterSpacing: '-0.05em'
                            }}
                        >
                            End-to-end encrypted
                        </h3>
                        <p
                            className="text-[14px] text-white/70"
                            style={{
                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                lineHeight: '1.5'
                            }}
                        >
                            256-bit AES encryption at rest and in transit. SOC 2 Type II compliant.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center p-[32px] rounded-[16px] bg-white/10 backdrop-blur-sm">
                        <div className="w-[56px] h-[56px] rounded-full bg-white/20 flex items-center justify-center mb-[20px]">
                            <Trash2 className="w-[28px] h-[28px] text-white" />
                        </div>
                        <h3
                            className="text-[20px] font-medium text-white mb-[8px]"
                            style={{
                                fontFamily: 'var(--font-halant), Halant, serif',
                                letterSpacing: '-0.05em'
                            }}
                        >
                            One-click delete
                        </h3>
                        <p
                            className="text-[14px] text-white/70"
                            style={{
                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                lineHeight: '1.5'
                            }}
                        >
                            Anyone can delete all their data instantly. No questions, no waiting period.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
