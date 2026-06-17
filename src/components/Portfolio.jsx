import { useEffect, useRef } from "react";

const PROJECTS = [
  {
    num: "01",
    type: "AI / Productivity",
    name: "AI Habit Tracker & Productivity Coach",
    desc: "Intuitive productivity dashboard with progress heatmaps, mood tracking, completion trends, and AI-generated weekly performance summaries to help users monitor habits and gain actionable insights.",
    stack: ["Python", "React.js", "LangChain", "PostgreSQL"],
    github: "https://github.com/rajvib21/AI-HABIT_COACH",
    live: null,
  },
  {
    num: "02",
    type: "AI / NLP",
    name: "AI RAG Chatbot",
    desc: "AI-powered RAG chatbot using OpenAI Embeddings and LangChain with text chunking, vector search, and semantic retrieval for context-aware question answering over product documentation.",
    stack: ["Python", "LangChain", "OpenAI", "FastAPI", "SQLite"],
    github: null,
    live: "https://netai.netaihub.tech/",
  },
  {
    num: "03",
    type: "Tool / Network",
    name: "MIB Browser",
    desc: "Powerful MIB Browser with search engine supporting 100,000+ OIDs, built on PostgreSQL and React.js. Features List, Table, and Tree views plus a role-based admin panel for CRUD operations.",
    stack: ["React.js", "PostgreSQL", "FastAPI"],
    github: null,
    live: "https://mibs.netaihub.tech/",
  },
  {
    num: "04",
    type: "ML / Healthcare",
    name: "Heart Attack Prediction System",
    desc: "Trained a Decision Tree classifier on real health data (age, cholesterol, BP, heart rate) to predict heart attack risk with explainable, human-readable decision paths.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/rajvib21/heart_attack_predictor_ml",
    live: null,
  },
  {
    num: "05",
    type: "AI / Sustainability",
    name: "AI Food Surplus Tracker",
    desc: "Smart system to track, manage, and reduce food surplus — helping tackle real-world waste problems through AI-driven insights and intelligent recommendations.",
    stack: ["Python", "FastAPI", "AI"],
    github: "https://github.com/rajvib21/Surplus_Food_Tracker",
    live: null,
  },
  {
    num: "06",
    type: "Hackathon / Community",
    name: "Stack It — Odoo Hackathon",
    desc: "Built during an Odoo hackathon — a collaborative Q&A platform for developers to share knowledge, ask questions, and grow together within the community.",
    stack: ["Python", "Odoo"],
    github: "https://github.com/rajvib21/stackit-odoo",
    live: null,
  },
  {
    num: "07",
    type: "Creative / Fun",
    name: "Mother's Day Game",
    desc: "A heartfelt interactive game built to celebrate Mother's Day — blending creativity with code to create a memorable and personal digital experience.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/rajvib21/mother-s_day_game",
    live: null,
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, (index % 3) * 100);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const rotation = index % 2 === 0 ? "-0.4deg" : "0.4deg";

  return (
    <div
      ref={ref}
      style={{
        ...s.card,
        transform: `rotate(${rotation})`,
        transition: "opacity 0.5s ease, transform 0.4s ease, border-color 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "rotate(0deg) translate(-3px, -5px)";
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.boxShadow = "var(--shadow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotation})`;
        e.currentTarget.style.borderColor = "var(--border2)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={s.cardMeta}>
        <span style={s.num}>{project.num}</span>
        <span style={s.type}>{project.type}</span>
      </div>
      <h3 style={s.name}>{project.name}</h3>
      <p style={s.desc}>{project.desc}</p>
      <div style={s.stack}>
        {project.stack.map((t) => (
          <span key={t} style={s.tech}>{t}</span>
        ))}
      </div>
      <div style={s.links}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" style={s.link}
            onMouseEnter={(e) => { e.target.style.borderBottomColor = "var(--accent)"; }}
            onMouseLeave={(e) => { e.target.style.borderBottomColor = "transparent"; }}
          >
            GitHub ↗
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" style={s.link}
            onMouseEnter={(e) => { e.target.style.borderBottomColor = "var(--accent)"; }}
            onMouseLeave={(e) => { e.target.style.borderBottomColor = "transparent"; }}
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="projects" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <span className="section-tag">// 04 — Projects</span>
        <h2 className="section-title">Featured Projects</h2>

        <div style={s.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.25rem",
  },
  card: {
    background: "var(--bg-tertiary)",
    border: "1.5px solid var(--border2)",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },
  cardMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.25rem",
  },
  num: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.65rem",
    color: "var(--accent)",
    letterSpacing: "0.1em",
  },
  type: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.6rem",
    color: "var(--text-secondary)",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  name: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "var(--text-primary)",
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
  },
  desc: {
    fontSize: "0.82rem",
    color: "var(--text-secondary)",
    lineHeight: 1.7,
    flex: 1,
  },
  stack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.35rem",
    paddingTop: "0.5rem",
  },
  tech: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.6rem",
    padding: "0.15rem 0.45rem",
    background: "var(--bg-primary)",
    border: "1px solid var(--border2)",
    color: "var(--text-secondary)",
  },
  links: {
    display: "flex",
    gap: "1rem",
    marginTop: "0.5rem",
    paddingTop: "0.75rem",
    borderTop: "1px solid var(--border)",
  },
  link: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.68rem",
    color: "var(--accent)",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "0.07em",
    borderBottom: "1px solid transparent",
    transition: "border-color 0.2s ease",
  },
};
