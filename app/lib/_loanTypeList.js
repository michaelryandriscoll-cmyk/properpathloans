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
  },
];

export default loanTypes;
