import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Home,
  TrendingUp,
  DollarSign,
  Building,
  Plane,
  Calculator,
  Star,
  Users,
  Phone,
  CheckCircle,
  Award,
  Shield,
  Clock,
  Heart,
  ArrowRight,
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
  path: "/services",
  title: "Real Estate Services Las Vegas | Berkshire Hathaway HomeServices",
  description: "Comprehensive real estate services from Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Buying, selling, luxury, investment, relocation, 55+ communities, and new construction. Call (702) 500-1942.",
  keywords: [
    "Las Vegas real estate services",
    "Berkshire Hathaway services",
    "home buying Las Vegas",
    "home selling Henderson",
    "luxury real estate services",
    "55+ community specialist",
    "California relocation Las Vegas",
  ],
});

const servicesPageFaqs = [
  {
    question: "What real estate services does Dr. Jan Duffy offer?",
    answer:
      "Buyer and seller representation, luxury homes, new construction, investment consulting, 55+ communities, California relocation, home valuations, and probate/divorce sales—through Berkshire Hathaway HomeServices Nevada Properties. Call (702) 500-1942.",
  },
  {
    question: "Do buyers pay commission in Nevada?",
    answer:
      "Typically the seller pays the listing and buyer-broker compensation offered in the MLS. Dr. Jan explains agency relationships and any buyer fees before you write an offer.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Las Vegas, Henderson, Summerlin, North Las Vegas, The Lakes, Green Valley, Inspirada, and all of Clark County, Nevada.",
  },
  {
    question: "How do I get a free home valuation?",
    answer:
      "Request a consultation at /home-valuation or call (702) 500-1942. Dr. Jan Duffy uses MLS data and local comps—Nevada license S.0197614.LLC.",
  },
  {
    question: "Why Berkshire Hathaway HomeServices?",
    answer:
      "The brand combines local expertise with national reach—important for marketing luxury listings and relocation clients moving to Las Vegas.",
  },
];

const servicesPageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]),
  generateServiceSchema({
    name: "Las Vegas Real Estate Services | Dr. Jan Duffy",
    description:
      "Buying, selling, luxury, investment, relocation, 55+ communities, and new construction with Berkshire Hathaway HomeServices Nevada Properties.",
    url: "/services",
    areaServed: ["Las Vegas", "Henderson", "Summerlin", "North Las Vegas", "Clark County"],
  }),
  generateFAQSchema(servicesPageFaqs)
);

const coreServices = [
  {
    icon: Home,
    title: "Home Buying Services",
    slug: "buyers",
    description:
      "Expert guidance through every step of the home buying process. Free buyer representation—the seller pays the commission, so you get professional advocacy at no cost to you.",
    highlights: ["Full MLS access", "Expert negotiation", "Contract protection", "Closing coordination"],
    stats: { label: "Buyers Helped", value: "300+" },
  },
  {
    icon: TrendingUp,
    title: "Home Selling Services",
    slug: "sellers",
    description:
      "Maximize your home's value with professional marketing, accurate pricing, and expert negotiation from Berkshire Hathaway HomeServices—the most trusted name in real estate.",
    highlights: ["World-class marketing", "Accurate pricing", "Global exposure", "Staging guidance"],
    stats: { label: "Homes Sold", value: "500+" },
  },
  {
    icon: Star,
    title: "Luxury Home Services",
    slug: "luxury-homes",
    description:
      "Specialized expertise in Las Vegas luxury real estate. The Ridges, MacDonald Highlands, Southern Highlands, and the most prestigious communities in Southern Nevada.",
    highlights: ["Discretion", "Global buyer network", "White-glove service", "Premium marketing"],
    stats: { label: "Luxury Volume", value: "$45M+" },
  },
  {
    icon: Building,
    title: "New Construction Services",
    slug: "new-construction",
    description:
      "Free buyer representation on any new construction purchase. The builder pays—you get contract review, upgrade negotiation, and construction monitoring at no cost.",
    highlights: ["Free representation", "Upgrade negotiation", "Contract review", "Construction oversight"],
    stats: { label: "New Builds", value: "150+" },
  },
];

