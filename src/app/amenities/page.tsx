import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import NearbyAmenitiesMapLoader from "@/components/amenities/NearbyAmenitiesMapLoader";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/sections/FAQSection";
import {
  agentInfo,
  officeInfo,
  siteUrl,
} from "@/lib/site-config";
import {
  amenityGuideSections,
  amenitiesFaqItems,
  communityMapCenter,
  curatedAmenities,
} from "@/lib/nearby-amenities-data";
import { theLakesPrimaryKeyword } from "@/lib/the-lakes-aeo";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateNearbyAmenitiesItemListSchema,
  generateTheLakesCommunityPlaceSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/amenities",
  title: `Nearby Amenities in The Lakes, Las Vegas | ${theLakesPrimaryKeyword} Guide`,
  description: `Interactive map and local guide to grocery, parks, golf, healthcare, and shopping near The Lakes Las Vegas. Dr. Jan Duffy, BHHS Nevada Properties. Call ${agentInfo.phone}.`,
  keywords: [
    "The Lakes Las Vegas amenities",
    "grocery near The Lakes Las Vegas",
    "parks near The Lakes",
    "Summerlin Hospital near The Lakes",
    "west Las Vegas shopping",
    "The Lakes Las Vegas map",
  ],
});

const amenitiesPageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Nearby Amenities", url: "/amenities" },
  ]),
  generateTheLakesCommunityPlaceSchema(),
  generateNearbyAmenitiesItemListSchema(curatedAmenities),
  generateFAQSchema(amenitiesFaqItems)
);

export default function AmenitiesPage() {
  return (
    <>
      <SchemaScript schema={amenitiesPageSchemas} />
      <Navbar />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-blue-200 font-semibold mb-3 flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5" aria-hidden />
                West Las Vegas · {communityMapCenter.hoaOfficeAddress.split(",").slice(-2).join(",")}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Nearby Amenities in The Lakes, Las Vegas
              </h1>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
                Hyperlocal map and buyer-focused guide to dining, recreation, healthcare, shopping,
                schools, and commute patterns around {theLakesPrimaryKeyword}.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={agentInfo.phoneTel}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-400 transition-colors"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  Call {agentInfo.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/80 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Schedule a consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50" aria-labelledby="amenities-map-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 id="amenities-map-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Interactive amenity map
              </h2>
              <p className="text-slate-700 mb-8 max-w-3xl">
                Centered on {communityMapCenter.nameWithCity} (map centroid{" "}
                {communityMapCenter.latitude.toFixed(3)}, {communityMapCenter.longitude.toFixed(3)}).
                Switch categories to explore restaurants, grocery, parks, golf, healthcare, and more.
              </p>
              <NearbyAmenitiesMapLoader />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white" aria-labelledby="amenities-guide-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2
                id="amenities-guide-heading"
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-10"
              >
                Local guide by category
              </h2>
              <div className="space-y-10">
                {amenityGuideSections.map((section) => (
                  <article key={section.id} id={section.id}>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h3>
                    {section.paragraphs.map((p) => (
                      <p key={p.slice(0, 40)} className="text-slate-700 leading-relaxed mb-3">
                        {p}
                      </p>
                    ))}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FAQSection
          faqs={amenitiesFaqItems}
          title="The Lakes amenities — FAQ"
          subtitle="Direct answers for buyers comparing west Las Vegas lifestyle and daily errands"
          className="bg-slate-50"
        />

        <section className="py-16 md:py-20 bg-blue-900 text-white" aria-labelledby="amenities-cta-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-blue-200" aria-hidden />
              <h2 id="amenities-cta-heading" className="text-2xl md:text-3xl font-bold mb-4">
                Your local REALTOR® for The Lakes Las Vegas
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                {agentInfo.name}, {agentInfo.title} · {agentInfo.brokerage} · License{" "}
                {agentInfo.license}. Dr. Jan helps buyers and sellers navigate HOA rules, lakefront
                micro-markets, and west-side commute trade-offs with data — not guesswork.
              </p>
              <p className="text-blue-100 mb-8">
                {officeInfo.name}
                <br />
                {officeInfo.address.full}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={agentInfo.phoneTel}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-blue-900 hover:bg-blue-50 transition-colors"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  {agentInfo.phone}
                </a>
                <a
                  href={`mailto:${agentInfo.email}?subject=${encodeURIComponent("The Lakes amenities tour")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/80 px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
                >
                  <Mail className="h-5 w-5" aria-hidden />
                  {agentInfo.email}
                </a>
                <Link
                  href="/listings"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white/80 px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
                >
                  Browse listings
                </Link>
              </div>
              <p className="mt-8 text-sm text-blue-200">
                More about Dr. Jan:{" "}
                <Link href="/about" className="underline hover:text-white">
                  About page
                </Link>{" "}
                ·{" "}
                <a href={siteUrl("/")} className="underline hover:text-white">
                  {theLakesPrimaryKeyword} home search
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
