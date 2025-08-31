import { FileText, ArrowRight, CheckCircle, Users, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"

export default function DesignRegulatoryPage() {
  const services = [
    {
      title: "Design Review & Oversight",
      description:
        "Comprehensive review of architectural and engineering designs to ensure they meet project requirements, building codes, and performance standards while maintaining design intent.",
      phase: "Design",
      duration: "3-8 months",
    },
    {
      title: "Regulatory Compliance Management",
      description:
        "Managing all aspects of regulatory compliance including building codes, zoning requirements, accessibility standards, and local ordinances throughout the project lifecycle.",
      phase: "All Phases",
      duration: "Full Project",
    },
    {
      title: "Permitting & Approvals Coordination",
      description:
        "Streamlining the permitting process by coordinating with regulatory agencies, preparing documentation, and managing approvals to minimize delays and ensure compliance.",
      phase: "Pre-Construction",
      duration: "2-6 months",
    },
    {
      title: "Code Analysis & Interpretation",
      description:
        "Expert analysis and interpretation of building codes, zoning regulations, and accessibility requirements to guide design decisions and ensure compliance.",
      phase: "Design",
      duration: "1-3 months",
    },
    {
      title: "Design Standards Development",
      description:
        "Creating comprehensive design standards and guidelines that ensure consistency, quality, and compliance across all project phases and components.",
      phase: "Pre-Design",
      duration: "1-2 months",
    },
    {
      title: "Value Engineering Coordination",
      description:
        "Leading value engineering sessions to optimize design solutions while maintaining quality, performance, and regulatory compliance within budget constraints.",
      phase: "Design",
      duration: "2-4 weeks",
    },
    {
      title: "Sustainability & Green Building Compliance",
      description:
        "Ensuring compliance with green building standards such as LEED, BREEAM, or local sustainability requirements while optimizing environmental performance.",
      phase: "Design",
      duration: "3-6 months",
    },
    {
      title: "Accessibility Compliance Review",
      description:
        "Comprehensive review of designs to ensure full compliance with ADA, local accessibility codes, and universal design principles.",
      phase: "Design",
      duration: "2-4 weeks",
    },
    {
      title: "Design Quality Assurance",
      description:
        "Systematic quality assurance processes to identify and resolve design conflicts, errors, and omissions before construction begins.",
      phase: "Design",
      duration: "4-8 weeks",
    },
    {
      title: "Regulatory Agency Liaison",
      description:
        "Acting as primary liaison with regulatory agencies, building departments, and approval authorities to facilitate smooth project approval processes.",
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
                <span className="text-[#00205B] font-medium">Design & Regulatory Management</span>
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
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium">
                  10 Specialized Services
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Design &<span className="text-[#C5B783]"> Regulatory Management</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                Design oversight for high-performance facilities, permitting, and compliance management for commercial
                developments. We ensure your project meets all regulatory requirements while maintaining design
                excellence and performance standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                    Discuss Your Design Needs
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
                src="/architectural-design-review-for-commercial-cons.png"
                alt="Architectural design review for commercial construction with regulatory compliance documentation"
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">
                Excellence Through Design Oversight
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Design & Regulatory Management services ensure your landmark project achieves the highest standards of
                design excellence while maintaining full compliance with all applicable codes and regulations. These
                services bridge the gap between creative vision and regulatory reality.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our comprehensive approach encompasses design review, regulatory compliance, permitting coordination,
                and quality assurance. We work closely with your design team to optimize solutions that meet both
                aesthetic goals and performance requirements while navigating complex regulatory landscapes.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With deep expertise in commercial construction regulations and design standards, we help you avoid
                costly delays, design conflicts, and compliance issues that can derail even the most well-planned
                projects.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/design-compliance-review-meeting-with-archit.png"
                alt="Design compliance review meeting with architects and regulatory specialists reviewing building plans"
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
              Design & Regulatory Management Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              10 specialized services that ensure design excellence and regulatory compliance throughout your project
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
                          <FileText className="h-5 w-5 text-[#C5B783]" />
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
              Key Benefits of Design & Regulatory Management
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How these services protect your project from design conflicts and regulatory delays
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Design Excellence</h3>
              <p className="text-slate-600">
                Maintain the highest design standards while ensuring all solutions are practical, buildable, and
                compliant with applicable regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Regulatory Compliance</h3>
              <p className="text-slate-600">
                Ensure full compliance with building codes, zoning requirements, accessibility standards, and
                environmental regulations from design through occupancy.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Streamlined Approvals</h3>
              <p className="text-slate-600">
                Accelerate the permitting and approval process through expert coordination with regulatory agencies and
                comprehensive documentation.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Quality Assurance</h3>
              <p className="text-slate-600">
                Identify and resolve design conflicts, errors, and omissions before construction begins, preventing
                costly changes and delays.
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
              Design & regulatory management services are essential for complex projects with stringent requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Complex Regulatory Environment</CardTitle>
                <CardDescription>
                  When navigating multiple jurisdictions, complex zoning requirements, or specialized building codes
                  that require expert interpretation and coordination.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">High-Performance Requirements</CardTitle>
                <CardDescription>
                  When your project requires specialized performance standards, sustainability certifications, or
                  innovative design solutions that push regulatory boundaries.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Design Quality Concerns</CardTitle>
                <CardDescription>
                  When you need independent design review to ensure quality, identify potential issues, and optimize
                  solutions before construction begins.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Design & Regulatory Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How Landmark Logix ensures design excellence and regulatory compliance throughout your project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Integrated Design Review</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our design review process integrates regulatory requirements from the earliest design phases, ensuring
                  compliance doesn't compromise design intent. We work collaboratively with your design team to optimize
                  solutions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Proactive Compliance Management</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We stay ahead of regulatory changes and maintain relationships with key approval authorities. This
                  proactive approach prevents surprises and ensures smooth approval processes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Quality-Driven Process</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our systematic quality assurance processes identify and resolve issues before they impact
                  construction. This attention to detail protects your schedule and budget while ensuring superior
                  outcomes.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/regulatory-compliance-documentation-and-per.png"
                alt="Regulatory compliance documentation and permitting process with building code review materials"
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
              Ready to Ensure Design Excellence and Regulatory Compliance?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Don't let design conflicts or regulatory delays derail your landmark project. Our design and regulatory
              management services ensure your project achieves excellence while meeting all compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  Schedule a Design Review Consultation
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
              "Excellence through design oversight and regulatory mastery"
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Design & Regulatory Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Design Review & Oversight</li>
                <li>Regulatory Compliance</li>
                <li>Permitting Coordination</li>
                <li>Code Analysis</li>
                <li>Quality Assurance</li>
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
