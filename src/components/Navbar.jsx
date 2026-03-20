export default function Navbar({ theme, setTheme }) {
  return (
    <nav className="navbar">
      <h2 style={{ fontWeight: 900 }}>Jemerson Santos</h2>

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        {/* Botão LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jemerson-santos"
          target="_blank"
          style={{
            background: "#0077ff",
            padding: "10px 14px",
            borderRadius: "8px",
            color: "white",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Linkedin
        </a>

        {/* Switch de tema */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
