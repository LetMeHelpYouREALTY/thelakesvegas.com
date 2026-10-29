import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  DollarSign,
  Sun,
  Home as HomeIcon,
  Briefcase,
  Plane,
  GraduationCap,
  Heart,
  Calculator,
  MapPin,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { siteUrl } from "@/lib/site-config";
import SchemaScript from "@/components/SchemaScript";
import { combineSchemas, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/buyers/california-relocator",
  title: "Relocating from California to Las Vegas | Berkshire Hathaway HomeServices",
  description: "Moving from California to Las Vegas? Zero state income tax, 40-60% lower home prices, same sunshine. Dr. Jan Duffy helps CA relocators find their perfect Las Vegas home. Call (702) 500-1942.",
  keywords: [
    "California to Las Vegas relocation",
    "moving from California to Nevada",
    "California relocator Las Vegas",
    "no state income tax Nevada",
    "Las Vegas homes California buyers",
    "Berkshire Hathaway HomeServices relocation",
  ],
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much can I save moving from California to Nevada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nevada has zero state income tax, saving Californians 9.3%-13.3% depending on income bracket. Combined with 40-60% lower home prices, a family earning $200K buying a $600K home could save $150K+ over 5 years compared to staying in California.",
      },
    },
    {
      "@type": "Question",
      name: "What neighborhoods do California relocators prefer in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "California buyers typically gravitate toward Summerlin (similar to Irvine/coastal communities), Henderson (master-planned suburbs similar to San Diego's), and The Ridges (comparable to Newport Coast luxury). These areas offer the quality and amenities California buyers expect.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to establish Nevada residency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nevada residency can be established immediately upon moving. To benefit from no state income tax, you should update your driver's license, register your vehicles, and register to vote in Nevada. Most people complete this within 30 days of their move.",
      },
    },
    {
      "@type": "Question",
      name: "What does my California home equity buy in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical $1.2M California home translates to $500K-$700K in Las Vegas with similar or better features. Many California sellers can buy a larger Las Vegas home AND pocket significant equity for retirement or investment.",
      },
    },
    {
      "@type": "Question",
      name: "Are there direct flights from Las Vegas to California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Las Vegas has extensive flight options to California. Southwest, United, and other carriers offer dozens of daily flights to LAX, SFO, SAN, and other California airports. Flight times are typically 1-1.5 hours.",
      },
    },
  ],
};

const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  telephone: "+17025001942",
  url: siteUrl("/buyers/california-relocator"),
  address: {
    "@type": "PostalAddress",
    streetAddress: "9406 W Lake Mead Blvd, Suite 100",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
  },
  areaServed: ["Las Vegas", "Henderson", "Summerlin", "North Las Vegas"],
  priceRange: "$350,000 - $10,000,000+",
};

const californiaRelocatorPageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Buyers", url: "/buyers" },
    { name: "California Relocator", url: "/buyers/california-relocator" },
  ]),
  faqSchema,
  realEstateAgentSchema
);

