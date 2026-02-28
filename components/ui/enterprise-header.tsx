"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "https://calendly.com/arjundixit3508/30min", external: true },
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
            <header className="w-full z-40 relative bg-white border-b border-slate-200">
                <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="flex items-center justify-between h-[56px]">
                        <Link href="/" className="flex items-center shrink-0">
                            <span className="text-slate-900 text-[17px] font-semibold tracking-tight">
                                NexFlow
                            </span>
                        </Link>

                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    {...(link.external ? { target: "_blank" } : {})}
                                    className="px-3 py-1.5 text-[14px] font-normal text-slate-500 hover:text-slate-900 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="hidden md:flex items-center shrink-0">
                            <Link
                                href="https://calendly.com/arjundixit3508/30min"
                                target="_blank"
                                className="px-4 py-1.5 text-[14px] font-medium text-white bg-emerald-500 hover:bg-emerald-600 transition-colors rounded-lg"
                            >
                                Get Free Audit
                            </Link>
                        </div>

                        <button
                            className="md:hidden w-9 h-9 flex items-center justify-center text-slate-900"
                            onClick={() => setOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </button>
                    </div>

                    {isOpen && (
                        <div className="md:hidden absolute top-[56px] left-0 w-full py-4 px-5 sm:px-8 flex flex-col gap-0.5 z-50 bg-white border-t border-slate-200">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    {...(link.external ? { target: "_blank" } : {})}
                                    onClick={() => setOpen(false)}
                                    className="px-3 py-2.5 text-[14px] text-slate-500 hover:text-slate-900 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-3 pt-3 border-t border-slate-200">
                                <Link
                                    href="https://calendly.com/arjundixit3508/30min"
                                    target="_blank"
                                    onClick={() => setOpen(false)}
                                    className="block px-3 py-2.5 text-[14px] text-center font-medium text-white bg-emerald-500 hover:bg-emerald-600 transition-colors rounded-lg"
                                >
                                    Get Free Audit
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
                        className="max-w-[720px] mx-auto bg-white/90 backdrop-blur-xl border border-slate-200 rounded-[14px]"
                        style={{
                            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                        }}
                    >
                        <div className="flex items-center justify-between h-[44px] px-4">
                            <Link href="/" className="flex items-center shrink-0">
                                <span className="text-slate-900 text-[15px] font-semibold tracking-tight">
                                    NexFlow
                                </span>
                            </Link>

                            <nav className="hidden md:flex items-center gap-0.5">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        {...(link.external ? { target: "_blank" } : {})}
                                        className="px-2.5 py-1 text-[13px] font-normal text-slate-500 hover:text-slate-900 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="hidden md:flex items-center shrink-0">
                                <Link
                                    href="https://calendly.com/arjundixit3508/30min"
                                    target="_blank"
                                    className="px-3.5 py-1 text-[13px] font-medium text-white bg-emerald-500 hover:bg-emerald-600 transition-colors rounded-lg"
                                >
                                    Get Free Audit
                                </Link>
                            </div>

                            <button
                                className="md:hidden w-8 h-8 flex items-center justify-center text-slate-900"
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
