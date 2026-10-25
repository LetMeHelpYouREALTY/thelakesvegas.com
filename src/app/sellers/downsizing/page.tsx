import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Heart,
  Home as HomeIcon,
  DollarSign,
  CheckCircle,
  Users,
  ArrowDownRight,
  Shield,
  Sun,
} from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/sections/FAQSection";
import LocalServiceAreaBlurb from "@/components/seo/LocalServiceAreaBlurb";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/sellers/downsizing",
  title: "Downsizing in Las Vegas | Berkshire Hathaway HomeServices",
  description: "Ready to simplify? Dr. Jan Duffy helps Las Vegas homeowners extract equity and transition to low-maintenance living. 55+ communities, condos, and more. Call (702) 500-1942.",
  keywords: [
    "downsizing Las Vegas",
    "sell large home Las Vegas",
    "55 plus communities Las Vegas",
    "downsizing Las Vegas",
    "Berkshire Hathaway HomeServices downsizing",
  ],
});

const downsizingFaqs = [
  {
    question: "How much can I expect to pocket when downsizing?",
    answer:
      "Most downsizers moving from large family homes ($650K-$900K) to 55+ communities or condos ($400K-$550K) walk away with $150,000-$350,000+ in net equity after all costs. Dr. Jan provides a detailed projection based on your specific situation.",
  },
  {
    question: "What if my home needs repairs before selling?",
    answer:
      "Dr. Jan helps you prioritize repairs that matter—and skip those that don't. Often, minor cosmetic updates (paint, landscaping) provide the best ROI. For larger issues, she can connect you with contractors or explore as-is selling options.",
  },
  {
    question: "How do I choose between 55+ communities?",
    answer:
      "Key factors include HOA fees and what they cover, community size and culture, amenities that match your interests, location relative to family/healthcare, and financial stability of the HOA. Dr. Jan tours communities with you and provides unbiased comparisons.",
  },
  {
    question: "Can I buy before selling my current home?",
    answer:
      "Yes, several options exist: bridge loans, HELOCs, or making offers contingent on selling. Dr. Jan works with lenders who specialize in these scenarios and can advise on the best approach for your financial situation.",
  },
  {
    question: "What about all my stuff?",
    answer:
      "Decluttering is part of downsizing. Dr. Jan recommends starting early—months before listing. She can refer you to professional organizers and estate sale companies if needed. Many clients find the process liberating once they start.",
  },
];

const downsizingSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sellers", url: "/sellers" },
    { name: "Downsizing", url: "/sellers/downsizing" },
  ]),
  generateFAQSchema(downsizingFaqs)
);

