export default function AccessibilityPage() {
  return (
    <section className="container content-grid">
      <div className="hero hero-compact">
        <p className="kicker">Accessibility & Standards</p>
        <h1>Accessibility &amp; Standards</h1>
        <p className="lead">We build for everyone, including those using assistive technologies.</p>
      </div>

      <section className="info-block">
        <h2>1. Our commitment</h2>
        <p>
          We design interfaces to be keyboard navigable, color-contrast aware, and semantically structured.
          This is an active, ongoing commitment.
        </p>
      </section>

      <section className="info-block">
        <h2>2. Ongoing improvements</h2>
        <p>
          We conduct periodic accessibility reviews and use both manual and automated checks.
          If you encounter barriers, we encourage you to contact our support team and we will prioritize fixes.
        </p>
      </section>

      <section className="info-block">
        <h2>3. Reporting</h2>
        <p>
          Reach out to <a href="mailto:accessibility@frowns.example">accessibility@frowns.example</a> with issue details and a
          page URL. Include browser and assistive technology details for faster resolution.
        </p>
      </section>
    </section>
  );
}
