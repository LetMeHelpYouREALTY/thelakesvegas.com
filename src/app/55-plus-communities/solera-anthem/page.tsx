import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Shield,
  Home as HomeIcon,
  Dumbbell,
  Users,
  CheckCircle,
  Heart,
  Mountain,
  DollarSign,
} from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import { combineSchemas, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/55-plus-communities/solera-anthem",
  title: "Solera at Anthem Homes for Sale | Intimate Guard-Gated 55+ Henderson | Dr. Jan Duffy",
  description:
    "Solera at Anthem - intimate guard-gated 55+ community in Henderson. Homes from $380K-$650K. Lower HOA fees, close-knit atmosphere. Dr. Jan Duffy, BHHS. Call (702) 500-1942.",
  keywords: [
    "Solera at Anthem homes for sale",
    "Solera Anthem Henderson",
    "guard-gated 55+ community Henderson",
    "Henderson 55+ communities",
    "intimate 55+ community Las Vegas",
    "Berkshire Hathaway Solera Anthem",
  ],
  openGraphOverrides: {
    title: "Solera at Anthem - Intimate Guard-Gated 55+ in Henderson",
    description:
      "Close-knit community with guard-gated security. Lower HOA fees, Henderson location. From $380K. Dr. Jan Duffy, BHHS.",
  },
});

const communitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Solera at Anthem",
  description:
    "Guard-gated 55+ community in Henderson with 1,200+ homes and intimate community feel",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Henderson",
    addressRegion: "NV",
    postalCode: "89052",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.9982,
    longitude: -115.0961,
  },
};

const soleraAnthemPageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "55+ Communities", url: "/55-plus-communities" },
    { name: "Solera at Anthem", url: "/55-plus-communities/solera-anthem" },
  ]),
  communitySchema
);

export default function SoleraAnthemPage() {
  return (
    <>
      <SchemaScript id="solera-anthem-page-schema" schema={soleraAnthemPageSchemas} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto mb-6">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              {" / "}
              <Link href="/55-plus-communities" className="hover:text-blue-600">
                55+ Communities
              </Link>
              {" / "}
              <span className="text-slate-900">Solera at Anthem</span>
            </nav>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Intimate Guard-Gated 55+ Community
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Solera at Anthem
            </h1>
            <p className="text-xl text-slate-600">
              The close-knit alternative to mega-communities. Guard-gated entry in the Anthem area of Henderson.
            </p>
          </div>

          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Solera at Anthem at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">
                  $380K-$650K
                </div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">
                  $170-$210
                </div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1,200+</div>
                <div className="text-slate-300 text-sm">Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">
                  55+ Only
                </div>
                <div className="text-slate-300 text-sm">All Residents</div>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                About Solera at Anthem
              </h2>
              <p>
                <strong>Solera at Anthem</strong> offers something increasingly
                rare in Las Vegas 55+ living—a genuinely intimate community where
                neighbors become friends. With approximately 1,200 homes, Solera
                is significantly smaller than Sun City's 7,000+ home developments,
                creating a close-knit atmosphere that larger communities simply
                can't replicate.
              </p>
              <p>
                Built by Del Webb from 2002-2006, Solera features guard-gated
                security, a beautiful clubhouse, resort-style pool, fitness
                center, and active social programming. Unlike some 55+
                communities where one spouse can be younger, Solera requires{" "}
                <strong>all residents to be 55+</strong>, ensuring a consistent
                community demographic.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>{" "}
                helps buyers who value community over amenity overload. Dr. Jan
                Duffy understands why some buyers prefer Solera's intimate scale
                and all-55+ requirement to larger developments.
              </p>
            </div>
          </section>

          {/* Key Differentiator */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-teal-50 border-l-4 border-teal-600 rounded-r-xl p-8">
              <div className="flex items-start">
                <Users className="h-8 w-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    All Residents 55+
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Most 55+ communities allow younger spouses under the 80/20
                    HOPA rule. Solera is different—
                    <strong>every resident must be 55 or older</strong>. This
                    creates a truly age-matched community where everyone shares
                    similar life stages and interests.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-teal-600 mb-1">
                        Solera at Anthem
                      </div>
                      <div className="text-sm text-slate-600">
                        100% of residents 55+
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold text-slate-500 mb-1">
                        Most 55+ Communities
                      </div>
                      <div className="text-sm text-slate-600">
                        80% with 55+ resident, 20% can be younger
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Amenities */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Community Amenities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Guard-Gated Security
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 24/7 manned gate</li>
                  <li>• Visitor verification</li>
                  <li>• Community patrol</li>
                  <li>• Peace of mind</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Dumbbell className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Clubhouse & Fitness
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Resort-style pool</li>
                  <li>• Spa & relaxation</li>
                  <li>• Fitness center</li>
                  <li>• Meeting rooms</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Tennis & Recreation
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Tennis courts</li>
                  <li>• Pickleball</li>
                  <li>• Bocce ball</li>
                  <li>• Walking paths</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Henderson Location */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Henderson Location
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Guard-Gated Entry
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Solera's guard gate controls access to the community, and the
                      Henderson Police Department publishes crime data for any address.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <Mountain className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Anthem Master-Planned Community
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Located within the prestigious Anthem master-planned
                      community. Beautiful mountain views and desert landscapes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Near Sun City Anthem
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Adjacent to Sun City Anthem with access to nearby golf,
                      dining, and the vibrant Anthem community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <DollarSign className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Lower HOA Than Larger Communities
                    </h3>
                    <p className="text-slate-600 text-sm">
                      $170-$210/month—less than Sun City Anthem's $180-$230
                      because you're not subsidizing massive amenity complexes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Solera */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Why Buyers Choose Solera at Anthem
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">
                    Intimate community where neighbors become friends
                  </strong>
                  <p className="text-slate-600 text-sm">
                    1,200 homes vs. 7,000+—you'll actually know your neighbors
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">
                    All residents 55+—no exceptions
                  </strong>
                  <p className="text-slate-600 text-sm">
                    Consistent community demographic with shared life experiences
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">
                    Guard-gated in Henderson
                  </strong>
                  <p className="text-slate-600 text-sm">
                    24/7 staffed guard gate at the community entrance
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900">
                    Lower HOA than mega-communities
                  </strong>
                  <p className="text-slate-600 text-sm">
                    Pay for what you use, not massive golf courses and rec centers
                    you may not need
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Solera at Anthem is perfect for buyers who find Sun City
                overwhelming. It's intimate, genuinely guard-gated, and everyone
                is actually 55+. The community feels like a neighborhood, not a
                small city. As a{" "}
                <strong>Berkshire Hathaway HomeServices</strong> agent, I often
                recommend Solera to buyers who prioritize community connection
                over endless amenities."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-teal-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Intimate 55+ Living
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Discover why Solera at Anthem offers the close-knit community
              experience larger developments can't match. Tour with Dr. Jan Duffy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="tel:+17025001942"
                className="inline-flex items-center justify-center bg-white text-teal-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-teal-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1942
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-teal-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-teal-400 transition-colors"
              >
                Schedule a Tour
              </Link>
            </div>
            <p className="text-teal-200">
              Here to make your transition smooth, Dr. Jan{" "}
              <span role="img" aria-label="sunshine">
                ☀️
              </span>
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">
          Last Updated: January 2026
        </div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
