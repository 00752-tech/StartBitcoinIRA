import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AffiliateDisclosure() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">StartBitcoinIRA</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mb-8"
              >
                <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
              </Link>

              <div className="space-y-8">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Affiliate Disclosure</h1>
                  <p className="text-gray-500">Last Updated: May 17, 2025</p>
                </div>

                <div className="prose max-w-none">
                  <p>
                    StartBitcoinIRA.com is committed to transparency in everything we do. This disclosure explains how
                    we make money and how that might affect the content, products, and services we review.
                  </p>

                  <h2>How We Make Money</h2>
                  <p>
                    StartBitcoinIRA.com participates in affiliate marketing programs, which means we may earn
                    commissions when you click on our links and make purchases or open accounts with our partner
                    companies. These commissions come at no additional cost to you.
                  </p>
                  <p>We have affiliate relationships with the following companies:</p>
                  <ul>
                    <li>Bitcoin IRA</li>
                    <li>iTrustCapital</li>
                    <li>Alto IRA</li>
                    <li>BitIRA</li>
                    <li>Other cryptocurrency IRA providers</li>
                  </ul>

                  <h2>How This Affects Our Content</h2>
                  <p>
                    While we do receive compensation from our partners, we maintain editorial independence and provide
                    honest, unbiased reviews. Our recommendations are based on thorough research, testing, and our
                    genuine belief in the quality of the services.
                  </p>
                  <p>
                    We may receive different commission rates from different providers, but this does not influence our
                    rankings or recommendations. Our primary goal is to help you make informed decisions about your
                    retirement investments.
                  </p>

                  <h2>Compensation Structure</h2>
                  <p>The compensation we receive may include:</p>
                  <ul>
                    <li>One-time commissions for new accounts opened</li>
                    <li>Percentage-based commissions on deposits made</li>
                    <li>Recurring commissions based on account activity</li>
                    <li>Fixed fees for qualified leads</li>
                  </ul>
                  <p>
                    Commission rates typically range from $100-$1,000 per qualified lead or 1-15% of the deposit amount,
                    depending on the provider and promotion.
                  </p>

                  <h2>Your Trust Matters</h2>
                  <p>
                    We believe in full transparency and want you to understand how we operate. If you have any questions
                    about our affiliate relationships or how we make recommendations, please contact us at
                    info@startbitcoinira.com.
                  </p>
                  <p>
                    Thank you for trusting StartBitcoinIRA.com as your resource for Bitcoin IRA information and
                    comparisons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-100">
        <div className="container py-6 text-center text-sm text-gray-500 px-4 md:px-6">
          <p>© 2025 StartBitcoinIRA.com. All rights reserved.</p>
          <p className="mt-2">
            Bitcoin IRA investments involve risk. Past performance is not indicative of future results.
          </p>
        </div>
      </footer>
    </div>
  )
}
