import { Landmark, ArrowRight, CheckCircle, Users, Shield, Clock, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function CivicGovernmentPage() {
  const projectTypes = [
    "Federal Government Buildings",
    "State Capitol Buildings & Complexes",
    "City Halls & Municipal Buildings",
    "Courthouses & Justice Centers",
    "Public Safety Facilities",
    "Emergency Operations Centers",
    "Legislative Buildings",
    "Administrative Offices",
    "Public Service Centers",
    "Community Government Facilities",
    "Historic Government Renovations",
    "Multi-Agency Complexes",
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
                <span className="text-[#00205B] font-medium">Civic & Government</span>
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
                  <Landmark className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium">
                  Civic & Government Market
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Civic & Government
                <span className="text-[#C5B783]"> Landmarks</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                Building the foundations of democracy through landmark government facilities that embody public service,
                transparency, and civic pride while serving communities for generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                    Discuss Your Civic Project
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
                src="/government-building-construction-with-classical-.png"
                alt="Civic government landmark building with classical architecture and modern security features"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">Where Democracy Takes Shape</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Civic and government buildings are more than functional spaces—they are symbols of democratic values,
                public service, and community identity. These landmark structures must inspire confidence, ensure
                accessibility, and provide secure, efficient environments for public servants and citizens alike.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                From historic courthouses to modern municipal complexes, government facilities require specialized
                expertise in security systems, public accessibility, ceremonial spaces, and operational efficiency.
                Every detail must balance transparency with security, tradition with innovation.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Landmark Logix understands the unique challenges of government construction, from complex procurement
                processes to stringent security requirements, ensuring your civic landmark serves the public with
                dignity and distinction.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/government-interior-public-spaces-with-securit.png"
                alt="Government building interior with accessible public spaces and security features"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Civic & Government Project Types</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From federal complexes to local municipal buildings, we bring landmark expertise to every level of
              government facility
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
                      <Landmark className="h-5 w-5 text-[#C5B783]" />
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">
              Unique Considerations for Civic & Government Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Government facilities have specialized requirements that demand expert knowledge and careful planning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Shield className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Security & Safety</h3>
                  <p className="text-slate-600">
                    Advanced security systems, blast-resistant design, and emergency protocols that protect public
                    servants and citizens while maintaining accessibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Users className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Public Accessibility</h3>
                  <p className="text-slate-600">
                    Universal design principles ensuring all citizens can access government services, with clear
                    wayfinding and barrier-free environments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Target className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Ceremonial Spaces</h3>
                  <p className="text-slate-600">
                    Designing dignified spaces for civic ceremonies, public meetings, and democratic processes that
                    inspire civic pride and participation.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Clock className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Operational Efficiency</h3>
                  <p className="text-slate-600">
                    Workflow optimization, technology integration, and flexible spaces that adapt to changing government
                    operations and service delivery methods.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <CheckCircle className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Transparency & Openness</h3>
                  <p className="text-slate-600">
                    Balancing security needs with democratic principles of transparency, creating welcoming environments
                    that encourage civic engagement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Shield className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Regulatory Compliance</h3>
                  <p className="text-slate-600">
                    Navigating complex federal, state, and local regulations, procurement processes, and specialized
                    building codes for government facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Civic & Government Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How Landmark Logix ensures your government facility serves the public with distinction and efficiency
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Public Service Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We begin every government project by understanding your agency's mission, service delivery goals, and
                  community needs. This ensures every design decision supports effective public service.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Security-First Planning</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team includes security specialists and architects experienced in government facilities. We
                  integrate security seamlessly into design while maintaining public accessibility and civic dignity.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Procurement Expertise</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We understand government procurement processes, from RFPs to design-build contracts. Our experience
                  ensures compliance while achieving the best value for taxpayers.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/government-facility-construction-with-advance.png"
                alt="Government facility construction with advanced security and accessibility features"
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
              Ready to Discuss Your Civic & Government Project?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Whether you're planning a new courthouse, renovating a historic city hall, or building a modern government
              complex, Landmark Logix has the expertise to ensure your project serves the public with distinction.
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
            <p className="text-[#C5B783] font-medium mt-6">"Building the foundations of democracy"</p>
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Civic & Government</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Federal Buildings</li>
                <li>State Capitols</li>
                <li>City Halls</li>
                <li>Courthouses</li>
                <li>Public Safety Facilities</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C5B783]">Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Owner's Representation</li>
                <li>Project Management</li>
                <li>Security Planning</li>
                <li>Regulatory Navigation</li>
                <li>Quality Assurance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C5B783]">Other Markets</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  <Link href="/markets/cultural-arts" className="hover:text-[#C5B783] transition-colors">
                    Cultural & Arts
                  </Link>
                </li>
                <li>
                  <Link href="/markets/education-research" className="hover:text-[#C5B783] transition-colors">
                    Education & Research
                  </Link>
                </li>
                <li>
                  <Link href="/markets/healthcare-wellness" className="hover:text-[#C5B783] transition-colors">
                    Healthcare & Wellness
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
