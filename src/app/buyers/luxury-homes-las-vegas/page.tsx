import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Shield,
  Eye,
  Building,
  TrendingUp,
  Lock,
  Star,
  Home as HomeIcon,
  MapPin,
  CheckCircle,
  DollarSign,
} from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import { combineSchemas, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/buyers/luxury-homes-las-vegas",
  title: "Luxury Homes Las Vegas | Berkshire Hathaway HomeServices",
  description: "Las Vegas luxury real estate from $1.2M to $10M+. Guard-gated estates, Strip penthouses, and custom homes. Dr. Jan Duffy provides discrete, expert representation. Call (702) 500-1942.",
  keywords: [
    "luxury homes Las Vegas",
    "The Ridges Las Vegas",
    "MacDonald Highlands",
    "luxury real estate Henderson",
    "guard gated communities Las Vegas",
    "Berkshire Hathaway luxury homes",
  ],
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the luxury home market like in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las Vegas luxury ($1M+) has appreciated 161% since 2015, making it #4 nationally for luxury growth. The December 2025 luxury median is $1.45M. Cash buyers represent approximately 60% of luxury transactions.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most exclusive luxury communities in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Ridges in Summerlin ($1.5M-$10M+) is the valley's most prestigious address. MacDonald Highlands and Ascaya in Henderson ($2M-$15M) offer Strip views. For high-rise luxury, Waldorf Astoria, Veer Towers, and Panorama Towers dominate the Strip corridor.",
      },
    },
    {
      "@type": "Question",
      name: "Do luxury buyers need representation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Luxury transactions involve complex negotiations, privacy concerns, and significant financial exposure. One wrong move can cost hundreds of thousands. Berkshire Hathaway HomeServices provides discrete, sophisticated representation for discerning buyers.",
      },
    },
  ],
};

const buyersLuxuryHomesPageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Buyers", url: "/buyers" },
    { name: "Luxury Homes", url: "/buyers/luxury-homes-las-vegas" },
  ]),
  faqSchema
);

