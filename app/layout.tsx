import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Frowns | Turn smiles upside down",
  description:
    "A marketing site for Frowns, a suite of products that help teams transform negative tones into constructive communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
          <a
            className="floating-cta"
            href="mailto:hello@frowns.example"
          >
            Talk to Us
          </a>
        </div>
      </body>
    </html>
  );
}
