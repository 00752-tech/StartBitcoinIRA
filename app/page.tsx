import type { Metadata } from "next/types"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ComparisonTable } from "@/app/components/comparison-table"
import { FAQSection } from "@/app/components/faq-section"
import { VideoEmbed } from "@/app/components/video-embed"
import { Check, Shield, TrendingUp, Zap, ArrowRight, BarChart3, Wallet, Clock, LockKeyhole } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Dynasty Bitcoin IRA | Zero Capital Gains Tax",
  description:
    "Structure generational crypto wealth with tax-free growth. Segregated cold storage and institutional liquidity access.",
}

export default function Home() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F9F7F5]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-0 lg:grid-cols-[1fr_1fr] items-center pl-0 md:pl-[148px] lg:pl-[180px]">
              <div className="flex flex-col justify-center space-y-6 pr-0 md:pr-4 lg:pr-0">
                <div className="space-y-4">
                  <div className="text-sm md:text-base tracking-widest font-montserrat font-medium text-navy">
                    BEYOND BITCOIN: MULTI-CHAIN IRA SOLUTIONS
                  </div>
                  <h1 className="font-cormorant leading-tight tracking-tight">
                    <div className="text-6xl md:text-7xl font-light italic">
                      <span className="text-gold">Dynasty</span> <span className="text-navy">Bitcoin IRA</span>
                    </div>
                    <div className="text-3xl md:text-4xl font-light mt-3">
                      <span className="text-gold">Zero Capital Gains Tax</span> for{" "}
                      <span className="text-gold">Generational Wealth</span>
                    </div>
                  </h1>
                  <p className="font-montserrat font-light text-sm md:text-base text-[#4A4A4A] max-w-[550px]">
                    For families building lasting legacies, a{" "}
                    <span className="text-navy font-medium">Dynasty Bitcoin IRA</span> offers the only{" "}
                    <span className="text-gold font-medium">tax-free</span> path to grow and transfer cryptocurrency
                    wealth across generations.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button
                    asChild
                    className="bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold text-[15px] tracking-wide py-3 px-6 h-auto"
                  >
                    <Link href="/get-started" className="flex items-center">
                      Lock In Tax-Free Growth <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy hover:text-white font-montserrat font-medium text-[14px] tracking-wide py-3 px-6 h-auto"
                  >
                    <Link href="/contact">Limited Capacity – Apply Now</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-[90%] h-auto">
                  <img
                    alt="Affluent client in navy blue suit"
                    className="object-cover object-center w-full h-auto max-h-[650px] rounded-lg"
                    src="/affluent-client.png"
                    width="800"
                    height="800"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-cormorant font-normal text-3xl sm:text-4xl md:text-5xl text-center mb-8">
                For Investors Who Refuse to Be <span className="text-gold">Tax Hostages</span>
              </h2>

              <div className="mb-8">
                <h3 className="font-cormorant font-medium text-2xl text-navy mb-3">
                  Trade Bitcoin Without Tax Paralysis
                </h3>
                <p className="font-montserrat font-light text-[#4A4A4A] text-lg mb-6">
                  <span className="font-medium text-navy">Problem:</span> Selling Bitcoin in a bear market triggers
                  capital gains tax (up to 37% short-term). Investors hesitate, missing exits or rebalancing
                  opportunities.
                </p>

                <div className="bg-[#F9F7F5] p-6 rounded-lg border border-gray-100 shadow-sm">
                  <p className="font-montserrat italic text-lg text-navy mb-4">
                    "A Dynasty Bitcoin IRA removes the tax friction that forces investors to 'hold and hope' during
                    downturns. Rebalance your crypto portfolio like a hedge fund—without IRS penalties."
                  </p>
                </div>
              </div>

              <h3 className="font-cormorant font-medium text-2xl mb-6">Dynasty Bitcoin IRA Solution:</h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Wallet className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-cormorant font-semibold text-xl mb-2 text-navy">Zero Tax on Trades</h4>
                    <p className="font-montserrat font-light text-[#4A4A4A] text-base">
                      Buy/sell within your IRA with no capital gains penalties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-cormorant font-semibold text-xl mb-2 text-navy">Bear Market Agility</h4>
                    <p className="font-montserrat font-light text-[#4A4A4A] text-base">
                      Exit positions or rebalance instantly based on market conditions—not tax consequences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-cormorant font-semibold text-xl mb-2 text-navy">
                      24/7 Institutional Liquidity
                    </h4>
                    <p className="font-montserrat font-light text-[#4A4A4A] text-base">
                      Execute large OTC trades ($500K+) without slippage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <LockKeyhole className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-cormorant font-semibold text-xl mb-2 text-navy">Protected Wealth</h4>
                    <p className="font-montserrat font-light text-[#4A4A4A] text-base">
                      Even during sell-offs, assets stay in $250M-insured cold storage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  asChild
                  className="bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold text-[15px] tracking-wide py-3 px-6 h-auto"
                >
                  <Link href="/get-started" className="flex items-center">
                    Eliminate Tax Friction <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white" id="how-it-works">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-cormorant font-normal text-3xl sm:text-4xl md:text-5xl">
                  Structure <span className="text-gold">Generational Crypto Wealth</span> Tax-Free
                </h2>
                <p className="max-w-[900px] text-[#4A4A4A] font-montserrat font-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A Dynasty Bitcoin IRA lets high-net-worth families eliminate capital gains tax while passing crypto
                  wealth to future generations. With segregated cold storage and institutional liquidity access, this is
                  the premier solution for $500K+ retirement rollovers seeking tax-free growth and military-grade
                  security.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium font-cormorant">
                    How a Bitcoin IRA Preserves Wealth Across Decades
                  </h3>
                  <p className="text-[#4A4A4A] font-montserrat font-light">
                    Roll over existing retirement funds tax-free and invest in Bitcoin and other cryptocurrencies with
                    potential for exponential growth.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium font-cormorant">
                    $250M Custody Protection & Institutional-Grade Security
                  </h3>
                  <p className="text-[#4A4A4A] font-montserrat font-light">
                    Your cryptocurrency is stored in segregated cold storage with up to $250 million in insurance
                    protection against theft or hacking.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium font-cormorant">Estate Planning Strategies for Crypto IRAs</h3>
                  <p className="text-[#4A4A4A] font-montserrat font-light">
                    Specialized estate planning solutions to ensure your digital assets transfer seamlessly to your
                    beneficiaries.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h3 className="text-2xl font-medium font-cormorant mb-6">How It Works in 3 Steps:</h3>
              <ul className="grid gap-6 md:grid-cols-3">
                <li className="flex flex-col items-center space-y-3 rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-navy font-cormorant text-xl font-medium">
                    1
                  </div>
                  <p className="font-medium font-montserrat text-navy">Roll over 401(k)/IRA funds tax-free</p>
                </li>
                <li className="flex flex-col items-center space-y-3 rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-navy font-cormorant text-xl font-medium">
                    2
                  </div>
                  <p className="font-medium font-montserrat text-navy">Buy Bitcoin with institutional liquidity</p>
                </li>
                <li className="flex flex-col items-center space-y-3 rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-navy font-cormorant text-xl font-medium">
                    3
                  </div>
                  <p className="font-medium font-montserrat text-navy">Preserve wealth in $250M-insured cold storage</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#F9F7F5]" id="video-section">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="font-cormorant font-normal text-3xl sm:text-4xl md:text-5xl">
                  Why Bitcoin IRAs Are the <span className="text-gold">Ultimate Retirement Hack</span> (Tax-Free
                  Growth!)
                </h2>
                <p className="max-w-[900px] text-[#4A4A4A] font-montserrat font-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Watch how Bitcoin IRAs can potentially 100X your retirement savings with zero capital gains tax
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl">
              <VideoEmbed />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white" id="benefits">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-cormorant font-normal text-3xl sm:text-4xl md:text-5xl">
                  <span className="text-gold">Institutional Liquidity</span> for High-Net-Worth Portfolios
                </h2>
                <p className="max-w-[900px] text-[#4A4A4A] font-montserrat font-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover why thousands of investors are moving their retirement funds into Bitcoin IRAs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-3">
                  <li>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-gold mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-medium leading-none font-montserrat">Tax-Free Growth Potential</p>
                        <p className="text-sm text-[#4A4A4A] font-montserrat font-light">
                          All gains from your Bitcoin investments grow 100% tax-free in a Roth IRA
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-gold mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-medium leading-none font-montserrat">
                          Exclusive OTC Trading Desk for $500K+ Accounts
                        </p>
                        <p className="text-sm text-[#4A4A4A] font-montserrat font-light">
                          Access institutional pricing and liquidity unavailable to retail investors
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-gold mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-medium leading-none font-montserrat">
                          Diversification Beyond Traditional Assets
                        </p>
                        <p className="text-sm text-[#4A4A4A] font-montserrat font-light">
                          Add an uncorrelated asset class to your retirement portfolio
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-gold mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-medium leading-none font-montserrat">Inflation Protection</p>
                        <p className="text-sm text-[#4A4A4A] font-montserrat font-light">
                          Bitcoin's fixed supply of 21 million coins provides a hedge against currency devaluation
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-3">
                  <li>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-gold mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-medium leading-none font-montserrat">$250M Insurance Protection</p>
                        <p className="text-sm text-[#4A4A4A] font-montserrat font-light">
                          Your assets are secured with institutional-grade cold storage and comprehensive insurance
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-gold mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-medium leading-none font-montserrat">24/7 Global Trading</p>
                        <p className="text-sm text-[#4A4A4A] font-montserrat font-light">
                          Unlike traditional markets, Bitcoin trades around the clock, every day of the year
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-gold mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-medium leading-none font-montserrat">IRS-Compliant Structure</p>
                        <p className="text-sm text-[#4A4A4A] font-montserrat font-light">
                          All accounts are fully compliant with IRS regulations for self-directed IRAs
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-gold mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-medium leading-none font-montserrat">Exclusive Bonus Offers</p>
                        <p className="text-sm text-[#4A4A4A] font-montserrat font-light">
                          Get up to $50,000 in bonuses when you open an account through our partner links
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#F9F7F5]" id="comparison">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-cormorant font-normal text-3xl sm:text-4xl md:text-5xl">
                  Compare Top <span className="text-gold">Bitcoin IRA</span> Providers
                </h2>
                <p className="max-w-[900px] text-[#4A4A4A] font-montserrat font-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find the best Bitcoin IRA company for your needs with our comprehensive comparison
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <ComparisonTable />
            </div>
            <div className="text-center mt-8">
              <Button asChild className="bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold">
                <Link href="/compare-providers">
                  View Detailed Provider Comparison <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white" id="faq">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-cormorant font-normal text-3xl sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-[#4A4A4A] font-montserrat font-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get answers to common questions about Bitcoin IRAs
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <FAQSection />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-navy to-navy/90 text-white">
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
              <Link href="/self-directed-crypto-ira" className="hover:underline underline-offset-4">
                Crypto IRA Guide
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
                "name": "How does a Dynasty Bitcoin IRA avoid capital gains tax?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Funds grow tax-free under IRS code 408, with zero capital gains when properly structured for generational transfers."
                }
              },
              {
                "@type": "Question",
                "name": "Can you hold Bitcoin in an IRA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can hold Bitcoin and other cryptocurrencies in a self-directed IRA. The IRS allows alternative assets like cryptocurrencies to be held in self-directed IRAs through a qualified custodian."
                }
              },
              {
                "@type": "Question",
                "name": "Is a Bitcoin IRA safe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bitcoin IRAs can be safe when you choose a reputable provider with strong security measures. Top Bitcoin IRA companies store cryptocurrencies in cold storage (offline) and offer insurance protection against theft and hacking."
                }
              },
              {
                "@type": "Question",
                "name": "What are the fees for a Bitcoin IRA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bitcoin IRA fees typically include: 1) Setup fees ($0-$100), 2) Annual maintenance fees (0.05%-0.15% monthly or flat fees), 3) Trading fees (1%-5% per transaction), and 4) Storage fees for secure custody."
                }
              }
            ]
          }
        `}
      </Script>
    </div>
  )
}
