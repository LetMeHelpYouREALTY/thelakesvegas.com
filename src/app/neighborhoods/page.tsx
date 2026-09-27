import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { MapPin, Phone, Home, Users, GraduationCap } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/sections/FAQSection";
import LocalServiceAreaBlurb from "@/components/seo/LocalServiceAreaBlurb";
import NearbyAmenitiesSection from "@/components/amenities/NearbyAmenitiesSection";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/neighborhoods",
  title: "Las Vegas Neighborhoods | Berkshire Hathaway HomeServices",
  description: "Explore Las Vegas and Henderson neighborhoods with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Summerlin, Henderson, The Ridges, Southern Highlands & more.",
  keywords: [
    "Las Vegas neighborhoods",
    "Henderson communities",
    "Summerlin real estate",
    "best neighborhoods Las Vegas",
    "where to live Las Vegas",
  ],
});

const neighborhoods = [
  {
    name: "Summerlin",
    slug: "summerlin",
    medianPrice: "$625,000",
    priceChange: "+6.8%",
    description: "Premier master-planned community with parks, trails, and top-rated schools",
    highlights: ["150+ Parks", "Top Schools", "Red Rock Views", "Downtown Summerlin"],
    bestFor: "Families, professionals, outdoor enthusiasts",
  },
  {
    name: "Henderson",
    slug: "henderson",
    medianPrice: "$485,000",
    priceChange: "+5.1%",
    description: "Nevada's second-largest city known for safety, schools, and family-friendly living",
    highlights: ["Low Crime Rate", "Excellent Schools", "Lake Las Vegas", "Green Valley"],
    bestFor: "Families, retirees, commuters",
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    medianPrice: "$520,000",
    priceChange: "+4.8%",
    description: "Established Henderson community with mature landscaping and excellent amenities",
    highlights: ["Golf Courses", "Walking Trails", "The District", "Mature Trees"],
    bestFor: "Established families, golfers, professionals",
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    medianPrice: "$2,500,000",
    priceChange: "+8.5%",
    description: "Ultra-luxury guard-gated community with custom estates and celebrity residents",
    highlights: ["Guard-Gated", "Custom Estates", "Bear's Best Golf", "Strip Views"],
    bestFor: "Luxury buyers, celebrities, executives",
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    medianPrice: "$750,000",
    priceChange: "+7.2%",
    description: "Master-planned luxury community with championship golf and mountain views",
    highlights: ["Golf Community", "Guard-Gated", "Mountain Views", "Luxury Amenities"],
    bestFor: "Golfers, luxury buyers, families",
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    medianPrice: "$385,000",
    priceChange: "+3.2%",
    description: "Rapidly growing area with affordable new construction and family-friendly communities",
    highlights: ["New Construction", "Affordable", "Growing Area", "Family-Friendly"],
    bestFor: "First-time buyers, young families, investors",
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    medianPrice: "$550,000",
    priceChange: "+5.5%",
    description: "Newer master-planned community in northwest Las Vegas with mountain views",
    highlights: ["New Homes", "Mountain Views", "Skye Center", "Great Schools"],
    bestFor: "Young families, outdoor enthusiasts, commuters",
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    medianPrice: "$495,000",
    priceChange: "+4.8%",
    description: "Northwest Las Vegas community with mountain proximity and family amenities",
    highlights: ["Mountain Access", "Parks", "Shopping", "Family-Friendly"],
    bestFor: "Families, outdoor lovers, professionals",
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    medianPrice: "$525,000",
    priceChange: "+5.0%",
    description: "Henderson master-planned community with resort-style living and modern homes",
    highlights: ["Resort Pools", "Walking Trails", "New Construction", "Great Schools"],
    bestFor: "Families, active adults, new home buyers",
  },
  {
    name: "Mountains Edge",
    slug: "mountains-edge",
    medianPrice: "$475,000",
    priceChange: "+4.5%",
    description: "Southwest Las Vegas master-planned community with mountain views and parks",
    highlights: ["Mountain Views", "Parks", "Growing Area", "Affordable Luxury"],
    bestFor: "Families, commuters, value-seekers",
  },
];