export default function CaliforniaRelocatorPage() {
  return (
    <>
      <SchemaScript id="california-relocator-page-schema" schema={californiaRelocatorPageSchemas} />
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
              <span className="text-slate-900">California Relocator</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sun className="h-4 w-4 mr-2" />
              37% of Las Vegas Buyers Are From California
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Relocating from California?<br />
              <span className="text-blue-600">Welcome Home to Las Vegas</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Zero state income tax. 40-60% lower home prices. Same sunshine.
            </p>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Start Your Tax-Free Life → (702) 500-1942
            </a>
          </div>

          {/* Tax Savings Comparison */}
          <section className="mb-16 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Calculator className="h-10 w-10 mr-3" />
              <h2 className="text-3xl font-bold">California vs. Nevada: The Numbers</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">0%</div>
                <div className="text-green-100">Nevada State Income Tax</div>
                <div className="text-sm text-green-200 mt-2">vs. CA 9.3%-13.3%</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">40-60%</div>
                <div className="text-green-100">Lower Home Prices</div>
                <div className="text-sm text-green-200 mt-2">Similar quality homes</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">$150K+</div>
                <div className="text-green-100">5-Year Savings</div>
                <div className="text-sm text-green-200 mt-2">$200K income example</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-green-100 text-lg">
                A California family earning $250,000/year saves <strong>$25,000+ annually</strong> in state income tax alone by moving to Nevada.
              </p>
            </div>
          </section>

          {/* What Your CA Equity Buys */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              What Your California Equity Buys in Las Vegas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-red-600 mr-2" />
                  <h3 className="font-bold text-lg text-red-900">In California</h3>
                </div>
                <ul className="space-y-3 text-red-800">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">$1.2M:</span>
                    <span>3BR/2BA 1,800 sq ft in decent suburb</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">$800K:</span>
                    <span>2BR condo or older townhome</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">$600K:</span>
                    <span>Fixer-upper or long commute</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="font-bold text-lg text-green-900">In Las Vegas</h3>
                </div>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">$700K:</span>
                    <span>4BR/3BA 3,000 sq ft in Summerlin + $500K pocket</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">$550K:</span>
                    <span>Beautiful 4BR in Henderson + cash left over</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">$450K:</span>
                    <span>Brand new construction, turnkey ready</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Top Neighborhoods for CA Relocators */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Top 3 Neighborhoods for California Relocators
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="font-bold text-xl">Summerlin</h3>
                  <p className="text-blue-100 text-sm">Median: $726K</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">
                    "The Irvine of Las Vegas" - Master-planned perfection with nearby public schools,
                    Downtown Summerlin shopping, and Red Rock Canyon views.
                  </p>
                  <div className="text-sm text-slate-500 mb-4">
                    <strong>Best for:</strong> Families from Orange County, coastal CA
                  </div>
                  <ul className="text-sm space-y-1 text-slate-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Nearby public schools
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      150+ parks & trails
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Upscale dining & shopping
                    </li>
                  </ul>
                  <Link
                    href="/neighborhoods/summerlin"
                    className="block mt-4 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Explore Summerlin →
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-green-600 text-white p-4">
                  <h3 className="font-bold text-xl">Henderson / Inspirada</h3>
                  <p className="text-green-100 text-sm">Median: $530K</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">
                    Henderson = San Diego suburbs meets tech corridor. Google's data center,
                    named public schools, and an online police crime map.
                  </p>
                  <div className="text-sm text-slate-500 mb-4">
                    <strong>Popular with:</strong> Tech commuters, San Diego relocators
                  </div>
                  <ul className="text-sm space-y-1 text-slate-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Tech job growth
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Public crime maps online
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      New construction options
                    </li>
                  </ul>
                  <Link
                    href="/neighborhoods/henderson"
                    className="block mt-4 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Explore Henderson →
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-purple-600 text-white p-4">
                  <h3 className="font-bold text-xl">The Ridges</h3>
                  <p className="text-purple-100 text-sm">$1.5M - $10M+</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">
                    Newport Coast quality, Vegas prices. Guard-gated luxury with Strip views,
                    celebrity neighbors, and custom estates.
                  </p>
                  <div className="text-sm text-slate-500 mb-4">
                    <strong>Best for:</strong> Beverly Hills/Newport Beach luxury buyers
                  </div>
                  <ul className="text-sm space-y-1 text-slate-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Guard-gated privacy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Custom home sites
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Red Rock Canyon access
                    </li>
                  </ul>
                  <Link
                    href="/neighborhoods/the-ridges"
                    className="block mt-4 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Explore The Ridges →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Remote Work Lifestyle */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Remote Work, Vegas Lifestyle</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 mb-4">
                  Keep your California salary, lose the California taxes. Thousands of tech workers,
                  executives, and entrepreneurs have discovered that Las Vegas offers the perfect
                  remote work base:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Same income, lower costs:</strong> Keep your Bay Area salary while paying Nevada prices</span>
                  </li>
                  <li className="flex items-start">
                    <Plane className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Easy travel:</strong> Direct flights to SFO, LAX, SJC for when you need to be in-office</span>
                  </li>
                  <li className="flex items-start">
                    <Sun className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Work-life balance:</strong> Golf at 2pm, hike Red Rock after work, world-class dining</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Henderson Tech Corridor</h3>
                <p className="text-slate-600 mb-4">
                  Google's $600M data center. Amazon Web Services. Switch Supernap. Henderson is
                  becoming a legitimate tech hub, with companies attracted by zero corporate
                  income tax and quality of life.
                </p>
                <p className="text-sm text-slate-500">
                  Many California tech workers find themselves with <em>more</em> local job options
                  after moving to Vegas than they expected.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              California Relocator FAQs
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How much can I save moving from California to Nevada?
                </h3>
                <p className="text-slate-600">
                  Nevada has zero state income tax, saving Californians 9.3%-13.3% depending on
                  income bracket. Combined with 40-60% lower home prices, a family earning $200K
                  buying a $600K home could save $150K+ over 5 years compared to staying in California.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What neighborhoods do California relocators prefer?
                </h3>
                <p className="text-slate-600">
                  California buyers typically gravitate toward Summerlin (similar to Irvine/coastal
                  communities), Henderson (master-planned suburbs similar to San Diego's), and The Ridges
                  (comparable to Newport Coast luxury). These areas offer the quality and amenities
                  California buyers expect.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  How long does it take to establish Nevada residency?
                </h3>
                <p className="text-slate-600">
                  Nevada residency can be established immediately upon moving. To benefit from no
                  state income tax, update your driver's license, register your vehicles, and
                  register to vote in Nevada. Most people complete this within 30 days.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Are there direct flights from Las Vegas to California?
                </h3>
                <p className="text-slate-600">
                  Yes! Las Vegas has extensive flight options to California. Southwest, United, and
                  other carriers offer dozens of daily flights to LAX, SFO, SAN, and other California
                  airports. Flight times are typically 1-1.5 hours.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  What about schools compared to California?
                </h3>
                <p className="text-slate-600">
                  Nevada public schools overall rank lower than California's, but individual schools
                  in Summerlin and Henderson rate highly. Many California families choose areas with
                  nearby public schools or consider private options. Dr. Jan provides school-specific
                  guidance for every neighborhood.
                </p>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "I've helped hundreds of California families make the move to Las Vegas. The most
                common reaction? 'Why didn't we do this sooner?' Between the tax savings, the space,
                and the lifestyle, most clients can't believe what their California equity buys here.
                As a <strong>Berkshire Hathaway HomeServices</strong> agent, I coordinate with our
                California offices to make the transition seamless—you don't have to figure this
                out alone."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Tax-Free Life?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a personalized relocation consultation with Dr. Jan Duffy. She'll show you exactly
              what your California equity buys in Las Vegas and help you find the perfect neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001942"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call/Text (702) 500-1942
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
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
