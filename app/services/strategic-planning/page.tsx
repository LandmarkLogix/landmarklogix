import { Target, ArrowRight, CheckCircle, Users, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"

export default function StrategicPlanningPage() {
  const services = [
    {
      title: "Owner's Representation",
      description:
        "Acting as an extension of your staff, managing day-to-day operations throughout your project lifecycle—from conceptual design through final design, permitting, pre-construction, bidding, construction, commissioning, and occupancy.",
      phase: "All Phases",
      duration: "Full Project",
    },
    {
      title: "Program Management",
      description:
        "Overseeing multiple related projects to ensure strategic alignment, resource optimization, and achievement of overarching organizational goals.",
      phase: "Planning",
      duration: "6-12 months",
    },
    {
      title: "Project Management",
      description:
        "Leading teams, negotiating contracts, overseeing budgets, and proactively protecting our clients' interests with in-depth knowledge of design, construction, and business practices.",
      phase: "All Phases",
      duration: "Full Project",
    },
    {
      title: "Strategic Project Planning",
      description:
        "Developing comprehensive roadmaps for complex projects with multiple phases or stakeholders, ensuring alignment with your long-term vision.",
      phase: "Pre-Design",
      duration: "2-4 months",
    },
    {
      title: "Feasibility Studies",
      description:
        "Conducting comprehensive analyses to determine project viability, including site assessment, regulatory constraints, and financial feasibility.",
      phase: "Pre-Design",
      duration: "1-3 months",
    },
    {
      title: "Market Analysis & Investment Strategy",
      description:
        "Providing detailed market research to determine project viability, potential return on investment, and optimal positioning.",
      phase: "Pre-Design",
      duration: "1-2 months",
    },
    {
      title: "Site Selection & Evaluation",
      description:
        "Analyzing potential locations based on zoning, accessibility, utilities, and other critical factors to identify optimal properties.",
      phase: "Pre-Design",
      duration: "2-6 months",
    },
    {
      title: "Master Planning & Development Strategy",
      description:
        "Creating comprehensive plans for large-scale or phased development projects, ensuring cohesive vision and execution.",
      phase: "Planning",
      duration: "3-6 months",
    },
    {
      title: "Real Estate Development Advisory",
      description: "Providing guidance on investment strategies, market positioning, and development opportunities.",
      phase: "Pre-Design",
      duration: "Ongoing",
    },
    {
      title: "Public-Private Partnership Facilitation",
      description: "Guiding complex projects involving both public and private stakeholders and funding sources.",
      phase: "All Phases",
      duration: "Full Project",
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
                <Link href="/services" className="text-slate-500 hover:text-[#00205B] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <span className="text-slate-400">/</span>
              </li>
              <li>
                <span className="text-[#00205B] font-medium">Strategic Planning & Advisory</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00205B] via-[#000034] to-[#00205B] text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 bg-[#C5B783] rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium">
                  10 Specialized Services
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Strategic Planning &<span className="text-[#C5B783]"> Advisory Services</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                From feasibility studies to master planning - we guide your landmark project from concept to strategy,
                ensuring every decision aligns with your long-term vision and organizational goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                    Discuss Your Strategic Needs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#00205B] bg-transparent font-medium"
                  >
                    View All Service Groups
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/strategic-planning-commercial-construction-with-.png"
                alt="Strategic planning consultation with project roadmap and commercial construction planning documents"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Group Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">Foundation for Landmark Success</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Strategic Planning & Advisory Services form the foundation of every successful landmark project. These
                services ensure your project begins with a clear vision, realistic timeline, and comprehensive
                understanding of all challenges and opportunities.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our strategic approach goes beyond traditional project management to encompass market analysis,
                stakeholder alignment, and long-term asset planning. We help you make informed decisions that protect
                your investment and ensure your landmark serves its intended purpose for generations.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With 20+ years of experience in landmark projects, our strategic advisory services have helped clients
                navigate complex challenges, optimize resources, and achieve their vision while staying within budget
                and timeline constraints.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/project-strategy-meeting-with-stakeholders-.png"
                alt="Project strategy meeting with stakeholders reviewing construction plans and development timeline"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Complete Service List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">
              Strategic Planning & Advisory Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              10 specialized services that establish the strategic foundation for your landmark project's success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`service-${index}`}
                  className="border border-slate-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center justify-between w-full text-left">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-[#C5B783]/10 rounded-lg flex items-center justify-center">
                          <Target className="h-5 w-5 text-[#C5B783]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#00205B]">{service.title}</h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {service.phase}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {service.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2">
                    <p className="text-slate-600 leading-relaxed ml-14">{service.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">
              Key Benefits of Strategic Planning & Advisory Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How these services protect your interests and ensure project success from day one
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Clear Vision & Direction</h3>
              <p className="text-slate-600">
                Establish a comprehensive project roadmap that aligns all stakeholders and guides decision-making
                throughout the project lifecycle.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Risk Identification</h3>
              <p className="text-slate-600">
                Proactively identify potential challenges and develop mitigation strategies before they impact your
                project timeline or budget.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Stakeholder Alignment</h3>
              <p className="text-slate-600">
                Ensure all parties share the same vision and expectations, reducing conflicts and delays during project
                execution.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Optimized Investment</h3>
              <p className="text-slate-600">
                Make informed decisions that maximize value and ensure your landmark project delivers the intended
                return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need These Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">When You Need These Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic planning services are most valuable when engaged early, but can provide benefits at any project
              stage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Project Conception</CardTitle>
                <CardDescription>
                  When you have an idea but need to determine feasibility, develop strategy, and create a roadmap for
                  success.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Complex Challenges</CardTitle>
                <CardDescription>
                  When facing multiple stakeholders, regulatory hurdles, or complex funding structures that require
                  strategic navigation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Stakeholder Misalignment</CardTitle>
                <CardDescription>
                  When project stakeholders have different visions or expectations that need to be reconciled and
                  aligned.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Strategic Planning Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How Landmark Logix ensures your project starts with a solid strategic foundation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Comprehensive Discovery</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We begin with thorough stakeholder interviews, site analysis, and market research to understand your
                  vision, constraints, and opportunities. This foundation ensures all strategic decisions are
                  well-informed.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Collaborative Planning</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our strategic planning process involves all key stakeholders in developing the project roadmap. This
                  collaborative approach ensures buy-in and reduces the risk of conflicts during execution.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Adaptive Strategy</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We develop flexible strategies that can adapt to changing circumstances while maintaining focus on
                  your core objectives. This approach protects your project from unforeseen challenges.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/strategic-planning-process-and-methodology-.png"
                alt="Strategic planning process and methodology with construction project management documentation"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-[#00205B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Discuss Your Strategic Planning Needs?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Every successful landmark project begins with solid strategic planning. Let's discuss how our strategic
              advisory services can set your project up for success from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  Schedule a Strategic Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#00205B] bg-transparent font-medium"
                >
                  Explore Other Service Groups
                </Button>
              </Link>
            </div>
            <p className="text-[#C5B783] font-medium mt-6">"Strategic planning: The foundation of landmark success"</p>
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Strategic Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Owner's Representation</li>
                <li>Program Management</li>
                <li>Feasibility Studies</li>
                <li>Master Planning</li>
                <li>Site Selection</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C5B783]">Other Service Groups</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
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
                <li>
                  <Link href="/services" className="hover:text-[#C5B783] transition-colors">
                    All Services
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
                  <Link href="/why-choose-us" className="hover:text-[#C5B783] transition-colors">
                    Why Choose Us
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
