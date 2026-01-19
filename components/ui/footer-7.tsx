export const Footer7 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-32 border-t border-[#E5E2DB] bg-[#F6F4EF]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <span className="font-bold text-2xl tracking-tight text-[#111111]">NexFlow</span>
          <ul className="flex flex-wrap justify-center items-center gap-8 text-sm text-[#6B6B6B]">
            <li className="hover:text-[#111111] transition-colors">
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li className="hover:text-[#111111] transition-colors">
              <a href="/terms">Terms of Service</a>
            </li>
            <li className="hover:text-[#111111] transition-colors">
              <a href="mailto:arjundixit@nexflowinc.com">Contact</a>
            </li>
          </ul>
          <p className="text-sm text-[#999999]">
            © {currentYear} NexFlow Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
