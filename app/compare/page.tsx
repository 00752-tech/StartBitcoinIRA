import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ProviderComparison } from "@/app/components/provider-comparison"
import { LeadMagnetForm } from "@/app/components/lead-magnet-form"
import { FAQSection } from "@/app/components/faq-section"

export default function Compare() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Best Bitcoin IRA Companies in 2025 (Compared)
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Compare fees, features, and exclusive bonuses from the top Bitcoin IRA providers
                </p>
              </div>

              <div className="mt-12">
                <ProviderComparison />
              </div>

              <div className="grid gap-8 mt-16 md:grid-cols-3">
                <div className="md:col-span-2 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">How We Compare Bitcoin IRA Companies</h2>
                    <p className="text-gray-500">
                      Our team evaluates each Bitcoin IRA provider based on these key factors:
                    </p>
                    <ul className="space-y-2 list-disc pl-5 text-gray-500">
                      <li>
                        <strong>Fees:</strong> Setup fees, annual maintenance fees, trading fees, and storage fees
                      </li>
                      <li>
                        <strong>Security:</strong> Cold storage solutions, insurance coverage, and security protocols
                      </li>
                      <li>
                        <strong>Available cryptocurrencies:</strong> Variety and number of supported digital assets
                      </li>
                      <li>
                        <strong>Customer support:</strong> Availability and quality of customer service
                      </li>
                      <li>
                        <strong>User experience:</strong> Platform ease of use and mobile access
                      </li>
                      <li>
                        <strong>Promotions:</strong> Current bonus offers and incentives
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Bitcoin IRA vs. Traditional IRA: What's the Difference?</h2>
                    <div className="overflow-auto">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border px-4 py-2 text-left">Feature</th>
                            <th className="border px-4 py-2 text-left">Traditional IRA</th>
                            <th className="border px-4 py-2 text-left">Bitcoin IRA</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Investment Options</td>
                            <td className="border px-4 py-2">Stocks, bonds, mutual funds, ETFs</td>
                            <td className="border px-4 py-2">Bitcoin, Ethereum, and other cryptocurrencies</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Growth Potential</td>
                            <td className="border px-4 py-2">Moderate (7-10% historical average)</td>
                            <td className="border px-4 py-2">High (potential for significant returns)</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Risk Level</td>
                            <td className="border px-4 py-2">Low to moderate</td>
                            <td className="border px-4 py-2">High (more volatile)</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Fees</td>
                            <td className="border px-4 py-2">Lower (0.5-1% annually)</td>
                            <td className="border px-4 py-2">Higher (1-3% annually)</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Tax Benefits</td>
                            <td className="border px-4 py-2">Same tax advantages</td>
                            <td className="border px-4 py-2">Same tax advantages</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                    <FAQSection />
                  </div>
                </div>

                <div className="md:col-span-1">
                  <div className="sticky top-20">
                    <LeadMagnetForm />

                    <div className="mt-8 rounded-lg border bg-blue-50 p-6">
                      <h3 className="text-lg font-bold mb-2">Why Trust Our Recommendations?</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Our team has reviewed over 15 Bitcoin IRA providers and helped 10,000+ investors make informed
                        decisions about their retirement.
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="h-5 w-5 fill-amber-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-medium">5.0 (352 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
                  <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
                </Link>
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
          <p className="mt-2">
            <Link href="/affiliate-disclosure" className="underline underline-offset-2">
              Affiliate Disclosure
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
