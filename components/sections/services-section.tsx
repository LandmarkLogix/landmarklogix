import { Shield, Users, Award, CheckCircle, Target } from "lucide-react"
import { ServiceCard } from "@/components/cards/service-card"

const services = [
  {
    icon: Target,
    title: "Project Management",
    description: "End-to-end oversight ensuring timelines, budgets, and quality standards are met",
  },
  {
    icon: Shield,
    title: "Regulatory Navigation",
    description: "Expert guidance through complex permitting, zoning, and historic preservation requirements",
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description: "Coordinate between architects, contractors, officials, and community stakeholders",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous inspection and quality control to ensure lasting craftsmanship",
  },
  {
    icon: CheckCircle,
    title: "Risk Management",
    description: "Proactive identification and mitigation of project risks and challenges",
  },
  {
    icon: Target,
    title: "Budget Oversight",
    description: "Careful cost management and value engineering to maximize your investment",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy mb-4 text-balance"
          >
            Comprehensive Owner's Representative Services
          </h2>
          <p className="text-lg sm:text-xl text-brand-navy-deep max-w-3xl mx-auto text-pretty">
            From project inception to completion, we serve as your advocate, ensuring every aspect of your landmark
            building project exceeds expectations.
          </p>
        </div>

        <ul className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {services.map((service, index) => (
            <li key={index}>
              <ServiceCard icon={service.icon} title={service.title} description={service.description} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
