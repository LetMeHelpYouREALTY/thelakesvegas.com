import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mountain,
  Trophy,
  Shield,
  Dumbbell,
  Users,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import {
  generateBreadcrumbSchema,
  generateSeniorCommunitySchema,
  generateFAQSchema,
  combineSchemas,
} from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/55-plus-communities/sun-city-anthem",
  title: "Sun City Anthem Homes for Sale | Berkshire Hathaway HomeServices",
  description: "Henderson's premier 55+ community. Sun City Anthem homes from $350K-$1.2M. 2 championship golf courses, stunning mountain views. Dr. Jan Duffy. Call (702) 500-1942.",
  keywords: [
    "Sun City Anthem homes for sale",
    "Sun City Anthem Henderson",
    "55 plus communities Henderson",
    "active adult Henderson",
    "Berkshire Hathaway Sun City Anthem",
  ],
});

// Breadcrumb items
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "55+ Communities", url: "/55-plus-communities" },
  { name: "Sun City Anthem", url: "/55-plus-communities/sun-city-anthem" },
];

// Community amenities for schema
const communityAmenities = [
  { name: "Championship Golf Courses", description: "Anthem Country Club and Revere Golf Club" },
  { name: "Anthem Center Clubhouse", description: "64,000 sq ft facility with pools, fitness, and dining" },
  { name: "Indoor Swimming Pool", description: "Year-round heated indoor pool" },
  { name: "Outdoor Swimming Pool", description: "Resort-style outdoor pool" },
  { name: "Fitness Center", description: "State-of-the-art fitness equipment and classes" },
  { name: "Tennis Courts", description: "Multiple lighted tennis courts" },
  { name: "Pickleball Courts", description: "Dedicated pickleball facilities" },
  { name: "Walking Trails", description: "Miles of walking and hiking trails" },
  { name: "Restaurant", description: "On-site dining at the clubhouse" },
  { name: "Social Clubs", description: "80+ clubs and activity groups" },
];

// FAQ data for schema
const sunCityAnthemFaqs = [
  {
    question: "What is the age requirement for Sun City Anthem?",
    answer:
      "Sun City Anthem is a 55+ active adult community. At least one resident in each home must be 55 or older, and no residents under 19 are permitted.",
  },
  {
    question: "What are the HOA fees at Sun City Anthem?",
    answer:
      "Monthly HOA fees at Sun City Anthem range from $180-$230 depending on the neighborhood and home type. Fees cover access to all community amenities, common area maintenance, and some utilities.",
  },
  {
    question: "What is the price range for homes in Sun City Anthem?",
    answer:
      "Homes in Sun City Anthem range from approximately $350,000 to $1.2 million. The Liberty section offers more affordable options, while Heritage and Eagle's Landing feature premium homes with the best views.",
  },
  {
    question: "Does Sun City Anthem have golf courses?",
    answer:
      "Yes, Sun City Anthem residents have access to two championship golf courses: Anthem Country Club (members-only) and the adjacent Revere Golf Club (public). Residents enjoy discounted rates and priority tee times.",
  },
];

// Combined page schemas
const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(breadcrumbs),
  generateSeniorCommunitySchema({
    name: "Sun City Anthem",
    description:
      "Premier 55+ active adult community in Henderson, Nevada. Built by Del Webb, featuring 7,100+ homes, championship golf, 64,000 sq ft clubhouse, and stunning mountain views.",
    priceRange: "$350,000 - $1,200,000",
    numberOfHomes: 7100,
    yearBuilt: "1998-2008",
    amenities: communityAmenities,
    hoaFees: "$180-$230/month",
    latitude: 35.9631,
    longitude: -115.0892,
    ageRestriction: "55+",
  }),
  generateFAQSchema(sunCityAnthemFaqs)
);

