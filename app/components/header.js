"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="ppl-header">
      <div className="ppl-header__inner ppl-container">
        <Link href="/" className="ppl-header__logo">
          Proper Path Loans
        </Link>

        <nav className="ppl-header__nav">
          <Link href="/personal-loans">Personal Loans</Link>
          <Link href="/personal-loans/texas/houston/debt-consolidation">Debt Consolidation</Link>
          <Link href="/personal-loans/texas/houston/bad-credit">Bad Credit</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        <Link href="/get-quote" className="ppl-btn ppl-btn--primary ppl-header__cta">
          Check My Rate
        </Link>

        <button
          className="ppl-header__burger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {mobileOpen && (
        <div className="ppl-header__mobile">
          <Link href="/personal-loans" onClick={() => setMobileOpen(false)}>Personal Loans</Link>
          <Link href="/personal-loans/texas/houston/debt-consolidation" onClick={() => setMobileOpen(false)}>Debt Consolidation</Link>
          <Link href="/personal-loans/texas/houston/bad-credit" onClick={() => setMobileOpen(false)}>Bad Credit Loans</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/get-quote" className="ppl-btn ppl-btn--primary" onClick={() => setMobileOpen(false)}>Check My Rate</Link>
        </div>
      )}
    </header>
  );
}
