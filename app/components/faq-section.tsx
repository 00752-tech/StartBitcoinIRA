"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-cormorant font-medium text-left text-xl">
            Can you hold Bitcoin in an IRA?
          </AccordionTrigger>
          <AccordionContent className="font-montserrat font-light text-[#4A4A4A] text-base">
            Yes, you can hold Bitcoin and other cryptocurrencies in a self-directed IRA. The IRS allows alternative
            assets like cryptocurrencies to be held in self-directed IRAs through a qualified custodian. This gives you
            the opportunity to invest in Bitcoin with the same tax advantages as traditional retirement accounts.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-cormorant font-medium text-left text-xl">
            Is a Bitcoin IRA safe?
          </AccordionTrigger>
          <AccordionContent className="font-montserrat font-light text-[#4A4A4A] text-base">
            Bitcoin IRAs can be safe when you choose a reputable provider with strong security measures. Top Bitcoin IRA
            companies store cryptocurrencies in cold storage (offline) and offer insurance protection against theft and
            hacking. However, like all investments, Bitcoin itself carries market risk and volatility that is separate
            from the security of the custodial arrangement.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-cormorant font-medium text-left text-xl">
            How do I invest in Bitcoin with a Roth IRA?
          </AccordionTrigger>
          <AccordionContent className="font-montserrat font-light text-[#4A4A4A] text-base">
            To invest in Bitcoin with a Roth IRA, you need to: 1) Open a self-directed Roth IRA with a custodian that
            allows cryptocurrency investments, 2) Fund your account with after-tax dollars (subject to annual
            contribution limits), 3) Direct your custodian to purchase Bitcoin or other cryptocurrencies, and 4) Enjoy
            tax-free growth and qualified withdrawals in retirement.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-cormorant font-medium text-left text-xl">
            What are the fees for a Bitcoin IRA?
          </AccordionTrigger>
          <AccordionContent className="font-montserrat font-light text-[#4A4A4A] text-base">
            Bitcoin IRA fees typically include: 1) Setup fees ($0-$100), 2) Annual maintenance fees (0.05%-0.15% monthly
            or flat fees), 3) Trading fees (1%-5% per transaction), and 4) Storage fees for secure custody. These fees
            vary by provider, so it's important to compare the total cost structure when choosing a Bitcoin IRA company.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-cormorant font-medium text-left text-xl">
            Can I roll over my 401(k) to a Bitcoin IRA?
          </AccordionTrigger>
          <AccordionContent className="font-montserrat font-light text-[#4A4A4A] text-base">
            Yes, you can roll over funds from a 401(k), traditional IRA, or other qualified retirement accounts into a
            Bitcoin IRA without tax penalties. This is typically done through a direct rollover to avoid withholding
            taxes. The process involves opening a self-directed IRA, completing rollover paperwork, and then directing
            the new custodian to invest in Bitcoin.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
