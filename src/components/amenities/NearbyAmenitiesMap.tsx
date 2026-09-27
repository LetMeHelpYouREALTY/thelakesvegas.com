"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  amenityCategories,
  communityMapCenter,
  curatedAmenitiesForCategory,
  placeDirectionsUrl,
  type AmenityCategoryId,
} from "@/lib/nearby-amenities-data";
import NearbyAmenitiesMapFallback from "@/components/amenities/NearbyAmenitiesMapFallback";

const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();

type NearbyAmenitiesMapProps = {
  className?: string;
  /** Shorter copy on embedded sections */
  compact?: boolean;
};

let mapsScriptPromise: Promise<void> | null = null;

function loadGoogleMapsScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if (window.google?.maps?.Map) return Promise.resolve();
  if (mapsScriptPromise) return mapsScriptPromise;

  mapsScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-nearby-amenities-maps="1"]');
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("maps script error")));
      return;
    }
    const script = document.createElement("script");
    script.dataset.nearbyAmenitiesMaps = "1";
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&libraries=places&v=weekly`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("maps script error"));
    document.head.appendChild(script);
  });

  return mapsScriptPromise;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildInfoWindowContent(opts: {
  name: string;
  address?: string;
  rating?: number;
  lat: number;
  lng: number;
}): string {
  const ratingLine =
    opts.rating != null && !Number.isNaN(opts.rating)
      ? `<p class="text-sm text-slate-600">Rating: ${opts.rating.toFixed(1)} / 5</p>`
      : "";
  const addressLine = opts.address
    ? `<p class="text-sm text-slate-700">${escapeHtml(opts.address)}</p>`
    : "";
  const dirUrl = placeDirectionsUrl(opts.name, opts.address ?? `${opts.lat},${opts.lng}`);
  return `<div class="p-1 max-w-xs"><strong>${escapeHtml(opts.name)}</strong>${ratingLine}${addressLine}<p class="mt-2"><a href="${dirUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold">Directions</a></p></div>`;
}

export default function NearbyAmenitiesMap({ className = "", compact = false }: NearbyAmenitiesMapProps) {
  const listId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapHostRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);

  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(amenityCategories[0].id);
  const [useFallback, setUseFallback] = useState(!MAPS_API_KEY);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    if (useFallback || !containerRef.current) return;
    const node = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [useFallback]);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const addCommunityMarker = useCallback((map: google.maps.Map) => {
    if (communityMarkerRef.current) {
      communityMarkerRef.current.setMap(null);
    }
    const marker = new google.maps.Marker({
      map,
      position: { lat: communityMapCenter.latitude, lng: communityMapCenter.longitude },
      title: communityMapCenter.nameWithCity,
      icon: {
        url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      },
    });
    marker.addListener("click", () => {
      infoWindowRef.current?.setContent(
        buildInfoWindowContent({
          name: communityMapCenter.nameWithCity,
          address: communityMapCenter.hoaOfficeAddress,
          lat: communityMapCenter.latitude,
          lng: communityMapCenter.longitude,
        })
      );
      infoWindowRef.current?.open({
        map,
        anchor: marker,
      });
    });
    if (!infoWindowRef.current) {
      infoWindowRef.current = new google.maps.InfoWindow();
    }
    communityMarkerRef.current = marker;
  }, []);

  const searchNearby = useCallback(
    async (map: google.maps.Map, categoryId: AmenityCategoryId) => {
      const category = amenityCategories.find((c) => c.id === categoryId);
      if (!category) return;

      clearMarkers();
      addCommunityMarker(map);
      setStatusMessage("Loading nearby places…");

      const center = { lat: communityMapCenter.latitude, lng: communityMapCenter.longitude };
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(center);

      const addPlaceMarker = (opts: {
        name: string;
        lat: number;
        lng: number;
        address?: string;
        rating?: number;
      }) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: opts.lat, lng: opts.lng },
          title: opts.name,
        });
        marker.addListener("click", () => {
          infoWindowRef.current?.setContent(
            buildInfoWindowContent({
              name: opts.name,
              address: opts.address,
              rating: opts.rating,
              lat: opts.lat,
              lng: opts.lng,
            })
          );
          infoWindowRef.current?.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
        bounds.extend({ lat: opts.lat, lng: opts.lng });
      };

      // Curated markers (always shown for this category)
      for (const place of curatedAmenitiesForCategory(categoryId)) {
        const geocodeQuery = `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`;
        addPlaceMarker({
          name: place.name,
          lat: place.latitude,
          lng: place.longitude,
          address: geocodeQuery,
        });
      }

      let dynamicCount = 0;

      try {
        const placesLib = (await google.maps.importLibrary("places")) as {
          Place?: {
            searchNearby: (req: Record<string, unknown>) => Promise<{ places?: unknown[] }>;
          };
          SearchNearbyRankPreference?: { POPULARITY: string };
        };

        if (placesLib.Place?.searchNearby) {
          const { places } = await placesLib.Place.searchNearby({
            fields: ["displayName", "location", "formattedAddress", "rating", "googleMapsURI"],
            locationRestriction: {
              center,
              radius: communityMapCenter.searchRadiusMeters,
            },
            includedPrimaryTypes: category.primaryTypes.slice(0, 1),
            maxResultCount: 12,
            rankPreference: placesLib.SearchNearbyRankPreference?.POPULARITY ?? "POPULARITY",
          });

          for (const raw of places ?? []) {
            const p = raw as {
              displayName?: string | { text?: string };
              location?: { lat: () => number; lng: () => number } | { lat: number; lng: number };
              formattedAddress?: string;
              rating?: number;
            };
            const name =
              typeof p.displayName === "string"
                ? p.displayName
                : p.displayName?.text ?? "Place";
            let lat: number | undefined;
            let lng: number | undefined;
            if (p.location && typeof (p.location as { lat: () => number }).lat === "function") {
              lat = (p.location as { lat: () => number; lng: () => number }).lat();
              lng = (p.location as { lat: () => number; lng: () => number }).lng();
            } else if (p.location) {
              lat = (p.location as { lat: number; lng: number }).lat;
              lng = (p.location as { lat: number; lng: number }).lng;
            }
            if (lat == null || lng == null) continue;
            addPlaceMarker({
              name,
              lat,
              lng,
              address: p.formattedAddress,
              rating: p.rating,
            });
            dynamicCount += 1;
          }
        } else {
          throw new Error("Place.searchNearby unavailable");
        }
      } catch {
        await new Promise<void>((resolve) => {
          const service = new google.maps.places.PlacesService(map);
          service.nearbySearch(
            {
              location: new google.maps.LatLng(center.lat, center.lng),
              radius: communityMapCenter.searchRadiusMeters,
              type: category.legacyTypes[0],
            },
            (results, status) => {
              if (status === "OK" && results) {
                for (const r of results.slice(0, 12)) {
                  const loc = r.geometry?.location;
                  if (!loc) continue;
                  const lat = loc.lat();
                  const lng = loc.lng();
                  addPlaceMarker({
                    name: r.name ?? "Place",
                    lat,
                    lng,
                    address: r.vicinity ?? r.formatted_address,
                    rating: r.rating,
                  });
                  dynamicCount += 1;
                }
              }
              resolve();
            }
          );
        });
      }

      if (markersRef.current.length > 1) {
        map.fitBounds(bounds);
      } else {
        map.setCenter(center);
      }

      setStatusMessage(
        dynamicCount > 0
          ? `Showing ${dynamicCount} nearby ${category.label.toLowerCase()} (plus The Lakes).`
          : `Showing curated ${category.label.toLowerCase()} near The Lakes.`
      );
    },
    [addCommunityMarker, clearMarkers]
  );

  useEffect(() => {
    if (!shouldLoadMap || useFallback || !mapHostRef.current) return;
    let cancelled = false;

    (async () => {
      try {
        await loadGoogleMapsScript();
        if (cancelled || !mapHostRef.current) return;

        const map = new google.maps.Map(mapHostRef.current, {
          center: { lat: communityMapCenter.latitude, lng: communityMapCenter.longitude },
          zoom: 13,
          ...(MAP_ID ? { mapId: MAP_ID } : {}),
          mapTypeControl: !compact,
          streetViewControl: !compact,
          fullscreenControl: true,
        });
        mapRef.current = map;
        infoWindowRef.current = new google.maps.InfoWindow();
        await searchNearby(map, activeCategory);
      } catch {
        if (!cancelled) setUseFallback(true);
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- init once when shouldLoadMap flips
  }, [shouldLoadMap, useFallback]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || useFallback) return;
    void searchNearby(map, activeCategory);
  }, [activeCategory, searchNearby, useFallback]);

  if (useFallback) {
    return (
      <NearbyAmenitiesMapFallback
        className={className}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
    );
  }

  return (
    <div ref={containerRef} className={className}>
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
              id={`${listId}-tab-${cat.id}`}
              aria-selected={selected}
              aria-controls={`${listId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveCategory(cat.id)}
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
      <div
        id={`${listId}-panel`}
        role="tabpanel"
        aria-labelledby={`${listId}-tab-${activeCategory}`}
        className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 min-h-[420px]"
      >
        {!shouldLoadMap ? (
          <div
            className="flex h-[420px] md:h-[480px] items-center justify-center text-slate-600 text-sm"
            aria-live="polite"
          >
            Map loads when you scroll here…
          </div>
        ) : (
          <div
            ref={mapHostRef}
            className="w-full h-[420px] md:h-[480px]"
            aria-label={`Interactive map of amenities near ${communityMapCenter.nameWithCity}`}
          />
        )}
      </div>
      {statusMessage ? (
        <p className="mt-3 text-sm text-slate-600" aria-live="polite">
          {statusMessage}
        </p>
      ) : null}
    </div>
  );
}
