// app/personal-loans/[state]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import stateCityMap from "@/app/lib/stateCityMap.js";
import stateEconomicData, { stateEconomicDataSource } from "@/app/lib/stateEconomicData.js";
import { nextMarkets } from "@/app/lib/siloLinks.js";

export async function generateStaticParams() {
  return Object.keys(stateCityMap).map((state) => ({ state }));
}

function costOfLivingLine(stateName, index) {
  const diff = Math.round(Math.abs(index - 100));
  if (index > 102) {
    return `${stateName}'s overall cost of living runs about ${diff}% above the national average`;
  }
  if (index < 98) {
    return `${stateName}'s overall cost of living runs about ${diff}% below the national average`;
  }
  return `${stateName}'s overall cost of living is close to the national average`;
}

export async function generateMetadata({ params }) {
  const { state: stateSlug } = await params;
  const stateData = stateCityMap[stateSlug];
  if (!stateData) return {};
  const stateName = stateData.stateName;
  const econ = stateEconomicData[stateSlug];
  const description = econ
    ? `Compare personal loans in ${stateName}, where the cost of living index is ${econ.costOfLivingIndex} (U.S. average = 100). Find lenders for debt consolidation, bad credit, emergency loans, and home improvement. No credit impact to check your rate.`
    : `Compare personal loans in ${stateName}. Find lenders for debt consolidation, bad credit, emergency loans, and home improvement near you. No credit impact to check your rate.`;
  return {
    title: `Personal Loans in ${stateName} | Proper Path Loans`,
    description,
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
  const econ = stateEconomicData[stateSlug];
  const nearbyStates = nextMarkets(stateSlug);

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
            {econ
              ? `${costOfLivingLine(stateName, econ.costOfLivingIndex)} (cost of living index: ${econ.costOfLivingIndex}, U.S. average = 100). Compare personal loan options in cities across ${stateName} and check your rate with no impact to your credit score.`
              : `Find and compare personal loan options in cities across ${stateName}. Check your rate with no impact to your credit score.`}
          </p>
        </div>
      </section>

      {econ && (
        <section className="ppl-state-context">
          <div className="ppl-container ppl-container--narrow">
            <h2 className="ppl-section-title">Cost of Living in {stateName}</h2>
            <p>
              {costOfLivingLine(stateName, econ.costOfLivingIndex)}, according to the{" "}
              <a href={stateEconomicDataSource.url} target="_blank" rel="noopener noreferrer">
                {stateEconomicDataSource.name}
              </a>{" "}
              ({stateEconomicDataSource.period}). A higher cost of living generally means larger
              unexpected expenses — car repairs, medical bills, home repairs — which is one reason
              residents look at personal loans to cover a gap or consolidate debt rather than
              draining savings.
            </p>
            <p>
              Before you apply anywhere, you can confirm a lender is licensed to operate in{" "}
              {stateName} using the{" "}
              <a
                href="https://www.nmlsconsumeraccess.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NMLS Consumer Access
              </a>{" "}
              lookup — the official, nationwide licensing database maintained by state financial
              regulators.
            </p>
          </div>
        </section>
      )}

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

      {nearbyStates.length > 0 && (
        <section className="ppl-nearby">
          <div className="ppl-container">
            <h2 className="ppl-section-title">Nearby State Markets</h2>
            <div className="ppl-nearby-grid">
              {nearbyStates.map((s) => (
                <Link
                  key={s.slug}
                  href={`/personal-loans/${s.slug}`}
                  className="ppl-nearby-link"
                >
                  Personal Loans in {s.stateName}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
