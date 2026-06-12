export const metadata = {
  title: "About Proper Path Loans | Personal Loan Comparison",
  description: "Proper Path Loans helps consumers find the right personal loan by comparing offers from top lenders. Learn about who we are and how we work.",
  alternates: { canonical: "https://properpathloans.com/about" },
};

export default function AboutPage() {
  return (
    <main className="ppl-about-page">

      <section className="ppl-hero ppl-hero--compact">
        <div className="ppl-container">
          <h1 className="ppl-hero__title">About Proper Path Loans</h1>
          <p className="ppl-hero__subtitle">
            We help everyday people find the right personal loan — without the confusion, the hard sell, or the credit score hit.
          </p>
        </div>
      </section>

      <section className="ppl-about-content">
        <div className="ppl-container ppl-container--narrow">

          <h2>Who We Are</h2>
          <p>Proper Path Loans is operated by Proper Provider Companies LLC, based in Buffalo, New York. We built this site because finding a personal loan shouldn't feel like navigating a minefield.</p>
          <p>Too many people end up with the wrong loan — or no loan at all — simply because they didn't know what options were available to them. We're here to change that.</p>

          <h2>What We Do</h2>
          <p>We connect consumers with a network of reputable personal loan lenders. Whether you need to consolidate debt, cover an emergency expense, finance a home improvement project, or get a loan despite a lower credit score — we help you see your options in one place.</p>
          <p>We are not a lender. We do not make credit decisions. Our job is to match you with lenders who are the right fit for your situation, so you can make an informed choice.</p>

          <h2>How We Make Money</h2>
          <p>We receive compensation from lenders when a consumer we refer submits a loan application or is funded. This is how we keep the service free for borrowers. It does not affect the rates or terms you receive — lenders set those independently based on your credit profile.</p>

          <h2>Our Commitment</h2>
          <ul>
            <li>We never charge borrowers a fee to use our service</li>
            <li>We never perform a hard credit pull — checking your rate has no impact on your score</li>
            <li>We only work with lenders who are licensed and compliant in their operating states</li>
            <li>We present options based on fit, not commission size</li>
          </ul>

          <h2>Contact Us</h2>
          <p>Proper Provider Companies LLC<br />
          116 Woodcrest Dr, Buffalo, NY 14220<br />
          Email: michael@properpathloans.com<br />
          Phone: (888) 900-8979</p>

        </div>
      </section>

    </main>
  );
}
