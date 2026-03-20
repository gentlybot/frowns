import Link from "next/link";

type LogoVariant = "wordmark" | "mark" | "badge";

type Props = {
  variant?: LogoVariant;
  className?: string;
};

const logos: Record<
  LogoVariant,
  {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
> = {
  wordmark: {
    src: "/images/frowns-logo-mark.svg",
    alt: "Frowns logo",
    width: 34,
    height: 34,
  },
  mark: {
    src: "/images/frowns-logo-mark.svg",
    alt: "Frowns mark",
    width: 38,
    height: 38,
  },
  badge: {
    src: "/images/frowns-logo-badge.svg",
    alt: "Frowns badge",
    width: 72,
    height: 44,
  },
};

export function SiteLogo({ variant = "wordmark", className }: Props) {
  const logo = logos[variant];

  return (
    <Link className={`brand ${className ?? ""}`.trim()} href="/">
      <img
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt={logo.alt}
        className="brand-logo-image"
      />
      {variant !== "mark" && <span className="brand-text">Frowns.</span>}
    </Link>
  );
}
