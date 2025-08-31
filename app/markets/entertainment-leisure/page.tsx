import { Music, ArrowRight, CheckCircle, Users, Shield, Clock, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function EntertainmentLeisurePage() {
  const projectTypes = [
    "Concert Halls & Music Venues",
    "Theaters & Performing Arts Centers",
    "Convention & Exhibition Centers",
    "Theme Parks & Attractions",
    "Casinos & Gaming Facilities",
    "Nightclubs & Entertainment Districts",
    "Cinemas & IMAX Theaters",
    "Bowling Alleys & Entertainment Centers",
    "Escape Rooms & Interactive Experiences",
    "Comedy Clubs & Intimate Venues",
    "Outdoor Amphitheaters & Festivals",
    "Virtual Reality & Gaming Arcades",
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
                <span className="text-[#00205B] font-medium">Entertainment & Leisure</span>
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
                  <Music className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium">
                  Entertainment & Leisure Market
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Entertainment & Leisure
                <span className="text-[#C5B783]"> Destinations</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                Creating immersive entertainment venues that captivate audiences, generate memorable experiences, and
                drive exceptional revenue performance through innovative design and operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                    Discuss Your Entertainment Project
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
                src="/concert-hall-architecture-with-advanced-acoustics-.png"
                alt="Concert hall architecture with advanced acoustics and modern lighting systems"
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">Where Memories Are Made</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Entertainment and leisure facilities are the stages where life's most memorable moments unfold. These
                dynamic spaces must seamlessly blend artistic vision with commercial viability, creating environments
                that inspire performers and delight audiences while generating sustainable revenue streams.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                From intimate jazz clubs to grand concert halls, entertainment venues require specialized expertise in
                acoustics, lighting, crowd flow, and technology integration. Every design decision must enhance the
                guest experience while optimizing operational efficiency and revenue generation.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Landmark Logix understands the unique demands of entertainment construction, from performer requirements
                to audience engagement technologies, ensuring your venue becomes a destination that drives cultural
                impact and commercial success.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/modern-museum-architecture-with-contemporary-galle.png"
                alt="Modern entertainment venue with contemporary gallery spaces and interactive displays"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">
              Entertainment & Leisure Project Types
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From world-class concert halls to immersive theme parks, we bring entertainment expertise to every venue
              type
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
                      <Music className="h-5 w-5 text-[#C5B783]" />
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
              Unique Considerations for Entertainment & Leisure Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Entertainment venues have specialized requirements that demand expert knowledge and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Zap className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Acoustic Excellence</h3>
                  <p className="text-slate-600">
                    Specialized acoustic design, sound isolation, and audio systems that create optimal listening
                    environments for every seat while minimizing noise impact on surrounding areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Users className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Audience Experience</h3>
                  <p className="text-slate-600">
                    Sightlines, comfort, accessibility, and amenities that create memorable experiences and encourage
                    repeat visits while maximizing concession and merchandise revenue.
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
                    Crowd management systems, emergency protocols, and security infrastructure that ensure patron safety
                    during high-energy events and large gatherings.
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
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Revenue Diversification</h3>
                  <p className="text-slate-600">
                    Multiple revenue streams through premium experiences, food and beverage, retail, private events, and
                    flexible spaces that maximize utilization and profitability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Clock className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Operational Flexibility</h3>
                  <p className="text-slate-600">
                    Adaptable spaces, efficient load-in/load-out, and versatile infrastructure that accommodate diverse
                    events while minimizing changeover time and operational costs.
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
                    Advanced lighting, video, and interactive technologies that enhance performances and create
                    immersive experiences while enabling efficient venue management.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Entertainment & Leisure Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How Landmark Logix ensures your entertainment venue becomes a destination that captivates and succeeds
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Experience-Driven Design</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We design from the audience perspective, ensuring every element enhances the entertainment experience.
                  This guest-first approach creates venues that generate positive reviews and repeat business.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Commercial Optimization</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team includes entertainment industry experts who understand revenue generation strategies. We
                  design venues that maximize commercial opportunities while preserving artistic integrity.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Technical Excellence</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We integrate state-of-the-art technical systems that support world-class performances while providing
                  flexibility for future technology upgrades and diverse entertainment formats.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/construction-management-professionals-reviewing-.png"
                alt="Construction management professionals reviewing entertainment venue plans and technical specifications"
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
              Ready to Discuss Your Entertainment & Leisure Project?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Whether you're planning a concert hall, theater, theme park, or entertainment complex, Landmark Logix has
              the expertise to create a destination venue that captivates audiences and drives commercial success.
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
            <p className="text-[#C5B783] font-medium mt-6">"Where memories are made"</p>
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Entertainment & Leisure</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Concert Halls</li>
                <li>Theaters</li>
                <li>Convention Centers</li>
                <li>Theme Parks</li>
                <li>Gaming Facilities</li>
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
