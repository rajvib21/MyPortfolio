import { useEffect, useRef } from "react";

const EXPERIENCE = [
  {
    period: "JAN 2026\nPRESENT",
    role: "Python Developer Intern",
    company: "NetAI",
    location: "Gandhinagar, India",
    type: "Full-time Internship",
    current: true,
    bullets: [
      "Built RESTful backend services using FastAPI within a Linux-based microservices architecture",
      "Developed an MCP-based chatbot with multi-tool agentic architecture for automated network queries",
      "Created a RAG chatbot for the product landing page using OpenAI Embeddings and LangChain for context-aware responses over documentation",
      "Built a MIB Browser with advanced search engine supporting 100,000+ OIDs, featuring List, Table, and Tree views",
      "Developed service-based landing pages with React.js",
      "Implemented Celery and gRPC for asynchronous task processing and inter-service communication",
    ],
    tags: ["FastAPI", "Python", "React.js", "RAG", "LangChain", "MCP Agents", "PostgreSQL", "gRPC", "Celery", "Linux", "Docker"],
  },
];

const CERTIFICATIONS = [
  {
    period: "JUL 2025",
    role: "Azure AI Fundamentals",
    company: "Microsoft Certification",
    location: "AI-900",
    type: "Certification",
    bullets: ["Certified in Azure AI services, machine learning concepts, and responsible AI practices"],
    tags: ["Azure", "AI/ML", "Cloud"],
  },
  {
    period: "FEB 2025",
    role: "Intro to Data Science & AI",
    company: "Certification",
    location: "Online",
    type: "Certification",
    bullets: ["Foundations of data science, AI concepts, and applied machine learning"],
    tags: ["Data Science", "AI", "Machine Learning"],
  },
];

function ExpCard({ item }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div style={s.row}>
      <div style={s.dateCol}>
        {item.period.split("\n").map((line, i) => (
          <span key={i} style={{ ...s.dateText, color: i === 1 ? "var(--accent)" : "var(--text-secondary)" }}>
            {line}
          </span>
        ))}
        {item.current && <span style={s.liveDot} />}
      </div>
      <div
        ref={cardRef}
        style={{
          ...s.card,
          borderLeft: item.current ? "3px solid var(--accent)" : "1.5px solid var(--border2)",
          transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
      >
        <div style={s.cardTop}>
          <div>
            <div style={s.role}>{item.role}</div>
            <div style={s.company}>
              {item.company}
              <span style={s.dot}>·</span>
              {item.location}
            </div>
          </div>
          <span style={s.typeBadge}>{item.type}</span>
        </div>
        <ul style={s.ul}>
          {item.bullets.map((b, i) => (
            <li key={i} style={s.li}>
              <span style={s.arrow}>→</span>
              <span style={s.liText}>{b}</span>
            </li>
          ))}
        </ul>
        {item.tags && (
          <div style={s.tags}>
            {item.tags.map((t) => (
              <span key={t} style={s.tag}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <span className="section-tag">// 03 — Experience</span>
        <h2 className="section-title">Where I've Worked</h2>

        <div style={s.wrap}>
          {EXPERIENCE.map((item) => (
            <ExpCard key={item.role} item={item} />
          ))}

          <div style={s.certHeading}>Certifications</div>
          {CERTIFICATIONS.map((item) => (
            <ExpCard key={item.role} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  wrap: { maxWidth: 820 },
  row: {
    display: "grid",
    gridTemplateColumns: "110px 1fr",
    gap: "2rem",
    marginBottom: "1.5rem",
  },
  dateCol: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    alignItems: "flex-end",
    paddingTop: "0.3rem",
    position: "relative",
  },
  dateText: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.65rem",
    letterSpacing: "0.05em",
    lineHeight: 1.6,
  },
  liveDot: {
    width: 8,
    height: 8,
    background: "#4ade80",
    borderRadius: "50%",
    marginTop: "0.4rem",
    boxShadow: "0 0 0 3px rgba(74,222,128,0.2)",
  },
  card: {
    background: "var(--bg-secondary)",
    border: "1.5px solid var(--border2)",
    padding: "1.5rem",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "1rem",
    gap: "1rem",
  },
  role: {
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "var(--text-primary)",
    marginBottom: "0.2rem",
  },
  company: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.72rem",
    color: "var(--accent)",
    letterSpacing: "0.04em",
  },
  dot: {
    margin: "0 0.4rem",
    opacity: 0.4,
  },
  typeBadge: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.6rem",
    color: "var(--text-secondary)",
    border: "1px solid var(--border2)",
    padding: "0.2rem 0.5rem",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  ul: { listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" },
  li: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.6rem",
  },
  arrow: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.7rem",
    color: "var(--accent)",
    flexShrink: 0,
    marginTop: "0.15rem",
  },
  liText: {
    fontSize: "0.85rem",
    color: "var(--text-secondary)",
    lineHeight: 1.65,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
    marginTop: "1rem",
    paddingTop: "1rem",
    borderTop: "1px solid var(--border)",
  },
  tag: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.62rem",
    padding: "0.15rem 0.5rem",
    border: "1px solid var(--border2)",
    color: "var(--text-secondary)",
  },
  certHeading: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.65rem",
    color: "var(--accent)",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "1rem",
    marginTop: "1rem",
    paddingLeft: "130px",
  },
};
