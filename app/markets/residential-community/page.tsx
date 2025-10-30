import { Home, ArrowRight, CheckCircle, Users, Shield, Clock, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function ResidentialCommunityPage() {
  const projectTypes = [
    "Luxury Residential Developments",
    "Mixed-Income Housing Communities",
    "Senior Living & Assisted Care",
    "Student Housing & Dormitories",
    "Affordable Housing Projects",
    "Townhomes & Condominiums",
    "Master-Planned Communities",
    "Community Centers & Clubhouses",
    "Parks & Recreation Facilities",
    "Schools & Educational Facilities",
    "Healthcare & Wellness Centers",
    "Retail & Commercial Amenities",
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
                <span className="text-[#00205B] font-medium">Residential & Community</span>
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
                  <Home className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium">
                  Residential & Community Market
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Residential & Community
                <span className="text-[#C5B783]"> Living</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                Creating vibrant communities and exceptional living environments that enhance quality of life, foster
                connections, and build lasting value for residents and neighborhoods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                    Discuss Your Community Project
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
                src="/residential-community-development-with-modern.png"
                alt="Residential community development with modern homes and neighborhood amenities"
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">Where Communities Come to Life</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Residential and community developments are more than just buildings—they're the foundation of
                neighborhoods, the heart of social connections, and the cornerstone of quality living. These projects
                require deep understanding of demographics, lifestyle trends, and community needs.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                From luxury residential developments to affordable housing initiatives, community projects must balance
                individual privacy with shared spaces, integrate seamlessly with existing neighborhoods, and provide
                amenities that enhance daily life for all residents.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Landmark Logix specializes in creating residential and community environments that foster connection,
                promote wellness, and build lasting value through thoughtful design, sustainable practices, and
                community-centered planning.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/community-living-spaces-with-shared-amenitie.png"
                alt="Community living spaces with shared amenities and family-friendly environments"
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
              Residential & Community Project Types
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From luxury developments to community centers, we create living environments that bring people together
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
                      <Home className="h-5 w-5 text-[#C5B783]" />
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
              Unique Considerations for Residential & Community Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Community developments require specialized expertise in lifestyle design, neighborhood integration, and
              long-term livability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Users className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Community Connection</h3>
                  <p className="text-slate-600">
                    Thoughtful design of shared spaces, gathering areas, and amenities that encourage social interaction
                    while respecting privacy and diverse lifestyle preferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Target className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Demographic Alignment</h3>
                  <p className="text-slate-600">
                    Understanding target demographics, family structures, and lifestyle needs to create housing
                    solutions that truly serve the intended community and market demands.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Zap className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Smart Home Integration</h3>
                  <p className="text-slate-600">
                    Modern technology infrastructure, energy management systems, and smart home features that enhance
                    convenience, security, and efficiency for residents.
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
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Safety & Security</h3>
                  <p className="text-slate-600">
                    Comprehensive security planning, safe pedestrian pathways, emergency preparedness, and child-safe
                    environments that provide peace of mind for all residents.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <Clock className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Sustainable Living</h3>
                  <p className="text-slate-600">
                    Environmentally responsible design, energy-efficient systems, and sustainable materials that reduce
                    environmental impact while lowering long-term operating costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#C5B783]/10 rounded-full p-3">
                  <CheckCircle className="h-6 w-6 text-[#C5B783]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00205B] mb-2">Neighborhood Integration</h3>
                  <p className="text-slate-600">
                    Seamless integration with existing communities, respect for local character, and enhancement of
                    neighborhood value through thoughtful planning and design.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Residential & Community Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How Landmark Logix creates vibrant communities that enhance quality of life and build lasting value
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Community-Centered Design</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We design from the community perspective, creating spaces that foster connection and belonging. Our
                  approach balances individual needs with shared experiences, building neighborhoods that thrive.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Lifestyle Integration</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Understanding how people live, work, and play allows us to create residential environments that
                  support modern lifestyles while promoting wellness, convenience, and quality of life.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#00205B] mb-4">Long-Term Value Creation</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We focus on creating communities that appreciate in value over time through quality construction,
                  timeless design, and amenities that remain relevant and desirable for generations.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/construction-management-professionals-reviewing-.png"
                alt="Construction management professionals reviewing residential community development plans"
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
              Ready to Discuss Your Residential & Community Project?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Whether you're planning a luxury residential development, affordable housing community, senior living
              facility, or mixed-use neighborhood, Landmark Logix has the expertise to create communities that enhance
              quality of life and build lasting value.
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
            <p className="text-[#C5B783] font-medium mt-6">"Where communities come to life"</p>
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Residential & Community</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Luxury Developments</li>
                <li>Mixed-Income Housing</li>
                <li>Senior Living</li>
                <li>Student Housing</li>
                <li>Community Centers</li>
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
                  <Link href="/markets/hospitality-tourism" className="hover:text-[#C5B783] transition-colors">
                    Hospitality & Tourism
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
