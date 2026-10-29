import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, MapPin, TreePine, Mountain, GraduationCap, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateNeighborhoodSchema,
  combineSchemas,
} from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/neighborhoods/summerlin",
  title: "Berkshire Hathaway HomeServices Summerlin | Las Vegas Luxury Real Estate",
  description: "Find Summerlin homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy offers expert guidance in Las Vegas's premier master-planned community. Median price $625K. Call (702) 500-1942.",
  keywords: [
    "Berkshire Hathaway HomeServices Summerlin",
    "Summerlin homes for sale",
    "Summerlin real estate agent",
    "Summerlin Las Vegas",
    "luxury homes Summerlin",
  ],
});

// Breadcrumb items for this page
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Neighborhoods", url: "/neighborhoods" },
  { name: "Summerlin", url: "/neighborhoods/summerlin" },
];

// FAQ data for schema
const summerlinFaqs = [
  {
    question: "What is the current median home price in Summerlin?",
    answer:
      "As of January 2026, the median home price in Summerlin is $625,000, representing a 6.8% increase year-over-year. Luxury homes in The Ridges and other guard-gated communities can exceed $2 million.",
  },
  {
    question: "How long do homes stay on the market in Summerlin?",
    answer:
      "Summerlin homes currently average 22 days on market, faster than the Las Vegas Valley average of 28 days. Well-priced homes in desirable villages often receive multiple offers within the first week.",
  },
  {
    question: "What makes Summerlin different from other Las Vegas communities?",
    answer:
      "Summerlin offers 150+ parks, 150+ miles of trails, nearby public schools, and stunning Red Rock Canyon views. The Howard Hughes Corporation has developed Summerlin with careful planning since 1990, creating distinct villages each with unique character.",
  },
  {
    question: "Why should I use a Berkshire Hathaway HomeServices agent in Summerlin?",
    answer:
      "Berkshire Hathaway HomeServices agents like Dr. Jan Duffy bring deep Summerlin expertise combined with the global resources and trusted reputation of the BHHS brand. This combination helps buyers compete in Summerlin's competitive market and helps sellers maximize their home's value.",
  },
];

// Combined page schemas
const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(breadcrumbs),
  generateNeighborhoodSchema({
    name: "Summerlin",
    slug: "summerlin",
    description:
      "Premier master-planned community in Las Vegas featuring Red Rock Canyon views, 150+ parks, nearby public schools, and luxury homes from $400K to $10M+.",
    latitude: 36.1672,
    longitude: -115.331,
    containedIn: "Las Vegas",
  }),
  generateFAQSchema(summerlinFaqs)
);

