import { Shield, Clock, Users, Award } from "lucide-react"
import { FeatureItem } from "@/components/cards/feature-item"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { ErrorBoundary } from "@/components/error-boundary"

const features = [
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description:
      "We hold every aspect of your project to the highest standards because landmarks must endure for generations.",
  },
  {
    icon: Clock,
    title: "Heritage Preservation",
    description:
      "Deep expertise in historic preservation ensures your project honors the past while serving future needs.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description:
      "We understand that landmark buildings serve communities, and we ensure every stakeholder voice is heard and valued.",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description:
      "Two decades of successful landmark projects across the East Coast demonstrate our commitment to excellence.",
  },
]

export function WhyChooseSection() {
  return (
    <ErrorBoundary>
      <section id="why-choose-us" className="py-16 sm:py-20 bg-white" aria-labelledby="why-choose-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              id="why-choose-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B] mb-4 text-balance"
            >
              Why Landmark Logix?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
              When your building will serve the community for generations, you need a partner who understands the weight
              of that responsibility.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <ul className="space-y-6 sm:space-y-8" role="list">
              {features.map((feature, index) => (
                <li key={index}>
                  <FeatureItem icon={feature.icon} title={feature.title} description={feature.description} />
                </li>
              ))}
            </ul>

            <div className="relative order-first lg:order-last">
              <ImageWithFallback
                src="/placeholder.svg?height=600&width=500&text=Architectural+craftsmanship+detail+stonework"
                alt="Detailed architectural craftsmanship showing intricate stonework and masonry, exemplifying the quality standards of Landmark Logix projects"
                width={500}
                height={600}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}
