import { Cpu, ArrowRight, Users, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"

export default function TechnologyTransitionPage() {
  const services = [
    {
      title: "Building Technology Integration",
      description:
        "Comprehensive integration of smart building systems, IoT devices, and automation technologies to optimize facility performance, energy efficiency, and operational control.",
      phase: "Design/Construction",
      duration: "3-8 months",
    },
    {
      title: "System Commissioning & Testing",
      description:
        "Systematic testing and commissioning of all building systems including HVAC, lighting, security, and technology infrastructure to ensure optimal performance and integration.",
      phase: "Construction/Close-out",
      duration: "2-6 months",
    },
    {
      title: "Digital Infrastructure Planning",
      description:
        "Strategic planning and implementation of digital infrastructure including network systems, data centers, and connectivity solutions to support modern facility operations.",
      phase: "Design/Construction",
      duration: "4-12 months",
    },
    {
      title: "Owner Training & Documentation",
      description:
        "Comprehensive training programs and documentation for facility management teams covering system operations, maintenance procedures, and technology management.",
      phase: "Close-out/Transition",
      duration: "1-3 months",
    },
    {
      title: "Warranty & Maintenance Coordination",
      description:
        "Management of warranty periods, maintenance schedules, and service agreements to ensure long-term system performance and protect your technology investments.",
      phase: "Transition/Operations",
      duration: "12-24 months",
    },
    {
      title: "Performance Monitoring Setup",
      description:
        "Implementation of performance monitoring systems and analytics platforms to track facility performance, energy usage, and system efficiency over time.",
      phase: "Close-out/Operations",
      duration: "2-4 months",
    },
    {
      title: "Operational Readiness Planning",
      description:
        "Comprehensive planning for facility operations including staffing requirements, operational procedures, and management systems to ensure smooth facility startup.",
      phase: "Close-out/Transition",
      duration: "2-6 months",
    },
    {
      title: "Technology Asset Management",
      description:
        "Development of technology asset management systems including inventory tracking, lifecycle planning, and replacement scheduling for all facility technology.",
      phase: "Transition/Operations",
      duration: "1-3 months",
    },
    {
      title: "Project Closeout & Handover",
      description:
        "Systematic project closeout including final documentation, as-built drawings, system manuals, and formal handover to facility management teams.",
      phase: "Close-out",
      duration: "1-2 months",
    },
    {
      title: "Post-Occupancy Support",
      description:
        "Ongoing support during initial occupancy period including system optimization, issue resolution, and performance fine-tuning to ensure optimal facility operation.",
      phase: "Operations",
      duration: "6-12 months",
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
                <span className="text-[#00205B] font-medium">Technology Integration & Project Transition</span>
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
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium">
                  10 Specialized Services
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Technology Integration &<span className="text-[#C5B783]"> Project Transition</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                Comprehensive technology integration and project transition services for modern commercial facilities.
                We ensure your building systems work seamlessly together and your team is fully prepared for successful
                facility operations from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                    Discuss Your Technology Needs
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
                src="/modern-building-technology-integration-with-sm.png"
                alt="Modern building technology integration with smart systems and digital infrastructure"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Group Overview */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">
                Seamless Technology Integration & Transition
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Technology Integration & Project Transition services ensure your landmark facility operates at peak
                performance with fully integrated systems and a well-prepared operations team. These services bridge the
                gap between construction completion and successful facility operations.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our comprehensive approach encompasses smart building integration, system commissioning, staff training,
                and operational readiness planning. We ensure all technology systems work together seamlessly while
                preparing your team for successful long-term facility management.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With deep expertise in modern building technologies and operational best practices, we help you maximize
                your facility's performance potential while avoiding the common pitfalls that can compromise even the
                most advanced building systems.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/architectural-design-review-for-commercial-cons.png"
                alt="Technology integration planning with digital systems and smart building infrastructure"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Complete Service List */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">
              Technology Integration & Project Transition Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              10 specialized services that ensure seamless technology integration and successful project transition
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
                          <Cpu className="h-5 w-5 text-[#C5B783]" />
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
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">
              Key Benefits of Technology Integration & Project Transition
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How these services maximize facility performance and ensure successful operational transition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">System Integration</h3>
              <p className="text-slate-600">
                Seamless integration of all building systems ensures optimal performance, energy efficiency, and
                operational control through unified technology platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Team Readiness</h3>
              <p className="text-slate-600">
                Comprehensive training and documentation ensure your facility management team is fully prepared to
                operate and maintain all building systems effectively.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Performance Assurance</h3>
              <p className="text-slate-600">
                Systematic commissioning and testing verify that all systems perform as designed, protecting your
                technology investments and ensuring optimal facility operation.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Operational Excellence</h3>
              <p className="text-slate-600">
                Smooth transition to operations with ongoing support ensures your facility achieves peak performance
                from day one and maintains excellence over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need These Services */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">When You Need These Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Technology integration and project transition services are essential for modern facilities with complex
              systems and operational requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Smart Building Projects</CardTitle>
                <CardDescription>
                  When implementing advanced building technologies, IoT systems, or automation platforms that require
                  expert integration and commissioning for optimal performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Complex Facility Operations</CardTitle>
                <CardDescription>
                  When transitioning to operations of facilities with sophisticated systems that require specialized
                  training, documentation, and operational readiness planning.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Mission-Critical Facilities</CardTitle>
                <CardDescription>
                  When operating facilities where system performance is critical to business operations and requires
                  seamless transition with minimal risk of operational disruption.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Technology Integration Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How Landmark Logix ensures seamless technology integration and successful project transition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Integrated Technology Planning</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our technology integration process begins early in design and continues through commissioning. We
                  ensure all systems work together seamlessly, maximizing performance while minimizing complexity for
                  your operations team.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Comprehensive Team Preparation</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We prepare your facility management team through systematic training, detailed documentation, and
                  hands-on experience. This ensures confident, competent facility operations from day one.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Smooth Operational Transition</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our transition process includes ongoing support, performance monitoring, and system optimization to
                  ensure your facility achieves and maintains peak performance throughout its operational life.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/construction-quality-control-inspection-with-p.png"
                alt="Technology systems commissioning and testing with professional oversight and quality control"
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
              Ready to Integrate Technology and Transition Successfully?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Don't let technology complexity or operational unpreparedness compromise your landmark facility. Our
              technology integration and project transition services ensure seamless system performance and confident
              facility operations from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  Schedule a Technology Integration Consultation
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
            <p className="text-[#C5B783] font-medium mt-6">
              "Excellence through seamless integration and operational mastery"
            </p>
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Technology & Transition Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Building Technology Integration</li>
                <li>System Commissioning & Testing</li>
                <li>Digital Infrastructure Planning</li>
                <li>Owner Training & Documentation</li>
                <li>Post-Occupancy Support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C5B783]">Other Service Groups</h4>
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
                  <Link href="/services/contract-risk" className="hover:text-[#C5B783] transition-colors">
                    Contract & Risk
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
