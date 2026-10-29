/**
 * Featured listing: data, the homepage band shown directly below the hero, and the
 * full listing page body used by app/listings/9528-rainfall-avenue.
 * Facts come from the RealScout listing page (MLS data). Update FEATURED_LISTING when
 * the listing changes, or set `active: false` to hide the band and the page.
 */

export const FEATURED_LISTING = {
  active: true,
  slug: "9528-rainfall-avenue",
  address: "9528 Rainfall Avenue",
  city: "Las Vegas",
  state: "NV",
  zip: "89147",
  price: "$469,900",
  priceValue: 469900,
  beds: 4,
  baths: "2.5",
  sqft: "2,547",
  sqftValue: 2547,
  lotSqft: "4,356",
  yearBuilt: 1999,
  subdivision: "Spring Mountain Fort Apache #1 Lewis Homes",
  headline: "Private pool, no HOA dues, and owned solar",
  summary:
    "Two-story home with a 10.22 kW owned rooftop solar system, quartz kitchen island, gas fireplace, a downstairs bedroom, and an upstairs loft. Two-car garage.",
  description: [
    "Private in-ground pool, no HOA dues, and owned solar, in 2,547 sq ft for $469,900. There is no association, and the 10.22 kW rooftop system is rated at an estimated 15,700 kWh in its first year.",
    "Step through the arched entry and the ceiling rises two stories, with arched windows pulling in daylight. Wood-look plank flooring leads to a kitchen built around a quartz-topped island, with a gas range, dishwasher, and microwave. A gas fireplace anchors the living and dining area.",
    "The slider opens to the pool, where a tiled water feature runs along the back edge. The covered patio fits a full dining set and a grill, framed by low-care desert landscaping and a block wall.",
    "The downstairs bedroom and three-quarter bath work as a guest room or office. Upstairs, a large loft adds a second living space. The primary suite has a soaking tub, separate shower, and dual sinks. Two-car attached garage, upstairs laundry room, and a newer washer and dryer.",
  ],
  features: [
    "Private in-ground pool with tiled water feature",
    "No HOA",
    "Owned 10.22 kW rooftop solar",
    "Quartz kitchen island, gas range",
    "Gas fireplace in living room",
    "Bedroom and bath on main level",
    "Upstairs loft",
    "Primary suite with soaking tub and dual sinks",
    "Two-car attached garage",
    "Tile roof, central air, gas heat",
  ],
  schools: [
    "Keith C. & Karen W. Hayes Elementary School",
    "Victoria Fertitta Middle School",
    "Spring Valley High School",
  ],
  annualTax: "$2,679",
  mlsNumber: "2829192",
  listingOffice: "BHHS Nevada Properties",
  listedDate: "2026-10-29",
  /** Date these facts were last checked against the listing; shown on the page. */
  updatedDate: "2026-10-29",
  updatedLabel: "October 29, 2026",
  /** Optional listing photo path in /public, e.g. "/listings/9528-rainfall-avenue.jpg". */
  // Photo approved for website use by the seller. Twilight sky is digitally edited.
  image: "/images/listings/9528-rainfall-avenue/front-exterior-twilight.jpg" as
    | string
    | null,
  imageAlt:
    "Front exterior of 9528 Rainfall Avenue at twilight (sky digitally edited)",
  imageCaption: "Twilight sky digitally edited.",
  realScoutUrl:
    "https://drjanduffy.realscout.com/homesearch/listings/p-9528-rainfall-avenue-las-vegas-89147-glvartrestle-886",
  /** One canonical listing page for all sites, so the copies do not compete in search. */
  canonicalUrl:
    "https://www.springvalleylasvegashomes.com/listings/9528-rainfall-avenue",
};

