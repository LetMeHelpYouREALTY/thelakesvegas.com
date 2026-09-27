import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  MessageSquare,
  Camera,
  FileText,
  Award,
  Users,
  Home,
  Building,
  Heart,
} from "lucide-react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import SchemaScript from "@/components/SchemaScript";
import { combineSchemas, generateBreadcrumbSchema } from "@/lib/schema";
import {
  businessInfo,
  gbpDescription,
  gbpFAQs,
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/gbp-schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/google-business",
  title: "Dr. Jan Duffy, REALTOR® Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Dr. Jan Duffy is a trusted Las Vegas REALTOR® with Berkshire Hathaway HomeServices Nevada Properties. Specializing in Summerlin, Henderson, 55+ communities, California relocation, and luxury homes. Call (702) 500-1942.",
  keywords: [
    "Dr. Jan Duffy realtor",
    "Las Vegas real estate agent",
    "Berkshire Hathaway HomeServices Las Vegas",
    "Summerlin realtor",
    "Henderson real estate agent",
    "55+ communities Las Vegas",
    "California relocation Las Vegas",
  ],
  ogImagePath: "/Image/agent1.jpg",
  openGraphOverrides: {
    title: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    description:
      "Trusted Las Vegas REALTOR® serving since 2008. Summerlin, Henderson, luxury homes, 55+ communities.",
    type: "profile",
  },
});

export default function GoogleBusinessPage() {
  const pageSchemas = combineSchemas(
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Business Profile", url: "/google-business" },
    ]),
    generateLocalBusinessSchema(),
    generateFAQSchema(),
  );

  return (
    <>
      <SchemaScript id="google-business-schema" schema={pageSchemas} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero - NAP Prominent */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="h-6 w-6 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">Berkshire Hathaway HomeServices</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Dr. Jan Duffy
                  </h1>
                  <p className="text-xl text-blue-200 mb-2">REALTOR® | License {businessInfo.license}</p>
                  <p className="text-slate-300 mb-6">Nevada Properties</p>
                  
                  {/* NAP - Exact match to GBP */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{businessInfo.address.streetAddress}</p>
                        <p>{businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <a href={`tel:${businessInfo.phone.tel}`} className="font-medium hover:text-blue-300">
                        {businessInfo.phone.display}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <a href={`mailto:${businessInfo.email}`} className="hover:text-blue-300">
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Rating & CTA */}
                <div className="text-center bg-white/10 rounded-xl p-8">
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-3xl font-bold mb-2">4.9 / 5.0</p>
                  <p className="text-blue-200 mb-6">200+ Client Reviews</p>
                  <a
                    href={`tel:${businessInfo.phone.tel}`}
                    className="inline-block w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-lg font-bold text-lg transition-colors"
                  >
                    Call Now: {businessInfo.phone.display}
                  </a>
                  <p className="text-sm text-blue-300 mt-3">Free Consultation</p>
                </div>
              </div>
            </div>
          </section>

          {/* Business Hours */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-900">Business Hours</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div><span className="font-medium">Monday:</span> 9am - 6pm</div>
                <div><span className="font-medium">Tuesday:</span> 9am - 6pm</div>
                <div><span className="font-medium">Wednesday:</span> 9am - 6pm</div>
                <div><span className="font-medium">Thursday:</span> 9am - 6pm</div>
                <div><span className="font-medium">Friday:</span> 9am - 6pm</div>
                <div><span className="font-medium">Saturday:</span> 10am - 4pm</div>
                <div><span className="font-medium">Sunday:</span> By Appointment</div>
              </div>
            </div>
          </section>

          {/* About - 750 Word Description Structure */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">About Dr. Jan Duffy</h2>
            
            {/* Section 1: Who We Are */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Experience & Background
              </h3>
              <p className="text-slate-700 leading-relaxed">{gbpDescription.whoWeAre}</p>
            </div>
            
            {/* Section 2: What We Do */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Home className="h-5 w-5 text-blue-600" />
                Services & Value
              </h3>
              <p className="text-slate-700 leading-relaxed">{gbpDescription.whatWeDo}</p>
            </div>
            
            {/* Section 3: Where We Serve */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Areas Served
              </h3>
              <p className="text-slate-700 leading-relaxed">{gbpDescription.whereWeServe}</p>
            </div>
          </section>

          {/* Services - Each creates searchable GBP field */}
          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Real Estate Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {businessInfo.services.map((service) => (
                <div key={service.name} className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">{service.name}</h3>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Service Areas - Distance factor */}
          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Service Areas</h2>
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Primary Markets</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> Las Vegas, NV</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> Summerlin, NV</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Secondary Markets</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> Henderson, NV</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> North Las Vegas, NV</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Full Coverage</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> Clark County, NV</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> All Las Vegas Valley</li>
                  </ul>
                </div>
              </div>
              
              {/* Neighborhood Specialties */}
              <div className="mt-8 pt-8 border-t border-blue-200">
                <h3 className="font-bold text-slate-900 mb-4">Neighborhood Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {["Summerlin", "Henderson", "Green Valley", "The Ridges", "Southern Highlands", "Centennial Hills", "Skye Canyon", "Inspirada", "Mountains Edge", "North Las Vegas"].map((area) => (
                    <Link
                      key={area}
                      href={`/neighborhoods/${area.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 hover:bg-blue-100 transition-colors"
                    >
                      {area}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section - Extra ranking boost */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {gbpFAQs.map((faq: { question: string; answer: string }, index: number) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Review CTA - Prominence factor */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-8 text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Your Review Helps Others Find Quality Service
              </h2>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                If Dr. Jan helped you buy or sell a home, please consider sharing your experience.
                Mention your neighborhood, type of transaction, and what made the experience valuable.
              </p>
              <a
                href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Leave a Google Review
              </a>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Contact Dr. Jan Duffy for a free consultation about buying or selling in Las Vegas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${businessInfo.phone.tel}`}
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {businessInfo.phone.display}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Message
                </Link>
              </div>
              <p className="text-slate-400 text-sm mt-6">
                {businessInfo.address.streetAddress}, {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
              </p>
            </div>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <Footer />
    </>
  );
}
