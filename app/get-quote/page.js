import RoundSkyForm from "@/app/components/RoundSkyForm";

export const metadata = {
  title: "Check Your Personal Loan Rate | Proper Path Loans",
  description: "Check your personal loan rate in minutes. No credit impact. Compare offers from top lenders for debt consolidation, emergency loans, home improvement, and more.",
  alternates: {
    canonical: "https://properpathloans.com/get-quote",
  },
};

export default function GetQuotePage() {
  return (
    <main className="ppl-quote-page">

      <section className="ppl-hero ppl-hero--compact">
        <div className="ppl-container">
          <h1 className="ppl-hero__title">Check Your Personal Loan Rate</h1>
          <p className="ppl-hero__subtitle">
            No credit impact. No obligation. See your options in minutes.
          </p>
          <div className="ppl-trust-bar">
            <span>✓ Soft credit check only</span>
            <span>✓ Multiple lenders compared</span>
            <span>✓ Results in minutes</span>
          </div>
        </div>
      </section>

      <section className="ppl-quote-body">
        <div className="ppl-container ppl-container--narrow">
          <div className="ppl-iframe-wrapper">
            <RoundSkyForm subId="get-quote" />
          </div>

          <div className="ppl-quote-trust">
            <div className="ppl-quote-trust-item">
              <strong>🔒 Your data is secure</strong>
              <p>256-bit SSL encryption on all form submissions.</p>
            </div>
            <div className="ppl-quote-trust-item">
              <strong>📊 No credit impact</strong>
              <p>We use a soft pull only. Your score is never affected.</p>
            </div>
            <div className="ppl-quote-trust-item">
              <strong>⚡ Fast results</strong>
              <p>See matched lender offers in minutes, not days.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
