import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, Waves, TreePine, GraduationCap, Home as HomeIcon } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/sections/FAQSection";
import LocalServiceAreaBlurb from "@/components/seo/LocalServiceAreaBlurb";
import { neighborhoodPageGraph } from "@/lib/neighborhood-page-graph";

export const metadata: Metadata = buildPageMetadata({
  path: "/neighborhoods/inspirada",
  title: "Berkshire Hathaway HomeServices Inspirada | Henderson Resort Living",
  description: "Find Inspirada homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy specializes in Henderson's resort-style community. Median price $525K. Call (702) 500-1942.",
  keywords: [
    "Berkshire Hathaway HomeServices Inspirada",
    "Inspirada homes for sale",
    "Inspirada Henderson",
    "Henderson master planned",
    "resort style community",
  ],
});

const inspiradaNeighborhoodFaqs = [
  {
    question: "What is the current median home price in Inspirada?",
    answer:
      "As of January 2026, Inspirada's median home price is $525,000, up 5.0% year-over-year. New construction ranges from $450,000 to $750,000, while resales offer additional options with established landscaping.",
  },
  {
    question: "What amenities does Inspirada offer residents?",
    answer:
      "Inspirada features resort-style pools with water features, miles of walking trails, multiple parks, sports courts, and community gathering spaces. The HOA maintains these amenities to resort standards, creating a vacation-like atmosphere.",
  },
  {
    question: "How are the schools in Inspirada?",
    answer:
      "Inspirada is served by highly-rated Henderson schools including newer facilities built specifically for the growing community. The area draws buyers for its school options and parks.",
  },
  {
    question: "Is Inspirada a good investment?",
    answer:
      "Inspirada has shown strong appreciation as one of Las Vegas's top-selling master-planned communities. The combination of resort amenities, Henderson location, and continued development suggests ongoing demand and value growth.",
  },
];

const inspiradaPageSchemas = neighborhoodPageGraph({
  slug: "inspirada",
  name: "Inspirada",
  breadcrumbLabel: "Inspirada",
  description:
    "Henderson master-planned community with resort-style pools, trails, parks, and modern new construction.",
  faqs: inspiradaNeighborhoodFaqs,
  latitude: 35.9789,
  longitude: -115.1464,
  containedIn: "Henderson",
});