const specializedServices = [
  {
    icon: DollarSign,
    title: "Investment Property Consulting",
    slug: "investment-properties",
    description:
      "Strategic consulting for rental properties, fix-and-flip opportunities, and portfolio building. Las Vegas offers some of the best rental yields in the country.",
    highlights: ["ROI analysis", "Market research", "1031 exchange help", "Property management referrals"],
  },
  {
    icon: Plane,
    title: "Relocation Services",
    slug: "relocation",
    description:
      "Comprehensive relocation assistance for moves to Las Vegas. Berkshire Hathaway HomeServices' global network of 50,000+ agents makes interstate transitions seamless.",
    highlights: ["Neighborhood matching", "School research", "Remote buying", "Moving coordination"],
  },
  {
    icon: Users,
    title: "55+ Community Specialist",
    slug: "55-plus-communities",
    description:
      "Expert guidance for active adult communities including Sun City Summerlin, Sun City Anthem, Del Webb Lake Las Vegas, and other premier 55+ communities in Las Vegas.",
    highlights: ["Community tours", "HOA analysis", "Amenity comparisons", "Resale insights"],
  },
  {
    icon: Calculator,
    title: "Home Valuation Services",
    slug: "home-valuation",
    description:
      "Free, no-obligation home valuations using current MLS data, recent comparable sales, and deep local market knowledge from serving Las Vegas since 2008.",
    highlights: ["Accurate pricing", "No obligation", "Detailed analysis", "Market trends"],
  },
];

const buyerTypes = [
  {
    title: "California Relocators",
    href: "/buyers/california-relocator",
    description: "Moving from CA? Save on state income tax and enjoy 40-60% lower home prices.",
  },
  {
    title: "First-Time Home Buyers",
    href: "/buyers/first-time-buyers",
    description: "FHA, VA, down payment assistance, and step-by-step guidance for your first purchase.",
  },
  {
    title: "Luxury Home Buyers",
    href: "/buyers/luxury-homes-las-vegas",
    description: "Guard-gated estates, Strip views, custom builds, and discrete representation.",
  },
];

