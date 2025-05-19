import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Script from "next/script"

export const metadata = {
  title: "Best Bitcoin IRA Providers: iTrustCapital vs. BitcoinIRA (2025) | Dynasty Bitcoin IRA",
  description:
    "Compare the top Bitcoin IRA providers of 2025. See how iTrustCapital and BitcoinIRA stack up on fees, security, and supported cryptocurrencies.",
}

export default function CompareProviders() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-medium font-playfair">StartBitcoinIRA</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/#how-it-works"
              className="text-sm font-medium font-montserrat hover:underline underline-offset-4"
            >
              How It Works
            </Link>
            <Link href="/#benefits" className="text-sm font-medium font-montserrat hover:underline underline-offset-4">
              Benefits
            </Link>
            <Link href="/#faq" className="text-sm font-medium font-montserrat hover:underline underline-offset-4">
              FAQ
            </Link>
            <Link href="/blog" className="text-sm font-medium font-montserrat hover:underline underline-offset-4">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex font-montserrat font-medium">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild className="bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold">
              <Link href="/get-started">Compare Providers</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="space-y-4 text-center mb-12">
                <h1 className="font-cormorant font-light text-4xl sm:text-5xl md:text-6xl">
                  Best Bitcoin IRA Providers: <span className="text-gold">iTrustCapital</span> vs.{" "}
                  <span className="text-gold">BitcoinIRA</span> (2025)
                </h1>
                <p className="text-[#4A4A4A] font-montserrat font-light text-lg md:text-xl max-w-3xl mx-auto">
                  Want Bitcoin or Ethereum in your IRA? As IRS-approved custodians, iTrustCapital and BitcoinIRA let you
                  trade crypto tax-free. We compare fees, security, and coins—plus how to start.
                </p>
                <p className="text-[#4A4A4A] font-montserrat font-light text-sm italic">
                  [Disclosure: We earn a commission if you open an account through our links.]
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-12">
                <h2 className="font-cormorant font-medium text-2xl text-navy mb-6">
                  Why Trust Our Bitcoin IRA Recommendations?
                </h2>
                <ul className="space-y-4 font-montserrat">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Vetted custodians:</span> Both are IRS-compliant with institutional
                      storage (Coinbase/BitGo).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Transparent fees:</span> No hidden costs—we break down pricing.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Partner links:</span> We may earn a fee (at no extra cost to you).
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid gap-8 md:grid-cols-2 mb-16">
                <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-cormorant font-medium text-2xl text-navy mb-2">
                        1. iTrustCapital: Best for Low Fees & Altcoins
                      </h2>
                      <p className="text-[#4A4A4A] font-montserrat font-light">
                        Our top pick for low-cost crypto and gold IRAs.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-3">Key Features:</h3>
                      <ul className="space-y-3 font-montserrat font-light">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Fees:</span> 1% per trade (no monthly/annual fees).
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Coins:</span> 30+ (BTC, ETH, XRP, Solana, and even gold/silver).
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Security:</span> Coinbase Custody (95% cold storage + $320M
                          insurance).
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Speed:</span> Accounts open in 5 minutes, 24/7 trading.
                        </li>
                      </ul>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold"
                    >
                      <Link
                        href="https://itrustcapital.com"
                        target="_blank"
                        className="flex items-center justify-center"
                      >
                        Open an iTrustCapital IRA (Get $100 Bonus) <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-cormorant font-medium text-2xl text-navy mb-2">
                        2. BitcoinIRA: Best for High Security
                      </h2>
                      <p className="text-[#4A4A4A] font-montserrat font-light">
                        Ideal for investors prioritizing insurance and institutional custody.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-3">Key Features:</h3>
                      <ul className="space-y-3 font-montserrat font-light">
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Fees:</span> 2% per trade + $195/year custody fee.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Coins:</span> 10+ (BTC, ETH, Litecoin).
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Security:</span> BitGo Trust ($250M insurance).
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-medium">Extras:</span> 24/7 concierge support.
                        </li>
                      </ul>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold"
                    >
                      <Link href="https://bitcoinira.com" target="_blank" className="flex items-center justify-center">
                        Start a BitcoinIRA (Limited-Time Fee Discount) <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="font-cormorant font-medium text-3xl text-navy mb-6 text-center">
                  Bitcoin IRA Comparison Table
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse font-montserrat">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-3 text-left font-semibold">Feature</th>
                        <th className="border px-4 py-3 text-left font-semibold">iTrustCapital</th>
                        <th className="border px-4 py-3 text-left font-semibold">BitcoinIRA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-3 font-medium">Fees</td>
                        <td className="border px-4 py-3">1% per trade</td>
                        <td className="border px-4 py-3">2% per trade + $195/yr</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-3 font-medium">Custodian</td>
                        <td className="border px-4 py-3">Coinbase</td>
                        <td className="border px-4 py-3">BitGo</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-3 font-medium">Insurance</td>
                        <td className="border px-4 py-3">$320M</td>
                        <td className="border px-4 py-3">$250M</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-3 font-medium">Supported Coins</td>
                        <td className="border px-4 py-3">30+ (Incl. XRP)</td>
                        <td className="border px-4 py-3">10+ (Major coins)</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-3 font-medium">Best For</td>
                        <td className="border px-4 py-3">Altcoin traders</td>
                        <td className="border px-4 py-3">High-security BTC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="font-cormorant font-medium text-3xl text-navy mb-6">
                  How to Start a Bitcoin IRA (3 Steps)
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-navy font-cormorant text-xl font-medium mb-4">
                      1
                    </div>
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Pick a Provider</h3>
                    <p className="font-montserrat font-light text-[#4A4A4A]">
                      iTrustCapital (low fees) or BitcoinIRA (high security).
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-navy font-cormorant text-xl font-medium mb-4">
                      2
                    </div>
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Open an Account</h3>
                    <p className="font-montserrat font-light text-[#4A4A4A]">
                      5-minute online process (no credit check).
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-navy font-cormorant text-xl font-medium mb-4">
                      3
                    </div>
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Fund & Trade</h3>
                    <p className="font-montserrat font-light text-[#4A4A4A]">
                      Roll over an existing IRA or deposit cash.
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <p className="font-montserrat font-medium text-navy">
                    Pro Tip: Use a Roth IRA for tax-free crypto gains long-term.
                  </p>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="font-cormorant font-medium text-3xl text-navy mb-6">FAQs (Affiliate-Focused)</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-montserrat font-semibold text-lg mb-2">
                      1. Is iTrustCapital or BitcoinIRA better?
                    </h3>
                    <div className="space-y-2 font-montserrat font-light text-[#4A4A4A]">
                      <p>Choose iTrustCapital for altcoins/XRP and 1% fees.</p>
                      <p>Pick BitcoinIRA for max insurance and hands-off management.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-montserrat font-semibold text-lg mb-2">2. Are these providers IRS-approved?</h3>
                    <p className="font-montserrat font-light text-[#4A4A4A]">
                      Yes! Both use qualified custodians (Coinbase/BitGo) and file IRS Form 5498.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-montserrat font-semibold text-lg mb-2">
                      3. Can I move my existing IRA to crypto?
                    </h3>
                    <p className="font-montserrat font-light text-[#4A4A4A]">
                      Absolutely—both support rollovers from Fidelity, Vanguard, etc.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-montserrat font-semibold text-lg mb-2">4. What's the minimum investment?</h3>
                    <div className="space-y-2 font-montserrat font-light text-[#4A4A4A]">
                      <p>iTrustCapital: $1,000</p>
                      <p>BitcoinIRA: $3,000</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="font-montserrat font-medium text-navy mb-4">
                    Ready to start? Compare iTrustCapital vs. BitcoinIRA.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold">
                      <Link href="https://itrustcapital.com" target="_blank">
                        Open iTrustCapital IRA
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-white/10 text-white border-white hover:border-white hover:bg-white hover:text-navy font-montserrat font-semibold text-[15px] tracking-wide py-3 px-6 h-auto transition-all duration-300 ease-in-out"
                    >
                      <Link href="/contact" className="flex items-center justify-center">
                        Limited Capacity – Apply Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="font-cormorant font-medium text-3xl text-navy mb-6">Why Promote These Providers?</h2>
                <ul className="space-y-4 font-montserrat">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-navy font-medium">1</span>
                    </div>
                    <div>
                      <span className="font-medium">Trust:</span> Both have 4.5+ star Trustpilot reviews.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-navy font-medium">2</span>
                    </div>
                    <div>
                      <span className="font-medium">Transparency:</span> Clear fees (unlike some crypto IRA scams).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-navy font-medium">3</span>
                    </div>
                    <div>
                      <span className="font-medium">Performance:</span> iTrustCapital users averaged +90% returns in
                      2024 (varies by market).
                    </div>
                  </li>
                </ul>

                <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <p className="font-montserrat font-light text-[#4A4A4A] italic">
                    Disclosure: We earn a commission if you sign up via our links—this supports our research. Never
                    invest more than you can afford to lose.
                  </p>
                </div>
              </div>

              <div className="mb-16">
                <div className="bg-red-50 p-8 rounded-lg border border-red-100">
                  <h2 className="font-cormorant font-medium text-3xl text-navy mb-6 flex items-center">
                    <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    Risks of Crypto IRAs: Key Warnings
                  </h2>

                  <p className="font-montserrat font-medium text-[#4A4A4A] mb-6">
                    Before investing in a Bitcoin IRA, understand these critical risks:
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-2">1. Extreme Volatility</h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        Cryptocurrencies can swing ±20% in a day. What's in your IRA today could drop 50% tomorrow.
                      </p>
                      <p className="font-montserrat font-light text-[#4A4A4A] mt-2">
                        Example: Bitcoin lost 65% of its value in 2022 but rebounded in 2023. Only invest what you can
                        afford to lose.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-2">2. No FDIC/SIPC Insurance</h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        Unlike traditional IRAs (which may have FDIC/SIPC coverage), crypto IRAs rely on private
                        insurers (e.g., Coinbase's $320M policy).
                      </p>
                      <p className="font-montserrat font-light text-[#4A4A4A] mt-2">
                        If a custodian is hacked or collapses, your funds aren't federally guaranteed.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-2">3. IRS Compliance Risks</h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        <span className="font-medium">Prohibited Transactions:</span> Buying crypto yourself (instead of
                        through the custodian) or using IRA funds to purchase collectibles can trigger steep IRS
                        penalties.
                      </p>
                      <p className="font-montserrat font-light text-[#4A4A4A] mt-2">
                        <span className="font-medium">Tax Reporting:</span> You must file Form 8606 for crypto
                        transactions—errors could lead to audits.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-2">4. Liquidity Challenges</h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        Some altcoins (e.g., XRP, Solana) may be hard to sell quickly in a crash.
                      </p>
                      <p className="font-montserrat font-light text-[#4A4A4A] mt-2">
                        <span className="font-medium">Withdrawal Delays:</span> Crypto IRA providers often take 3–5 days
                        to process withdrawals (vs. instant trades).
                      </p>
                    </div>

                    <div>
                      <h3 className="font-montserrat font-semibold text-lg mb-2">5. Custodial Risks</h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        <span className="font-medium">Not All Providers Are Equal:</span> Scams like "uninsured storage"
                        or fake custodians exist. Stick to vetted partners like iTrustCapital or BitcoinIRA.
                      </p>
                      <p className="font-montserrat font-light text-[#4A4A4A] mt-2">
                        <span className="font-medium">Exit Scams:</span> Smaller crypto IRA platforms have shut down
                        abruptly—always verify custodians.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-montserrat font-semibold text-lg mb-3">How to Mitigate Risks</h3>
                    <ul className="space-y-2 font-montserrat font-light text-[#4A4A4A]">
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Diversify: Don't put 100% of your IRA into crypto. Mix with stocks/ETFs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Verify Custodians: Check IRS approval (Form 5498 filings) and insurance details.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>
                          Use Cold Storage: Ensure providers store 90%+ of assets offline (like BitcoinIRA's BitGo
                          vaults).
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h2 className="font-cormorant font-medium text-2xl text-navy mb-4">Final Disclaimer</h2>
                <p className="font-montserrat font-light text-[#4A4A4A]">
                  Investing in crypto IRAs carries significant risk. This content is for educational purposes only and
                  not financial advice. Past performance doesn't guarantee future results. Consult a tax professional
                  before opening an account. We may earn commissions from partner links—this doesn't influence our
                  reviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-navy to-navy/90 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto">
              <div className="space-y-3">
                <h2 className="font-cormorant font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Ready to Start Your <span className="text-gold italic">Dynasty Bitcoin IRA</span>?
                </h2>
                <p className="max-w-[900px] text-white/80 font-montserrat font-light md:text-xl/relaxed">
                  Compare top providers and get up to $50K in bonuses
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row mt-4 w-full max-w-md">
                <Button
                  asChild
                  className="bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold text-[15px] tracking-wide py-3 px-6 h-auto shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <Link href="/get-started" className="flex items-center">
                    Lock In Tax-Free Growth <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-white/10 text-white border-white hover:border-white hover:bg-white hover:text-navy font-montserrat font-semibold text-[15px] tracking-wide py-3 px-6 h-auto transition-all duration-300 ease-in-out"
                >
                  <Link href="/contact" className="flex items-center justify-center">
                    Limited Capacity – Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-[#F9F7F5]">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 px-4 md:px-6">
          <div className="flex-1 space-y-4">
            <div className="text-xl font-medium font-cormorant">StartBitcoinIRA</div>
            <p className="text-sm text-[#4A4A4A] font-montserrat font-light">
              Helping you start your Bitcoin IRA journey with expert guidance and top provider comparisons.
            </p>
          </div>
          <div className="flex-1 space-y-4">
            <div className="font-medium font-montserrat">Quick Links</div>
            <nav className="flex flex-col gap-2 text-sm font-montserrat">
              <Link href="/#how-it-works" className="hover:underline underline-offset-4">
                How It Works
              </Link>
              <Link href="/#benefits" className="hover:underline underline-offset-4">
                Benefits
              </Link>
              <Link href="/#faq" className="hover:underline underline-offset-4">
                FAQ
              </Link>
              <Link href="/blog" className="hover:underline underline-offset-4">
                Blog
              </Link>
            </nav>
          </div>
          <div className="flex-1 space-y-4">
            <div className="font-medium font-montserrat">Legal</div>
            <nav className="flex flex-col gap-2 text-sm font-montserrat">
              <Link href="/privacy" className="hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline underline-offset-4">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="hover:underline underline-offset-4">
                Disclaimer
              </Link>
              <Link href="/affiliate-disclosure" className="hover:underline underline-offset-4">
                Affiliate Disclosure
              </Link>
            </nav>
          </div>
          <div className="flex-1 space-y-4">
            <div className="font-medium font-montserrat">Contact</div>
            <div className="text-sm font-montserrat">
              <p>Email: info@startbitcoinira.com</p>
              <p>Phone: (888) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm text-[#4A4A4A] font-montserrat font-light">
          <p>© 2025 StartBitcoinIRA.com. All rights reserved.</p>
          <p className="mt-2">
            Bitcoin IRA investments involve risk. Past performance is not indicative of future results.
          </p>
        </div>
      </footer>

      <Script id="comparison-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://startbitcoinira.com/compare-providers"
            },
            "headline": "Best Bitcoin IRA Providers: iTrustCapital vs. BitcoinIRA (2025)",
            "description": "Compare the top Bitcoin IRA providers of 2025. See how iTrustCapital and BitcoinIRA stack up on fees, security, and supported cryptocurrencies.",
            "image": "https://startbitcoinira.com/bitcoin-investor.png",
            "author": {
              "@type": "Organization",
              "name": "StartBitcoinIRA"
            },
            "publisher": {
              "@type": "Organization",
              "name": "StartBitcoinIRA",
              "logo": {
                "@type": "ImageObject",
                "url": "https://startbitcoinira.com/logo.png"
              }
            },
            "datePublished": "2025-05-17",
            "dateModified": "2025-05-17"
          }
        `}
      </Script>
    </div>
  )
}
