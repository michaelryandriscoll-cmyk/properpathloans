import LoanCalculator from "@/app/components/LoanCalculator";
import Link from "next/link";

export const metadata = {
  title: "Personal Loan Payment Calculator | Proper Path Loans",
  description:
    "Estimate your monthly personal loan payment. Adjust loan amount, APR, and term to see your estimated payment, total interest, and total cost before you apply.",
  alternates: {
    canonical: "https://properpathloans.com/personal-loan-calculator",
  },
};

export default function LoanCalculatorPage() {
  return (
    <main className="ppl-calculator-page">
      <section className="ppl-hero ppl-hero--compact">
        <div className="ppl-container">
          <h1 className="ppl-hero__title">Personal Loan Payment Calculator</h1>
          <p className="ppl-hero__subtitle">
            Adjust the loan amount, rate, and term to estimate your monthly payment before you apply.
          </p>
        </div>
      </section>

      <section className="ppl-calc-section">
        <div className="ppl-container ppl-container--narrow">
          <LoanCalculator />
        </div>
      </section>

      <section className="ppl-calc-explainer">
        <div className="ppl-container ppl-container--narrow">
          <h2>How this calculator works</h2>
          <p>
            This tool uses the standard fixed-rate loan amortization formula lenders use to
            calculate a level monthly payment: the same payment amount each month for the life
            of the loan, made up of a mix of principal and interest that shifts over time
            (more interest early on, more principal later).
          </p>
          <p>
            Your actual APR depends on your credit profile, income, and the specific lender —
            rates on personal loans in our network typically range from about 6.99% to 35.99%
            APR. A longer term lowers your monthly payment but increases the total interest you
            pay over the life of the loan; a shorter term does the opposite.
          </p>
          <h2>What this estimate does not include</h2>
          <p>
            Some lenders charge an origination fee (often 1–8% of the loan amount), which is
            either deducted from your funds at disbursement or added to the loan balance. This
            calculator does not factor in origination fees, since they vary by lender — check
            the specific terms of any offer before accepting it.
          </p>
          <Link href="/get-quote" className="ppl-btn ppl-btn--primary ppl-btn--large">
            Check Your Real Rate →
          </Link>
        </div>
      </section>
    </main>
  );
}
