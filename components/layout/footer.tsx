import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#00205B] text-white py-8 sm:py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/images/landmark-logix-logo.png"
                alt="Landmark Logix"
                width={200}
                height={60}
                className="h-10 sm:h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 mb-4 text-sm sm:text-base">Building landmarks that stand the test of time</p>
            <p className="text-slate-400 text-xs sm:text-sm mb-4">© 2024 Landmark Logix. All rights reserved.</p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-[#C5B783] transition-colors duration-200"
                aria-label="Follow us on X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-[#C5B783] transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-[#C5B783] transition-colors duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-[#C5B783] transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.017 0C8.396 0 7.929.01 6.71.058 5.487.107 4.65.278 3.927.598 3.18.928 2.542 1.566 2.213 2.313c-.32.724-.49 1.561-.539 2.784C1.626 6.317 1.617 6.784 1.617 10.405s.009 4.088.057 5.307c.048 1.223.219 2.06.539 2.784.329.747.967 1.385 1.714 1.714.724.32 1.561.49 2.784.539 1.219.048 1.686.057 5.307.057s4.088-.009 5.307-.057c1.223-.049 2.06-.22 2.784-.539.747-.329 1.385-.967 1.714-1.714.32-.724.49-1.561.539-2.784.048-1.219.057-1.686.057-5.307s-.009-4.088-.057-5.307c-.049-1.223-.22-2.06-.539-2.784-.329-.624-.533-1.07-1.002-1.539-.469-.469-.915-.759-1.539-1.002-.47-.182-1.178-.397-2.482-.456-1.408-.047-1.829-.061-5.402-.061s-3.994-.014-5.402-.061c-1.304-.059-2.012-.274-2.482-.456-.624-.243-1.07-.533-1.539-1.002-.469-.469-.915-.759-1.539-1.002-.47-.182-1.178-.397-2.482-.456-1.408-.047-1.829-.061-5.402-.061s-3.994-.014-5.402-.061c-1.304-.059-2.012-.274-2.482-.456-.624-.243-1.07-.533-1.539-1.002-.469-.469-.759-.915-1.002-1.539-.182-.47-.397-1.178-.456-2.482-.047-1.408-.061-1.829-.061-5.402s.014-3.994.061-5.402c.059-1.304.274-2.012.456-2.482.243-.624.533-1.07 1.002-1.539.469-.469.915-.759 1.539-1.002.47-.182 1.178-.397 2.482-.456 1.408-.047 1.829-.061 5.402-.061z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                    clipRule="evenodd"
                  />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-services">
            <h4 id="footer-services" className="font-semibold mb-3 sm:mb-4 text-[#C5B783] text-sm sm:text-base">
              Services
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-slate-300 text-sm sm:text-base">
              <li>Owner's Representative</li>
              <li>Project Management</li>
              <li>Historic Preservation</li>
              <li>Regulatory Navigation</li>
              <li>Quality Assurance</li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-markets">
            <h4 id="footer-markets" className="font-semibold mb-3 sm:mb-4 text-[#C5B783] text-sm sm:text-base">
              Markets
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-slate-300 text-sm sm:text-base">
              <li>Museums & Cultural Centers</li>
              <li>Civic Buildings</li>
              <li>Educational Institutions</li>
              <li>Religious Buildings</li>
              <li>Historic Renovations</li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
