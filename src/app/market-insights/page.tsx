import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  TrendingUp,
  Building2,
  Cpu,
  Globe,
  Zap,
  BarChart3,
  Users,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import { combineSchemas, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/market-insights",
  title: "Las Vegas Real Estate Market Insights 2026 | Berkshire Hathaway HomeServices",
  description: "Technology trends, economic forecasts, and market analysis shaping Las Vegas real estate in 2026. AI, data centers, California migration, and what it means for buyers and sellers. Call (702) 500-1942.",
  keywords: [
    "Las Vegas real estate trends 2026",
    "Las Vegas market forecast",
    "Nevada economic outlook",
    "California to Las Vegas migration",
    "Las Vegas tech hub",
    "Berkshire Hathaway market insights",
  ],
});

const reportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: "Las Vegas Real Estate Market Insights 2026",
  author: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy",
    worksFor: "Berkshire Hathaway HomeServices Nevada Properties",
  },
  datePublished: "2026-01-23",
  about: {
    "@type": "Place",
    name: "Las Vegas, Nevada",
  },
};

const marketInsightsPageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Market Insights", url: "/market-insights" },
  ]),
  reportSchema
);

export default function MarketInsightsPage() {
  return (
    <>
      <SchemaScript id="market-insights-page-schema" schema={marketInsightsPageSchemas} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <span className="text-slate-900">Market Insights</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              2026 Economic & Real Estate Analysis
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas Market Insights
            </h1>
            <p className="text-xl text-slate-600">
              Technology trends, economic forces, and market dynamics shaping Las Vegas
              real estate in 2026 and beyond.
            </p>
          </div>

          {/* Key Drivers */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              5 Forces Driving Las Vegas Real Estate in 2026
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">37%</div>
                <div className="text-slate-300 text-sm">California Migration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">0%</div>
                <div className="text-slate-300 text-sm">State Income Tax</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$1B+</div>
                <div className="text-slate-300 text-sm">Data Center Investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">2.8%</div>
                <div className="text-slate-300 text-sm">Job Growth Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">45M</div>
                <div className="text-slate-300 text-sm">Annual Visitors</div>
              </div>
            </div>
          </section>

          {/* Tech Transformation */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Cpu className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">
                Las Vegas Tech Transformation
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                  Las Vegas is rapidly becoming a legitimate tech hub. What started with data centers
                  attracted by cheap power and land has evolved into a broader technology ecosystem.
                  The implications for real estate are significant.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Data Center Corridor</h3>
                <p>
                  Henderson's data center corridor now hosts Google, Amazon Web Services, Switch,
                  and other major operators. These facilities bring high-paying jobs and attract
                  supporting technology companies.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Tech Impact on Real Estate</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Henderson appreciation:</strong> Tech jobs driving Henderson home
                      values up 5.1% YoY—outpacing valley average
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Remote worker influx:</strong> Tech workers keeping CA salaries
                      while enjoying NV tax advantages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">
                      <strong>Infrastructure investment:</strong> Fiber networks and power
                      infrastructure improving for all residents
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* California Migration Deep Dive */}
          <section className="mb-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 mr-3" />
              <h2 className="text-3xl font-bold">California Migration Analysis</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-blue-100 mb-6">
                  California remains the #1 source of Las Vegas home buyers. Understanding this
                  migration pattern is essential for both buyers and sellers.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">37%</div>
                    <div className="text-blue-200 text-sm">of all Las Vegas buyers from CA</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">$250K+</div>
                    <div className="text-blue-200 text-sm">Avg. equity CA buyers bring</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">Bay Area & LA</div>
                    <div className="text-blue-200 text-sm">Primary source markets</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Why Californians Choose Las Vegas</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">1.</span>
                    <span><strong>Tax savings:</strong> 9.3%-13.3% state income tax eliminated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">2.</span>
                    <span><strong>Housing costs:</strong> 40-60% less than comparable CA markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">3.</span>
                    <span><strong>Proximity:</strong> 4-hour drive, 1-hour flight to most of CA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">4.</span>
                    <span><strong>Similar climate:</strong> Same sunshine, less humidity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">5.</span>
                    <span><strong>Entertainment:</strong> World-class dining, shows, sports</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/buyers/california-relocator"
                    className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-50 transition-colors"
                  >
                    California Relocation Guide →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Economic Diversification */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">
                Economic Diversification
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Raiders & Sports</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Allegiant Stadium anchors a new entertainment district. NHL Golden Knights,
                  WNBA Aces, and potential MLB/NBA expansion diversify the economy.
                </p>
                <div className="text-green-600 font-semibold text-sm">
                  Impact: West Las Vegas appreciation, job creation
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Healthcare Growth</h3>
                <p className="text-slate-600 text-sm mb-3">
                  New hospitals, medical schools, and healthcare facilities address historic
                  shortages while creating high-paying jobs.
                </p>
                <div className="text-green-600 font-semibold text-sm">
                  Impact: Henderson, Summerlin medical corridors
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Film & Production</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Nevada film incentives attracting production companies. New studios and
                  post-production facilities creating entertainment industry jobs.
                </p>
                <div className="text-green-600 font-semibold text-sm">
                  Impact: Creative industry employment growth
                </div>
              </div>
            </div>
          </section>

          {/* Neighborhood Forecasts */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">
                2026 Neighborhood Outlook
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">Henderson</h3>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                    Strong Buy
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Tech corridor growth, safety rankings, and quality of life driving consistent demand.
                  Expect continued 4-6% appreciation.
                </p>
                <div className="text-sm text-slate-500">
                  Hot areas: Inspirada, MacDonald Highlands, Green Valley Ranch
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">Summerlin</h3>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                    Strong Buy
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Red Rock views, Downtown Summerlin, and top schools maintain premium positioning.
                  Limited new inventory keeps values strong.
                </p>
                <div className="text-sm text-slate-500">
                  Hot areas: The Ridges, Regency at Summerlin, Paseos
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">North Las Vegas</h3>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                    Value Play
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Best affordability in the valley. Infrastructure investment and new retail
                  improving area. First-time buyer sweet spot.
                </p>
                <div className="text-sm text-slate-500">
                  Hot areas: Aliante, Elkhorn, Valley Vista
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">Southwest (Mountains Edge)</h3>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                    Steady Growth
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-3">
                  Master-planned community with the valley's largest park. New construction
                  competing with resales. Solid appreciation.
                </p>
                <div className="text-sm text-slate-500">
                  Hot areas: Exploration Peak, Southern Highlands adjacent
                </div>
              </div>
            </div>
          </section>

          {/* What This Means */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              What This Means for You
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 text-xl mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  For Buyers
                </h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Act strategically:</strong> More inventory than 2021-2023, but
                      well-priced homes still move fast
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Consider tech corridors:</strong> Henderson and west Summerlin
                      positioned for continued job growth
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Builder incentives:</strong> Rate buydowns and credits make new
                      construction competitive
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 text-xl mb-4 flex items-center">
                  <DollarSign className="h-6 w-6 mr-2" />
                  For Sellers
                </h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Price correctly:</strong> Overpriced homes sit; correctly priced
                      homes sell in under 30 days
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Target CA buyers:</strong> Marketing to California relocators
                      expands buyer pool significantly
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Highlight tech access:</strong> Proximity to data centers and
                      tech jobs adds value
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-xl p-8">
              <blockquote className="text-lg italic mb-4">
                "Understanding market forces—not just current prices—separates informed decisions
                from reactive ones. Las Vegas is no longer just a gaming and tourism economy.
                Tech investment, California migration, and economic diversification are reshaping
                which neighborhoods will outperform. As a{" "}
                <strong>Berkshire Hathaway HomeServices</strong> agent, I help clients position
                themselves for where the market is going, not just where it's been."
              </blockquote>
              <cite className="text-slate-300 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-purple-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Personalized Market Analysis
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Wondering what these trends mean for your specific situation? Dr. Jan Duffy provides
              free consultations with customized market analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001942"
                className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-purple-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1942
              </a>
              <Link
                href="/market-report"
                className="inline-flex items-center justify-center bg-purple-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-purple-400 transition-colors"
              >
                View Market Report →
              </Link>
            </div>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