/** Plain-language answers to the questions buyers ask most, each answered from MLS facts. */
export const FEATURED_LISTING_FAQS = [
  {
    q: "How much is 9528 Rainfall Avenue?",
    a: "9528 Rainfall Avenue, Las Vegas, NV 89147 is listed at $469,900 (MLS #2829192), or about $184 per square foot for 2,547 sq ft.",
  },
  {
    q: "Does 9528 Rainfall Avenue have HOA dues?",
    a: "No. The home is not in a homeowners association, so there are no monthly HOA dues.",
  },
  {
    q: "Is the solar owned or leased?",
    a: "Owned. The 10.22 kW rooftop solar system conveys with the home and is rated at an estimated 15,700 kWh in its first year.",
  },
  {
    q: "Does the home have a pool?",
    a: "Yes. It has a private in-ground pool with a tiled water feature, plus a patio and desert landscaping.",
  },
  {
    q: "Is there a bedroom on the main floor?",
    a: "Yes. One of the four bedrooms is downstairs next to a three-quarter bath. The primary suite and loft are upstairs.",
  },
  {
    q: "Which public schools are assigned?",
    a: "Per the MLS: Keith C. & Karen W. Hayes Elementary, Victoria Fertitta Middle, and Spring Valley High School. Confirm with the Clark County School District.",
  },
  {
    q: "What are the property taxes?",
    a: "The annual property tax listed in the MLS is $2,679.",
  },
  {
    q: "How do I schedule a showing?",
    a: "Call Dr. Jan Duffy, the listing agent with BHHS Nevada Properties, at the number on this page.",
  },
];

export const FEATURED_LISTING_PATH = `/listings/${FEATURED_LISTING.slug}`;

/** RealScout link tagged with this site's hostname so leads show which site sent them. */
export function featuredListingRealScoutUrl(
  siteHost: string,
  placement: string,
) {
  const params = new URLSearchParams({
    utm_source: siteHost,
    utm_medium: "website",
    utm_campaign: `listing-${FEATURED_LISTING.slug}`,
    utm_content: placement,
  });
  return `${FEATURED_LISTING.realScoutUrl}?${params.toString()}`;
}

export function featuredListingJsonLd(pageUrl: string) {
  const l = FEATURED_LISTING;
  const listing = {
    "@type": "RealEstateListing",
    "@id": `${pageUrl}#listing`,
    name: `${l.address}, ${l.city}, ${l.state} ${l.zip}`,
    description: l.description[0],
    url: pageUrl,
    datePosted: l.listedDate,
    dateModified: l.updatedDate,
    ...(l.image ? { image: new URL(l.image, pageUrl).href } : {}),
    offers: {
      "@type": "Offer",
      price: l.priceValue,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      businessFunction: "http://purl.org/goodrelations/v1#Sell",
      offeredBy: {
        "@type": "RealEstateAgent",
        name: "Dr. Jan Duffy",
        parentOrganization: { "@type": "Organization", name: l.listingOffice },
      },
    },
    about: {
      "@type": "SingleFamilyResidence",
      address: {
        "@type": "PostalAddress",
        streetAddress: l.address,
        addressLocality: l.city,
        addressRegion: l.state,
        postalCode: l.zip,
        addressCountry: "US",
      },
      numberOfBedrooms: l.beds,
      numberOfBathroomsTotal: 2.5,
      floorSize: {
        "@type": "QuantitativeValue",
        value: l.sqftValue,
        unitCode: "FTK",
      },
      yearBuilt: l.yearBuilt,
    },
  };
  const faq = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: FEATURED_LISTING_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return { "@context": "https://schema.org", "@graph": [listing, faq] };
}

type PhoneProps = {
  /** This site's own display phone, e.g. "(702) 555-0100". */
  phone: string;
  /** Matching tel: href, e.g. "tel:+17025550100". */
  phoneHref: string;
  /** This site's hostname, used to tag RealScout links. */
  siteHost: string;
};

const factsOf = (l: typeof FEATURED_LISTING) => [
  { label: "Beds", value: String(l.beds) },
  { label: "Baths", value: l.baths },
  { label: "Sq ft", value: l.sqft },
  { label: "Built", value: String(l.yearBuilt) },
];

function Attribution() {
  const l = FEATURED_LISTING;
  return (
    <p className="mt-1 text-slate-700">
      Listing offered by {l.listingOffice} · Listing agent Dr. Jan Duffy · MLS #
      {l.mlsNumber}
    </p>
  );
}

