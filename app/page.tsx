import { HeroAurora } from '@/components/blocks/HeroAurora'
import { LogoCloud } from '@/components/blocks/LogoCloud'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function HomePage() {
  return (
    <>
      <HeroAurora
        badge="Fast, reliable shipping—powered by precision logistics"
        headline="Ship smarter with DHL-grade logistics."
        subheadline="Express delivery, freight, and fulfillment—tracked end-to-end with modern tools, clear pricing, and global coverage. Get operational visibility your team can trust, from pickup to proof of delivery."
        primaryCta={{ label: 'Get a shipping quote', href: '/pricing' }}
        secondaryCta={{ label: 'Explore services', href: '/services' }}
      />

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <LogoCloud
            headline="Trusted by teams shipping worldwide"
            logos={[
              { name: 'Acme Retail', imageUrl: 'https://images.pexels.com/photos/4963438/pexels-photo-4963438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
              { name: 'Northwind', imageUrl: 'https://images.pexels.com/photos/36733413/pexels-photo-36733413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
              { name: 'Globex', imageUrl: 'https://images.pexels.com/photos/36733294/pexels-photo-36733294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
              { name: 'Initech', imageUrl: 'https://images.pexels.com/photos/36766683/pexels-photo-36766683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
              { name: 'Umbrella', imageUrl: 'https://images.pexels.com/photos/36766005/pexels-photo-36766005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
              { name: 'Stark Logistics', imageUrl: 'https://images.pexels.com/photos/8761333/pexels-photo-8761333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
            ]}
          />

          <div className="mt-12">
            <FeaturesGrid
              badge="Social proof"
              headline="A logistics partner built for speed, visibility, and reliability."
              subheadline="Whether you ship 20 orders a day or manage multi-warehouse distribution, you need consistent ETAs, clear exceptions, and reporting that helps you improve—not guess."
              features={[
                {
                  title: 'E-commerce brands',
                  description: 'Fast delivery SLAs and proactive exception handling that reduces “Where is my order?” tickets.',
                },
                {
                  title: 'Manufacturers',
                  description: 'Freight coordination with predictable lead times, milestone tracking, and documentation support.',
                },
                {
                  title: 'Enterprises',
                  description: 'Compliance-ready workflows, audit-friendly reporting, and escalation paths for time-critical shipments.',
                },
                {
                  title: 'Startups',
                  description: 'Simple onboarding and scalable pricing that grows with your volume and lane complexity.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesCards3D
            badge="Features"
            headline="Everything you need to move goods with confidence"
            subheadline="Clean workflows, real-time tracking, and operational clarity—designed for modern shipping teams that care about accuracy and customer experience."
            features={[
              {
                title: 'Real-time tracking',
                description: 'Live shipment status, milestone scans, and exception alerts so your team can act before delays become tickets.',
              },
              {
                title: 'Customs-ready docs',
                description: 'Generate commercial invoices and export documentation faster, with fewer manual handoffs and fewer errors.',
              },
              {
                title: 'Delivery performance analytics',
                description: 'On-time rates, lane performance, and cost breakdowns to identify bottlenecks and improve service levels.',
              },
              {
                title: 'Returns & reverse logistics',
                description: 'Streamlined returns labels and consolidated pickups that reduce cost and make customers more confident to buy again.',
              },
              {
                title: 'Warehouse fulfillment',
                description: 'Pick/pack workflows with inventory visibility—built for speed without sacrificing accuracy.',
              },
              {
                title: 'Priority support',
                description: 'Dedicated escalation paths for time-critical shipments, with clear ownership during exceptions.',
              },
            ]}
          />

          <div className="mt-12 rounded-xl border bg-background shadow-sm overflow-hidden">
            {/* Media block (Tailwind-only, no custom “Hero/Feature” component created) */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Visibility that turns shipping into an operational advantage
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Your customers judge delivery more than almost any other part of the experience. We help you set
                  expectations early, monitor progress in real time, and resolve exceptions quickly—so delivery becomes a
                  reason to trust your brand, not a source of churn.
                </p>
                <div className="mt-8">
                  <StatsCounter
                    stats={[
                      { label: 'Typical exception reduction', value: '20', suffix: '%' },
                      { label: 'Average time saved per week', value: '6', suffix: ' hrs' },
                      { label: 'Milestone visibility', value: 'End-to-end' },
                    ]}
                  />
                </div>
              </div>
              <div className="relative min-h-[280px] lg:min-h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/7964426/pexels-photo-7964426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Warehouse team scanning packages and preparing shipments"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="Integrations"
            headline="Integrations that fit your workflow"
            subheadline="Connect your store, ERP, and support tools—keep data consistent across shipping operations. This demo site has no backend; integrations are presented as capabilities."
            features={[
              { title: 'Shopify', description: 'Sync orders and create labels automatically to reduce manual entry.' },
              { title: 'WooCommerce', description: 'Rate shopping and tracking updates that keep customers informed.' },
              { title: 'SAP', description: 'Operational reporting and shipment references aligned to your processes.' },
              { title: 'NetSuite', description: 'Fulfillment status and cost allocation for clean finance reporting.' },
              { title: 'Zendesk', description: 'Tracking links and delivery updates visible directly in tickets.' },
              { title: 'Slack', description: 'Exception alerts and daily shipping summaries in the channels you use.' },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="Plans that match your volume"
            subheadline="Clear plans for labels, tracking, and operational visibility. Demo pricing shown—request a quote for lane- and volume-based rates."
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
                period: 'talk to sales',
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
          <TestimonialsAnimated
            headline="Teams rely on DHL logistics for speed and visibility"
            subheadline="Operational confidence from pickup to proof of delivery—especially when timelines are tight and exceptions are expensive."
            testimonials={[
              {
                quote:
                  'We reduced delivery exceptions by 28% in the first month thanks to proactive alerts and clearer tracking.',
                name: 'Operations Manager',
                role: 'Operations',
                company: 'Acme Retail',
              },
              {
                quote:
                  'The pricing is transparent and the service is consistent—our customers noticed the improvement immediately.',
                name: 'Head of Fulfillment',
                role: 'Fulfillment',
                company: 'Northwind',
              },
              {
                quote:
                  'International shipments became predictable. Customs documentation and milestone tracking saved our team hours weekly.',
                name: 'Logistics Lead',
                role: 'Logistics',
                company: 'Globex',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Shipping & service FAQ"
            subheadline="A few common questions teams ask when evaluating a logistics partner."
            items={[
              {
                question: 'Do you support both parcel and freight shipments?',
                answer:
                  'Yes. We support express parcel as well as air, ocean, and road freight. The right approach depends on your lanes, timeline, and shipment profile (weight, dimensions, and handling requirements).',
              },
              {
                question: 'How do exception alerts work?',
                answer:
                  'When a shipment misses a milestone or shows risk signals (delay scans, route changes, customs holds), alerts surface in your workflow so your team can intervene early—often before the customer notices.',
              },
              {
                question: 'Can you help with customs documentation?',
                answer:
                  'Yes. We help teams prepare common cross-border documents such as commercial invoices and export paperwork, and we provide guidance to reduce avoidable holds and rework.',
              },
              {
                question: 'Is there a minimum volume to get started?',
                answer:
                  'No. Starter and Standard plans are designed for smaller and growing teams. Enterprise plans are tailored for high-volume and multi-warehouse operations with SLA requirements.',
              },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="Ready to ship with confidence?"
        description="Compare plans, get a quote, and start moving packages with DHL-grade reliability—plus the tracking and reporting your team needs to stay ahead of exceptions."
        ctaLabel="View pricing"
        ctaHref="/pricing"
      />
    </>
  )
}
