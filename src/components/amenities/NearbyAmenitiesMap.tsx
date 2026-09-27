"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  amenityCategories,
  communityMapCenter,
  curatedAmenitiesForCategory,
  placeDirectionsUrl,
  type AmenityCategoryId,
} from "@/lib/nearby-amenities-data";
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/load-google-maps";
import { searchCategory } from "@/lib/nearby-amenities-search";
import NearbyAmenitiesMapFallback from "@/components/amenities/NearbyAmenitiesMapFallback";

const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();

type NearbyAmenitiesMapProps = {
  className?: string;
  /** Shorter copy on embedded sections */
  compact?: boolean;
};

function buildInfoWindowElement(opts: {
  name: string;
  address?: string;
  lat: number;
  lng: number;
}): HTMLElement {
  const wrap = document.createElement("div");
  wrap.className = "p-1 max-w-xs";

  const title = document.createElement("strong");
  title.textContent = opts.name;
  wrap.appendChild(title);

  if (opts.address) {
    const addr = document.createElement("p");
    addr.className = "text-sm text-slate-700";
    addr.textContent = opts.address;
    wrap.appendChild(addr);
  }

  const dirP = document.createElement("p");
  dirP.className = "mt-2";
  const link = document.createElement("a");
  link.href = placeDirectionsUrl(opts.name, opts.address ?? `${opts.lat},${opts.lng}`);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "text-blue-600 font-semibold";
  link.textContent = "Directions";
  dirP.appendChild(link);
  wrap.appendChild(dirP);

  return wrap;
}

function CuratedPlacesList({ categoryId }: { categoryId: AmenityCategoryId }) {
  const list = curatedAmenitiesForCategory(categoryId);
  const label = amenityCategories.find((c) => c.id === categoryId)?.label ?? "Places";
  if (list.length === 0) return null;

  return (
    <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-sm font-bold text-slate-900 mb-3">
        Curated {label.toLowerCase()} near The Lakes
      </h3>
      <ul className="space-y-3">
        {list.map((place) => {
          const fullAddress = `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`;
          return (
            <li key={place.name} className="border-b border-slate-100 pb-2 last:border-0">
              <p className="font-medium text-slate-900 text-sm">{place.name}</p>
              <p className="text-xs text-slate-600">{fullAddress}</p>
              <a
                href={placeDirectionsUrl(place.name, fullAddress)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
              >
                Directions
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
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
  const [useFallback, setUseFallback] = useState(!MAPS_API_KEY || mapsAuthFailed);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [showCuratedList, setShowCuratedList] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onAuthFailure = () => setUseFallback(true);
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, []);

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
        buildInfoWindowElement({
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
      setShowCuratedList(false);

      const center = { lat: communityMapCenter.latitude, lng: communityMapCenter.longitude };
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(center);

      const addPlaceMarker = (opts: { name: string; lat: number; lng: number; address?: string }) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: opts.lat, lng: opts.lng },
          title: opts.name,
        });
        marker.addListener("click", () => {
          infoWindowRef.current?.setContent(
            buildInfoWindowElement({
              name: opts.name,
              address: opts.address,
              lat: opts.lat,
              lng: opts.lng,
            })
          );
          infoWindowRef.current?.open({ map, anchor: marker });
        });
        markersRef.current.push(marker);
        bounds.extend({ lat: opts.lat, lng: opts.lng });
      };

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
      let searchFailed = false;

      try {
        const places = await searchCategory(
          center,
          categoryId,
          category.primaryTypes,
          communityMapCenter.searchRadiusMeters
        );

        for (const place of places) {
          const rawName = place.displayName;
          const name =
            typeof rawName === "string"
              ? rawName
              : rawName && typeof rawName === "object" && "text" in rawName
                ? String((rawName as { text?: string }).text ?? "Place")
                : "Place";
          const loc = place.location;
          if (!loc) continue;
          const { lat, lng } = loc.toJSON();
          addPlaceMarker({
            name,
            lat,
            lng,
            address: place.formattedAddress ?? undefined,
          });
          dynamicCount += 1;
        }
      } catch {
        searchFailed = true;
      }

      if (markersRef.current.length > 1) {
        map.fitBounds(bounds);
      } else {
        map.setCenter(center);
      }

      const curatedCount = curatedAmenitiesForCategory(categoryId).length;
      if (searchFailed) {
        setShowCuratedList(curatedCount > 0);
        setStatusMessage(
          `Live search unavailable — showing curated ${category.label.toLowerCase()} near The Lakes.`
        );
      } else {
        setShowCuratedList(dynamicCount === 0 && curatedCount > 0);
        setStatusMessage(
          dynamicCount > 0
            ? `Showing ${dynamicCount} nearby ${category.label.toLowerCase()} (plus The Lakes).`
            : `Showing curated ${category.label.toLowerCase()} near The Lakes.`
        );
      }
    },
    [addCommunityMarker, clearMarkers]
  );

  useEffect(() => {
    if (!shouldLoadMap || useFallback || !mapHostRef.current) return;
    if (mapsAuthFailed) {
      setUseFallback(true);
      return;
    }
    let cancelled = false;

    const key = MAPS_API_KEY;
    if (!key) {
      setUseFallback(true);
      return;
    }

    loadGoogleMaps(key)
      .then(async () => {
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
      })
      .catch(() => {
        if (!cancelled) setUseFallback(true);
      });

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
      {showCuratedList ? <CuratedPlacesList categoryId={activeCategory} /> : null}
    </div>
  );
}
