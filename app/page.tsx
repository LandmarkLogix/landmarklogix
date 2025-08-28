import { Shield, Users, Award, ArrowRight, CheckCircle, Clock, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function LandmarkLogixWebsite() {
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
              <Link href="#markets" className="text-slate-600 hover:text-[#00205B] transition-colors font-medium">
                Markets
              </Link>
              <Link href="#why-choose-us" className="text-slate-600 hover:text-[#00205B] transition-colors font-medium">
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
      <section className="relative bg-gradient-to-br from-[#00205B] via-[#000034] to-[#00205B] text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium">
                20+ Years of Excellence
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Building Landmarks That
                <span className="text-[#C5B783]"> Stand the Test of Time</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Expert owner's representative services for public-facing landmark buildings across the East Coast. From
                historic preservation to modern civic architecture, we ensure your project becomes a lasting legacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#00205B] bg-transparent font-medium"
                >
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Historic+landmark+building+with+classical+architecture"
                alt="Historic landmark building with classical architecture"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">
              Comprehensive Owner's Representative Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From project inception to completion, we serve as your advocate, ensuring every aspect of your landmark
              building project exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Project Management</CardTitle>
                <CardDescription>
                  End-to-end oversight ensuring timelines, budgets, and quality standards are met
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Regulatory Navigation</CardTitle>
                <CardDescription>
                  Expert guidance through complex permitting, zoning, and historic preservation requirements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Stakeholder Management</CardTitle>
                <CardDescription>
                  Coordinate between architects, contractors, officials, and community stakeholders
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Quality Assurance</CardTitle>
                <CardDescription>
                  Rigorous inspection and quality control to ensure lasting craftsmanship
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Risk Management</CardTitle>
                <CardDescription>
                  Proactive identification and mitigation of project risks and challenges
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader>
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Budget Oversight</CardTitle>
                <CardDescription>
                  Careful cost management and value engineering to maximize your investment
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section id="markets" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Landmark Markets</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We focus exclusively on public-facing buildings that serve as community anchors and architectural
              treasures for generations to come.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:border-[#C5B783]/30 transition-colors">
              <Image
                src="/placeholder.svg?height=200&width=300&text=Museum+building+with+classical+columns"
                alt="Museum building"
                width={300}
                height={200}
                className="rounded-lg mb-6 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#00205B] mb-3">Museums & Cultural Centers</h3>
              <p className="text-slate-600">
                Preserving and presenting culture through thoughtfully designed spaces that inspire and educate.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:border-[#C5B783]/30 transition-colors">
              <Image
                src="/placeholder.svg?height=200&width=300&text=Civic+building+with+government+architecture"
                alt="Civic building"
                width={300}
                height={200}
                className="rounded-lg mb-6 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#00205B] mb-3">Civic Buildings</h3>
              <p className="text-slate-600">
                Government facilities that embody democratic values and serve communities with dignity and
                accessibility.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:border-[#C5B783]/30 transition-colors">
              <Image
                src="/placeholder.svg?height=200&width=300&text=Historic+building+renovation+with+scaffolding"
                alt="Historic renovation"
                width={300}
                height={200}
                className="rounded-lg mb-6 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#00205B] mb-3">Historic Renovations</h3>
              <p className="text-slate-600">
                Breathing new life into historic structures while preserving their architectural integrity and heritage.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:border-[#C5B783]/30 transition-colors">
              <Image
                src="/placeholder.svg?height=200&width=300&text=Educational+institution+campus+building"
                alt="Educational institution"
                width={300}
                height={200}
                className="rounded-lg mb-6 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#00205B] mb-3">Educational Institutions</h3>
              <p className="text-slate-600">
                Learning environments that inspire academic excellence and foster community engagement.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:border-[#C5B783]/30 transition-colors">
              <Image
                src="/placeholder.svg?height=200&width=300&text=Religious+building+with+traditional+architecture"
                alt="Religious building"
                width={300}
                height={200}
                className="rounded-lg mb-6 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#00205B] mb-3">Religious Buildings</h3>
              <p className="text-slate-600">
                Sacred spaces that honor tradition while meeting the evolving needs of faith communities.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:border-[#C5B783]/30 transition-colors">
              <Image
                src="/placeholder.svg?height=200&width=300&text=Public+facility+community+center"
                alt="Public facility"
                width={300}
                height={200}
                className="rounded-lg mb-6 w-full object-cover"
              />
              <h3 className="text-xl font-semibold text-[#00205B] mb-3">Public Facilities</h3>
              <p className="text-slate-600">
                Community-centered buildings that serve diverse populations and strengthen social bonds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Why Landmark Logix?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              When your building will serve the community for generations, you need a partner who understands the weight
              of that responsibility.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Shield className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Uncompromising Quality</h3>
                  <p className="text-slate-600">
                    We hold every aspect of your project to the highest standards because landmarks must endure for
                    generations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Clock className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Heritage Preservation</h3>
                  <p className="text-slate-600">
                    Deep expertise in historic preservation ensures your project honors the past while serving future
                    needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Users className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Community Focus</h3>
                  <p className="text-slate-600">
                    We understand that landmark buildings serve communities, and we ensure every stakeholder voice is
                    heard and valued.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Award className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Proven Excellence</h3>
                  <p className="text-slate-600">
                    Two decades of successful landmark projects across the East Coast demonstrate our commitment to
                    excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500&text=Architectural+craftsmanship+detail+stonework"
                alt="Architectural craftsmanship detail"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00205B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Owner's Representative</li>
                <li>Project Management</li>
                <li>Historic Preservation</li>
                <li>Regulatory Navigation</li>
                <li>Quality Assurance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C5B783]">Markets</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Museums & Cultural Centers</li>
                <li>Civic Buildings</li>
                <li>Educational Institutions</li>
                <li>Religious Buildings</li>
                <li>Historic Renovations</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
