import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Users,
  Home as HomeIcon,
  Dumbbell,
  Calendar,
  Shield,
  DollarSign,
  MapPin,
  Heart,
  HelpCircle,
  Sun,
  Trophy,
  Palmtree,
  CheckCircle,
  Waves,
  Mountain,
  Star,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { siteUrl } from "@/lib/site-config";
import SchemaScript from "@/components/SchemaScript";
import { combineSchemas, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/55-plus-communities",
  title:
    "55+ Active Adult Communities Las Vegas | Sun City, Del Webb, Heritage | Dr. Jan Duffy",
  description:
    "Find your perfect 55+ community in Las Vegas. Sun City Summerlin, Sun City Aliante, Del Webb Lake Las Vegas, Heritage at Stonebridge, Solera, Trilogy. Dr. Jan Duffy specializes in active adult living. Call (702) 500-1942.",
  keywords: [
    "55+ communities Las Vegas",
    "active adult communities Las Vegas",
    "Sun City Summerlin",
    "Sun City Aliante",
    "Del Webb Lake Las Vegas",
    "Heritage at Stonebridge",
    "Solera at Anthem",
    "Trilogy Summerlin",
    "retirement communities Nevada",
    "55 plus homes Las Vegas",
  ],
  openGraphOverrides: {
    title: "Find Your Perfect 55+ Community in Las Vegas | Dr. Jan Duffy",
    description:
      "Sun City, Del Webb, Heritage at Stonebridge & more—Dr. Duffy specializes in active adult living. Berkshire Hathaway HomeServices Nevada Properties.",
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the age requirements for 55+ communities in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per the Housing for Older Persons Act (HOPA), at least 80% of occupied units must have one resident 55 or older. The remaining 20% can be younger, but some communities require all residents to be 55+. Spouses can be younger in most communities.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy in a 55+ community if I'm under 55?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally no, but there are exceptions. You may purchase if you'll be 55 by close of escrow, or as an investor who will rent to 55+ tenants. Some communities allow residents 45-54 in limited circumstances. A BHHS agent can explain each community's specific rules.",
      },
    },
    {
      "@type": "Question",
      name: "What do HOA fees cover in 55+ communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HOA fees in Las Vegas 55+ communities typically cover access to clubhouses, pools, fitness centers, golf courses, organized activities, landscaping, and exterior maintenance. Fees range from $150-$500/month depending on amenities. Some communities have separate golf memberships.",
      },
    },
    {
      "@type": "Question",
      name: "Are 55+ communities a good investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Las Vegas 55+ communities have shown strong appreciation due to limited supply and growing demand from retiring Baby Boomers. Sun City Summerlin homes have appreciated 40%+ over 5 years. The lifestyle amenities also make properties easier to sell.",
      },
    },
    {
      "@type": "Question",
      name: "Can grandchildren visit or stay in 55+ communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most communities allow guests of any age to visit and stay temporarily (typically 30-90 days per year). However, children cannot be permanent residents. Each community has specific guest policies that Dr. Jan Duffy can explain.",
      },
    },
    {
      "@type": "Question",
      name: "Why do California residents move to Las Vegas 55+ communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "California retirees choose Las Vegas for no state income tax, lower property prices (often 50-60% less than California), lower cost of living, warm weather, world-class healthcare, and the ability to get more home and amenities for their money. Many can sell their California home and buy in Las Vegas with cash to spare.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  description:
    "55+ community specialist helping active adults find their perfect Las Vegas retirement home",
  telephone: "(702) 500-1942",
  url: siteUrl("/55-plus-communities"),
  areaServed: {
    "@type": "City",
    name: "Las Vegas",
    containedIn: "Nevada",
  },
  knowsAbout: [
    "55+ Communities",
    "Active Adult Living",
    "Sun City Summerlin",
    "Sun City Aliante",
    "Del Webb",
    "Heritage at Stonebridge",
  ],
};

const fiftyFiveHubPageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "55+ Communities", url: "/55-plus-communities" },
  ]),
  faqSchema,
  localBusinessSchema
);

