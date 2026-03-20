import { SiteLogo } from "./site-logo";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/legal", label: "Legal" },
];

export function SiteNav() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <SiteLogo variant="wordmark" />
        <nav aria-label="Main">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
