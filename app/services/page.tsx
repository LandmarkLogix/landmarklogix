import { Target, DollarSign, Shield, FileText, Hammer, Cpu, ArrowRight, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function ServicesPage() {
  const serviceGroups = [
    {
      id: "strategic-planning",
      title: "Strategic Planning & Advisory Services",
      icon: Target,
      description:
        "Feasibility analysis with ROI considerations, stakeholder alignment, and expectation management for complex commercial projects",
      serviceCount: "10 specialized services",
      image: "/executive-strategic-planning-meeting.png",
    },
    {
      id: "procurement-financial",
      title: "Procurement & Financial Management",
      icon: DollarSign,
      description:
        "Budget development with lifecycle cost analysis, design team selection, and cost management for revenue-critical projects",
      serviceCount: "10 specialized services",
      image: "/modern-financial-analysis-dashboard.png",
    },
    {
      id: "contract-risk",
      title: "Contract Administration & Risk Management",
      icon: Shield,
      description:
        "Advanced project coordination for multi-stakeholder environments and change management with cost-impact analysis",
      serviceCount: "10 specialized services",
      image: "/contract-review-meeting-with-documents.png",
    },
    {
      id: "design-regulatory",
      title: "Design & Regulatory Management",
      icon: FileText,
      description:
        "Design oversight for high-performance facilities, permitting, and compliance management for commercial developments",
      serviceCount: "10 specialized services",
      image: "/architectural-design-review-session.png",
    },
    {
      id: "construction-quality",
      title: "Construction Management & Quality Control",
      icon: Hammer,
      description:
        "Quality control systems for high-performance facilities and schedule optimization for revenue-critical timelines",
      serviceCount: "10 specialized services",
      image: "/construction-site-quality-inspection.png",
    },
    {
      id: "technology-transition",
      title: "Technology Integration & Project Transition",
      icon: Cpu,
      description:
        "Advanced technical systems coordination, operational planning, and performance optimization for commercial facilities",
      serviceCount: "10 specialized services",
      image: "/smart-building-technology-integration.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00205B] via-[#000034] to-[#00205B] text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium mb-6">
              60 Specialized Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Owner's Representative
              <span className="text-[#C5B783]"> Services for Complex Projects</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto">
              60 specialized services across 6 core service groups - ensuring your complex construction project succeeds
              from vision to operational excellence. With 20+ years of experience, we provide complete owner's
              representation for sports, entertainment, hospitality, and commercial developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/markets">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#00205B] bg-transparent font-medium"
                >
                  View Our Markets
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Groups Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Specialized Service Groups</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Six comprehensive service groups covering every aspect of complex commercial construction project
              development and management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceGroups.map((group) => {
              const IconComponent = group.icon
              return (
                <Card
                  key={group.id}
                  className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:border-[#C5B783]/30 group"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={group.image || "/placeholder.svg"}
                      alt={group.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="h-12 w-12 bg-[#C5B783] rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-[#00205B] font-medium">{group.serviceCount}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#00205B] text-xl">{group.title}</CardTitle>
                    <CardDescription className="text-slate-600">{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/services/${group.id}`}>
                      <Button className="w-full bg-[#00205B] hover:bg-[#000034] text-white font-medium">
                        Explore Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Complete Owner's Representation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">
                Complete Owner's Representation for Complex Projects
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Landmark Logix offers the most comprehensive suite of owner's representative services for complex
                commercial construction. Our 60 specialized services are organized into 6 core groups that cover every
                aspect of your high-stakes project - from initial feasibility and ROI analysis through operational
                optimization and performance management.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With 20+ years of experience in sports facilities, entertainment venues, and hospitality developments,
                we ensure your project achieves operational excellence and delivers exceptional results. Our integrated
                approach means all services work together seamlessly across project phases, providing you with a single
                point of accountability and comprehensive risk protection.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  Discuss Your Project Needs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/used%20-%20AdobeStock_614201080-Rz5MPe2twjazxuw2E9Hk8cz1Zn1Mbr.jpeg"
                alt="Child discovering dinosaur exhibit in modern museum showcasing complex commercial construction and visitor engagement"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Comprehensive Services Matter */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">
              Why Comprehensive Services Matter for Complex Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our integrated approach provides advantages that single-service providers simply cannot match for
              high-stakes commercial construction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Single Point of Accountability</h3>
              <p className="text-slate-600">
                One trusted partner managing all aspects of your complex project, eliminating coordination issues and
                ensuring seamless execution across all stakeholders.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Operational Excellence Focus</h3>
              <p className="text-slate-600">
                Services work together to optimize operational performance, revenue potential, and long-term success
                from day one of operations.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Commercial Expertise</h3>
              <p className="text-slate-600">
                Specialized knowledge in sports facilities, entertainment venues, and hospitality projects, backed by
                20+ years of complex commercial construction experience.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Risk Mitigation</h3>
              <p className="text-slate-600">
                Comprehensive coverage protects against all potential issues, with proactive risk identification and
                mitigation strategies for high-stakes projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Integration Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Services Across Project Lifecycle</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our service groups integrate seamlessly across every phase of your complex commercial construction project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#C5B783]">1</span>
                </div>
                <CardTitle className="text-[#00205B]">Planning Phase</CardTitle>
                <CardDescription>
                  Strategic Planning & Advisory Services lead with feasibility analysis and ROI considerations, while
                  Procurement & Financial Management establishes budgets and funding strategies for complex commercial
                  projects.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#C5B783]">2</span>
                </div>
                <CardTitle className="text-[#00205B]">Design Phase</CardTitle>
                <CardDescription>
                  Design & Regulatory Management focuses on high-performance facility design, while Contract
                  Administration & Risk Management handles expert team selection and multi-stakeholder coordination.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#C5B783]">3</span>
                </div>
                <CardTitle className="text-[#00205B]">Construction Phase</CardTitle>
                <CardDescription>
                  Construction Management & Quality Control leads execution with schedule optimization for
                  revenue-critical timelines, supported by all service groups for comprehensive oversight.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#C5B783]">4</span>
                </div>
                <CardTitle className="text-[#00205B]">Commissioning Phase</CardTitle>
                <CardDescription>
                  Technology Integration & Project Transition ensures all advanced systems work perfectly and the
                  facility is optimized for operational excellence and revenue generation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#C5B783]">5</span>
                </div>
                <CardTitle className="text-[#00205B]">Occupancy Phase</CardTitle>
                <CardDescription>
                  Final inspections, operational planning, and transition to full operations ensure your facility is
                  ready to deliver exceptional performance and user experience from day one.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#C5B783]">6</span>
                </div>
                <CardTitle className="text-[#00205B]">Post-Occupancy</CardTitle>
                <CardDescription>
                  Ongoing performance monitoring, operational optimization, and asset management ensure your facility
                  continues to deliver exceptional results and maximize long-term value.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-[#00205B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Experience Expert Owner's Representation?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Don't settle for fragmented services when your complex construction project deserves comprehensive
              protection and operational excellence. Let's discuss how our 60 specialized services can ensure your
              project's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  Schedule Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#00205B] bg-transparent font-medium"
                >
                  Learn About Our Approach
                </Button>
              </Link>
            </div>
            <p className="text-[#C5B783] font-medium mt-6">
              "60 services, 6 groups, 1 trusted partner for complex projects"
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
