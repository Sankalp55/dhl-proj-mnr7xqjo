import { ContactForm } from '@/components/blocks/ContactForm'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function ContactPage() {
  return (
    <div>
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">Contact</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Get in touch for quotes, support, or service guidance.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Send your shipment details and goals—our team will respond with next steps. This demo
            uses a client-side form only (no API routes, no server actions, no database).
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
            >
              Send Message
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold hover:shadow-md transition-shadow"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <ContactForm
            headline="Request a quote or ask a question"
            subheadline="Provide lane, volume, and service needs for the fastest response. If this is urgent, include a phone number and your preferred pickup window."
            contactInfo={[
              { label: 'Sales', value: 'sales@dhl.example' },
              { label: 'Support', value: 'support@dhl.example' },
              { label: 'Phone', value: '+1 (555) 123-4567' },
            ]}
          />
          <div className="mt-6 rounded-xl border bg-card p-4 text-sm text-muted-foreground shadow-sm">
            <p className="font-medium text-foreground">Demo notice</p>
            <p className="mt-1">
              Submissions stay in the browser. If you need this form to send email, connect a third-party
              form endpoint (e.g., Formspree) on the client side.
            </p>
          </div>
        </div>
      </section>

      <section id="contact-details" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="Contact options"
            headline="Contact details"
            subheadline="Use the channel that fits your urgency. For quotes, include origin, destination, dimensions/weight, frequency, and target delivery date."
            features={[
              {
                title: 'Sales',
                description: 'sales@dhl.example • Mon–Fri, 9am–6pm',
                icon: 'Mail',
              },
              {
                title: 'Support',
                description: 'support@dhl.example • Tracking and delivery questions',
                icon: 'LifeBuoy',
              },
              {
                title: 'Phone',
                description: '+1 (555) 123-4567 • Priority routing for urgent shipments',
                icon: 'Phone',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Contact FAQ"
            subheadline="Quick answers before you submit."
            items={[
              {
                question: 'What information should I include for a quote?',
                answer:
                  'Origin, destination, dimensions/weight, shipment frequency, and desired delivery speed (express vs economy). If there are handling constraints, include them as well.',
              },
              {
                question: 'Do you support international customs?',
                answer:
                  'Yes—customs documentation guidance and clearance support are available depending on service and lane.',
              },
              {
                question: 'How quickly will I hear back?',
                answer:
                  'Typically within 1 business day. Urgent shipments should include a phone number for faster follow-up.',
              },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="Need a recommendation fast?"
        description="We’ll help you choose the right service level and route for your shipment—based on delivery targets, cost constraints, and handling needs."
        ctaLabel="Request a Quote"
        ctaHref="#contact-form"
      />
    </div>
  )
}
