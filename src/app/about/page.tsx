import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  Award, 
  Users, 
  Home, 
  TrendingUp, 
  CheckCircle, 
  MapPin,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { agentInfo, agentStats, siteUrl } from "@/lib/site-config";
import SchemaScript from "@/components/SchemaScript";
import { combineSchemas, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/about",
  title: "About Dr. Jan Duffy | Berkshire Hathaway HomeServices Las Vegas",
  description: "Meet Dr. Jan Duffy, your trusted Berkshire Hathaway HomeServices Nevada Properties agent. Serving Las Vegas since 2008, $127M+ in transactions, Henderson & Summerlin specialist. Call (702) 500-1942.",
  keywords: [
    "Dr. Jan Duffy",
    "Berkshire Hathaway HomeServices agent",
    "Las Vegas realtor",
    "BHHS Nevada Properties",
    "Henderson real estate agent",
    "Summerlin realtor",
  ],
});

// Person Schema for Dr. Jan Duffy
const personSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy",
  jobTitle: "REALTOR®",
  description:
    "Licensed real estate agent with Berkshire Hathaway HomeServices Nevada Properties, serving Las Vegas, Henderson, and Summerlin since 2008.",
  telephone: "+17025001942",
  email: agentInfo.email,
  url: siteUrl("/about"),
  worksFor: {
    "@type": "RealEstateAgent",
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9406 W Lake Mead Blvd, Suite 100",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
    },
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Real Estate License",
    credentialNumber: "S.0197614.LLC",
  },
  knowsAbout: [
    "Las Vegas real estate",
    "Henderson properties",
    "Summerlin homes",
    "Luxury real estate",
    "Investment properties",
    "55+ communities",
    "California relocation",
  ],
};

const aboutPageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]),
  personSchema
);

const specializations = [
  {
    title: "Residential Home Sales",
    description: "Single-family homes, condos, and townhomes throughout Las Vegas and Henderson",
  },
  {
    title: "Luxury Properties ($1M+)",
    description: "The Ridges, MacDonald Highlands, Southern Highlands, and exclusive communities",
  },
  {
    title: "New Construction",
    description: "Free buyer representation with Toll Brothers, Lennar, Century Communities, and more",
  },
  {
    title: "Investment Properties",
    description: "Rental properties, fix-and-flip opportunities, and portfolio building",
  },
  {
    title: "55+ Active Adult Communities",
    description: "Sun City Summerlin, Sun City Anthem, Del Webb Lake Las Vegas expertise",
  },
  {
    title: "California Relocation",
    description: "Helping CA families transition to Nevada's tax advantages and lower costs",
  },
];

const areasServed = [
  "Las Vegas",
  "Henderson",
  "Summerlin",
  "Green Valley",
  "North Las Vegas",
  "Southern Highlands",
  "Skye Canyon",
  "Centennial Hills",
  "The Ridges",
  "Inspirada",
  "Mountains Edge",
  "Spring Valley",
];

