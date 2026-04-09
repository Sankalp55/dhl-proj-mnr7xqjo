import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function PricingPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <p className="text-sm font-medium text-muted-foreground">Pricing</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Transparent pricing for every shipping stage.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Start simple, scale as you grow—clear plans for labels, tracking, and operational visibility. Use these
              demo tiers to compare capabilities, then request a quote for lane- and volume-based rates.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold shadow-sm hover:shadow-md transition-shadow"
              >
                Start with Standard
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-semibold hover:shadow-sm transition-shadow bg-background"
              >
                Explore services
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Toggle monthly/annual to estimate savings in a real product. (This demo page shows monthly pricing.)
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="Plans that match your volume"
            subheadline="Demo pricing. Annual billing typically saves ~15% for teams that ship consistently year-round."
            tiers={[
              {
                name: 'Starter',
                price: '$49',
                period: 'month',
                features: [
                  'Label creation',
                  'Basic tracking page',
                  'Email delivery updates',
                  'Standard support',
                ],
                ctaLabel: 'Choose Starter',
                ctaHref: '/contact',
              },
              {
                name: 'Standard',
                price: '$149',
                period: 'month',
                highlighted: true,
                features: [
                  'Everything in Starter',
                  'Exception alerts',
                  'Custom branding on tracking',
                  'Analytics dashboard',
                ],
                ctaLabel: 'Choose Standard',
                ctaHref: '/contact',
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'contact sales',
                features: [
                  'SLA & dedicated support',
                  'Advanced reporting',
                  'Custom workflows',
                  'Security & compliance review',
                ],
                ctaLabel: 'Contact sales',
                ctaHref: '/contact',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Compare features</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Pick the plan that fits your operational needs. If you manage multiple warehouses, need custom reporting,
              or require SLAs, Enterprise is typically the best fit.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-xl border bg-background shadow-sm">
            <div className="grid grid-cols-4 bg-muted px-6 py-4 text-sm font-semibold">
              <div className="col-span-1">Feature</div>
              <div className="text-center">Starter</div>
              <div className="text-center">Standard</div>
              <div className="text-center">Enterprise</div>
            </div>

            {[
              { feature: 'Label creation', starter: true, standard: true, enterprise: true },
              { feature: 'Branded tracking page', starter: false, standard: true, enterprise: true },
              { feature: 'Exception alerts', starter: false, standard: true, enterprise: true },
              { feature: 'Advanced analytics', starter: false, standard: true, enterprise: true },
              { feature: 'Dedicated support & SLA', starter: false, standard: false, enterprise: true },
            ].map((row) => (
              <div key={row.feature} className="grid grid-cols-4 px-6 py-4 border-t text-sm">
                <div className="col-span-1 font-medium">{row.feature}</div>
                <div className="text-center">{row.starter ? 'Yes' : '—'}</div>
                <div className="text-center">{row.standard ? 'Yes' : '—'}</div>
                <div className="text-center">{row.enterprise ? 'Yes' : '—'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="ROI that shows up in delivery performance"
            subheadline="Lower exceptions, faster resolution, and fewer delivery-status tickets—so your team can focus on growth."
            testimonials={[
              {
                quote:
                  'Switching to a clearer plan reduced our support tickets about delivery status by nearly a third.',
                name: 'Customer Experience Lead',
                role: 'Customer Experience',
                company: 'Initech',
              },
            ]}
          />
        </div>
      </section>

      <section id="faq" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Pricing FAQ"
            subheadline="Common questions about plans and billing."
            items={[
              {
                question: 'Is this pricing per shipment or per account?',
                answer:
                  'These demo plans are per account. Shipment costs vary by service level, lane, and package characteristics such as weight and dimensions.',
              },
              {
                question: 'Can I change plans later?',
                answer:
                  'Yes—upgrade or downgrade at any time. Enterprise plans are tailored to your volume, security needs, and operational workflows.',
              },
              {
                question: 'Do you offer discounts for high volume?',
                answer:
                  'Yes. Contact sales for volume-based pricing, lane optimization, and recommendations on service mix to balance speed and cost.',
              },
              {
                question: 'Do you support international shipping?',
                answer:
                  'Yes—international shipping is supported with documentation guidance and milestone tracking to reduce avoidable customs delays.',
              },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="Want a quote based on your lanes and volume?"
        description="Share your shipping profile and we’ll recommend the best plan and service mix for your timelines, destinations, and operational requirements."
        ctaLabel="Request a quote"
        ctaHref="/contact"
      />
    </>
  )
}
