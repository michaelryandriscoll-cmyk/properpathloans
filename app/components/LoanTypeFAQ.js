// app/components/LoanTypeFAQ.js
//
// Renders genuine, loan-type-specific FAQs (not city-duplicated boilerplate)
// with FAQPage schema markup for featured snippet eligibility.

export default function LoanTypeFAQ({ faqs, label }) {
  if (!faqs || faqs.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="ppl-faq">
      <div className="ppl-container ppl-container--narrow">
        <h2 className="ppl-section-title">
          {label} FAQs
        </h2>
        <div className="ppl-faq-list">
          {faqs.map((item, i) => (
            <details key={i} className="ppl-faq-item">
              <summary className="ppl-faq-question">{item.q}</summary>
              <p className="ppl-faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
