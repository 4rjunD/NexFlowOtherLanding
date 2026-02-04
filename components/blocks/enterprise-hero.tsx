"use client"

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        }
    },
}

const slideDownVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
    },
}

const videoVariants = {
    hidden: { opacity: 0, y: -40, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.5 }
    },
}

export function EnterpriseHero() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const videoContainerRef = useRef<HTMLDivElement>(null)
    const [isMuted, setIsMuted] = useState(true)

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
            setIsMuted(!isMuted)
        }
    }

    useEffect(() => {
        const video = videoRef.current
        const container = videoContainerRef.current
        if (!video || !container) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
                        video.play()
                    } else {
                        video.pause()
                    }
                })
            },
            {
                threshold: 0.7,
            }
        )

        observer.observe(container)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <main className="overflow-hidden bg-[#fcf6ef] relative">
            <section className="relative z-10">
                {/* Hero Section */}
                <div className="px-4 sm:px-6 md:px-16 pt-24 sm:pt-28 md:pt-32 pb-6 md:pb-8 relative">
                    <div className="mx-auto max-w-[1200px] relative z-10">
                        <motion.div
                            className="flex flex-col items-center text-center"
                            style={{ gap: '24px' }}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >

                            {/* Badge - "Backed by Character Capital" */}
                            <motion.div
                                className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-[#e5e0d8]"
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.6)',
                                }}
                                variants={slideDownVariants}
                            >
                                <span
                                    className="text-[13px] sm:text-[15px] text-[#000]"
                                    style={{
                                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                                        fontWeight: 500,
                                    }}
                                >
                                    Backed by Character Capital
                                </span>
                            </motion.div>

                            {/* Main Headline - Halant style */}
                            <motion.h1
                                className="max-w-[900px] mx-auto text-[#000]"
                                style={{
                                    fontFamily: 'var(--font-halant), Halant, Georgia, serif',
                                    fontSize: 'clamp(32px, 5.5vw, 68px)',
                                    fontWeight: 400,
                                    letterSpacing: '-0.04em',
                                    lineHeight: '115%',
                                }}
                                variants={slideDownVariants}
                            >
                                See what's stuck before it stalls{' '}
                                <span style={{ fontStyle: 'italic' }}>your entire team.</span>
                            </motion.h1>

                            {/* Subtitle - Inter */}
                            <motion.p
                                className="max-w-[680px] mx-auto text-[#94877c] text-base sm:text-lg px-2 sm:px-0"
                                style={{
                                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '1.7',
                                }}
                                variants={slideDownVariants}
                            >
                                NexFlow connects to your stack and surfaces slowdowns, overloaded teammates, and at-risk deadlines before they derail your sprint.
                            </motion.p>

                            {/* CTA Button - Dark green */}
                            <motion.div variants={slideDownVariants}>
                                <Link
                                    href="https://cal.com/arjun-dixit-0nwkzi/30min"
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-6 py-3 text-[#fcf6ef] bg-[#1F4D3A] hover:bg-[#163D2E] transition-all duration-300 rounded-full"
                                    style={{
                                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                                        fontSize: '15px',
                                        fontWeight: 500,
                                    }}
                                >
                                    Request a Demo
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Video Section */}
                <motion.div
                    className="relative px-4 sm:px-6 md:px-16 pt-8 sm:pt-10 pb-8 sm:pb-12"
                    variants={videoVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div ref={videoContainerRef} className="mx-auto max-w-[1072px]">
                        <div
                            className="relative overflow-hidden rounded-lg"
                            style={{
                                aspectRatio: '16 / 9',
                                boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
                            }}
                        >
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                playsInline
                                muted
                                loop
                            >
                                <source src="/demonexflow.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <button
                                onClick={toggleMute}
                                className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                                aria-label={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? (
                                    <VolumeX className="w-5 h-5 text-white" />
                                ) : (
                                    <Volume2 className="w-5 h-5 text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}
