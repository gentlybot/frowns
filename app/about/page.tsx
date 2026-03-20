import Link from "next/link";

const values = [
  {
    title: "Intentional clarity",
    copy: "We build products that sound sharp in strategy docs and pleasant in live chat.",
  },
  {
    title: "Helpful irreverence",
    copy: "Playfulness is useful when it lowers friction. We keep it measured and reversible.",
  },
  {
    title: "Enterprise rigor",
    copy: "Control, auditability, and performance matter. Humor is layered on top of trust.",
  },
];

export default function AboutPage() {
  return (
    <section className="container content-grid">
      <div className="hero hero-split hero-compact">
        <div>
          <p className="kicker">ABOUT US</p>
          <h1>We make communication tools for teams that are tired of emotional whiplash.</h1>
          <p className="lead">
            Frowns began as a private script in a support inbox and grew into an idea: fix tone with as much structure as you fix uptime.
          </p>
        </div>
        <div className="hero-art card-image-wrap">
          <img
            src="/images/about-hero.svg"
            alt="A small team sketching communication journey maps at a workshop"
            loading="lazy"
          />
        </div>
      </div>

      <section className="info-block">
        <h2>Our story</h2>
        <p>
          We have a serious respect for deadlines, customer trust, and clear messaging. The same time, we know people
          respond better when the process is enjoyable. So we build systems that can be strict when needed and delightfully odd
          when possible.
        </p>
      </section>

      <section className="info-block">
        <h2>How we work</h2>
        <div className="feature-grid">
          {values.map((value) => (
            <article key={value.title} className="card card-with-art">
              <div className="mini-chip">Value</div>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="info-block">
        <h2>Team and collaborators</h2>
        <p>
          The team spans design, machine learning, and operations. We speak in clear metrics, keep an eye on delivery velocity,
          and celebrate wins in standups with the occasional dramatic hand gesture.
        </p>
      </section>

      <section className="info-block">
        <h2>Want to join the conversation?</h2>
        <Link href="/enterprise" className="button button-primary">
          Explore Enterprise
        </Link>
      </section>
    </section>
  );
}
