import { PageTemplate } from "@/components/layout/page-template"

const lastUpdated = new Date("2025-01-01")

export default function PrivacyPolicyPage() {
  return (
    <PageTemplate maxWidth="3xl" paddingY="md">
      <article className="space-y-8 text-brand-navy-deep">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-wide text-brand-navy/70">Privacy Policy</p>
          <h1 className="text-3xl font-bold text-brand-navy">How Landmark Logix Handles Your Information</h1>
          <p className="text-sm text-slate-500">Last updated {lastUpdated.toLocaleDateString()}</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">1. Information We Collect</h2>
          <p>
            We collect the information you share with us when you request a consultation, subscribe to updates, or
            communicate with our team. This may include your name, organization details, contact information, project
            requirements, and any notes you include in correspondence.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">2. How We Use Your Information</h2>
          <p>
            Landmark Logix uses your information solely to respond to inquiries, prepare proposals, deliver project
            services, and maintain our business records. We do not sell or rent your personal information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">3. Sharing with Trusted Partners</h2>
          <p>
            When necessary to service your project, we may share relevant details with trusted consultants, legal
            advisors, or technology partners who support our operations. These partners follow strict confidentiality
            requirements and only receive the information needed to perform their role.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">4. Data Retention & Security</h2>
          <p>
            We retain project communications for as long as required to deliver services and comply with legal, tax, or
            compliance obligations. Safeguards—both technical and procedural—are in place to protect your information
            against unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">5. Your Choices</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Request a copy of the information we hold about you.</li>
            <li>Ask us to update or correct inaccurate information.</li>
            <li>Withdraw consent or request deletion of your data where legally permissible.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-brand-navy">6. Contact Us</h2>
          <p>
            For privacy questions, please email <a className="font-medium" href="mailto:privacy@landmarklogix.com">privacy@landmarklogix.com</a> or call
            <a className="font-medium" href="tel:+15551235263"> (555) 123-LAND</a>. We aim to respond within one business day.
          </p>
        </section>

        <p className="text-sm text-slate-500">
          Landmark Logix may update this policy periodically to reflect regulatory, operational, or technological
          changes. We encourage you to review it regularly.
        </p>
      </article>
    </PageTemplate>
  )
}

