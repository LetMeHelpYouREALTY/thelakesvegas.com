import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Camera,
  Globe,
  DollarSign,
  TrendingUp,
  CheckCircle,
  BarChart,
  Users,
  Home,
  Clock,
  Shield,
  ArrowRight,
  Award,
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
  generateServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/sellers",
  title: "Sell Your Las Vegas Home | Berkshire Hathaway HomeServices",
  description: "Sell your Las Vegas or Henderson home for top dollar with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Free home valuation. World-class marketing. Call (702) 500-1942.",
  keywords: [
    "sell home Las Vegas",
    "Las Vegas listing agent",
    "Berkshire Hathaway sell house",
    "Henderson home selling",
    "what is my home worth Las Vegas",
    "Las Vegas real estate agent",
    "Summerlin home selling",
  ],
});

const sellersHubFaqs = [
  {
    question: "How long will it take to sell my Las Vegas home?",
    answer:
      "Well-priced Las Vegas homes are selling in an average of 28 days. Luxury homes ($1M+) may take 45+ days. The key is pricing correctly from day one—overpriced homes can sit for months, losing both time and money.",
  },
  {
    question: "What do I need to do to prepare my home for sale?",
    answer:
      "Dr. Jan provides a personalized preparation checklist for every listing. Generally, decluttering, minor repairs, fresh paint, and professional staging consultation yield the highest ROI. She'll walk through your home and identify exactly what improvements will generate the best return.",
  },
  {
    question: "How does Berkshire Hathaway market my home?",
    answer:
      "Your home gets professional photography, virtual tours, drone video (when appropriate), MLS syndication to 100+ websites, BHHS global network exposure, social media promotion, and targeted digital advertising. It's the most comprehensive marketing available in Las Vegas real estate.",
  },
  {
    question: "What are your commission rates?",
    answer:
      "Commission structures are negotiable and competitive with other full-service brokerages. Dr. Jan offers transparent pricing and will walk you through all costs during your listing consultation. The value of BHHS marketing and negotiation typically results in higher sale prices that more than offset commission.",
  },
  {
    question: "Should I wait for prices to go higher?",
    answer:
      "Current appreciation of 4.2% year-over-year suggests prices are stable with gradual increases. Timing the market is difficult—most sellers do better by listing when ready rather than waiting. Dr. Jan can provide a personalized market analysis to help you decide.",
  },
  {
    question: "Do I need to be moved out before listing?",
    answer:
      "Not necessarily. Many homes sell while occupied. However, vacant homes are easier to show and stage. Dr. Jan will help you develop a strategy based on your specific situation and timeline.",
  },
];

const sellersPageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Sellers", url: "/sellers" },
  ]),
  generateServiceSchema({
    name: "Home Selling Services Las Vegas",
    description:
      "Listing strategy, marketing, and negotiation for Las Vegas and Henderson sellers with Berkshire Hathaway HomeServices.",
    url: "/sellers",
    areaServed: ["Las Vegas", "Henderson", "Summerlin", "North Las Vegas", "Clark County"],
  }),
  generateFAQSchema(sellersHubFaqs)
);

const sellingBenefits = [
  {
    icon: Globe,
    title: "World-Class Marketing",
    description:
      "Your home gets exposure through the most recognized real estate brand in the world. Professional photography, virtual tours, drone video, and syndication to 100+ websites ensures maximum visibility to qualified buyers.",
  },
  {
    icon: Users,
    title: "Global Buyer Network",
    description:
      "Berkshire Hathaway's 50,000+ agents worldwide means your listing reaches qualified buyers from across the globe—especially important for Las Vegas's strong relocation and international buyer markets.",
  },
  {
    icon: BarChart,
    title: "Expert Pricing Strategy",
    description:
      "Dr. Jan has been serving Las Vegas since 2008, which means accurate pricing that attracts buyers without leaving money on the table. Overpriced homes sit and lose value; well-priced homes generate competition and sell for more.",
  },
  {
    icon: DollarSign,
    title: "Skilled Negotiation",
    description:
      "From offer review to closing negotiations, Dr. Jan protects your interests and maximizes your net proceeds. $127M+ in Dr. Duffy Group career sales means she knows how to handle any situation and close deals successfully.",
  },
];

const sellingProcess = [
  {
    step: 1,
    title: "Free Home Valuation",
    description: "Dr. Jan analyzes comparable sales, market conditions, and your home's unique features to determine optimal pricing. You'll understand exactly what your home could sell for before making any decisions.",
  },
  {
    step: 2,
    title: "Preparation & Staging",
    description: "Receive a customized preparation checklist to maximize your home's appeal. Dr. Jan provides staging consultations and can recommend contractors for any needed repairs or updates.",
  },
  {
    step: 3,
    title: "Professional Marketing",
    description: "Your home is photographed professionally, with virtual tours and drone video. It's listed on the MLS and syndicated to 100+ websites, plus promoted through BHHS's global network and targeted digital advertising.",
  },
  {
    step: 4,
    title: "Showings & Open Houses",
    description: "Dr. Jan coordinates all showings and open houses, gathering feedback from every visit. You'll receive regular updates on activity and market response.",
  },
  {
    step: 5,
    title: "Offer Review & Negotiation",
    description: "When offers come in, Dr. Jan analyzes each one for price, terms, contingencies, and buyer qualification. She negotiates on your behalf to get the best possible outcome.",
  },
  {
    step: 6,
    title: "Contract to Close",
    description: "Dr. Jan manages every detail from accepted offer to closing—inspections, appraisals, repairs, and coordination with title, escrow, and the buyer's agent. You'll close with confidence.",
  },
];

