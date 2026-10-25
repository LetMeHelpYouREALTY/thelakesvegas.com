import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Mountain, Users, ShoppingBag, Home as HomeIcon } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/sections/FAQSection";
import LocalServiceAreaBlurb from "@/components/seo/LocalServiceAreaBlurb";
import { neighborhoodPageGraph } from "@/lib/neighborhood-page-graph";

export const metadata: Metadata = buildPageMetadata({
  path: "/neighborhoods/centennial-hills",
  title: "Berkshire Hathaway HomeServices Centennial Hills | Las Vegas Homes",
  description: "Find Centennial Hills homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy specializes in this established northwest community. Median price $495K. Call (702) 500-1942.",
  keywords: [
    "Berkshire Hathaway HomeServices Centennial Hills",
    "Centennial Hills homes for sale",
    "Centennial Hills Las Vegas",
    "northwest Las Vegas real estate",
    "family homes Las Vegas",
  ],
});

const centennialHillsNeighborhoodFaqs = [
  {
    question: "What is the current median home price in Centennial Hills?",
    answer:
      "As of January 2026, Centennial Hills' median home price is $495,000, up 4.8% year-over-year. Prices range from $380,000 for smaller homes to over $900,000 for larger properties with mountain views.",
  },
  {
    question: "Is Centennial Hills a good family neighborhood?",
    answer:
      "Yes, Centennial Hills is one of Las Vegas's best family neighborhoods with highly-rated schools, safe streets, multiple parks including Centennial Hills Park, and convenient shopping at Centennial Center.",
  },
  {
    question: "How far is Centennial Hills from the Las Vegas Strip?",
    answer:
      "Centennial Hills is approximately 20-25 minutes from the Strip via US-95. The community offers easy freeway access while maintaining a suburban, amenity-focused atmosphere away from tourist areas.",
  },
  {
    question: "What shopping and amenities are near Centennial Hills?",
    answer:
      "Centennial Center provides extensive shopping, dining, and entertainment including Target, Costco, and numerous restaurants. Downtown Summerlin is also easily accessible for additional retail and entertainment options.",
  },
];

const centennialHillsPageSchemas = neighborhoodPageGraph({
  slug: "centennial-hills",
  name: "Centennial Hills",
  breadcrumbLabel: "Centennial Hills",
  description:
    "Northwest Las Vegas community with mountain access, parks, pools, and community amenities.",
  faqs: centennialHillsNeighborhoodFaqs,
  latitude: 36.3047,
  longitude: -115.3019,
  containedIn: "Las Vegas",
});

