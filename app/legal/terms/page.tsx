export default function TermsPage() {
  return (
    <section className="container content-grid">
      <div className="hero hero-compact">
        <p className="kicker">Terms of Service</p>
        <h1>Terms of Service</h1>
        <p className="lead">Effective date: March 19, 2026</p>
      </div>

      <section className="info-block">
        <h2>1. Account and use</h2>
        <p>
          You agree to use the Service only for lawful communication and business purposes.
          You are responsible for account security and the content generated under your account.
        </p>
      </section>

      <section className="info-block">
        <h2>2. Acceptable use</h2>
        <p>
          You may not use the Service for fraud, abuse, malware distribution, harassment, or any activity that degrades
          platform availability. We keep policy checks for tone quality and misuse, but your team is still responsible for final
          message outcomes.
      </p>
      </section>

      <section className="info-block">
        <h2>3. Intellectual property</h2>
        <p>
          All platform materials, including software, branding, and interfaces, are protected by copyright, trademark, and
          other laws. Feature names and marks are owned by Frowns unless otherwise stated.
        </p>
      </section>

      <section className="info-block">
        <h2>4. Subscriptions and billing</h2>
        <p>
          Fees are billed according to your selected plan and renewal cycle.
          You authorize recurring charges until cancellation in accordance with your plan terms.
        </p>
      </section>

      <section className="info-block">
        <h2>5. Limitation of liability</h2>
        <p>
          The Service is provided on an "as-is" basis. To the fullest extent permitted by law, liability is limited to the
          amount paid in the prior twelve months where applicable by local law.
        </p>
      </section>
    </section>
  );
}
