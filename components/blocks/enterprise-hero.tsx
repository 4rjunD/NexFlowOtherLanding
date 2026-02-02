"use client"

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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

const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
    },
}

// Floating logo component with scroll animation
function FloatingLogo({
    children,
    side,
    top,
    offset = 0,
    scrollMultiplier = 1,
    delay = 0
}: {
    children: React.ReactNode
    side: 'left' | 'right'
    top: string
    offset?: number
    scrollMultiplier?: number
    delay?: number
}) {
    const { scrollY } = useScroll()
    const xMove = useTransform(scrollY, [0, 400], [0, side === 'left' ? -80 * scrollMultiplier : 80 * scrollMultiplier])
    const yMove = useTransform(scrollY, [0, 400], [0, 50])
    const opacity = useTransform(scrollY, [0, 350], [1, 0])

    const basePosition = side === 'left'
        ? { left: `calc(50% - 520px - ${offset}px)` }
        : { right: `calc(50% - 520px - ${offset}px)` }

    return (
        <motion.div
            className="absolute hidden lg:flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md border border-[#e5e0d8] z-0"
            style={{
                top,
                ...basePosition,
                x: xMove,
                y: yMove,
                opacity
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
        >
            {children}
        </motion.div>
    )
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

                    {/* Floating Logos - Left Side */}
                    <FloatingLogo side="left" top="140px" offset={0} scrollMultiplier={1} delay={0.3}>
                        {/* Slack */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.522 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.164 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.164 18.956a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.164 24a2.528 2.528 0 0 1-2.521-2.522v-2.522h2.521zm0-1.27a2.528 2.528 0 0 1-2.521-2.522 2.528 2.528 0 0 1 2.521-2.521h6.314A2.528 2.528 0 0 1 24 15.164a2.527 2.527 0 0 1-2.522 2.522h-6.314z" fill="#E01E5A"/>
                        </svg>
                    </FloatingLogo>

                    <FloatingLogo side="left" top="220px" offset={60} scrollMultiplier={0.7} delay={0.45}>
                        {/* Linear */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#5E6AD2">
                            <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5Z"/>
                            <path d="M12 8V12L15 15" stroke="#5E6AD2" strokeWidth="2" strokeLinecap="round" fill="none"/>
                        </svg>
                    </FloatingLogo>

                    <FloatingLogo side="left" top="300px" offset={20} scrollMultiplier={0.5} delay={0.55}>
                        {/* Jira */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0052CC">
                            <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23 0H11.457a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.005 1.005 0 0 0 23 0z"/>
                        </svg>
                    </FloatingLogo>

                    {/* Floating Logos - Right Side */}
                    <FloatingLogo side="right" top="140px" offset={0} scrollMultiplier={1} delay={0.35}>
                        {/* GitHub */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                    </FloatingLogo>

                    <FloatingLogo side="right" top="220px" offset={60} scrollMultiplier={0.7} delay={0.5}>
                        {/* Calendar */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="4" width="18" height="18" rx="2" stroke="#1F4D3A" strokeWidth="2"/>
                            <path d="M3 10H21" stroke="#1F4D3A" strokeWidth="2"/>
                            <path d="M8 2V6" stroke="#1F4D3A" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M16 2V6" stroke="#1F4D3A" strokeWidth="2" strokeLinecap="round"/>
                            <rect x="7" y="14" width="3" height="3" rx="0.5" fill="#1F4D3A"/>
                            <rect x="14" y="14" width="3" height="3" rx="0.5" fill="#1F4D3A"/>
                        </svg>
                    </FloatingLogo>

                    <FloatingLogo side="right" top="300px" offset={20} scrollMultiplier={0.5} delay={0.6}>
                        {/* Notion */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000">
                            <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.166V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933z"/>
                        </svg>
                    </FloatingLogo>

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
