"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Platform", href: "#platform" },
    { label: "Why NexFlow", href: "#why-nexflow" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "https://cal.com/arjun-dixit-0nwkzi/30min", external: true },
];

function EnterpriseHeader() {
    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Static header — visible at top */}
            <header className="w-full z-40 relative" style={{ background: '#111111' }}>
                <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="flex items-center justify-between h-[56px]">
                        <Link href="/" className="flex items-center shrink-0">
                            <span
                                className="text-white text-[17px] font-semibold"
                                style={{ letterSpacing: '-0.01em' }}
                            >
                                NexFlow
                            </span>
                        </Link>

                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    {...(link.external ? { target: "_blank" } : {})}
                                    className="px-3 py-1.5 text-[14px] font-normal transition-colors"
                                    style={{ color: 'rgba(255,255,255,0.6)' }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="hidden md:flex items-center shrink-0">
                            <Link
                                href="https://cal.com/arjun-dixit-0nwkzi/30min"
                                target="_blank"
                                className="px-4 py-1.5 text-[14px] font-normal transition-colors"
                                style={{
                                    color: 'rgba(255,255,255,0.6)',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    borderRadius: '8px',
                                }}
                            >
                                Log In
                            </Link>
                        </div>

                        <button
                            className="md:hidden w-9 h-9 flex items-center justify-center text-white"
                            onClick={() => setOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </button>
                    </div>

                    {isOpen && (
                        <div
                            className="md:hidden absolute top-[56px] left-0 w-full py-4 px-5 sm:px-8 flex flex-col gap-0.5 z-50"
                            style={{
                                backgroundColor: '#111111',
                                borderTop: '1px solid rgba(255,255,255,0.06)',
                            }}
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    {...(link.external ? { target: "_blank" } : {})}
                                    onClick={() => setOpen(false)}
                                    className="px-3 py-2.5 text-[14px]"
                                    style={{ color: 'rgba(255,255,255,0.6)' }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                <Link
                                    href="https://cal.com/arjun-dixit-0nwkzi/30min"
                                    target="_blank"
                                    onClick={() => setOpen(false)}
                                    className="block px-3 py-2.5 text-[14px] text-center"
                                    style={{
                                        color: 'rgba(255,255,255,0.6)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        borderRadius: '8px',
                                    }}
                                >
                                    Log In
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Sticky compressed header — drops down on scroll */}
            <div
                className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                    transform: scrolled ? 'translateY(0)' : 'translateY(-100%)',
                    opacity: scrolled ? 1 : 0,
                    pointerEvents: scrolled ? 'auto' : 'none',
                }}
            >
                <div className="px-4 pt-3">
                    <div
                        className="max-w-[720px] mx-auto"
                        style={{
                            background: 'rgba(10, 10, 10, 0.85)',
                            backdropFilter: 'blur(20px) saturate(1.2)',
                            WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '14px',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                        }}
                    >
                        <div className="flex items-center justify-between h-[44px] px-4">
                            <Link href="/" className="flex items-center shrink-0">
                                <span
                                    className="text-white text-[15px] font-semibold"
                                    style={{ letterSpacing: '-0.01em' }}
                                >
                                    NexFlow
                                </span>
                            </Link>

                            <nav className="hidden md:flex items-center gap-0.5">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        {...(link.external ? { target: "_blank" } : {})}
                                        className="px-2.5 py-1 text-[13px] font-normal transition-colors"
                                        style={{ color: 'rgba(255,255,255,0.5)' }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="hidden md:flex items-center shrink-0">
                                <Link
                                    href="https://cal.com/arjun-dixit-0nwkzi/30min"
                                    target="_blank"
                                    className="px-3.5 py-1 text-[13px] font-normal transition-colors"
                                    style={{
                                        color: 'rgba(255,255,255,0.5)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        borderRadius: '7px',
                                    }}
                                >
                                    Log In
                                </Link>
                            </div>

                            <button
                                className="md:hidden w-8 h-8 flex items-center justify-center text-white"
                                onClick={() => setOpen(!isOpen)}
                            >
                                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { EnterpriseHeader };
