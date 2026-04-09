import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavbarSticky } from '@/components/blocks/NavbarSticky'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DHL Logistics — Express Shipping, Freight & Fulfillment',
  description:
    'Modern DHL logistics website blueprint with animated hero effects, services, pricing, integrations, testimonials, FAQ, team section, and client-side contact form.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <NavbarSticky
          logo="DHL Logistics"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Get a Quote"
          ctaHref="/contact"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="DHL Logistics"
          description="Fast, reliable shipping and logistics—globally connected, locally precise. Explore express delivery, freight and forwarding, warehousing and fulfillment, and compliance-ready workflows designed for predictable outcomes."
          columns={[
            {
              title: 'DHL Logistics',
              links: [
                { label: 'Services', href: '/services' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ],
            },
            {
              title: 'Services',
              links: [
                { label: 'Express', href: '/services#service-categories' },
                { label: 'Freight', href: '/services#service-categories' },
                { label: 'Forwarding', href: '/services#service-categories' },
                { label: 'Fulfillment', href: '/services#service-categories' },
              ],
            },
            {
              title: 'Contact',
              links: [
                { label: 'sales@dhl.example', href: '/contact#contact-form' },
                { label: 'support@dhl.example', href: '/contact#contact-form' },
                { label: '+1 (555) 123-4567', href: '/contact#contact-details' },
              ],
            },
          ]}
          copyright="© 2026 DHL Logistics. Demo website blueprint."
        />
      </body>
    </html>
  )
}
