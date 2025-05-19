import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CryptoIraCalculator } from "@/app/components/crypto-ira-calculator"
import { ArrowRight, Check, Info, AlertTriangle, ArrowLeft } from "lucide-react"
import Script from "next/script"

export const metadata = {
  title: "Self-Directed Crypto IRA Guide: How to Invest Bitcoin in an IRA (2025)",
  description:
    "Learn how a self-directed IRA works for crypto, compare top providers like iTrustCapital & BitcoinIRA, and avoid IRS penalties. Start a tax-free crypto retirement today.",
}

export default function SelfDirectedCryptoIRA() {
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
        <article className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mb-8"
              >
                <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
              </Link>

              <div className="space-y-8">
                {/* Introduction */}
                <div className="space-y-4">
                  <h1 className="font-cormorant font-light text-4xl sm:text-5xl md:text-6xl leading-tight">
                    Self-Directed Crypto IRA Guide: How to Invest Bitcoin in an IRA (2025)
                  </h1>
                  <p className="text-xl text-[#4A4A4A] font-montserrat font-light md:text-2xl max-w-3xl">
                    Want to invest in Bitcoin or Ethereum tax-free? A self-directed crypto IRA lets you grow your
                    retirement savings with crypto—but the rules are strict. Here's how it works.
                  </p>
                  <p className="text-sm text-[#4A4A4A] font-montserrat font-light mt-2 mb-4">
                    Published by StartBitcoinIRA – A perspective forged through 42 years of market cycles (since 1982)
                    and 5+ years of active crypto investing through volatility.
                  </p>
                </div>

                {/* Table of Contents */}
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h2 className="font-cormorant font-medium text-2xl text-navy mb-4">In This Guide:</h2>
                  <ul className="space-y-2 font-montserrat">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                      <a href="#what-is" className="hover:underline">
                        What Is a Self-Directed Crypto IRA?
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                      <a href="#best-providers" className="hover:underline">
                        Best Self-Directed Crypto IRA Providers (2025)
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                      <a href="#setup" className="hover:underline">
                        How to Set Up a Crypto IRA (Step-by-Step)
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                      <a href="#tax-rules" className="hover:underline">
                        Tax Rules & IRS Compliance
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                      <a href="#risks" className="hover:underline">
                        Risks of Crypto IRAs
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                      <a href="#calculator" className="hover:underline">
                        Crypto IRA Growth Calculator
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold"></div>
                      <a href="#faqs" className="hover:underline">
                        Frequently Asked Questions
                      </a>
                    </li>
                  </ul>
                </div>

                {/* What Is a Self-Directed Crypto IRA? */}
                <section id="what-is" className="scroll-mt-20 space-y-6">
                  <h2 className="font-cormorant font-medium text-3xl text-navy">What Is a Self-Directed Crypto IRA?</h2>

                  <p className="font-montserrat font-light text-[#4A4A4A] text-lg">
                    A self-directed IRA (SDIRA) is a type of retirement account that allows you to invest in alternative
                    assets beyond traditional stocks and bonds. When used for cryptocurrency investments, it's commonly
                    called a "Crypto IRA" or "Bitcoin IRA."
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-montserrat font-semibold text-xl mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-gold mt-0.5" />
                          <div>
                            <span className="font-medium">Tax Benefits:</span> Choose between Traditional (tax-deferred)
                            or Roth (tax-free growth) structures.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-gold mt-0.5" />
                          <div>
                            <span className="font-medium">Custodian Required:</span> IRS mandates an approved custodian
                            (e.g., BitcoinIRA uses BitGo; iTrustCapital uses Coinbase).
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-gold mt-0.5" />
                          <div>
                            <span className="font-medium">Supported Assets:</span> Bitcoin, Ethereum, XRP, and more
                            (varies by provider).
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-gold mt-0.5" />
                          <div>
                            <span className="font-medium">Contribution Limits:</span> Same as regular IRAs ($7,000 in
                            2025 if under 50; $8,000 if 50+).
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-montserrat font-semibold text-xl mb-4">Types of Crypto IRAs</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-montserrat font-medium text-lg">Traditional Crypto IRA</h4>
                          <p className="font-montserrat font-light text-[#4A4A4A]">
                            Contributions may be tax-deductible. You pay taxes when you withdraw funds during
                            retirement.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-montserrat font-medium text-lg">Roth Crypto IRA</h4>
                          <p className="font-montserrat font-light text-[#4A4A4A]">
                            Contributions are made with after-tax dollars. Qualified withdrawals during retirement are
                            completely tax-free, including all gains.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-montserrat font-medium text-lg">SEP Crypto IRA</h4>
                          <p className="font-montserrat font-light text-[#4A4A4A]">
                            For self-employed individuals with higher contribution limits (up to $69,000 in 2025).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-montserrat font-medium text-lg">Pro Tip: Choose Roth for Crypto</h4>
                        <p className="font-montserrat font-light text-[#4A4A4A]">
                          For most investors, a Roth Crypto IRA is ideal. If Bitcoin or Ethereum appreciates
                          significantly over time, all those gains will be completely tax-free when you withdraw in
                          retirement.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Best Self-Directed Crypto IRA Providers */}
                <section id="best-providers" className="scroll-mt-20 space-y-6">
                  <h2 className="font-cormorant font-medium text-3xl text-navy">
                    Best Self-Directed Crypto IRA Providers (2025)
                  </h2>

                  <p className="font-montserrat font-light text-[#4A4A4A] text-lg">
                    Not all crypto IRA providers are created equal. We've researched the top options based on fees,
                    security, available cryptocurrencies, and user experience.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse font-montserrat">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-4 py-3 text-left font-semibold">Provider</th>
                          <th className="border px-4 py-3 text-left font-semibold">Fees</th>
                          <th className="border px-4 py-3 text-left font-semibold">Coins Supported</th>
                          <th className="border px-4 py-3 text-left font-semibold">Custodian</th>
                          <th className="border px-4 py-3 text-left font-semibold">Best For</th>
                          <th className="border px-4 py-3 text-left font-semibold">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gold/10">
                          <td className="border px-4 py-3 font-medium">iTrustCapital</td>
                          <td className="border px-4 py-3">1% per trade</td>
                          <td className="border px-4 py-3">30+ (BTC, ETH, XRP)</td>
                          <td className="border px-4 py-3">Coinbase Custody</td>
                          <td className="border px-4 py-3">Low fees & altcoins</td>
                          <td className="border px-4 py-3">
                            <Button
                              asChild
                              className="w-full bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold"
                            >
                              <Link href="https://itrustcapital.com" target="_blank">
                                Get $100 Bonus
                              </Link>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-3 font-medium">BitcoinIRA</td>
                          <td className="border px-4 py-3">2% per trade + $195/yr</td>
                          <td className="border px-4 py-3">10+ (BTC, ETH, LTC)</td>
                          <td className="border px-4 py-3">BitGo Trust</td>
                          <td className="border px-4 py-3">High-security BTC</td>
                          <td className="border px-4 py-3">
                            <Button asChild variant="outline" className="w-full font-montserrat">
                              <Link href="https://bitcoinira.com" target="_blank">
                                Get Offer
                              </Link>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-3 font-medium">Alto IRA</td>
                          <td className="border px-4 py-3">$10/month</td>
                          <td className="border px-4 py-3">200+ (via Coinbase)</td>
                          <td className="border px-4 py-3">Coinbase</td>
                          <td className="border px-4 py-3">Diversification</td>
                          <td className="border px-4 py-3">
                            <Button asChild variant="outline" className="w-full font-montserrat">
                              <Link href="#" target="_blank">
                                Learn More
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-montserrat font-semibold text-xl mb-4">iTrustCapital: Best for Low Fees</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5" />
                          <span className="font-montserrat font-light text-[#4A4A4A]">
                            <span className="font-medium">Pros:</span> 1% trading fee (no monthly fees), 30+
                            cryptocurrencies including XRP, 24/7 trading, $320M insurance.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                          <span className="font-montserrat font-light text-[#4A4A4A]">
                            <span className="font-medium">Cons:</span> $1,000 minimum investment, newer company (founded
                            2018).
                          </span>
                        </li>
                      </ul>
                      <Button
                        asChild
                        className="w-full mt-4 bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold"
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

                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-montserrat font-semibold text-xl mb-4">BitcoinIRA: Best for Security</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5" />
                          <span className="font-montserrat font-light text-[#4A4A4A]">
                            <span className="font-medium">Pros:</span> $250M insurance, BitGo cold storage, 24/7
                            concierge support, established company (since 2016).
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                          <span className="font-montserrat font-light text-[#4A4A4A]">
                            <span className="font-medium">Cons:</span> Higher fees (2% per trade + annual fee), $3,000
                            minimum investment.
                          </span>
                        </li>
                      </ul>
                      <Button asChild variant="outline" className="w-full mt-4 font-montserrat">
                        <Link
                          href="https://bitcoinira.com"
                          target="_blank"
                          className="flex items-center justify-center"
                        >
                          Start a BitcoinIRA Account <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                    <div className="flex items-start gap-3">
                      <Info className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-montserrat font-medium text-lg">Disclosure</h4>
                        <p className="font-montserrat font-light text-[#4A4A4A]">
                          We earn a commission if you sign up via our links—this supports our research. We only
                          recommend providers we've thoroughly vetted for security and compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* How to Set Up a Crypto IRA */}
                <section id="setup" className="scroll-mt-20 space-y-6">
                  <h2 className="font-cormorant font-medium text-3xl text-navy">
                    How to Set Up a Crypto IRA (Step-by-Step)
                  </h2>

                  <p className="font-montserrat font-light text-[#4A4A4A] text-lg">
                    Setting up a self-directed crypto IRA is easier than you might think. Here's a step-by-step guide to
                    get started:
                  </p>

                  <div className="grid gap-6 md:grid-cols-4">
                    <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-navy font-cormorant text-xl font-medium mb-4">
                        1
                      </div>
                      <h3 className="font-montserrat font-semibold text-lg mb-2">Choose a Provider</h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        Compare fees, coins supported, and security features of different crypto IRA providers.
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-navy font-cormorant text-xl font-medium mb-4">
                        2
                      </div>
                      <h3 className="font-montserrat font-semibold text-lg mb-2">Open an Account</h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        Complete the online application (5-10 minutes) and verify your identity.
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-navy font-cormorant text-xl font-medium mb-4">
                        3
                      </div>
                      <h3 className="font-montserrat font-semibold text-lg mb-2">Fund Your IRA</h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        Transfer funds from an existing IRA/401(k) or make a new contribution.
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-navy font-cormorant text-xl font-medium mb-4">
                        4
                      </div>
                      <h3 className="font-montserrat font-semibold text-lg mb-2">Start Trading</h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        Buy Bitcoin, Ethereum, and other cryptocurrencies through the platform's interface.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-montserrat font-semibold text-xl">Funding Options Explained</h3>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                        <h4 className="font-montserrat font-medium text-lg mb-2">Rollover</h4>
                        <p className="font-montserrat font-light text-[#4A4A4A]">
                          Transfer funds from an existing 401(k) or other qualified retirement plan. No taxes or
                          penalties if done correctly.
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                        <h4 className="font-montserrat font-medium text-lg mb-2">Transfer</h4>
                        <p className="font-montserrat font-light text-[#4A4A4A]">
                          Move funds directly from one IRA to another. Simplest option if you already have an IRA.
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                        <h4 className="font-montserrat font-medium text-lg mb-2">Contribution</h4>
                        <p className="font-montserrat font-light text-[#4A4A4A]">
                          Add new funds up to annual limits ($7,000 in 2025 if under 50; $8,000 if 50+).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-montserrat font-medium text-lg">Pro Tip: Rollover vs. Transfer</h4>
                        <p className="font-montserrat font-light text-[#4A4A4A]">
                          For 401(k) funds, request a "direct rollover" to avoid the 20% withholding tax. For existing
                          IRAs, use the "trustee-to-trustee transfer" option for the smoothest experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Tax Rules & IRS Compliance */}
                <section id="tax-rules" className="scroll-mt-20 space-y-6">
                  <h2 className="font-cormorant font-medium text-3xl text-navy">Tax Rules & IRS Compliance</h2>

                  <p className="font-montserrat font-light text-[#4A4A4A] text-lg">
                    Understanding the tax implications and IRS rules for crypto IRAs is crucial to avoid penalties and
                    maximize your tax benefits.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-montserrat font-semibold text-xl mb-4">Tax Advantages</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <span className="font-medium">Traditional IRA:</span> Tax-deferred growth. You pay taxes
                            when you withdraw in retirement.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <span className="font-medium">Roth IRA:</span> Tax-free growth. You pay no taxes on
                            qualified withdrawals, including all gains.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <span className="font-medium">No Capital Gains:</span> Trade crypto within your IRA without
                            triggering taxable events.
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-montserrat font-semibold text-xl mb-4">
                        IRS Rules & Prohibited Transactions
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                          <div>
                            <span className="font-medium">No Self-Dealing:</span> You cannot buy crypto yourself and
                            place it in your IRA. All purchases must be made through the custodian.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                          <div>
                            <span className="font-medium">No Personal Use:</span> Crypto in your IRA cannot be used for
                            personal transactions or spending.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                          <div>
                            <span className="font-medium">Early Withdrawal Penalties:</span> Withdrawals before age 59½
                            may incur a 10% penalty plus taxes (Traditional IRA).
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-montserrat font-medium text-lg">Warning: IRS Penalties</h4>
                        <p className="font-montserrat font-light text-[#4A4A4A]">
                          Violating IRS rules for self-directed IRAs can result in your entire IRA being treated as a
                          distribution, subject to taxes and penalties. Always use an IRS-compliant custodian and follow
                          the rules carefully.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Risks of Crypto IRAs */}
                <section id="risks" className="scroll-mt-20 space-y-6">
                  <h2 className="font-cormorant font-medium text-3xl text-navy">Risks of Crypto IRAs</h2>

                  <p className="font-montserrat font-light text-[#4A4A4A] text-lg">
                    While crypto IRAs offer significant tax advantages, they also come with unique risks that investors
                    should understand before committing funds.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-montserrat font-semibold text-xl mb-4">Market Risks</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Extreme Volatility:</span> Crypto prices can swing ±20% in a
                            day. What's in your IRA today could drop 50% tomorrow.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Regulatory Uncertainty:</span> Government regulations around
                            cryptocurrencies continue to evolve and could impact values.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Liquidity Challenges:</span> Some altcoins may be difficult to
                            sell quickly during market downturns.
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-montserrat font-semibold text-xl mb-4">Custodial Risks</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                          <div>
                            <span className="font-medium">No FDIC/SIPC Insurance:</span> Unlike traditional IRAs, crypto
                            IRAs rely on private insurance policies.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Custodian Solvency:</span> If a custodian goes bankrupt,
                            recovery of assets may be complicated.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                          <div>
                            <span className="font-medium">Security Breaches:</span> While rare with reputable providers,
                            hacks and theft are risks in the crypto space.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                    <h3 className="font-montserrat font-semibold text-xl mb-4">Risk Mitigation Strategies</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Diversification:</span> Don't put all your retirement funds in
                          crypto. Consider a balanced approach with traditional assets.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Choose Established Providers:</span> Stick with reputable
                          companies like iTrustCapital or BitcoinIRA that have strong security measures.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Verify Insurance Coverage:</span> Ensure your provider has
                          substantial insurance against theft and hacking.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Cold Storage:</span> Confirm that your provider stores at least
                          90% of assets in offline cold storage.
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Crypto IRA Growth Calculator */}
                <section id="calculator" className="scroll-mt-20 space-y-6">
                  <h2 className="font-cormorant font-medium text-3xl text-navy">Crypto IRA Growth Calculator</h2>

                  <p className="font-montserrat font-light text-[#4A4A4A] text-lg">
                    See the potential difference between investing in crypto through a tax-free Roth IRA versus a
                    taxable brokerage account.
                  </p>

                  <CryptoIraCalculator />
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-20 space-y-6">
                  <h2 className="font-cormorant font-medium text-3xl text-navy">Frequently Asked Questions</h2>

                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-montserrat font-semibold text-xl mb-2">
                        Does Fidelity allow Bitcoin in an IRA?
                      </h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        No, Fidelity does not currently allow direct cryptocurrency investments in their IRAs. While
                        they offer a Bitcoin ETF for regular brokerage accounts, for direct crypto ownership in an IRA,
                        you'll need to use a specialized self-directed IRA provider like iTrustCapital or BitcoinIRA.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-montserrat font-semibold text-xl mb-2">Can I buy XRP in my IRA?</h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        Yes, you can buy XRP in a self-directed IRA through providers like iTrustCapital, which offers
                        XRP among its 30+ supported cryptocurrencies. Not all providers support XRP, so check the
                        available assets before opening an account if you're specifically interested in XRP.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-montserrat font-semibold text-xl mb-2">Is BitcoinIRA legit?</h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        Yes, BitcoinIRA is a legitimate company that has been operating since 2016. They use BitGo Trust
                        as their qualified custodian, which provides $250 million in insurance coverage. They're
                        registered with financial authorities and have processed over $2 billion in transactions.
                        However, like all investments, crypto IRAs still carry risk.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-montserrat font-semibold text-xl mb-2">
                        What are the fees for a crypto IRA?
                      </h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        Crypto IRA fees typically include trading fees (1-2% per transaction) and may include setup
                        fees, annual maintenance fees, and storage fees. iTrustCapital charges a simple 1% per trade
                        with no monthly fees, while BitcoinIRA charges 2% per trade plus a $195 annual custody fee.
                        These fees are higher than traditional IRAs but provide specialized crypto custody services.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-montserrat font-semibold text-xl mb-2">
                        Can I transfer my existing crypto to an IRA?
                      </h3>
                      <p className="font-montserrat font-light text-[#4A4A4A]">
                        No, you cannot transfer existing cryptocurrency holdings directly into an IRA. The IRS requires
                        all assets in an IRA to be purchased through the custodian with cash in the account. You would
                        need to sell your existing crypto (potentially triggering capital gains taxes), deposit cash
                        into your crypto IRA, and then repurchase the cryptocurrencies.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Conclusion & CTA */}
                <section className="space-y-6">
                  <h2 className="font-cormorant font-medium text-3xl text-navy">Ready to Start Your Crypto IRA?</h2>

                  <p className="font-montserrat font-light text-[#4A4A4A] text-lg">
                    A self-directed crypto IRA can be a powerful addition to your retirement strategy, offering tax
                    advantages while allowing you to invest in the potential growth of digital assets. Remember to
                    choose a reputable provider, understand the risks, and consider diversifying your retirement
                    portfolio.
                  </p>

                  <div className="bg-navy p-8 rounded-lg text-white">
                    <h3 className="font-cormorant font-medium text-2xl mb-4">Our Top Recommendations</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-montserrat font-semibold text-lg mb-2">Best for Low Fees:</h4>
                        <p className="font-montserrat font-light text-white/80 mb-4">
                          iTrustCapital offers 1% trading fees with no monthly charges and supports 30+
                          cryptocurrencies.
                        </p>
                        <Button
                          asChild
                          className="w-full bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold"
                        >
                          <Link
                            href="https://itrustcapital.com"
                            target="_blank"
                            className="flex items-center justify-center"
                          >
                            Open an iTrustCapital IRA <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>

                      <div>
                        <h4 className="font-montserrat font-semibold text-lg mb-2">Best for Security:</h4>
                        <p className="font-montserrat font-light text-white/80 mb-4">
                          BitcoinIRA offers $250M insurance with BitGo cold storage and 24/7 support.
                        </p>
                        <Button
                          asChild
                          className="w-full bg-white hover:bg-white/90 text-navy font-montserrat font-semibold"
                        >
                          <Link
                            href="https://bitcoinira.com"
                            target="_blank"
                            className="flex items-center justify-center"
                          >
                            Open a BitcoinIRA Account <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </article>
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
              <Link href="/compare-providers" className="hover:underline underline-offset-4">
                Provider Comparison
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

      <Script id="faq-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Does Fidelity allow Bitcoin in an IRA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, Fidelity does not currently allow direct cryptocurrency investments in their IRAs. While they offer a Bitcoin ETF for regular brokerage accounts, for direct crypto ownership in an IRA, you'll need to use a specialized self-directed IRA provider like iTrustCapital or BitcoinIRA."
                }
              },
              {
                "@type": "Question",
                "name": "Can I buy XRP in my IRA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can buy XRP in a self-directed IRA through providers like iTrustCapital, which offers XRP among its 30+ supported cryptocurrencies. Not all providers support XRP, so check the available assets before opening an account if you're specifically interested in XRP."
                }
              },
              {
                "@type": "Question",
                "name": "Is BitcoinIRA legit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, BitcoinIRA is a legitimate company that has been operating since 2016. They use BitGo Trust as their qualified custodian, which provides $250 million in insurance coverage. They're registered with financial authorities and have processed over $2 billion in transactions. However, like all investments, crypto IRAs still carry risk."
                }
              },
              {
                "@type": "Question",
                "name": "What are the fees for a crypto IRA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Crypto IRA fees typically include trading fees (1-2% per transaction) and may include setup fees, annual maintenance fees, and storage fees. iTrustCapital charges a simple 1% per trade with no monthly fees, while BitcoinIRA charges 2% per trade plus a $195 annual custody fee. These fees are higher than traditional IRAs but provide specialized crypto custody services."
                }
              },
              {
                "@type": "Question",
                "name": "Can I transfer my existing crypto to an IRA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, you cannot transfer existing cryptocurrency holdings directly into an IRA. The IRS requires all assets in an IRA to be purchased through the custodian with cash in the account. You would need to sell your existing crypto (potentially triggering capital gains taxes), deposit cash into your crypto IRA, and then repurchase the cryptocurrencies."
                }
              }
            ]
          }
        `}
      </Script>
    </div>
  )
}
