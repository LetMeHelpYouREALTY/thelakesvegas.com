import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Home as HomeIcon,
  DollarSign,
  Users,
  Dumbbell,
  Trophy,
  Heart,
  Mountain,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import { combineSchemas, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/55-plus-communities/sun-city-summerlin",
  title: "Sun City Summerlin Homes for Sale | Berkshire Hathaway HomeServices",
  description: "Nevada's largest 55+ community. Sun City Summerlin homes from $320K-$850K. 3 golf courses, 4 rec centers, 100+ clubs. Dr. Jan Duffy, BHHS specialist. Call (702) 500-1942.",
  keywords: [
    "Sun City Summerlin homes for sale",
    "Sun City Summerlin Las Vegas",
    "55 plus communities Summerlin",
    "retirement community Las Vegas",
    "Berkshire Hathaway Sun City",
  ],
});

const communitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Sun City Summerlin",
  description: "Nevada's largest 55+ active adult community with 7,700+ homes",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.2048,
    longitude: -115.2954,
  },
};

const sunCitySummerlinPageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "55+ Communities", url: "/55-plus-communities" },
    { name: "Sun City Summerlin", url: "/55-plus-communities/sun-city-summerlin" },
  ]),
  communitySchema
);

export default function SunCitySummerlinPage() {
  return (
    <>
      <SchemaScript id="sun-city-summerlin-page-schema" schema={sunCitySummerlinPageSchemas} />
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
              <span className="text-slate-900">Sun City Summerlin</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Trophy className="h-4 w-4 mr-2" />
              Nevada's Largest 55+ Community
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Sun City Summerlin
            </h1>
            <p className="text-xl text-slate-600">
              7,700+ homes. 3 golf courses. 4 recreation centers. The gold standard of active adult living.
            </p>
          </div>

          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Sun City Summerlin at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">$320K-$850K</div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">$155-$195</div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">7,700+</div>
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
                About Sun City Summerlin
              </h2>
              <p>
                <strong>Sun City Summerlin</strong> isn't just Nevada's largest 55+ community—it's
                the model by which all others are measured. Established by Del Webb in 1989, this
                2,400-acre community against the Spring Mountains has evolved into a self-contained
                city for active adults, with amenities that rival any resort.
              </p>
              <p>
                The community's three championship golf courses—Highland Falls, Palm Valley, and
                Eagle Crest—offer varied terrain and challenges. Four recreation centers provide
                fitness equipment, pools, tennis and pickleball courts, craft rooms, and gathering
                spaces. Over 100 clubs cover everything from golf and tennis to hiking, ceramics,
                woodworking, and ballroom dancing.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has helped
                hundreds of buyers find their Sun City Summerlin home. Dr. Jan Duffy understands
                the community's various neighborhoods, floor plans, and which areas offer the best
                value or views.
              </p>
            </div>
          </section>

          {/* Amenities */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              World-Class Amenities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">3 Golf Courses</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Highland Falls (executive)</li>
                  <li>• Palm Valley (championship)</li>
                  <li>• Eagle Crest (championship)</li>
                  <li>• Affordable resident rates</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Dumbbell className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">4 Recreation Centers</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Mountain Shadows</li>
                  <li>• Sun Shadows</li>
                  <li>• Pinnacle</li>
                  <li>• Desert Vista</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">100+ Clubs & Activities</h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Sports leagues</li>
                  <li>• Arts & crafts</li>
                  <li>• Travel groups</li>
                  <li>• Social clubs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Neighborhoods */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Sun City Summerlin Neighborhoods
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">The Highlands</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Original section with mature landscaping. Walking distance to Highland Falls golf
                  and Mountain Shadows rec center. Homes $320K-$500K.
                </p>
                <div className="text-xs text-slate-500">Best for: Golf lovers, budget-conscious buyers</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Sun Terrace</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Elevated homes with Strip and mountain views. Near Sun Shadows rec center.
                  Premium lots command $450K-$700K.
                </p>
                <div className="text-xs text-slate-500">Best for: View seekers, larger homes</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Eagle Crest</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Newer section (2000s) with updated floor plans. Adjacent to Eagle Crest golf course.
                  Homes $400K-$650K.
                </p>
                <div className="text-xs text-slate-500">Best for: Modern amenities, golf course views</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Pinnacle/Del Webb</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Premium custom and semi-custom homes. Largest lots, highest elevations, best views.
                  $600K-$850K+.
                </p>
                <div className="text-xs text-slate-500">Best for: Luxury buyers, privacy</div>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Why Buyers Choose Sun City Summerlin
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Lowest HOA fees in Las Vegas 55+ market</strong>
                  <p className="text-slate-600 text-sm">
                    $155-$195/month includes all amenities—significantly less than newer communities
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Community with mature landscaping</strong>
                  <p className="text-slate-600 text-sm">
                    No construction noise, trees and vegetation fully grown, neighborhood character established
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Proximity to Red Rock Canyon and Summerlin amenities</strong>
                  <p className="text-slate-600 text-sm">
                    Downtown Summerlin shopping and dining minutes away, hiking trails nearby
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">Mountain View Hospital on property</strong>
                  <p className="text-slate-600 text-sm">
                    Full-service hospital adjacent to community—peace of mind for residents
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Sun City Summerlin offers the best value in Las Vegas 55+ living. Where else can
                you get three golf courses, four rec centers, and 100+ clubs for under $200/month?
                As a <strong>Berkshire Hathaway HomeServices</strong> agent, I help buyers navigate
                the community's various neighborhoods to find the perfect fit—whether they want
                golf course views, mountain views, or proximity to their favorite rec center."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-amber-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Sun City Summerlin
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Ready to experience Nevada's premier 55+ community? Dr. Jan Duffy offers private
              tours and expert guidance on finding your perfect Sun City Summerlin home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001942"
                className="inline-flex items-center justify-center bg-white text-amber-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-amber-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1942
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-amber-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-amber-400 transition-colors"
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
