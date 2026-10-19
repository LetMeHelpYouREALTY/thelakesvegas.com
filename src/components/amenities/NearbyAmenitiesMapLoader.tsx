"use client";

import dynamic from "next/dynamic";

const NearbyAmenitiesMap = dynamic(() => import("@/components/amenities/NearbyAmenitiesMap"), {
  ssr: false,
  loading: () => (
    <div
      className="rounded-xl border border-slate-200 bg-slate-100 min-h-[420px] flex items-center justify-center text-slate-600 text-sm"
      aria-live="polite"
    >
      Loading map…
    </div>
  ),
});

type NearbyAmenitiesMapLoaderProps = {
  className?: string;
  compact?: boolean;
};

export default function NearbyAmenitiesMapLoader(props: NearbyAmenitiesMapLoaderProps) {
  return <NearbyAmenitiesMap {...props} />;
}
