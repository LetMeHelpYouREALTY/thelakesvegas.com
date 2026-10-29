import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Home as HomeIcon,
  DollarSign,
  Key,
  CheckCircle,
  Calendar,
  FileText,
  Users,
  TrendingUp,
  Building,
  Shield,
  HelpCircle,
} from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import { combineSchemas, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/buyers/first-time-buyers",
  title: "First-Time Home Buyers Las Vegas | Berkshire Hathaway HomeServices",
  description: "First-time buyer in Las Vegas? Down payment assistance, builder incentives, and expert guidance from Dr. Jan Duffy at Berkshire Hathaway HomeServices. Call (702) 500-1942.",
  keywords: [
    "first time home buyer Las Vegas",
    "first time buyer Nevada",
    "down payment assistance Las Vegas",
    "FHA loans Las Vegas",
    "VA loans Las Vegas",
    "Berkshire Hathaway HomeServices first time buyer",
  ],
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much down payment do I need for my first home in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Down payment requirements vary by loan type: FHA loans require 3.5% down, conventional loans can be as low as 3%, VA loans require 0% down for eligible veterans, and Nevada down payment assistance programs can provide up to $15,000 for qualified buyers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the FHA loan limit in Las Vegas for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 2026 FHA loan limit for Las Vegas (Clark County) is $498,257 for a single-family home. This allows first-time buyers to purchase homes up to approximately $515,000 with 3.5% down.",
      },
    },
    {
      "@type": "Question",
      name: "What neighborhoods are best for first-time buyers in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top neighborhoods for first-time buyers include North Las Vegas ($350K-$450K), Mountains Edge ($380K-$480K), and Centennial Hills ($398K median). These areas offer new construction options, nearby public schools, and strong appreciation potential.",
      },
    },
    {
      "@type": "Question",
      name: "Are there builder incentives for first-time buyers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Las Vegas builders currently offer significant incentives: closing cost credits up to 6%, rate buydowns as low as 4.99%, and upgrade packages worth $15K-$50K. These incentives can make new construction more affordable than resale homes.",
      },
    },
  ],
};

const firstTimeBuyersPageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Buyers", url: "/buyers" },
    { name: "First-Time Buyers", url: "/buyers/first-time-buyers" },
  ]),
  faqSchema
);

