import {
  Palette,
  Music,
  Trophy,
  Hotel,
  GraduationCap,
  Briefcase,
  Landmark,
  Plane,
  Heart,
  Home,
  Factory,
  ArrowRight,
  Users,
  Shield,
  Clock,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function MarketsPage() {
  const markets = [
    {
      id: "sports-athletics",
      title: "Sports & Athletics",
      icon: Trophy,
      description: "Professional venues, collegiate facilities, training centers, and community sports complexes",
      image: "/placeholder.svg?height=300&width=400&text=Modern+sports+stadium+architecture",
    },
    {
      id: "entertainment-leisure",
      title: "Entertainment & Leisure",
      icon: Music,
      description: "Theme parks, cinemas, family entertainment centers, zoos, and recreation facilities",
      image: "/placeholder.svg?height=300&width=400&text=Entertainment+venue+with+modern+design",
    },
    {
      id: "hospitality-tourism",
      title: "Hospitality & Tourism",
      icon: Hotel,
      description: "Luxury hotels, resorts, restaurants, conference centers, and tourism infrastructure",
      image: "/placeholder.svg?height=300&width=400&text=Luxury+hotel+with+elegant+facade",
    },
    {
      id: "cultural-arts",
      title: "Cultural & Arts",
      icon: Palette,
      description: "Museums, performing arts centers, cultural heritage sites, and historic preservation projects",
      image: "/placeholder.svg?height=300&width=400&text=Museum+with+classical+architecture",
    },
    {
      id: "education-research",
      title: "Education & Research",
      icon: GraduationCap,
      description: "Universities, K-12 facilities, research centers, libraries, and innovation hubs",
      image: "/placeholder.svg?height=300&width=400&text=University+campus+building+with+modern+design",
    },
    {
      id: "corporate-commercial",
      title: "Corporate & Commercial",
      icon: Briefcase,
      description: "Corporate headquarters, office campuses, retail centers, and mixed-use developments",
      image: "/placeholder.svg?height=300&width=400&text=Modern+corporate+headquarters+building",
    },
    {
      id: "civic-government",
      title: "Civic & Government",
      icon: Landmark,
      description: "Federal, state, and local government facilities, justice centers, and public safety buildings",
      image: "/placeholder.svg?height=300&width=400&text=Government+building+with+classical+columns",
    },
    {
      id: "residential-community",
      title: "Residential & Community",
      icon: Home,
      description: "High-end residential, estate development, luxury living, and community planning",
      image: "/placeholder.svg?height=300&width=400&text=Luxury+residential+development+architecture",
    },
    {
      id: "healthcare-wellness",
      title: "Healthcare & Wellness",
      icon: Heart,
      description: "Hospitals, medical centers, senior living, research facilities, and wellness centers",
      image: "/placeholder.svg?height=300&width=400&text=Modern+hospital+building+with+healing+design",
    },
    {
      id: "industrial-specialized",
      title: "Industrial & Specialized",
      icon: Factory,
      description: "Manufacturing, energy facilities, specialized environments, and mission-critical operations",
      image: "/placeholder.svg?height=300&width=400&text=Modern+industrial+facility+architecture",
    },
    {
      id: "transportation-infrastructure",
      title: "Transportation & Infrastructure",
      icon: Plane,
      description: "Airports, train stations, bridges, ports, and multi-modal transportation hubs",
      image: "/placeholder.svg?height=300&width=400&text=Modern+airport+terminal+architecture",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00205B] via-[#000034] to-[#00205B] text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium mb-6">
              11 Specialized Markets
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Markets We Serve -<span className="text-[#C5B783]"> Building Landmarks Across Every Sector</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto">
              From cultural institutions to cutting-edge technology centers, Landmark Logix brings 20+ years of
              expertise to landmark projects across 11 specialized markets. Every sector deserves landmark-quality
              construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  Discuss Your Project
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

      {/* Markets Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Our Market Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Landmark projects exist across every sector of the built environment. Explore our specialized expertise in
              each market we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {markets.map((market) => {
              const IconComponent = market.icon
              return (
                <Card
                  key={market.id}
                  className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:border-[#C5B783]/30 group"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={market.image || "/placeholder.svg"}
                      alt={market.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="h-12 w-12 bg-[#C5B783] rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#00205B] text-xl">{market.title}</CardTitle>
                    <CardDescription className="text-slate-600">{market.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/markets/${market.id}`}>
                      <Button className="w-full bg-[#00205B] hover:bg-[#000034] text-white font-medium">
                        Explore {market.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">Every Market, Every Landmark</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Landmark Logix, we understand that landmark projects exist across every sector of the built
                environment. Whether you're developing a world-class museum, a cutting-edge research facility, or a
                historic government building, our 20+ years of experience ensures your project achieves landmark status
                and stands the test of time.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Each market presents unique challenges, opportunities, and requirements. Our specialized approach
                ensures we deliver the expertise, stakeholder management, and quality standards that your specific
                market demands.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Diverse+landmark+buildings+across+multiple+sectors"
                alt="Landmark buildings across sectors"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Market Expertise Matters */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Why Market Expertise Matters</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every market has unique requirements that demand specialized knowledge and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Regulatory Knowledge</h3>
              <p className="text-slate-600">
                Each market has unique codes, standards, and approval processes that require specialized expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Stakeholder Understanding</h3>
              <p className="text-slate-600">
                Different markets involve different community and user groups with varying needs and expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Technical Requirements</h3>
              <p className="text-slate-600">
                Specialized building systems and performance standards that vary significantly by market sector.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Project Lifecycle</h3>
              <p className="text-slate-600">
                Varying timelines, funding sources, and delivery methods that require market-specific approaches.
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
              Ready to Create Your Market's Next Landmark?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              No matter which market you're in, Landmark Logix has the expertise to ensure your project becomes a
              lasting legacy. Let's discuss how we can bring your vision to life.
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
                  Our Services
                </Button>
              </Link>
            </div>
            <p className="text-[#C5B783] font-medium mt-6">"Every market deserves landmark-quality construction"</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
