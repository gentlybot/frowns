import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="container content-grid">
      <div className="hero">
        <p className="kicker">404</p>
        <h1>That path got distracted.</h1>
        <p className="lead">
          We couldn&apos;t find this page, but we can still help you turn things around.
        </p>
        <div className="hero-cta">
          <Link href="/" className="button button-primary">
            Return Home
          </Link>
          <Link href="/products" className="button button-secondary">
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}
