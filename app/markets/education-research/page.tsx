import { GraduationCap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function EducationResearchPage() {
  const projectTypes = [
    "University Campus Buildings",
    "Research Laboratories & Centers",
    "Academic Libraries",
    "Student Centers & Unions",
    "Residence Halls & Housing",
    "K-12 School Buildings",
    "Innovation & Technology Hubs",
    "Conference & Event Centers",
    "Athletic & Recreation Facilities",
    "Administrative Buildings",
    "Specialized Learning Environments",
    "Historic Campus Renovations",
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
                <span className="text-[#00205B] font-medium">Education & Research</span>
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
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium">
                  Education & Research Market
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Education & Research
                <span className="text-[#C5B783]"> Landmarks</span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                Inspiring learning and discovery through landmark educational facilities that foster innovation,
                collaboration, and academic excellence for students, faculty, and researchers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                    Discuss Your Educational Project
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
                src="/placeholder.svg?height=600&width=800&text=Modern+university+building+with+innovative+architecture"
                alt="Education research landmark building"
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-6">Where Knowledge Takes Shape</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Educational and research facilities are the engines of innovation and learning, shaping minds and
                advancing human knowledge. These landmark buildings must inspire creativity, facilitate collaboration,
                and provide state-of-the-art environments for teaching, learning, and discovery.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                From cutting-edge research laboratories to inspiring student centers, educational facilities require
                specialized expertise in flexible learning spaces, advanced technology integration, safety systems, and
                sustainable design. Every space must support diverse learning styles and research methodologies.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Landmark Logix understands the evolving needs of educational institutions, from K-12 schools to
                world-class universities, ensuring your facility becomes a catalyst for learning and innovation that
                serves students and researchers for generations.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=University+library+interior+with+study+spaces"
                alt="University library interior"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Education & Research Project Types</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From elementary schools to research universities, we bring landmark expertise to every type of educational
              facility
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
                      <GraduationCap className="h-5 w-5 text-[#C5B783]" />
                    </div>
                    <CardTitle className="text-[#00205B] text-lg">{type}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-[#00205B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Discuss Your Education & Research Project?
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Whether you're planning a new research facility, renovating a historic campus building, or creating
              innovative learning spaces, Landmark Logix has the expertise to ensure your project inspires generations
              of learners.
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
            <p className="text-[#C5B783] font-medium mt-6">"Inspiring learning through landmark architecture"</p>
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Education & Research</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>University Buildings</li>
                <li>Research Centers</li>
                <li>Academic Libraries</li>
                <li>K-12 Schools</li>
                <li>Innovation Hubs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C5B783]">Services</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Owner's Representation</li>
                <li>Project Management</li>
                <li>Technology Integration</li>
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
                  <Link href="/markets/civic-government" className="hover:text-[#C5B783] transition-colors">
                    Civic & Government
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
