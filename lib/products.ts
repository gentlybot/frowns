export type Product = {
  slug: string;
  name: string;
  kicker: string;
  headline: string;
  subhead: string;
  intro: string;
  value: string;
  features: string[];
  scenario: string;
  proof: string;
  cta: string;
  illustration: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    slug: "frown-flip",
    name: "Frown Flip™",
    kicker: "Customer support, only upside-down.",
    headline: "Turn angry chats into helpful moments.",
    subhead: "Frown Flip detects sharp edges in customer interactions and instantly suggests neutral, then positive phrasing with confidence-first tone checks.",
    intro: "The original classic. For teams who used to respond in panic and now reply in prose that sounds calm, calm, and occasionally funny in the best possible way.",
    value: "Average response quality score improved 42% in the first month with teams that enabled auto-suggestions on inbound support tickets.",
    features: [
      "Real-time sentiment inversion for every channel.",
      "Team policy controls with language and escalation filters.",
      "Tone consistency templates for every support queue.",
      "Slack and Zendesk hooks so no one has to leave their workflow.",
    ],
    scenario: "Best for support, billing, and onboarding channels where one harsh sentence can cost a lot of goodwill.",
    proof: "\"We used to lose customers by accident. Now we lose the urge to over-apologize.\" — Operations lead, North Peak SaaS",
    cta: "Use Frown Flip for your support squad",
    illustration: "/images/frown-flip-hero.svg",
    imageAlt: "Support agent transforming an angry message into a friendly one",
  },
  {
    slug: "smile-map",
    name: "SmileMap™",
    kicker: "Mood analytics for people who trust dashboards.",
    headline: "Chart the emotional weather of your customers and your team.",
    subhead: "SmileMap surfaces where friction begins, where trust is restored, and where the mood curve sharply turns.",
    intro: "A no-nonsense analytics layer with a little irreverent soul. Track tone, detect turning points, and fix bottlenecks before they become crisis.",
    value: "Teams using SmileMap cut average response escalations and identify stress spikes before churn events.",
    features: [
      "Team-wide sentiment timelines and trend alerts.",
      "Automated weekly mood reports with action recommendations.",
      "Exportable evidence packs for operations and leadership.",
      "Cross-channel correlation between support tickets, social mentions, and surveys.",
    ],
    scenario: "Ideal for product-led companies that need hard data with a side of emotional context.",
    proof: "\"The heatmaps showed us exactly when our onboarding narrative started sounding like ransom notes.\" — Head of RevOps",
    cta: "Inspect your mood map",
    illustration: "/images/smile-map-hero.svg",
    imageAlt: "Dashboard with sentiment curves and customer communication mood map",
  },
  {
    slug: "ceremonial-mode",
    name: "Ceremonial Mode™",
    kicker: "Tone policy for enterprise, wrapped in a tuxedo.",
    headline: "Institutionalize your communication standards without sounding robotic.",
    subhead: "Govern every template, message, and playbook with policy-aware language checks and optional preflight approval gates.",
    intro: "Built for leadership who want consistent messaging at scale. Silly problems get solved with serious controls.",
    value: "Compliance-minded teams reduce risky outbound phrasing and improve executive confidence in customer communication.",
    features: [
      "Enterprise-wide phrasebooks with legal-reviewed tone rules.",
      "Approval workflows for sensitive replies.",
      "Audit logging for all tone adjustments and escalation overrides.",
      "Single sign-on and directory integration.",
    ],
    scenario: "Built for regulated teams and larger organizations that need both speed and governance.",
    proof: "Used to standardize communication style across six departments while preserving each team's natural voice.",
    cta: "Enable enterprise controls",
    illustration: "/images/ceremonial-mode-hero.svg",
    imageAlt: "Team reviewing tone policy board with approval workflow visuals",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductSlugs() {
  return products.map((product) => product.slug);
}
