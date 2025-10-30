import { Building2, ArrowRight, CheckCircle, Users, Shield, Clock, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function CorporateCommercialPage() {
  const projectTypes = [
    "Corporate Headquarters & Campuses",
    "Office Buildings & Business Centers",
    "Mixed-Use Developments",
    "Retail Centers & Shopping Complexes",
    "Industrial & Manufacturing Facilities",
    "Warehouses & Distribution Centers",
    "Data Centers & Technology Hubs",
    "Financial Institutions & Banks",
    "Healthcare & Medical Facilities",
    "Coworking Spaces & Flexible Offices",
    "Conference Centers & Meeting Facilities",
    "Research & Development Centers",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/images/landmark-logix-logo.png"
                  alt="Landmark Logix"
                  width={200}
                  height={60}
                  className="h-12 w-auto cursor-pointer"
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-slate-600 hover:text-[#00205B] transition-colors font-medium">
                About
              </Link>
              <Link href="/services" className="text-slate-600 hover:text-[#00205B] transition-colors font-medium">
                Services
              </Link>
              <Link href="/markets" className="text-[#00205B] font-semibold">
                Markets
              </Link>
              <Link href="/why-choose-us" className="text-slate-600 hover:text-[#00205B] transition-colors font-medium">
                Why Choose Us
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-[#00205B] transition-colors font-medium">
                Contact
              </Link>
            </div>
            <Link href="/contact">
              <Button className="bg-[#00205B] hover:bg-[#000034] text-white font-medium">Get Consultation</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-slate-500 hover:text-[#00205B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-slate-400">/</span>
              </li>
              <li>
                <Link href="/markets" className="text-slate-500 hover:text-[#00205B] transition-colors">
                  Markets
                </Link>
              </li>
              <li>
                <span className="text-slate-400">/</span>
              </li>
              <li>
                <span className="text-[#00205B] font-medium">Corporate & Commercial</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00205B] via-[#000034] to-[#00205B] text-white py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 bg-[#C5B783] rounded-lg flex items-center justify-center mr-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium">
                  Corporate & Commercial Market
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Corporate & Commercial
                <span className="text-[#C5B783]"> Excellence</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                Building dynamic business environments that drive productivity, foster innovation, and support
                organizational growth through strategic design and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                    Discuss Your Commercial Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/markets">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#00205B] bg-transparent font-medium"
                  >
                    View All Markets
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-corporate-headquarters-with-glass-faca.png"
                alt="Modern corporate headquarters with glass facade and professional business environment"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
                query="modern corporate headquarters with glass facade and professional business environment"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">Where Business Meets Innovation</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Corporate and commercial facilities are the engines of economic growth and innovation. These spaces must
                balance functionality with inspiration, creating environments that attract top talent while optimizing
                operational efficiency and return on investment.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                From corporate headquarters to mixed-use developments, commercial properties require expertise in
                workplace design, technology integration, sustainability, and future adaptability. Every decision must
                support business objectives while creating value for stakeholders.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Landmark Logix understands the evolving needs of modern businesses, from flexible workspaces to smart
                building systems, ensuring your commercial property becomes a strategic asset that drives organizational
                success.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/corporate-workspace-design-with-collaborative.png"
                alt="Corporate workspace design with collaborative areas and modern business amenities"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
                query="corporate workspace design with collaborative areas and modern business amenities"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Corporate & Commercial Project Types</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From corporate campuses to industrial facilities, we bring commercial expertise to every business
              environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((type, index) => (
              <Card
                key={index}
                className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-[#C5B783]/10 rounded-lg flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-[#C5B783]" />
                    </div>
                    <CardTitle className="text-[#00205B] text-lg">{type}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Considerations */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">
              Unique Considerations for Corporate & Commercial Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Commercial properties have specialized requirements that demand strategic thinking and business-focused
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Users className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Workplace Experience</h3>
                  <p className="text-slate-600">
                    Flexible layouts, collaborative spaces, and wellness features that attract and retain top talent
                    while supporting diverse work styles and organizational culture.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Target className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Asset Value Optimization</h3>
                  <p className="text-slate-600">
                    Strategic design decisions that maximize property value, rental income potential, and long-term
                    marketability while minimizing operational costs and maintenance requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Zap className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Technology Infrastructure</h3>
                  <p className="text-slate-600">
                    Advanced IT systems, smart building technologies, and future-ready infrastructure that support
                    digital transformation and operational efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Shield className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Security & Compliance</h3>
                  <p className="text-slate-600">
                    Comprehensive security systems, regulatory compliance, and risk management protocols that protect
                    assets, data, and personnel while maintaining operational continuity.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Clock className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Sustainability & Efficiency</h3>
                  <p className="text-slate-600">
                    Energy-efficient systems, sustainable materials, and green building certifications that reduce
                    operating costs while supporting corporate sustainability goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <CheckCircle className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Future Adaptability</h3>
                  <p className="text-slate-600">
                    Flexible design solutions and modular systems that accommodate changing business needs, growth
                    patterns, and evolving workplace trends without major renovations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Corporate & Commercial Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How Landmark Logix ensures your commercial property becomes a strategic asset that drives business success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Business-Centric Design</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We design from the business strategy perspective, ensuring every space supports organizational goals
                  and operational efficiency. This business-first approach creates properties that drive productivity
                  and growth.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Financial Performance</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team includes commercial real estate experts who understand market dynamics and investment
                  returns. We design properties that maximize value while minimizing total cost of ownership.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Innovation-Ready Infrastructure</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We integrate cutting-edge technologies and flexible systems that support digital transformation while
                  providing scalable solutions for future business evolution and market changes.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/construction-management-professionals-reviewing-.png"
                alt="Construction management professionals reviewing commercial project plans and business requirements"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-14 sm:py-16 bg-[#00205B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Discuss Your Corporate & Commercial Project?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Whether you're planning a corporate headquarters, office building, retail center, or industrial facility,
              Landmark Logix has the expertise to create a commercial property that drives business success and
              maximizes investment returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  Schedule Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/markets">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#00205B] bg-transparent font-medium"
                >
                  Explore Other Markets
                </Button>
              </Link>
            </div>
            <p className="text-[#C5B783] font-medium mt-6">"Where business meets innovation"</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000034] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-6">
                <Image
                  src="/images/landmark-logix-logo.png"
                  alt="Landmark Logix"
                  width={200}
                  height={60}
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-slate-300 mb-4">Building landmarks that stand the test of time</p>
              <p className="text-slate-400 text-sm">© 2024 Landmark Logix. All rights reserved.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C5B783]">Corporate & Commercial</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Corporate Headquarters</li>
                <li>Office Buildings</li>
                <li>Mixed-Use Developments</li>
                <li>Retail Centers</li>
                <li>Industrial Facilities</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C5B783]">Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  <Link href="/services/strategic-planning" className="hover:text-[#C5B783] transition-colors">
                    Strategic Planning
                  </Link>
                </li>
                <li>
                  <Link href="/services/design-regulatory" className="hover:text-[#C5B783] transition-colors">
                    Design & Regulatory
                  </Link>
                </li>
                <li>
                  <Link href="/services/construction-quality" className="hover:text-[#C5B783] transition-colors">
                    Construction & Quality
                  </Link>
                </li>
                <li>
                  <Link href="/services/technology-transition" className="hover:text-[#C5B783] transition-colors">
                    Technology & Transition
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C5B783]">Other Markets</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  <Link href="/markets/sports-athletics" className="hover:text-[#C5B783] transition-colors">
                    Sports & Athletics
                  </Link>
                </li>
                <li>
                  <Link href="/markets/entertainment-leisure" className="hover:text-[#C5B783] transition-colors">
                    Entertainment & Leisure
                  </Link>
                </li>
                <li>
                  <Link href="/markets/hospitality-tourism" className="hover:text-[#C5B783] transition-colors">
                    Hospitality & Tourism
                  </Link>
                </li>
                <li>
                  <Link href="/markets" className="hover:text-[#C5B783] transition-colors">
                    View All Markets
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
