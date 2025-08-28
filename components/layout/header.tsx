"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
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
                className="text-slate-600 hover:text-[#00205B] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#00205B] focus:ring-offset-2 rounded-sm px-3 py-2"
                role="menuitem"
              >
                About
              </Link>
            </li>
            <li role="none">
              <Link
                href="/services"
                className="text-slate-600 hover:text-[#00205B] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#00205B] focus:ring-offset-2 rounded-sm px-3 py-2"
                role="menuitem"
              >
                Services
              </Link>
            </li>
            <li role="none">
              <Link
                href="/markets"
                className="text-slate-600 hover:text-[#00205B] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#00205B] focus:ring-offset-2 rounded-sm px-3 py-2"
                role="menuitem"
              >
                Markets
              </Link>
            </li>
            <li role="none">
              <Link
                href="/#why-choose-us"
                className="text-slate-600 hover:text-[#00205B] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#00205B] focus:ring-offset-2 rounded-sm px-3 py-2"
                role="menuitem"
              >
                Why Choose Us
              </Link>
            </li>
            <li role="none">
              <Link
                href="/contact"
                className="text-slate-600 hover:text-[#00205B] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#00205B] focus:ring-offset-2 rounded-sm px-3 py-2"
                role="menuitem"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link href="/contact" aria-label="Get consultation - Contact us">
            <Button className="bg-[#00205B] hover:bg-[#000034] text-white font-medium min-h-[44px] min-w-[44px] px-3 sm:px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00205B] focus:ring-offset-2">
              <span className="hidden sm:inline">Get Consultation</span>
              <span className="sm:hidden">Contact</span>
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
