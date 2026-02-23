"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Menu, X } from 'lucide-react'

const dmSans = 'var(--font-dm-sans), "DM Sans", -apple-system, sans-serif'
const playfair = 'var(--font-playfair), "Playfair Display", Georgia, serif'

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`)
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [breakpoint])
  return isMobile
}

const wordAnimation = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const wordChild = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
}

type HeadlineWord = { text: string; italic?: boolean }

function AnimatedHeadline({ words }: { words: HeadlineWord[] }) {
  return (
    <motion.span variants={wordAnimation} initial="hidden" animate="visible">
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordChild}
          style={{
            display: 'inline-block',
            marginRight: '0.22em',
            fontFamily: word.italic ? playfair : undefined,
            fontStyle: word.italic ? 'italic' : undefined,
          }}
        >
          {word.text}
        </motion.span>
      ))}
    </motion.span>
  )
}

/* ── Real brand SVG logos ── */
const LogoGithub = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#181717">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const LogoSlack = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" fill="#E01E5A"/>
    <path d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
    <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" fill="#36C5F0"/>
    <path d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
    <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z" fill="#2EB67D"/>
    <path d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
    <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52z" fill="#ECB22E"/>
    <path d="M15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
  </svg>
)

function FloatingIntegrationLogos({ hidden }: { hidden?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Y parallax
  const y0 = useTransform(scrollYProgress, [0, 1], [60, -40])
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -60])

  // X spread outward on scroll
  const xL = useTransform(scrollYProgress, [0.05, 0.35], [300, 0])
  const xR = useTransform(scrollYProgress, [0.08, 0.38], [-300, 0])

  if (hidden) return null

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 5,
      }}
    >
      {/* GitHub — far left */}
      <motion.div
        style={{
          position: 'absolute',
          left: 'calc(50% - 660px)',
          top: '35%',
          y: y0,
          x: xL,
          rotate: -6,
          width: 72,
          height: 72,
          background: '#fff',
          borderRadius: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <LogoGithub size={32} />
      </motion.div>

      {/* Slack — far right */}
      <motion.div
        style={{
          position: 'absolute',
          right: 'calc(50% - 660px)',
          top: '40%',
          y: y1,
          x: xR,
          rotate: 5,
          width: 72,
          height: 72,
          background: '#fff',
          borderRadius: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
      >
        <LogoSlack size={30} />
      </motion.div>
    </div>
  )
}

const headlineWords: HeadlineWord[] = [
  { text: 'Predict' },
  { text: 'delays', italic: true },
  { text: 'weeks' },
  { text: 'in' },
  { text: 'advance.' },
  { text: 'Ship' },
  { text: 'on' },
  { text: 'time,' },
  { text: 'every', italic: true },
  { text: 'time.' },
]

const navItems = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why NexFlow', href: '#why-nexflow' },
  { label: 'Product', href: '#product' },
  { label: 'Reports', href: '#reports' },
]

export default function Enterprise() {
  const isMobile = useIsMobile()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Full extended background behind hero + first sections */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/hero-bg-extended.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            zIndex: 0,
          }}
        />

      <section style={{ position: 'relative', overflow: 'hidden', minHeight: isMobile ? 'auto' : '100vh' }}>

        {/* Subtle radial white fade behind center content */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 55% at 50% 45%, rgba(255,252,250,0.7) 0%, rgba(255,252,250,0.4) 35%, rgba(255,255,255,0) 65%)',
            zIndex: 1,
          }}
        />

        {/* ── Floating glass navbar ── */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          padding: isMobile ? '12px 16px 0' : '20px 24px 0',
        }}>
          <motion.nav
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: isMobile ? '10px 12px 10px 14px' : '10px 8px 10px 16px',
              height: 52,
              maxWidth: 960,
              width: '100%',
              borderRadius: 9999,
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)',
              position: 'relative',
            }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Image src="/logo.png" alt="NexFlow" width={437} height={387} style={{ display: 'block', objectFit: 'contain', height: 28, width: 'auto' }} />
            </Link>

            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      fontFamily: dmSans,
                      fontSize: 14,
                      fontWeight: 500,
                      color: '#3a3a4a',
                      letterSpacing: '-0.02em',
                      cursor: 'pointer',
                      textDecoration: 'none',
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {!isMobile && (
              <Link
                href="https://cal.com/arjun-dixit-0nwkzi/30min"
                target="_blank"
                style={{
                  fontFamily: dmSans,
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#fff',
                  padding: '8px 20px',
                  background: '#1a1a2e',
                  borderRadius: 9999,
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                }}
              >
                Book a Demo
              </Link>
            )}

            {isMobile && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3a3a4a',
                }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </motion.nav>

          {/* Mobile dropdown menu */}
          {isMobile && mobileMenuOpen && (
            <motion.div
              style={{
                position: 'absolute',
                top: 60,
                left: 16,
                right: 16,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: 16,
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                padding: 8,
                zIndex: 100,
              }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: dmSans,
                    display: 'block',
                    padding: '12px 16px',
                    fontSize: 15,
                    fontWeight: 500,
                    color: '#3a3a4a',
                    textDecoration: 'none',
                    borderRadius: 10,
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div style={{ height: 1, background: 'rgba(0,0,0,0.06)', margin: '4px 16px' }} />
              <Link
                href="https://cal.com/arjun-dixit-0nwkzi/30min"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: dmSans,
                  display: 'block',
                  padding: '12px 16px',
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#fff',
                  background: '#1a1a2e',
                  borderRadius: 10,
                  textDecoration: 'none',
                  textAlign: 'center',
                  margin: '4px 0',
                }}
              >
                Book a Demo
              </Link>
            </motion.div>
          )}
        </div>

        {/* ── Hero content ── */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: isMobile ? '48px 20px 56px' : '80px 24px 80px',
          maxWidth: 960,
          margin: '0 auto',
        }}>

          {/* Announcement pill */}
          <motion.div
            style={{
              fontFamily: dmSans,
              fontSize: isMobile ? 12 : 13,
              color: '#5a4ed4',
              padding: '6px 16px',
              background: 'rgba(255, 255, 255, 0.55)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: 100,
              border: '1px solid rgba(255, 255, 255, 0.6)',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04), 0 0.5px 2px rgba(0, 0, 0, 0.03)',
              marginBottom: isMobile ? 24 : 36,
              letterSpacing: '-0.01em',
              fontWeight: 500,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span style={{ fontWeight: 600 }}>New:</span> AI agents that auto-triage stalled PRs
          </motion.div>

          {/* Headline — DM Sans base + Playfair italic accents */}
          <h1 style={{
            fontFamily: dmSans,
            fontSize: 'clamp(32px, 5.5vw, 68px)',
            fontWeight: 500,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#2a1f14',
            marginBottom: isMobile ? 24 : 32,
            maxWidth: 960,
          }}>
            <AnimatedHeadline words={headlineWords} />
          </h1>

          {/* CTAs */}
          <motion.div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 12,
              justifyContent: 'center',
              alignItems: 'center',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? 320 : 'none',
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="https://cal.com/arjun-dixit-0nwkzi/30min"
              target="_blank"
              style={{
                fontFamily: dmSans,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                background: '#1e1e2e',
                borderRadius: 100,
                padding: isMobile ? '14px 24px' : '14px 28px',
                color: '#fff',
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                width: isMobile ? '100%' : 'auto',
              }}
            >
              Get a Free Audit <ArrowRight style={{ width: 15, height: 15 }} />
            </Link>
            <Link
              href="/sample-report.html"
              target="_blank"
              style={{
                fontFamily: dmSans,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                borderRadius: 100,
                padding: isMobile ? '14px 24px' : '14px 28px',
                color: '#1e1e2e',
                fontSize: 15,
                fontWeight: 500,
                border: '1px solid #c5c5d0',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                width: isMobile ? '100%' : 'auto',
              }}
            >
              See a Sample Report
            </Link>
          </motion.div>

          {/* Subtext below CTA */}
          <motion.p
            style={{
              fontFamily: dmSans,
              fontSize: isMobile ? 13 : 14,
              fontWeight: 400,
              color: '#999',
              marginTop: 20,
              letterSpacing: '-0.01em',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            Connects to GitHub, Slack, and Linear. First report in 24 hours.
          </motion.p>
        </div>

      </section>

      {/* ── How we work — two-column layout ── */}
      <section id="how-it-works" style={{
        position: 'relative',
        zIndex: 1,
        background: 'transparent',
        padding: isMobile ? '48px 16px' : '64px 24px',
      }}>
        <div style={{
          maxWidth: 1060,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 32 : 48,
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.55)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0 8px 40px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)',
          borderRadius: isMobile ? 20 : 24,
          padding: isMobile ? '28px 20px' : '36px 40px',
        }}>

          {/* Left column — headline + description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              fontFamily: dmSans,
              fontSize: 12,
              fontWeight: 600,
              color: '#1a1a2e',
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(8px)',
              display: 'inline-block',
              padding: '5px 14px',
              borderRadius: 100,
              marginBottom: 20,
            }}>
              How we work
            </div>

            <h2 style={{
              fontFamily: playfair,
              fontSize: isMobile ? 'clamp(26px, 7vw, 34px)' : 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#2a1f14',
              marginBottom: 16,
            }}>
              AI speed, engineering-grade <span style={{ fontStyle: 'italic' }}>accuracy.</span>
            </h2>

            <p style={{
              fontFamily: dmSans,
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 1.65,
              color: '#666',
              marginBottom: 24,
              maxWidth: 400,
            }}>
              Built on the same ML infrastructure that powers recommendations at scale, applied to engineering health.
            </p>

            <Link
              href="https://cal.com/arjun-dixit-0nwkzi/30min"
              target="_blank"
              style={{
                fontFamily: dmSans,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#1a1a2e',
                borderRadius: 100,
                padding: '12px 24px',
                color: '#fff',
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '-0.02em',
              }}
            >
              Schedule Demo
            </Link>
          </motion.div>

          {/* Right column — numbered steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              {
                step: '01',
                title: 'Surface risks in real time',
                tag: '24 hours',
                desc: 'AI agents scan repos, sprints, and comms. First report the same day.',
              },
              {
                step: '02',
                title: 'Predict delays 4x earlier',
                tag: 'Weeks 2-4',
                desc: 'Catch delivery risks weeks before they surface. 2x more accurate than manual checks.',
              },
              {
                step: '03',
                title: 'Continuous intelligence',
                tag: 'Ongoing',
                desc: 'Builds memory over time. Recommendations get sharper every sprint.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                style={{
                  display: 'flex',
                  gap: 16,
                  background: 'rgba(255, 255, 255, 0.45)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: 14,
                  padding: '16px 18px',
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div style={{
                  fontFamily: dmSans,
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#bbb',
                  minWidth: 24,
                  paddingTop: 1,
                }}>
                  {item.step}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                    <h3 style={{
                      fontFamily: dmSans,
                      fontSize: 15,
                      fontWeight: 700,
                      color: '#1a1a2e',
                    }}>
                      {item.title}
                    </h3>
                    <span style={{
                      fontFamily: dmSans,
                      fontSize: 11,
                      fontWeight: 500,
                      color: '#888',
                      background: 'rgba(255,255,255,0.6)',
                      padding: '2px 8px',
                      borderRadius: 100,
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}>
                      {item.tag}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: dmSans,
                    fontSize: 13,
                    fontWeight: 400,
                    color: '#999',
                    lineHeight: 1.5,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Fade out the extended background */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        height: 120,
        background: 'linear-gradient(to bottom, transparent, #f9f8f6)',
      }} />

      </div>{/* End extended background wrapper */}

      {/* ── Our Results section ── */}
      <section id="why-nexflow" style={{
        background: '#f9f8f6',
        padding: isMobile ? '48px 16px' : '64px 24px',
        position: 'relative',
        overflow: 'visible',
      }}>
        <FloatingIntegrationLogos hidden={isMobile} />
        <div style={{ maxWidth: 1060, margin: '0 auto', position: 'relative' }}>

          {/* Top row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 20 : 64,
            marginBottom: 40,
          }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{
                fontFamily: dmSans,
                fontSize: 13,
                fontWeight: 600,
                color: '#1a1a2e',
                background: 'rgba(0,0,0,0.05)',
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: 100,
                marginBottom: isMobile ? 16 : 28,
              }}>
                Why NexFlow
              </div>
              <h2 style={{
                fontFamily: playfair,
                fontSize: isMobile ? 'clamp(28px, 8vw, 40px)' : 'clamp(32px, 4.5vw, 52px)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: '#2a1f14',
              }}>
                See more, ship <span style={{ fontStyle: 'italic' }}>faster</span>
              </h2>
            </motion.div>

            <motion.p
              style={{
                fontFamily: dmSans,
                fontSize: isMobile ? 15 : 16,
                fontWeight: 400,
                lineHeight: 1.7,
                color: '#888',
                paddingTop: isMobile ? 0 : 48,
                maxWidth: 420,
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our team comes from Stanford and Harvard, where we researched ML systems for engineering productivity. NexFlow is that research, productized.
            </motion.p>
          </div>

          {/* Stats banner */}
          <motion.div
            style={{
              borderRadius: isMobile ? 20 : 24,
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2b5e 40%, #3a5a6e 70%, #2a4a5a 100%)',
              padding: isMobile ? '32px 20px' : '56px 40px',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: 20,
              position: 'relative',
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              position: 'absolute',
              top: '30%',
              left: '35%',
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139,124,247,0.25) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }} />

            {[
              { stat: '4x earlier', desc: 'Risks caught before they hit your roadmap' },
              { stat: '60% fewer', desc: 'Hours wasted in status meetings each week' },
            ].map((item) => (
              <div
                key={item.stat}
                style={{
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 20,
                  padding: isMobile ? '28px 24px' : '36px 32px',
                }}
              >
                <h3 style={{
                  fontFamily: playfair,
                  fontSize: isMobile ? 'clamp(28px, 8vw, 40px)' : 'clamp(32px, 4.5vw, 52px)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: '#fff',
                  marginBottom: 10,
                  letterSpacing: '-0.02em',
                }}>
                  {item.stat}
                </h3>
                <p style={{
                  fontFamily: dmSans,
                  fontSize: isMobile ? 14 : 15,
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.5,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Product Intelligence section ── */}
      <section id="product" style={{
        background: '#f9f8f6',
        padding: isMobile ? '48px 16px' : '64px 24px',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
            gap: isMobile ? 36 : 56,
            alignItems: 'center',
          }}>

            {/* Left: Report card mock */}
            <motion.div
              style={{
                background: 'linear-gradient(145deg, #e4e1ed 0%, #d8d4e8 100%)',
                borderRadius: isMobile ? 20 : 24,
                padding: isMobile ? '28px 16px' : '40px 28px',
                minHeight: isMobile ? 'auto' : 520,
                position: 'relative',
                overflow: 'visible',
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* White report card */}
              <div style={{
                background: '#fff',
                borderRadius: 16,
                padding: isMobile ? '20px 16px' : '28px 24px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                position: 'relative',
                zIndex: 2,
              }}>
                {/* Report header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4, flexWrap: 'wrap', gap: 4 }}>
                  <span style={{ fontFamily: dmSans, fontSize: 12, color: '#999', fontWeight: 500 }}>Monday, Jan 13</span>
                  <span style={{ fontFamily: dmSans, fontSize: 12, color: '#999', fontWeight: 500 }}>Engineering · 24 members</span>
                </div>
                <h3 style={{ fontFamily: dmSans, fontSize: isMobile ? 16 : 18, fontWeight: 700, color: '#1a1a2e', marginBottom: 16 }}>
                  Weekly Engineering Health Report
                </h3>

                {/* Tab bar */}
                <div style={{ display: 'flex', gap: 0, marginBottom: 20, borderBottom: '1px solid #eee', paddingBottom: 0 }}>
                  {['Overview', 'Risks', 'Actions'].map((tab) => (
                    <div key={tab} style={{
                      fontFamily: dmSans,
                      fontSize: 13,
                      fontWeight: tab === 'Risks' ? 600 : 400,
                      color: tab === 'Risks' ? '#1a1a2e' : '#999',
                      padding: '8px 16px',
                      borderBottom: tab === 'Risks' ? '2px solid #1a1a2e' : '2px solid transparent',
                      marginBottom: -1,
                      cursor: 'pointer',
                    }}>
                      {tab}
                    </div>
                  ))}
                </div>

                {/* Risk items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { color: '#ef4444', label: 'Auth service PR blocked 4 days', severity: 'Critical' },
                    { color: '#f59e0b', label: 'Sprint velocity down 23% week-over-week', severity: 'Warning' },
                    { color: '#ef4444', label: '2 engineers at burnout risk threshold', severity: 'Critical' },
                  ].map((risk) => (
                    <div key={risk.label} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      padding: isMobile ? '10px 12px' : '12px 14px',
                      background: '#fafafa',
                      borderRadius: 10,
                      borderLeft: `3px solid ${risk.color}`,
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: dmSans, fontSize: 13, fontWeight: 500, color: '#1a1a2e', marginBottom: 2 }}>
                          {risk.label}
                        </div>
                        <span style={{
                          fontFamily: dmSans,
                          fontSize: 11,
                          fontWeight: 600,
                          color: risk.color,
                          textTransform: 'uppercase' as const,
                          letterSpacing: '0.04em',
                        }}>
                          {risk.severity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: headline + stat rows */}
            <div>
              <motion.h2
                style={{
                  fontFamily: dmSans,
                  fontSize: isMobile ? 'clamp(24px, 7vw, 32px)' : 'clamp(28px, 3.5vw, 40px)',
                  fontWeight: 700,
                  color: '#1a1a2e',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  marginBottom: isMobile ? 32 : 44,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Real-time engineering intelligence
              </motion.h2>

              {[
                { stat: '12+', title: 'Integrations', desc: 'GitHub, Slack, Linear, Jira, Calendar, and more. Connect your full stack in minutes.' },
                { stat: '<24hr', title: 'Time to first insight', desc: 'Get your first engineering health report within 24 hours of connecting your tools.' },
                { stat: '95%', title: 'Signal accuracy', desc: 'Built on ML models trained across thousands of engineering teams. Trusted by leaders at top companies.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '80px 1fr' : '120px 1fr',
                    gap: isMobile ? 12 : 20,
                    paddingTop: i > 0 ? (isMobile ? 20 : 28) : 0,
                    paddingBottom: isMobile ? 20 : 28,
                    borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                >
                  <span style={{
                    fontFamily: dmSans,
                    fontSize: isMobile ? 36 : 48,
                    fontWeight: 700,
                    color: '#1a1a2e',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    alignSelf: 'start',
                    paddingTop: 4,
                  }}>
                    {item.stat}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: dmSans, fontSize: isMobile ? 18 : 22, fontWeight: 700, color: '#1a1a2e', marginBottom: 6, lineHeight: 1.2 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: dmSans, fontSize: isMobile ? 14 : 15, fontWeight: 400, color: '#999', lineHeight: 1.55 }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Section: Product screenshot / demo */}
      <section id="reports" style={{
        background: '#f9f8f6',
        padding: isMobile ? '48px 16px' : '64px 24px',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
          <motion.h2
            style={{ fontFamily: dmSans, fontSize: 'clamp(24px, 4vw, 44px)', fontWeight: 500, color: '#1a1a2e', letterSpacing: '-0.03em', marginBottom: 16 }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            Your weekly <span style={{ fontFamily: playfair, fontStyle: 'italic' }}>signal</span>
          </motion.h2>
          <motion.p
            style={{ fontFamily: dmSans, fontSize: isMobile ? 15 : 16, fontWeight: 400, color: '#666', marginBottom: 48, maxWidth: 480, margin: '0 auto 48px', padding: isMobile ? '0 8px' : 0 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            A single report that replaces hours of status meetings and dashboard checks.
          </motion.p>
          {/* Report mock */}
          <motion.div
            style={{
              background: '#fff',
              borderRadius: isMobile ? 16 : 20,
              border: '1px solid #e8e8ee',
              boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
              padding: isMobile ? '24px 16px' : '40px 44px',
              textAlign: 'left',
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Report header */}
            <div style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-start', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 4 : 0 }}>
                <div>
                  <h3 style={{ fontFamily: dmSans, fontSize: isMobile ? 20 : 24, fontWeight: 700, color: '#1a1a2e', marginBottom: 4 }}>Team Flow & Capacity</h3>
                  <p style={{ fontFamily: dmSans, fontSize: 13, color: '#999' }}>Feb 10 - 16, 2026</p>
                </div>
                <span style={{ fontFamily: dmSans, fontSize: isMobile ? 13 : 15, fontWeight: 600, color: '#1a1a2e' }}>Acme Engineering</span>
              </div>
              <div style={{ height: 3, background: '#1a1a2e', borderRadius: 2, marginTop: 16 }} />
            </div>

            {/* Two stat cards */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 32, marginTop: 24 }}>
              {/* Meeting Load */}
              <div style={{ border: '1px solid #e8e8ee', borderRadius: 12, padding: isMobile ? '16px' : '20px 20px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                  <span style={{ fontFamily: dmSans, fontSize: 14, fontWeight: 500, color: '#555' }}>Avg Meeting Load</span>
                  <span style={{ fontFamily: dmSans, fontSize: isMobile ? 28 : 32, fontWeight: 700, color: '#dc2626', lineHeight: 1 }}>15.8h</span>
                </div>
                <p style={{ fontFamily: dmSans, fontSize: 12, color: '#999', marginBottom: 14 }}>39.5% of workweek · Threshold: 30%</p>
                <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
                  {[
                    { h: 28, color: '#34d399' },
                    { h: 24, color: '#34d399' },
                    { h: 30, color: '#34d399' },
                    { h: 26, color: '#f59e0b' },
                    { h: 28, color: '#f59e0b' },
                    { h: 34, color: '#ef4444' },
                  ].map((bar, i) => (
                    <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ height: bar.h, background: bar.color, borderRadius: 4, marginBottom: 4 }} />
                      <span style={{ fontFamily: dmSans, fontSize: 10, color: '#bbb' }}>W{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus Blocks */}
              <div style={{ border: '1px solid #e8e8ee', borderRadius: 12, padding: isMobile ? '16px' : '20px 20px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                  <span style={{ fontFamily: dmSans, fontSize: 14, fontWeight: 500, color: '#555' }}>Avg Focus Blocks/Day</span>
                  <span style={{ fontFamily: dmSans, fontSize: isMobile ? 28 : 32, fontWeight: 700, color: '#dc2626', lineHeight: 1 }}>2.1</span>
                </div>
                <p style={{ fontFamily: dmSans, fontSize: 12, color: '#999', marginBottom: 14 }}>2hr+ uninterrupted · Benchmark: 3.0</p>
                <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
                  {[
                    { h: 26, color: '#34d399' },
                    { h: 32, color: '#34d399' },
                    { h: 28, color: '#34d399' },
                    { h: 24, color: '#34d399' },
                    { h: 22, color: '#f59e0b' },
                    { h: 18, color: '#ef4444' },
                  ].map((bar, i) => (
                    <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ height: bar.h, background: bar.color, borderRadius: 4, marginBottom: 4 }} />
                      <span style={{ fontFamily: dmSans, fontSize: 10, color: '#bbb' }}>W{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Heatmap section */}
            <div>
              <h4 style={{ fontFamily: dmSans, fontSize: 14, fontWeight: 700, color: '#1a1a2e', letterSpacing: '0.04em', textTransform: 'uppercase' as const, marginBottom: 4 }}>
                Coding Activity Heatmap (Team Aggregate)
              </h4>
              <div style={{ height: 2, background: '#f59e0b', borderRadius: 1, marginBottom: 12 }} />
              <p style={{ fontFamily: dmSans, fontSize: 12, color: '#888', marginBottom: 16 }}>
                Darker = more commits. Shows when the team does deep work vs. gets interrupted.
              </p>

              {/* Heatmap grid — horizontally scrollable on mobile */}
              <div style={{ overflowX: isMobile ? 'auto' : 'visible', WebkitOverflowScrolling: 'touch' as const }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: isMobile ? 480 : 'auto' }}>
                  {/* Time labels */}
                  <div style={{ display: 'flex', paddingLeft: 36, gap: 4, marginBottom: 2 }}>
                    {['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'].map((t) => (
                      <span key={t} style={{ flex: 1, fontFamily: dmSans, fontSize: 10, color: '#bbb', textAlign: 'center' }}>{t}</span>
                    ))}
                  </div>

                  {[
                    { day: 'Mon', cells: ['#d1fae5','#34d399','#059669','#34d399','#059669','#f59e0b','#d1fae5','#059669','#34d399','#d1fae5'] },
                    { day: 'Tue', cells: ['#d1fae5','#34d399','#059669','#059669','#34d399','#ef4444','#34d399','#059669','#34d399','#d1fae5'] },
                    { day: 'Wed', cells: ['#d1fae5','#34d399','#059669','#34d399','#f59e0b','#f59e0b','#d1fae5','#d1fae5','#34d399','#34d399'] },
                    { day: 'Thu', cells: ['#d1fae5','#059669','#059669','#34d399','#059669','#fde68a','#34d399','#065f46','#34d399','#059669'] },
                    { day: 'Fri', cells: ['#d1fae5','#34d399','#059669','#34d399','#34d399','#d1fae5','#d1fae5','#34d399','#059669','#34d399'] },
                  ].map((row) => (
                    <div key={row.day} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span style={{ fontFamily: dmSans, fontSize: 11, color: '#999', width: 32, textAlign: 'right', paddingRight: 4 }}>{row.day}</span>
                      {row.cells.map((color, j) => (
                        <div key={j} style={{ flex: 1, height: 24, background: color, borderRadius: 4 }} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <p style={{ fontFamily: dmSans, fontSize: 11, color: '#999', marginTop: 12, lineHeight: 1.5 }}>
                Green = coding activity. Amber = meetings. Wednesday afternoon was nearly all meetings (incident retro + cross-team sync).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: CTA */}
      <section style={{
        background: '#1a1a2e',
        padding: isMobile ? '56px 20px' : '64px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <motion.h2
            style={{ fontFamily: dmSans, fontSize: 'clamp(24px, 4vw, 44px)', fontWeight: 500, color: '#fff', letterSpacing: '-0.03em', marginBottom: 16 }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            Stop flying <span style={{ fontFamily: playfair, fontStyle: 'italic' }}>blind.</span>
          </motion.h2>
          <motion.p
            style={{ fontFamily: dmSans, fontSize: isMobile ? 15 : 16, fontWeight: 400, color: 'rgba(255,255,255,0.6)', marginBottom: 40, maxWidth: 440, margin: '0 auto 40px', padding: isMobile ? '0 8px' : 0 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Get a free engineering health audit and see what your team data is telling you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            <Link
              href="https://cal.com/arjun-dixit-0nwkzi/30min"
              target="_blank"
              style={{
                fontFamily: dmSans,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#fff',
                borderRadius: 100,
                padding: '16px 32px',
                color: '#1a1a2e',
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '-0.02em',
              }}
            >
              Get Free Audit <ArrowRight style={{ width: 15, height: 15 }} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#f9f8f6',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        padding: isMobile ? '24px 16px' : '24px',
      }}>
        <div style={{
          maxWidth: 960,
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'space-between',
          gap: isMobile ? 16 : 0,
          textAlign: isMobile ? 'center' : undefined,
        }}>
          <Image src="/logo.png" alt="NexFlow" width={437} height={387} style={{ height: 20, width: 'auto', objectFit: 'contain' }} />
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/blog" style={{ fontFamily: dmSans, fontSize: 13, color: '#999', textDecoration: 'none' }}>Blog</Link>
            <Link href="/privacy" style={{ fontFamily: dmSans, fontSize: 13, color: '#999', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/terms" style={{ fontFamily: dmSans, fontSize: 13, color: '#999', textDecoration: 'none' }}>Terms</Link>
            <Link href="mailto:arjundixit@nexflowinc.com" style={{ fontFamily: dmSans, fontSize: 13, color: '#999', textDecoration: 'none' }}>Contact</Link>
          </div>
          <span style={{ fontFamily: dmSans, fontSize: 13, color: '#999' }}>&copy; 2026 NexFlow Inc.</span>
        </div>
      </footer>
    </main>
  )
}
