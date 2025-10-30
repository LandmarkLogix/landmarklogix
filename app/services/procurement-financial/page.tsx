import { DollarSign, ArrowRight, CheckCircle, TrendingUp, Calculator, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"

export default function ProcurementFinancialPage() {
  const services = [
    {
      title: "Cost Estimation & Budget Development",
      description:
        "Developing comprehensive project budgets with detailed cost breakdowns, contingency planning, and lifecycle cost analysis to ensure accurate financial planning.",
      phase: "Pre-Design",
      duration: "1-2 months",
    },
    {
      title: "Value Engineering & Cost Optimization",
      description:
        "Systematic analysis of project elements to optimize value while maintaining quality, identifying cost savings opportunities without compromising landmark standards.",
      phase: "Design",
      duration: "Ongoing",
    },
    {
      title: "Contractor Prequalification & Selection",
      description:
        "Comprehensive vetting of contractors based on experience, financial stability, and landmark project expertise to ensure the best team for your project.",
      phase: "Pre-Construction",
      duration: "2-3 months",
    },
    {
      title: "Bid Management & Procurement Strategy",
      description:
        "Managing competitive bidding processes, evaluating proposals, and developing procurement strategies that maximize value and minimize risk.",
      phase: "Pre-Construction",
      duration: "1-2 months",
    },
    {
      title: "Financial Planning & Cash Flow Management",
      description:
        "Developing comprehensive financial plans, managing cash flow projections, and coordinating funding releases to ensure smooth project financing.",
      phase: "All Phases",
      duration: "Full Project",
    },
    {
      title: "Funding Strategy & Capital Planning",
      description:
        "Identifying optimal funding sources, structuring financing packages, and developing capital deployment strategies for complex landmark projects.",
      phase: "Pre-Design",
      duration: "2-4 months",
    },
    {
      title: "Change Order Management & Cost Control",
      description:
        "Rigorous evaluation and management of change orders, ensuring all modifications are justified, properly priced, and aligned with project goals.",
      phase: "Construction",
      duration: "Ongoing",
    },
    {
      title: "Payment Application Review & Processing",
      description:
        "Detailed review of contractor payment applications, verification of work completion, and coordination of payment processing to maintain cash flow.",
      phase: "Construction",
      duration: "Monthly",
    },
    {
      title: "Financial Reporting & Budget Tracking",
      description:
        "Comprehensive financial reporting, budget variance analysis, and regular updates to stakeholders on project financial performance.",
      phase: "All Phases",
      duration: "Monthly",
    },
    {
      title: "Audit Support & Financial Documentation",
      description:
        "Maintaining detailed financial records, supporting audit processes, and ensuring compliance with funding requirements and financial regulations.",
      phase: "All Phases",
      duration: "Ongoing",
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
                <span className="text-[#00205B] font-medium">Procurement & Financial Management</span>
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
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium">
                  10 Specialized Services
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Procurement & Financial
                <span className="text-[#C5B783]"> Management</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                Cost management, contractor selection, and financial planning to protect your investment. We ensure
                every dollar is optimized for maximum value while maintaining landmark quality standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                    Discuss Your Financial Needs
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
                src="/financial-planning-construction-budget-analysis-.png"
                alt="Financial planning and budget management with construction cost analysis charts and professional consultation"
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">Protecting Your Investment</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Procurement & Financial Management services are critical to the success of any landmark project. These
                services ensure that your investment is protected through rigorous cost control, strategic contractor
                selection, and comprehensive financial oversight throughout the project lifecycle.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our financial management approach goes beyond basic accounting to encompass value engineering, risk
                assessment, and strategic procurement. We help you make informed financial decisions that optimize value
                while maintaining the quality standards essential for landmark buildings.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With 20+ years of experience managing landmark project finances, we understand the unique challenges of
                balancing quality, cost, and timeline. Our services ensure your project stays within budget while
                achieving the landmark status you envision.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/budget-analysis-and-cost-control-dashboard-w.png"
                alt="Budget analysis and cost control dashboard with financial performance metrics and project tracking"
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
              Procurement & Financial Management Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              10 specialized services that protect your investment and optimize financial performance throughout your
              landmark project
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
                          <DollarSign className="h-5 w-5 text-[#C5B783]" />
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
              Key Benefits of Procurement & Financial Management
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How these services protect your investment and ensure optimal financial performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Calculator className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Cost Control</h3>
              <p className="text-slate-600">
                Rigorous budget management and cost tracking ensure your project stays within financial parameters while
                maintaining quality.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Value Optimization</h3>
              <p className="text-slate-600">
                Strategic value engineering and procurement practices maximize the return on your landmark project
                investment.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Quality Assurance</h3>
              <p className="text-slate-600">
                Careful contractor selection and procurement processes ensure you get the best team and materials for
                your project.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <PieChart className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Financial Transparency</h3>
              <p className="text-slate-600">
                Comprehensive reporting and documentation provide complete visibility into project financial
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-14 sm:py-16 bg-[#00205B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Project's Financial Performance?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Protect your investment with comprehensive procurement and financial management services. Let's discuss
              how we can optimize your project's financial performance while maintaining landmark quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  Schedule a Financial Consultation
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
            <p className="text-[#C5B783] font-medium mt-6">"Protecting your investment, optimizing your value"</p>
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Financial Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Cost Estimation</li>
                <li>Value Engineering</li>
                <li>Contractor Selection</li>
                <li>Budget Management</li>
                <li>Financial Planning</li>
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
                  <Link href="/services/contract-risk" className="hover:text-[#C5B783] transition-colors">
                    Contract & Risk
                  </Link>
                </li>
                <li>
                  <Link href="/services/construction-quality" className="hover:text-[#C5B783] transition-colors">
                    Construction & Quality
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