export default function CentennialHillsPage() {
  return (
    <>
      <SchemaScript id="neighborhood-centennial-hills-schema" schema={centennialHillsPageSchemas} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/neighborhoods" className="hover:text-blue-600">Neighborhoods</Link>
              {" / "}
              <span className="text-slate-900">Centennial Hills</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Berkshire Hathaway HomeServices Centennial Hills
            </h1>
            <p className="text-xl text-slate-600">
              Park-rich northwest Las Vegas living. Find your Centennial Hills home with{" "}
              <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <LocalServiceAreaBlurb topic="Centennial Hills home search" />
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Centennial Hills Market | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$495,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">25 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">203</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+4.8%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Centennial Hills: Northwest Las Vegas's Established Master-Planned Community
              </h2>
              <p>
                <strong>Centennial Hills</strong> represents the best of established northwest Las Vegas
                living. While newer communities like Skye Canyon attract attention, Centennial Hills
                offers something they can't: mature neighborhoods with proven schools, established
                landscaping, and a genuine sense of community built over nearly two decades.
                <strong> Berkshire Hathaway HomeServices</strong> helps families discover why
                Centennial Hills remains one of the valley's most desirable addresses.
              </p>
              <p>
                The community's appeal starts with location. Positioned at the base of the mountains
                with easy access to US-95, Centennial Hills provides quick commutes throughout the
                valley while maintaining a distinctly suburban atmosphere. The mountains are visible
                from most streets, creating the feeling of living closer to nature than Centennial
                Hills' urban conveniences would suggest.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has represented
                Centennial Hills families since the community's earliest phases. Dr. Jan Duffy knows
                which streets offer the best mountain views, which school zones are most sought-after,
                and which HOAs maintain their communities to the highest standards. This deep local
                knowledge, combined with the BHHS commitment to client service, ensures Centennial
                Hills buyers and sellers receive exceptional representation.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Established Master-Planned Community</h4>
                  </div>
                  <p className="text-slate-600">
                    Centennial Hills has matured into a true community where neighbors know each other
                    and families put down roots. The area features multiple established parks including
                    the popular Centennial Hills Park, community events throughout the year, and the
                    kind of neighborhood stability that creates lifelong friendships and strong property values.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Centennial Center Convenience</h4>
                  </div>
                  <p className="text-slate-600">
                    Centennial Center provides residents with comprehensive shopping, dining, and
                    entertainment options without leaving the neighborhood. Major retailers like Target,
                    Costco, and Home Depot anchor the center, while diverse restaurants and services
                    meet daily needs. Downtown Summerlin is also just minutes away.
                  </p>
                </div>
              </div>

              {/* Schools */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Centennial Hills School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Centennial Hills is served by established, well-regarded schools with proven track records:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Ober Elementary (8/10)</li>
                      <li>• Cashman Elementary</li>
                      <li>• Scherkenbach Elementary</li>
                      <li>• Hummel Elementary</li>
                      <li>• McMillan Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Centennial High School (7/10)</li>
                      <li>• Shadow Ridge High School</li>
                      <li>• Arbor View High School</li>
                      <li>• Becker Middle School</li>
                      <li>• Escobedo Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Charter/Private</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Pinecrest Academy</li>
                      <li>• Somerset Academy</li>
                      <li>• Coral Academy of Science</li>
                      <li>• Faith Lutheran (nearby)</li>
                      <li>• The Meadows School (nearby)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Centennial Hills</h3>
              <div className="not-prose overflow-x-auto">
                <table className="w-full bg-white border border-slate-200 rounded-lg">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Destination</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Distance</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Drive Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Rush Hour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr><td className="px-4 py-3">Downtown Summerlin</td><td className="px-4 py-3">6 miles</td><td className="px-4 py-3">12 min</td><td className="px-4 py-3">18-25 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">22 min</td><td className="px-4 py-3">30-45 min</td></tr>
                    <tr><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">25 min</td><td className="px-4 py-3">35-50 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-40 min</td></tr>
                    <tr><td className="px-4 py-3">Henderson</td><td className="px-4 py-3">25 miles</td><td className="px-4 py-3">30 min</td><td className="px-4 py-3">45-60 min</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-2 not-prose">
                Centennial Hills' proximity to US-95 provides excellent north-south access throughout the valley.
              </p>

              {/* Shopping & Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Healthcare</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Centennial Center</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Major Retail:</strong> Target, Costco, Home Depot, Best Buy, Kohl's</li>
                    <li><strong>Grocery:</strong> Smith's, Trader Joe's, Whole Foods nearby</li>
                    <li><strong>Dining:</strong> 50+ restaurants including Red Robin, BJ's, Cheesecake Factory</li>
                    <li><strong>Entertainment:</strong> Century 18 Theatres, bowling, fitness centers</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Healthcare & Services</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Centennial Hills Hospital:</strong> Full-service hospital, 24/7 ER, maternity center</li>
                    <li><strong>Southwest Medical:</strong> Multiple primary care and urgent care locations</li>
                    <li><strong>Dignity Health:</strong> Clinics and specialty services</li>
                    <li><strong>VA Medical Center:</strong> 10 minutes for veteran services</li>
                  </ul>
                </div>
              </div>

              {/* Parks & Recreation */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Parks & Recreation</h3>
              <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Centennial Hills offers extensive parks and recreation facilities:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Centennial Hills Park:</strong> 120 acres with sports fields, playground, skate park, dog park</li>
                    <li><strong>Centennial Hills YMCA:</strong> Full fitness facility, pools, youth programs</li>
                    <li><strong>Centennial Hills Library:</strong> Modern library with programs and events</li>
                  </ul>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Angel Park Golf Club:</strong> Two public courses, 36 holes of golf</li>
                    <li><strong>Floyd Lamb Park:</strong> 15 minutes—680 acres, lakes, wildlife viewing</li>
                    <li><strong>Mountain Trails:</strong> Easy access to BLM land for hiking and biking</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                The current market shows <strong>203 active listings</strong> with homes averaging
                <strong> 25 days on market</strong>. The median price of <strong>$495,000</strong>
                represents solid 4.8% year-over-year appreciation while remaining more accessible
                than Summerlin's higher-priced neighborhoods. Properties range from $380,000 for
                smaller homes to over $900,000 for larger properties with premium lots and views.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in Centennial Hills means
                partnering with agents who understand the community's evolution and can identify
                properties that represent genuine value. Dr. Jan Duffy helps buyers look beyond
                surface features to evaluate factors that matter long-term: construction quality,
                lot positioning, HOA health, and school quality. That expertise translates into
                better purchase decisions and stronger long-term investments.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Centennial Hills offers something newer communities are still building: a genuine
                sense of community. The schools have track records, the neighbors have history, and
                the landscaping is mature. As a Berkshire Hathaway HomeServices agent, I help families
                see beyond the shiny new construction to communities that have proven their value
                over time."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          <FAQSection
            className="!py-12 bg-slate-50"
            title="Frequently Asked Questions About Centennial Hills"
            subtitle="Northwest Las Vegas families, schools, and amenities"
            faqs={centennialHillsNeighborhoodFaqs}
          />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Centennial Hills Home
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices Centennial Hills expert,
              for guidance in this established master-planned community.
            </p>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-1942
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
