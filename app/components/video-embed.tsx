import Script from "next/script"

export function VideoEmbed() {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="w-full max-w-3xl bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="border-2 border-gold-light rounded-lg overflow-hidden">
          <div className="aspect-video relative">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Pi6CfGgXUN8?si=WuboJM73yDIvDDJE"
              title="Why Bitcoin IRAs Can 100X Your Retirement (Tax-Free)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold font-cormorant text-navy">
            Why Smart Investors Are Moving Retirement Funds into Bitcoin IRAs
          </h3>
          <p className="text-gray-700 font-montserrat text-sm">
            With inflation destroying traditional savings, Bitcoin IRAs let you grow wealth tax-free while hedging
            against economic chaos. As Michael Saylor says, 'Every Bitcoin you don't buy is a $13M missed opportunity by
            2045.'
          </p>

          <div className="space-y-2 bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium font-cormorant text-lg text-navy">Video Highlights:</h4>
            <ul className="space-y-2 text-sm font-montserrat font-light text-[#4A4A4A]">
              <li className="flex gap-2">
                <span className="font-medium font-montserrat text-gold-dark">00:00 - 00:34:</span>
                <span className="font-montserrat">
                  "Every Bitcoin you don't buy is a $13M opportunity cost by 2045."
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium font-montserrat text-gold-dark">00:35 - 01:31:</span>
                <span className="font-montserrat">
                  "Bitcoin is a lifeboat against inflation, bailouts, and currency collapse."
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium font-montserrat text-gold-dark">01:32 - 03:07:</span>
                <span className="font-montserrat">
                  "Bitcoin recovers faster than stocks, gold, or bonds in crises."
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium font-montserrat text-gold-dark">03:08 - 04:45:</span>
                <span className="font-montserrat">
                  "Bitcoin is the ONLY asset tradable 24/7 globally—no tariffs, no supply chain risks."
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium font-montserrat text-gold-dark">04:46 - END:</span>
                <span className="font-montserrat">
                  "The US government is quietly embracing Bitcoin (ETFs, pro-crypto policies)."
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Script id="video-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Why Bitcoin IRAs Can 100X Your Retirement",
            "description": "How to grow wealth tax-free with Bitcoin IRAs, backed by Michael Saylor's $10M prediction.",
            "thumbnailUrl": "https://i.ytimg.com/vi/Pi6CfGgXUN8/maxresdefault.jpg",
            "uploadDate": "2025-05-20",
            "duration": "PT5M30S",
            "embedUrl": "https://www.youtube.com/embed/Pi6CfGgXUN8"
          }
        `}
      </Script>
    </div>
  )
}
