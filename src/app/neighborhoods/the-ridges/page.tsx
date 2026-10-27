import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Shield, Star, Mountain, Home as HomeIcon } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/sections/FAQSection";
import LocalServiceAreaBlurb from "@/components/seo/LocalServiceAreaBlurb";
import { neighborhoodPageGraph } from "@/lib/neighborhood-page-graph";

export const metadata: Metadata = buildPageMetadata({
  path: "/neighborhoods/the-ridges",
  title: "Berkshire Hathaway HomeServices The Ridges | Las Vegas Luxury Real Estate",
  description: "Find luxury homes in The Ridges with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy specializes in Summerlin's most exclusive guard-gated community. Median price $2.5M. Call (702) 500-1942.",
  keywords: [
    "Berkshire Hathaway HomeServices The Ridges",
    "The Ridges homes for sale",
    "The Ridges Summerlin",
    "luxury homes Las Vegas",
    "guard gated Summerlin",
  ],
});

const theRidgesNeighborhoodFaqs = [
  {
    question: "What is the current median home price in The Ridges?",
    answer:
      "As of January 2026, The Ridges median home price is $2.5 million. Properties range from $1.5 million for smaller homes to over $15 million for custom estates with Strip and Red Rock views.",
  },
  {
    question: "How exclusive is The Ridges community?",
    answer:
      "The Ridges is one of Las Vegas's most exclusive communities with 24/7 guard-gated security, only 900 home sites across six distinct villages, and strict architectural guidelines ensuring estate-quality construction throughout.",
  },
  {
    question: "What celebrities and executives live in The Ridges?",
    answer:
      "While privacy prevents naming residents, The Ridges is known for attracting professional athletes, entertainment executives, casino industry leaders, and high-net-worth individuals seeking privacy and luxury in Las Vegas.",
  },
  {
    question: "Why use Berkshire Hathaway HomeServices for luxury home purchases?",
    answer:
      "BHHS represents a brand synonymous with trust and discretion—essential in luxury transactions. Our agents like Dr. Jan Duffy have access to off-market listings, understand high-end buyer requirements, and provide the confidentiality luxury clients expect.",
  },
];

const theRidgesPageSchemas = neighborhoodPageGraph({
  slug: "the-ridges",
  name: "The Ridges",
  breadcrumbLabel: "The Ridges",
  description:
    "Ultra-luxury guard-gated Summerlin enclave with custom estates, Bear's Best golf, and Red Rock views.",
  faqs: theRidgesNeighborhoodFaqs,
  latitude: 36.1753,
  longitude: -115.3154,
  containedIn: "Las Vegas",
});

