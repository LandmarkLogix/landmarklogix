import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { ErrorBoundary } from "@/components/error-boundary"
import Link from "next/link"

export function HeroSection() {
  return (
    <ErrorBoundary>
      <section
        className="relative bg-gradient-to-br from-[#00205B] via-[#000034] to-[#00205B] text-white py-16 sm:py-20 lg:py-32"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium text-sm">
                20+ Years of Excellence
              </Badge>
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance"
              >
                Building Landmarks That
                <span className="text-[#C5B783]"> Stand the Test of Time</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0">
                Expert owner's representative services for public-facing landmark buildings across the East Coast. From
                historic preservation to modern civic architecture, we ensure your project becomes a lasting legacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" aria-label="Start your landmark building project">
                  <Button
                    size="lg"
                    className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold min-h-[44px] w-full sm:w-auto px-6 py-3 focus:outline-none focus:ring-2 focus:ring-[#C5B783] focus:ring-offset-2"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#00205B] bg-transparent font-medium min-h-[44px] w-full sm:w-auto px-6 py-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  aria-label="View our portfolio of landmark projects"
                >
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <ImageWithFallback
                src="/placeholder.svg?height=600&width=800&text=Historic+landmark+building+with+classical+architecture"
                alt="Historic landmark building showcasing classical architecture with detailed stonework and columns, representing the quality of Landmark Logix construction projects"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}
