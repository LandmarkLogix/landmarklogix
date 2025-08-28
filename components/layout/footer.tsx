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
            <p className="text-slate-400 text-xs sm:text-sm">© 2024 Landmark Logix. All rights reserved.</p>
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
