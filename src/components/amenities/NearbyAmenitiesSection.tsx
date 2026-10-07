import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { theLakesPrimaryKeyword } from "@/lib/the-lakes-aeo";
import NearbyAmenitiesMapLoader from "@/components/amenities/NearbyAmenitiesMapLoader";

type NearbyAmenitiesSectionProps = {
  id?: string;
  className?: string;
  /** Smaller heading for secondary pages */
  variant?: "home" | "page";
};

export default function NearbyAmenitiesSection({
  id = "whats-nearby",
  className = "",
  variant = "page",
}: NearbyAmenitiesSectionProps) {
  const heading =
    variant === "home"
      ? `Life near ${theLakesPrimaryKeyword}`
      : `What's nearby ${theLakesPrimaryKeyword}`;

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 md:py-20 bg-white border-t border-slate-200 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div className="max-w-3xl">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden />
                Nearby amenities
              </p>
              <h2
                id={`${id}-heading`}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
              >
                {heading}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Explore grocery, parks, healthcare, golf, and everyday errands around The Lakes —
                filter the map by category, then dive into the full amenities guide.
              </p>
            </div>
            <Link
              href="/amenities"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition-colors shrink-0"
            >
              Full amenities guide
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <NearbyAmenitiesMapLoader compact={variant !== "home"} />
          <p className="mt-6 text-center text-sm text-slate-600">
            <Link href="/amenities" className="text-blue-600 font-semibold hover:underline">
              Nearby amenities in The Lakes, Las Vegas
            </Link>{" "}
            — dining, parks, hospitals, shopping, and commute tips.
          </p>
        </div>
      </div>
    </section>
  );
}