const includedServices = [
  "Professional photography & virtual tour",
  "Drone video for properties with views or large lots",
  "Comprehensive market analysis & pricing strategy",
  "MLS listing syndicated to 100+ websites",
  "Berkshire Hathaway global network exposure",
  "Social media marketing campaign",
  "Targeted digital advertising",
  "Open house coordination",
  "Showing feedback & regular updates",
  "Expert negotiation on all offers",
  "Transaction coordination through closing",
  "Staging consultation with recommendations",
];

export default function SellersPage() {
  return (
    <>
      <SchemaScript id="sellers-page-schema" schema={sellersPageSchemas} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Sell Your Las Vegas Home for Top Dollar
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              When you list with <strong>Berkshire Hathaway HomeServices</strong>, you get
              world-class marketing, expert pricing, and a name that buyers trust. Dr. Jan Duffy 
              has been serving Las Vegas since 2008—helping sellers achieve top-dollar results 
              with proven marketing strategies and skilled negotiation.
            </p>
            <LocalServiceAreaBlurb topic="Las Vegas and Henderson home selling" />
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Free Home Valuation</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> World-Class Marketing</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Expert Negotiation</span>
            </div>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Las Vegas Seller Market Statistics | January 2026
            </h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
              The Las Vegas housing market remains favorable for sellers with low inventory and 
              steady demand. Well-priced homes are selling quickly, and appreciation continues 
              to outpace national averages. Here's what sellers need to know about current conditions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+4.2%</div>
                <div className="text-slate-300 text-sm">Year-Over-Year Appreciation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">28 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">2.1 Mo</div>
                <div className="text-slate-300 text-sm">Inventory (Seller's Market)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">98.5%</div>
                <div className="text-slate-300 text-sm">List-to-Sale Price Ratio</div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              The Berkshire Hathaway HomeServices Selling Advantage
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Not all real estate agents can deliver the same results. When you choose a 
              Berkshire Hathaway HomeServices agent, you're choosing world-class marketing, 
              a global network of buyers, and the most trusted name in real estate.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {sellingBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Selling Process */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              The Home Selling Process
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Selling a home involves many steps, but you don't have to navigate them alone. 
              Dr. Jan Duffy manages every detail from initial valuation to closing day, keeping 
              you informed and in control throughout the process.
            </p>
            <div className="space-y-6">
              {sellingProcess.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 items-start bg-white rounded-lg p-6 border border-slate-200"
                >
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seller Types */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Specialized Services for Every Seller
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Every seller's situation is unique. Whether you're upgrading, downsizing, dealing 
              with a life change, or relocating for work, Dr. Jan provides customized strategies 
              that address your specific needs and timeline.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/sellers/move-up"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">🏡</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Move-Up Sellers
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Leverage your equity into your dream home. Coordinated buy & sell strategies.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
              <Link
                href="/sellers/downsizing"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">🌴</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Downsizing
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Extract equity, simplify life. 55+ communities and low-maintenance options.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
              <Link
                href="/sellers/divorce-probate"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">⚖️</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Divorce & Probate
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Sensitive situations handled with discretion and professionalism.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
              <Link
                href="/sellers/relocation"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">✈️</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Relocation
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Moving for work? BHHS nationwide network coordinates both ends.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Expert Selling Advice
            </h2>
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Pricing your home correctly from day one is the single most important factor in
                getting top dollar. Overpriced homes sit on the market, and every day on market costs 
                you money—both in carrying costs and buyer perception. That's why I use comprehensive 
                market analysis and my experience serving Las Vegas since 2008 to price homes right 
                the first time. The result? My listings typically sell within 2% of asking price."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties | Serving Las Vegas Since 2008
              </cite>
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              What's Included When You List with BHHS
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              When you list with Dr. Jan Duffy at Berkshire Hathaway HomeServices, you receive 
              comprehensive marketing and support services designed to maximize your home's 
              exposure and sale price.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {includedServices.map((item) => (
                <div key={item} className="flex items-center bg-white p-4 rounded-lg border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Home Valuation CTA */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">What's Your Home Worth?</h2>
                <p className="text-blue-100 mb-6">
                  Get a free, no-obligation home valuation from Dr. Jan Duffy. Using current MLS
                  data and expertise serving Las Vegas since 2008, you'll know exactly what your 
                  home could sell for in today's market. No algorithms—just real analysis from 
                  a local expert.
                </p>
                <Link
                  href="/home-valuation"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors"
                >
                  Get Free Valuation
                </Link>
              </div>
              <div className="text-center">
                <TrendingUp className="h-24 w-24 text-blue-200 mx-auto mb-4" />
                <p className="text-2xl font-bold">$450,000</p>
                <p className="text-blue-200">Median Home Price (Jan 2026)</p>
                <p className="text-blue-300 text-sm mt-2">Up 4.2% from last year</p>
              </div>
            </div>
          </section>

          <FAQSection
            className="!py-12 bg-slate-50"
            title="Frequently Asked Questions About Selling in Las Vegas"
            subtitle="Answers to common concerns from Las Vegas home sellers."
            faqs={sellersHubFaqs}
          />

          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Sell Your Las Vegas Home?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Schedule a free listing consultation with Dr. Jan Duffy and discover what your home
              could sell for with Berkshire Hathaway HomeServices. No obligation, no pressure—just 
              honest advice and expert analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001942"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1942
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
            <p className="mt-4 text-slate-400 text-sm">
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
