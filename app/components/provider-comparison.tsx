import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProviderComparison() {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Provider</th>
            <th className="border px-4 py-2 text-left">Best For</th>
            <th className="border px-4 py-2 text-left">Setup Fee</th>
            <th className="border px-4 py-2 text-left">Annual Fee</th>
            <th className="border px-4 py-2 text-left">Crypto Options</th>
            <th className="border px-4 py-2 text-left">Insurance</th>
            <th className="border px-4 py-2 text-left">Bonus Offer</th>
            <th className="border px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-amber-50">
            <td className="border px-4 py-4 font-medium">Bitcoin IRA</td>
            <td className="border px-4 py-4">High Deposits</td>
            <td className="border px-4 py-4">$50</td>
            <td className="border px-4 py-4">0.08% monthly</td>
            <td className="border px-4 py-4">60+ cryptocurrencies</td>
            <td className="border px-4 py-4">$700M insurance</td>
            <td className="border px-4 py-4 font-bold text-green-600">Up to $50,000 in crypto</td>
            <td className="border px-4 py-4">
              <Button asChild className="w-full bg-amber-500 hover:bg-amber-600">
                <Link href="https://bitcoinira.com" target="_blank">
                  Get Offer
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-4 font-medium">iTrustCapital</td>
            <td className="border px-4 py-4">Altcoins</td>
            <td className="border px-4 py-4">$0</td>
            <td className="border px-4 py-4">1% per trade</td>
            <td className="border px-4 py-4">25+ cryptocurrencies</td>
            <td className="border px-4 py-4">$320M insurance</td>
            <td className="border px-4 py-4 font-bold text-green-600">$100 in BTC</td>
            <td className="border px-4 py-4">
              <Button asChild variant="outline">
                <Link href="#" target="_blank">
                  Get Offer
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-4 font-medium">Alto IRA</td>
            <td className="border px-4 py-4">Stocks + Crypto</td>
            <td className="border px-4 py-4">$0</td>
            <td className="border px-4 py-4">$10/month</td>
            <td className="border px-4 py-4">150+ cryptocurrencies</td>
            <td className="border px-4 py-4">$250M insurance</td>
            <td className="border px-4 py-4 font-bold text-green-600">$250 bonus</td>
            <td className="border px-4 py-4">
              <Button asChild variant="outline">
                <Link href="#" target="_blank">
                  Get Offer
                </Link>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-gray-500 mt-2">* Fees and offers are subject to change. Last updated: May 2025.</p>
    </div>
  )
}
