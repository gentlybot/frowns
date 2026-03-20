import Link from "next/link";

const legalLinks = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/cookies", label: "Cookie Policy" },
  { href: "/legal/accessibility", label: "Accessibility & Standards" },
];

export default function LegalPage() {
  return (
    <section className="container content-grid">
      <div className="hero hero-compact">
        <p className="kicker">LEGAL</p>
        <h1>Legal notices with the same care as product quality.</h1>
        <p className="lead">
          Plain-language policies for privacy, usage, cookies, and standards. If there is a catch, we write it down.
        </p>
      </div>
      <section className="info-block">
        <h2>Available notices</h2>
        <ul className="feature-list">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="link-arrow">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
