import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Facebook, Instagram, Linkedin } from "lucide-react";
import {
  agentInfo,
  sitePublicHostname,
  siteUrl,
  theLakesFacebook,
  theLakesInstagram,
} from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">Berkshire Hathaway HomeServices</h3>
            <p className="text-slate-300 mb-4 text-sm">
              Nevada Properties - Your trusted real estate partner in Las Vegas, Henderson, and
              Summerlin. Backed by Warren Buffett's legacy of trust.
            </p>
            <div className="flex space-x-4">
              <a
                href={theLakesFacebook.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label={`${theLakesFacebook.pageName} on Facebook`}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={theLakesInstagram.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="The Lakes Las Vegas on Instagram (@thelakesinlasvegas)"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="http://drjanduffy.realscout.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Search Las Vegas Homes"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="http://drjanduffy.realscout.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  All Properties
                </a>
              </li>
              <li>
                <Link
                  href="/listings"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Las Vegas listings on this site
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Nearby Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Neighborhoods
                </Link>
              </li>
              <li>
                <Link
                  href="/why-berkshire-hathaway"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Why BHHS
                </Link>
              </li>
              <li>
                <Link
                  href="/market-report"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Market Report
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  About Dr. Jan
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Real Estate Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/buyers"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home Buying
                </Link>
              </li>
              <li>
                <Link
                  href="/buyers/california-relocator"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  California Relocators
                </Link>
              </li>
              <li>
                <Link
                  href="/sellers"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home Selling
                </Link>
              </li>
              <li>
                <Link
                  href="/luxury-homes"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Luxury Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/55-plus-communities"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  55+ Communities
                </Link>
              </li>
              <li>
                <Link
                  href="/new-construction"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  New Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/market-insights"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Market Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/home-valuation"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Home valuation
                </Link>
              </li>
              <li>
                <Link
                  href="/google-business"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Google Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - NAP (Name, Address, Phone) */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Dr. Jan Duffy</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  9406 W Lake Mead Blvd, Suite 100
                  <br />
                  Las Vegas, NV 89134
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href="tel:+17025001942"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  (702) 500-1942
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" />
                <Link
                  href={`mailto:${agentInfo.email}`}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {agentInfo.email}
                </Link>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" aria-hidden />
                <a
                  href={siteUrl("/")}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                  aria-label={`Visit ${sitePublicHostname()} (official website)`}
                >
                  {sitePublicHostname()}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Berkshire Hathaway HomeServices Nevada Properties. All Rights
              Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/sitemap.xml" className="text-slate-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-slate-300 text-xs mt-4 text-center">
            Dr. Jan Duffy, REALTOR® | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada
            Properties
          </p>
          <p className="text-slate-400 text-xs mt-2 text-center max-w-3xl mx-auto">
            When you work with a Berkshire Hathaway HomeServices agent, you're backed by a name
            synonymous with trust, ethical standards, and financial strength.
          </p>
        </div>
      </div>
    </footer>
  );
}
