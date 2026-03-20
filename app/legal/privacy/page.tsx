export default function PrivacyPolicyPage() {
  return (
    <section className="container content-grid">
      <div className="hero hero-compact">
        <p className="kicker">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p className="lead">Effective date: March 19, 2026</p>
      </div>

      <section className="info-block">
        <h2>1. What we collect</h2>
        <p>
          We collect account information, organization details, support and communication data, usage telemetry, and aggregate
          product analytics needed to improve platform quality and reliability.
        </p>
      </section>

      <section className="info-block">
        <h2>2. How we use information</h2>
        <p>
          We use information to operate our services, provide tone guidance recommendations, monitor quality metrics,
          troubleshoot incidents, and create aggregated reports. We do not sell your personal data to third parties.
        </p>
      </section>

      <section className="info-block">
        <h2>3. Data retention</h2>
        <p>
          We keep records for as long as needed to provide services and meet applicable legal obligations.
          You can request retention reductions, exports, or deletion where law allows.
        </p>
      </section>

      <section className="info-block">
        <h2>4. Security</h2>
        <p>
          We use encryption in transit, role-based access controls, monitoring, and policy-based audit controls.
          Enterprise controls may include stricter settings as configured by your organization.
        </p>
      </section>

      <section className="info-block">
        <h2>5. Your rights</h2>
        <p>
          Depending on location, you may have access, correction, deletion, and portability rights.
          Email legal requests to <a href="mailto:privacy@frowns.example">privacy@frowns.example</a>.
        </p>
      </section>
    </section>
  );
}
