import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Blog() {
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
            <div className="space-y-4 text-center">
              <h1 className="font-cormorant font-light text-4xl sm:text-5xl md:text-6xl">
                Bitcoin IRA <span className="text-gold">Resources & Guides</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-[#4A4A4A] font-montserrat font-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Expert guides, tutorials, and resources to help you make informed decisions about your Bitcoin IRA
              </p>
            </div>
            <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <Link href="/self-directed-crypto-ira">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="/blog-crypto-ira-guide.png"
                      alt="Self-Directed Crypto IRA Guide"
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#4A4A4A] font-montserrat font-light mb-2">
                      May 15, 2025 • Published by StartBitcoinIRA – A perspective forged through 42 years of market
                      cycles (since 1982) and 5+ years of active crypto investing through volatility.
                    </div>
                    <h3 className="text-xl font-medium font-cormorant mb-2 group-hover:text-gold transition-colors">
                      Self-Directed Crypto IRA Guide: How to Invest Bitcoin in an IRA (2025)
                    </h3>
                    <p className="text-[#4A4A4A] font-montserrat font-light">
                      Learn how a self-directed IRA works for crypto, compare top providers, and avoid IRS penalties.
                      Start a tax-free crypto retirement today.
                    </p>
                    <div className="mt-4 flex items-center text-gold font-medium font-montserrat">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <Link href="/blog/how-to-start-bitcoin-ira">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="/blog-start-bitcoin-ira.png"
                      alt="How to Start a Bitcoin IRA"
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#4A4A4A] font-montserrat font-light mb-2">
                      May 10, 2025 • Published by StartBitcoinIRA – A perspective forged through 42 years of market
                      cycles (since 1982) and 5+ years of active crypto investing through volatility.
                    </div>
                    <h3 className="text-xl font-medium font-cormorant mb-2 group-hover:text-gold transition-colors">
                      How to Start a Bitcoin IRA in 2025 (Step-by-Step Guide)
                    </h3>
                    <p className="text-[#4A4A4A] font-montserrat font-light">
                      Learn how to set up your Bitcoin IRA, fund your account, and start investing in cryptocurrency for
                      your retirement.
                    </p>
                    <div className="mt-4 flex items-center text-gold font-medium font-montserrat">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <Link href="/blog/bitcoin-ira-vs-traditional">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="/blog-comparison.png"
                      alt="Bitcoin IRA vs Traditional IRA"
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#4A4A4A] font-montserrat font-light mb-2">
                      May 5, 2025 • Published by StartBitcoinIRA – A perspective forged through 42 years of market
                      cycles (since 1982) and 5+ years of active crypto investing through volatility.
                    </div>
                    <h3 className="text-xl font-medium font-cormorant mb-2 group-hover:text-gold transition-colors">
                      Bitcoin IRA vs. Traditional IRA: Which is Right for You?
                    </h3>
                    <p className="text-[#4A4A4A] font-montserrat font-light">
                      Compare the benefits, risks, and potential returns of Bitcoin IRAs and traditional retirement
                      accounts.
                    </p>
                    <div className="mt-4 flex items-center text-gold font-medium font-montserrat">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <Link href="/blog/bitcoin-ira-tax-benefits">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="/blog-tax-benefits.png"
                      alt="Tax Benefits of Bitcoin IRAs"
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#4A4A4A] font-montserrat font-light mb-2">
                      April 28, 2025 • Published by StartBitcoinIRA – A perspective forged through 42 years of market
                      cycles (since 1982) and 5+ years of active crypto investing through volatility.
                    </div>
                    <h3 className="text-xl font-medium font-cormorant mb-2 group-hover:text-gold transition-colors">
                      5 Tax Benefits of Bitcoin IRAs You Need to Know
                    </h3>
                    <p className="text-[#4A4A4A] font-montserrat font-light">
                      Discover how a Bitcoin IRA can provide significant tax advantages for your cryptocurrency
                      investments.
                    </p>
                    <div className="mt-4 flex items-center text-gold font-medium font-montserrat">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <Link href="/blog/bitcoin-ira-providers-comparison">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="/blog-providers.png"
                      alt="Bitcoin IRA Providers Comparison"
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#4A4A4A] font-montserrat font-light mb-2">
                      April 20, 2025 • Published by StartBitcoinIRA – A perspective forged through 42 years of market
                      cycles (since 1982) and 5+ years of active crypto investing through volatility.
                    </div>
                    <h3 className="text-xl font-medium font-cormorant mb-2 group-hover:text-gold transition-colors">
                      Bitcoin IRA vs. iTrustCapital: Which is Best for You?
                    </h3>
                    <p className="text-[#4A4A4A] font-montserrat font-light">
                      An in-depth comparison of two leading Bitcoin IRA providers to help you make the right choice.
                    </p>
                    <div className="mt-4 flex items-center text-gold font-medium font-montserrat">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <Link href="/blog/zero-fee-bitcoin-ira">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="/blog-zero-fees.png"
                      alt="Zero Fee Bitcoin IRA"
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#4A4A4A] font-montserrat font-light mb-2">
                      April 15, 2025 • Published by StartBitcoinIRA – A perspective forged through 42 years of market
                      cycles (since 1982) and 5+ years of active crypto investing through volatility.
                    </div>
                    <h3 className="text-xl font-medium font-cormorant mb-2 group-hover:text-gold transition-colors">
                      Start a Bitcoin IRA with $0 Fees (2025 Promo Codes)
                    </h3>
                    <p className="text-[#4A4A4A] font-montserrat font-light">
                      Learn how to avoid fees and maximize your Bitcoin IRA investment with these exclusive promotions.
                    </p>
                    <div className="mt-4 flex items-center text-gold font-medium font-montserrat">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <Link href="/blog/bitcoin-ira-mistakes">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="/blog-mistakes.png"
                      alt="Bitcoin IRA Mistakes"
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#4A4A4A] font-montserrat font-light mb-2">
                      April 8, 2025 • Published by StartBitcoinIRA – A perspective forged through 42 years of market
                      cycles (since 1982) and 5+ years of active crypto investing through volatility.
                    </div>
                    <h3 className="text-xl font-medium font-cormorant mb-2 group-hover:text-gold transition-colors">
                      5 Mistakes to Avoid When Starting a Bitcoin IRA
                    </h3>
                    <p className="text-[#4A4A4A] font-montserrat font-light">
                      Don't fall into these common traps when setting up your cryptocurrency retirement account.
                    </p>
                    <div className="mt-4 flex items-center text-gold font-medium font-montserrat">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-medium shadow-sm gap-2 hover:bg-gray-50 transition-colors">
                <span className="text-navy font-montserrat font-medium">Subscribe to our newsletter</span>
                <ArrowRight className="h-4 w-4 text-gold" />
              </div>
              <p className="mt-2 text-sm text-[#4A4A4A] font-montserrat font-light">
                Get the latest Bitcoin IRA news and exclusive offers delivered to your inbox
              </p>
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
    </div>
  )
}
