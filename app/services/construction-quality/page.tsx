import { Settings, ArrowRight, CheckCircle, Users, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"

export default function ConstructionQualityPage() {
  const services = [
    {
      title: "Construction Progress Monitoring",
      description:
        "Comprehensive monitoring of construction progress against project schedules, milestones, and quality standards to ensure timely delivery and adherence to specifications.",
      phase: "Construction",
      duration: "Full Construction",
    },
    {
      title: "Quality Control & Inspection",
      description:
        "Systematic quality control processes including material testing, workmanship inspection, and compliance verification to ensure construction meets design specifications and industry standards.",
      phase: "Construction",
      duration: "Full Construction",
    },
    {
      title: "Construction Safety Management",
      description:
        "Comprehensive safety program oversight including safety plan review, hazard identification, incident management, and regulatory compliance to protect workers and the public.",
      phase: "Construction",
      duration: "Full Construction",
    },
    {
      title: "Contractor Performance Management",
      description:
        "Monitoring and managing contractor performance including schedule adherence, quality delivery, resource allocation, and contract compliance to ensure project success.",
      phase: "Construction",
      duration: "Full Construction",
    },
    {
      title: "Change Order Management",
      description:
        "Systematic management of construction changes including evaluation, documentation, cost analysis, and approval processes to maintain project control and budget integrity.",
      phase: "Construction",
      duration: "As Needed",
    },
    {
      title: "Materials & Testing Coordination",
      description:
        "Coordination of material procurement, delivery scheduling, and testing protocols to ensure all materials meet specifications and are available when needed.",
      phase: "Construction",
      duration: "Full Construction",
    },
    {
      title: "Construction Documentation",
      description:
        "Comprehensive documentation of construction activities including daily reports, progress photos, inspection records, and as-built documentation for project records.",
      phase: "Construction",
      duration: "Full Construction",
    },
    {
      title: "Commissioning Coordination",
      description:
        "Managing the commissioning process for building systems including testing, balancing, training, and documentation to ensure optimal system performance.",
      phase: "Construction/Close-out",
      duration: "2-6 months",
    },
    {
      title: "Punch List Management",
      description:
        "Systematic identification, documentation, and resolution of construction deficiencies and incomplete work items to ensure project completion meets quality standards.",
      phase: "Close-out",
      duration: "1-3 months",
    },
    {
      title: "Final Inspections & Closeout",
      description:
        "Coordination of final inspections, certificate of occupancy processes, warranty documentation, and project closeout activities to ensure successful project delivery.",
      phase: "Close-out",
      duration: "1-2 months",
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
                <span className="text-[#00205B] font-medium">Construction Management & Quality Control</span>
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
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium">
                  10 Specialized Services
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Construction Management &<span className="text-[#C5B783]"> Quality Control</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                Comprehensive construction oversight, quality assurance, and project control services for commercial
                developments. We ensure your project is built to specifications, on schedule, and within budget while
                maintaining the highest quality standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                    Discuss Your Construction Needs
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
                src="/construction-quality-control-inspection-with-p.png"
                alt="Construction quality control inspection with professional inspectors reviewing building progress"
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
                Excellence Through Construction Oversight
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Construction Management & Quality Control services ensure your landmark project is executed with
                precision, maintaining the highest standards of quality, safety, and performance throughout the
                construction process. These services bridge the gap between design intent and built reality.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our comprehensive approach encompasses progress monitoring, quality inspection, safety management, and
                contractor coordination. We work as your advocate to ensure construction meets specifications while
                maintaining schedule and budget control.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With deep expertise in commercial construction processes and quality standards, we help you avoid costly
                defects, schedule delays, and performance issues that can compromise even the most well-designed
                projects.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/comprehensive-construction-project-management.png"
                alt="Comprehensive construction project management with site supervision and quality control processes"
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
              Construction Management & Quality Control Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              10 specialized services that ensure construction excellence and project control throughout your build
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
                          <Settings className="h-5 w-5 text-[#C5B783]" />
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
              Key Benefits of Construction Management & Quality Control
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How these services protect your project from construction defects and performance issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Quality Assurance</h3>
              <p className="text-slate-600">
                Maintain the highest construction standards through systematic quality control, inspection, and testing
                protocols that ensure specifications are met.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Safety Management</h3>
              <p className="text-slate-600">
                Comprehensive safety oversight protects workers and the public while ensuring compliance with all safety
                regulations and industry best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Schedule Control</h3>
              <p className="text-slate-600">
                Proactive progress monitoring and contractor coordination keeps your project on schedule while
                maintaining quality standards and budget control.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Performance Excellence</h3>
              <p className="text-slate-600">
                Systematic oversight ensures your facility performs as designed, with proper commissioning and testing
                of all building systems and components.
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
              Construction management and quality control services are essential for complex projects requiring
              precision execution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Complex Construction Projects</CardTitle>
                <CardDescription>
                  When managing large-scale commercial construction with multiple contractors, complex systems, or
                  specialized performance requirements that demand expert oversight.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">High-Performance Facilities</CardTitle>
                <CardDescription>
                  When building facilities with stringent performance requirements, specialized systems, or
                  sustainability goals that require detailed quality control and commissioning.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Quality & Safety Concerns</CardTitle>
                <CardDescription>
                  When you need independent oversight to ensure construction quality, safety compliance, and performance
                  standards are maintained throughout the construction process.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Construction Management Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How Landmark Logix ensures construction excellence and quality control throughout your project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Systematic Quality Control</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our quality control process integrates inspection, testing, and documentation at every construction
                  phase. We identify and resolve issues before they impact schedule or performance, ensuring your
                  facility meets all specifications.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Proactive Project Management</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We stay ahead of potential issues through continuous monitoring, early problem identification, and
                  proactive coordination with all project stakeholders. This approach prevents delays and cost overruns.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Performance-Driven Process</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our systematic approach ensures your facility performs as designed through proper commissioning,
                  testing, and documentation. We verify that all systems operate optimally before project completion.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/modern-building-technology-integration-with-sm.png"
                alt="Modern building technology integration with smart systems and quality control monitoring"
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
              Ready to Ensure Construction Excellence and Quality Control?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Don't let construction defects or performance issues compromise your landmark project. Our construction
              management and quality control services ensure your project is built to the highest standards while
              maintaining schedule and budget control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  Schedule a Construction Management Consultation
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
              "Excellence through construction oversight and quality mastery"
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Construction & Quality Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Progress Monitoring</li>
                <li>Quality Control & Inspection</li>
                <li>Safety Management</li>
                <li>Contractor Performance</li>
                <li>Commissioning Coordination</li>
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