export default function FirstTimeBuyersPage() {
  return (
    <>
      <SchemaScript id="first-time-buyers-page-schema" schema={firstTimeBuyersPageSchemas} />
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
              <span className="text-slate-900">First-Time Buyers</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Key className="h-4 w-4 mr-2" />
              Down Payment Assistance Available
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Your First Home in Las Vegas<br />
              <span className="text-blue-600">Starts Here</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Down payment assistance. Builder incentives. Expert guidance every step of the way.
            </p>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Let's Make Homeownership Happen → (702) 500-1942
            </a>
          </div>

          {/* Financing Options */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              First-Time Buyer Financing Options
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3.5%</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">FHA Loans</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Only 3.5% down with credit scores as low as 580
                </p>
                <div className="text-xs text-slate-500">
                  2026 Limit: $498,257
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">0%</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">VA Loans</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Zero down payment for eligible veterans & military
                </p>
                <div className="text-xs text-slate-500">
                  No PMI required
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3%</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Conventional</h3>
                <p className="text-sm text-slate-600 mb-3">
                  As low as 3% down with good credit (680+)
                </p>
                <div className="text-xs text-slate-500">
                  PMI removable at 20%
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Down Payment Help</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Nevada programs offer up to $15,000 in assistance
                </p>
                <div className="text-xs text-slate-500">
                  Income limits apply
                </div>
              </div>
            </div>
          </section>

          {/* Top Neighborhoods */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Best Neighborhoods for First-Time Buyers
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900">North Las Vegas</h3>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Best Value</span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">$350K - $450K</div>
                <p className="text-slate-600 text-sm mb-4">
                  Most affordable new construction in the valley. Growing rapidly with new schools,
                  shopping, and infrastructure investments.
                </p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    New construction from $350K
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    FHA-friendly pricing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Strong appreciation
                  </li>
                </ul>
                <Link
                  href="/neighborhoods/north-las-vegas"
                  className="block mt-4 text-blue-600 font-semibold hover:text-blue-700 text-sm"
                >
                  Explore North Las Vegas →
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900">Mountains Edge</h3>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Great Parks</span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">$380K - $480K</div>
                <p className="text-slate-600 text-sm mb-4">
                  Southwest Las Vegas with the valley's largest park. Great community feel,
                  mountain views, and easy freeway access.
                </p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Exploration Peak Park
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mountain views
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Parks nearby
                  </li>
                </ul>
                <Link
                  href="/neighborhoods/mountains-edge"
                  className="block mt-4 text-blue-600 font-semibold hover:text-blue-700 text-sm"
                >
                  Explore Mountains Edge →
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900">Centennial Hills</h3>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">Nearby Public Schools</span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">$398K Median</div>
                <p className="text-slate-600 text-sm mb-4">
                  Northwest Las Vegas near Centennial Hills Hospital. Nearby public schools,
                  family parks, and Red Rock Canyon proximity.
                </p>
                <ul className="text-sm space-y-1 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Nearby public schools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Near outdoor recreation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Medical facilities nearby
                  </li>
                </ul>
                <Link
                  href="/neighborhoods/centennial-hills"
                  className="block mt-4 text-blue-600 font-semibold hover:text-blue-700 text-sm"
                >
                  Explore Centennial Hills →
                </Link>
              </div>
            </div>
          </section>

          {/* Builder Incentives */}
          <section className="mb-16 bg-green-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-8 w-8 mr-3" />
              <h2 className="text-3xl font-bold">New Construction Incentives</h2>
            </div>
            <p className="text-center text-green-100 mb-8 max-w-2xl mx-auto">
              Las Vegas builders are offering incredible incentives that can make new homes more
              affordable than resale properties. These incentives are available NOW:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">6%</div>
                <div className="text-green-100">Closing Cost Credits</div>
                <p className="text-sm text-green-200 mt-2">
                  Thousands toward your closing costs
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">4.99%</div>
                <div className="text-green-100">Rate Buydowns</div>
                <p className="text-sm text-green-200 mt-2">
                  Below-market interest rates
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">$50K</div>
                <div className="text-green-100">Free Upgrades</div>
                <p className="text-sm text-green-200 mt-2">
                  Design center credits included
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/new-construction"
                className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-md font-bold hover:bg-green-50 transition-colors"
              >
                View Builder Incentives →
              </Link>
            </div>
          </section>

          {/* Rent vs Buy */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Rent vs. Buy in Las Vegas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-red-900 mb-4 flex items-center">
                  <HomeIcon className="h-5 w-5 mr-2" />
                  Renting: $1,800/month
                </h3>
                <ul className="space-y-2 text-red-800">
                  <li>• No equity building</li>
                  <li>• Rent increases each year</li>
                  <li>• No tax benefits</li>
                  <li>• Landlord controls your living situation</li>
                  <li>• After 5 years: $108,000 spent, $0 equity</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-green-900 mb-4 flex items-center">
                  <Key className="h-5 w-5 mr-2" />
                  Buying: $1,900/month*
                </h3>
                <ul className="space-y-2 text-green-800">
                  <li>• Building $600+/month in equity</li>
                  <li>• Payment stays mostly fixed</li>
                  <li>• Mortgage interest tax deduction</li>
                  <li>• Freedom to customize your home</li>
                  <li>• After 5 years: $36,000+ equity built</li>
                </ul>
                <p className="text-xs text-green-600 mt-3">
                  *Based on $400K home with 3.5% down, 6.5% rate
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              First-Time Buyer Timeline
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Get Pre-Approved (1-3 days)</h3>
                  <p className="text-slate-600">
                    We connect you with trusted lenders who specialize in first-time buyers. Know exactly
                    what you can afford before you start looking.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Find Your Home (2-8 weeks)</h3>
                  <p className="text-slate-600">
                    Dr. Jan shows you homes that fit your budget and wishlist. She'll explain what to look
                    for and help you avoid common first-time buyer mistakes.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Make an Offer & Negotiate (1-5 days)</h3>
                  <p className="text-slate-600">
                    We craft a competitive offer and negotiate on your behalf. Dr. Jan's experience means
                    you don't overpay and get favorable terms.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Inspections & Due Diligence (10-14 days)</h3>
                  <p className="text-slate-600">
                    Professional inspections ensure you know exactly what you're buying. We negotiate
                    repairs or credits if issues are found.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Close & Get Your Keys (30-45 days total)</h3>
                  <p className="text-slate-600">
                    Sign the final paperwork, get your keys, and celebrate! You're officially a homeowner.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              First-Time Buyer FAQs
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  How much down payment do I need?
                </h3>
                <p className="text-slate-600">
                  Down payment requirements vary: FHA loans require 3.5%, conventional can be as low as
                  3%, VA loans require 0% for eligible veterans. Nevada assistance programs can provide
                  up to $15,000 for qualified buyers.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  What credit score do I need?
                </h3>
                <p className="text-slate-600">
                  FHA loans accept scores as low as 580 (3.5% down) or 500 (10% down). Conventional loans
                  typically require 620+. Better scores mean better rates. Dr. Jan can connect you with
                  lenders who work with all credit situations.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Do I pay for Dr. Jan's services as a buyer?
                </h3>
                <p className="text-slate-600">
                  No! Buyer's agent services are typically free to buyers—the seller pays the commission.
                  You get full professional representation from Berkshire Hathaway HomeServices at no
                  cost to you.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Should I buy new construction or resale?
                </h3>
                <p className="text-slate-600">
                  Both have advantages. New construction offers modern features, warranties, and current
                  builder incentives. Resales may have established landscaping and lower HOA dues.
                  Dr. Jan helps you weigh options based on your specific situation.
                </p>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Buying your first home is exciting AND overwhelming. My job is to make it less
                overwhelming. I walk first-time buyers through every step, explain everything in
                plain English, and make sure you're confident in your decision. As a{" "}
                <strong>Berkshire Hathaway HomeServices</strong> agent, I have resources and
                connections that independent agents simply don't have."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Stop Renting?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's talk about your options. Dr. Jan Duffy will help you understand what you can
              afford and create a plan to make homeownership happen.
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
                Schedule Free Consultation
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
