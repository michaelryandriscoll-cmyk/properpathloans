// app/personal-loans/[state]/[city]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import stateCityMap from "@/app/lib/stateCityMap.js";
import loanTypes from "@/app/lib/_loanTypeList.js";

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  const params = [];
  for (const [stateSlug, stateData] of Object.entries(stateCityMap)) {
    for (const city of stateData.cities.slice(0, 5)) {
      params.push({ state: stateSlug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { state: stateSlug, city: citySlug } = await params;
  const stateData = stateCityMap[stateSlug];
  if (!stateData) return {};
  const cityData = stateData.cities.find((c) => c.slug === citySlug);
  if (!cityData) return {};

  const cityName = cityData.name;
  const stateName = stateData.stateName;

  return {
    title: `Personal Loans in ${cityName}, ${stateName} | Proper Path Loans`,
    description: `Compare personal loans in ${cityName}, ${stateName}. Debt consolidation, bad credit loans, emergency funding, and home improvement loans. Check your rate with no credit impact.`,
    alternates: {
      canonical: `https://properpathloans.com/personal-loans/${stateSlug}/${citySlug}`,
    },
  };
}

export default async function CityPage({ params }) {
  const { state: stateSlug, city: citySlug } = await params;
  const stateData = stateCityMap[stateSlug];
  if (!stateData) notFound();
  const cityData = stateData.cities.find((c) => c.slug === citySlug);
  if (!cityData) notFound();

  const cityName = cityData.name;
  const stateName = stateData.stateName;

  return (
    <main className="ppl-city-page">

      {/* Hero */}
      <section className="ppl-hero">
        <div className="ppl-container">
          <div className="ppl-hero__content">
            <h1 className="ppl-hero__title">
              Personal Loans in {cityName}, {stateName}
            </h1>
            <p className="ppl-hero__subtitle">
              Compare personal loan offers from top lenders. Check your rate in minutes with no impact to your credit score.
            </p>
            <div className="ppl-trust-bar">
              <span>✓ No credit impact to check your rate</span>
              <span>✓ Multiple lenders in one place</span>
              <span>✓ Funds as fast as next business day</span>
            </div>
            <a href="#get-started" className="ppl-btn ppl-btn--primary">
              Check My Rate Now
            </a>
          </div>
        </div>
      </section>

      {/* Loan Type Cards */}
      <section className="ppl-loan-types" id="loan-types">
        <div className="ppl-container">
          <h2 className="ppl-section-title">
            Personal Loan Options in {cityName}
          </h2>
          <p className="ppl-section-subtitle">
            Select the loan type that fits your situation to see lenders and rates in {cityName}.
          </p>
          <div className="ppl-loan-type-grid">
            {loanTypes.map((loan) => (
              <Link
                key={loan.slug}
                href={`/personal-loans/${stateSlug}/${citySlug}/${loan.slug}`}
                className="ppl-loan-type-card"
              >
                <div className="ppl-loan-type-card__label">{loan.label}</div>
                <div className="ppl-loan-type-card__title">{loan.title}</div>
                <div className="ppl-loan-type-card__stats">
                  <span>{loan.stats.amounts}</span>
                  <span>{loan.stats.rates}</span>
                </div>
                <div className="ppl-loan-type-card__cta">See Options →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="ppl-form-section" id="get-started">
        <div className="ppl-container ppl-container--narrow">
          <h2 className="ppl-section-title">Find Your Best Rate in {cityName}</h2>
          <p className="ppl-section-subtitle">
            Answer a few quick questions and we'll match you with the best personal loan options available in {cityName}, {stateName}.
          </p>
          <div className="ppl-iframe-wrapper">
            <iframe
              id="application-form"
              src="https://iframe.global/iframe?style=2&owner=USAIFRAME&tracking_code=aff170633"
              allowTransparency={true}
              title="Application Form"
              scrolling="no"
              style={{ height: "840px", width: "100%", border: "none" }}
            />
            <script
              src="https://iframe.global/embed.js"
              async
              defer
              data-iframe-id="application-form"
              data-header-offset="64"
              data-scroll-duration="300"
            />
          </div>
        </div>
      </section>

      {/* Why Proper Path */}
      <section className="ppl-why">
        <div className="ppl-container">
          <h2 className="ppl-section-title">Why Use Proper Path Loans?</h2>
          <div className="ppl-why-grid">
            <div className="ppl-why-card">
              <div className="ppl-why-card__icon">🔍</div>
              <h3>Compare Multiple Lenders</h3>
              <p>See offers from multiple lenders in one place — no need to apply separately to each one.</p>
            </div>
            <div className="ppl-why-card">
              <div className="ppl-why-card__icon">🛡️</div>
              <h3>No Credit Impact</h3>
              <p>Checking your rate uses a soft credit pull only. Your credit score is never affected.</p>
            </div>
            <div className="ppl-why-card">
              <div className="ppl-why-card__icon">⚡</div>
              <h3>Fast Decisions</h3>
              <p>Get matched with loan offers in minutes. Funds deposited as fast as the next business day.</p>
            </div>
            <div className="ppl-why-card">
              <div className="ppl-why-card__icon">📋</div>
              <h3>Simple Process</h3>
              <p>One short form connects you to the right lenders for your situation and credit profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="ppl-nearby">
        <div className="ppl-container">
          <h2 className="ppl-section-title">Personal Loans Near {cityName}</h2>
          <div className="ppl-nearby-grid">
            {stateData.cities
              .filter((c) => c.slug !== citySlug)
              .slice(0, 8)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/personal-loans/${stateSlug}/${c.slug}`}
                  className="ppl-nearby-link"
                >
                  {c.name}, {stateName}
                </Link>
              ))}
          </div>
        </div>
      </section>

    </main>
  );
}
