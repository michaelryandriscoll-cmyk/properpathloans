// app/page.js
import Link from "next/link";
import stateCityMap from "@/app/lib/stateCityMap.js";
import loanTypes from "@/app/lib/_loanTypeList.js";

export const metadata = {
  title: "Personal Loans for Every Need | Proper Path Loans",
  description: "Compare personal loans from top lenders. Debt consolidation, bad credit loans, emergency funding, and home improvement loans. Check your rate with no credit impact.",
  alternates: {
    canonical: "https://properpathloans.com",
  },
};

const featuredStates = [
  "texas", "florida", "california", "new-york",
  "georgia", "illinois", "arizona", "north-carolina",
];

const testimonials = [
  {
    quote: "I was able to consolidate three credit cards into one payment and saved over $200 a month. The process was simple and fast.",
    name: "Sandra M.",
    location: "Houston, TX",
    type: "Debt Consolidation",
  },
  {
    quote: "I needed emergency funds for a car repair and had a lower credit score. Within a day I had options I didn't think were possible.",
    name: "Marcus T.",
    location: "Atlanta, GA",
    type: "Emergency Loan",
  },
  {
    quote: "Used a home improvement loan to finally redo our kitchen. No home equity required and a fixed rate made budgeting easy.",
    name: "Jennifer R.",
    location: "Phoenix, AZ",
    type: "Home Improvement",
  },
];

export default function HomePage() {
  const featuredCities = [
    { state: "texas", city: "houston", label: "Houston, TX" },
    { state: "florida", city: "miami", label: "Miami, FL" },
    { state: "california", city: "los-angeles", label: "Los Angeles, CA" },
    { state: "new-york", city: "new-york-city", label: "New York, NY" },
    { state: "georgia", city: "atlanta", label: "Atlanta, GA" },
    { state: "illinois", city: "chicago", label: "Chicago, IL" },
    { state: "arizona", city: "phoenix", label: "Phoenix, AZ" },
    { state: "north-carolina", city: "charlotte", label: "Charlotte, NC" },
    { state: "texas", city: "dallas", label: "Dallas, TX" },
    { state: "florida", city: "orlando", label: "Orlando, FL" },
  ];

  return (
    <main className="ppl-homepage">

      {/* ── Hero ── */}
      <section className="ppl-hero ppl-hero--home">
        <div className="ppl-container">
          <div className="ppl-hero__content">
            <div className="ppl-hero__eyebrow">Personal Loans Made Simple</div>
            <h1 className="ppl-hero__title">
              Find the Right Personal Loan for Your Situation
            </h1>
            <p className="ppl-hero__subtitle">
              Compare offers from top lenders for debt consolidation, emergency funding, home improvement, and more. Check your rate in minutes — no impact to your credit score.
            </p>
            <div className="ppl-trust-bar">
              <span>✓ No credit impact to check your rate</span>
              <span>✓ Multiple lenders compared at once</span>
              <span>✓ Funds as fast as next business day</span>
            </div>
            <div className="ppl-hero__actions">
              <Link href="/get-quote" className="ppl-btn ppl-btn--primary ppl-btn--large">
                Check My Rate Now
              </Link>
              <Link href="/personal-loans" className="ppl-btn ppl-btn--outline ppl-btn--large ppl-btn--light">
                Browse by Location
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Loan Types ── */}
      <section className="ppl-loan-types">
        <div className="ppl-container">
          <h2 className="ppl-section-title">What Are You Looking For?</h2>
          <p className="ppl-section-subtitle">
            Select your loan type to see lenders, rates, and options in your area.
          </p>
          <div className="ppl-loan-type-grid">
            {loanTypes.map((loan) => (
              <Link
                key={loan.slug}
                href={`/personal-loans/texas/houston/${loan.slug}`}
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

      {/* ── How It Works ── */}
      <section className="ppl-how-it-works">
        <div className="ppl-container">
          <h2 className="ppl-section-title">How It Works</h2>
          <p className="ppl-section-subtitle">Get matched with the right lender in three simple steps.</p>
          <div className="ppl-steps">
            <div className="ppl-step">
              <div className="ppl-step__number">1</div>
              <h3 className="ppl-step__title">Tell Us What You Need</h3>
              <p className="ppl-step__desc">Answer a few quick questions about your loan purpose, amount, and credit profile. Takes under 2 minutes.</p>
            </div>
            <div className="ppl-step__divider">→</div>
            <div className="ppl-step">
              <div className="ppl-step__number">2</div>
              <h3 className="ppl-step__title">Compare Your Options</h3>
              <p className="ppl-step__desc">We match you with lenders suited to your situation. See rates and terms side by side with no credit impact.</p>
            </div>
            <div className="ppl-step__divider">→</div>
            <div className="ppl-step">
              <div className="ppl-step__number">3</div>
              <h3 className="ppl-step__title">Get Funded Fast</h3>
              <p className="ppl-step__desc">Choose your offer and complete the application with your chosen lender. Funds deposited as fast as next business day.</p>
            </div>
          </div>
          <div className="ppl-how-cta">
            <Link href="/get-quote" className="ppl-btn ppl-btn--primary ppl-btn--large">
              Get Started — It's Free
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="ppl-testimonials">
        <div className="ppl-container">
          <h2 className="ppl-section-title">Real People, Real Results</h2>
          <div className="ppl-testimonial-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="ppl-testimonial-card">
                <div className="ppl-testimonial-card__type">{t.type}</div>
                <p className="ppl-testimonial-card__quote">"{t.quote}"</p>
                <div className="ppl-testimonial-card__author">
                  <strong>{t.name}</strong> — {t.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Proper Path ── */}
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
              <p>Checking your rate uses a soft credit pull only. Your score is never affected by browsing options.</p>
            </div>
            <div className="ppl-why-card">
              <div className="ppl-why-card__icon">⚡</div>
              <h3>Fast Decisions</h3>
              <p>Get matched with loan offers in minutes. Funds deposited as fast as the next business day.</p>
            </div>
            <div className="ppl-why-card">
              <div className="ppl-why-card__icon">📋</div>
              <h3>All Credit Types Welcome</h3>
              <p>Lenders in our network work with borrowers across all credit profiles, including scores below 600.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Cities ── */}
      <section className="ppl-featured-cities">
        <div className="ppl-container">
          <h2 className="ppl-section-title">Personal Loans by City</h2>
          <p className="ppl-section-subtitle">Find lenders and compare rates in your city.</p>
          <div className="ppl-city-grid">
            {featuredCities.map((c) => (
              <Link
                key={c.city}
                href={`/personal-loans/${c.state}/${c.city}`}
                className="ppl-city-link"
              >
                {c.label}
              </Link>
            ))}
          </div>
          <div className="ppl-all-states">
            <Link href="/personal-loans" className="ppl-btn ppl-btn--outline">
              Browse All 50 States →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="ppl-cta-banner">
        <div className="ppl-container ppl-container--narrow">
          <h2 className="ppl-cta-banner__title">Ready to Find Your Rate?</h2>
          <p className="ppl-cta-banner__sub">
            No credit impact. No obligation. See your options in minutes.
          </p>
          <Link href="/get-quote" className="ppl-btn ppl-btn--primary ppl-btn--large">
            Check My Rate Now
          </Link>
        </div>
      </section>

    </main>
  );
}
