import { Factory, ArrowRight, CheckCircle, Cog, Shield, Zap, Target, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function IndustrialSpecializedPage() {
  const projectTypes = [
    "Manufacturing & Production Facilities",
    "Warehouses & Distribution Centers",
    "Data Centers & Server Farms",
    "Research & Development Labs",
    "Clean Rooms & Controlled Environments",
    "Food Processing & Cold Storage",
    "Pharmaceutical Manufacturing",
    "Aerospace & Defense Facilities",
    "Energy & Utility Infrastructure",
    "Mining & Resource Processing",
    "Chemical Processing Plants",
    "Specialized Testing Facilities",
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
                <span className="text-[#00205B] font-medium">Industrial & Specialized</span>
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
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium">
                  Industrial & Specialized Market
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Industrial & Specialized
                <span className="text-[#C5B783]"> Facilities</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                Engineering complex industrial and specialized facilities that drive innovation, productivity, and
                operational excellence through precision construction and advanced technical infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                    Discuss Your Industrial Project
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
                src="/industrial-facility-construction-with-advanc.png"
                alt="Industrial facility construction with advanced manufacturing equipment and precision engineering"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">Where Precision Meets Performance</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Industrial and specialized facilities represent the backbone of modern manufacturing, research, and
                technology sectors, requiring unparalleled precision in design, construction, and systems integration to
                support complex operational requirements and stringent performance standards.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                From high-tech manufacturing plants to controlled research environments, these facilities demand
                specialized expertise in process engineering, environmental controls, safety systems, and regulatory
                compliance while maintaining operational continuity and maximizing productivity.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Landmark Logix delivers industrial construction that combines technical excellence with operational
                efficiency, creating facilities that drive innovation, enhance productivity, and support long-term
                business growth through precision engineering and advanced construction methodologies.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/specialized-manufacturing-environment-with-pr.png"
                alt="Specialized manufacturing environment with precision equipment and controlled conditions"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">
              Industrial & Specialized Project Types
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From manufacturing plants to research labs, we build facilities that drive innovation and productivity
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
                      <Factory className="h-5 w-5 text-[#C5B783]" />
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
              Unique Considerations for Industrial & Specialized Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industrial facilities require specialized expertise in process engineering, environmental controls, and
              precision construction methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Cog className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Process Engineering Integration</h3>
                  <p className="text-slate-600">
                    Seamless integration of manufacturing processes, material handling systems, and production workflows
                    with facility design to optimize efficiency and minimize operational disruptions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Target className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Precision Environmental Controls</h3>
                  <p className="text-slate-600">
                    Advanced HVAC, clean room systems, and environmental monitoring to maintain precise temperature,
                    humidity, and air quality standards critical for specialized operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Zap className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Heavy-Duty Infrastructure</h3>
                  <p className="text-slate-600">
                    Robust structural systems, high-capacity utilities, and specialized foundations designed to support
                    heavy machinery, equipment loads, and intensive industrial operations.
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
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Safety & Compliance Systems</h3>
                  <p className="text-slate-600">
                    Comprehensive safety systems including fire suppression, emergency response, hazardous material
                    handling, and regulatory compliance for OSHA, EPA, and industry-specific standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Settings className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Operational Continuity</h3>
                  <p className="text-slate-600">
                    Phased construction approaches and temporary systems that maintain production schedules and minimize
                    business disruption during facility expansion or renovation projects.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <CheckCircle className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Future Scalability</h3>
                  <p className="text-slate-600">
                    Flexible design that accommodates future expansion, technology upgrades, and changing production
                    requirements while maintaining structural integrity and operational efficiency.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">
              Our Industrial & Specialized Approach
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How Landmark Logix delivers precision-engineered facilities that drive operational excellence and
              innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Technical Excellence</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We combine deep technical expertise with advanced construction methodologies to deliver facilities
                  that meet the most demanding performance specifications and operational requirements.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Integrated Systems Design</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our holistic approach ensures seamless integration of structural, mechanical, electrical, and process
                  systems to optimize performance, efficiency, and long-term reliability.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Operational Partnership</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We work closely with operations teams to understand workflow requirements, minimize disruptions, and
                  deliver facilities that enhance productivity from day one.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/construction-management-professionals-reviewing-.png"
                alt="Construction management professionals reviewing industrial facility development plans"
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
              Ready to Discuss Your Industrial & Specialized Project?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Whether you're planning a new manufacturing facility, research lab, data center, or specialized processing
              plant, Landmark Logix has the technical expertise to deliver precision-engineered solutions that drive
              operational excellence and business growth.
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
            <p className="text-[#C5B783] font-medium mt-6">"Where precision meets performance"</p>
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Industrial & Specialized</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Manufacturing Facilities</li>
                <li>Data Centers</li>
                <li>Research Labs</li>
                <li>Clean Rooms</li>
                <li>Processing Plants</li>
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
                  <Link href="/markets/healthcare-wellness" className="hover:text-[#C5B783] transition-colors">
                    Healthcare & Wellness
                  </Link>
                </li>
                <li>
                  <Link href="/markets/corporate-commercial" className="hover:text-[#C5B783] transition-colors">
                    Corporate & Commercial
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
