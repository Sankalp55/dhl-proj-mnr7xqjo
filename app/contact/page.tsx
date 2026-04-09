import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { ContactForm } from '@/components/blocks/ContactForm'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <p className="text-sm font-medium text-muted-foreground">Contact</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Contact DHL Logistics</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Get a quote, ask about services, or request a consultation. We’ll respond within 1–2 business days. For the
              fastest routing, choose a topic that matches your request—sales, support, or partnerships.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold shadow-sm hover:shadow-md transition-shadow"
              >
                Send a message
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-semibold hover:shadow-sm transition-shadow bg-background"
              >
                View pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="Contact options"
            headline="How can we help?"
            subheadline="Choose the fastest path to resolution so your request reaches the right team."
            features={[
              {
                title: 'Sales & quotes',
                description: 'Discuss lanes, volumes, and service levels to get a tailored recommendation.',
              },
              {
                title: 'Support',
                description: 'Shipment status questions and delivery exceptions—share tracking details for faster help.',
              },
              {
                title: 'Partnerships',
                description: 'Integrations, marketplaces, and enterprise programs for larger shipping ecosystems.',
              },
            ]}
          />
        </div>
      </section>

      <section id="contact-form" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ContactForm
            headline="Send us a message"
            subheadline="Client-side form only (no database). Submit to see a confirmation—no network request is required for this demo."
            contactInfo={[
              { label: 'Response time', value: '1–2 business days' },
              { label: 'Coverage', value: 'Domestic + international lanes' },
              { label: 'Best for', value: 'Express, freight, fulfillment, and returns' },
            ]}
          />

          <div className="mt-6 max-w-3xl text-sm text-muted-foreground">
            By submitting, you agree to be contacted about your request. For this demo experience, the form is client-side
            only and does not store your information.
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Contact FAQ"
            subheadline="Quick answers before you reach out."
            items={[
              {
                question: 'How quickly will you respond?',
                answer:
                  'Typically within 1–2 business days. Urgent shipment issues should be marked as Support so they route correctly.',
              },
              {
                question: 'What info helps you quote faster?',
                answer:
                  'Origin/destination, shipment frequency, average weight/dimensions, and service level needs (express vs economy, freight vs parcel).',
              },
              {
                question: 'Do you support international shipping and customs?',
                answer:
                  'Yes. We can advise on documentation and compliance requirements for common lanes and help reduce avoidable customs delays.',
              },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="Prefer to compare plans first?"
        description="Review pricing and feature comparisons, then request a quote when you’re ready to share lanes and volume."
        ctaLabel="View pricing"
        ctaHref="/pricing"
      />
    </>
  )
}
