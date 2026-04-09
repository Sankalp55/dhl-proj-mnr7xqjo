import { HeroAurora } from '@/components/blocks/HeroAurora'
import { LogoCloud } from '@/components/blocks/LogoCloud'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function HomePage() {
  return (
    <div>
      {/* Hero (preferred: gradient/blob feel via Aurora hero) */}
      <HeroAurora
        badge="Fast, reliable shipping—built for modern operations"
        headline="Ship smarter with DHL—express, freight, and fulfillment in one platform."
        subheadline="Get predictable delivery, real-time tracking, and scalable logistics with a bold, modern experience built for speed and reliability. From single parcels to multi-lane freight, we help teams reduce exceptions and keep customers informed."
        primaryCta={{ label: 'Get a Quote', href: '/contact' }}
        secondaryCta={{ label: 'Explore Services', href: '/services' }}
      />

      {/* Social proof */}
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Trusted by teams that ship at scale
            </h2>
            <p className="mt-3 text-muted-foreground">
              From eCommerce brands to enterprise supply chains—DHL supports time-critical deliveries
              worldwide with consistent service levels, clear milestones, and proactive issue
              handling.
            </p>
          </div>

          <LogoCloud
            headline="Shipping teams across industries rely on predictable delivery"
            logos={[
              { name: 'Global Retail Co.', imageUrl: '/logos/global-retail-co.svg' },
              { name: 'AeroParts', imageUrl: '/logos/aeroparts.svg' },
              { name: 'MedSupply', imageUrl: '/logos/medsupply.svg' },
              { name: 'AutoWorks', imageUrl: '/logos/autoworks.svg' },
              { name: 'CloudCommerce', imageUrl: '/logos/cloudcommerce.svg' },
            ]}
          />

          <StatsCounter
            stats={[
              { label: 'Countries served', value: '220', suffix: '+' },
              { label: 'Avg. on-time delivery', value: '98.7', suffix: '%' },
              { label: 'Shipments tracked daily', value: 'Millions' },
            ]}
          />
        </div>
      </section>

      {/* Features (3D cards) */}
      <FeaturesCards3D
        badge="Capabilities"
        headline="Everything you need to move goods faster"
        subheadline="A clean, technical toolkit for shipping, freight, warehousing, and returns—designed for clarity and control across every shipment."
        features={[
          {
            title: 'Express Shipping',
            description:
              'Time-definite delivery options with proactive exception handling, signature confirmation, and clear proof of delivery.',
            icon: 'Zap',
          },
          {
            title: 'Freight & Forwarding',
            description:
              'Air, ocean, and road freight with consolidated routing, milestone visibility, and lane-level performance insights.',
            icon: 'Plane',
          },
          {
            title: 'Warehousing & Fulfillment',
            description:
              'Pick/pack, inventory visibility, and scalable storage designed to absorb seasonal peaks without losing SLA discipline.',
            icon: 'Warehouse',
          },
          {
            title: 'Customs & Compliance',
            description:
              'Documentation guidance, HS code support, and streamlined clearance workflows to reduce border delays.',
            icon: 'ShieldCheck',
          },
          {
            title: 'Returns & Reverse Logistics',
            description:
              'Branded returns experiences with label generation, automated disposition rules, and facility routing.',
            icon: 'RotateCcw',
          },
          {
            title: 'Analytics & Cost Controls',
            description:
              'Lane performance dashboards, spend visibility, and SLA reporting to optimize service mix and reduce exceptions.',
            icon: 'BarChart3',
          },
        ]}
      />

      {/* Integrations */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="Integrations"
            headline="Integrations that fit your workflow"
            subheadline="Connect shipping to your store, ERP, and support stack. This site doesn’t require a database—these are capability highlights that reflect common operational integrations."
            features={[
              {
                title: 'eCommerce Platforms',
                description:
                  'Sync orders, print labels, and automatically push tracking updates so customers always know what’s next. Common stacks include Shopify, WooCommerce, and Magento.',
                icon: 'ShoppingCart',
              },
              {
                title: 'ERP & Inventory',
                description:
                  'Maintain a single source of truth for stock, shipments, and invoices. Typical enterprise systems include SAP, NetSuite, and Microsoft Dynamics.',
                icon: 'Database',
              },
              {
                title: 'Customer Support',
                description:
                  'Reduce “Where is my order?” tickets with tracking links, proactive alerts, and delivery confirmations in tools like Zendesk, Intercom, and Freshdesk.',
                icon: 'LifeBuoy',
              },
            ]}
          />
        </div>
      </section>

      {/* Pricing (home preview) */}
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="Plans that scale from consistent shipping to enterprise lanes"
            subheadline="Start with a straightforward tier, then tailor lanes, speed, and handling requirements as volume grows. For complex networks, request a custom rate card and SLA."
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

      {/* Testimonials */}
      <TestimonialsAnimated
        headline="Teams ship with confidence"
        subheadline="Real outcomes from faster delivery, fewer exceptions, and clearer tracking—especially when volume spikes and customer expectations rise."
        testimonials={[
          {
            quote:
              'Our international delivery times improved immediately, and tracking visibility reduced support tickets by 30%.',
            name: 'Operations Lead',
            role: 'Global Retail Co.',
            company: 'Retail Operations',
          },
          {
            quote:
              'Freight milestones and proactive alerts helped us prevent delays during peak season. We finally had a consistent view of what was happening in transit.',
            name: 'Supply Chain Manager',
            role: 'AeroParts',
            company: 'Supply Chain',
          },
          {
            quote:
              'The fulfillment workflow is clean and scalable—inventory accuracy and SLA reporting are now effortless.',
            name: 'Head of Logistics',
            role: 'CloudCommerce',
            company: 'Fulfillment',
          },
        ]}
      />

      {/* FAQ */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="FAQ: Shipping, tracking, and getting started"
            subheadline="Quick answers to common questions teams ask before moving lanes or consolidating carriers."
            items={[
              {
                question: 'What do you need to provide an accurate quote?',
                answer:
                  'Share origin and destination, dimensions/weight, shipment frequency, and your target delivery speed. If you have special handling requirements (temperature, hazmat, high-value), include those as well.',
              },
              {
                question: 'Do you support customs and international documentation?',
                answer:
                  'Yes. Depending on service and lane, we can provide documentation guidance and clearance support to reduce border delays and avoid preventable exceptions.',
              },
              {
                question: 'How does tracking work for customers and internal teams?',
                answer:
                  'Tracking milestones are available in near real time, with proactive alerts for exceptions. Many teams also send branded tracking links and delivery notifications to reduce WISMO tickets.',
              },
              {
                question: 'Can we mix express and freight services?',
                answer:
                  'Absolutely. A common approach is express for time-critical shipments and freight/forwarding for cost-optimized bulk movement—supported by consistent reporting across lanes.',
              },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <CTASparkles
        headline="Ready to streamline shipping and logistics?"
        description="Get a tailored quote and a recommended service mix for your lanes, volume, and delivery targets—so you can reduce exceptions, improve on-time performance, and keep customers informed."
        ctaLabel="Request a Quote"
        ctaHref="/contact"
      />
    </div>
  )
}
