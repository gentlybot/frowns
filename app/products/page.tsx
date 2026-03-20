import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <section className="container content-grid">
      <div className="hero hero-split hero-compact">
        <div>
          <p className="kicker">PRODUCT LANDING HUB</p>
          <h1>Different teams. Different frowns. One clear approach.</h1>
          <p className="lead">
            Browse product pages designed for support, analytics, and enterprise tone governance.
          </p>
          <p className="muted-copy">
            All pages share one tone engine and one serious mission: less friction in customer conversations.
          </p>
        </div>
        <img
          src="/images/products-hero.svg"
          alt="Product cards and smiling conversation bubbles"
          className="hero-art"
          loading="lazy"
        />
      </div>

      <section className="info-block">
        <div className="feature-grid">
          {products.map((product) => (
            <article key={product.slug} className="card card-with-art">
              <img src={product.illustration} alt={product.imageAlt} loading="lazy" className="card-image" />
              <p className="kicker">{product.kicker}</p>
              <h2>{product.name}</h2>
              <p>{product.subhead}</p>
              <Link href={`/products/${product.slug}`} className="button button-primary block">
                Visit {product.name}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
