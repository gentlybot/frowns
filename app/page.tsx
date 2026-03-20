import Link from "next/link";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <section className="container content-grid">
      <div className="hero hero-split">
        <div>
          <p className="kicker">TURN SMILES UPSIDE DOWN</p>
          <h1>Frowns helps you reverse negativity without losing your composure.</h1>
          <p className="lead">
            We combine tone intelligence, playful confidence, and serious infrastructure to
            help teams keep conversations useful, fast, and oddly uplifting.
          </p>
          <div className="hero-cta">
            <Link href="/products/frown-flip" className="button button-primary">
              Explore Frown Flip
            </Link>
            <Link href="/enterprise" className="button button-secondary">
              Enterprise Controls
            </Link>
          </div>
        </div>
        <div className="hero-art card-image-wrap">
          <img
            src="/images/frowns-hero.svg"
            alt="Two speech bubbles turning a frown into a smile"
            loading="lazy"
          />
        </div>
      </div>

      <section className="info-block">
        <h2>Why teams pick Frowns</h2>
        <div className="feature-grid">
          <article className="card">
            <h3>Fast, not fluffy</h3>
            <p>Real-time guidance with practical suggestions and configurable guardrails.</p>
          </article>
          <article className="card">
            <h3>Serious outcomes</h3>
            <p>Improved response consistency, reduced tone escalations, and cleaner leadership reporting.</p>
          </article>
          <article className="card">
            <h3>Built-in personality</h3>
            <p>Playful defaults that make your team smile, with controls to keep it on-brand.</p>
          </article>
        </div>
      </section>

      <section className="info-block">
        <h2>Featured products</h2>
        <div className="feature-grid">
          {products.map((product) => (
            <article key={product.slug} className="card card-with-art">
              <img src={product.illustration} alt={product.imageAlt} loading="lazy" className="card-image" />
              <div>
                <p className="kicker">{product.kicker}</p>
                <h3>{product.name}</h3>
                <p>{product.headline}</p>
                <Link href={`/products/${product.slug}`} className="link-arrow">
                  Open landing page →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
