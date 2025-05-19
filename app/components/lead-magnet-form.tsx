"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Check } from "lucide-react"

export function LeadMagnetForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your marketing system
    console.log("Email submitted:", email)
    setSubmitted(true)
  }

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      {!submitted ? (
        <>
          <h3 className="text-xl font-bold mb-4">
            Get Your Free Guide: "5 Mistakes to Avoid When Starting a Dynasty Bitcoin IRA"
          </h3>
          <p className="text-gray-500 mb-4">
            Join over 10,000 investors who have used our guide to maximize their Bitcoin IRA returns and build
            generational wealth.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
              Get Free Guide <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </>
      ) : (
        <div className="text-center py-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-500">Your free guide has been sent to {email}. Check your inbox!</p>
        </div>
      )}
    </div>
  )
}
