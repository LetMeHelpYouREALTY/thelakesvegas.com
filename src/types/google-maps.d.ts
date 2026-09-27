/** Minimal typings for Maps JavaScript API usage in NearbyAmenitiesMap */
declare namespace google.maps {
  class Map {
    constructor(el: HTMLElement, opts?: MapOptions);
    setCenter(latLng: LatLngLiteral | LatLng): void;
    fitBounds(bounds: LatLngBounds): void;
  }
  class Marker {
    constructor(opts?: MarkerOptions);
    setMap(map: Map | null): void;
    addListener(event: string, handler: () => void): void;
  }
  class InfoWindow {
    constructor(opts?: { content?: string });
    setContent(content: string): void;
    open(opts?: { map?: Map; anchor?: Marker }): void;
    close(): void;
  }
  class LatLngBounds {
    extend(point: LatLngLiteral): void;
  }
  class LatLng {
    constructor(lat: number, lng: number);
    lat(): number;
    lng(): number;
  }
  class Circle {
    constructor(opts?: { map?: Map; center?: LatLngLiteral; radius?: number; visible?: boolean });
  }
  class places {
    static PlacesService: new (map: Map) => PlacesService;
  }
  interface MapOptions {
    center?: LatLngLiteral;
    zoom?: number;
    mapId?: string;
    mapTypeControl?: boolean;
    streetViewControl?: boolean;
    fullscreenControl?: boolean;
  }
  interface MarkerOptions {
    map?: Map;
    position?: LatLngLiteral;
    title?: string;
    icon?: string | { url: string; scaledSize?: { width: number; height: number } };
  }
  interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  interface PlacesService {
    nearbySearch(
      request: {
        location: LatLng | LatLngLiteral;
        radius: number;
        type?: string | string[];
      },
      callback: (results: PlaceResult[] | null, status: string) => void
    ): void;
  }
  interface PlaceResult {
    name?: string;
    vicinity?: string;
    formatted_address?: string;
    geometry?: { location?: LatLng };
    rating?: number;
    place_id?: string;
  }
  function importLibrary(name: string): Promise<unknown>;
}

interface Window {
  google?: typeof google;
}

declare const google: { maps: typeof google.maps };