export default function InspiradaPage() {
  return (
    <>
      <SchemaScript id="neighborhood-inspirada-schema" schema={inspiradaPageSchemas} />
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
              <span className="text-slate-900">Inspirada</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Berkshire Hathaway HomeServices Inspirada
            </h1>
            <p className="text-xl text-slate-600">
              Resort-style living in Henderson. Discover Inspirada with{" "}
              <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <LocalServiceAreaBlurb topic="Inspirada buyer and seller representation" />
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Inspirada Real Estate Market | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$525,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">23 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">98</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+5.0%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Inspirada: Henderson's Award-Winning Resort-Style Community
              </h2>
              <p>
                <strong>Inspirada</strong> redefines what a master-planned community can be. This
                2,000-acre development in Henderson consistently ranks among the nation's top-selling
                communities, and for good reason: Inspirada delivers resort-style amenities that make
                every day feel like a vacation. <strong>Berkshire Hathaway HomeServices</strong>
                is proud to represent buyers and sellers in this exceptional community.
              </p>
              <p>
                The community's amenity package rivals many resorts. Multiple pools feature water
                slides, splash pads, and cabanas. Miles of walking and biking trails wind through
                the community, connecting to neighborhood parks and gathering spaces. Sports courts,
                fitness facilities, and community events create an active, engaged lifestyle that
                brings neighbors together. These amenities aren't afterthoughts—they're central
                to Inspirada's identity.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> provides free
                buyer representation on Inspirada new construction purchases. With multiple builders
                offering homes in the community, navigating options can be overwhelming. Dr. Jan Duffy
                helps buyers compare builders, negotiate upgrades, and avoid common new construction
                pitfalls. For resales, BHHS agents identify properties where previous owners made
                smart upgrade decisions, delivering better value than comparable new construction.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Waves className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Resort-Style Pools & Amenities</h4>
                  </div>
                  <p className="text-slate-600">
                    Inspirada's pools aren't typical community pools—they're resort experiences.
                    Water slides, splash pads for kids, lap lanes for exercise, and shaded cabanas
                    for relaxation create a vacation atmosphere steps from your front door. The
                    HOA maintains these facilities to exceptional standards year-round.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <TreePine className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Trails, Parks & Active Living</h4>
                  </div>
                  <p className="text-slate-600">
                    Miles of walking and biking trails connect Inspirada's neighborhoods, parks,
                    and amenity centers. Whether you're training for a marathon or taking an evening
                    stroll, the trail system encourages an active lifestyle. Community events—from
                    outdoor movies to fitness classes—bring neighbors together throughout the year.
                  </p>
                </div>
              </div>

              {/* Schools */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Inspirada School Districts</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  Inspirada is served by excellent Henderson schools, with newer facilities built to
                  serve the growing community:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Elementary Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Inspirada Elementary (New)</li>
                      <li>• Lomie Heard Elementary</li>
                      <li>• Glen Taylor Elementary</li>
                      <li>• Wright Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Coronado High School (8/10)</li>
                      <li>• Foothill High School</li>
                      <li>• Del Webb Middle School</li>
                      <li>• Mannion Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Private Options</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Henderson International</li>
                      <li>• Pinecrest Academy</li>
                      <li>• Coral Academy</li>
                      <li>• The Adelson School</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from Inspirada</h3>
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
                    <tr><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">12 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-35 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">10 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">20-30 min</td></tr>
                    <tr><td className="px-4 py-3">Downtown Henderson</td><td className="px-4 py-3">8 miles</td><td className="px-4 py-3">12 min</td><td className="px-4 py-3">15-25 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Green Valley</td><td className="px-4 py-3">5 miles</td><td className="px-4 py-3">10 min</td><td className="px-4 py-3">12-18 min</td></tr>
                    <tr><td className="px-4 py-3">Lake Mead</td><td className="px-4 py-3">25 miles</td><td className="px-4 py-3">30 min</td><td className="px-4 py-3">35-40 min</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Amenities Detail */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Inspirada Amenity Centers</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Resort Pool Complex</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• Resort-style pool with cabanas</li>
                    <li>• Water slides and splash features</li>
                    <li>• Zero-entry family pool</li>
                    <li>• Lap lanes for fitness swimming</li>
                    <li>• Poolside WiFi and refreshments</li>
                    <li>• Extended summer hours</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Active Living Amenities</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• 10+ miles of walking/biking trails</li>
                    <li>• Multiple neighborhood parks</li>
                    <li>• Tennis and pickleball courts</li>
                    <li>• Basketball courts</li>
                    <li>• Dog parks</li>
                    <li>• Community fitness classes</li>
                  </ul>
                </div>
              </div>

              {/* Builders */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Builders in Inspirada</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Toll Brothers:</strong> Premium homes $600K-$750K. Known for quality and upgrades.</li>
                    <li><strong>Beazer Homes:</strong> Mid-range to premium $500K-$650K. Energy-efficient designs.</li>
                    <li><strong>Lennar:</strong> Entry to mid-range $450K-$580K. "Everything's Included" packages.</li>
                  </ul>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Woodside Homes:</strong> Mid-range $480K-$620K. Strong value proposition.</li>
                    <li><strong>Richmond American:</strong> Entry to mid-range $450K-$550K. Personalization options.</li>
                    <li><strong>Century Communities:</strong> Affordable entry $420K-$500K. Modern designs.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                The current Inspirada market shows <strong>98 active listings</strong> with homes
                averaging <strong>23 days on market</strong>—reflecting strong demand for this
                sought-after community. The median price of <strong>$525,000</strong> represents
                solid 5.0% year-over-year appreciation. New construction from builders like Toll
                Brothers, Lennar, and Beazer ranges from $450,000 to $750,000, while resales with
                established yards and upgraded features offer compelling alternatives.
              </p>
              <p>
                Choosing <strong>Berkshire Hathaway HomeServices</strong> for your Inspirada purchase
                means working with agents who understand the community's various neighborhoods, which
                builders offer the best quality, and which lots provide the best value. Dr. Jan Duffy
                has helped dozens of families find their Inspirada homes, and that experience
                translates into better outcomes for buyers navigating this popular community.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Inspirada isn't just a place to live—it's a lifestyle. Families move here for the
                pools, the trails, and the community events that make weekends special. As a
                Berkshire Hathaway HomeServices agent, I help clients find the specific neighborhood
                within Inspirada that matches how they want to live, whether that's close to the
                main pool complex or on a quiet cul-de-sac backing to open space."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          <FAQSection
            className="!py-12 bg-slate-50"
            title="Frequently Asked Questions About Inspirada"
            subtitle="Resort-style Henderson living and real estate trends"
            faqs={inspiradaNeighborhoodFaqs}
          />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Inspirada Living
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices Inspirada specialist,
              for expert guidance in Henderson's premier resort-style community.
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
