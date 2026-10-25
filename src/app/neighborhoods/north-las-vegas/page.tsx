import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, DollarSign, TrendingUp, Home as HomeIcon, Users } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/sections/FAQSection";
import LocalServiceAreaBlurb from "@/components/seo/LocalServiceAreaBlurb";
import { neighborhoodPageGraph } from "@/lib/neighborhood-page-graph";

export const metadata: Metadata = buildPageMetadata({
  path: "/neighborhoods/north-las-vegas",
  title: "Berkshire Hathaway HomeServices North Las Vegas | Affordable Homes",
  description: "Find affordable North Las Vegas homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy helps first-time buyers and investors. Median price $385K. Call (702) 500-1942.",
  keywords: [
    "Berkshire Hathaway HomeServices North Las Vegas",
    "North Las Vegas homes for sale",
    "affordable homes Las Vegas",
    "first time home buyer Las Vegas",
    "new construction North Las Vegas",
  ],
});

const northLasVegasNeighborhoodFaqs = [
  {
    question: "What is the current median home price in North Las Vegas?",
    answer:
      "As of January 2026, North Las Vegas' median home price is $385,000—the most affordable in the Las Vegas Valley. First-time buyers can find homes starting in the $320,000s, while new construction ranges from $380,000 to $550,000.",
  },
  {
    question: "Is North Las Vegas a good area to buy a home?",
    answer:
      "North Las Vegas has transformed dramatically with new master-planned communities, improved infrastructure, and major employment centers. It offers excellent value for first-time buyers and investors seeking positive cash flow on rental properties.",
  },
  {
    question: "What new construction is available in North Las Vegas?",
    answer:
      "Major builders including Lennar, KB Home, Richmond American, and Century Communities offer new construction in North Las Vegas. Communities like Aliante, Tule Springs, and Valley Vista feature modern designs with energy-efficient features.",
  },
  {
    question: "Why choose Berkshire Hathaway HomeServices for North Las Vegas?",
    answer:
      "BHHS provides expert guidance for first-time buyers navigating the purchase process, plus free representation on new construction purchases. Dr. Jan Duffy helps clients find value while avoiding common pitfalls in emerging neighborhoods.",
  },
];

const northLasVegasPageSchemas = neighborhoodPageGraph({
  slug: "north-las-vegas",
  name: "North Las Vegas",
  breadcrumbLabel: "North Las Vegas",
  description:
    "Growing North Las Vegas area with affordable homes, new construction, and strong value for first-time buyers and investors.",
  faqs: northLasVegasNeighborhoodFaqs,
  latitude: 36.1989,
  longitude: -115.1175,
  containedIn: "North Las Vegas",
});

