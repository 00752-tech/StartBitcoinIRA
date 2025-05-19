"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CryptoIraCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000)
  const [monthlyContribution, setMonthlyContribution] = useState(500)
  const [years, setYears] = useState(10)
  const [cryptoReturn, setCryptoReturn] = useState(15)
  const [taxRate, setTaxRate] = useState(20)

  // Calculate Roth IRA results (tax-free)
  const calculateRothResults = () => {
    let total = initialInvestment
    const monthlyRate = cryptoReturn / 100 / 12

    for (let i = 0; i < years * 12; i++) {
      total = total * (1 + monthlyRate) + monthlyContribution
    }

    return Math.round(total)
  }

  // Calculate Taxable Account results (subject to capital gains tax)
  const calculateTaxableResults = () => {
    let total = initialInvestment
    const monthlyRate = cryptoReturn / 100 / 12

    // For simplicity, we'll apply the tax rate to the entire growth at the end
    // In reality, taxes would be more complex with yearly rebalancing, etc.
    for (let i = 0; i < years * 12; i++) {
      total = total * (1 + monthlyRate) + monthlyContribution
    }

    // Calculate the growth portion (total - contributions)
    const totalContributions = initialInvestment + monthlyContribution * years * 12
    const growth = total - totalContributions

    // Apply capital gains tax to the growth portion
    const taxAmount = growth * (taxRate / 100)

    return Math.round(total - taxAmount)
  }

  const rothTotal = calculateRothResults()
  const taxableTotal = calculateTaxableResults()
  const difference = rothTotal - taxableTotal
  const percentageDifference = Math.round((difference / taxableTotal) * 100)

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold mb-4 font-montserrat">Crypto IRA Tax Savings Calculator</h3>
      <p className="text-[#4A4A4A] font-montserrat font-light mb-6">
        Compare potential returns between a tax-free Roth Crypto IRA and a taxable brokerage account
      </p>

      <Tabs defaultValue="inputs" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="inputs">Inputs</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>

        <TabsContent value="inputs" className="space-y-6 pt-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="initial-investment" className="font-montserrat">
                Initial Investment
              </Label>
              <span className="text-sm font-medium font-montserrat">${initialInvestment.toLocaleString()}</span>
            </div>
            <Slider
              id="initial-investment"
              min={1000}
              max={100000}
              step={1000}
              value={[initialInvestment]}
              onValueChange={(value) => setInitialInvestment(value[0])}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="monthly-contribution" className="font-montserrat">
                Monthly Contribution
              </Label>
              <span className="text-sm font-medium font-montserrat">${monthlyContribution.toLocaleString()}</span>
            </div>
            <Slider
              id="monthly-contribution"
              min={0}
              max={2000}
              step={50}
              value={[monthlyContribution]}
              onValueChange={(value) => setMonthlyContribution(value[0])}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="years" className="font-montserrat">
                Investment Period (Years)
              </Label>
              <span className="text-sm font-medium font-montserrat">{years} years</span>
            </div>
            <Slider
              id="years"
              min={1}
              max={30}
              step={1}
              value={[years]}
              onValueChange={(value) => setYears(value[0])}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="crypto-return" className="font-montserrat">
                Annual Crypto Return (%)
              </Label>
              <span className="text-sm font-medium font-montserrat">{cryptoReturn}%</span>
            </div>
            <Slider
              id="crypto-return"
              min={5}
              max={50}
              step={1}
              value={[cryptoReturn]}
              onValueChange={(value) => setCryptoReturn(value[0])}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="tax-rate" className="font-montserrat">
                Capital Gains Tax Rate (%)
              </Label>
              <span className="text-sm font-medium font-montserrat">{taxRate}%</span>
            </div>
            <Slider
              id="tax-rate"
              min={10}
              max={37}
              step={1}
              value={[taxRate]}
              onValueChange={(value) => setTaxRate(value[0])}
            />
          </div>

          <Button
            className="w-full bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold"
            onClick={() => document.getElementById("results-tab")?.click()}
          >
            Calculate Results
          </Button>
        </TabsContent>

        <TabsContent value="results" id="results-tab" className="space-y-6 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded-lg p-4 bg-blue-50">
              <h4 className="font-montserrat font-medium text-center mb-2">Roth Crypto IRA</h4>
              <p className="text-2xl font-bold text-center text-gold font-montserrat">${rothTotal.toLocaleString()}</p>
              <p className="text-xs text-center text-[#4A4A4A] font-montserrat font-light">Tax-free withdrawals</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h4 className="font-montserrat font-medium text-center mb-2">Taxable Account</h4>
              <p className="text-2xl font-bold text-center font-montserrat">${taxableTotal.toLocaleString()}</p>
              <p className="text-xs text-center text-[#4A4A4A] font-montserrat font-light">
                After {taxRate}% capital gains tax
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="font-medium font-montserrat">Tax Savings with Crypto IRA:</p>
            <p className="text-xl font-bold text-green-600 font-montserrat">+${difference.toLocaleString()}</p>
            <p className="text-sm text-[#4A4A4A] font-montserrat font-light mt-2">
              That's {percentageDifference}% more with a Roth Crypto IRA over {years} years!
            </p>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-sm font-montserrat font-light">
              <strong>Note:</strong> This calculator is for illustrative purposes only. Past performance is not
              indicative of future results. Crypto investments carry higher risk and volatility than traditional
              investments. Tax laws may change over time.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Button asChild className="bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold">
              <Link href="https://itrustcapital.com" target="_blank" className="flex items-center justify-center">
                Open an iTrustCapital IRA <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="font-montserrat">
              <Link href="https://bitcoinira.com" target="_blank" className="flex items-center justify-center">
                Open a BitcoinIRA Account <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
