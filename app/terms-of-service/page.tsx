import { PageTemplate } from "@/components/layout/page-template"

const lastUpdated = new Date("2025-01-01")

export default function TermsOfServicePage() {
  return (
    <PageTemplate maxWidth="3xl" paddingY="md">
      <article className="space-y-8 text-brand-navy-deep">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-wide text-brand-navy/70">Terms of Service</p>
          <h1 className="text-3xl font-bold text-brand-navy">Landmark Logix Engagement Terms</h1>
          <p className="text-sm text-slate-500">Last updated {lastUpdated.toLocaleDateString()}</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">1. Scope of Services</h2>
          <p>
            Landmark Logix provides owner's representation and project advisory services for complex construction and
            development projects. Detailed scopes, deliverables, and timelines are documented in individual proposals or
            master service agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">2. Professional Standards</h2>
          <p>
            We deliver services according to industry best practices, exercising the care, skill, and diligence expected
            from experienced professionals. Engagements rely on timely cooperation from client decision-makers and access
            to accurate project information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">3. Fees & Payment</h2>
          <p>
            Fees, retainers, and invoicing schedules are defined within each agreement. Unless otherwise stated, invoices
            are due within 30 days of receipt. Past-due balances may incur a late charge or temporary suspension of
            services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">4. Confidentiality</h2>
          <p>
            Both parties will treat non-public project information as confidential. We may share information with vetted
            partners assisting your project, provided they uphold equivalent confidentiality safeguards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">5. Intellectual Property</h2>
          <p>
            Landmark Logix retains ownership of methodologies, tools, and templates developed prior to or independent of
            your engagement. Materials produced specifically for your project become yours upon full payment of related
            fees.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Landmark Logix's aggregate liability is limited to the fees paid for
            the services giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">7. Governing Law</h2>
          <p>
            These terms are governed by the laws of the state in which the principal engagement agreement is executed,
            without regard to conflict-of-law provisions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">8. Contact</h2>
          <p>
            Questions about these terms can be directed to <a className="font-medium" href="mailto:legal@landmarklogix.com">legal@landmarklogix.com</a> or by calling
            <a className="font-medium" href="tel:+15551235263"> (555) 123-LAND</a>.
          </p>
        </section>
      </article>
    </PageTemplate>
  )
}

