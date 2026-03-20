import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProductSlugs } from "@/lib/products";

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export default function ProductLandingPage({ params }: Params) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="container content-grid">
      <article className="hero hero-split">
        <div>
          <p className="kicker">{product.kicker}</p>
          <h1>{product.headline}</h1>
          <p className="lead">{product.subhead}</p>
          <div className="hero-cta">
            <a href="#deep-dive" className="button button-primary">
              See capabilities
            </a>
            <Link href="/products" className="button button-secondary">
              Compare products
            </Link>
          </div>
        </div>
        <div className="hero-art card-image-wrap">
          <img src={product.illustration} alt={product.imageAlt} />
        </div>
      </article>

      <section className="info-block" id="deep-dive">
        <h2>{product.name}</h2>
        <p>{product.intro}</p>
        <p className="metric">{product.value}</p>
      </section>

      <section className="info-block">
        <h2>What it does</h2>
        <ul className="feature-list">
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="info-block">
        <h2>Best when</h2>
        <p>{product.scenario}</p>
      </section>

      <section className="info-block">
        <p className="quote">{product.proof}</p>
      </section>

      <section className="info-block">
        <Link href="/enterprise" className="button button-primary">
          {product.cta}
        </Link>
      </section>
    </section>
  );
}