const neighborhoodsHubFaqs = [
  {
    question: "Which Las Vegas neighborhood is best for families?",
    answer:
      "Summerlin, Henderson, Green Valley, Skye Canyon, and Inspirada are popular for schools, parks, and safety. Dr. Jan Duffy matches your commute, budget, and lifestyle to the right community across Clark County.",
  },
  {
    question: "How do I compare Summerlin vs Henderson?",
    answer:
      "Summerlin offers master-planned villages and Red Rock proximity; Henderson emphasizes safety ratings and established communities like Green Valley. Median prices and HOA rules differ—Dr. Jan provides side-by-side market context.",
  },
  {
    question: "Does Berkshire Hathaway HomeServices cover all of Clark County?",
    answer:
      "Yes. Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties serves Las Vegas, Henderson, North Las Vegas, Summerlin, The Lakes, and surrounding areas. Call (702) 500-1942 for neighborhood tours.",
  },
  {
    question: "Where can I see homes for sale in these neighborhoods?",
    answer:
      "Browse listings on this site and contact Dr. Jan Duffy for MLS-backed search alerts, private showings, and off-market options. License S.0197614.LLC.",
  },
  {
    question: "What is The Lakes in West Las Vegas?",
    answer:
      "The Lakes is a water-feature community in West Las Vegas. Dr. Jan highlights how it compares to Summerlin, Centennial Hills, and Henderson for waterfront lifestyle and commute times.",
  },
];

const neighborhoodsHubSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Neighborhoods", url: "/neighborhoods" },
  ]),
  generateFAQSchema(neighborhoodsHubFaqs)
);

export default function NeighborhoodsPage() {
  return (
    <>
      <SchemaScript id="neighborhoods-hub-schema" schema={neighborhoodsHubSchemas} />
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
              <span className="text-slate-900">Neighborhoods</span>
            </nav>
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas & Henderson Neighborhoods
            </h1>
            <p className="text-xl text-slate-600">
              Explore the best communities in Southern Nevada with Dr. Jan Duffy, your{" "}
              <strong>Berkshire Hathaway HomeServices</strong> neighborhood expert
            </p>
            <LocalServiceAreaBlurb topic="Neighborhood tours and home search" />
          </div>

          {/* Neighborhood Grid */}
          <section className="mb-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  href={`/neighborhoods/${neighborhood.slug}`}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-blue-300 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {neighborhood.name}
                      </h2>
                      <p className="text-sm text-slate-500">{neighborhood.bestFor}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">{neighborhood.medianPrice}</div>
                      <div className="text-sm text-green-600">{neighborhood.priceChange} YoY</div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{neighborhood.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Every Las Vegas neighborhood has its own personality. Whether you want the
                family-friendly parks of Summerlin, the established charm of Green Valley, or the
                luxury of The Ridges, I'll help you find the community that matches your lifestyle.
                That's the Berkshire Hathaway HomeServices difference—personalized guidance backed
                by local expertise."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </section>

          {/* Neighborhood Services */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Neighborhood Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Area Tours</h3>
                <p className="text-slate-400 text-sm">
                  Personalized neighborhood tours to help you experience each community firsthand
                </p>
              </div>
              <div className="text-center">
                <GraduationCap className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">School Research</h3>
                <p className="text-slate-400 text-sm">
                  Detailed school district information, ratings, and enrollment guidance
                </p>
              </div>
              <div className="text-center">
                <Home className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Home Matching</h3>
                <p className="text-slate-400 text-sm">
                  Find homes that match your criteria in the neighborhoods you love
                </p>
              </div>
            </div>
          </section>

          <NearbyAmenitiesSection id="neighborhoods-nearby-amenities" className="bg-slate-50" />

          <FAQSection
            className="!py-12 bg-slate-50"
            title="Neighborhood FAQs"
            subtitle="Las Vegas, Henderson, and Clark County communities"
            faqs={neighborhoodsHubFaqs}
          />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Choosing a Neighborhood?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Dr. Jan Duffy knows every Las Vegas community inside and out. Call for personalized
              neighborhood recommendations.
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

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
