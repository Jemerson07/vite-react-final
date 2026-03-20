export default function Navbar({ theme, setTheme }) {
  return (
    <nav className="navbar">
      <h2>Jemerson Santos</h2>

      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

