export const Footer7 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-[64px] pb-[120px] border-t border-[#e8d3c0] bg-[#f6f0e9]">
      <div className="mx-auto max-w-[1200px] px-8 md:px-16">
        <div className="flex flex-col items-center gap-[32px]">
          <span
            className="text-[20px] font-medium text-[#2b180a]"
            style={{
              fontFamily: 'var(--font-halant), Halant, serif',
              letterSpacing: '-0.05em'
            }}
          >
            NexFlow
          </span>
          <ul
            className="flex flex-wrap justify-center items-center gap-[32px] text-[14px] text-[#6b5d52]"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            <li className="hover:text-[#2b180a] transition-colors">
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li className="hover:text-[#2b180a] transition-colors">
              <a href="/terms">Terms of Service</a>
            </li>
            <li className="hover:text-[#2b180a] transition-colors">
              <a href="mailto:arjundixit@nexflowinc.com">Contact</a>
            </li>
          </ul>
          <p
            className="text-[14px] text-[#c4b5a5]"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            © {currentYear} NexFlow Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
