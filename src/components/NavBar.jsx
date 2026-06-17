import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Life", href: "#life" },
  { label: "Contact", href: "#contact" },
];

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: "#fff",
    borderBottom: "2px solid #000",
    transition: "padding 0.2s ease",
    padding: "0 2rem",
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  },
  logo: {
    fontFamily: "'Space Mono', monospace",
    fontWeight: 700,
    fontSize: "1.1rem",
    color: "#000",
    letterSpacing: "-0.02em",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
  },
  link: (active) => ({
    color: "#000",
    textDecoration: "none",
    fontSize: "0.82rem",
    fontWeight: 500,
    padding: "0.35rem 0.7rem",
    border: "1.5px solid transparent",
    transition: "all 0.2s ease",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    background: active ? "#000" : "transparent",
    color: active ? "#fff" : "#000",
    borderColor: active ? "#000" : "transparent",
  }),
  resume: {
    background: "#000",
    color: "#fff",
    border: "1.5px solid #000",
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.75rem",
    textDecoration: "none",
    padding: "0.35rem 0.7rem",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontWeight: 700,
    transition: "all 0.2s ease",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    gap: 4,
    cursor: "pointer",
    padding: 8,
    background: "none",
    border: "none",
  },
  hamLine: {
    display: "block",
    width: 22,
    height: 2,
    background: "#000",
  },
  drawer: (open) => ({
    display: open ? "flex" : "none",
    position: "fixed",
    top: 62,
    left: 0,
    right: 0,
    background: "#fff",
    borderBottom: "2px solid #000",
    padding: "1rem",
    zIndex: 99,
    flexDirection: "column",
    gap: "0.25rem",
  }),
  drawerLink: {
    color: "#000",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
    padding: "0.6rem 1rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "experience", "projects", "life", "contact"];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.inner}>
          <a href="#home" style={styles.logo}>RAJVI B.</a>

          {/* Desktop links */}
          <div style={styles.links} className="nav-desktop">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={styles.link(active === l.href.replace("#", ""))}
                onMouseEnter={(e) => {
                  if (active !== l.href.replace("#", "")) {
                    e.target.style.background = "#000";
                    e.target.style.color = "#fff";
                    e.target.style.borderColor = "#000";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== l.href.replace("#", "")) {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#000";
                    e.target.style.borderColor = "transparent";
                  }
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://linkedin.com/in/rajvibhatt21"
              target="_blank"
              rel="noreferrer"
              style={styles.resume}
              onMouseEnter={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#000"; }}
              onMouseLeave={(e) => { e.target.style.background = "#000"; e.target.style.color = "#fff"; }}
            >
              Resume ↗
            </a>
          </div>

          {/* Hamburger */}
          <button
            style={styles.hamburger}
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span style={styles.hamLine} />
            <span style={styles.hamLine} />
            <span style={styles.hamLine} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div style={styles.drawer(menuOpen)}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} style={styles.drawerLink} onClick={close}>{l.label}</a>
        ))}
        <a href="https://linkedin.com/in/rajvibhatt21" target="_blank" rel="noreferrer" style={styles.drawerLink} onClick={close}>Resume ↗</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
