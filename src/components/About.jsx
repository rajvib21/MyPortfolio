import { useEffect, useRef } from "react";

const TAGS = [
  "Computer Engineer",
  "AI Explorer",
  "Bharatnatyam Graduate",
  "State Rank Holder",
  "Traveller",
  "Journal Lover",
  "Plant Parent",
  "Creative Thinker",
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".about-tag");
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              e.target.style.opacity = "1";
              e.target.style.transform = "translateY(0)";
            }, i * 60);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" style={s.section}>
      <div className="container">
        <span className="section-tag">// 01 — About</span>
        <h2 className="section-title">About Me</h2>

        <div style={s.grid} ref={ref}>
          {/* Left — text */}
          <div style={s.textCol}>
            <p style={s.para}>
              I'm a <strong style={s.strong}>Computer Engineering graduate</strong> and an AI
              enthusiast currently gaining hands-on industry experience through a six-month
              internship at NetAI, Gandhinagar. What excites me most about technology is its
              ability to solve everyday problems — whether that's reducing food waste, building
              smarter assistants, or creating experiences people genuinely enjoy using.
            </p>
            <p style={s.para}>
              Beyond coding, I believe creativity shapes the way we solve problems. I hold a{" "}
              <strong style={s.strong}>Bachelor's degree in Bharatnatyam</strong> and have
              achieved state-level ranks in classical dance and music. These art forms have
              taught me discipline, patience, and the importance of continuous practice.
            </p>
            <p style={s.para}>
              When I'm not exploring AI, I enjoy journaling, travelling, gardening, and
              collecting memories. I love connecting with curious and passionate people.
            </p>

            {/* Stat row */}
            <div style={s.stats}>
              <div style={s.stat}>
                <span style={s.statNum}>8.5</span>
                <span style={s.statLabel}>CGPA</span>
              </div>
              <div style={s.statDiv} />
              <div style={s.stat}>
                <span style={s.statNum}>6+</span>
                <span style={s.statLabel}>Months at NetAI</span>
              </div>
              <div style={s.statDiv} />
              <div style={s.stat}>
                <span style={s.statNum}>7+</span>
                <span style={s.statLabel}>Projects Built</span>
              </div>
            </div>
          </div>

          {/* Right — identity tags */}
          <div style={s.tagCol}>
            <div style={s.tagHeading}>Who I Am</div>
            <div style={s.tagGrid}>
              {TAGS.map((tag, i) => (
                <div
                  key={tag}
                  className="about-tag"
                  style={{
                    ...s.tag,
                    opacity: 0,
                    transform: "translateY(12px)",
                    transition: `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s, border-color 0.2s ease, box-shadow 0.2s ease`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                    e.currentTarget.style.transform = "translate(-1px, -1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border2)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span style={s.tagIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={s.tagText}>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const s = {
  section: { background: "var(--bg-primary)" },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "start",
  },
  textCol: {},
  para: {
    fontSize: "1rem",
    color: "var(--text-secondary)",
    lineHeight: 1.85,
    marginBottom: "1.25rem",
  },
  strong: { color: "var(--text-primary)", fontWeight: 600 },
  stats: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    marginTop: "2rem",
    paddingTop: "1.5rem",
    borderTop: "1px solid var(--border)",
  },
  stat: { display: "flex", flexDirection: "column", gap: "0.2rem" },
  statNum: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "1.6rem",
    fontWeight: 700,
    color: "var(--accent)",
    lineHeight: 1,
  },
  statLabel: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.62rem",
    color: "var(--text-secondary)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  statDiv: {
    width: 1,
    height: 36,
    background: "var(--border2)",
  },
  tagCol: {},
  tagHeading: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.65rem",
    color: "var(--accent)",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  tagGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.6rem",
  },
  tag: {
    background: "var(--bg-secondary)",
    border: "1.5px solid var(--border2)",
    padding: "0.85rem 1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    cursor: "default",
  },
  tagIndex: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.6rem",
    color: "var(--accent)",
    minWidth: "1.5rem",
    opacity: 0.7,
  },
  tagText: {
    fontSize: "0.8rem",
    color: "var(--text-primary)",
    fontWeight: 500,
    letterSpacing: "0.01em",
  },
};