export default function SummerlinPage() {
  return (
    <>
      {/* Combined JSON-LD Schema: Breadcrumb + Place + FAQ */}
      <SchemaScript schema={pageSchemas} id="summerlin-schema" />
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
              <span className="text-slate-900">Summerlin</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Berkshire Hathaway HomeServices Summerlin
            </h1>
            <p className="text-xl text-slate-600">
              Discover Las Vegas's premier master-planned community with Dr. Jan Duffy, your trusted{" "}
              <strong>Berkshire Hathaway HomeServices</strong> Summerlin expert.
            </p>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Summerlin Real Estate Market | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$625,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">22 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">342</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+6.8%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Summerlin Is Las Vegas's Most Sought-After Community
              </h2>
              <p>
                When homebuyers search for the best neighborhoods in Las Vegas, <strong>Summerlin</strong> consistently
                ranks at the top. As a <strong>Berkshire Hathaway HomeServices</strong> agent specializing in Summerlin
                real estate, Dr. Jan Duffy has helped hundreds of families find their perfect home in this
                award-winning master-planned community.
              </p>
              <p>
                Developed by The Howard Hughes Corporation since 1990, Summerlin spans 22,500 acres along the
                western rim of the Las Vegas Valley. The community offers an unparalleled lifestyle with Red Rock
                Canyon as its backdrop—providing hiking, biking, and outdoor recreation just minutes from your
                front door. With over 150 parks, 150 miles of trails, and nine golf courses, Summerlin residents
                enjoy an active, healthy lifestyle that's hard to find elsewhere in the desert Southwest.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has deep roots in Summerlin,
                and our agents understand the nuances of each village—from the atmosphere of
                The Paseos to the luxury estates of The Ridges. Whether you're a first-time buyer looking at
                condos in Affinity or a move-up buyer seeking a custom home in Red Rock Country Club, BHHS
                has the expertise to guide you through the process.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Mountain className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Red Rock Canyon Access</h4>
                  </div>
                  <p className="text-slate-600">
                    Summerlin's western location provides unmatched access to Red Rock Canyon National
                    Conservation Area. Residents enjoy world-class hiking, rock climbing, and scenic drives
                    within a 10-minute drive. The community's trail system connects directly to Red Rock,
                    making outdoor adventures a daily possibility.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Nearby Public Schools</h4>
                  </div>
                  <p className="text-slate-600">
                    Summerlin is home to some of Nevada's highest-performing schools. The community includes
                    multiple Nearby public schools, advanced STEM programs, and excellent private school options
                    like The Meadows School and Bishop Gorman High School. Families consistently choose
                    Summerlin for its exceptional educational opportunities.
                  </p>
                </div>
              </div>

              {/* School Districts */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Summerlin School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Summerlin is served by the Clark County School District with some of Nevada's
                  highest-rated public schools, plus excellent private options:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Sig Rogich Middle School (9/10)</li>
                      <li>• William R. Lummis Elementary</li>
                      <li>• Marion Earl Elementary</li>
                      <li>• Helen Smith Elementary</li>
                      <li>• John C. Vanderburg Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Palo Verde High School (8/10)</li>
                      <li>• West Career & Technical Academy</li>
                      <li>• Del E. Webb Middle School</li>
                      <li>• Sig Rogich Middle School</li>
                      <li>• The Meadows School (Private)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Private Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Bishop Gorman High School</li>
                      <li>• The Meadows School (K-12)</li>
                      <li>• Faith Lutheran Middle & High</li>
                      <li>• American Heritage Academy</li>
                      <li>• Pinecrest Academy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Summerlin</h3>
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
                    <tr><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-35 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">10 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">25-40 min</td></tr>
                    <tr><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">20 min</td><td className="px-4 py-3">30-45 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Henderson</td><td className="px-4 py-3">22 miles</td><td className="px-4 py-3">28 min</td><td className="px-4 py-3">40-55 min</td></tr>
                    <tr><td className="px-4 py-3">Red Rock Canyon</td><td className="px-4 py-3">5 miles</td><td className="px-4 py-3">10 min</td><td className="px-4 py-3">10-15 min</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Local Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Healthcare</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="h-6 w-6 text-blue-600 mr-2" />
                    <h5 className="font-bold text-slate-900">Shopping & Dining</h5>
                  </div>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Downtown Summerlin:</strong> 125+ stores, restaurants, movie theater. Apple, Nordstrom, Williams Sonoma.</li>
                    <li><strong>Boca Park:</strong> Trader Joe's, Whole Foods, local restaurants on West Charleston.</li>
                    <li><strong>Tivoli Village:</strong> Upscale outdoor shopping with Restoration Hardware, boutiques, and fine dining.</li>
                    <li><strong>Red Rock Casino Resort:</strong> Gaming, spa, multiple restaurants including T-Bones Chophouse.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <TreePine className="h-6 w-6 text-blue-600 mr-2" />
                    <h5 className="font-bold text-slate-900">Healthcare & Services</h5>
                  </div>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Summerlin Hospital:</strong> Full-service hospital with ER, labor & delivery, cardiology center.</li>
                    <li><strong>Red Rock Medical Campus:</strong> Outpatient surgery, imaging, specialty clinics.</li>
                    <li><strong>Dignity Health:</strong> Multiple urgent care and primary care locations throughout Summerlin.</li>
                    <li><strong>Southwest Medical:</strong> Multi-specialty clinics with pharmacy services.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                The current Summerlin real estate market shows strong demand with <strong>342 active listings</strong> and
                an average of just <strong>22 days on market</strong>. The median home price of <strong>$625,000</strong> represents
                solid appreciation while still offering value compared to similar communities in California.
                Buyers relocating from the West Coast find that Summerlin delivers a comparable lifestyle at
                a fraction of the cost—with no state income tax.
              </p>
              <p>
                Working with a <strong>Berkshire Hathaway HomeServices</strong> agent gives you access to listings
                before they hit the market, expert negotiation skills, and the backing of a globally trusted brand.
                Dr. Jan Duffy has been serving Summerlin since 2008, which means you'll have insights that online 
                searches simply can't provide—from which streets have the best mountain views to which builders 
                offer the best construction quality.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Summerlin isn't just a neighborhood—it's a lifestyle. I've been serving this area since
                2008, and I can tell you exactly which villages have the floor plans you want, which offer the
                best investment potential, and where you'll find the hidden gems. That local knowledge is
                what sets Berkshire Hathaway HomeServices apart."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Summerlin Real Estate
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What is the current median home price in Summerlin?
                </h3>
                <p className="text-slate-600">
                  As of January 2026, the median home price in Summerlin is $625,000, representing a 6.8%
                  increase year-over-year. Luxury homes in The Ridges and other guard-gated communities
                  can exceed $2 million.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How long do homes stay on the market in Summerlin?
                </h3>
                <p className="text-slate-600">
                  Summerlin homes currently average 22 days on market, faster than the Las Vegas Valley
                  average of 28 days. Well-priced homes in desirable villages often receive multiple
                  offers within the first week.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What makes Summerlin different from other Las Vegas communities?
                </h3>
                <p className="text-slate-600">
                  Summerlin offers 150+ parks, 150+ miles of trails, nearby public schools, and stunning
                  Red Rock Canyon views. The Howard Hughes Corporation has developed Summerlin with
                  careful planning since 1990, creating distinct villages each with unique character.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Why should I use a Berkshire Hathaway HomeServices agent in Summerlin?
                </h3>
                <p className="text-slate-600">
                  Berkshire Hathaway HomeServices agents like Dr. Jan Duffy bring deep Summerlin expertise
                  combined with the global resources and trusted reputation of the BHHS brand. This
                  combination helps buyers compete in Summerlin's competitive market and helps sellers
                  maximize their home's value.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Summerlin Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices Summerlin specialist,
              for a personalized home search or free market analysis.
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
