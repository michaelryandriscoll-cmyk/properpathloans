import Link from "next/link";

export default function Footer() {
  return (
    <footer className="ppl-footer">
      <div className="ppl-container">
        <div className="ppl-footer__grid">

          <div className="ppl-footer__col">
            <div className="ppl-footer__logo">Proper Path Loans</div>
            <p className="ppl-footer__tagline">
              Helping you find the right personal loan for your situation. Compare lenders, check your rate, and get funded fast.
            </p>
            <p className="ppl-footer__phone">(888) 900-8979</p>
          </div>

          <div className="ppl-footer__col">
            <div className="ppl-footer__heading">Loan Types</div>
            <Link href="/personal-loans/texas/houston/debt-consolidation">Debt Consolidation</Link>
            <Link href="/personal-loans/texas/houston/bad-credit">Bad Credit Loans</Link>
            <Link href="/personal-loans/texas/houston/emergency-loans">Emergency Loans</Link>
            <Link href="/personal-loans/texas/houston/home-improvement">Home Improvement</Link>
          </div>

          <div className="ppl-footer__col">
            <div className="ppl-footer__heading">Browse by State</div>
            <Link href="/personal-loans/texas">Texas</Link>
            <Link href="/personal-loans/florida">Florida</Link>
            <Link href="/personal-loans/california">California</Link>
            <Link href="/personal-loans/new-york">New York</Link>
            <Link href="/personal-loans">All States</Link>
          </div>

          <div className="ppl-footer__col">
            <div className="ppl-footer__heading">Company</div>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
          </div>

        </div>

        <div className="ppl-footer__bottom">
          <p className="ppl-footer__disclaimer">
            Proper Path Loans is not a lender. We connect consumers with third-party lenders and financial service providers. Loan approval, terms, and availability are determined solely by the lender. Checking your rate does not affect your credit score. APR ranges vary by lender and creditworthiness.
          </p>
          <p className="ppl-footer__copy">© {new Date().getFullYear()} Proper Provider Companies LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
