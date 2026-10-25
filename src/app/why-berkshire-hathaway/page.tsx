import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Shield, Users, Globe, Award, TrendingUp, CheckCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { siteUrl } from "@/lib/site-config";
import SchemaScript from "@/components/SchemaScript";
import { combineSchemas, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/why-berkshire-hathaway",
  title: "Why Choose Berkshire Hathaway HomeServices | Las Vegas Real Estate",
  description: "Discover why Berkshire Hathaway HomeServices is the most trusted name in real estate. Backed by Warren Buffett, with 50,000+ agents worldwide. Work with BHHS Nevada Properties today.",
  keywords: [
    "Berkshire Hathaway HomeServices",
    "why choose BHHS",
    "Warren Buffett real estate",
    "trusted real estate brand",
    "BHHS Nevada Properties",
  ],
});

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Berkshire Hathaway HomeServices",
  url: "https://www.bhhs.com",
  logo: `${siteUrl()}/Image/agent1.jpg`,
  description:
    "Berkshire Hathaway HomeServices is a real estate brokerage network, part of Berkshire Hathaway Inc., one of the world's most respected and trusted companies.",
  parentOrganization: {
    "@type": "Corporation",
    name: "Berkshire Hathaway Inc.",
    founder: "Warren Buffett",
  },
};

const whyBerkshirePageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Why Berkshire Hathaway", url: "/why-berkshire-hathaway" },
  ]),
  organizationSchema
);

export default function WhyBerkshireHathawayPage() {
  return (
    <>
      <SchemaScript id="why-berkshire-hathaway-page-schema" schema={whyBerkshirePageSchemas} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              The Most Trusted Name in Real Estate
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Why Choose Berkshire Hathaway HomeServices?
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              When you work with a <strong>Berkshire Hathaway HomeServices</strong> agent, you're
              backed by a name synonymous with trust, ethical standards, and financial strength—the
              same principles that built Warren Buffett's empire.
            </p>
          </div>

          {/* Warren Buffett Section */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Backed by Warren Buffett's Legacy
                </h2>
                <p className="text-slate-300 mb-6">
                  <strong>Berkshire Hathaway HomeServices</strong> is the only real estate brand
                  backed by Berkshire Hathaway Inc., Warren Buffett's legendary holding company.
                  This means unmatched financial stability and a commitment to ethical business
                  practices that spans decades.
                </p>
                <p className="text-slate-300">
                  When you see the Berkshire Hathaway name, you know you're working with
                  professionals who uphold the highest standards in the industry.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">🏛️</div>
                <p className="text-2xl font-bold mb-2">Fortune #1</p>
                <p className="text-slate-400">
                  Berkshire Hathaway Inc. consistently ranks among the top companies in the world
                </p>
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              The BHHS Advantage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Unmatched Trust</h3>
                <p className="text-slate-600">
                  The Berkshire Hathaway name represents integrity and reliability. Our agents
                  uphold these values in every transaction.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Global Network</h3>
                <p className="text-slate-600">
                  50,000+ agents worldwide means seamless referrals for relocations and connections
                  to buyers from across the globe.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">World-Class Marketing</h3>
                <p className="text-slate-600">
                  Your property gets exposure through the most recognized real estate brand in the
                  world, reaching qualified buyers everywhere.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ethical Standards</h3>
                <p className="text-slate-600">
                  BHHS agents adhere to strict ethical guidelines that go beyond industry
                  requirements. Your interests always come first.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Financial Strength</h3>
                <p className="text-slate-600">
                  Backed by one of the most financially secure companies in the world. Our stability
                  means we'll be here for you long-term.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Results</h3>
                <p className="text-slate-600">
                  BHHS Nevada Properties has helped thousands of families achieve their real estate
                  goals in Southern Nevada.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Berkshire Hathaway HomeServices By The Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
                <div className="text-blue-200">Agents Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">1,500+</div>
                <div className="text-blue-200">Offices Globally</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">$138B+</div>
                <div className="text-blue-200">Sales Volume (2024)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">#1</div>
                <div className="text-blue-200">Most Trusted Brand</div>
              </div>
            </div>
          </section>

          {/* Local Expert Section */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Your Local BHHS Expert in Las Vegas
                </h2>
                <p className="text-lg text-slate-700 mb-6">
                  Dr. Jan Duffy brings the power of <strong>Berkshire Hathaway HomeServices</strong>{" "}
                  to Las Vegas, Henderson, Summerlin, and all of Southern Nevada. Serving the area 
                  since 2008 with $127M+ in Dr. Duffy Group career sales, you get global brand strength
                  with hometown expertise.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Serving Las Vegas since 2008",
                    "$127M+ in Dr. Duffy Group career sales",
                    "500+ team sales",
                    "Specializing in luxury, investment, and relocation",
                    "Deep knowledge of every Las Vegas neighborhood",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                >
                  Meet Dr. Jan Duffy →
                </Link>
              </div>
              <div className="bg-slate-100 rounded-lg p-8">
                <blockquote className="text-lg text-slate-700 italic mb-4">
                  "When clients ask why they should choose a Berkshire Hathaway HomeServices agent,
                  I tell them: you're not just getting me—you're getting a global network of 50,000
                  agents, world-class marketing, and a brand that's synonymous with trust."
                </blockquote>
                <cite className="text-slate-900 font-semibold">
                  — Dr. Jan Duffy, BHHS Nevada Properties
                </cite>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions About BHHS
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is Berkshire Hathaway HomeServices owned by Warren Buffett?",
                  a: "Berkshire Hathaway HomeServices is part of HSF Affiliates LLC, which is a joint venture of Berkshire Hathaway Inc. (Warren Buffett's company) and HomeServices of America. The brand carries the trusted Berkshire Hathaway name and upholds its values of integrity and excellence.",
                },
                {
                  q: "What makes BHHS different from other real estate companies?",
                  a: "BHHS is the only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. This provides unmatched financial stability, a global network of 50,000+ agents, world-class marketing resources, and a commitment to ethical standards that goes beyond industry requirements.",
                },
                {
                  q: "Does using a Berkshire Hathaway agent cost more?",
                  a: "No. Commission rates are negotiable and comparable to other brokerages. The value you receive—global marketing exposure, trusted brand recognition, and experienced agents—often helps homes sell faster and for more money.",
                },
                {
                  q: "Can BHHS help with relocations to Las Vegas?",
                  a: "Yes! Our global network makes relocations seamless. Dr. Jan Duffy can coordinate with BHHS agents in your current city while providing expert guidance on Las Vegas neighborhoods, schools, and communities.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the Berkshire Hathaway Difference
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Ready to work with the most trusted name in real estate? Contact Dr. Jan Duffy today.
            </p>
            <a
              href="tel:+17025001942"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-1942
            </a>
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
