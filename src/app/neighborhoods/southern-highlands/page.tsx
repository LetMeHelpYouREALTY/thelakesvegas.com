import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Shield, Mountain, Star, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/sections/FAQSection";
import LocalServiceAreaBlurb from "@/components/seo/LocalServiceAreaBlurb";
import { neighborhoodPageGraph } from "@/lib/neighborhood-page-graph";

export const metadata: Metadata = buildPageMetadata({
  path: "/neighborhoods/southern-highlands",
  title: "Berkshire Hathaway HomeServices Southern Highlands | Las Vegas Golf Community",
  description: "Find Southern Highlands homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy specializes in this premier golf community. Median price $750K. Call (702) 500-1942.",
  keywords: [
    "Berkshire Hathaway HomeServices Southern Highlands",
    "Southern Highlands homes for sale",
    "Southern Highlands golf",
    "Las Vegas golf community",
    "guard gated Las Vegas",
  ],
});

const southernHighlandsNeighborhoodFaqs = [
  {
    question: "What is the current median home price in Southern Highlands?",
    answer:
      "As of January 2026, Southern Highlands' median home price is $750,000, up 7.2% year-over-year. Prices range from $500,000 for non-gated homes to over $3 million in guard-gated sections.",
  },
  {
    question: "Does Southern Highlands have guard-gated sections?",
    answer:
      "Yes, Southern Highlands features multiple guard-gated luxury sections including Southern Highlands Golf Club estates and luxury enclaves with 24/7 security. Non-gated sections also offer excellent value with community amenities.",
  },
  {
    question: "What is the Southern Highlands Golf Club like?",
    answer:
      "Southern Highlands Golf Club features an award-winning Robert Trent Jones Jr. designed course. It offers private membership, a stunning clubhouse, fine dining, and is consistently ranked among Nevada's best golf courses.",
  },
  {
    question: "How does Southern Highlands compare to Summerlin?",
    answer:
      "Southern Highlands offers similar luxury and amenities to Summerlin but in southwest Las Vegas, providing faster access to the Strip, airport, and I-15. It's ideal for buyers who want premier living with southern valley convenience.",
  },
];

const southernHighlandsPageSchemas = neighborhoodPageGraph({
  slug: "southern-highlands",
  name: "Southern Highlands",
  breadcrumbLabel: "Southern Highlands",
  description:
    "Premier southwest Las Vegas golf community with guard-gated sections, mountain views, and luxury amenities.",
  faqs: southernHighlandsNeighborhoodFaqs,
  latitude: 35.978,
  longitude: -115.189,
  containedIn: "Las Vegas",
});

