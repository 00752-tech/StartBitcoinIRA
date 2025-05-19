import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft } from "lucide-react"

export default function GetStarted() {
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
            <div className="mx-auto max-w-2xl space-y-8">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Compare the Best Bitcoin IRA Companies of 2025
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get personalized recommendations and up to $50K in bonuses when you open an account
                </p>
              </div>
              <div className="space-y-6 rounded-lg border p-8 shadow-sm">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                </div>
                <div className="space-y-2">
                  <Label>Investment Experience</Label>
                  <RadioGroup defaultValue="beginner">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beginner" id="beginner" />
                      <Label htmlFor="beginner">Beginner</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermediate" id="intermediate" />
                      <Label htmlFor="intermediate">Intermediate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="advanced" id="advanced" />
                      <Label htmlFor="advanced">Advanced</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label>Estimated Investment Amount</Label>
                  <RadioGroup defaultValue="10k-50k">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="under-10k" id="under-10k" />
                      <Label htmlFor="under-10k">Under $10,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10k-50k" id="10k-50k" />
                      <Label htmlFor="10k-50k">$10,000 - $50,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="50k-100k" id="50k-100k" />
                      <Label htmlFor="50k-100k">$50,000 - $100,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="over-100k" id="over-100k" />
                      <Label htmlFor="over-100k">Over $100,000</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600">Get My Free Comparison Report</Button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our{" "}
                  <Link href="/terms" className="underline underline-offset-2">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="mt-8 text-center">
                <div className="flex justify-center mb-4">
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
                <p className="text-sm text-gray-500">
                  "I saved over $3,000 in fees by comparing Bitcoin IRA providers through this site." - Michael T.
                </p>
              </div>
              <div className="text-center">
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
        </div>
      </footer>
    </div>
  )
}