export default function LuxuryHomesPage() {
  return (
    <>
      <SchemaScript id="buyers-luxury-homes-page-schema" schema={buyersLuxuryHomesPageSchemas} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/buyers" className="hover:text-blue-600">Buyers</Link>
              {" / "}
              <span className="text-slate-900">Luxury Homes</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="h-4 w-4 mr-2" />
              $1.2M - $10M+
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas Luxury Real Estate
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Guard-gated estates. Strip penthouses. Uncompromising privacy.
            </p>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-800 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Schedule a Private Preview → (702) 500-1942
            </a>
          </div>

          {/* Market Performance */}
          <section className="mb-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Las Vegas Luxury Market Performance
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">+161%</div>
                <div className="text-slate-300 text-sm">Appreciation Since 2015</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">#4</div>
                <div className="text-slate-300 text-sm">National Luxury Growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$1.45M</div>
                <div className="text-slate-300 text-sm">Luxury Median (Dec 2025)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">60%</div>
                <div className="text-slate-300 text-sm">Cash Transactions</div>
              </div>
            </div>
            <p className="text-center text-slate-300">
              Las Vegas luxury real estate continues to outperform national averages, driven by
              California migration, favorable tax environment, and world-class amenities.
            </p>
          </section>

          {/* Luxury Communities */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Premier Luxury Communities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* The Ridges */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6">
                  <h3 className="font-bold text-2xl mb-1">The Ridges</h3>
                  <p className="text-amber-100">Summerlin's Most Prestigious Address</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-slate-900">$1.5M - $10M+</span>
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Guard-Gated
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">
                    The valley's most exclusive enclave, home to celebrities, executives, and those who
                    demand absolute privacy. Custom estates, Bear's Best Golf Club, and Red Rock views.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      24/7 guard-gated security
                    </li>
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Custom home sites available
                    </li>
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Red Rock Canyon access
                    </li>
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Celebrity neighborhood
                    </li>
                  </ul>
                  <Link
                    href="/neighborhoods/the-ridges"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Explore The Ridges →
                  </Link>
                </div>
              </div>

              {/* MacDonald Highlands / Ascaya */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
                  <h3 className="font-bold text-2xl mb-1">MacDonald Highlands / Ascaya</h3>
                  <p className="text-purple-100">Henderson's Finest Addresses</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-slate-900">$2M - $15M+</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Strip Views
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Elevated luxury with dramatic Strip and valley views. DragonRidge Country Club,
                    modern architecture, and Henderson's 60+ city parks create an unmatched combination.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Panoramic Strip views
                    </li>
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      DragonRidge Country Club
                    </li>
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Modern architecture
                    </li>
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Foothill and Coronado high school zones
                    </li>
                  </ul>
                  <Link
                    href="/neighborhoods/henderson"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Explore Henderson Luxury →
                  </Link>
                </div>
              </div>

              {/* Strip High-Rises */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <h3 className="font-bold text-2xl mb-1">Strip High-Rise Residences</h3>
                  <p className="text-blue-100">Lock-and-Leave Luxury Living</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-slate-900">$1M - $15M+</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Full Service
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Waldorf Astoria, Veer Towers, Panorama Towers—full-service luxury for those who want
                    turnkey living with world-class amenities and zero maintenance.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Concierge & valet services
                    </li>
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Strip & mountain views
                    </li>
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Pool, spa, fitness
                    </li>
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Perfect for part-time residents
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Request High-Rise Portfolio →
                  </Link>
                </div>
              </div>

              {/* Southern Highlands */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                  <h3 className="font-bold text-2xl mb-1">Southern Highlands</h3>
                  <p className="text-green-100">Golf Course Luxury</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-slate-900">$750K - $3M+</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Golf Community
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Championship golf, guard-gated privacy, and proximity to the airport make Southern
                    Highlands ideal for executives and frequent travelers.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      36-hole championship golf
                    </li>
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Guard-gated sections
                    </li>
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Near airport (15 min)
                    </li>
                    <li className="flex items-center text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      CCSD schools, zoned by address
                    </li>
                  </ul>
                  <Link
                    href="/neighborhoods/southern-highlands"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Explore Southern Highlands →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Discretion */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-slate-700 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Privacy & Discretion</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 mb-4">
                  Luxury transactions require a level of discretion that most agents can't provide.
                  Dr. Jan Duffy and <strong>Berkshire Hathaway HomeServices</strong> understand that
                  privacy isn't a luxury—it's a requirement.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Eye className="h-5 w-5 text-slate-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Off-market access:</strong> Not every luxury home is publicly listed.
                    We have relationships that provide access to properties before they hit the market.</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-slate-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Confidential showings:</strong> Private appointments, no sign-in sheets,
                    discrete documentation.</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 text-slate-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Financial privacy:</strong> We work with your advisors and attorneys
                    to structure transactions that protect your interests.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Wealth Management Coordination</h3>
                <p className="text-slate-600 mb-4">
                  Luxury purchases often involve complex financial considerations—1031 exchanges,
                  trust purchases, LLC structures, and more. Dr. Jan coordinates with your:
                </p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• Financial advisors</li>
                  <li>• Estate planning attorneys</li>
                  <li>• CPAs and tax professionals</li>
                  <li>• Insurance specialists</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-xl p-8">
              <blockquote className="text-lg italic mb-4">
                "Luxury buyers expect discretion, market expertise, and flawless execution. In this
                price range, one wrong move can cost hundreds of thousands of dollars. My clients
                trust me because I've closed $127M+ in transactions and understand that their time
                and privacy are worth more than any commission. <strong>Berkshire Hathaway HomeServices</strong>
                provides the global resources and credibility that luxury transactions demand."
              </blockquote>
              <cite className="text-slate-300 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Las Vegas Luxury
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Schedule a private consultation to discuss your requirements. Dr. Jan Duffy provides
              confidential, expert guidance for discerning buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001942"
                className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                (702) 500-1942
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-amber-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-amber-400 transition-colors"
              >
                Request Private Showing
              </Link>
            </div>
            <p className="mt-6 text-slate-400 text-sm">
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