export default function SouthernHighlandsPage() {
  return (
    <>
      <SchemaScript id="neighborhood-southern-highlands-schema" schema={southernHighlandsPageSchemas} />
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
              <span className="text-slate-900">Southern Highlands</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Berkshire Hathaway HomeServices Southern Highlands
            </h1>
            <p className="text-xl text-slate-600">
              Premier golf course living in southwest Las Vegas. Discover Southern Highlands with{" "}
              <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <LocalServiceAreaBlurb topic="Southern Highlands golf community real estate" />
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Southern Highlands Market | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$750,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">35 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">156</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+7.2%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Southern Highlands: Southwest Las Vegas's Premier Master-Planned Community
              </h2>
              <p>
                <strong>Southern Highlands</strong> stands as southwest Las Vegas's answer to Summerlin—a
                meticulously planned 2,200-acre community centered around an award-winning championship
                golf course. For buyers seeking luxury living with convenient access to the Strip, airport,
                and I-15 corridor, <strong>Berkshire Hathaway HomeServices</strong> considers Southern
                Highlands among Las Vegas's finest residential options.
              </p>
              <p>
                The community's crown jewel is the Southern Highlands Golf Club, featuring a stunning
                Robert Trent Jones Jr. designed course that winds through the community's terrain.
                The private club offers members world-class golf, elegant dining, and a social calendar
                that brings the community together. Even non-golfing residents benefit from the course's
                presence—golf course views command premium prices and the manicured greens enhance the
                entire community's aesthetic.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has represented buyers
                and sellers in Southern Highlands for over two decades. Dr. Jan Duffy understands the
                community's various sections—from the guard-gated luxury estates surrounding the golf
                course to the neighborhoods in the community's newer phases. Whether
                you're seeking a golf course lot with Strip views or a spacious family home with top-rated
                schools, BHHS has the local expertise to guide your search.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Star className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Championship Golf Course</h4>
                  </div>
                  <p className="text-slate-600">
                    The Robert Trent Jones Jr. designed course at Southern Highlands Golf Club is
                    consistently rated among Nevada's finest. The private club offers members exceptional
                    playing conditions year-round, a fully appointed clubhouse, fine dining, and a
                    calendar of social events. Golf course homes enjoy premium values and stunning views.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Guard-Gated Luxury Sections</h4>
                  </div>
                  <p className="text-slate-600">
                    Multiple guard-gated enclaves within Southern Highlands offer enhanced security
                    and exclusivity. These sections feature custom and semi-custom homes on larger lots,
                    with architectural standards ensuring estate-quality construction. 24/7 security
                    provides residents peace of mind and protects property values.
                  </p>
                </div>
              </div>

              {/* Schools */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Southern Highlands School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Southern Highlands is served by Clark County School District with some of southwest
                  Las Vegas's highest-rated schools:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Elise Wolff Elementary (9/10)</li>
                      <li>• Janet Lundahl Elementary</li>
                      <li>• Robert Forbuss Elementary</li>
                      <li>• Floyd Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Coronado High School (8/10)</li>
                      <li>• Liberty High School</li>
                      <li>• Del Webb Middle School</li>
                      <li>• Mannion Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Private Options</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Bishop Gorman High School</li>
                      <li>• Pinecrest Academy</li>
                      <li>• Henderson International</li>
                      <li>• Coral Academy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Southern Highlands</h3>
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
                    <tr><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">8 miles</td><td className="px-4 py-3">12 min</td><td className="px-4 py-3">18-25 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">10 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">20-30 min</td></tr>
                    <tr><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-35 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Henderson</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">20 min</td><td className="px-4 py-3">25-35 min</td></tr>
                    <tr><td className="px-4 py-3">Summerlin</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">25 min</td><td className="px-4 py-3">35-45 min</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-2 not-prose">
                Southern Highlands' I-15 access provides the fastest route to the Strip and airport from
                any Las Vegas master-planned community—a key advantage for frequent travelers.
              </p>

              {/* Local Amenities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Shopping, Dining & Healthcare</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Shopping & Entertainment</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Southern Highlands Marketplace:</strong> Grocery, restaurants, services within the community.</li>
                    <li><strong>Town Square Las Vegas:</strong> 10 minutes—outdoor mall with Apple, Whole Foods, movie theater.</li>
                    <li><strong>Las Vegas Premium Outlets South:</strong> 5 minutes—designer outlet shopping.</li>
                    <li><strong>M Resort Spa Casino:</strong> Adjacent to community—gaming, dining, entertainment.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Healthcare & Services</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>St. Rose Dominican - Siena:</strong> Full-service hospital, 10 minutes.</li>
                    <li><strong>Southern Hills Hospital:</strong> 24/7 ER, comprehensive services, 12 minutes.</li>
                    <li><strong>Southwest Medical:</strong> Multiple urgent care and primary care locations nearby.</li>
                    <li><strong>Dignity Health:</strong> Clinics throughout the southwest valley.</li>
                  </ul>
                </div>
              </div>

              {/* Golf Club Details */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Southern Highlands Golf Club</h3>
              <div className="not-prose bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  The Robert Trent Jones Jr. designed course is the community's centerpiece, offering
                  private membership to residents and non-residents:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Course Rating:</strong> 74.1 / Slope 140 (Championship)</li>
                    <li><strong>Membership:</strong> Equity and non-equity options</li>
                    <li><strong>Facilities:</strong> 35,000 sq ft clubhouse, fine dining</li>
                  </ul>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Practice:</strong> Full range, short game area, putting greens</li>
                    <li><strong>Events:</strong> Private tournaments, member socials</li>
                    <li><strong>Dining:</strong> Multiple restaurants, bars, banquet facilities</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                The Southern Highlands market currently shows <strong>156 active listings</strong> with
                homes averaging <strong>35 days on market</strong>. The median price of <strong>$750,000</strong>
                reflects strong appreciation of 7.2% year-over-year, driven by demand from buyers seeking
                luxury without the premium prices of The Ridges or MacDonald Highlands. Properties range
                from $500,000 in non-gated sections to over $3 million for golf course estates.
              </p>
              <p>
                Choosing <strong>Berkshire Hathaway HomeServices</strong> for Southern Highlands means
                working with agents who understand the community's unique value proposition. Dr. Jan Duffy
                can explain the differences between various sections, which lots offer the best views,
                and how HOA fees vary across the community. This knowledge, combined with the BHHS
                reputation for excellence, ensures Southern Highlands buyers and sellers receive
                exceptional service.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Southern Highlands delivers luxury living at prices that often surprise buyers—especially
                those relocating from California. You get championship golf, guard-gated security, mountain
                views, and nearby public schools, all just 15 minutes from the Strip. As a Berkshire Hathaway
                HomeServices agent, I help clients see beyond the golf course to the community's full potential."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          <FAQSection
            className="!py-12 bg-slate-50"
            title="Frequently Asked Questions About Southern Highlands"
            subtitle="Golf living, guard gates, and southwest Las Vegas value"
            faqs={southernHighlandsNeighborhoodFaqs}
          />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Southern Highlands Living
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices Southern Highlands specialist,
              for expert guidance in this premier golf community.
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
