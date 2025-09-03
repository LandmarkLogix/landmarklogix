import { Shield, Users, Award, MapPin, Clock, Target, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

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
              For over two decades, we've been the trusted partner for organizations creating complex construction
              projects that require expert coordination, stakeholder alignment, and operational excellence. Learn about
              our mission, values, and commitment to delivering exceptional results.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">
                Two Decades of Complex Construction Excellence
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Since our founding, Landmark Logix has been the trusted partner for sports organizations, entertainment
                companies, hospitality developers, and cultural institutions creating high-stakes construction projects.
                Our deep expertise in owner's representative services ensures every complex project meets the highest
                standards of quality, operational efficiency, and stakeholder satisfaction.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We understand that complex construction projects are more than buildings—they're investments in
                operational excellence, revenue generation, and long-term success. That's why we approach every project
                with the expertise and strategic thinking it deserves.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-[#C5B783] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#00205B]">20+ Years Experience</h3>
                    <p className="text-slate-600">Proven track record in complex commercial construction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-[#C5B783] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#00205B]">National Expertise</h3>
                    <p className="text-slate-600">Nationwide expertise and industry relationships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-[#C5B783] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#00205B]">Risk Management</h3>
                    <p className="text-slate-600">Prevent costly delays and budget overruns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-[#C5B783] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#00205B]">Operational Excellence</h3>
                    <p className="text-slate-600">Optimize for performance and revenue potential</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/used%20-%20AdobeStock_746092377-7UtSPuyw3fPras9Q7fTdA2tadaQGLv.jpeg"
                alt="Construction manager leading team meeting on active construction site with workers in safety gear"
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
              We're driven by a simple belief: every complex construction project deserves expert representation to
              ensure exceptional results and long-term success.
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
                  We hold every aspect of your project to the highest standards because excellence matters in every
                  detail and delivers long-term value and operational success.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Stakeholder Alignment</CardTitle>
                <CardDescription>
                  We ensure all parties - owners, architects, contractors, and end users - remain coordinated and
                  informed throughout the construction process for optimal outcomes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Operational Excellence</CardTitle>
                <CardDescription>
                  We optimize every aspect of your project for peak performance, efficiency, and revenue potential,
                  ensuring long-term operational success.
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
                  Two decades of successful complex projects demonstrate our unwavering commitment to delivering
                  exceptional results on time and within budget.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Risk Mitigation</CardTitle>
                <CardDescription>
                  Our experience prevents costly delays, budget overruns, and quality issues by identifying and
                  addressing potential problems before they impact your project.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-[#C5B783]" />
                </div>
                <CardTitle className="text-[#00205B]">Strategic Partnership</CardTitle>
                <CardDescription>
                  As your owner's representative, we serve as your advocate and strategic partner, ensuring your vision
                  is realized with maximum value and minimal risk.
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
              When your project involves significant investment and complexity, you need a partner who understands the
              unique challenges of high-stakes construction management.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Shield className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Commercial Construction Specialization</h3>
                  <p className="text-slate-600">
                    Unlike general construction managers, we specialize in complex commercial projects including sports
                    facilities, entertainment venues, and hospitality developments. This specialization means we
                    understand the unique operational requirements and revenue considerations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Clock className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Multi-Stakeholder Coordination</h3>
                  <p className="text-slate-600">
                    Our expertise in managing complex stakeholder environments - from sports organizations to
                    entertainment companies to hospitality operators - ensures all parties remain aligned throughout the
                    construction process.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Users className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Operational Performance Focus</h3>
                  <p className="text-slate-600">
                    We understand that commercial projects must perform operationally from day one. Our approach
                    considers fan experience, guest satisfaction, operational efficiency, and revenue optimization
                    throughout the construction process.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Award className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">ROI-Focused Excellence</h3>
                  <p className="text-slate-600">
                    When significant investment is at stake, there's no room for shortcuts. Our rigorous quality
                    standards and performance optimization ensure every detail contributes to long-term success and
                    maximum return on investment.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_733932446-bZvjCkW2vXIoYEpe3GCLDDX1xU4bsi.jpeg"
                alt="Construction excavator at sunset on active construction site showcasing heavy equipment and project scale"
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
              Every complex construction project is unique, but our systematic approach ensures consistent excellence
              and optimal outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Listen & Understand</h3>
              <p className="text-slate-600">
                We begin by deeply understanding your vision, operational requirements, and performance expectations for
                long-term success.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Plan & Prepare</h3>
              <p className="text-slate-600">
                Strategic planning and expert team assembly set the foundation for operational excellence before
                construction begins.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Execute & Monitor</h3>
              <p className="text-slate-600">
                Active oversight and performance optimization ensure your project meets the highest standards and
                operational requirements throughout construction.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Deliver Excellence</h3>
              <p className="text-slate-600">
                We ensure your project exceeds expectations and delivers exceptional operational performance from day
                one and for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-[#00205B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Execute Your Complex Construction Project?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              When your project involves significant investment and complexity, you need a partner who understands
              high-stakes construction management. Let's discuss how we can deliver exceptional results for your
              project.
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
            <p className="text-[#C5B783] font-medium mt-6">"Delivering excellence in complex construction projects"</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
