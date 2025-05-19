import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { RetirementCalculator } from "@/app/components/calculator"
import { LeadMagnetForm } from "@/app/components/lead-magnet-form"

export default function Tools() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">StartBitcoinIRA</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="/#benefits" className="text-sm font-medium hover:underline underline-offset-4">
              Benefits
            </Link>
            <Link href="/compare" className="text-sm font-medium hover:underline underline-offset-4">
              Compare
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild className="bg-amber-500 hover:bg-amber-600">
              <Link href="/get-started">Compare Providers</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Bitcoin IRA Calculator</h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how much more you could earn with a Bitcoin IRA compared to traditional investments
                </p>
              </div>

              <div className="grid gap-8 mt-12 md:grid-cols-3">
                <div className="md:col-span-2">
                  <RetirementCalculator />
                </div>

                <div className="md:col-span-1">
                  <LeadMagnetForm />

                  <div className="mt-8 rounded-lg border bg-blue-50 p-6">
                    <h3 className="text-lg font-bold mb-2">Did You Know?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Bitcoin has outperformed traditional assets like stocks and gold over the past decade, with an
                      average annual return of over 200%.
                    </p>
                    <p className="text-sm text-gray-600">
                      While past performance doesn't guarantee future results, many investors are adding Bitcoin to
                      their retirement portfolios for potential growth.
                    </p>
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
