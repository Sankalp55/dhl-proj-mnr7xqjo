import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function PricingPage() {
  return (
    <div>
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-muted-foreground">Pricing</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Transparent pricing for every shipping stage.
            </h1>
            <p className="mt-4 text-muted-foreground">
              Start with simple tiers, then tailor lanes, speed, and handling. For many teams,
              predictable pricing plus better tracking reduces exceptions and lowers total operating
              cost.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
              >
                Request a Custom Quote
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold hover:shadow-md transition-shadow"
              >
                Compare Services
              </a>
            </div>

            <div className="mt-6 rounded-xl border bg-card p-4 text-sm text-muted-foreground shadow-sm">
              <p className="font-medium text-foreground">Planning note</p>
              <p className="mt-1">
                This demo uses straightforward monthly pricing. In practice, final rates depend on
                lanes, volume, service mix, and handling requirements. We’ll confirm a tailored rate
                card during the quote call.
              </p>
            </div>
          </div>

          <div className="rounded-xl border shadow-sm overflow-hidden bg-card">
            <img
              src="https://images.pexels.com/photos/36733323/pexels-photo-36733323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Warehouse worker scanning packages"
              className="h-[320px] md:h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="Choose a plan"
            subheadline="Ideal for SMB to enterprise—scale up when volume grows. Ask us about annual planning and lane-based discounts."
            tiers={[
              {
                name: 'Starter',
                price: '$49',
                period: 'month',
                features: [
                  'Discounted express rates',
                  'Basic tracking dashboard',
                  'Email delivery notifications',
                  'Standard support',
                ],
                ctaLabel: 'Start Starter',
                ctaHref: '/contact',
              },
              {
                name: 'Growth',
                price: '$149',
                period: 'month',
                features: [
                  'Better lane-based discounts',
                  'Automation rules (service selection)',
                  'Returns workflows',
                  'Priority support',
                ],
                ctaLabel: 'Choose Growth',
                ctaHref: '/contact',
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'rate card',
                features: [
                  'Custom rate cards & SLAs',
                  'Dedicated account management',
                  'Advanced reporting exports',
                  'Integration consultation',
                ],
                ctaLabel: 'Talk to Sales',
                ctaHref: '/contact',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Compare what’s included
            </h2>
            <p className="mt-3 text-muted-foreground">
              A quick view of capabilities across tiers. If you need dedicated support, custom SLAs,
              or advanced exports, Enterprise is typically the best fit.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-xl border bg-card shadow-sm">
            <div className="grid grid-cols-4 border-b bg-muted">
              {['Feature', 'Starter', 'Growth', 'Enterprise'].map((h) => (
                <div key={h} className="p-4 text-sm font-semibold">
                  {h}
                </div>
              ))}
            </div>

            {[
              { feature: 'Express shipping discounts', starter: true, growth: true, enterprise: true },
              { feature: 'Freight forwarding support', starter: false, growth: true, enterprise: true },
              { feature: 'Automation rules', starter: false, growth: true, enterprise: true },
              { feature: 'Returns portal workflows', starter: false, growth: true, enterprise: true },
              { feature: 'Advanced analytics exports', starter: false, growth: true, enterprise: true },
              { feature: 'Dedicated account manager', starter: false, growth: false, enterprise: true },
            ].map((row) => (
              <div key={row.feature} className="grid grid-cols-4 border-b last:border-b-0">
                <div className="p-4 text-sm">{row.feature}</div>
                {[row.starter, row.growth, row.enterprise].map((v, idx) => (
                  <div key={idx} className="p-4 text-sm text-muted-foreground">
                    <span className="text-foreground">{v ? 'Included' : '—'}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsAnimated
        headline="Pricing that pays for itself"
        subheadline="Lower exception rates and better visibility reduce operational costs—especially when shipping volume increases."
        testimonials={[
          {
            quote:
              'After switching to a structured plan, our shipping spend became predictable and our on-time rate improved.',
            name: 'Finance Director',
            role: 'AutoWorks',
            company: 'Finance',
          },
        ]}
      />

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Pricing FAQ"
            subheadline="Common questions about tiers, discounts, and customization."
            items={[
              {
                question: 'Do you offer volume discounts?',
                answer:
                  'Yes—discounts improve with shipment volume, lanes, and service mix. Request a quote for a tailored rate card aligned to your destinations and SLAs.',
              },
              {
                question: 'Can I mix express and freight services?',
                answer:
                  'Absolutely. Many teams use express for time-critical shipments and freight/forwarding for cost-optimized bulk movement.',
              },
              {
                question: 'What’s included in Enterprise?',
                answer:
                  'Custom SLAs, dedicated support, reporting exports, and integration consultation based on your operational needs and systems.',
              },
              {
                question: 'Is there a free trial?',
                answer:
                  'This site provides plan guidance; final pricing and onboarding are handled via a quote request and service setup call.',
              },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="Get a quote aligned to your lanes and SLAs"
        description="Share shipment volume and destinations—receive a recommended plan and estimated costs, with clear next steps for onboarding."
        ctaLabel="Request Quote"
        ctaHref="/contact"
      />
    </div>
  )
}
