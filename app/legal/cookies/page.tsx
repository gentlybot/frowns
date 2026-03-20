export default function CookiePolicyPage() {
  return (
    <section className="container content-grid">
      <div className="hero hero-compact">
        <p className="kicker">Cookie Policy</p>
        <h1>Cookie Policy</h1>
        <p className="lead">Last updated: March 19, 2026</p>
      </div>

      <section className="info-block">
        <h2>1. What is a cookie</h2>
        <p>
          A cookie is a small web file used to remember preferences and improve site reliability.
          We also use local storage to maintain UI state and preferences where needed.
        </p>
      </section>

      <section className="info-block">
        <h2>2. Types we use</h2>
        <ul className="feature-list">
          <li>Strictly necessary: session and authentication cookies.</li>
          <li>Performance: usage telemetry and latency diagnostics.</li>
          <li>Functional: user preferences and product demo settings.</li>
        </ul>
      </section>

      <section className="info-block">
        <h2>3. Managing preferences</h2>
        <p>
          You can delete and block cookies in your browser settings at any time.
          Blocking required cookies may affect sign-in and saved preferences.
        </p>
      </section>
    </section>
  );
}
