import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function ServicesPage() {
  return (
    <div>
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-muted-foreground">Services</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Logistics services built for speed, scale, and certainty.
            </h1>
            <p className="mt-4 text-muted-foreground">
              Choose the right mix of express, freight, and fulfillment—backed by tracking,
              compliance support, and operational clarity. Whether you ship parcels daily or manage
              multi-lane freight, we help you reduce exceptions and keep delivery promises.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
              >
                Talk to a Specialist
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold hover:shadow-md transition-shadow"
              >
                See Pricing
              </a>
            </div>
          </div>

          <div className="rounded-xl border shadow-sm overflow-hidden bg-card">
            {/* Using native img to avoid extra dependencies */}
            <img
              src="https://images.pexels.com/photos/7876662/pexels-photo-7876662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Delivery van and packages in urban setting"
              className="h-[320px] md:h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="service-categories" className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="Core services"
            headline="Core service categories"
            subheadline="Pick a service lane, then tailor speed, coverage, and handling requirements. We’ll help you balance cost, transit time, and customer expectations."
            features={[
              {
                title: 'DHL Express',
                description:
                  'Time-definite international delivery with end-to-end tracking, delivery confirmation, and proactive exception handling.',
                icon: 'Timer',
              },
              {
                title: 'DHL Freight',
                description:
                  'Road freight solutions for regional and cross-border shipping with predictable transit times and consistent milestones.',
                icon: 'Truck',
              },
              {
                title: 'DHL Global Forwarding',
                description:
                  'Air and ocean freight forwarding with consolidation, routing optimization, and milestone visibility across lanes.',
                icon: 'Ship',
              },
              {
                title: 'DHL Supply Chain',
                description:
                  'Warehousing, fulfillment, and value-added services to support growth, seasonal peaks, and multi-node distribution.',
                icon: 'Boxes',
              },
            ]}
          />
        </div>
      </section>

      <section id="how-it-works" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How shipping works with DHL
            </h2>
            <p className="mt-3 text-muted-foreground">
              A simple, repeatable flow from quote to delivery—optimized for fewer exceptions and
              clearer accountability at every step.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '1) Quote & lane review',
                description:
                  'Share origin/destination, dimensions, and service level. We recommend the best option based on SLA, cost, and constraints.',
              },
              {
                title: '2) Labeling & pickup',
                description:
                  'Generate labels, schedule pickup, and verify packaging requirements. For cross-border, confirm documentation before handoff.',
              },
              {
                title: '3) In-transit tracking',
                description:
                  'Monitor milestones with proactive alerts. When exceptions occur, teams can act quickly with clear status updates.',
              },
              {
                title: '4) Customs clearance (if needed)',
                description:
                  'Use documentation guidance and compliance checks to reduce clearance delays and prevent avoidable holds.',
              },
              {
                title: '5) Delivery & proof',
                description:
                  'Delivery confirmation and proof of delivery support customer communication, claims handling, and SLA reporting.',
              },
              {
                title: '6) Review & optimize',
                description:
                  'Use lane performance and spend visibility to tune service mix—improving on-time delivery while controlling cost.',
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="integrations" className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="Automation"
            headline="Integrations & automation"
            subheadline="Reduce manual work with platform connections and shipping rules—so teams can ship faster with fewer errors."
            features={[
              {
                title: 'Automated label creation',
                description:
                  'Create labels from order data and apply service rules based on destination, promised delivery date, and handling requirements.',
                icon: 'QrCode',
              },
              {
                title: 'Tracking notifications',
                description:
                  'Send branded tracking links and delivery updates to customers automatically to reduce support volume and increase trust.',
                icon: 'Bell',
              },
              {
                title: 'Returns workflows',
                description:
                  'Generate return labels, route items to the right facility, and keep status visible from initiation to disposition.',
                icon: 'Undo2',
              },
              {
                title: 'Reporting exports',
                description:
                  'Export shipment data for finance and operations reviews—supporting forecasting, reconciliation, and SLA measurement.',
                icon: 'FileDown',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Services FAQ"
            subheadline="Clarify service selection, timelines, and how we recommend the right mix."
            items={[
              {
                question: 'How do I choose between express and freight?',
                answer:
                  'Use express for time-critical, smaller shipments where delivery date certainty matters most. Use freight/forwarding for bulk movement where cost optimization and consolidation provide the best value.',
              },
              {
                question: 'Can you support seasonal peaks?',
                answer:
                  'Yes. Many teams combine fulfillment capacity planning with lane-based shipping rules to handle peak volume while maintaining on-time performance.',
              },
              {
                question: 'Do you provide proactive exception alerts?',
                answer:
                  'Exception visibility is a core focus: tracking milestones and alerts help teams intervene early, communicate clearly, and reduce downstream support work.',
              },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="Not sure which service fits?"
        description="Tell us your lanes and volume—get a recommended plan in one conversation, with clear next steps and realistic timelines."
        ctaLabel="Get Recommendations"
        ctaHref="/contact"
      />
    </div>
  )
}
