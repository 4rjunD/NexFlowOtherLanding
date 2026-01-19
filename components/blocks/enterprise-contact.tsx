'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export function EnterpriseContact() {
    return (
        <section id="contact" className="py-24 md:py-32 bg-[#EBE8E1]">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#111111] mb-6" style={{ fontFamily: '"New York", Georgia, serif' }}>
                        Feels human, not corporate.
                    </h2>
                    <p className="text-[#6B6B6B] text-lg mb-10 max-w-2xl mx-auto">
                        Simple pricing. No per-seat licensing. No long-term lock-ins. Just a flat monthly Health Ops fee that covers your team.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-xl px-8 text-base bg-[#1F4D3A] hover:bg-[#163D2E] text-white"
                        >
                            <Link href="mailto:arjundixit@nexflowinc.com?subject=NexFlow%20Enterprise%20Inquiry">
                                <Mail className="w-4 h-4 mr-2" />
                                Contact for More Info
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="rounded-xl px-8 text-base border-[#D9D6CF] text-[#111111] hover:bg-[#F6F4EF]"
                        >
                            <Link href="https://cal.com/arjun-dixit-0nwkzi/30min" target="_blank">
                                Book a Demo
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
