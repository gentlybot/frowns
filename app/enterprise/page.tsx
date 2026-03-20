import Link from "next/link";

const points = [
  "Single sign-on and directory integration",
  "Governance policies per product and region",
  "Audit trail for all generated replies and overrides",
  "Dedicated onboarding with governance playbooks",
];

export default function EnterprisePage() {
  return (
    <section className="container content-grid">
      <div className="hero hero-split hero-compact">
        <div>
          <p className="kicker">ENTERPRISE</p>
          <h1>Scale tone, compliance, and confidence across departments.</h1>
          <p className="lead">
            For larger teams, we combine policy control with calm brand delivery. No chaos, no panic, and definitely no mysterious
            emojis in production notes.
          </p>
          <div className="hero-cta">
            <Link href="mailto:enterprise@frowns.example" className="button button-primary">
              Request demo
            </Link>
            <Link href="/legal/terms" className="button button-secondary">
              View terms
            </Link>
          </div>
        </div>
        <img src="/images/enterprise-hero.svg" alt="Enterprise control dashboard and governance workflow" className="hero-art" loading="lazy" />
      </div>

      <section className="info-block">
        <h2>What enterprise gets</h2>
        <ul className="feature-list">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="info-block split-columns">
        <article>
          <h2>Pilot</h2>
          <p className="kicker">30-day implementation</p>
          <p>Roll out across one department. Validate tone governance and reporting with guided rollout support.</p>
        </article>
        <article>
          <h2>Platform</h2>
          <p className="kicker">Cross-team activation</p>
          <p>Apply shared templates to support, success, and sales while retaining local customization rights.</p>
        </article>
        <article>
          <h2>Global Rollout</h2>
          <p className="kicker">Scale with controls</p>
          <p>Multi-region governance, compliance visibility, and advanced observability for leadership reviews.</p>
        </article>
      </section>

      <section className="info-block">
        <h2>Security and trust</h2>
        <p>
          We prioritize least-privilege access, encrypted traffic, regular incident response drills, and documented retention
          policies. Your message quality can improve without compromising your internal standards.
        </p>
      </section>

      <section className="info-block">
        <h2>Need a proposal?</h2>
        <Link href="mailto:enterprise@frowns.example" className="button button-primary">
          Request enterprise consultation
        </Link>
      </section>
    </section>
  );
}
