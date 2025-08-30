import {
  Shield,
  Clock,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Calendar,
  Target,
  Zap,
  Building,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ErrorBoundary } from "@/components/error-boundary"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Why Choose Landmark Logix - Premier Owner's Representative Services",
  description:
    "20+ years of proven results in sports venues, entertainment destinations, and luxury hospitality projects. See why Landmark Logix is the obvious choice for your landmark project.",
  keywords:
    "owner's representative, sports venues, entertainment facilities, hospitality projects, construction management, project management",
}

const specializations = [
  {
    icon: Target,
    title: "Sports & Athletics",
    description:
      "Stadium complexes, arenas, training facilities - we understand fan experience, revenue optimization, and operational efficiency",
  },
  {
    icon: Star,
    title: "Entertainment & Leisure",
    description:
      "Theaters, concert halls, gaming facilities - we know audience flow, acoustics, and entertainment technology requirements",
  },
  {
    icon: Building,
    title: "Hospitality & Tourism",
    description:
      "Hotels, resorts, conference centers - we deliver guest experience excellence and operational profitability",
  },
]

const processSteps = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "We align your vision with market realities",
  },
  {
    icon: Users,
    title: "Team Assembly",
    description: "We select and manage best-in-class contractors",
  },
  {
    icon: Shield,
    title: "Quality Control",
    description: "We ensure every detail meets landmark standards",
  },
  {
    icon: TrendingUp,
    title: "Budget Protection",
    description: "We prevent costly overruns and changes",
  },
  {
    icon: Clock,
    title: "Timeline Management",
    description: "We deliver on schedule, every time",
  },
]

const advantages = [
  {
    title: "Deep Market Knowledge",
    description: "20+ years exclusively in landmark destination projects",
  },
  {
    title: "Stakeholder Management",
    description: "Expert at managing complex approval processes and community concerns",
  },
  {
    title: "Quality Standards",
    description: "Every project built to last generations, not just pass inspection",
  },
  {
    title: "Regional Network",
    description: "Established relationships with top-tier contractors and suppliers",
  },
  {
    title: "Revenue Focus",
    description: "We understand these aren't just buildings - they're profit centers",
  },
]

