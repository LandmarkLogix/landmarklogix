import { Trophy, ArrowRight, CheckCircle, Users, Shield, Clock, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function SportsAthleticsPage() {
  const projectTypes = [
    "Professional Sports Stadiums",
    "Olympic & Multi-Sport Complexes",
    "University Athletic Facilities",
    "Training & Performance Centers",
    "Aquatic Centers & Natatoriums",
    "Indoor Arenas & Fieldhouses",
    "Tennis & Racquet Complexes",
    "Golf Clubhouses & Pro Shops",
    "Recreation & Community Centers",
    "Youth Sports Facilities",
    "Esports & Gaming Venues",
    "Sports Medicine & Rehabilitation Centers",
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
                <span className="text-[#00205B] font-medium">Sports & Athletics</span>
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
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium">
                  Sports & Athletics Market
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Sports & Athletics
                <span className="text-[#C5B783]"> Excellence</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                Creating world-class athletic facilities that inspire peak performance, unite communities, and deliver
                exceptional fan experiences while maximizing operational efficiency and revenue potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                    Discuss Your Sports Project
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_841847459-Suhbqj2LtrYiW6AxX6kf3xg4348Biv.jpeg"
                alt="Baseball stadium with fans enjoying a game, featuring premium seating areas with food and drinks overlooking the field"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">Where Champions Are Made</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Sports and athletics facilities are more than venues—they are catalysts for human achievement, community
                pride, and economic vitality. These dynamic environments must inspire athletes to reach their potential
                while delivering unforgettable experiences for fans and generating sustainable revenue streams.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                From intimate training centers to massive stadiums hosting global events, athletic facilities require
                specialized expertise in performance optimization, crowd management, technology integration, and
                operational efficiency. Every detail must enhance the athletic experience while maximizing commercial
                potential.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Landmark Logix understands the unique demands of sports construction, from athlete performance
                requirements to fan engagement technologies, ensuring your facility becomes a landmark destination that
                drives success both on and off the field.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/modern-stadium-construction-with-steel-framework-a.png"
                alt="Modern stadium construction with steel framework and advanced engineering"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Sports & Athletics Project Types</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From professional stadiums to community recreation centers, we bring championship expertise to every level
              of athletic facility
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
                      <Trophy className="h-5 w-5 text-[#C5B783]" />
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
              Unique Considerations for Sports & Athletics Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Athletic facilities have specialized requirements that demand expert knowledge and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Zap className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Performance Optimization</h3>
                  <p className="text-slate-600">
                    Specialized surfaces, lighting, acoustics, and environmental controls that enhance athletic
                    performance and create optimal training and competition environments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Users className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Fan Experience Design</h3>
                  <p className="text-slate-600">
                    Sightlines, concessions, amenities, and technology integration that create memorable experiences and
                    encourage repeat attendance and higher spending.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Shield className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Safety & Security</h3>
                  <p className="text-slate-600">
                    Crowd control systems, emergency evacuation protocols, and security infrastructure that protect
                    athletes, fans, and staff during high-energy events.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Target className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Revenue Generation</h3>
                  <p className="text-slate-600">
                    Premium seating, hospitality spaces, retail opportunities, and multi-use capabilities that maximize
                    revenue streams and ensure long-term financial sustainability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Clock className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Operational Efficiency</h3>
                  <p className="text-slate-600">
                    Streamlined operations, maintenance accessibility, and flexible spaces that adapt to different
                    events while minimizing operational costs and maximizing utilization.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <CheckCircle className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Technology Integration</h3>
                  <p className="text-slate-600">
                    Advanced AV systems, digital displays, connectivity infrastructure, and smart building technologies
                    that enhance experiences and enable data-driven operations.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Sports & Athletics Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How Landmark Logix ensures your athletic facility becomes a championship destination that drives success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Performance-First Design</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We start with the athlete experience, ensuring every design decision enhances performance, safety, and
                  training effectiveness. This foundation creates facilities that attract top talent and events.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Revenue Optimization</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team includes sports business experts who understand revenue generation strategies. We design
                  facilities that maximize commercial opportunities while enhancing the fan experience.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Future-Ready Technology</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We integrate cutting-edge technology infrastructure that supports current needs while providing
                  flexibility for future innovations in sports broadcasting, fan engagement, and facility management.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/construction-management-professionals-reviewing-.png"
                alt="Construction management professionals reviewing sports facility plans and specifications"
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
              Ready to Discuss Your Sports & Athletics Project?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Whether you're planning a professional stadium, university athletic complex, or community recreation
              center, Landmark Logix has the expertise to create a championship facility that drives success and
              community pride.
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
            <p className="text-[#C5B783] font-medium mt-6">"Where champions are made"</p>
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Sports & Athletics</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Professional Stadiums</li>
                <li>Training Centers</li>
                <li>Aquatic Facilities</li>
                <li>Indoor Arenas</li>
                <li>Recreation Centers</li>
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
                  <Link href="/markets/civic-government" className="hover:text-[#C5B783] transition-colors">
                    Civic & Government
                  </Link>
                </li>
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