function Facts() {
  return (
    <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {factsOf(FEATURED_LISTING).map((f) => (
        <div key={f.label} className="rounded-lg bg-white p-3 text-center">
          <dt className="text-xs uppercase tracking-wide text-slate-500">
            {f.label}
          </dt>
          <dd className="text-lg font-bold text-slate-900">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function FeaturedListing({
  phone,
  phoneHref,
  siteHost,
}: PhoneProps) {
  const l = FEATURED_LISTING;
  if (!l.active) return null;

  return (
    <section
      id="featured-listing"
      aria-labelledby="featured-listing-heading"
      className="border-b border-slate-200 bg-white py-10 md:py-12"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          {l.image ? (
            <figure className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={l.image}
                alt={l.imageAlt}
                width={1600}
                height={1200}
                className="aspect-[16/9] w-full rounded-xl object-cover"
              />
              <figcaption className="mt-1 text-xs text-slate-500">
                {l.imageCaption}
              </figcaption>
            </figure>
          ) : null}
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            New listing · For sale
          </p>
          <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h2
              id="featured-listing-heading"
              className="text-2xl font-bold text-slate-900 md:text-3xl"
            >
              {l.address}, {l.city}, {l.state} {l.zip}
            </h2>
            <p className="text-2xl font-bold text-slate-900 md:text-3xl">
              {l.price}
            </p>
          </div>
          <Attribution />
          <p className="mt-3 text-lg font-semibold text-slate-800">
            {l.headline}
          </p>
          <p className="mt-2 text-slate-700">{l.summary}</p>
          <Facts />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={FEATURED_LISTING_PATH}
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
            >
              See the full listing
            </a>
            <a
              href={featuredListingRealScoutUrl(siteHost, "home-band")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100"
            >
              See all photos
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100"
            >
              Call Dr. Jan Duffy at {phone} to tour
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Source: GLVAR. Information deemed reliable but not guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FeaturedListingPageBody({
  phone,
  phoneHref,
  siteHost,
}: PhoneProps) {
  const l = FEATURED_LISTING;

  return (
    <article className="bg-white py-12 md:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          {l.active ? "New listing · For sale" : "No longer available"}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          {l.address}, {l.city}, {l.state} {l.zip}
        </h1>
        <p className="mt-2 text-3xl font-bold text-slate-900">{l.price}</p>
        <Attribution />
        <p className="mt-1 text-sm text-slate-600">
          Updated <time dateTime={l.updatedDate}>{l.updatedLabel}</time>
        </p>
        {l.image ? (
          <figure className="mt-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={l.image}
              alt={l.imageAlt}
              width={1600}
              height={1200}
              className="w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-2 text-xs text-slate-500">
              {l.imageCaption}
            </figcaption>
          </figure>
        ) : null}
        <p className="mt-6 text-xl font-semibold text-slate-800">
          {l.headline}
        </p>
        <Facts />
        <div className="mt-8 space-y-4 text-lg leading-relaxed text-slate-700">
          {l.description.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <h2 className="mt-10 text-2xl font-bold text-slate-900">Features</h2>
        <ul className="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2">
          {l.features.map((f) => (
            <li key={f}>• {f}</li>
          ))}
        </ul>
        <h2 className="mt-10 text-2xl font-bold text-slate-900">Details</h2>
        <dl className="mt-4 grid gap-x-8 gap-y-2 text-slate-700 sm:grid-cols-2">
          <div>
            <dt className="inline font-semibold">Lot: </dt>
            <dd className="inline">{l.lotSqft} sq ft</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Subdivision: </dt>
            <dd className="inline">{l.subdivision}</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Annual property tax: </dt>
            <dd className="inline">{l.annualTax}</dd>
          </div>
          <div>
            <dt className="inline font-semibold">HOA: </dt>
            <dd className="inline">None</dd>
          </div>
        </dl>
        <h2 className="mt-10 text-2xl font-bold text-slate-900">
          Assigned public schools
        </h2>
        <ul className="mt-4 space-y-1 text-slate-700">
          {l.schools.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="mt-2 text-sm text-slate-600">
          School assignments come from the MLS and can change. Confirm with the
          Clark County School District.
        </p>
        <h2 className="mt-10 text-2xl font-bold text-slate-900">
          Questions about {l.address}
        </h2>
        <div className="mt-4 space-y-5">
          {FEATURED_LISTING_FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="text-lg font-semibold text-slate-900">{f.q}</h3>
              <p className="mt-1 text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={featuredListingRealScoutUrl(siteHost, "listing-page")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            See all photos on RealScout
          </a>
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100"
          >
            Call Dr. Jan Duffy at {phone} to tour
          </a>
        </div>
        <p className="mt-8 text-xs text-slate-500">
          Source: Greater Las Vegas Association of Realtors (GLVAR). Information
          deemed reliable but not guaranteed. Equal Housing Opportunity.
        </p>
      </div>
    </article>
  );
}
