import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#002366] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-cormorant text-2xl font-semibold mb-4">StartBitcoinIRA</h3>
            <p className="font-montserrat text-sm mb-4">
              Structure generational crypto wealth with tax-free growth. Segregated cold storage and institutional
              liquidity access.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#D4AF37]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#D4AF37]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#D4AF37]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-cormorant text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-montserrat text-sm">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-[#D4AF37] transition-colors">
                  Compare Providers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/self-directed-crypto-ira" className="hover:text-[#D4AF37] transition-colors">
                  Crypto IRA Guide
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-[#D4AF37] transition-colors">
                  Tools & Calculators
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-[#D4AF37] transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-cormorant text-2xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 font-montserrat text-sm">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail mr-2 mt-1"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>support@startbitcoinira.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone mr-2 mt-1"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(888) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin mr-2 mt-1"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  123 Crypto Street
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-cormorant text-2xl font-semibold mb-4">Newsletter</h3>
            <p className="font-montserrat text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <Button className="bg-[#D4AF37] hover:bg-[#B8860B] text-white font-montserrat">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Legal Disclosures Section */}
        <div className="mt-12 pt-6 border-t border-white/20">
          <div className="font-montserrat text-xs text-white/70 space-y-4">
            <p>© {new Date().getFullYear()} StartBitcoinIRA. All rights reserved.</p>

            <p>
              <strong>Tax Disclaimer:</strong> The information on this website is for general information purposes only
              and is not intended to be tax, legal, or investment advice. StartBitcoinIRA does not provide tax, legal,
              or investment advice. Please consult with a qualified tax professional, attorney, or investment advisor
              regarding your specific situation.
            </p>

            <p>
              <strong>Affiliate Disclosure:</strong> Some links on this site are affiliate links. StartBitcoinIRA may
              receive compensation if you choose to sign up for products or services through these links. This
              compensation may impact how and where products appear on this site.{" "}
              <Link href="/affiliate-disclosure" className="underline hover:text-[#D4AF37]">
                View our full affiliate disclosure
              </Link>
              .
            </p>

            <p>
              <strong>Investment Risk Disclosure:</strong> Investing in cryptocurrencies, including Bitcoin, involves
              substantial risk of loss and is not suitable for all investors. The value of cryptocurrencies can be
              volatile, and past performance is not indicative of future results. Please carefully consider your
              investment objectives, risk tolerance, and financial situation before investing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
