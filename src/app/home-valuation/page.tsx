import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import Link from "next/link";
import { Phone, CheckCircle, Home, TrendingUp, MapPin, Calculator, Clock, DollarSign } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/home-valuation",
  title: "Free Home Valuation Las Vegas | What's Your Home Worth? | Berkshire Hathaway HomeServices",
  description: "Get a free, accurate home valuation in Las Vegas from Dr. Jan Duffy at Berkshire Hathaway HomeServices. Expert CMA analysis for Summerlin, Henderson, Green Valley & all Las Vegas neighborhoods. Call (702) 500-1942.",
  keywords: [
    "home valuation Las Vegas",
    "what is my home worth Las Vegas",
    "free home value estimate",
    "CMA Las Vegas",
    "Berkshire Hathaway home valuation",
    "Summerlin home value",
    "Henderson home value",
  ],
});

const homeValuationFaqs = [
  {
    question: "How accurate are online home value estimates like Zillow's Zestimate?",
    answer:
      "Online estimates like Zillow's Zestimate can be off by 5-15% or more, especially in markets like Las Vegas where home features vary significantly. They cannot account for upgrades, condition, views, or lot characteristics. A professional CMA from a local expert provides far more accurate pricing.",
  },
  {
    question: "What factors affect my Las Vegas home's value?",
    answer:
      "Key factors include location (neighborhood, school zone, proximity to amenities), square footage, lot size, number of bedrooms and bathrooms, age of the home, upgrades (kitchen, bathrooms, flooring), pool, views, HOA fees, and current market conditions. In Las Vegas, features like solar panels, energy efficiency, and covered patios also significantly impact value.",
  },
  {
    question: "How long does a home valuation take?",
    answer:
      "Dr. Jan Duffy typically provides a comprehensive market analysis within 24-48 hours of receiving your property information. The analysis includes recent comparable sales, current competition, and a recommended price range.",
  },
  {
    question: "Is a home valuation the same as an appraisal?",
    answer:
      "No. A home valuation or CMA (Comparative Market Analysis) is a real estate agent's estimate based on market data. An appraisal is a formal valuation by a licensed appraiser, typically required by lenders. CMAs are free and useful for listing decisions; appraisals cost $400-600 and are required for financing.",
  },
];

const homeValuationPageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sellers", url: "/sellers" },
    { name: "Home Valuation", url: "/home-valuation" },
  ]),
  generateFAQSchema(homeValuationFaqs)
);

