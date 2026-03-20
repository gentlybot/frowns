import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© 2026 Frowns. Serious brand tone with optional cheek.</p>
        <p>
          No smiles were harmed in the creation of this platform. Some metaphors may have been reoriented.
        </p>
        <div className="footer-links">
          <Link href="/legal/privacy">Privacy Policy</Link>
          <Link href="/legal/terms">Terms of Service</Link>
          <Link href="/legal/cookies">Cookie Policy</Link>
          <Link href="/legal/accessibility">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
