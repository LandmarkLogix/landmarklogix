import { Shield, Users, Award, MapPin, Clock, Target, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
              <Link href="/about" className="text-[#00205B] font-semibold">
                About
              </Link>
              <Link href="/services" className="text-slate-600 hover:text-[#00205B] transition-colors font-medium">
                Services
              </Link>
              <Link href="/" className="text-slate-600 hover:text-[#00205B] transition-colors font-medium">
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
              20+ Years of Excellence
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              About
              <span className="text-[#C5B783]"> Landmark Logix</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto">
              For over two decades, we've been the trusted partner for organizations creating buildings that define
              communities and preserve history. Learn about our mission, values, and commitment to landmark excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#00205B] bg-transparent font-medium"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">Two Decades of Landmark Excellence</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Since our founding, Landmark Logix has been the trusted partner for organizations creating buildings
                that define communities and preserve history. Our deep expertise in owner's representative services
                ensures every landmark project meets the highest standards of quality, compliance, and craftsmanship.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We understand that landmark buildings are more than construction projects—they're investments in
                community identity, cultural preservation, and future generations. That's why we approach every project
                with the reverence and expertise it deserves.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-[#C5B783] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#00205B]">20+ Years Experience</h3>
                    <p className="text-slate-600">Proven track record in landmark construction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-[#C5B783] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#00205B]">East Coast Focus</h3>
                    <p className="text-slate-600">Deep regional expertise and relationships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-[#C5B783] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#00205B]">Regulatory Mastery</h3>
                    <p className="text-slate-600">Navigate complex compliance requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-[#C5B783] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#00205B]">Quality Focus</h3>
                    <p className="text-slate-600">Uncompromising standards for lasting value</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Construction+team+reviewing+architectural+plans"
                alt="Construction team reviewing plans"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Mission & Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're driven by a simple belief: every landmark deserves expert representation to ensure it stands the
              test of time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Uncompromising Quality</CardTitle>
                <CardDescription>
                  We hold every aspect of your project to the highest standards because landmarks must endure for
                  generations. Quality is never negotiable.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Heritage Preservation</CardTitle>
                <CardDescription>
                  Deep expertise in historic preservation ensures your project honors the past while serving future
                  needs with authenticity and respect.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Community Focus</CardTitle>
                <CardDescription>
                  We understand that landmark buildings serve communities, and we ensure every stakeholder voice is
                  heard and valued throughout the process.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Proven Excellence</CardTitle>
                <CardDescription>
                  Two decades of successful landmark projects across the East Coast demonstrate our unwavering
                  commitment to excellence and client satisfaction.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Client Advocacy</CardTitle>
                <CardDescription>
                  As your owner's representative, we protect your interests at every stage, ensuring your vision is
                  realized within budget and on schedule.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Long-term Thinking</CardTitle>
                <CardDescription>
                  Every decision we make considers the building's role in the community for decades to come, ensuring
                  lasting value and relevance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">What Sets Us Apart</h2>
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
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Landmark Specialization</h3>
                  <p className="text-slate-600">
                    Unlike general construction managers, we focus exclusively on landmark buildings. This
                    specialization means we understand the unique challenges, regulations, and standards that apply to
                    buildings of historical and community significance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Clock className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">East Coast Expertise</h3>
                  <p className="text-slate-600">
                    Our deep knowledge of East Coast regulatory environments, historic preservation requirements, and
                    regional building practices gives us an advantage in navigating complex approval processes and
                    ensuring compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Users className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Stakeholder Management</h3>
                  <p className="text-slate-600">
                    Landmark projects involve complex stakeholder groups—from preservation boards to community
                    organizations. We excel at managing these relationships and ensuring all voices are heard while
                    keeping projects on track.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Award className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Quality Without Compromise</h3>
                  <p className="text-slate-600">
                    When a building will serve the community for generations, there's no room for shortcuts. Our
                    rigorous quality standards and inspection processes ensure every detail meets landmark-worthy
                    standards.
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

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every landmark project is unique, but our systematic approach ensures consistent excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Listen & Understand</h3>
              <p className="text-slate-600">
                We begin by deeply understanding your vision, constraints, and the building's role in the community.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Plan & Prepare</h3>
              <p className="text-slate-600">
                Thorough planning and team assembly set the foundation for success before construction begins.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Execute & Monitor</h3>
              <p className="text-slate-600">
                Active oversight and quality control ensure your project meets the highest standards throughout
                construction.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Deliver Excellence</h3>
              <p className="text-slate-600">
                We ensure your landmark meets every expectation and will serve the community with pride for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-[#00205B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Create Your Landmark?</h2>
            <p className="text-xl text-slate-200 mb-8">
              When your building will define a community for generations, you need a partner who understands that
              responsibility. Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  Schedule Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#00205B] bg-transparent font-medium"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
            <p className="text-[#C5B783] font-medium mt-6">"Every landmark deserves expert representation"</p>
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Company</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  <Link href="/about" className="hover:text-[#C5B783] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#C5B783] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#C5B783] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C5B783]">Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Owner's Representation</li>
                <li>Project Management</li>
                <li>Historic Preservation</li>
                <li>Regulatory Navigation</li>
                <li>Quality Assurance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C5B783]">Markets</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
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