export default function HomeValuationPage() {
  return (
    <>
      <SchemaScript id="home-valuation-page-schema" schema={homeValuationPageSchemas} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/sellers" className="hover:text-blue-600">Sellers</Link>
              {" / "}
              <span className="text-slate-900">Home Valuation</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              What's Your Las Vegas Home Worth?
            </h1>
            <p className="text-xl text-slate-600">
              Get a free, no-obligation home valuation from Dr. Jan Duffy at{" "}
              <strong>Berkshire Hathaway HomeServices</strong>. Accurate pricing backed by 17+ years
              of Las Vegas market expertise and $127M+ in Dr. Duffy Group career sales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Calendly Widget */}
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4 text-center">
                <h2 className="text-2xl font-bold">Schedule Your Free Valuation</h2>
                <p className="text-blue-100 text-sm mt-1">
                  Book a consultation with Dr. Jan Duffy
                </p>
              </div>
              <CalendlyWidget url="showing" height="650px" />
              <p className="text-xs text-slate-500 text-center p-4 border-t border-slate-200">
                No obligation. No pressure. Just accurate information from Berkshire Hathaway
                HomeServices.
              </p>
            </div>

            {/* Value Prop */}
            <div className="space-y-8">
              <div className="bg-slate-900 text-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Why Request a BHHS Valuation?</h2>
                <p className="text-slate-300 mb-6">
                  Online estimators like Zillow's "Zestimate" can be off by 10% or more—that's
                  $45,000+ on a typical Las Vegas home. Dr. Jan Duffy provides a comprehensive
                  market analysis using current MLS data, recent comparable sales, and her expertise
                  serving Las Vegas since 2008. The result? Accurate pricing that helps you sell
                  faster and for more money.
                </p>
                <div className="space-y-3">
                  {[
                    "Accurate pricing based on actual market data",
                    "Consideration of your home's unique features",
                    "Current buyer demand analysis",
                    "Neighborhood-specific insights",
                    "No obligation or pressure to sell",
                  ].map((item) => (
                    <div key={item} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Stats */}
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="font-bold text-slate-900 mb-4">Las Vegas Market | January 2026</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$450K</div>
                    <div className="text-sm text-slate-600">Median Home Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+4.2%</div>
                    <div className="text-sm text-slate-600">YoY Appreciation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">28 Days</div>
                    <div className="text-sm text-slate-600">Avg. Days on Market</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2.1 Mo</div>
                    <div className="text-sm text-slate-600">Inventory</div>
                  </div>
                </div>
              </div>

              {/* Expert Quote */}
              <div className="bg-slate-50 rounded-lg p-6">
                <blockquote className="text-slate-700 italic mb-3">
                  "Pricing your home correctly from day one is the single most important factor in
                  getting top dollar. That's why I use comprehensive market analysis—not just
                  algorithms—to determine your home's true value."
                </blockquote>
                <cite className="text-slate-900 font-semibold text-sm">
                  — Dr. Jan Duffy, BHHS Nevada Properties
                </cite>
              </div>

              {/* Call Option */}
              <div className="text-center">
                <p className="text-slate-600 mb-4">Prefer to talk? Call Dr. Jan directly:</p>
                <a
                  href="tel:+17025001942"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  (702) 500-1942
                </a>
              </div>
            </div>
          </div>

          {/* Why Online Estimates Fall Short */}
          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Why Online Home Value Estimates Often Miss the Mark
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                If you've checked Zillow, Redfin, or other online home value tools, you've likely
                noticed the estimates can vary wildly—sometimes by $50,000 or more. That's because
                these automated valuation models (AVMs) rely on algorithms that can't see inside
                your home or understand the nuances of the Las Vegas market.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices</strong> agents like Dr. Jan Duffy provide
                something these algorithms cannot: local expertise combined with a detailed
                understanding of what makes your specific home valuable. A professional Comparative
                Market Analysis (CMA) considers factors that online tools miss entirely.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-bold text-red-800 mb-4">What Online Estimates Miss</h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Kitchen and bathroom upgrades
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Pool, spa, or outdoor living features
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Views (Strip, mountain, golf course)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Lot size and position (corner, cul-de-sac)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Solar panels and energy efficiency
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Current condition and maintenance
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-800 mb-4">What a BHHS CMA Includes</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Recent comparable sales analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Active competition review
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Feature-by-feature adjustments
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Neighborhood trend analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Buyer demand assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Strategic pricing recommendations
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Factors Affecting Value */}
          <section className="max-w-5xl mx-auto mb-16 bg-slate-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Key Factors That Affect Your Las Vegas Home's Value
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <MapPin className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Location & Neighborhood</h3>
                <p className="text-slate-600 text-sm">
                  Summerlin commands 20-40% premiums over comparable homes in other areas. School
                  zones, HOA quality, and proximity to amenities significantly impact value.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Home className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Size & Layout</h3>
                <p className="text-slate-600 text-sm">
                  Square footage, bedroom/bathroom count, and functional floor plans matter. Open
                  concepts and first-floor master suites command premiums in today's market.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Upgrades & Condition</h3>
                <p className="text-slate-600 text-sm">
                  Updated kitchens and bathrooms return 60-80% of investment. Flooring, paint,
                  fixtures, and overall maintenance affect buyer perception and offers.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <DollarSign className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Market Conditions</h3>
                <p className="text-slate-600 text-sm">
                  Interest rates, inventory levels, and seasonal demand fluctuate. January 2026
                  shows 2.1 months inventory—still a seller's market but more balanced than 2021-2022.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Calculator className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Lot Characteristics</h3>
                <p className="text-slate-600 text-sm">
                  Lot size, views, privacy, and outdoor features like pools add 5-15% to value.
                  Corner lots, cul-de-sacs, and premium positions command higher prices.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Clock className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Age & Systems</h3>
                <p className="text-slate-600 text-sm">
                  Newer homes (built 2015+) often sell for more per square foot. However, older
                  homes with updated HVAC, roof, and electrical can compete effectively.
                </p>
              </div>
            </div>
          </section>

          {/* Neighborhood Values */}
          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Las Vegas Neighborhood Home Values | January 2026
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Neighborhood</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Median Price</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">YoY Change</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Avg $/SqFt</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { area: "Summerlin", price: "$625,000", change: "+6.8%", sqft: "$285" },
                    { area: "Henderson", price: "$485,000", change: "+5.1%", sqft: "$245" },
                    { area: "Green Valley", price: "$520,000", change: "+4.5%", sqft: "$255" },
                    { area: "Southern Highlands", price: "$750,000", change: "+5.5%", sqft: "$295" },
                    { area: "North Las Vegas", price: "$385,000", change: "+3.2%", sqft: "$210" },
                    { area: "Centennial Hills", price: "$495,000", change: "+4.8%", sqft: "$240" },
                  ].map((row, index) => (
                    <tr key={row.area} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 font-medium text-slate-900">{row.area}</td>
                      <td className="px-6 py-4 text-slate-700">{row.price}</td>
                      <td className="px-6 py-4 text-green-600 font-medium">{row.change}</td>
                      <td className="px-6 py-4 text-slate-700">{row.sqft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-slate-500 text-sm mt-4">
              Values represent single-family homes. Your specific home may vary based on features and condition.
            </p>
          </section>

          {/* The Valuation Process */}
          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              The BHHS Home Valuation Process
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Share Your Property Details</h3>
                  <p className="text-slate-600">
                    Schedule a consultation through the calendar above or call Dr. Jan directly.
                    Provide your address, basic property information, and any recent upgrades or
                    improvements you've made. Photos are helpful but not required initially.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Comprehensive Market Analysis</h3>
                  <p className="text-slate-600">
                    Dr. Jan researches recent comparable sales, current active listings, and expired
                    listings in your area. She analyzes price trends, days on market, and buyer
                    demand specific to your neighborhood and property type.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Feature Adjustments</h3>
                  <p className="text-slate-600">
                    Your home's unique features are factored in: upgrades, lot characteristics,
                    views, pool, solar, and condition. These adjustments ensure the valuation
                    reflects what buyers will actually pay for your specific property.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Pricing Strategy Consultation</h3>
                  <p className="text-slate-600">
                    Within 24-48 hours, you'll receive a detailed CMA report with a recommended
                    price range. Dr. Jan will walk you through the data, explain the methodology,
                    and answer any questions—with absolutely no pressure to list.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About Home Valuations
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How accurate are online home value estimates like Zillow's Zestimate?",
                  a: "Online estimates like Zillow's Zestimate can be off by 5-15% or more, especially in markets like Las Vegas where home features vary significantly. They cannot account for upgrades, condition, views, or lot characteristics. A professional CMA from a local expert provides far more accurate pricing.",
                },
                {
                  q: "What factors affect my Las Vegas home's value?",
                  a: "Key factors include location (neighborhood, school zone, proximity to amenities), square footage, lot size, number of bedrooms and bathrooms, age of the home, upgrades (kitchen, bathrooms, flooring), pool, views, HOA fees, and current market conditions. In Las Vegas, features like solar panels, energy efficiency, and covered patios also significantly impact value.",
                },
                {
                  q: "How long does a home valuation take?",
                  a: "Dr. Jan Duffy typically provides a comprehensive market analysis within 24-48 hours of receiving your property information. The analysis includes recent comparable sales, current competition, and a recommended price range.",
                },
                {
                  q: "Is a home valuation the same as an appraisal?",
                  a: "No. A home valuation or CMA (Comparative Market Analysis) is a real estate agent's estimate based on market data. An appraisal is a formal valuation by a licensed appraiser, typically required by lenders. CMAs are free and useful for listing decisions; appraisals cost $400-600 and are required for financing.",
                },
                {
                  q: "Do I need to have my home ready to show for a valuation?",
                  a: "Not necessarily. Dr. Jan can provide an initial valuation based on property records, MLS data, and information you provide. However, a brief walk-through helps identify features and upgrades that add value. There's no need to stage or prepare extensively.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Know What Your Home Is Worth?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free, no-obligation home valuation from Dr. Jan Duffy and Berkshire Hathaway
              HomeServices Nevada Properties. Accurate pricing. Expert guidance. Zero pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001942"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1942
              </a>
              <Link
                href="/sellers"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Learn About Selling
              </Link>
            </div>
            <p className="mt-4 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