export default function WhyChooseUsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ErrorBoundary>
          {/* Hero Section */}
          <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-[#00205B] to-[#003875] text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-balance">
                  Why Landmark Logix Is the <span className="text-[#C5B783]">Obvious Choice</span> for Your Next
                  Landmark Project
                </h1>
                <p className="text-xl sm:text-2xl mb-8 text-slate-200 text-pretty">
                  20+ years of proven results in sports venues, entertainment destinations, and luxury hospitality
                  projects
                </p>
                <Button
                  size="lg"
                  className="bg-[#C5B783] hover:bg-[#B5A673] text-[#00205B] font-semibold px-8 py-4 text-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Project Strategy Call
                </Button>
              </div>
            </div>
          </section>

          {/* The Owner's Rep Difference */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#00205B] mb-6">The Owner's Rep Difference</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                  An owner's representative is your advocate throughout the entire construction process - protecting
                  your interests, managing contractors, and ensuring quality delivery. Without professional
                  representation, projects face significant risks.
                </p>
                <div className="bg-[#C5B783]/10 rounded-lg p-6 max-w-2xl mx-auto">
                  <p className="text-2xl font-bold text-[#00205B] mb-2">Projects with owner's reps deliver</p>
                  <p className="text-4xl font-bold text-[#C5B783]">15-25% better outcomes</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Specialized Expertise */}
          <section className="py-16 sm:py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#00205B] mb-4">Our Specialized Expertise</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  We focus exclusively on landmark destination projects that require specialized knowledge and
                  expertise.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {specializations.map((spec, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8 text-center">
                      <spec.icon className="h-12 w-12 text-[#C5B783] mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-[#00205B] mb-4">{spec.title}</h3>
                      <p className="text-slate-600">{spec.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Proven Track Record */}
          <section className="py-16 sm:py-20 bg-[#00205B] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proven Track Record</h2>
                <p className="text-xl text-slate-200 max-w-2xl mx-auto">
                  Numbers don't lie. Our results speak for themselves.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-[#C5B783] mb-2">150+</div>
                  <div className="text-sm sm:text-base text-slate-200">Landmark Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-[#C5B783] mb-2">$2B+</div>
                  <div className="text-sm sm:text-base text-slate-200">Project Value Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-[#C5B783] mb-2">12%</div>
                  <div className="text-sm sm:text-base text-slate-200">Average Under Budget</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-[#C5B783] mb-2">98%</div>
                  <div className="text-sm sm:text-base text-slate-200">Client Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-[#C5B783] mb-2">Zero</div>
                  <div className="text-sm sm:text-base text-slate-200">Major Disputes in 20+ Years</div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process Advantage */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#00205B] mb-4">Our Process Advantage</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Our proven 5-step process ensures every project is delivered on time, on budget, and to the highest
                  standards.
                </p>
              </div>
              <div className="grid md:grid-cols-5 gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-[#C5B783]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-[#C5B783]" />
                    </div>
                    <h3 className="font-bold text-[#00205B] mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What Sets Us Apart */}
          <section className="py-16 sm:py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#00205B] mb-4">What Sets Us Apart</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  We're not just another construction management firm. We're specialists in landmark destination
                  projects.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-[#C5B783] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-[#00205B] mb-2">{advantage.title}</h3>
                        <p className="text-slate-600 text-sm">{advantage.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Competition Comparison */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#00205B] mb-4">The Competition Can't Match This</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  See how we compare to other options for your landmark project.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-[#00205B] text-white">
                      <th className="p-4 text-left">Category</th>
                      <th className="p-4 text-center bg-[#C5B783] text-[#00205B] font-bold">Landmark Logix</th>
                      <th className="p-4 text-center">General Owner's Reps</th>
                      <th className="p-4 text-center">Construction Managers</th>
                      <th className="p-4 text-center">Going Solo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Landmark Experience</td>
                      <td className="p-4 text-center bg-green-50">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center text-slate-400">Limited</td>
                      <td className="p-4 text-center text-slate-400">Varies</td>
                      <td className="p-4 text-center text-red-500">None</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                      <td className="p-4 font-semibold">Specialization</td>
                      <td className="p-4 text-center bg-green-50">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center text-slate-400">General</td>
                      <td className="p-4 text-center text-slate-400">General</td>
                      <td className="p-4 text-center text-red-500">None</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Network Quality</td>
                      <td className="p-4 text-center bg-green-50">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center text-slate-400">Standard</td>
                      <td className="p-4 text-center text-slate-400">Standard</td>
                      <td className="p-4 text-center text-red-500">Unknown</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                      <td className="p-4 font-semibold">Proven Results</td>
                      <td className="p-4 text-center bg-green-50">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center text-slate-400">Mixed</td>
                      <td className="p-4 text-center text-slate-400">Mixed</td>
                      <td className="p-4 text-center text-red-500">High Risk</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Risk Management</td>
                      <td className="p-4 text-center bg-green-50">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center text-slate-400">Basic</td>
                      <td className="p-4 text-center text-slate-400">Limited</td>
                      <td className="p-4 text-center text-red-500">Maximum Risk</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Risk-Free Consultation */}
          <section className="py-16 sm:py-20 bg-[#C5B783] text-[#00205B]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">See If We're the Right Fit - No Obligation</h2>
              <p className="text-xl mb-8">Most consultations lead to immediate cost-saving opportunities</p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/20 rounded-lg p-4">
                  <Zap className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">Project Assessment</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <Target className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">Risk Analysis</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">Cost Optimization</p>
                </div>
              </div>
              <Button size="lg" className="bg-[#00205B] hover:bg-[#003875] text-white font-semibold px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Your Free Project Assessment
              </Button>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-12 bg-[#00205B] text-white text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-lg mb-4">Ready to make the obvious choice for your landmark project?</p>
              <Link
                href="/contact"
                className="inline-flex items-center text-[#C5B783] hover:text-white transition-colors"
              >
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </section>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  )
}
