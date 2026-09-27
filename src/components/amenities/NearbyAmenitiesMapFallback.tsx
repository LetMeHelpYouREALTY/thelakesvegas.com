"use client";

import {
  amenityCategories,
  communityMapCenter,
  curatedAmenitiesForCategory,
  mapsEmbedUrl,
  placeDirectionsUrl,
  type AmenityCategoryId,
} from "@/lib/nearby-amenities-data";

type NearbyAmenitiesMapFallbackProps = {
  className?: string;
  activeCategory: AmenityCategoryId;
  onCategoryChange: (id: AmenityCategoryId) => void;
};

export default function NearbyAmenitiesMapFallback({
  className = "",
  activeCategory,
  onCategoryChange,
}: NearbyAmenitiesMapFallbackProps) {
  const list = curatedAmenitiesForCategory(activeCategory);
  const embedSrc = mapsEmbedUrl();

  return (
    <div className={className}>
      <p className="mb-4 text-sm text-slate-600 rounded-lg bg-amber-50 border border-amber-100 px-4 py-3">
        Interactive amenity search uses Google Maps when{" "}
        <code className="text-xs">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> is configured. Below is a
        map centered on {communityMapCenter.nameWithCity} plus verified nearby places for the
        selected category.
      </p>
      <div
        role="tablist"
        aria-label="Filter nearby amenities by category"
        className="flex flex-wrap gap-2 mb-4"
      >
        {amenityCategories.map((cat) => {
          const selected = cat.id === activeCategory;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onCategoryChange(cat.id)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                selected
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-800 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white min-h-[420px]">
          <iframe
            title={`Map of ${communityMapCenter.nameWithCity}`}
            src={embedSrc}
            className="w-full h-[420px] md:h-[480px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div
          role="tabpanel"
          aria-label={`${activeCategory} near The Lakes`}
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm min-h-[420px]"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-3">
            {amenityCategories.find((c) => c.id === activeCategory)?.label ?? "Places"} near The
            Lakes
          </h3>
          {list.length === 0 ? (
            <p className="text-slate-600 text-sm">
              No curated listings in this category yet — use the interactive map after adding your
              Google Maps API key, or contact Dr. Jan Duffy for local recommendations.
            </p>
          ) : (
            <ul className="space-y-4">
              {list.map((place) => {
                const fullAddress = `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`;
                return (
                  <li key={place.name} className="border-b border-slate-100 pb-3 last:border-0">
                    <p className="font-semibold text-slate-900">{place.name}</p>
                    <p className="text-sm text-slate-600">{fullAddress}</p>
                    {place.note ? (
                      <p className="text-sm text-slate-500 mt-1">{place.note}</p>
                    ) : null}
                    <a
                      href={placeDirectionsUrl(place.name, fullAddress)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Directions
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
