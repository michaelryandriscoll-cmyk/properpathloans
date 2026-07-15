"use client";

import { useState, useMemo } from "react";

function formatCurrency(n) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function LoanCalculator() {
  const [amount, setAmount] = useState(15000);
  const [rate, setRate] = useState(14.9);
  const [term, setTerm] = useState(36);

  const result = useMemo(() => {
    const principal = Number(amount) || 0;
    const annualRate = Number(rate) || 0;
    const months = Number(term) || 1;
    const monthlyRate = annualRate / 100 / 12;

    let monthlyPayment;
    if (monthlyRate === 0) {
      monthlyPayment = principal / months;
    } else {
      monthlyPayment =
        (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    }

    const totalPaid = monthlyPayment * months;
    const totalInterest = totalPaid - principal;

    return {
      monthlyPayment: isFinite(monthlyPayment) ? monthlyPayment : 0,
      totalPaid: isFinite(totalPaid) ? totalPaid : 0,
      totalInterest: isFinite(totalInterest) ? totalInterest : 0,
    };
  }, [amount, rate, term]);

  return (
    <div className="ppl-calc">
      <div className="ppl-calc__inputs">
        <div className="ppl-calc__field">
          <div className="ppl-calc__field-header">
            <label htmlFor="calc-amount">Loan amount</label>
            <span className="ppl-calc__value">{formatCurrency(amount)}</span>
          </div>
          <input
            id="calc-amount"
            type="range"
            min="500"
            max="100000"
            step="500"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="ppl-calc__field">
          <div className="ppl-calc__field-header">
            <label htmlFor="calc-rate">Estimated APR</label>
            <span className="ppl-calc__value">{Number(rate).toFixed(1)}%</span>
          </div>
          <input
            id="calc-rate"
            type="range"
            min="5.99"
            max="35.99"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </div>

        <div className="ppl-calc__field">
          <div className="ppl-calc__field-header">
            <label htmlFor="calc-term">Loan term</label>
            <span className="ppl-calc__value">
              {term} months ({(term / 12).toFixed(1)} yrs)
            </span>
          </div>
          <input
            id="calc-term"
            type="range"
            min="6"
            max="84"
            step="6"
            value={term}
            onChange={(e) => setTerm(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="ppl-calc__results">
        <div className="ppl-calc__result ppl-calc__result--primary">
          <span className="ppl-calc__result-label">Estimated monthly payment</span>
          <span className="ppl-calc__result-value">{formatCurrency(result.monthlyPayment)}</span>
        </div>
        <div className="ppl-calc__result">
          <span className="ppl-calc__result-label">Total interest paid</span>
          <span className="ppl-calc__result-value">{formatCurrency(result.totalInterest)}</span>
        </div>
        <div className="ppl-calc__result">
          <span className="ppl-calc__result-label">Total amount paid</span>
          <span className="ppl-calc__result-value">{formatCurrency(result.totalPaid)}</span>
        </div>
      </div>

      <p className="ppl-calc__disclaimer">
        This is an estimate for illustration only, based on a standard fixed-rate
        amortization formula. Your actual rate, term, and payment depend on the
        lender and your credit profile — check your real rate to see personalized
        offers with no impact to your credit score.
      </p>
    </div>
  );
}
