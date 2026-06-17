import { useEffect, useRef } from "react";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    tag: "Core",
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    title: "Frameworks & APIs",
    tag: "Backend / Frontend",
    skills: ["FastAPI", "React.js", "REST APIs", "gRPC", "LangChain", "LangGraph"],
  },
  {
    title: "AI / ML & Agentic Systems",
    tag: "AI",
    skills: [
      "Machine Learning",
      "Retrieval-Augmented Generation (RAG)",
      "AI Agents",
      "Model Context Protocol (MCP)",
      "OpenAI Embeddings",
      "Vector Search",
    ],
  },
  {
    title: "Databases & Caching",
    tag: "Data",
    skills: ["PostgreSQL", "MySQL", "SQLite", "ClickHouse", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    tag: "Infrastructure",
    skills: [
      "Google Cloud Platform (GCP)",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Linux",
    ],
  },
  {
    title: "Distributed Systems",
    tag: "Architecture",
    skills: [
      "Apache Kafka",
      "Celery",
      "Microservices Architecture",
      "Async Task Processing",
    ],
  },
  {
    title: "Tools & Platforms",
    tag: "Tools",
    skills: ["Git", "Linux", "Azure AI (AI-900)"],
  },
  {
    title: "Soft Skills",
    tag: "Human",
    skills: [
      "Problem Solving",
      "Creative Thinking",
      "Discipline & Focus",
      "Continuous Learning",
      "Collaboration",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".skill-card");
    if (!cards) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              e.target.style.opacity = "1";
              e.target.style.transform = "translateY(0)";
            }, i * 80);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" style={s.section}>
      <div className="container">
        <span className="section-tag">// 02 — Skills</span>
        <h2 className="section-title">What I Work With</h2>

        <div style={s.grid} ref={ref}>
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className="skill-card"
              style={{
                ...s.card,
                opacity: 0,
                transform: "translateY(18px)",
                transition: `opacity 0.45s ease, transform 0.45s ease, border-color 0.2s ease, box-shadow 0.2s ease`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={s.cardHead}>
                <span style={s.catTag}>{cat.tag}</span>
                <h3 style={s.catTitle}>{cat.title}</h3>
              </div>
              <div style={s.skillList}>
                {cat.skills.map((skill) => (
                  <div key={skill} style={s.skillItem}>
                    <span style={s.bullet}>→</span>
                    <span style={s.skillName}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  section: { background: "var(--bg-secondary)" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1rem",
  },
  card: {
    background: "var(--bg-tertiary)",
    border: "1.5px solid var(--border2)",
    padding: "1.25rem 1.25rem 1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  cardHead: {
    borderBottom: "1px solid var(--border)",
    paddingBottom: "0.75rem",
  },
  catTag: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.6rem",
    color: "var(--accent)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "0.3rem",
    opacity: 0.8,
  },
  catTitle: {
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "var(--text-primary)",
    letterSpacing: "-0.01em",
    lineHeight: 1.3,
  },
  skillList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
  },
  skillItem: {
    display: "flex",
    alignItems: "baseline",
    gap: "0.5rem",
  },
  bullet: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.65rem",
    color: "var(--accent)",
    flexShrink: 0,
  },
  skillName: {
    fontSize: "0.82rem",
    color: "var(--text-secondary)",
    lineHeight: 1.5,
    transition: "color 0.2s ease",
  },
};
