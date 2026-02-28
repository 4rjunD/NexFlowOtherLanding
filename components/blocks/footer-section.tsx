import Link from 'next/link'

const footerLinks = [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Contact', href: 'https://calendly.com/arjundixit3508/30min', external: true },
]

export function FooterSection() {
    return (
        <footer className="bg-white border-t border-slate-200 py-8">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link href="/" className="text-slate-900 text-[15px] font-semibold tracking-tight">
                        NexFlow
                    </Link>

                    <div className="flex items-center gap-6">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                {...(link.external ? { target: "_blank" } : {})}
                                className="text-slate-400 hover:text-slate-600 text-[13px] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <p className="text-slate-400 text-[13px]">
                        &copy; {new Date().getFullYear()} NexFlow Inc.
                    </p>
                </div>
            </div>
        </footer>
    )
}
