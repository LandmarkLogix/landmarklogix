import { Target, DollarSign, Shield, FileText, Hammer, Cpu, ArrowRight, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const serviceGroups = [
    {
      id: "strategic-planning",
      title: "Strategic Planning & Advisory Services",
      icon: Target,
      description: "From feasibility studies to master planning - we guide your project from concept to strategy",
      serviceCount: "10 specialized services",
      image: "/placeholder.svg?height=300&width=400&text=Strategic+planning+consultation+meeting",
    },
    {
      id: "procurement-financial",
      title: "Procurement & Financial Management",
      icon: DollarSign,
      description: "Cost management, contractor selection, and financial planning to protect your investment",
      serviceCount: "10 specialized services",
      image: "/placeholder.svg?height=300&width=400&text=Financial+planning+and+budget+management",
    },
    {
      id: "contract-risk",
      title: "Contract Administration & Risk Management",
      icon: Shield,
      description: "Comprehensive risk mitigation, contract negotiation, and stakeholder communication",
      serviceCount: "10 specialized services",
      image: "/placeholder.svg?height=300&width=400&text=Contract+negotiation+and+risk+assessment",
    },
    {
      id: "design-regulatory",
      title: "Design & Regulatory Management",
      icon: FileText,
      description: "Design oversight, permitting, compliance, and specialized consulting services",
      serviceCount: "10 specialized services",
      image: "/placeholder.svg?height=300&width=400&text=Architectural+plans+and+regulatory+documents",
    },
    {
      id: "construction-quality",
      title: "Construction Management & Quality Control",
      icon: Hammer,
      description: "On-site management, quality assurance, and specialized construction expertise",
      serviceCount: "10 specialized services",
      image: "/placeholder.svg?height=300&width=400&text=Construction+site+management+and+quality+control",
    },
    {
      id: "technology-transition",
      title: "Technology Integration & Project Transition",
      icon: Cpu,
      description: "Smart building systems, commissioning, and seamless project handover",
      serviceCount: "10 specialized services",
      image: "/placeholder.svg?height=300&width=400&text=Smart+building+technology+and+systems+integration",
    },
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
              <Link href="/services" className="text-[#00205B] font-semibold">
                Services
              </Link>
              <Link href="/markets" className="text-slate-600 hover:text-[#00205B] transition-colors font-medium">
                Markets
              </Link>
              <Link
                href="/#why-choose-us"
                className="text-slate-600 hover:text-[#00205B] transition-colors font-medium"
              >
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00205B] via-[#000034] to-[#00205B] text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium mb-6">
              60 Specialized Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Comprehensive Owner's
              <span className="text-[#C5B783]"> Representative Services</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto">
              60 specialized services across 6 core service groups - ensuring your landmark project succeeds from vision
              to reality. With 20+ years of experience, we provide complete owner's representation for landmark
              buildings.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Service Groups</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Six comprehensive service groups covering every aspect of landmark project development and management
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">Complete Owner's Representation</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Landmark Logix offers the most comprehensive suite of owner's representative services in the industry.
                Our 60 specialized services are organized into 6 core groups that cover every aspect of your landmark
                project - from initial feasibility through long-term asset management.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With 20+ years of experience, we ensure your project achieves landmark status and stands the test of
                time. Our integrated approach means all services work together seamlessly across project phases,
                providing you with a single point of accountability and comprehensive protection.
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
                src="/placeholder.svg?height=500&width=600&text=Comprehensive+project+management+overview"
                alt="Comprehensive project management"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Why Comprehensive Services Matter</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our integrated approach provides advantages that single-service providers simply cannot match
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Single Point of Accountability</h3>
              <p className="text-slate-600">
                One trusted partner managing all aspects of your project, eliminating coordination issues and ensuring
                seamless execution.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Integrated Approach</h3>
              <p className="text-slate-600">
                Services work together seamlessly across project phases, with insights from one area informing decisions
                in another.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Deep Expertise</h3>
              <p className="text-slate-600">
                Specialized knowledge in each service area, backed by 20+ years of landmark project experience and
                proven methodologies.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Risk Mitigation</h3>
              <p className="text-slate-600">
                Comprehensive coverage protects against all potential issues, with proactive risk identification and
                mitigation strategies.
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
              Our service groups integrate seamlessly across every phase of your landmark project
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
                  Strategic Planning & Advisory Services lead the way, with Procurement & Financial Management
                  establishing budgets and funding strategies.
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
                  Design & Regulatory Management takes center stage, while Contract Administration & Risk Management
                  handles team selection and agreements.
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
                  Construction Management & Quality Control leads execution, with all service groups providing ongoing
                  support and oversight.
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
                  Technology Integration & Project Transition ensures all systems work perfectly and the building is
                  ready for occupancy.
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
                  Final inspections, warranty management, and transition to operations ensure your landmark is ready to
                  serve the community.
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
                  Ongoing support, performance monitoring, and asset management ensure your landmark continues to
                  perform optimally.
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
              Ready to Experience Comprehensive Owner's Representation?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Don't settle for fragmented services when your landmark project deserves comprehensive protection. Let's
              discuss how our 60 specialized services can ensure your project's success.
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
            <p className="text-[#C5B783] font-medium mt-6">"60 services, 6 groups, 1 trusted partner"</p>
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Service Groups</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  <Link href="/services/strategic-planning" className="hover:text-[#C5B783] transition-colors">
                    Strategic Planning
                  </Link>
                </li>
                <li>
                  <Link href="/services/procurement-financial" className="hover:text-[#C5B783] transition-colors">
                    Procurement & Financial
                  </Link>
                </li>
                <li>
                  <Link href="/services/contract-risk" className="hover:text-[#C5B783] transition-colors">
                    Contract & Risk
                  </Link>
                </li>
                <li>
                  <Link href="/services/design-regulatory" className="hover:text-[#C5B783] transition-colors">
                    Design & Regulatory
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C5B783]">More Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
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
                <li>
                  <Link href="/services" className="hover:text-[#C5B783] transition-colors">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#C5B783] transition-colors">
                    Get Consultation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C5B783]">Quick Links</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  <Link href="/" className="hover:text-[#C5B783] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#C5B783] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/markets" className="hover:text-[#C5B783] transition-colors">
                    Markets
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#C5B783] transition-colors">
                    Contact
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
