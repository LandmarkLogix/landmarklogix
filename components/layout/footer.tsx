import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#00205B] text-white py-8 sm:py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/images/landmark-logix-logo.png"
                alt="Landmark Logix"
                width={200}
                height={60}
                className="h-10 sm:h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 mb-4 text-sm sm:text-base">
              Expert Construction Owner's Representative Services
            </p>

            <div className="space-y-2 mb-4 text-sm sm:text-base">
              <p className="text-slate-300">
                <span className="text-slate-400">Phone:</span> (123) 456-7890
              </p>
              <p className="text-slate-300">
                <span className="text-slate-400">Email:</span> info@landmarklogix.com
              </p>
            </div>

            <div className="flex space-x-4">
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
                href="https://www.facebook.com/profile.php?id=61558175892797"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-[#C5B783] transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="12" fill="currentColor" />
                  <path
                    d="M15.5 8.5h-2v-1.5c0-.5.5-1 1-1h1V4h-2c-2 0-3.5 1.5-3.5 3.5V8.5H8v2h2V18h3v-7.5h2l.5-2z"
                    fill="#00205B"
                  />
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
                  {/* Rounded square border */}
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="currentColor" stroke="none" />
                  {/* Inner white area */}
                  <rect x="4" y="4" width="16" height="16" rx="3" ry="3" fill="#00205B" />
                  {/* Camera lens circle */}
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  {/* Inner lens circle */}
                  <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
                  {/* Viewfinder dot */}
                  <circle cx="17" cy="7" r="1.2" fill="currentColor" />
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

          {/* Column 2 - Quick Links */}
          <nav aria-labelledby="footer-links">
            <h4 id="footer-links" className="font-semibold mb-3 sm:mb-4 text-[#C5B783] text-sm sm:text-base">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-slate-300 text-sm sm:text-base">
              <li>
                <Link href="/about" className="hover:text-[#C5B783] transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C5B783] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/markets" className="hover:text-[#C5B783] transition-colors duration-200">
                  Markets
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-[#C5B783] transition-colors duration-200">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C5B783] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3 - Markets Served */}
          <nav aria-labelledby="footer-markets">
            <h4 id="footer-markets" className="font-semibold mb-3 sm:mb-4 text-[#C5B783] text-sm sm:text-base">
              Markets Served
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-slate-300 text-sm sm:text-base">
              <li>Sports & Athletics</li>
              <li>Entertainment & Leisure</li>
              <li>Hospitality & Tourism</li>
              <li>Cultural & Arts</li>
              <li>Education & Research</li>
              <li>Corporate & Commercial</li>
            </ul>
          </nav>

          {/* Column 4 - Services */}
          <nav aria-labelledby="footer-services">
            <h4 id="footer-services" className="font-semibold mb-3 sm:mb-4 text-[#C5B783] text-sm sm:text-base">
              Services
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-slate-300 text-sm sm:text-base">
              <li>Pre-Construction Planning</li>
              <li>Construction Management</li>
              <li>Quality Control</li>
              <li>Project Closeout</li>
              <li>Risk Management</li>
              <li>Schedule Monitoring</li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-slate-400 text-xs sm:text-sm">© 2025 Landmark Logix. All rights reserved.</p>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Nationwide construction owner's representative services
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 text-xs sm:text-sm">
              <Link
                href="/privacy-policy"
                className="text-slate-400 hover:text-[#C5B783] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-slate-400 hover:text-[#C5B783] transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link href="/site-map" className="text-slate-400 hover:text-[#C5B783] transition-colors duration-200">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