const communities = [
  {
    name: "Sun City Summerlin",
    slug: "sun-city-summerlin",
    location: "Summerlin, Las Vegas",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$155-$195/month",
    priceRange: "$320,000 - $850,000",
    homes: "7,700+ homes",
    amenities: ["3 golf courses", "4 rec centers", "100+ clubs", "Pools"],
    highlights: [
      "Nevada's largest 55+ community",
      "3 championship golf courses",
      "4 recreation centers with pools",
      "100+ clubs and activities",
      "Mountain View Hospital nearby",
    ],
    description:
      "Nevada's largest 55+ community with unparalleled amenities against the backdrop of the Spring Mountains.",
    color: "amber",
  },
  {
    name: "Sun City Anthem",
    slug: "sun-city-anthem",
    location: "Henderson",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$180-$230/month",
    priceRange: "$350,000 - $1,200,000",
    homes: "7,100+ homes",
    amenities: ["2 golf courses", "64K sf clubhouse", "80+ clubs", "Pools"],
    highlights: [
      "Henderson's premier 55+ community",
      "2 championship golf courses",
      "Stunning mountain views",
      "Henderson location with public crime data online",
    ],
    description:
      "Henderson's premier 55+ community with stunning mountain views and championship golf.",
    color: "green",
  },
  {
    name: "Sun City Aliante",
    slug: "sun-city-aliante",
    location: "North Las Vegas",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$140-$175/month",
    priceRange: "$280,000 - $550,000",
    homes: "2,800+ homes",
    amenities: ["Golf course", "Fitness center", "Pools", "Tennis"],
    highlights: [
      "Most affordable Sun City option",
      "18-hole championship golf course",
      "Brand new Aliante Casino nearby",
      "Easy freeway access",
    ],
    description:
      "The most affordable Sun City in Las Vegas with full amenities and great value.",
    color: "blue",
  },
  {
    name: "Del Webb at Lake Las Vegas",
    slug: "del-webb-lake-las-vegas",
    location: "Henderson (Lake Las Vegas)",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$200-$280/month",
    priceRange: "$400,000 - $900,000",
    homes: "1,800+ homes",
    amenities: ["Lake access", "Resort pools", "Fitness", "Pickleball"],
    highlights: [
      "Lakefront and mountain views",
      "Resort-style amenities",
      "Newest construction (2016+)",
      "Del Webb lifestyle programming",
    ],
    description:
      "The newest Del Webb community combines modern construction with stunning Lake Las Vegas setting.",
    color: "blue",
  },
  {
    name: "Heritage at Stonebridge",
    slug: "heritage-stonebridge",
    location: "Summerlin",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$175-$220/month",
    priceRange: "$400,000 - $750,000",
    homes: "1,100+ homes",
    amenities: ["Clubhouse", "Pool & spa", "Fitness", "Social clubs"],
    highlights: [
      "Premium Summerlin location",
      "Guard-gated security",
      "Intimate community feel",
      "Near Downtown Summerlin",
    ],
    description:
      "A boutique 55+ community offering guard-gated privacy in the heart of Summerlin.",
    color: "purple",
  },
  {
    name: "Solera at Anthem",
    slug: "solera-anthem",
    location: "Henderson",
    ageRequirement: "55+ (all residents)",
    hoaFees: "$170-$210/month",
    priceRange: "$380,000 - $650,000",
    homes: "1,200+ homes",
    amenities: ["Guard-gated", "Clubhouse", "Fitness", "Tennis"],
    highlights: [
      "Guard-gated security",
      "More intimate community size",
      "Lower HOA than larger communities",
      "Henderson location",
    ],
    description:
      "A more intimate alternative to larger 55+ communities with guard-gated security.",
    color: "teal",
  },
  {
    name: "Trilogy at Summerlin",
    slug: "trilogy-summerlin",
    location: "Summerlin",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$250-$350/month",
    priceRange: "$500,000 - $1,100,000",
    homes: "800+ homes",
    amenities: ["Farm-to-table dining", "Spa", "Fitness", "Resort pool"],
    highlights: [
      "Luxury resort-style living",
      "On-site farm-to-table restaurant",
      "Spa and wellness center",
      "Contemporary home designs",
    ],
    description:
      "Luxury resort-style 55+ living with upscale amenities and contemporary designs.",
    color: "rose",
  },
  {
    name: "Siena",
    slug: null, // No dedicated page yet
    location: "Summerlin",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$140-$180/month",
    priceRange: "$280,000 - $550,000",
    homes: "2,300+ homes",
    amenities: ["Golf course", "Pools", "Fitness", "Social clubs"],
    highlights: [
      "Most affordable Summerlin 55+ option",
      "18-hole golf course",
      "Community (1990s)",
      "Strong sense of community",
    ],
    description:
      "Siena offers the Summerlin lifestyle at more accessible price points.",
    color: "slate",
  },
];

const lifestyleBenefits = [
  {
    icon: HomeIcon,
    title: "Low-Maintenance Living",
    description:
      "Exterior maintenance handled by HOA. Spend time enjoying life, not maintaining your home.",
  },
  {
    icon: Star,
    title: "Resort-Style Amenities",
    description:
      "Golf courses, pools, fitness centers, spas, and clubhouses rivaling luxury resorts.",
  },
  {
    icon: Calendar,
    title: "Active Social Calendar",
    description:
      "100+ clubs, organized travel, classes, events, and built-in community of like-minded neighbors.",
  },
  {
    icon: Shield,
    title: "Gated Security",
    description:
      "Many communities offer guard-gated entries for added peace of mind and privacy.",
  },
  {
    icon: DollarSign,
    title: "Nevada Tax Advantages",
    description:
      "No state income tax means more money in your pocket. Social Security, pensions, and investments tax-free.",
  },
  {
    icon: Sun,
    title: "300+ Days of Sunshine",
    description:
      "Perfect weather for golf, hiking, and outdoor activities year-round.",
  },
];