export default function TheRidgesPage() {
  return (
    <>
      <SchemaScript id="neighborhood-the-ridges-schema" schema={theRidgesPageSchemas} />
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
              <span className="text-slate-900">The Ridges</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Berkshire Hathaway HomeServices The Ridges
            </h1>
            <p className="text-xl text-slate-600">
              Las Vegas's most prestigious address. Experience The Ridges luxury with{" "}
              <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <LocalServiceAreaBlurb topic="The Ridges luxury buyer and seller representation" />
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              The Ridges Luxury Market | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$2.5M</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">67 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">42</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+8.2%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                The Ridges: Las Vegas's Ultimate Address for Discerning Buyers
              </h2>
              <p>
                <strong>The Ridges</strong> represents the pinnacle of Las Vegas luxury living. Nestled
                within Summerlin along the foothills of Red Rock Canyon, this ultra-exclusive guard-gated
                community offers estate-quality homes with panoramic views of the Las Vegas Strip, the
                surrounding mountains, and the pristine desert landscape. When the most discerning buyers
                search for Las Vegas luxury, they turn to <strong>Berkshire Hathaway HomeServices</strong>—the
                brand that matches The Ridges' standard of excellence.
              </p>
              <p>
                The Ridges comprises six distinctive villages—Bear's Best, Falcon Ridge, Azure, Talon Ridge,
                Silver Ridge, and Eagle Hills—each offering its own character while maintaining the
                community's legendary standards. With only 900 home sites across 793 acres, exclusivity is
                built into The Ridges' DNA. Strict architectural guidelines ensure that every home meets
                the community's exacting standards, protecting property values and ensuring a cohesive
                aesthetic throughout.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has represented buyers
                and sellers in The Ridges since the community's inception. Dr. Jan Duffy understands that
                luxury transactions require more than market knowledge—they demand discretion, sophisticated
                marketing, and access to qualified buyers worldwide. The BHHS global network connects The
                Ridges properties with high-net-worth individuals actively seeking premier real estate
                investments in Las Vegas.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Unmatched Privacy & Security</h4>
                  </div>
                  <p className="text-slate-600">
                    The Ridges offers 24/7 guard-gated security with roving patrols, giving residents
                    the peace of mind they expect at this price point. The community's exclusivity—only
                    900 homes across nearly 800 acres—ensures privacy that's impossible to find in
                    higher-density developments. Many residents include celebrities, executives, and
                    individuals for whom privacy is non-negotiable.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Mountain className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Unrivaled Views & Location</h4>
                  </div>
                  <p className="text-slate-600">
                    Positioned along Red Rock Canyon's foothills, The Ridges offers views that no other
                    Las Vegas community can match. Properties feature vistas of the Strip's glittering
                    skyline, the rugged Spring Mountains, and the desert floor stretching to the horizon.
                    Bear's Best Golf Club, designed by Jack Nicklaus, winds through the community, adding
                    another layer of prestige.
                  </p>
                </div>
              </div>

              {/* The Six Villages */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Six Villages of The Ridges</h3>
              <div className="not-prose grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Bear's Best</h5>
                  <p className="text-slate-600 text-sm">Surrounds Bear's Best Golf Club. Premium golf course lots with Strip and mountain views. $2M-$8M.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Falcon Ridge</h5>
                  <p className="text-slate-600 text-sm">Elevated position with panoramic views. Custom estates on large lots. $2.5M-$10M.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Azure</h5>
                  <p className="text-slate-600 text-sm">Contemporary architecture with dramatic Strip views. Modern luxury homes. $1.8M-$5M.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Talon Ridge</h5>
                  <p className="text-slate-600 text-sm">Semi-custom homes with Red Rock backdrop. Entry to The Ridges lifestyle. $1.5M-$3M.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Silver Ridge</h5>
                  <p className="text-slate-600 text-sm">Exclusive custom lot community. Architectural masterpieces. $3M-$15M.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h5 className="font-bold text-slate-900 mb-2">Eagle Hills</h5>
                  <p className="text-slate-600 text-sm">Newest village with modern designs. Desert contemporary style. $2M-$6M.</p>
                </div>
              </div>

              {/* Commute & Location */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Location & Accessibility</h3>
              <div className="not-prose overflow-x-auto">
                <table className="w-full bg-white border border-slate-200 rounded-lg">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Destination</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Distance</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Drive Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr><td className="px-4 py-3">Downtown Summerlin</td><td className="px-4 py-3">3 miles</td><td className="px-4 py-3">8 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Red Rock Canyon</td><td className="px-4 py-3">4 miles</td><td className="px-4 py-3">10 min</td></tr>
                    <tr><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">20 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">25 min</td></tr>
                    <tr><td className="px-4 py-3">Private Aviation (HND)</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Luxury Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Nearby Luxury Amenities</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Golf & Recreation</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Bear's Best Golf Club:</strong> Jack Nicklaus "tribute" course with 18 replica holes from his best designs.</li>
                    <li><strong>Red Rock Country Club:</strong> Two Arnold Palmer courses, just outside The Ridges gates.</li>
                    <li><strong>TPC Las Vegas:</strong> 15 minutes away, hosts PGA Tour events.</li>
                    <li><strong>Red Rock Canyon:</strong> World-class hiking, biking, and rock climbing minutes away.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Shopping & Services</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Downtown Summerlin:</strong> High-end shopping including Apple, Nordstrom, Williams Sonoma.</li>
                    <li><strong>Tivoli Village:</strong> Upscale outdoor shopping with Restoration Hardware, fine dining.</li>
                    <li><strong>Concierge Services:</strong> Private chefs, housekeeping, property management available.</li>
                    <li><strong>Private Aviation:</strong> Henderson Executive Airport for private jet access.</li>
                  </ul>
                </div>
              </div>

              {/* Schools */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Schools Serving The Ridges</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  The Ridges is served by Clark County School District schools, with Durango or Palo Verde
                  High School depending on the address, plus private school options:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Public Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Palo Verde High School (8/10)</li>
                      <li>• Sig Rogich Middle School (9/10)</li>
                      <li>• Marion Earl Elementary</li>
                      <li>• Helen Smith Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Private Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• The Meadows School (K-12)</li>
                      <li>• Bishop Gorman High School</li>
                      <li>• Faith Lutheran Middle & High</li>
                      <li>• Alexander Dawson School</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="mt-8">
                The current Ridges market shows <strong>42 active listings</strong> with homes averaging
                <strong> 67 days on market</strong>—longer than the valley average, reflecting the careful
                consideration luxury buyers give to properties at this level. The median price of
                <strong> $2.5 million</strong> represents exceptional value compared to comparable
                communities in California or Hawaii. Properties range from $1.5 million to over $15
                million for the most spectacular custom estates.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in The Ridges means working
                with agents who understand that luxury isn't just about price—it's about lifestyle,
                privacy, and attention to detail. Dr. Jan Duffy provides the white-glove service that
                Ridges buyers and sellers expect, from confidential off-market transactions to coordination
                with architects, designers, and property managers. When the stakes are measured in millions,
                the Berkshire Hathaway name provides the trust and expertise that matters.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "The Ridges attracts clients who expect the very best—and they recognize Berkshire Hathaway
                HomeServices as a brand that matches their standards. In luxury real estate, discretion and
                trust are everything. My clients know their privacy is protected and their interests come first.
                That's the BHHS difference in high-end transactions."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          <FAQSection
            className="!py-12 bg-slate-50"
            title="Frequently Asked Questions About The Ridges"
            subtitle="Luxury Summerlin real estate and discreet representation"
            faqs={theRidgesNeighborhoodFaqs}
          />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience The Ridges Luxury
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy for a confidential consultation about buying or selling
              in Las Vegas's most prestigious community.
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
