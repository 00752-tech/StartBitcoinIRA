"use client"

import Link from "next/link"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RetirementCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000)
  const [monthlyContribution, setMonthlyContribution] = useState(500)
  const [years, setYears] = useState(20)
  const [bitcoinReturn, setBitcoinReturn] = useState(20)
  const [traditionalReturn, setTraditionalReturn] = useState(8)

  // Calculate Bitcoin IRA results
  const calculateBitcoinResults = () => {
    let total = initialInvestment
    const monthlyRate = bitcoinReturn / 100 / 12

    for (let i = 0; i < years * 12; i++) {
      total = total * (1 + monthlyRate) + monthlyContribution
    }

    return Math.round(total)
  }

  // Calculate Traditional IRA results
  const calculateTraditionalResults = () => {
    let total = initialInvestment
    const monthlyRate = traditionalReturn / 100 / 12

    for (let i = 0; i < years * 12; i++) {
      total = total * (1 + monthlyRate) + monthlyContribution
    }

    return Math.round(total)
  }

  const bitcoinTotal = calculateBitcoinResults()
  const traditionalTotal = calculateTraditionalResults()
  const difference = bitcoinTotal - traditionalTotal

  return (
    <div className="border rounded-lg p-6 bg-white">
      <h3 className="text-xl font-bold mb-4">Bitcoin IRA Calculator</h3>
      <p className="text-gray-500 mb-6">Compare potential returns between a Bitcoin IRA and a Traditional IRA</p>

      <Tabs defaultValue="inputs" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="inputs">Inputs</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>

        <TabsContent value="inputs" className="space-y-6 pt-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="initial-investment">Initial Investment</Label>
              <span className="text-sm font-medium">${initialInvestment.toLocaleString()}</span>
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
              <Label htmlFor="monthly-contribution">Monthly Contribution</Label>
              <span className="text-sm font-medium">${monthlyContribution.toLocaleString()}</span>
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
              <Label htmlFor="years">Investment Period (Years)</Label>
              <span className="text-sm font-medium">{years} years</span>
            </div>
            <Slider
              id="years"
              min={1}
              max={40}
              step={1}
              value={[years]}
              onValueChange={(value) => setYears(value[0])}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="bitcoin-return">Bitcoin Annual Return (%)</Label>
              <span className="text-sm font-medium">{bitcoinReturn}%</span>
            </div>
            <Slider
              id="bitcoin-return"
              min={5}
              max={50}
              step={1}
              value={[bitcoinReturn]}
              onValueChange={(value) => setBitcoinReturn(value[0])}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="traditional-return">Traditional IRA Annual Return (%)</Label>
              <span className="text-sm font-medium">{traditionalReturn}%</span>
            </div>
            <Slider
              id="traditional-return"
              min={1}
              max={15}
              step={0.5}
              value={[traditionalReturn]}
              onValueChange={(value) => setTraditionalReturn(value[0])}
            />
          </div>

          <Button
            className="w-full bg-amber-500 hover:bg-amber-600"
            onClick={() => document.getElementById("results-tab")?.click()}
          >
            Calculate Results
          </Button>
        </TabsContent>

        <TabsContent value="results" id="results-tab" className="space-y-6 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="border rounded-lg p-4 bg-blue-50">
              <h4 className="font-medium text-center mb-2">Bitcoin IRA</h4>
              <p className="text-2xl font-bold text-center text-amber-600">${bitcoinTotal.toLocaleString()}</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h4 className="font-medium text-center mb-2">Traditional IRA</h4>
              <p className="text-2xl font-bold text-center">${traditionalTotal.toLocaleString()}</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="font-medium">Potential Difference:</p>
            <p className="text-xl font-bold text-green-600">+${difference.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mt-2">
              That's {Math.round((difference / traditionalTotal) * 100)}% more with a Bitcoin IRA!
            </p>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Note:</strong> This calculator is for illustrative purposes only. Past performance is not
              indicative of future results. Bitcoin investments carry higher risk and volatility than traditional
              investments.
            </p>
          </div>

          <Button className="w-full bg-amber-500 hover:bg-amber-600">
            <Link href="/get-started">Compare Bitcoin IRA Providers</Link>
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