export default function DownsizingPage() {
  return (
    <>
      <SchemaScript id="sellers-downsizing-schema" schema={downsizingSchemas} />
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
              <span className="text-slate-900">Downsizing</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Embrace Low-Maintenance Living
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Simplify. Downsize. Enjoy.
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Extract your equity. Embrace low-maintenance living. Start your next chapter.
            </p>
            <LocalServiceAreaBlurb topic="Downsizing and 55+ community transitions" />
            <a
              href="tel:+17025001942"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Let's Talk About Your Options → (702) 500-1942
            </a>
          </div>

          {/* Equity Extraction */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Extract Your Equity, Enjoy Your Life
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <HomeIcon className="h-6 w-6 mr-2 text-blue-400" />
                  Your Current Home
                </h3>
                <p className="text-slate-300 mb-4">
                  Large family home you've owned for 15+ years. 4-5 bedrooms, big yard,
                  endless maintenance. Kids are gone, and it's more space than you need.
                </p>
                <div className="text-2xl font-bold text-blue-400">Value: $650K-$900K</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <ArrowDownRight className="h-6 w-6 mr-2 text-green-400" />
                  Your New Life
                </h3>
                <p className="text-slate-300 mb-4">
                  Low-maintenance 55+ community or modern condo. 2-3 bedrooms, no yard work,
                  resort amenities. Travel when you want.
                </p>
                <div className="text-2xl font-bold text-green-400">Cost: $400K-$550K</div>
                <div className="text-sm text-green-300 mt-1">+ $150K-$350K in your pocket</div>
              </div>
            </div>
            <p className="text-center text-slate-300 text-lg">
              Many downsizers walk away with <strong>$150,000-$350,000+ in equity</strong> while
              upgrading their lifestyle.
            </p>
          </section>

          {/* Transition Options */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Popular Downsizing Destinations
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">55+ Communities</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Sun City Summerlin, Del Webb, Heritage at Stonebridge. Active lifestyle,
                  built-in social network, exterior maintenance included.
                </p>
                <div className="text-blue-600 font-semibold">$375K - $650K</div>
                <Link
                  href="/55-plus-communities"
                  className="block mt-3 text-sm text-blue-600 hover:text-blue-700"
                >
                  Explore 55+ Communities →
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Single-Story Homes</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Right-sized single-story in established neighborhoods. No stairs,
                  smaller yard, lower utility costs. Age-in-place features available.
                </p>
                <div className="text-blue-600 font-semibold">$400K - $600K</div>
                <Link
                  href="/contact"
                  className="block mt-3 text-sm text-blue-600 hover:text-blue-700"
                >
                  Search Single-Story Homes →
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Lock-and-Leave Condos</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Secure, zero-maintenance living. Travel for months without worry.
                  Guard-gated options available in Summerlin and Henderson.
                </p>
                <div className="text-blue-600 font-semibold">$275K - $500K</div>
                <Link
                  href="/contact"
                  className="block mt-3 text-sm text-blue-600 hover:text-blue-700"
                >
                  View Condo Options →
                </Link>
              </div>
            </div>
          </section>

          {/* Dual Transaction Expertise */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              We Handle Both Sides of Your Transition
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">Selling Your Large Home</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Strategic pricing to attract qualified buyers quickly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional staging that showcases open floor plans and outdoor space</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Negotiate closing timeline that works with your purchase</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Coordinate with estate/trust attorneys if needed</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">Finding Your Right-Sized Home</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tour 55+ communities with expert guidance on amenities and fees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identify single-story homes with accessibility features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compare HOA fees, reserves, and community stability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Coordinate timing so you're never without a home</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Emotional Support */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-bold text-lg text-slate-900">
                  We Understand This Is Emotional
                </h3>
              </div>
              <p className="text-slate-700 mb-4">
                Your home holds decades of memories—first steps, holiday dinners, backyard
                barbecues. Downsizing isn't just a real estate transaction; it's a life transition.
              </p>
              <p className="text-slate-700">
                Dr. Jan approaches downsizing with empathy and patience. She'll never rush you,
                and she'll help you find a new home that feels right—not just financially, but
                emotionally. Many of her downsizing clients have become friends because she
                genuinely cares about their happiness, not just the sale.
              </p>
            </div>
          </section>

          {/* 55+ Community Comparison */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Top 55+ Communities for Las Vegas Downsizers
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-3xl mx-auto">
              Las Vegas offers some of the nation's best 55+ communities. Here's how the most popular
              options compare for downsizers looking to maximize their lifestyle while minimizing maintenance.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Community</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Price Range</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">HOA/Mo</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Top Amenity</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Sun City Summerlin", price: "$375K-$650K", hoa: "$165-$220", amenity: "4 golf courses" },
                    { name: "Sun City Anthem", price: "$400K-$700K", hoa: "$150-$200", amenity: "Mountain views" },
                    { name: "Heritage at Stonebridge", price: "$450K-$600K", hoa: "$175-$225", amenity: "Resort pool" },
                    { name: "Del Webb Lake Las Vegas", price: "$400K-$650K", hoa: "$180-$250", amenity: "Lake access" },
                    { name: "Solera at Anthem", price: "$375K-$550K", hoa: "$140-$180", amenity: "Smaller, intimate" },
                  ].map((community, index) => (
                    <tr key={community.name} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-medium text-slate-900">{community.name}</td>
                      <td className="px-4 py-3 text-slate-700">{community.price}</td>
                      <td className="px-4 py-3 text-slate-700">{community.hoa}</td>
                      <td className="px-4 py-3 text-slate-700">{community.amenity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center mt-4">
              <Link href="/55-plus-communities" className="text-blue-600 hover:text-blue-700 font-semibold">
                View Detailed 55+ Community Guide →
              </Link>
            </p>
          </section>

          {/* What to Consider */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Key Considerations When Downsizing
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">Financial Factors</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>HOA Fees:</strong> 55+ communities range from $140-$250/month. Ensure you understand what's included (landscaping, exterior maintenance, amenities).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Capital Gains:</strong> If you've lived in your home 2+ years, up to $500,000 (married) in gains are tax-free. Consult a CPA for larger gains.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Insurance Costs:</strong> Smaller homes and condos often have lower insurance. Some 55+ communities include exterior coverage in HOA.
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">Lifestyle Factors</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Guest Space:</strong> Kids and grandkids still visit. Consider a home with a guest room or nearby vacation rentals for overflow.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Healthcare Access:</strong> Proximity to hospitals matters. Summerlin Hospital, Henderson Hospital, and Centennial Hills Hospital serve different areas.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Social Activities:</strong> 55+ communities offer built-in social networks. If that's not appealing, consider active neighborhoods like Green Valley or Summerlin.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* The Downsizing Process */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              The Downsizing Process with Dr. Jan Duffy
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Discovery Conversation</h3>
                  <p className="text-slate-600">
                    We start with a no-pressure conversation about your goals. What's driving your decision?
                    What features are must-haves in your next home? What lifestyle do you want? This helps
                    Dr. Jan understand your needs beyond just the numbers.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Equity Analysis & Options Review</h3>
                  <p className="text-slate-600">
                    Dr. Jan provides a comprehensive market analysis of your current home, showing exactly
                    how much equity you have. Then she presents downsizing options that fit your budget,
                    comparing 55+ communities, single-story homes, and condos.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Tour & Compare</h3>
                  <p className="text-slate-600">
                    Visit potential new homes and communities at your pace. Dr. Jan provides insight into
                    HOA financial health, community culture, and resale trends. No pressure—this is about
                    finding what feels right.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Coordinated Transaction</h3>
                  <p className="text-slate-600">
                    When you're ready, Dr. Jan coordinates both the sale of your current home and purchase
                    of your new one. Timing is synchronized so you're never homeless or carrying two mortgages.
                    She handles all the details while you focus on your next chapter.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <FAQSection
            className="!py-12 bg-slate-50"
            title="Downsizing FAQs"
            subtitle="Equity, repairs, 55+ communities, and timing"
            faqs={downsizingFaqs}
          />

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-xl p-8">
              <blockquote className="text-lg italic mb-4">
                "Downsizing clients are some of my favorite to work with. They've worked hard,
                raised families, and now deserve to enjoy life without maintaining a 4,000 square
                foot house. I help them extract the equity they've earned, find a home that fits
                their current lifestyle, and often pocket significant cash for travel, grandkids,
                or just peace of mind. As a <strong>Berkshire Hathaway HomeServices</strong> agent,
                I have the experience and compassion this transition requires."
              </blockquote>
              <cite className="text-slate-300 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Simplify Your Life?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free home valuation and explore your downsizing options.
              Dr. Jan will show you what's possible without any pressure.
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
                href="/home-valuation"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Get Free Valuation
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