export default function SunCityAnthemPage() {
  return (
    <>
      {/* Combined JSON-LD Schema: Breadcrumb + ResidentialComplex + FAQ */}
      <SchemaScript schema={pageSchemas} id="sun-city-anthem-schema" />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {" / "}
              <Link href="/55-plus-communities" className="hover:text-blue-600">55+ Communities</Link>
              {" / "}
              <span className="text-slate-900">Sun City Anthem</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Mountain className="h-4 w-4 mr-2" />
              Henderson's Premier 55+ Community
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Sun City Anthem
            </h1>
            <p className="text-xl text-slate-600">
              7,100+ homes. Mountain views. Henderson safety. Championship golf.
            </p>
          </div>

          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Sun City Anthem at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">$350K-$1.2M</div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">$180-$230</div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">7,100+</div>
                <div className="text-slate-300 text-sm">Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">55+</div>
                <div className="text-slate-300 text-sm">Age Requirement</div>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                About Sun City Anthem
              </h2>
              <p>
                <strong>Sun City Anthem</strong> brings the legendary Sun City lifestyle to Henderson,
                Nevada's second-largest city. Built by Del Webb from 1998-2008, this
                7,100+ home community offers stunning mountain views, championship golf, and
                resort-caliber amenities—all within Henderson's renowned safety and quality of life.
              </p>
              <p>
                The community's centerpiece is the Anthem Center, a 64,000 sq ft clubhouse featuring
                indoor and outdoor pools, fitness facilities, tennis and pickleball courts, a restaurant,
                and numerous activity rooms. Two championship golf courses—Anthem Country Club and
                the adjacent Revere Golf Club—provide world-class golf experiences.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices</strong> agents know Sun City Anthem intimately.
                Dr. Jan Duffy helps buyers understand the community's various phases, elevation differences,
                and which neighborhoods offer the best mountain or Strip views.
              </p>
            </div>
          </section>

          {/* Why Henderson */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-green-50 border-l-4 border-green-600 rounded-r-xl p-8">
              <div className="flex items-start">
                <Shield className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Why Henderson Matters
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Henderson Police publish crime data online. For 55+ buyers,
                    this translates to peace of mind, stable property values, and a community that
                    attracts similar residents who value safety and quality of life.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">#2</div>
                      <div className="text-sm text-slate-600">Crime Map Online</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">A+</div>
                      <div className="text-sm text-slate-600">Livability Score</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">Low</div>
                      <div className="text-sm text-slate-600">Property Crime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Amenities */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Sun City Anthem Amenities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Championship Golf</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Anthem Country Club (members)</li>
                  <li>• Revere Golf Club (public)</li>
                  <li>• Affordable resident rates</li>
                  <li>• Pro shops & instruction</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Dumbbell className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Anthem Center (64,000 sf)</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Indoor & outdoor pools</li>
                  <li>• State-of-the-art fitness</li>
                  <li>• Tennis & pickleball</li>
                  <li>• On-site restaurant</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Active Lifestyle</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 80+ clubs & groups</li>
                  <li>• Organized travel</li>
                  <li>• Social events weekly</li>
                  <li>• Continuing education</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Neighborhoods */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Sun City Anthem Neighborhoods
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Liberty</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Original phase with established landscaping. Close to Anthem Center. Most
                  affordable options starting around $350K.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Independence</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Mid-range pricing with mountain views. Popular floor plans and good lot sizes.
                  $450K-$700K range.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Heritage</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Premium section with larger custom homes. Best views, largest lots. $700K-$1M+.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Eagle's Landing</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Elevated homes with panoramic Strip and mountain views. Luxury finishes
                  throughout. $800K-$1.2M.
                </p>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Sun City Anthem combines everything Henderson is known for—safety, quality, and
                stunning scenery—with the Del Webb lifestyle. The views from the upper sections
                are spectacular, and the Anthem Center rivals any resort clubhouse I've seen.
                As a <strong>Berkshire Hathaway HomeServices</strong> agent, I help buyers find
                the right balance of views, price, and proximity to amenities."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-green-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Discover Sun City Anthem
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Experience Henderson's premier 55+ community. Dr. Jan Duffy provides tours and
              expert guidance for Sun City Anthem home buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001942"
                className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-green-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1942
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-green-400 transition-colors"
              >
                Schedule a Tour
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
