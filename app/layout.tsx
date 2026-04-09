import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavbarSticky } from '@/components/blocks/NavbarSticky'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DHL Logistics — Modern Shipping, Tracking & Fulfillment',
  description:
    'Fast, reliable shipping—powered by precision logistics. Express delivery, freight, and fulfillment with end-to-end tracking, clear pricing, and global coverage.',
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
          ctaLabel="Get a quote"
          ctaHref="/contact"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="DHL Logistics"
          description="Fast, reliable shipping—powered by precision logistics. Express, freight, fulfillment, and returns with tracking, documentation support, and operational visibility."
          columns={[
            {
              title: 'Services',
              links: [
                { label: 'Services', href: '/services' },
                { label: 'Pricing', href: '/pricing' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ],
            },
            {
              title: 'Resources',
              links: [
                { label: 'FAQ', href: '/pricing#faq' },
                { label: 'Tracking (demo)', href: '/services#how-it-works' },
              ],
            },
          ]}
          copyright="© 2026 DHL Logistics. Demo site blueprint."
        />
      </body>
    </html>
  )
}
