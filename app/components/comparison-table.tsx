import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ComparisonTable() {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full border-collapse text-sm font-montserrat">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left font-semibold">Provider</th>
            <th className="border px-4 py-2 text-left font-semibold">Setup Fee</th>
            <th className="border px-4 py-2 text-left font-semibold">Annual Fee</th>
            <th className="border px-4 py-2 text-left font-semibold">Crypto Options</th>
            <th className="border px-4 py-2 text-left font-semibold">Insurance</th>
            <th className="border px-4 py-2 text-left font-semibold">Bonus Offer</th>
            <th className="border px-4 py-2 text-left font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gold/10">
            <td className="border px-4 py-4 font-medium">Bitcoin IRA</td>
            <td className="border px-4 py-4">$50</td>
            <td className="border px-4 py-4">0.08% monthly</td>
            <td className="border px-4 py-4">60+ cryptocurrencies</td>
            <td className="border px-4 py-4">$700M insurance</td>
            <td className="border px-4 py-4 font-bold text-gold-dark">Up to $50,000 in crypto</td>
            <td className="border px-4 py-4">
              <Button asChild className="w-full bg-gold hover:bg-gold-dark text-black font-montserrat font-semibold">
                <Link href="https://bitcoinira.com" target="_blank">
                  Get Offer
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-4 font-medium">iTrustCapital</td>
            <td className="border px-4 py-4">$0</td>
            <td className="border px-4 py-4">1% per trade</td>
            <td className="border px-4 py-4">25+ cryptocurrencies</td>
            <td className="border px-4 py-4">$320M insurance</td>
            <td className="border px-4 py-4 font-bold text-gold-dark">$100 in BTC</td>
            <td className="border px-4 py-4">
              <Button asChild variant="outline" className="font-montserrat">
                <Link href="#" target="_blank">
                  Get Offer
                </Link>
              </Button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-4 font-medium">BitIRA</td>
            <td className="border px-4 py-4">$50</td>
            <td className="border px-4 py-4">$195 annual + 0.05% monthly storage</td>
            <td className="border px-4 py-4">10+ cryptocurrencies</td>
            <td className="border px-4 py-4">$1M insurance</td>
            <td className="border px-4 py-4 font-bold text-gold-dark">$1,000 in BTC</td>
            <td className="border px-4 py-4">
              <Button asChild variant="outline" className="font-montserrat">
                <Link href="#" target="_blank">
                  Get Offer
                </Link>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-[#4A4A4A] mt-2 font-montserrat font-light">
        * Fees and offers are subject to change. Last updated: May 2025.
      </p>
    </div>
  )
}