export default function FiftyFiveCommunitiesPage() {
  return (
    <>
      <SchemaScript id="55-plus-communities-hub-schema" schema={fiftyFiveHubPageSchemas} />
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
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
              {" / "}
              <span className="text-slate-900">55+ Communities</span>
            </nav>
          </div>

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sun className="h-4 w-4 mr-2" />
              Active Adult Living Specialist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Find Your Perfect 55+ Community in Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Sun City, Del Webb, Heritage at Stonebridge & more—
              <br className="hidden md:block" />
              <strong>Dr. Duffy specializes in active adult living</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025001942"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 500-1942
              </a>
              <a
                href="http://drjanduffy.realscout.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-slate-100 text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-200 transition-colors"
              >
                Explore Communities
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Las Vegas 55+ Market Overview | January 2026
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">
                  25,000+
                </div>
                <div className="text-slate-300 text-sm">55+ Homes Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  $280K-$1.2M
                </div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">$140-$350</div>
                <div className="text-slate-300 text-sm">Monthly HOA Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  +5.8%
                </div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* California Relocator Section */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl p-8">
              <div className="flex items-start">
                <Palmtree className="h-10 w-10 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Relocating from California?
                  </h3>
                  <p className="text-lg text-slate-700 mb-4">
                    Many of our 55+ buyers are relocating from California—and for
                    good reason. <strong>Enjoy more home for your money</strong>{" "}
                    with no state income tax, lower property taxes, and a cost of
                    living that stretches your retirement dollars further.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">0%</div>
                      <div className="text-sm text-slate-600">
                        State Income Tax
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        50-60%
                      </div>
                      <div className="text-sm text-slate-600">
                        Less Than CA Prices
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        45 min
                      </div>
                      <div className="text-sm text-slate-600">
                        Flight to See Family
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 italic">
                    Sell your California home, buy a larger home in Las Vegas
                    with cash to spare, and enjoy your retirement tax-free.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Lifestyle Benefits */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Why Active Adults Choose Las Vegas
            </h2>
            <p className="text-lg text-slate-600 text-center mb-8 max-w-3xl mx-auto">
              Beyond the world-class amenities, Las Vegas 55+ communities offer a
              lifestyle that's hard to match anywhere else.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lifestyleBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Age Requirements */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <div className="flex items-start">
                <Users className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Understanding 55+ Age Requirements
                  </h3>
                  <div className="text-slate-700 space-y-3">
                    <p>
                      <strong>Federal HOPA Guidelines:</strong> At least 80% of
                      occupied units must have one resident 55 or older. The
                      remaining 20% can include younger residents, though
                      individual communities may be more restrictive.
                    </p>
                    <p>
                      <strong>Spouse/Partner Rules:</strong> Most communities
                      allow a spouse or partner under 55 to reside with a
                      qualifying resident. Minimum ages for non-qualifying
                      residents vary (often 40-45 minimum).
                    </p>
                    <p className="text-blue-800 font-medium">
                      Each community has specific rules. Dr. Jan Duffy provides
                      detailed guidance on requirements for any community you're
                      considering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Communities Grid */}
          <section id="communities" className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Las Vegas 55+ Communities
            </h2>
            <p className="text-lg text-slate-600 text-center mb-8">
              Click "View Homes" to explore each community in detail
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {communities.map((community) => (
                <div
                  key={community.name}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-slate-900 text-white p-6">
                    <h3 className="text-xl font-bold mb-1">{community.name}</h3>
                    <div className="flex items-center text-slate-300 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {community.location}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-4">{community.description}</p>

                    {/* Key Amenities */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {community.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                          Starting Price
                        </div>
                        <div className="font-bold text-slate-900">
                          {community.priceRange.split(" - ")[0]}+
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                          HOA Fees
                        </div>
                        <div className="font-bold text-slate-900">
                          {community.hoaFees}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                          Age Requirement
                        </div>
                        <div className="font-bold text-slate-900 text-sm">
                          {community.ageRequirement}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                          Community Size
                        </div>
                        <div className="font-bold text-slate-900">
                          {community.homes}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                      <div className="text-xs text-slate-500 uppercase tracking-wide mb-2">
                        Highlights
                      </div>
                      <ul className="space-y-1 mb-4">
                        {community.highlights.slice(0, 3).map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start text-sm text-slate-600"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {community.slug ? (
                      <Link
                        href={`/55-plus-communities/${community.slug}`}
                        className="block text-center bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                      >
                        View Homes in {community.name.split(" at ")[0]} →
                      </Link>
                    ) : (
                      <a
                        href="tel:+17025001942"
                        className="block text-center bg-slate-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-slate-700 transition-colors"
                      >
                        Call for {community.name} Info
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Amenities Overview */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              What 55+ Community Amenities Include
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Dumbbell className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Fitness & Recreation
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• State-of-the-art fitness centers</li>
                  <li>• Indoor & outdoor pools</li>
                  <li>• Tennis & pickleball courts</li>
                  <li>• Golf courses (many communities)</li>
                  <li>• Walking/biking trails</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Social & Activities
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• 100+ clubs in larger communities</li>
                  <li>• Organized travel groups</li>
                  <li>• Classes (art, dance, computers)</li>
                  <li>• Card rooms & game nights</li>
                  <li>• Community events & parties</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Convenience & Security
                </h3>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Guard-gated entries (many)</li>
                  <li>• Exterior maintenance included</li>
                  <li>• On-site restaurants (select)</li>
                  <li>• Healthcare facilities nearby</li>
                  <li>• Concierge services (luxury)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Buying in a 55+ community involves considerations beyond a
                typical purchase. You need to understand HOA rules, age
                verification processes, and how the community fits your
                lifestyle. As a{" "}
                <strong>Berkshire Hathaway HomeServices</strong> agent
                specializing in active adult communities, I guide clients through
                every step—from touring amenities to reviewing HOA documents. Many
                clients are relocating from California, and they rely on my local
                knowledge to make confident decisions."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
              </cite>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              55+ Community Buying FAQs
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  What are the age requirements for 55+ communities in Las Vegas?
                </h3>
                <p className="text-slate-600">
                  Per the Housing for Older Persons Act (HOPA), at least 80% of
                  occupied units must have one resident 55 or older. The remaining
                  20% can be younger, but some communities require all residents
                  to be 55+. Spouses can be younger in most communities.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Can I buy in a 55+ community if I'm under 55?
                </h3>
                <p className="text-slate-600">
                  Generally no, but there are exceptions. You may purchase if
                  you'll be 55 by close of escrow, or as an investor who will rent
                  to 55+ tenants. Some communities allow residents 45-54 in
                  limited circumstances. Dr. Jan can explain each community's
                  specific rules.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  What do HOA fees cover in 55+ communities?
                </h3>
                <p className="text-slate-600">
                  HOA fees typically cover access to clubhouses, pools, fitness
                  centers, golf courses, organized activities, landscaping, and
                  exterior maintenance. Fees range from $140-$350/month depending
                  on amenities. Some communities have separate golf memberships.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Why do California residents choose Las Vegas 55+ communities?
                </h3>
                <p className="text-slate-600">
                  California retirees love Las Vegas for no state income tax,
                  lower property prices (50-60% less), lower cost of living, warm
                  weather, world-class healthcare, and the ability to get more
                  home and amenities for their money. Many sell their California
                  home and buy in Las Vegas with cash to spare.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Can grandchildren visit or stay in 55+ communities?
                </h3>
                <p className="text-slate-600">
                  Yes, most communities allow guests of any age to visit and stay
                  temporarily (typically 30-90 days per year). However, children
                  cannot be permanent residents. Each community has specific guest
                  policies that Dr. Jan Duffy can explain.
                </p>
              </div>
            </div>
          </section>

          {/* Why BHHS */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Why Choose Dr. Jan Duffy for 55+ Communities?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Heart className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Specialized Expertise
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Dr. Jan understands the unique needs of 55+ buyers—from age
                    verification processes to evaluating HOA reserves and
                    understanding community rules.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Relocation Support
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Many 55+ buyers relocate from out of state. Our national BHHS
                    network provides referrals, and Dr. Jan offers virtual tours
                    and detailed community information.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Trusted Brand</h3>
                  <p className="text-slate-600 text-sm">
                    The Berkshire Hathaway name represents trust and
                    integrity—values that matter when making one of life's biggest
                    decisions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    No-Pressure Approach
                  </h3>
                  <p className="text-slate-600 text-sm">
                    55+ buyers often take time to decide. Dr. Jan provides
                    information and guidance without pressure, letting you move at
                    your own pace.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Find Your Ideal Lifestyle Match
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to explore active adult living in Las Vegas? Contact Dr. Jan
              Duffy for a free consultation and personalized community
              recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
                Request Information
              </Link>
            </div>
            <p className="text-blue-200 text-lg">
              Here to make your transition smooth, Dr. Jan{" "}
              <span role="img" aria-label="sunshine">
                ☀️
              </span>
            </p>
            <p className="mt-4 text-blue-300 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
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
