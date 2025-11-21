import { BriefcaseBusiness, Map, Users, Award, Building } from "lucide-react"

import { PageTemplate } from "@/components/layout/page-template"
import { ContentSection } from "@/components/layout/content-section"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const caseStudies = [
  {
    title: "Heritage Field Renovation",
    sector: "Sports & Athletics",
    summary:
      "Major league ballpark modernization balancing a 1920s-era facade with premium guest amenities and year-round revenue programming.",
    outcomes: [
      "Delivered 11 months ahead of opening day",
      "Increased premium seating revenue by 28% in year one",
      "Achieved LEED Gold certification without schedule impact",
    ],
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Total Project Value", value: "$385M" },
      { label: "Change Order Variance", value: "<1%" },
      { label: "Fan Experience Score", value: "+18 pts" },
    ],
  },
  {
    title: "Riverfront Cultural Campus",
    sector: "Cultural & Arts",
    summary:
      "Multi-venue expansion featuring a world-class performing arts center, outdoor amphitheater, and gallery pavilion linked by a civic promenade.",
    outcomes: [
      "Coordinated 27 stakeholder groups across public and private funding sources",
      "Raised accessibility rating to ADA Platinum standard",
      "Delivered phased turnover allowing gala season to remain uninterrupted",
    ],
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Community Impact", value: "2.4M annual visitors" },
      { label: "Fundraising Goal", value: "105% achieved" },
      { label: "Operational Savings", value: "$4.1M / yr" },
    ],
  },
  {
    title: "Skyline Conference Resort",
    sector: "Hospitality & Tourism",
    summary:
      "Luxury convention resort with 1,100 keys, integrated entertainment district, and high-efficiency back-of-house systems for year-round activation.",
    outcomes: [
      "Secured operator onboarding 6 months pre-opening for seamless commissioning",
      "Negotiated GMP package that captured $12M in value engineering without design compromise",
      "Implemented digital twin for facilities team to streamline lifecycle maintenance",
    ],
    image:
      "https://images.unsplash.com/photo-1505876104694-5f0ef288b3c7?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Guest Satisfaction", value: "4.9 / 5" },
      { label: "Energy Savings", value: "18% vs. baseline" },
      { label: "Group Booking Lift", value: "+32%" },
    ],
  },
]

const differentiators = [
  {
    icon: Building,
    title: "Landmark-Scale Coordination",
    copy: "We interface with large design, construction, and specialty consultant teams so owners can focus on strategic decisions instead of daily escalation management.",
  },
  {
    icon: Users,
    title: "Stakeholder Diplomacy",
    copy: "Athletic departments, civic boards, hospitality operators, and community coalitions stay aligned through structured governance and transparent reporting.",
  },
  {
    icon: Award,
    title: "Performance Guarantees",
    copy: "Every milestone is tied to measurable outcomes—operational readiness plans, commissioning scorecards, and warranty close-out tracking—for long-term ROI.",
  },
]

export default function ProjectsPage() {
  return (
    <PageTemplate paddingY="none">
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-gradient-to-br from-[#00205B] via-[#000034] to-[#00205B] text-white">
        <div className="absolute inset-0 bg-black/15" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[3fr,2fr] items-start">
            <div className="space-y-6 text-center lg:text-left">
              <Badge className="bg-[#C5B783]/20 text-[#C5B783] border-[#C5B783]/30 font-medium tracking-wide uppercase w-fit mx-auto lg:mx-0">
                Selected Projects
              </Badge>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
                Landmark destinations delivered with measurable results
              </h1>
              <p className="text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0">
                From heritage stadiums to next-generation hospitality districts, Landmark Logix delivers complex programs
                with the rigor, discipline, and stakeholder stewardship they demand. Explore representative engagements
                that showcase our owner's representation model in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#00205B] bg-transparent font-medium"
                >
                  <Link href="/services">View Full Capabilities</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8 space-y-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="h-6 w-6 text-[#C5B783]" aria-hidden="true" />
                <span className="font-semibold tracking-wide uppercase text-sm text-slate-100">Program Snapshot</span>
              </div>
              <ul className="space-y-3 text-base text-slate-100">
                <li className="flex items-start gap-2">
                  <span className="text-[#C5B783] pt-1">•</span>
                  <span>$2B+ total project value represented in the past five years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C5B783] pt-1">•</span>
                  <span>Average 12% under initial budget while elevating scope outcomes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C5B783] pt-1">•</span>
                  <span>Zero major claims escalated to litigation since founding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContentSection spacing="lg" background="slate">
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <section
              key={study.title}
              className="grid gap-8 lg:grid-cols-[3fr,2fr] items-start rounded-2xl bg-white shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="p-8 space-y-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-golden">{study.sector}</p>
                <h2 className="text-3xl font-bold text-brand-navy text-balance">{study.title}</h2>
                <p className="text-brand-navy-deep text-lg leading-relaxed">{study.summary}</p>
                <div className="space-y-2">
                  <h3 className="font-semibold text-brand-navy">Highlights</h3>
                  <ul className="space-y-2 text-sm text-brand-navy-deep">
                    {study.outcomes.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6 p-6 bg-brand-golden/5" aria-label={`${study.title} imagery and metrics`}>
                <ImageWithFallback
                  src={study.image}
                  alt={`${study.title} project rendering`}
                  width={960}
                  height={640}
                  className="w-full rounded-xl object-cover"
                />
                <dl className="grid gap-4 sm:grid-cols-3">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-brand-golden/40 bg-white px-4 py-3 text-center">
                      <dt className="text-xs uppercase tracking-wide text-brand-navy/80">{stat.label}</dt>
                      <dd className="text-lg font-semibold text-brand-navy">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          ))}
        </div>
      </ContentSection>

      <ContentSection spacing="lg">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-8 bg-white space-y-6">
            <h2 className="text-2xl font-semibold text-brand-navy">How we keep landmark programs on track</h2>
            <p className="text-brand-navy-deep">
              Every engagement follows a structured owner's representation playbook—from investment case validation to
              transition-to-operations. Our team calibrates risk registers, procurement strategy, stakeholder governance,
              and operational readiness so you have a single source of accountability.
            </p>
            <ul className="text-sm text-brand-navy-deep space-y-2">
              <li>• Comprehensive program controls with transparent dashboards for leadership</li>
              <li>• Executive-level communications that keep boards, partners, and communities aligned</li>
              <li>• Integrated commissioning and turnover plans that prioritize day-one guest experience</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-8 bg-white space-y-8">
            <h2 className="text-2xl font-semibold text-brand-navy">Why owners trust Landmark Logix</h2>
            <div className="space-y-5">
              {differentiators.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <item.icon className="h-6 w-6 text-brand-golden" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-brand-navy">{item.title}</h3>
                    <p className="text-sm text-brand-navy-deep leading-relaxed">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection spacing="lg" background="slate">
        <div className="rounded-2xl bg-[#00205B] text-white p-10 text-center space-y-6">
          <Map className="h-10 w-10 mx-auto text-[#C5B783]" aria-hidden="true" />
          <h2 className="text-3xl font-bold">Ready to craft your next landmark?</h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Share your vision and we’ll curate an owner's representation plan tailored to the operational, financial, and
            experiential outcomes you need to achieve.
          </p>
          <Button asChild size="lg" className="bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold">
            <Link href="/contact#contact-form">Schedule a Consultation</Link>
          </Button>
        </div>
      </ContentSection>
    </PageTemplate>
  )
}

