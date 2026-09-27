import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import InstagramProfileEmbed from "@/components/social/InstagramProfileEmbed";
import NearbyAmenitiesSection from "@/components/amenities/NearbyAmenitiesSection";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { Home as HomeIcon, TrendingUp, Shield, Users, Phone } from "lucide-react";
import SchemaScript from "@/components/SchemaScript";
import { homepageTestimonials } from "@/lib/home-reviews";
import {
  combineSchemas,
  generateFAQSchema,
  generateHomepageReviewSchemas,
} from "@/lib/schema";
import { theLakesGeo, theLakesHomeFaqItems } from "@/lib/the-lakes-aeo";
import {
  agentInfo,
  officeInfo,
  openHouseWeekend,
  siteConfig,
  siteUrl,
  theLakesInstagram,
} from "@/lib/site-config";

const baseUrl = siteConfig.url.replace(/\/$/, "");

/** Event JSON-LD for open house; null when inactive or invalid dates */
function buildOpenHouseEventJsonLd(): Record<string, unknown> | null {
  const c = openHouseWeekend;
  if (!c.active) return null;
  const startMs = Date.parse(c.startDate);
  const endMs = Date.parse(c.endDate);
  if (Number.isNaN(startMs) || Number.isNaN(endMs) || endMs <= startMs) return null;

  const address: Record<string, unknown> = {
    "@type": "PostalAddress",
    addressLocality: c.location.addressLocality,
    addressRegion: c.location.addressRegion,
    postalCode: c.location.postalCode,
    addressCountry: "US",
  };
  const street = c.location.streetAddress?.trim();
  if (street) address.streetAddress = street;

  const placeBlock = {
    "@type": "Place",
    name: c.location.name,
    address,
  };

  const eventBase = {
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode" as const,
    eventStatus: "https://schema.org/EventScheduled" as const,
    location: placeBlock,
  };

  const heroImage = `${baseUrl}/Image/hero_bg_1.jpg`;
  const organizerPerson = {
    "@type": "Person" as const,
    name: agentInfo.name,
    telephone: "+1-702-500-1942",
    email: agentInfo.email,
    url: siteUrl("/"),
  };
  const listingRaw = c.listingUrl?.trim();
  const offerUrl =
    listingRaw && /^https?:\/\//i.test(listingRaw)
      ? listingRaw
      : listingRaw
        ? siteUrl(listingRaw.startsWith("/") ? listingRaw : `/${listingRaw}`)
        : siteUrl("/");
  const eventOffers = {
    "@type": "Offer" as const,
    url: offerUrl,
    price: 0,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  };

  const eventExtras = {
    organizer: organizerPerson,
    performer: organizerPerson,
    image: heroImage,
    offers: eventOffers,
  };

  let subEvent: Record<string, unknown> | undefined;
  if (c.sundayStartDate && c.sundayEndDate) {
    const sunStart = Date.parse(c.sundayStartDate);
    const sunEnd = Date.parse(c.sundayEndDate);
    if (!Number.isNaN(sunStart) && !Number.isNaN(sunEnd) && sunEnd > sunStart) {
      subEvent = {
        "@type": "Event",
        name: `${c.headline} — Sunday`,
        description: c.description,
        startDate: c.sundayStartDate,
        endDate: c.sundayEndDate,
        ...eventBase,
        ...eventExtras,
      };
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: c.headline,
    description: c.description,
    startDate: c.startDate,
    endDate: c.endDate,
    ...eventBase,
    ...(subEvent ? { subEvent } : {}),
    ...eventExtras,
  };
}

export const metadata: Metadata = buildPageMetadata({
  path: "/",
  title: "The Lakes Las Vegas Homes for Sale | Dr. Jan Duffy",
  description: siteConfig.description,
  keywords: [
    "The Lakes Las Vegas",
    "The Lakes Las Vegas homes for sale",
    "The Lakes real estate agent",
    "West Las Vegas lake homes",
    "89128 homes",
    "89129 homes",
    "Berkshire Hathaway HomeServices",
    "Dr. Jan Duffy",
    "BHHS Nevada Properties",
  ],
  openGraphOverrides: {
    title: "The Lakes Las Vegas Homes for Sale | Dr. Jan Duffy",
    description: siteConfig.description,
  },
});

const faqSchema = generateFAQSchema(theLakesHomeFaqItems);
const openHouseEventJsonLd = buildOpenHouseEventJsonLd();

const homePageReviewSchemas = generateHomepageReviewSchemas(
  homepageTestimonials.map((r) => ({
    author: r.name,
    rating: r.rating,
    reviewBody: r.text,
    datePublished: r.date,
  })),
);

const homePageSchema = openHouseEventJsonLd
  ? combineSchemas(faqSchema, openHouseEventJsonLd, ...homePageReviewSchemas)
  : combineSchemas(faqSchema, ...homePageReviewSchemas);

export default function Home() {
  const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    theLakesGeo.nameWithCity,
  )}&z=12&output=embed`;
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    theLakesGeo.nameWithCity,
  )}`;

  return (
    <>
      <SchemaScript id="home-page-schema" schema={homePageSchema} />
      <Navbar />
      <main>
        <HeroSection />

        <section
          aria-label="Explore key areas of this site"
          className="bg-white border-b border-slate-200 py-6 scroll-mt-24"
        >
          <div className="container mx-auto px-4">
            <p className="text-center text-slate-700 text-sm md:text-base leading-relaxed">
              <span className="font-semibold text-slate-900">Explore:</span>{" "}
              <Link href="/neighborhoods" className="text-blue-600 hover:underline">
                Las Vegas neighborhoods
              </Link>
              <span className="text-slate-400 mx-1.5" aria-hidden>
                ·
              </span>
              <Link href="/listings" className="text-blue-600 hover:underline">
                Las Vegas MLS listings on this site
              </Link>
              <span className="text-slate-400 mx-1.5" aria-hidden>
                ·
              </span>
              <Link href="/buyers" className="text-blue-600 hover:underline">
                Home buying guide
              </Link>
              <span className="text-slate-400 mx-1.5" aria-hidden>
                ·
              </span>
              <Link href="/sellers" className="text-blue-600 hover:underline">
                Selling in The Lakes area
              </Link>
              <span className="text-slate-400 mx-1.5" aria-hidden>
                ·
              </span>
              <Link href="/home-valuation" className="text-blue-600 hover:underline">
                Free home valuation
              </Link>
            </p>
          </div>
        </section>

        {openHouseWeekend.active ? (
          <section
            id="open-house-weekend"
            className="scroll-mt-24 border-t border-amber-200 bg-gradient-to-b from-amber-50 to-white py-14 md:py-16"
            aria-labelledby="open-house-heading"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2
                  id="open-house-heading"
                  className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
                >
                  {openHouseWeekend.headline}
                </h2>
                <p className="text-lg text-slate-700 mb-2">{openHouseWeekend.subhead}</p>
                {openHouseWeekend.secondSessionNote ? (
                  <p className="text-slate-600 mb-4">{openHouseWeekend.secondSessionNote}</p>
                ) : null}
                <p className="text-slate-700 mb-4">{openHouseWeekend.description}</p>
                {openHouseWeekend.location.streetAddress?.trim() ? (
                  <p className="text-slate-800 font-medium mb-2">
                    {openHouseWeekend.location.name}
                    <br />
                    <span className="font-normal text-slate-700">
                      {openHouseWeekend.location.streetAddress.trim()}
                      <br />
                      {openHouseWeekend.location.addressLocality},{" "}
                      {openHouseWeekend.location.addressRegion}{" "}
                      {openHouseWeekend.location.postalCode}
                    </span>
                  </p>
                ) : (
                  <p className="text-slate-700 mb-4">
                    <strong className="text-slate-900">Location:</strong> Pin and directions on the
                    map below ({openHouseWeekend.location.addressLocality},{" "}
                    {openHouseWeekend.location.addressRegion} {openHouseWeekend.location.postalCode}
                    ).
                  </p>
                )}
                {openHouseWeekend.mlsAttribution?.trim() ? (
                  <p className="text-sm text-slate-600 mb-6 border-l-4 border-amber-300 pl-4">
                    {openHouseWeekend.mlsAttribution.trim()}
                  </p>
                ) : null}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
                  <a
                    href={agentInfo.phoneTel}
                    className="inline-flex justify-center rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    Call {agentInfo.phone}
                  </a>
                  <a
                    href={`mailto:${agentInfo.email}?subject=${encodeURIComponent("Open house — The Lakes Las Vegas")}`}
                    className="inline-flex justify-center rounded-md border-2 border-blue-600 px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
                  >
                    Email {agentInfo.email}
                  </a>
                  {openHouseWeekend.listingUrl?.trim() ? (
                    <Link
                      href={openHouseWeekend.listingUrl.trim()}
                      className="inline-flex justify-center rounded-md border-2 border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      View listing
                    </Link>
                  ) : null}
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white min-h-[280px]">
                  <iframe
                    title="Open house weekend — map and directions (The Lakes Las Vegas area)"
                    src={openHouseWeekend.mapEmbedSrc}
                    className="w-full h-[320px] md:h-[480px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* GEO: explicit locality + map for Search Console / local relevance */}
        <section
          id="geography-the-lakes"
          className="scroll-mt-24 bg-slate-50 py-16 md:py-20 border-t border-slate-200"
          aria-labelledby="geo-the-lakes-heading"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h2
                  id="geo-the-lakes-heading"
                  className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                >
                  The Lakes Las Vegas — location &amp; community
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">{theLakesGeo.summary}</p>
                <p className="text-slate-600 mb-6">
                  <strong className="text-slate-800">Area:</strong> {theLakesGeo.name},{" "}
                  {theLakesGeo.county}, {theLakesGeo.region} ·{" "}
                  <strong className="text-slate-800">Common ZIPs:</strong>{" "}
                  {theLakesGeo.postalCodes.join(", ")} (verify on each listing).
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                  <a
                    href={agentInfo.phoneTel}
                    className="inline-flex justify-center rounded-md border-2 border-blue-600 px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
                  >
                    Call {agentInfo.phone}
                  </a>
                </div>
                <p className="mt-6 text-sm text-slate-500">
                  {officeInfo.name} · {officeInfo.address.full}
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white min-h-[280px]">
                <iframe
                  title="Map of The Lakes Las Vegas, Nevada"
                  src={mapEmbedSrc}
                  className="w-full h-[320px] md:h-[380px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <NearbyAmenitiesSection id="whats-nearby" variant="home" className="bg-slate-50" />

        {/* Berkshire Hathaway Value Proposition Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Why Choose Berkshire Hathaway HomeServices?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                When you work with a <strong>Berkshire Hathaway HomeServices</strong> agent, you're
                backed by a name synonymous with trust, ethical standards, and financial
                strength—the same principles that built Warren Buffett's empire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Trusted Brand</h3>
                <p className="text-slate-600 text-sm">
                  Backed by Warren Buffett's Berkshire Hathaway Inc.—unmatched financial stability
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Global Network</h3>
                <p className="text-slate-600 text-sm">
                  50,000+ agents worldwide for seamless referrals and relocations
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Market Expertise</h3>
                <p className="text-slate-600 text-sm">
                  Serving Las Vegas since 2008, $127M+ in closed transactions
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <HomeIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Full Service</h3>
                <p className="text-slate-600 text-sm">
                  Buying, selling, luxury, investment, relocation—we do it all
                </p>
              </div>
            </div>

            {/* Expert Quote */}
            <div className="max-w-3xl mx-auto mt-12 bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "When clients ask why they should choose a Berkshire Hathaway HomeServices agent, I
                tell them: you're not just getting me—you're getting a global network of 50,000
                agents, world-class marketing, and a brand that's synonymous with trust."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties
              </cite>
            </div>
          </div>
        </section>

        {/* Market Stats Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Las Vegas Real Estate Market | January 2026
              </h2>
              <p className="text-slate-300">
                Current market data from Berkshire Hathaway HomeServices Nevada Properties
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$450K</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
                <div className="text-green-400 text-sm">+4.2% YoY</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">28</div>
                <div className="text-slate-300 text-sm">Avg Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">4,850</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">2.1</div>
                <div className="text-slate-300 text-sm">Months Inventory</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/market-report"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                View Full Market Report
              </Link>
            </div>
          </div>
        </section>

        <RealScoutListings />

        {/* Neighborhoods Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Las Vegas Neighborhoods We Serve
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Berkshire Hathaway HomeServices Nevada Properties covers all of Southern Nevada
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {(
                [
                  {
                    name: "The Lakes Las Vegas",
                    price: "West Las Vegas",
                    href: "/#geography-the-lakes",
                  },
                  { name: "Summerlin", price: "$625K", slug: "summerlin" },
                  { name: "Henderson", price: "$485K", slug: "henderson" },
                  { name: "Green Valley", price: "$520K", slug: "green-valley" },
                  { name: "The Ridges", price: "$2.5M", slug: "the-ridges" },
                  { name: "Southern Highlands", price: "$750K", slug: "southern-highlands" },
                  { name: "North Las Vegas", price: "$385K", slug: "north-las-vegas" },
                  { name: "Skye Canyon", price: "$550K", slug: "skye-canyon" },
                  { name: "Centennial Hills", price: "$495K", slug: "centennial-hills" },
                  { name: "Inspirada", price: "$525K", slug: "inspirada" },
                  { name: "Mountains Edge", price: "$475K", slug: "mountains-edge" },
                ] as const
              ).map((area) => {
                const href =
                  "href" in area ? area.href : `/neighborhoods/${area.slug}`;
                return (
                <Link
                  key={"href" in area ? area.href : area.slug}
                  href={href}
                  className="bg-slate-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-colors group"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                    {area.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {"href" in area ? area.price : `From ${area.price}`}
                  </p>
                </Link>
              );
              })}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/neighborhoods"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                View All Neighborhoods →
              </Link>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <ReviewsSection />

        <FAQSection
          faqs={theLakesHomeFaqItems}
          title="The Lakes Las Vegas — frequently asked questions"
          subtitle="Direct answers about the neighborhood, ZIP codes, buying and selling, and how to reach Dr. Jan Duffy (for search and AI summaries)."
        />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work with Berkshire Hathaway HomeServices?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're buying, selling, or investing in Las Vegas real estate, Dr. Jan Duffy
              is here to help.
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
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Send a Message
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada
              Properties
            </p>
          </div>
        </section>

        {/* Social after primary CTA: avoids interrupting FAQ → conversion; optional engagement pre-footer */}
        {theLakesInstagram.showEmbedOnHomepage ? (
          <section
            className="py-12 md:py-16 bg-white border-t border-slate-200"
            aria-labelledby="instagram-the-lakes-heading"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2">
                  Community
                </p>
                <h2
                  id="instagram-the-lakes-heading"
                  className="text-2xl md:text-3xl font-bold text-slate-900 mb-3"
                >
                  The Lakes on Instagram
                </h2>
                <p className="text-base text-slate-600">
                  Neighborhood photos and updates on{" "}
                  <a
                    href={theLakesInstagram.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:text-blue-700 underline"
                  >
                    @thelakesinlasvegas
                  </a>
                  .
                </p>
              </div>
              <InstagramProfileEmbed
                permalink={theLakesInstagram.embedPermalink}
                embedClickToLoad={theLakesInstagram.embedClickToLoad}
              />
            </div>
          </section>
        ) : null}

        {/* Last Updated */}
        <div className="bg-slate-100 py-4 text-center text-sm text-slate-500">
          Last Updated: March 2026 | TheLakesVegas.com — Berkshire Hathaway HomeServices Nevada
          Properties
        </div>
      </main>
      <Footer />
    </>
  );
}
