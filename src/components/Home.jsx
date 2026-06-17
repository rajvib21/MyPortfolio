// import HeroImage from "../assets/heroImage.png"; // Uncomment when you add your photo

const STICKERS = ["CREATE", "BUILD", "AI", "LEARN", "DANCE"];

const MARQUEE_ITEMS = [
  "React", "Python", "FastAPI", "LangChain", "Machine Learning",
  "RAG", "PostgreSQL", "Docker", "GCP", "AI Agents", "Bharatnatyam", "LangGraph",
];

export default function Home() {
  return (
    <>
      <section id="home" style={s.section}>
        <div className="container" style={s.container}>
          <div style={s.grid}>

            {/* ── LEFT ── */}
            <div style={s.left}>
              <div style={s.badge}>
                <span style={s.dot} />
                Open to Opportunities
              </div>

              <h1 style={s.name}>
                RAJVI<br /><span style={s.nameAccent}>B.</span>
              </h1>

              <div style={s.roles}>
                {["Computer Engineer", "AI Explorer", "Creative Builder", "Classical Artist"].map((r) => (
                  <span key={r} style={s.roleTag}>{r}</span>
                ))}
              </div>

              <p style={s.tagline}>
                Building AI products, solving real-world problems,<br />
                and collecting stories along the way.
              </p>

              <div style={s.cta}>
                <a href="#about" className="btn btn-primary">About Me</a>
                <a href="#projects" className="btn btn-outline">View Projects</a>
              </div>

              <div style={s.skillBadges}>
                {["AI", "ML", "React", "Python", "FastAPI", "RAG", "LangChain", "Bharatnatyam"].map((b) => (
                  <span key={b} className="badge">{b}</span>
                ))}
              </div>
            </div>

            {/* ── RIGHT (image frame) ── */}
            <div style={s.right}>
              <div style={{ position: "relative", display: "inline-block" }}>

                {/* Decorative corner blocks */}
                <div style={s.cornerTL} />
                <div style={s.cornerBR} />

                {/* Main frame */}
                <div style={s.frame} className="hero-float">
                  {/* Replace the initials block below with:
                      <img src={HeroImage} alt="Rajvi B." style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                      once you add your photo to src/assets/heroImage.png */}
                  <div style={s.frameInner}>
                    <div style={s.initials}>RB</div>
                    <div style={s.frameSub}>
                      COMPUTER ENGINEER<br />
                      AI EXPLORER<br />
                      CLASSICAL ARTIST
                    </div>
                  </div>
                </div>

                {/* Floating stickers */}
                {STICKERS.map((s_, i) => (
                  <div
                    key={s_}
                    className={`sticker sticker-${i}`}
                    style={{
                      ...stickerBase,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  >
                    {s_}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={marquee.wrap}>
        <div style={marquee.track} className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} style={marquee.item}>
              {item} <span style={{ opacity: 0.4 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: rotate(2deg) translateY(0); }
          50%       { transform: rotate(2deg) translateY(-12px); }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
        @keyframes stickerFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-7px); }
        }
        .hero-float { animation: float 6s ease-in-out infinite; }
        .marquee-track { animation: marquee 22s linear infinite; }

        .sticker {
          position: absolute;
          font-family: 'Space Mono', monospace;
          font-size: 0.62rem;
          font-weight: 700;
          background: #e8d5b0;
          color: #000;
          padding: 0.2rem 0.5rem;
          letter-spacing: 0.1em;
          animation: stickerFloat 4s ease-in-out infinite;
          white-space: nowrap;
        }
        .sticker-0 { top: 8%;  right: -14%; animation-delay: 0s; }
        .sticker-1 { top: 30%; right: -18%; animation-delay: 0.8s; }
        .sticker-2 { bottom: 35%; right: -10%; animation-delay: 0.4s; }
        .sticker-3 { bottom: 12%; right: -15%; animation-delay: 1.2s; }
        .sticker-4 { top: 58%; left: -10%; animation-delay: 0.6s; }

        @media (max-width: 768px) {
          .sticker { display: none; }
          #home .container > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

/* ── STYLES ── */
const s = {
  section: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: 80,
    background: "var(--bg-primary)",
    position: "relative",
    overflow: "hidden",
  },
  container: { width: "100%" },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  },
  left: {},
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "var(--bg-tertiary)",
    border: "1.5px solid var(--accent)",
    padding: "0.3rem 0.85rem",
    fontSize: "0.75rem",
    fontFamily: "'Space Mono', monospace",
    color: "var(--accent)",
    letterSpacing: "0.05em",
    marginBottom: "1.5rem",
  },
  dot: {
    width: 7,
    height: 7,
    background: "#4ade80",
    borderRadius: "50%",
    display: "inline-block",
    animation: "pulse 2s infinite",
  },
  name: {
    fontSize: "clamp(3rem, 8vw, 5.5rem)",
    fontWeight: 700,
    lineHeight: 0.95,
    letterSpacing: "-0.04em",
    color: "var(--text-primary)",
    marginBottom: "0.5rem",
  },
  nameAccent: { color: "var(--accent)" },
  roles: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "clamp(0.7rem, 2vw, 0.88rem)",
    color: "var(--text-secondary)",
    marginBottom: "1.5rem",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  roleTag: {
    border: "1px solid var(--border2)",
    padding: "0.2rem 0.6rem",
  },
  tagline: {
    fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
    color: "var(--text-secondary)",
    lineHeight: 1.75,
    marginBottom: "2rem",
    maxWidth: 480,
  },
  cta: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    marginBottom: "2.5rem",
  },
  skillBadges: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },
  right: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  frame: {
    width: 340,
    height: 420,
    border: "3px solid var(--accent)",
    boxShadow: "8px 8px 0px var(--accent)",
    position: "relative",
    overflow: "hidden",
    background: "var(--bg-tertiary)",
  },
  frameInner: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    padding: "2rem",
  },
  initials: {
    fontSize: "6rem",
    fontWeight: 700,
    color: "var(--accent)",
    fontFamily: "'Space Mono', monospace",
    lineHeight: 1,
  },
  frameSub: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.62rem",
    color: "var(--text-secondary)",
    textAlign: "center",
    letterSpacing: "0.07em",
    lineHeight: 1.8,
  },
  cornerTL: {
    position: "absolute",
    top: -12,
    left: -12,
    width: 60,
    height: 60,
    border: "2px solid var(--accent)",
    opacity: 0.3,
    zIndex: -1,
  },
  cornerBR: {
    position: "absolute",
    bottom: -12,
    right: -12,
    width: 40,
    height: 40,
    background: "var(--accent)",
    opacity: 0.15,
    zIndex: -1,
  },
};

const stickerBase = {
  fontFamily: "'Space Mono', monospace",
  fontSize: "0.62rem",
  fontWeight: 700,
  background: "var(--accent)",
  color: "#000",
  padding: "0.2rem 0.5rem",
  letterSpacing: "0.1em",
};

const marquee = {
  wrap: {
    background: "var(--accent)",
    borderTop: "2px solid #000",
    borderBottom: "2px solid #000",
    overflow: "hidden",
    padding: "0.7rem 0",
  },
  track: {
    display: "flex",
    gap: 0,
    whiteSpace: "nowrap",
  },
  item: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.75rem",
    fontWeight: 700,
    color: "#000",
    padding: "0 2rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
};
