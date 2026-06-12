// app/personal-loans/page.js
import Link from "next/link";
import stateCityMap from "@/app/lib/stateCityMap.js";

export const metadata = {
  title: "Personal Loans by State | Proper Path Loans",
  description: "Find personal loans in your state. Compare lenders for debt consolidation, bad credit loans, emergency funding, and home improvement across all 50 states.",
  alternates: {
    canonical: "https://properpathloans.com/personal-loans",
  },
};

export default function PersonalLoansPage() {
  return (
    <main className="ppl-directory-page">

      <section className="ppl-hero ppl-hero--compact">
        <div className="ppl-container">
          <h1 className="ppl-hero__title">Personal Loans Near You</h1>
          <p className="ppl-hero__subtitle">
            Select your state to compare personal loan options in your area. No credit impact to check your rate.
          </p>
        </div>
      </section>

      <section className="ppl-state-list">
        <div className="ppl-container">
          <h2 className="ppl-section-title">Browse Personal Loans by State</h2>
          <div className="ppl-state-grid">
            {Object.entries(stateCityMap).map(([stateSlug, stateData]) => (
              <Link
                key={stateSlug}
                href={`/personal-loans/${stateSlug}`}
                className="ppl-state-link"
              >
                {stateData.stateName}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
