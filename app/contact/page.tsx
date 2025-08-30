import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

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
              <span className="text-[#C5B783]"> Complex Construction Project</span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto">
              Ready to ensure your complex construction project delivers exceptional results? Contact us for a
              consultation about your sports facility, entertainment venue, hospitality development, or commercial
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
                  <CardTitle className="text-2xl text-[#00205B]">Request Your Project Consultation</CardTitle>
                  <CardDescription className="text-lg">
                    Tell us about your complex construction project and we'll provide expert guidance tailored to your
                    specific operational and performance requirements.
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
                          <SelectItem value="sports">Sports & Athletics Facility</SelectItem>
                          <SelectItem value="entertainment">Entertainment & Leisure Venue</SelectItem>
                          <SelectItem value="hospitality">Hospitality & Tourism Development</SelectItem>
                          <SelectItem value="cultural">Cultural & Arts Institution</SelectItem>
                          <SelectItem value="education">Education & Research Facility</SelectItem>
                          <SelectItem value="corporate">Corporate & Commercial Building</SelectItem>
                          <SelectItem value="mixed-use">Mixed-Use Development</SelectItem>
                          <SelectItem value="other">Other Complex Project</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#00205B] mb-2 block">Project Budget Range</label>
                      <Select>
                        <SelectTrigger className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10-25m">$10M - $25M</SelectItem>
                          <SelectItem value="25-50m">$25M - $50M</SelectItem>
                          <SelectItem value="50-100m">$50M - $100M</SelectItem>
                          <SelectItem value="100m-plus">$100M+</SelectItem>
                          <SelectItem value="tbd">To Be Determined</SelectItem>
                        </SelectContent>
                      </Select>
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
                      <label className="text-sm font-medium text-[#00205B] mb-2 block">Project Timeline</label>
                      <Select>
                        <SelectTrigger className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (within 30 days)</SelectItem>
                          <SelectItem value="1-6-months">1-6 months</SelectItem>
                          <SelectItem value="6-12-months">6-12 months</SelectItem>
                          <SelectItem value="12-plus-months">12+ months</SelectItem>
                          <SelectItem value="multi-year">Multi-year development</SelectItem>
                          <SelectItem value="exploring">Just exploring options</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#00205B] mb-2 block">Project Description</label>
                    <Textarea
                      placeholder="Tell us about your complex construction project and how we can help. Include any specific operational requirements, performance goals, stakeholder considerations, or challenges you're facing."
                      rows={6}
                      className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]"
                    />
                  </div>

                  <Button className="w-full bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold text-lg py-3">
                    Schedule Project Consultation
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
                      <p className="font-medium text-[#00205B]">United States</p>
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
                    <p className="text-slate-600">Serving complex construction projects across the United States</p>
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
              When you contact Landmark Logix, you're taking the first step toward ensuring your complex construction
              project's success and operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Free Strategic Consultation</h3>
              <p className="text-slate-600">
                We'll discuss your project needs at no cost and provide initial insights into optimizing your complex
                construction project for operational success.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Commercial Expertise</h3>
              <p className="text-slate-600">
                Benefit from 20+ years of experience in sports facilities, entertainment venues, hospitality
                developments, and complex commercial construction projects.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Performance-Focused Solutions</h3>
              <p className="text-slate-600">
                Every complex project is unique. We'll develop a customized approach that optimizes operational
                performance, stakeholder satisfaction, and long-term ROI.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-[#C5B783]" />
              </div>
              <h3 className="text-xl font-semibold text-[#00205B] mb-4">Clear Implementation Plan</h3>
              <p className="text-slate-600">
                We'll outline exactly how we can help deliver exceptional results and provide a clear roadmap for moving
                your project forward successfully.
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
              We add the most value when involved early, but we can help optimize performance and mitigate risks at any
              stage of your complex construction project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#C5B783]">1</span>
                </div>
                <CardTitle className="text-[#00205B]">Strategic Planning</CardTitle>
                <CardDescription>
                  We add the most value when involved early in the planning and feasibility phase, optimizing for
                  operational excellence and ROI from the start.
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
                  Help select the right team and manage the design process to ensure high-performance facilities that
                  meet operational and revenue requirements.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30">
              <CardHeader className="text-center">
                <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#C5B783]">3</span>
                </div>
                <CardTitle className="text-[#00205B]">Pre-Construction</CardTitle>
                <CardDescription>
                  Ensure proper preparation and comprehensive risk management before construction begins on your complex
                  commercial project.
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
                  Provide expert oversight and quality control to ensure your facility meets the highest performance
                  standards and operational requirements.
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
              "Delivering excellence in complex construction projects"
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              Don't let your important project become someone else's learning experience. Contact Landmark Logix today
              and ensure your facility delivers exceptional operational performance and long-term success.
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
              "Contact Landmark Logix today and ensure exceptional results for your complex project"
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
