import { PageTemplate } from "@/components/layout/page-template"

const lastUpdated = new Date("2025-03-01")

export default function TermsOfServicePage() {
  return (
    <PageTemplate maxWidth="2xl" paddingY="md">
      <article className="space-y-10 text-brand-navy-deep">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wide text-brand-navy/70">Terms of Service</p>
          <h1 className="text-3xl font-bold text-brand-navy">Landmark Logix engagement terms</h1>
          <p className="text-sm text-slate-500">Last updated {lastUpdated.toLocaleDateString()}</p>
          <p>
            These Terms of Service (“Terms”) govern the professional relationship between Landmark Logix (“we,” “our,” or
            “us”) and the client (“you” or “Client”). They apply to all proposals, statements of work, and master service
            agreements unless expressly superseded in writing.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">1. Scope of services</h2>
          <p>
            We provide owner's representation, advisory, and related project-management services for complex construction
            initiatives. The specific scope, deliverables, milestones, and commercial terms for each engagement are
            outlined in the governing proposal or agreement. Any changes to scope must be mutually agreed upon in writing
            through a change order or amended statement of work.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">2. Client responsibilities</h2>
          <p>
            Timely collaboration is essential to project performance. You agree to provide accurate information, designate
            empowered decision-makers, secure necessary approvals, and facilitate access to sites, systems, and project
            stakeholders. Delays or inaccuracies that impede delivery may require schedule adjustments or additional
            service fees.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">3. Fees and payment</h2>
          <p>
            Fees, retainers, reimbursable expenses, and invoicing schedules are specified in the governing agreement.
            Unless otherwise stated, invoices are due within thirty (30) days of receipt. Past-due balances may incur a
            finance charge, suspension of services, or adjustment of project milestones. You are responsible for taxes or
            duties associated with the engagement, excluding Landmark Logix’s income taxes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">4. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential information received in connection with the engagement confidential and
            to use it solely for purposes of performing under the agreement. We may disclose information to trusted
            subcontractors or consultants who assist the project, provided they are bound by obligations no less strict
            than those contained here.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">5. Intellectual property</h2>
          <p>
            Landmark Logix retains all rights to its pre-existing methodologies, tools, templates, and know-how. Work
            product created specifically for your project becomes your property once all associated fees are paid in full.
            Nothing in these Terms transfers proprietary rights in our underlying systems or proprietary data sets.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">6. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, our aggregate liability for any claim arising out of an engagement is
            limited to the fees actually paid to Landmark Logix for the services giving rise to the claim. We are not liable
            for indirect, incidental, consequential, special, punitive, or exemplary damages, including lost profits or
            business interruption, even if advised of the possibility of such damages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">7. Insurance and compliance</h2>
          <p>
            We maintain industry-standard professional liability, general liability, and workers’ compensation insurance
            and will provide certificates of insurance upon request. Each party will comply with applicable laws, codes,
            and regulations associated with the project.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">8. Termination</h2>
          <p>
            Either party may terminate the engagement for convenience with written notice as defined in the governing
            agreement. You are responsible for fees and approved expenses incurred through the effective termination date.
            We may terminate for cause if invoices remain unpaid or if contractual obligations are materially breached.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">9. Governing law and dispute resolution</h2>
          <p>
            These Terms are governed by the laws of the state identified in the primary agreement, without regard to its
            conflict-of-law provisions. The parties will first attempt in good faith to resolve disputes through executive
            mediation. If mediation is unsuccessful, the dispute may proceed to arbitration or litigation as specified in
            the governing agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">10. Contact</h2>
          <p>
            Questions regarding these Terms can be directed to <a className="font-medium" href="mailto:legal@landmarklogix.com">legal@landmarklogix.com</a> or by calling
            <a className="font-medium" href="tel:+12026435467"> (202) 643-5467</a>.
          </p>
        </section>
      </article>
    </PageTemplate>
  )
}