const sellerTypes = [
  {
    title: "Move-Up Sellers",
    href: "/sellers/move-up",
    description: "Leverage your equity to upgrade your lifestyle with coordinated buy-and-sell.",
  },
  {
    title: "Downsizing Sellers",
    href: "/sellers/downsizing",
    description: "Extract equity and transition to low-maintenance living in 55+ communities.",
  },
  {
    title: "Divorce & Probate Sales",
    href: "/sellers/divorce-probate",
    description: "Sensitive situations handled with discretion, fairness, and legal coordination.",
  },
  {
    title: "Relocation Sellers",
    href: "/sellers/relocation",
    description: "Selling from out of state? Remote coordination with BHHS network support.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SchemaScript id="services-page-schema" schema={servicesPageSchemas} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <nav className="text-sm text-slate-500 mb-6 text-left max-w-4xl mx-auto">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              {" / "}
              <span className="text-slate-900">Services</span>
            </nav>
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas Real Estate Services
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Comprehensive real estate solutions from Dr. Jan Duffy, backed by the most trusted
              name in the business—<strong>Berkshire Hathaway HomeServices</strong>. Whether you're 
              buying your first home, selling a luxury estate, or relocating from California, 
              you'll receive expert guidance every step of the way.
            </p>
            <LocalServiceAreaBlurb topic="Full-service Las Vegas real estate" />
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Serving Las Vegas Since 2008</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>$127M+ in Team Career Sales</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>500+ Team Sales</span>
              </div>
            </div>
          </div>

          {/* Core Services Section */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Core Real Estate Services
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              These foundational services cover the majority of real estate transactions in Las Vegas. 
              Each service is delivered with the professionalism, resources, and ethical standards 
              that define Berkshire Hathaway HomeServices—the only real estate brand backed by 
              Warren Buffett's Berkshire Hathaway Inc.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {coreServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 rounded-lg p-3 group-hover:bg-blue-600 transition-colors flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h3>
                          <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                            {service.stats.value} {service.stats.label}
                          </span>
                        </div>
                        <p className="text-slate-600 mb-4 text-sm">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Specialized Services Section */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Specialized Real Estate Services
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Beyond traditional buying and selling, Dr. Jan Duffy offers specialized services 
              for unique situations. Whether you're an investor building a rental portfolio, 
              a California family relocating for tax savings, or a retiree seeking the perfect 
              55+ community, these focused services ensure you receive expert guidance tailored 
              to your specific needs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {specializedServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-100 rounded-lg p-3 group-hover:bg-blue-600 transition-colors flex-shrink-0">
                        <Icon className="h-5 w-5 text-slate-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="bg-slate-50 text-slate-600 text-xs px-2 py-1 rounded"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Buyer Types */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Services for Every Type of Buyer
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Different buyers have different needs. A first-time buyer needs education and 
              hand-holding through the process. A California relocator needs tax guidance and 
              neighborhood matching. A luxury buyer needs discretion and access. Dr. Jan Duffy 
              tailors her approach to match your specific situation and goals.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {buyerTypes.map((type) => (
                <Link
                  key={type.href}
                  href={type.href}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
                >
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">{type.description}</p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Seller Types */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Services for Every Type of Seller
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Selling a home involves more than just listing it on the MLS. Your situation—whether 
              you're upgrading, downsizing, dealing with a life change, or relocating—determines 
              the best strategy. Dr. Jan provides customized selling solutions that address your 
              specific timeline, financial goals, and circumstances.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sellerTypes.map((type) => (
                <Link
                  key={type.href}
                  href={type.href}
                  className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all group"
                >
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 text-sm">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 text-xs mb-2">{type.description}</p>
                  <span className="text-blue-600 text-xs font-semibold">Learn More →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Value Proposition */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              The Berkshire Hathaway HomeServices Difference
            </h2>
            <p className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-8">
              When you work with a Berkshire Hathaway HomeServices agent, you're backed by a name
              synonymous with trust, ethical standards, and financial strength—the same principles
              that built Warren Buffett's empire. This isn't just a logo; it's a commitment to 
              putting your interests first.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">50,000+</div>
                <div className="text-slate-300 text-sm">Agents Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">Since 2008</div>
                <div className="text-slate-300 text-sm">Serving Las Vegas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">$127M+</div>
                <div className="text-slate-300 text-sm">Volume Closed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">4.9★</div>
                <div className="text-slate-300 text-sm">Client Rating</div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Financial Strength</h3>
                <p className="text-slate-400 text-sm">
                  Backed by Berkshire Hathaway Inc., providing unmatched stability and trust
                </p>
              </div>
              <div className="text-center">
                <Award className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Ethical Standards</h3>
                <p className="text-slate-400 text-sm">
                  Rigorous ethical guidelines ensure your interests always come first
                </p>
              </div>
              <div className="text-center">
                <Users className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Global Network</h3>
                <p className="text-slate-400 text-sm">
                  Access to listings and referrals through 50,000+ agents worldwide
                </p>
              </div>
            </div>
          </section>

          {/* Service Process */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              How Our Real Estate Services Work
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Whether you're buying or selling, the process begins with a free consultation 
              to understand your goals, timeline, and unique circumstances. From there, 
              Dr. Jan creates a customized strategy that leverages the full resources of 
              Berkshire Hathaway HomeServices to achieve the best possible outcome.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Free Consultation</h3>
                  <p className="text-slate-600 text-sm">
                    Discuss your goals, timeline, and situation. No pressure, no obligation—just 
                    honest conversation about how Dr. Jan can help you achieve your real estate goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Customized Strategy</h3>
                  <p className="text-slate-600 text-sm">
                    Based on your consultation, receive a tailored plan that addresses your specific 
                    needs—whether that's finding the right neighborhood, pricing your home, or both.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Expert Execution</h3>
                  <p className="text-slate-600 text-sm">
                    Dr. Jan handles every detail—marketing, negotiations, paperwork, coordination—
                    while keeping you informed and in control throughout the process.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Successful Closing & Beyond</h3>
                  <p className="text-slate-600 text-sm">
                    Close your transaction with confidence. Dr. Jan remains available for questions, 
                    referrals, and future real estate needs long after the closing table.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <FAQSection
            className="!py-12 bg-slate-50"
            title="Real estate services FAQs"
            subtitle="Buying, selling, and working with Dr. Jan Duffy"
            faqs={servicesPageFaqs}
          />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy for a free consultation about any of our real estate services. 
              Whether you're buying, selling, investing, or relocating, you'll receive expert 
              guidance backed by Berkshire Hathaway HomeServices.
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
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Schedule Consultation
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
