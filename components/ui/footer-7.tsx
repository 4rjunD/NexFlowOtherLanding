export const Footer7 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-32 border-t border-[#e5e0d8] bg-[#fcf6ef]">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col items-center gap-8">
          <span
            className="text-2xl text-[#000]"
            style={{
              fontFamily: 'var(--font-halant), Halant, Georgia, serif',
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            NexFlow
          </span>
          <ul
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-[#94877c]"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            <li className="hover:text-[#000] transition-colors">
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li className="hover:text-[#000] transition-colors">
              <a href="/terms">Terms of Service</a>
            </li>
            <li className="hover:text-[#000] transition-colors">
              <a href="mailto:arjundixit@nexflowinc.com">Contact</a>
            </li>
          </ul>
          <p
            className="text-sm text-[#94877c]"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            © {currentYear} NexFlow Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