export default function NorthLasVegasPage() {
  return (
    <>
      <SchemaScript id="neighborhood-north-las-vegas-schema" schema={northLasVegasPageSchemas} />
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
              <span className="text-slate-900">North Las Vegas</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Berkshire Hathaway HomeServices North Las Vegas
            </h1>
            <p className="text-xl text-slate-600">
              Affordable homeownership and investment opportunities. Find your North Las Vegas
              home with <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <LocalServiceAreaBlurb topic="North Las Vegas home search and new construction" />
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              North Las Vegas Market | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$385,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">32 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">892</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+3.2%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                North Las Vegas: The Valley's Best Value for First-Time Buyers
              </h2>
              <p>
                <strong>North Las Vegas</strong> has undergone a remarkable transformation over the past
                decade. What was once considered a distant suburb is now a thriving city with new
                master-planned communities, major employers, and infrastructure improvements that make
                it the Las Vegas Valley's best opportunity for affordable homeownership. <strong>Berkshire
                Hathaway HomeServices</strong> is proud to help first-time buyers and investors
                discover North Las Vegas's potential.
              </p>
              <p>
                With a median home price of <strong>$385,000</strong>—roughly $65,000 less than Las Vegas
                and $100,000 less than Henderson—North Las Vegas offers entry to homeownership that's
                increasingly difficult to find elsewhere in Southern Nevada. First-time buyers priced
                out of Summerlin or Henderson find that North Las Vegas delivers modern homes with
                contemporary features at prices they can actually afford. And with Nevada's lack of
                state income tax, more of their income goes toward building equity.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> provides the same
                expert service in North Las Vegas as we do in the valley's luxury markets. Dr. Jan Duffy
                helps first-time buyers understand the purchase process, navigate financing options, and
                avoid common pitfalls. For new construction—where builders' sales agents represent the
                builder, not you—BHHS provides free buyer representation that can save thousands in
                upgrades and negotiations.
              </p>

              {/* Community Highlights */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Community Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Most Affordable in the Valley</h4>
                  </div>
                  <p className="text-slate-600">
                    North Las Vegas offers the lowest median home prices in the Las Vegas Valley, making
                    homeownership attainable for first-time buyers, move-up buyers, and investors. Entry-level
                    homes start in the $320,000s, while new construction from quality builders ranges
                    from $380,000 to $550,000—prices that would buy a condo elsewhere.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-slate-900 text-lg">Rapid Growth & Development</h4>
                  </div>
                  <p className="text-slate-600">
                    North Las Vegas is experiencing unprecedented growth with new retail centers, improved
                    roads, and major employers moving to the area. The city's population has grown over
                    30% in the past decade, bringing new amenities, restaurants, and services. This growth
                    trajectory suggests continued appreciation for today's buyers.
                  </p>
                </div>
              </div>

              {/* Major Employers */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Major North Las Vegas Employers</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  North Las Vegas has attracted major employers, creating local jobs and driving housing demand:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-slate-600 space-y-2">
                    <li><strong>Amazon:</strong> Multiple fulfillment centers employing 5,000+</li>
                    <li><strong>Fanatics:</strong> Sports merchandise distribution (~3,000 jobs)</li>
                    <li><strong>Sephora:</strong> Major distribution center</li>
                    <li><strong>Chewy:</strong> Pet supply distribution center</li>
                  </ul>
                  <ul className="text-slate-600 space-y-2">
                    <li><strong>City of North Las Vegas:</strong> Growing municipal workforce</li>
                    <li><strong>North Las Vegas Airport:</strong> Aviation and logistics</li>
                    <li><strong>Nellis Air Force Base:</strong> Major employer just east</li>
                    <li><strong>Las Vegas Motor Speedway:</strong> Events and hospitality</li>
                  </ul>
                </div>
              </div>

              {/* School Districts */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">North Las Vegas Schools</h3>
              <div className="not-prose bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  North Las Vegas is served by Clark County School District, with newer schools in
                  master-planned communities often performing above area averages:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Top Elementary</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Aliante Elementary</li>
                      <li>• Oran K. Gragson Elementary</li>
                      <li>• Mabel Hoggard Elementary</li>
                      <li>• Tate Elementary</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Middle & High Schools</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Canyon Springs High School</li>
                      <li>• Legacy High School</li>
                      <li>• Aliante Middle School</li>
                      <li>• Sawyer Middle School</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2">Charter Options</h5>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Pinecrest Academy North</li>
                      <li>• Somerset Academy</li>
                      <li>• Coral Academy of Science</li>
                      <li>• SLAM! Academy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Commute Times */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Commute Times from North Las Vegas</h3>
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
                    <tr><td className="px-4 py-3">Downtown Las Vegas</td><td className="px-4 py-3">8 miles</td><td className="px-4 py-3">15 min</td><td className="px-4 py-3">20-30 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Las Vegas Strip</td><td className="px-4 py-3">10 miles</td><td className="px-4 py-3">18 min</td><td className="px-4 py-3">25-40 min</td></tr>
                    <tr><td className="px-4 py-3">McCarran Airport (LAS)</td><td className="px-4 py-3">15 miles</td><td className="px-4 py-3">20 min</td><td className="px-4 py-3">30-45 min</td></tr>
                    <tr className="bg-slate-50"><td className="px-4 py-3">Summerlin</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">25 min</td><td className="px-4 py-3">35-50 min</td></tr>
                    <tr><td className="px-4 py-3">Henderson</td><td className="px-4 py-3">18 miles</td><td className="px-4 py-3">22 min</td><td className="px-4 py-3">30-45 min</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-2 not-prose">
                The 215 Beltway provides excellent access from North Las Vegas to all parts of the valley.
                Many Amazon/warehouse workers live in NLV for the short commute to nearby facilities.
              </p>

              {/* New Construction Communities */}
              <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">New Construction Communities</h3>
              <div className="not-prose grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Active Builder Communities</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>Aliante:</strong> Master-planned with golf, casino, town center. Homes $400K-$550K.</li>
                    <li><strong>Tule Springs:</strong> Newer community near I-215. KB Home, Lennar. $380K-$500K.</li>
                    <li><strong>Valley Vista:</strong> Parks and pools. Century Communities. $350K-$450K.</li>
                    <li><strong>Camino Al Norte:</strong> Growing area near 215. Multiple builders. $380K-$480K.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h5 className="font-bold text-slate-900 mb-3">Healthcare & Services</h5>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li><strong>North Vista Hospital:</strong> Full-service hospital with ER, surgical center.</li>
                    <li><strong>VA Southern Nevada Healthcare:</strong> Veterans medical facility on Craig Road.</li>
                    <li><strong>Southwest Medical:</strong> Multiple urgent care and primary care locations.</li>
                    <li><strong>Aliante Station Casino:</strong> Entertainment, dining, and gaming nearby.</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8">
                The current market shows <strong>892 active listings</strong> with homes averaging
                <strong> 32 days on market</strong>—slightly longer than the valley average, giving
                buyers more time to make informed decisions. Year-over-year appreciation of <strong>3.2%</strong>
                is more modest than luxury markets but represents solid, sustainable growth. Investors
                find particularly strong opportunities here, with rental yields often exceeding 6%.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in North Las Vegas means
                getting honest guidance about which neighborhoods offer the best value, which builders
                have the best reputations, and which areas are poised for the strongest appreciation.
                Dr. Jan Duffy won't push you toward a more expensive area when North Las Vegas fits
                your needs—that integrity is what sets BHHS apart from agencies focused solely on
                commission.
              </p>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "I tell first-time buyers the truth: you don't need to stretch your budget to own a
                great home. North Las Vegas offers brand-new construction with modern features at
                prices that let you build wealth instead of struggling with payments. As a Berkshire
                Hathaway HomeServices agent, my job is to find the right fit—not the highest price."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          <FAQSection
            className="!py-12 bg-slate-50"
            title="Frequently Asked Questions About North Las Vegas"
            subtitle="Affordable homes, new construction, and first-time buyers"
            faqs={northLasVegasNeighborhoodFaqs}
          />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Homeownership Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy, your Berkshire Hathaway HomeServices North Las Vegas expert,
              for guidance on finding affordable homes that fit your budget.
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
