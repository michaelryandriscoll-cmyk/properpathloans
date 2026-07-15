// app/lib/_loanTypeList.js
// Single source of truth for all personal loan verticals
// Equivalent of _industryList25.js on smallbusiness.capital

const loanTypes = [
  {
    slug: "debt-consolidation",
    title: "Debt Consolidation Loans",
    label: "Debt Consolidation",
    h1Template: "Debt Consolidation Loans in {{city}}, {{state}}",
    metaTitle: "Debt Consolidation Loans in {{city}}, {{state}} | Proper Path Loans",
    metaDescription: "Compare debt consolidation loans in {{city}}, {{state}}. Combine high-interest debt into one lower monthly payment. Check your rate with no credit impact.",
    introTemplates: [
      "If you're carrying multiple high-interest balances in {{city}}, a debt consolidation loan can simplify your finances and potentially lower your monthly payments. Compare options from top lenders and check your rate without affecting your credit score.",
      "Residents of {{city}}, {{state}} use debt consolidation loans to roll credit cards, medical bills, and other debts into a single fixed monthly payment — often at a lower interest rate. See what you qualify for in minutes.",
      "A debt consolidation loan in {{city}} can replace multiple payments with one manageable monthly bill. Many borrowers in {{state}} reduce their total interest paid significantly by consolidating through a personal loan.",
    ],
    benefits: [
      "One fixed monthly payment instead of many",
      "Potentially lower interest rate than credit cards",
      "Set payoff date so you know when you'll be debt-free",
      "May improve your credit score over time",
    ],
    idealFor: [
      "Credit card debt",
      "Medical bills",
      "High-interest personal loans",
      "Store financing balances",
    ],
    stats: {
      rates: "6.99% – 35.99% APR",
      amounts: "$1,000 – $100,000",
      terms: "24 – 84 months",
    },
    affiliateLink: {
      url: "https://borrowmoney.us/?aff170631",
      label: "See Loan Options →",
    },
    faqs: [
      {
        q: "How does a debt consolidation loan actually save me money?",
        a: "It only saves you money if the new loan's interest rate is lower than the average rate on the debts you're rolling in. If your credit cards are running 24%+ APR and you qualify for a consolidation loan in the 7–15% range, you cut the interest cost significantly. If your credit is weak enough that your consolidation loan quote comes back close to or above your card rates, it may not be worth it — compare the actual APRs before signing.",
      },
      {
        q: "Will consolidating hurt my credit score?",
        a: "Checking your rate uses a soft credit pull, which doesn't affect your score. Taking out the loan itself can cause a small, temporary dip (a new account, a hard inquiry when you formally apply), but paying down revolving credit card balances to zero often helps your credit utilization ratio, which can offset that dip within a few months.",
      },
      {
        q: "What's the difference between this and a balance transfer credit card?",
        a: "A balance transfer card usually offers 0% APR for a limited promotional period (often 12–18 months), then jumps to a standard card rate. A debt consolidation loan has a fixed rate and a fixed payoff date for the entire term. Balance transfers can be cheaper if you can pay off the balance before the promo ends; a fixed loan is more predictable if you need longer than that to pay it off.",
      },
      {
        q: "Can I keep using my credit cards after I consolidate?",
        a: "You can, but it defeats the purpose. If you consolidate card balances into a loan and then run the cards back up, you end up with both the loan payment and new card debt. Most people who consolidate successfully either close or stop using the paid-off cards until the loan is repaid.",
      },
    ],
  },
  {
    slug: "bad-credit",
    title: "Personal Loans for Bad Credit",
    label: "Bad Credit Loans",
    h1Template: "Personal Loans for Bad Credit in {{city}}, {{state}}",
    metaTitle: "Bad Credit Personal Loans in {{city}}, {{state}} | Proper Path Loans",
    metaDescription: "Looking for personal loans with bad credit in {{city}}, {{state}}? Compare lenders who work with all credit types. Check your rate with no credit impact.",
    introTemplates: [
      "Having a low credit score doesn't mean you're out of options. Lenders in our network work with borrowers in {{city}}, {{state}} across all credit types — including scores below 600. Check what you qualify for with no impact to your credit.",
      "If you have bad credit and need a personal loan in {{city}}, {{state}}, you may have more options than you think. Many lenders consider factors beyond your credit score, including income and employment history.",
      "Bad credit personal loans in {{city}} help borrowers cover unexpected expenses, consolidate debt, or handle emergencies — even with a credit score under 600. See your options from multiple lenders in one place.",
    ],
    benefits: [
      "Lenders who work with credit scores as low as 560",
      "Soft credit check to see your rate — no impact to score",
      "Funds deposited as fast as next business day",
      "Fixed rates and predictable monthly payments",
    ],
    idealFor: [
      "Credit scores below 640",
      "Limited credit history",
      "Past bankruptcy or collections",
      "Rebuilding credit",
    ],
    stats: {
      rates: "9.99% – 35.99% APR",
      amounts: "$500 – $50,000",
      terms: "12 – 60 months",
    },
    affiliateLink: {
      url: "https://lowcreditfinance.com/?aff170630",
      label: "See Bad Credit Loan Options →",
    },
    faqs: [
      {
        q: "What credit score actually counts as \"bad credit\" for a personal loan?",
        a: "Lenders generally treat scores below 640 as subprime, with scores under 580 considered deep subprime. That said, bad-credit lenders in our network look at more than the number — income stability, employment history, and existing debt load all factor into approval and rate.",
      },
      {
        q: "Can I get approved with a score below 600?",
        a: "It's possible, but expect a higher APR to offset the lender's risk, and a smaller loan amount than someone with prime credit would qualify for. Some lenders in our network work with scores as low as 560; others set a higher floor. Checking your rate shows you which lenders are actually willing to work with your specific score.",
      },
      {
        q: "Will applying hurt my already-low credit score?",
        a: "Checking your rate through our form uses a soft credit pull, which does not affect your score. A hard inquiry only happens if you move forward and formally apply with a specific lender, and even then the impact is typically small and temporary.",
      },
      {
        q: "What if I've had a bankruptcy or collections on my record?",
        a: "A past bankruptcy or collection account doesn't automatically disqualify you, especially if it's aged and your recent payment history is stable. Lenders weigh how long ago it happened and what your credit looks like since then. Some specialize specifically in post-bankruptcy borrowers.",
      },
      {
        q: "Are bad credit loans more expensive than regular personal loans?",
        a: "Yes — rate is tied to risk, so lower credit scores mean higher APRs, generally in the 20–36% range versus single digits for prime borrowers. It's still usually cheaper than a payday loan or title loan, but compare the total cost against other options (like a secured card or credit union loan) before committing.",
      },
    ],
  },
  {
    slug: "emergency-loans",
    title: "Emergency Personal Loans",
    label: "Emergency Loans",
    h1Template: "Emergency Loans in {{city}}, {{state}}",
    metaTitle: "Emergency Loans in {{city}}, {{state}} | Proper Path Loans",
    metaDescription: "Need emergency cash fast in {{city}}, {{state}}? Compare personal loans with same-day or next-day funding. Check your rate instantly with no credit impact.",
    introTemplates: [
      "When an unexpected expense hits in {{city}}, waiting weeks for funding isn't an option. Emergency personal loans can put money in your account as fast as the same or next business day. Check your rate now with no credit impact.",
      "Emergency loans in {{city}}, {{state}} are designed for situations that can't wait — car repairs, medical bills, urgent home repairs, or sudden income loss. Compare lenders and see your options in minutes.",
      "Life doesn't wait, and neither should your access to funds. Borrowers in {{city}} can check emergency loan offers from multiple lenders instantly — with decisions in minutes and funding as fast as today.",
    ],
    benefits: [
      "Same-day or next business day funding available",
      "Quick online application — decision in minutes",
      "No collateral required",
      "Fixed payments so you can plan your budget",
    ],
    idealFor: [
      "Unexpected medical expenses",
      "Urgent car or home repairs",
      "Overdue bills or rent",
      "Job loss or income gaps",
    ],
    stats: {
      rates: "7.99% – 35.99% APR",
      amounts: "$250 – $35,000",
      terms: "3 – 60 months",
    },
    faqs: [
      {
        q: "How fast can I actually get the money?",
        a: "Some lenders in our network fund as fast as the same or next business day after approval, but that depends on when you apply, how quickly you submit any documents they request, and your bank's own deposit processing time. If a specific timeline matters, confirm it directly with the lender before accepting an offer.",
      },
      {
        q: "What can an emergency loan actually be used for?",
        a: "Anything — unlike some financing (a car loan, a mortgage), a personal loan has no restriction on use. Common reasons include car repairs, medical bills, funeral costs, or covering a gap after a job loss. The lender doesn't require you to justify the specific expense.",
      },
      {
        q: "Do I need good credit to qualify for an emergency loan?",
        a: "No — our network includes lenders who work across the credit spectrum, including subprime borrowers. Your credit profile affects your rate and the amount you're offered, but it doesn't automatically disqualify you the way it might with a traditional bank loan.",
      },
      {
        q: "Is there anything faster than a next-business-day loan?",
        a: "If you truly need money same-day, options are limited to whichever lenders in your state offer instant or same-day funding, which isn't universal. Payday and title loans fund faster but carry much higher costs and shorter repayment windows — worth understanding the tradeoff before choosing speed over cost.",
      },
    ],
  },
  {
    slug: "home-improvement",
    title: "Home Improvement Loans",
    label: "Home Improvement",
    h1Template: "Home Improvement Loans in {{city}}, {{state}}",
    metaTitle: "Home Improvement Loans in {{city}}, {{state}} | Proper Path Loans",
    metaDescription: "Compare home improvement loans in {{city}}, {{state}}. Finance renovations, repairs, or upgrades without tapping your home equity. Check your rate with no credit impact.",
    introTemplates: [
      "Planning a renovation in {{city}}? A personal home improvement loan lets you finance repairs or upgrades without using your home as collateral. Compare rates from top lenders and check your options with no credit impact.",
      "Home improvement loans in {{city}}, {{state}} give homeowners a fast, flexible way to fund renovations — from kitchen remodels to roof replacements — without a home equity loan or HELOC.",
      "Whether you're replacing a roof, upgrading a kitchen, or adding a bathroom in {{city}}, a personal home improvement loan can cover the cost with fixed monthly payments and no home equity required.",
    ],
    benefits: [
      "No home equity or collateral required",
      "Fixed rate and monthly payment",
      "Faster than a HELOC — funds in days not weeks",
      "Use for any home repair or renovation project",
    ],
    idealFor: [
      "Kitchen or bathroom remodels",
      "Roof, HVAC, or plumbing repairs",
      "Flooring, windows, or siding",
      "Additions or accessibility upgrades",
    ],
    stats: {
      rates: "6.99% – 35.99% APR",
      amounts: "$1,000 – $100,000",
      terms: "24 – 84 months",
    },
    faqs: [
      {
        q: "How is this different from a HELOC?",
        a: "A HELOC borrows against your home equity, requires an appraisal, and puts your home up as collateral. A personal home improvement loan is unsecured — no equity or appraisal required, and it doesn't put your house at risk if you can't pay. The tradeoff is usually a higher interest rate than a HELOC, since the lender has less security.",
      },
      {
        q: "Do I need to own my home outright, or have a lot of equity, to qualify?",
        a: "No — since these loans aren't secured by your home, your equity position doesn't factor into approval. Lenders look at your income, credit, and existing debt instead, the same as any other personal loan.",
      },
      {
        q: "Do I need to provide contractor quotes or receipts to qualify?",
        a: "Generally no. Most lenders don't require proof of how the funds will be spent, so you can apply before you've finalized a contractor or gotten a quote. That said, having a rough project budget in mind helps you request the right loan amount.",
      },
      {
        q: "Is the interest tax-deductible like a HELOC?",
        a: "Generally no. HELOC interest can be tax-deductible when the funds are used for home improvement, under current IRS rules. Personal loan interest is typically not deductible regardless of what it's used for. Talk to a tax professional about your specific situation before assuming either way.",
      },
    ],
  },
];

export default loanTypes;
