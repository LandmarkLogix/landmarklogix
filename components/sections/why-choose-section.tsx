import { Shield, Target, Users, Award } from "lucide-react"
import { FeatureItem } from "@/components/cards/feature-item"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { ErrorBoundary } from "@/components/error-boundary"

const features = [
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description:
      "We hold every aspect of your project to the highest standards because excellence matters in every detail and delivers long-term value.",
  },
  {
    icon: Users,
    title: "Stakeholder Alignment",
    description:
      "We ensure all parties - owners, architects, contractors, and end users - remain coordinated and informed throughout the construction process.",
  },
  {
    icon: Target,
    title: "Risk Mitigation",
    description:
      "Our experience prevents costly delays, budget overruns, and quality issues by identifying and addressing potential problems before they impact your project.",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description:
      "Two decades of successful complex projects demonstrate our commitment to delivering exceptional results on time and within budget.",
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
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy mb-4 text-balance"
            >
              Why Choose Landmark Logix for Your Complex Construction Project?
            </h2>
            <p className="text-lg sm:text-xl text-brand-navy-deep max-w-3xl mx-auto text-pretty">
              When your project involves significant investment and complexity, you need a partner who understands the
              unique challenges of high-stakes construction management.
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
                src="/placeholder.svg?height=600&width=500&text=Construction+management+professionals+on+complex+project+site"
                alt="Construction management professionals coordinating on a complex project site, demonstrating Landmark Logix expertise in high-stakes construction management"
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
