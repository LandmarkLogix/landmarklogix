import { PageTemplate } from "@/components/layout/page-template"
import { ContentSection } from "@/components/layout/content-section"
import { HeroTemplate } from "@/components/layout/hero-template"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TemplateExamplePage() {
  return (
    <PageTemplate>
      <HeroTemplate
        subtitle="Master Template Example"
        title="Professional Page Template"
        description="This demonstrates how to use the master page template with flexible content sections, proper spacing, and mobile-responsive design."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
      />

      <ContentSection spacing="lg">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-brand-navy mb-3">Flexible Layout</h3>
            <p className="text-brand-navy-deep mb-4">
              The template supports various content layouts and can be easily customized for different page types.
            </p>
            <Link href="#" className="text-brand-navy hover:text-brand-golden font-medium">
              Learn more →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-brand-navy mb-3">Mobile Responsive</h3>
            <p className="text-brand-navy-deep mb-4">
              Built with mobile-first design principles ensuring perfect display across all devices.
            </p>
            <Link href="#" className="text-brand-navy hover:text-brand-golden font-medium">
              Learn more →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-brand-navy mb-3">Professional Styling</h3>
            <p className="text-brand-navy-deep mb-4">
              Consistent branding and professional appearance that matches your business identity.
            </p>
            <Link href="#" className="text-brand-navy hover:text-brand-golden font-medium">
              Learn more →
            </Link>
          </div>
        </div>
      </ContentSection>

      <ContentSection spacing="lg" background="slate">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-brand-navy-deep mb-8">
            Use this template as the foundation for all your pages by simply changing the content within the main area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-brand-navy hover:bg-brand-navy-deep text-white font-medium">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-brand-navy-deep hover:bg-slate-50 bg-transparent"
              >
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </ContentSection>
    </PageTemplate>
  )
}