export default function AboutPage() {
  return (
    <>
      <SchemaScript id="about-page-schema" schema={aboutPageSchemas} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Meet Your Berkshire Hathaway HomeServices Agent
            </h1>
            <p className="text-xl text-slate-600">
              Dr. Jan Duffy has been serving Las Vegas since 2008—backed by the most
              trusted name in real estate. Whether you're buying, selling, investing, or 
              relocating, you'll receive expert guidance with integrity and professionalism.
            </p>
          </div>

          {/* Agent Profile */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dr. Jan Duffy</h2>
                <p className="text-lg text-blue-600 mb-6">
                  REALTOR® | License S.0197614.LLC
                </p>

                <div className="prose prose-lg text-slate-700 mb-8 space-y-4">
                  <p>
                    When you choose to work with <strong>Berkshire Hathaway HomeServices</strong>,
                    you're choosing a legacy of trust, integrity, and excellence. I'm proud to
                    represent this iconic brand in the Las Vegas real estate market, bringing 
                    world-class resources and local expertise to every client I serve.
                  </p>
                  <p>
                    Since 2008, I've closed $127 million in transactions and
                    helped hundreds of families find their perfect home in Las Vegas, Henderson,
                    Summerlin, and throughout Southern Nevada. My expertise spans luxury properties,
                    new construction, investment real estate, 55+ active adult communities, and 
                    relocations—particularly for California families seeking Nevada's tax advantages.
                  </p>
                  <p>
                    What sets <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>{" "}
                    apart? We're backed by Warren Buffett's Berkshire Hathaway Inc.—a name synonymous
                    with financial strength and ethical standards. When you're making the biggest
                    financial decision of your life, that trust matters. You deserve an agent who 
                    puts your interests first, provides honest advice, and has the resources to 
                    deliver exceptional results.
                  </p>
                  <p>
                    I believe in treating every client like family. Whether you're a first-time 
                    buyer navigating the process for the first time, a luxury home seeker requiring 
                    discretion, or an investor building a rental portfolio, I provide the same 
                    level of dedication, expertise, and personalized attention. Real estate is 
                    more than a transaction—it's about helping people find their place in the world.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="bg-slate-50 rounded-lg p-6 mb-8">
                  <h3 className="font-bold text-slate-900 mb-4">Contact Dr. Jan Duffy</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+17025001942"
                      className="flex items-center text-slate-700 hover:text-blue-600"
                    >
                      <Phone className="h-5 w-5 mr-3 text-blue-600" />
                      <span className="font-semibold">(702) 500-1942</span>
                    </a>
                    <a
                      href={`mailto:${agentInfo.email}`}
                      className="flex items-center text-slate-700 hover:text-blue-600"
                    >
                      <Mail className="h-5 w-5 mr-3 text-blue-600" />
                      {agentInfo.email}
                    </a>
                    <div className="flex items-start text-slate-700">
                      <MapPin className="h-5 w-5 mr-3 text-blue-600 mt-0.5" />
                      <address className="not-italic">
                        9406 W Lake Mead Blvd, Suite 100<br />
                        Las Vegas, NV 89134
                      </address>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <Clock className="h-5 w-5 mr-3 text-blue-600" />
                      Mon-Fri 9am-6pm, Sat 10am-4pm, Sun by appointment
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-blue-600 pl-6 italic text-slate-700">
                  "My job isn't just to show you houses—it's to make sure you don't overpay, that
                  you understand what you're buying, and that you're protected through every step of
                  the transaction. I treat every client like family and won't stop until we achieve 
                  your real estate goals."
                  <cite className="block mt-2 text-slate-900 font-semibold not-italic">
                    — Dr. Jan Duffy, BHHS Nevada Properties
                  </cite>
                </blockquote>
              </div>

              {/* Stats & Credentials */}
              <div className="space-y-6">
                {/* Agent Photo Placeholder */}
                <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👩‍💼</div>
                    <p className="text-slate-600 font-semibold">Dr. Jan Duffy</p>
                    <p className="text-sm text-slate-500">BHHS Nevada Properties</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">Since 2008</div>
                    <div className="text-sm text-slate-600">Serving Las Vegas</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">$127M+</div>
                    <div className="text-sm text-slate-600">Volume Closed</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                    <div className="text-sm text-slate-600">Transactions</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">5.0★</div>
                    <div className="text-sm text-slate-600">Realtor.com Rating</div>
                  </div>
                </div>

                {/* Quick Services */}
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link href="/buyers" className="flex items-center text-slate-700 hover:text-blue-600">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      Home Buying Guide
                    </Link>
                    <Link href="/sellers" className="flex items-center text-slate-700 hover:text-blue-600">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      Selling Your Home
                    </Link>
                    <Link href="/home-valuation" className="flex items-center text-slate-700 hover:text-blue-600">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      Free Home Valuation
                    </Link>
                    <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-700 hover:text-blue-600">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      Browse Listings
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specializations Section */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Areas of Specialization
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Dr. Jan Duffy brings specialized expertise across multiple real estate categories. 
              Whether you're a first-time buyer, luxury home seeker, investor, or retiree looking 
              for the perfect 55+ community, you'll receive tailored guidance for your specific needs.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializations.map((spec) => (
                <div key={spec.title} className="bg-white rounded-lg p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {spec.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{spec.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why BHHS Section */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Why Berkshire Hathaway HomeServices?
            </h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
              Berkshire Hathaway HomeServices is the only real estate brand backed by Warren 
              Buffett's Berkshire Hathaway Inc. This means unmatched financial stability, 
              ethical standards, and a commitment to client service that defines every transaction.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Trusted Brand</h3>
                <p className="text-slate-300 text-sm">
                  The only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc.—a 
                  name synonymous with trust and integrity worldwide.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Global Network</h3>
                <p className="text-slate-300 text-sm">
                  50,000+ agents worldwide for seamless referrals and relocations. Whether you're 
                  moving from California or anywhere else, our network has you covered.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Ethical Standards</h3>
                <p className="text-slate-300 text-sm">
                  Rigorous ethical guidelines ensure your interests always come first. No pressure, 
                  no games—just honest advice and expert representation.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/why-berkshire-hathaway"
                className="inline-block bg-white text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-slate-100 transition-colors"
              >
                Learn More About BHHS
              </Link>
            </div>
          </section>

          {/* Areas Served */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Areas Served by BHHS Nevada Properties
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Dr. Jan Duffy serves the entire Las Vegas Valley with specialized knowledge of each 
              neighborhood's unique characteristics, price points, and lifestyle offerings. From 
              luxury estates in The Ridges to affordable new construction in North Las Vegas, 
              she provides expert guidance wherever you want to buy or sell.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {areasServed.map((area) => (
                <div key={area} className="bg-slate-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors">
                  <Home className="h-5 w-5 mx-auto mb-2 text-blue-600" />
                  <span className="text-slate-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/neighborhoods"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
              >
                Explore All Neighborhoods <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              What Clients Say About Dr. Jan Duffy
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              {agentStats.averageRating.toFixed(1)} stars across {agentStats.reviewCount} reviews on{" "}
              <a href={agentStats.reviewSourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
                {agentStats.reviewSourceName}
              </a>
              , and {agentStats.transactionsClosed}+ transactions closed in Las Vegas.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Questions about buying or selling in Las Vegas? Call or text Dr. Jan Duffy today 
              for a free consultation. Whether you're ready to start your search or just exploring 
              options, she's here to help.
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
        <div className="text-center text-sm text-slate-500 mt-8">
          Last Updated: January 2026
        </div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
