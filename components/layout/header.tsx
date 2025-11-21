"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActivePage = (href: string) => {
    return pathname === href
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/" aria-label="Landmark Logix Home">
              <Image
                src="/images/landmark-logix-logo.png"
                alt="Landmark Logix - Expert Owner's Representative Services"
                width={200}
                height={60}
                className="h-10 sm:h-12 w-auto cursor-pointer"
                priority
              />
            </Link>
          </div>

          <ul className="hidden lg:flex space-x-6 xl:space-x-8" role="menubar">
            <li role="none">
              <Link
                href="/about"
                className={`transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 rounded-sm px-3 py-2 border-b-2 ${
                  isActivePage("/about")
                    ? "text-brand-navy border-brand-navy"
                    : "text-brand-navy-deep hover:text-brand-golden border-transparent hover:border-brand-golden"
                }`}
                role="menuitem"
              >
                About
              </Link>
            </li>
              <li role="none">
                <Link
                  href="/projects"
                  className={`transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 rounded-sm px-3 py-2 border-b-2 ${
                    isActivePage("/projects")
                      ? "text-brand-navy border-brand-navy"
                      : "text-brand-navy-deep hover:text-brand-golden border-transparent hover:border-brand-golden"
                  }`}
                  role="menuitem"
                >
                  Projects
                </Link>
              </li>
            <li role="none">
              <Link
                href="/services"
                className={`transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 rounded-sm px-3 py-2 border-b-2 ${
                  isActivePage("/services")
                    ? "text-brand-navy border-brand-navy"
                    : "text-brand-navy-deep hover:text-brand-golden border-transparent hover:border-brand-golden"
                }`}
                role="menuitem"
              >
                Services
              </Link>
            </li>
            <li role="none">
              <Link
                href="/markets"
                className={`transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 rounded-sm px-3 py-2 border-b-2 ${
                  isActivePage("/markets")
                    ? "text-brand-navy border-brand-navy"
                    : "text-brand-navy-deep hover:text-brand-golden border-transparent hover:border-brand-golden"
                }`}
                role="menuitem"
              >
                Markets
              </Link>
            </li>
            <li role="none">
              <Link
                href="/why-choose-us"
                className={`transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 rounded-sm px-3 py-2 border-b-2 ${
                  isActivePage("/why-choose-us")
                    ? "text-brand-navy border-brand-navy"
                    : "text-brand-navy-deep hover:text-brand-golden border-transparent hover:border-brand-golden"
                }`}
                role="menuitem"
              >
                Why Choose Us
              </Link>
            </li>
            <li role="none">
              <Link
                href="/contact"
                className={`transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 rounded-sm px-3 py-2 border-b-2 ${
                  isActivePage("/contact")
                    ? "text-brand-navy border-brand-navy"
                    : "text-brand-navy-deep hover:text-brand-golden border-transparent hover:border-brand-golden"
                }`}
                role="menuitem"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <Link href="/contact" aria-label="Schedule consultation - Contact us" className="hidden sm:block">
              <Button className="bg-brand-navy hover:bg-brand-navy-deep text-white font-medium min-h-[44px] min-w-[44px] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 transition-colors duration-200">
                Schedule Consultation
              </Button>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-brand-navy-deep hover:text-brand-golden hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/about"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActivePage("/about")
                      ? "text-brand-navy bg-slate-50"
                      : "text-brand-navy-deep hover:text-brand-golden hover:bg-slate-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActivePage("/projects")
                      ? "text-brand-navy bg-slate-50"
                      : "text-brand-navy-deep hover:text-brand-golden hover:bg-slate-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              <Link
                href="/services"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActivePage("/services")
                    ? "text-brand-navy bg-slate-50"
                    : "text-brand-navy-deep hover:text-brand-golden hover:bg-slate-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/markets"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActivePage("/markets")
                    ? "text-brand-navy bg-slate-50"
                    : "text-brand-navy-deep hover:text-brand-golden hover:bg-slate-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Markets
              </Link>
              <Link
                href="/why-choose-us"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActivePage("/why-choose-us")
                    ? "text-brand-navy bg-slate-50"
                    : "text-brand-navy-deep hover:text-brand-golden hover:bg-slate-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActivePage("/contact")
                    ? "text-brand-navy bg-slate-50"
                    : "text-brand-navy-deep hover:text-brand-golden hover:bg-slate-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-brand-navy hover:bg-brand-navy-deep text-white font-medium py-2 px-4 text-base focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 transition-colors duration-200">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
