import { PageTemplate } from "@/components/layout/page-template"

const lastUpdated = new Date("2025-03-01")

export default function PrivacyPolicyPage() {
  return (
    <PageTemplate maxWidth="2xl" paddingY="md">
      <article className="space-y-10 text-brand-navy-deep">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wide text-brand-navy/70">Privacy Policy</p>
          <h1 className="text-3xl font-bold text-brand-navy">Protecting your information is part of how we protect your projects</h1>
          <p className="text-sm text-slate-500">Last updated {lastUpdated.toLocaleDateString()}</p>
          <p>
            This Privacy Policy explains how Landmark Logix (“we,” “our,” or “us”) collects, uses, and safeguards personal
            information obtained through our website, consultations, and professional services. It also outlines your
            choices regarding the information you share with us.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">1. Information we collect</h2>
          <p>
            We collect information directly from you when you complete a form, request a consultation, subscribe to
            updates, or collaborate with our team. Depending on the interaction, this may include:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Identity and contact details such as name, email address, phone number, and company affiliation.</li>
            <li>Project information including facility type, budget range, schedule expectations, and stakeholder lists.</li>
            <li>Communications, notes, and supporting documents you choose to share with us during discovery or delivery.</li>
            <li>Technical data such as IP address and browser characteristics captured through standard web analytics.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">2. How we use your information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Respond to inquiries, schedule consultations, and prepare tailored proposals.</li>
            <li>Deliver, manage, and improve our owner's representation and advisory services.</li>
            <li>Send project updates, industry insights, or event invitations when you opt in.</li>
            <li>Maintain administrative records, comply with contractual obligations, and meet legal requirements.</li>
          </ul>
          <p>We do not sell or rent your personal information.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">3. When we share information</h2>
          <p>
            We share personal information only when necessary to support your project or operate our business. Examples
            include:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Engaging trusted consultants, legal advisors, or technology partners who assist with project delivery or
              business operations. These partners are bound by confidentiality commitments and may only use the
              information for the services they provide.
            </li>
            <li>Complying with applicable laws, responding to lawful requests, or enforcing our agreements and policies.</li>
            <li>
              Completing a merger, acquisition, financing, or sale of assets—only to the extent the transaction requires
              relevant information to proceed responsibly.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">4. Data security</h2>
          <p>
            We implement administrative, technical, and physical safeguards designed to protect the information we hold.
            These precautions include access controls, encryption for sensitive systems, secure file transfer protocols,
            and employee training. While no security program can eliminate risk entirely, we continually assess and refine
            our controls to stay ahead of evolving threats.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">5. Data retention</h2>
          <p>
            We retain personal information only as long as necessary to fulfill the purposes described in this policy—including
            delivering services, maintaining business records, complying with legal obligations, resolving disputes, and
            enforcing agreements. When data is no longer needed, we securely delete or anonymize it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">6. Your choices and rights</h2>
          <p>You may request the following at any time:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Access to the personal information we hold about you.</li>
            <li>Corrections to inaccurate or incomplete information.</li>
            <li>Deletion of information when we no longer need it, subject to legal or contractual requirements.</li>
            <li>Updates to your communication preferences or withdrawal of marketing consent.</li>
          </ul>
          <p>
            To exercise these rights, email <a className="font-medium" href="mailto:privacy@landmarklogix.com">privacy@landmarklogix.com</a>. We may need to verify your identity
            before completing certain requests.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">7. International visitors</h2>
          <p>
            Landmark Logix operates in the United States. If you access our services from outside the U.S., you
            acknowledge that your information may be transferred to, stored in, and processed in the United States or other
            jurisdictions where our partners operate. We take steps to ensure cross-border transfers comply with
            applicable data-protection requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">8. Policy updates</h2>
          <p>
            We may update this Privacy Policy to reflect regulatory changes, industry best practices, or improvements to
            our services. When updates occur, we will revise the “Last updated” date above. Material changes will be
            communicated through our website or directly to affected contacts.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-brand-navy">9. Contact us</h2>
          <p>
            Questions or concerns? Email <a className="font-medium" href="mailto:privacy@landmarklogix.com">privacy@landmarklogix.com</a> or call
            <a className="font-medium" href="tel:+12026435467"> (202) 643-5467</a>. We aim to respond within one business day.
          </p>
        </section>
      </article>
    </PageTemplate>
  )
}

