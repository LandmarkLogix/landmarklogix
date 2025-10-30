import Link from "next/link"

import { PageTemplate } from "@/components/layout/page-template"

const sections = [
  {
    heading: "Core Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/services", label: "Services" },
      { href: "/markets", label: "Markets" },
      { href: "/why-choose-us", label: "Why Choose Us" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Service Groups",
    links: [
      { href: "/services/strategic-planning", label: "Strategic Planning & Advisory" },
      { href: "/services/procurement-financial", label: "Procurement & Financial Management" },
      { href: "/services/contract-risk", label: "Contract Administration & Risk" },
      { href: "/services/design-regulatory", label: "Design & Regulatory Management" },
      { href: "/services/construction-quality", label: "Construction Management & Quality" },
      { href: "/services/technology-transition", label: "Technology Integration & Transition" },
    ],
  },
  {
    heading: "Reference",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
    ],
  },
]

export default function SiteMapPage() {
  return (
    <PageTemplate maxWidth="2xl" paddingY="md">
      <article className="space-y-10 text-brand-navy-deep">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-wide text-brand-navy/70">Site Map</p>
          <h1 className="text-3xl font-bold text-brand-navy">Navigate Landmark Logix</h1>
          <p className="text-sm text-slate-500">
            Quick links to every public page so you can jump straight where you need to go.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <section key={section.heading} className="rounded-lg border border-slate-200 bg-white/60 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-brand-navy mb-4">{section.heading}</h2>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-brand-navy hover:text-brand-golden transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </article>
    </PageTemplate>
  )
}

