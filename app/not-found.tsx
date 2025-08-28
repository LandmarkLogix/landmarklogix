import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl font-bold text-[#00205B] mb-4">404</div>

        <h1 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h1>

        <p className="text-slate-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
        </p>

        <div className="space-y-4">
          <Link href="/" className="block">
            <Button className="bg-[#00205B] hover:bg-[#000034] text-white w-full" size="lg">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Button>
          </Link>

          <Link href="/services" className="block">
            <Button variant="outline" className="w-full bg-transparent" size="lg">
              <Search className="mr-2 h-5 w-5" />
              Browse Services
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4">Popular Pages</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-slate-600 hover:text-[#00205B] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-600 hover:text-[#00205B] transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-600 hover:text-[#00205B] transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
