// app/personal-loans/[state]/[city]/[loanType]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import stateCityMap from "@/app/lib/stateCityMap.js";
import loanTypes from "@/app/lib/_loanTypeList.js";

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  const params = [];
  for (const [stateSlug, stateData] of Object.entries(stateCityMap)) {
    for (const city of stateData.cities.slice(0, 3)) {
      for (const loan of loanTypes) {
        params.push({ state: stateSlug, city: city.slug, loanType: loan.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { state: stateSlug, city: citySlug, loanType: loanTypeSlug } = await params;
  const stateData = stateCityMap[stateSlug];
  if (!stateData) return {};
  const cityData = stateData.cities.find((c) => c.slug === citySlug);
  if (!cityData) return {};
  const loanType = loanTypes.find((l) => l.slug === loanTypeSlug);
  if (!loanType) return {};

  const cityName = cityData.name;
  const stateName = stateData.stateName;
  const title = loanType.metaTitle
    .replace(/{{city}}/g, cityName)
    .replace(/{{state}}/g, stateName);
  const description = loanType.metaDescription
    .replace(/{{city}}/g, cityName)
    .replace(/{{state}}/g, stateName);

  return {
    title,
    description,
    alternates: {
      canonical: `https://properpathloans.com/personal-loans/${stateSlug}/${citySlug}/${loanTypeSlug}`,
    },
  };
}

export default async function LoanTypeCityPage({ params }) {
  const { state: stateSlug, city: citySlug, loanType: loanTypeSlug } = await params;
  const stateData = stateCityMap[stateSlug];
  if (!stateData) notFound();
  const cityData = stateData.cities.find((c) => c.slug === citySlug);
  if (!cityData) notFound();
  const loanType = loanTypes.find((l) => l.slug === loanTypeSlug);
  if (!loanType) notFound();

  const cityName = cityData.name;
  const stateName = stateData.stateName;

  const introIndex = cityName.length % loanType.introTemplates.length;
  const intro = loanType.introTemplates[introIndex]
    .replace(/{{city}}/g, cityName)
    .replace(/{{state}}/g, stateName);

  const h1 = loanType.h1Template
    .replace(/{{city}}/g, cityName)
    .replace(/{{state}}/g, stateName);

  return (
    <main className="ppl-vertical-page">

      {/* Hero */}
      <section className="ppl-hero">
        <div className="ppl-container">
          <div className="ppl-hero__content">
            <div className="ppl-breadcrumb">
              <Link href="/personal-loans">Personal Loans</Link>
              <span> › </span>
              <Link href={`/personal-loans/${stateSlug}`}>{stateName}</Link>
              <span> › </span>
              <Link href={`/personal-loans/${stateSlug}/${citySlug}`}>{cityName}</Link>
              <span> › </span>
              <span>{loanType.label}</span>
            </div>
            <h1 className="ppl-hero__title">{h1}</h1>
            <p className="ppl-hero__subtitle">{intro}</p>
            <div className="ppl-stats-bar">
              <div className="ppl-stat">
                <span className="ppl-stat__label">Loan Amounts</span>
                <span className="ppl-stat__value">{loanType.stats.amounts}</span>
              </div>
              <div className="ppl-stat">
                <span className="ppl-stat__label">Rates From</span>
                <span className="ppl-stat__value">{loanType.stats.rates}</span>
              </div>
              <div className="ppl-stat">
                <span className="ppl-stat__label">Terms</span>
                <span className="ppl-stat__value">{loanType.stats.terms}</span>
              </div>
            </div>
            <a href="#get-started" className="ppl-btn ppl-btn--primary">
              Check My Rate — No Credit Impact
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="ppl-benefits">
        <div className="ppl-container">
          <h2 className="ppl-section-title">Benefits of {loanType.label} in {cityName}</h2>
          <ul className="ppl-benefits-list">
            {loanType.benefits.map((b, i) => (
              <li key={i} className="ppl-benefits-list__item">
                <span className="ppl-check">✓</span> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ideal For */}
      <section className="ppl-ideal-for">
        <div className="ppl-container">
          <h2 className="ppl-section-title">What Are {loanType.label} Used For?</h2>
          <div className="ppl-ideal-grid">
            {loanType.idealFor.map((item, i) => (
              <div key={i} className="ppl-ideal-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="ppl-form-section" id="get-started">
        <div className="ppl-container ppl-container--narrow">
          <h2 className="ppl-section-title">
            Find {loanType.label} in {cityName}
          </h2>
          <p className="ppl-section-subtitle">
            Check your personalized rate in minutes. No credit impact, no obligation.
          </p>
          <div className="ppl-form-placeholder">
            <a href="/get-quote" className="ppl-btn ppl-btn--primary ppl-btn--large">
              Get My Personalized Rates
            </a>
          </div>
        </div>
      </section>

      {/* Other Loan Types */}
      <section className="ppl-other-types">
        <div className="ppl-container">
          <h2 className="ppl-section-title">Other Personal Loan Options in {cityName}</h2>
          <div className="ppl-loan-type-grid">
            {loanTypes
              .filter((l) => l.slug !== loanTypeSlug)
              .map((loan) => (
                <Link
                  key={loan.slug}
                  href={`/personal-loans/${stateSlug}/${citySlug}/${loan.slug}`}
                  className="ppl-loan-type-card"
                >
                  <div className="ppl-loan-type-card__label">{loan.label}</div>
                  <div className="ppl-loan-type-card__title">{loan.title}</div>
                  <div className="ppl-loan-type-card__stats">
                    <span>{loan.stats.amounts}</span>
                  </div>
                  <div className="ppl-loan-type-card__cta">See Options →</div>
                </Link>
              ))}
          </div>
        </div>
      </section>

    </main>
  );
}
