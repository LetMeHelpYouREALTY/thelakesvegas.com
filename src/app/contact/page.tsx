import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import { Phone, Mail, MapPin, Clock, Calendar, Star, Users, Shield } from "lucide-react";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";
import { agentInfo } from "@/lib/site-config";
import SchemaScript from "@/components/SchemaScript";
import FAQSection from "@/components/sections/FAQSection";
import LocalServiceAreaBlurb from "@/components/seo/LocalServiceAreaBlurb";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  path: "/contact",
  title: "Contact Dr. Jan Duffy | Berkshire Hathaway HomeServices Las Vegas",
  description: "Contact Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Schedule an appointment, get directions, or call (702) 500-1942. Las Vegas, Henderson, Summerlin real estate expert.",
  keywords: [
    "contact real estate agent Las Vegas",
    "Berkshire Hathaway contact",
    "Dr. Jan Duffy phone",
    "Las Vegas realtor contact",
    "schedule real estate appointment",
  ],
});

const contactPageLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: "+17025001942",
    email: agentInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "9406 W Lake Mead Blvd, Suite 100",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
      addressCountry: "US",
    },
  },
};

const contactFaqs = [
  {
    question: "What should I expect during my first consultation?",
    answer:
      "Your consultation is a no-pressure conversation about your real estate goals. We'll discuss your timeline, budget, preferences, and answer any questions you have about the Las Vegas market. Whether you're buying, selling, or exploring options, I'll provide honest guidance tailored to your situation.",
  },
  {
    question: "Do I need to be pre-approved before scheduling a showing?",
    answer:
      "For buyers, having a pre-approval letter strengthens your position, but it's not required for an initial consultation. I can connect you with trusted local lenders during our first meeting if you haven't started the financing process yet.",
  },
  {
    question: "How quickly can you respond to inquiries?",
    answer:
      "I typically respond to calls, texts, and emails within 2 hours during business hours (9am-6pm daily). For urgent matters, calling or texting (702) 500-1942 is the fastest way to reach me.",
  },
  {
    question: "Do you charge for consultations?",
    answer:
      "No. Initial consultations are always free and without obligation. Whether you're ready to move forward or just exploring your options, there's never any pressure.",
  },
];

const contactPageSchemas = combineSchemas(
  generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]),
  contactPageLd,
  generateFAQSchema(contactFaqs)
);

export default function ContactPage() {
  return (
    <>
      <SchemaScript id="contact-page-schema" schema={contactPageSchemas} />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Contact Dr. Jan Duffy
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Questions about Las Vegas real estate? Your{" "}
              <strong>Berkshire Hathaway HomeServices</strong> expert is here to help. 
              Schedule an appointment or reach out directly.
            </p>
            <LocalServiceAreaBlurb topic="Las Vegas, Henderson, and Clark County real estate support" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info & Map */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-slate-700 mb-8">
                Whether you're buying your first home, selling a luxury property, or exploring
                investment opportunities, I'm here to provide expert guidance backed by the trusted{" "}
                <strong>Berkshire Hathaway HomeServices</strong> brand. Serving Las Vegas since 2008 
                with $127M+ in Dr. Duffy Group career sales.
              </p>

              {/* NAP Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone (Call or Text)</h3>
                    <a
                      href="tel:+17025001942"
                      className="text-2xl font-bold text-blue-600 hover:text-blue-700"
                    >
                      (702) 500-1942
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Available 7 days a week, 9am-6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${agentInfo.email}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {agentInfo.email}
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Typically respond within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Address</h3>
                    <address className="not-italic text-slate-700">
                      Berkshire Hathaway HomeServices<br />
                      Nevada Properties<br />
                      9406 W Lake Mead Blvd, Suite 100<br />
                      Las Vegas, NV 89134
                    </address>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Hours</h3>
                    <p className="text-slate-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Available by appointment outside these hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-xl overflow-hidden shadow-md mb-4">
                <iframe
                  src="https://maps.google.com/maps?q=9406+W+Lake+Mead+Blvd+Suite+100,+Las+Vegas,+NV+89134&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Berkshire Hathaway HomeServices Nevada Properties - Office Location"
                  className="w-full"
                />
              </div>
              
              {/* Map Action Buttons */}
              <div className="flex gap-3 mb-8">
                <a
                  href="https://www.google.com/maps/dir//9406+W+Lake+Mead+Blvd+Suite+100,+Las+Vegas,+NV+89134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </a>
                <a
                  href="https://maps.google.com/?q=Berkshire+Hathaway+HomeServices+Nevada+Properties+9406+W+Lake+Mead+Blvd+Las+Vegas+NV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  View on Google Maps
                </a>
              </div>

              {/* Credentials */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>Dr. Jan Duffy, REALTOR®</strong><br />
                  License S.0197614.LLC<br />
                  Berkshire Hathaway HomeServices Nevada Properties
                </p>
              </div>
            </div>

            {/* Schedule Appointment - Calendly Widget */}
            <div>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-blue-600 text-white p-6 text-center">
                  <Calendar className="h-10 w-10 mx-auto mb-3" />
                  <h2 className="text-2xl font-bold mb-2">Schedule an Appointment</h2>
                  <p className="text-blue-100">
                    Book a time that works for you—phone consultation, property showing, 
                    or in-person meeting at our office.
                  </p>
                </div>
                <CalendlyWidget height="600px" />
              </div>

              {/* Why Contact BHHS */}
              <div className="mt-6 bg-slate-900 text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Why Contact Berkshire Hathaway HomeServices?</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">Trusted Brand:</strong> The only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Star className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">Proven Results:</strong> $127M+ in Dr. Duffy Group career sales serving Las Vegas since 2008.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">Global Network:</strong> 50,000+ agents worldwide for seamless relocations and referrals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas Section */}
          <section className="max-w-5xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Areas We Serve
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Dr. Jan Duffy provides expert real estate services throughout the Las Vegas Valley. 
              Whether you're buying, selling, or investing in any of these communities, contact us 
              for personalized guidance backed by Berkshire Hathaway HomeServices.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
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
              ].map((area) => (
                <div key={area} className="bg-slate-50 rounded-lg p-3 text-center hover:bg-blue-50 transition-colors">
                  <span className="text-slate-700 font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Contact Options */}
          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Prefer to Reach Out Directly?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="tel:+17025001942"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl transition-colors"
              >
                <Phone className="h-8 w-8 mr-4" />
                <div className="text-left">
                  <div className="font-bold text-lg">Call Now</div>
                  <div className="text-blue-100">(702) 500-1942</div>
                </div>
              </a>
              <a
                href={`mailto:${agentInfo.email}`}
                className="flex items-center justify-center bg-slate-700 hover:bg-slate-800 text-white p-6 rounded-xl transition-colors"
              >
                <Mail className="h-8 w-8 mr-4" />
                <div className="text-left">
                  <div className="font-bold text-lg">Send Email</div>
                  <div className="text-slate-300">{agentInfo.email}</div>
                </div>
              </a>
            </div>
          </section>

          <FAQSection
            className="!py-12 bg-slate-50"
            title="Frequently Asked Questions"
            subtitle="Consultations, response times, and how to reach Dr. Jan Duffy"
            faqs={contactFaqs}
          />
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
