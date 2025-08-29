import Image from "next/image"
import Link from "next/link"

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
              <Link
                href="https://www.facebook.com/profile.php?id=61558175892797"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-[#C5B783] transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>

              <Link
                href="https://www.linkedin.com/company/landmarklogix/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-[#C5B783] transition-colors duration-200"
                aria-label="Connect with us on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>

              <Link
                href="https://www.instagram.com/landmarklogix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-[#C5B783] transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644.069-4.849.069-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.663.072-4.947.196-4.354 2.617-6.78 6.979-6.98 1.281-.059 1.689-.073 4.948-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </Link>

              <Link
                href="https://x.com/landmarklogix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-[#C5B783] transition-colors duration-200"
                aria-label="Follow us on X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
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
