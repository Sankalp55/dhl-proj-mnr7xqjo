import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <p className="text-sm font-medium text-muted-foreground">Services</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Logistics services built for global delivery.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Express, freight, fulfillment, and returns—supported by tracking, documentation, and operational analytics.
              Choose the service mix that matches your lanes, timelines, and shipment profiles, then scale with clearer
              visibility and fewer exceptions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold shadow-sm hover:shadow-md transition-shadow"
              >
                Talk to an expert
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
            badge="Core offerings"
            headline="Choose the right service for your operation"
            subheadline="From time-definite parcel to consolidated freight and multi-warehouse fulfillment, our services are designed to stay predictable under real-world conditions."
            features={[
              {
                title: 'Express Parcel',
                description:
                  'Time-definite delivery with end-to-end tracking, signature options, and proactive exception handling.',
              },
              {
                title: 'Air & Ocean Freight',
                description:
                  'Flexible freight solutions with consolidated options, milestone visibility, and predictable handoffs.',
              },
              {
                title: 'Road Freight',
                description:
                  'Regional distribution with scheduled pickups, linehaul coordination, and clear ETAs for receivers.',
              },
              {
                title: 'Warehousing & Fulfillment',
                description:
                  'Pick/pack workflows, inventory visibility, and fast dispatch designed for e-commerce and D2C growth.',
              },
              {
                title: 'Customs & Compliance',
                description:
                  'Documentation guidance and export/import readiness to reduce delays on common cross-border lanes.',
              },
              {
                title: 'Returns Management',
                description:
                  'Customer-friendly returns labels, consolidated processing, and reporting that helps reduce return costs.',
              },
            ]}
          />
        </div>
      </section>

      <section id="how-it-works" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How it works</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A simple, repeatable flow for consistent delivery performance. Teams use this process to standardize
              labeling and documentation, reduce avoidable exceptions, and improve on-time delivery across lanes.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Plan',
                description: 'Select service level, lanes, and pickup schedule based on timeline and cost targets.',
              },
              {
                title: 'Ship',
                description: 'Create labels, attach docs, and hand off at pickup with clear scan expectations.',
              },
              {
                title: 'Track',
                description: 'Monitor milestones and receive exception alerts when something deviates from plan.',
              },
              {
                title: 'Deliver',
                description: 'Capture proof of delivery and review performance reporting to improve future shipments.',
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl border bg-background shadow-sm overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/36712901/pexels-photo-36712901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Logistics dashboard on a laptop with shipping analytics"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">Integrations</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Plug into your stack</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Keep orders, tracking, and customer updates aligned across tools. In production, these capabilities are
                typically delivered via API connectors, file-based workflows, or partner apps—this demo site simply
                showcases what’s possible.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4">
                {[
                  {
                    name: 'Shopify / WooCommerce',
                    description: 'Auto-import orders and push tracking updates to customer notifications.',
                  },
                  {
                    name: 'ERP (SAP / NetSuite)',
                    description: 'Reference numbers, cost allocation, and reporting aligned to finance and ops.',
                  },
                  {
                    name: 'Support (Zendesk)',
                    description: 'Tracking links and delivery status embedded directly in customer tickets.',
                  },
                ].map((item) => (
                  <div key={item.name} className="rounded-xl border bg-background p-5 shadow-sm">
                    <div className="font-semibold tracking-tight">{item.name}</div>
                    <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Note: No backend is used for this demo site—integrations are presented as capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASparkles
        headline="Need a tailored logistics plan?"
        description="Tell us your lanes, volumes, and timelines—we’ll recommend the best service mix for speed, cost, and reliability."
        ctaLabel="Request a consultation"
        ctaHref="/contact"
      />
    </>
  )
}
