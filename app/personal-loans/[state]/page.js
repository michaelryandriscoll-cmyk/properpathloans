// app/personal-loans/[state]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import stateCityMap from "@/app/lib/stateCityMap.js";

export async function generateStaticParams() {
  return Object.keys(stateCityMap).map((state) => ({ state }));
}

export async function generateMetadata({ params }) {
  const { state: stateSlug } = await params;
  const stateData = stateCityMap[stateSlug];
  if (!stateData) return {};
  const stateName = stateData.stateName;
  return {
    title: `Personal Loans in ${stateName} | Proper Path Loans`,
    description: `Compare personal loans in ${stateName}. Find lenders for debt consolidation, bad credit, emergency loans, and home improvement near you. No credit impact to check your rate.`,
    alternates: {
      canonical: `https://properpathloans.com/personal-loans/${stateSlug}`,
    },
  };
}

export default async function StatePage({ params }) {
  const { state: stateSlug } = await params;
  const stateData = stateCityMap[stateSlug];
  if (!stateData) notFound();
  const stateName = stateData.stateName;

  return (
    <main className="ppl-state-page">
      <section className="ppl-hero ppl-hero--compact">
        <div className="ppl-container">
          <div className="ppl-breadcrumb">
            <Link href="/personal-loans">Personal Loans</Link>
            <span> › </span>
            <span>{stateName}</span>
          </div>
          <h1 className="ppl-hero__title">Personal Loans in {stateName}</h1>
          <p className="ppl-hero__subtitle">
            Find and compare personal loan options in cities across {stateName}. Check your rate with no impact to your credit score.
          </p>
        </div>
      </section>

      <section className="ppl-city-list">
        <div className="ppl-container">
          <h2 className="ppl-section-title">Find Personal Loans by City in {stateName}</h2>
          <div className="ppl-city-grid">
            {stateData.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/personal-loans/${stateSlug}/${city.slug}`}
                className="ppl-city-link"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
