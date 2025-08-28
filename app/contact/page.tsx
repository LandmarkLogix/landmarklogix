import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
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
              <Link href="/#markets" className="text-slate-600 hover:text-[#00205B] transition-colors font-medium">
                Markets
              </Link>
              <Link
                href="/#why-choose-us"
                className="text-slate-600 hover:text-[#00205B] transition-colors font-medium"
              >
                Why Choose Us
              </Link>
              <Link href="/contact" className="text-[#00205B] font-semibold">
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
      <section className="relative bg-gradient-to-br from-[#00205B] via-[#000034] to-[#00205B] text-white py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium mb-6">
              Free Consultation Available
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Let's Discuss Your
              <span className="text-[#C5B783]"> Landmark Project</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto">
              Ready to ensure your building stands the test of time? Contact us for a consultation about your landmark
              project. We're here to protect your interests and guide you through every step of the process.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-[#C5B783]" />
                <span>Free Initial Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#C5B783]" />
                <span>24-Hour Response Time</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-[#C5B783]" />
                <span>20+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-slate-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#00205B]">Request Your Consultation</CardTitle>
                  <CardDescription className="text-lg">
                    Tell us about your landmark project and we'll provide expert guidance tailored to your specific
                    needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#00205B] mb-2 block">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Your full name"
                        required
                        className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#00205B] mb-2 block">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@organization.com"
                        required
                        className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#00205B] mb-2 block">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#00205B] mb-2 block">Company/Organization</label>
                      <Input
                        placeholder="Your organization name"
                        className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#00205B] mb-2 block">Project Type</label>
                      <Select>
                        <SelectTrigger className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="museum">Museum/Cultural Institution</SelectItem>
                          <SelectItem value="historic">Historic Building Renovation</SelectItem>
                          <SelectItem value="civic">Civic Building (courthouse, library, city hall)</SelectItem>
                          <SelectItem value="religious">Religious Institution</SelectItem>
                          <SelectItem value="educational">Educational Campus Building</SelectItem>
                          <SelectItem value="mixed-use">Mixed-Use Development</SelectItem>
                          <SelectItem value="other">Other Landmark Project</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#00205B] mb-2 block">Project Location</label>
                      <Input
                        placeholder="City, State"
                        className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#00205B] mb-2 block">Project Phase</label>
                      <Select>
                        <SelectTrigger className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]">
                          <SelectValue placeholder="Select current phase" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="planning">Planning/Feasibility Stage</SelectItem>
                          <SelectItem value="design">Design Phase</SelectItem>
                          <SelectItem value="pre-construction">Pre-Construction</SelectItem>
                          <SelectItem value="construction">Construction Started</SelectItem>
                          <SelectItem value="other">Other/Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#00205B] mb-2 block">Timeline</label>
                      <Select>
                        <SelectTrigger className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (within 30 days)</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-plus-months">6+ months</SelectItem>
                          <SelectItem value="exploring">Just exploring options</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#00205B] mb-2 block">Project Description</label>
                    <Textarea
                      placeholder="Tell us about your landmark project and how we can help. Include any specific challenges, goals, or requirements you have."
                      rows={6}
                      className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]"
                    />
                  </div>

                  <Button className="w-full bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold text-lg py-3">
                    Request Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-slate-600 text-center">
                    By submitting this form, you agree to be contacted by Landmark Logix regarding your project inquiry.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Direct Contact Information */}
            <div className="space-y-8">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-[#00205B]">Get in Touch Directly</CardTitle>
                  <CardDescription>Prefer to call or email? We're here to help.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#C5B783]" />
                    <div>
                      <p className="font-medium text-[#00205B]">(555) 123-LAND</p>
                      <p className="text-sm text-slate-600">Main office line</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#C5B783]" />
                    <div>
                      <p className="font-medium text-[#00205B]">info@landmarklogix.com</p>
                      <p className="text-sm text-slate-600">General inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#C5B783]" />
                    <div>
                      <p className="font-medium text-[#00205B]">East Coast United States</p>
                      <p className="text-sm text-slate-600">Service area</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#C5B783]" />
                    <div>
                      <p className="font-medium text-[#00205B]">24-Hour Response</p>
                      <p className="text-sm text-slate-600">We respond to all inquiries within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-[#00205B]">Office Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#00205B] mb-2">Headquarters</h4>
                    <p className="text-slate-600">
                      <em>Location to be determined</em>
                      <br />
                      <span className="text-sm">Office details will be updated soon</span>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#00205B] mb-2">Service Territory</h4>
                    <p className="text-slate-600">
                      From Maine to Georgia - serving landmark projects across the Eastern United States
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#C5B783]/30 bg-[#C5B783]/5">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-[#C5B783] mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#00205B] mb-2">Emergency Project Issues</h4>
                      <p className="text-sm text-slate-600">
                        For urgent matters on active projects, please call our main line and mention it's an emergency.
                        We'll connect you with the appropriate project manager immediately.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">What to Expect</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              When you contact Landmark Logix, you're taking the first step toward ensuring your landmark project's
              success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Free Initial Consultation</h3>
              <p className="text-slate-600">
                We'll discuss your project needs at no cost and provide initial insights into your landmark building
                project.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Expert Assessment</h3>
              <p className="text-slate-600">
                Benefit from 20+ years of landmark project experience and specialized knowledge of East Coast
                regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Tailored Solutions</h3>
              <p className="text-slate-600">
                Every landmark project is unique. We'll develop a customized approach that fits your specific needs and
                goals.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Clear Next Steps</h3>
              <p className="text-slate-600">
                We'll outline exactly how we can help and provide a clear roadmap for moving your project forward
                successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Times to Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#00205B] mb-4">Best Times to Contact Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We add the most value when involved early, but we can help at any stage of your landmark project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#C5B783]">1</span>
                </div>
                <CardTitle className="text-[#00205B]">Planning Stage</CardTitle>
                <CardDescription>
                  We add the most value when involved early in the planning and feasibility phase of your project.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#C5B783]">2</span>
                </div>
                <CardTitle className="text-[#00205B]">Design Phase</CardTitle>
                <CardDescription>
                  Help select the right team and manage the design process to ensure landmark-quality results.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#C5B783]">3</span>
                </div>
                <CardTitle className="text-[#00205B]">Before Construction</CardTitle>
                <CardDescription>
                  Ensure proper preparation and risk management before construction begins on your landmark building.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#C5B783]">4</span>
                </div>
                <CardTitle className="text-[#00205B]">During Construction</CardTitle>
                <CardDescription>
                  Provide oversight and quality control to ensure your landmark meets the highest standards.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-[#00205B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              "Every landmark deserves expert representation"
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Don't let your important project become someone else's learning experience. Contact Landmark Logix today
              and ensure your building becomes a lasting legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                Schedule Your Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#00205B] bg-transparent font-medium"
              >
                Call (555) 123-LAND
              </Button>
            </div>
            <p className="text-[#C5B783] font-medium mt-6">
              "Contact Landmark Logix today and ensure your building becomes a lasting legacy"
            </p>
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
              <h4 className="font-semibold mb-4 text-[#C5B783]">Contact Info</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>(555) 123-LAND</li>
                <li>info@landmarklogix.com</li>
                <li>East Coast USA</li>
                <li>24-Hour Response</li>
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
