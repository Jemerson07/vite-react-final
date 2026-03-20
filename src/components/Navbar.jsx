export default function Navbar({theme,setTheme}){
 return (
  <nav className="navbar">
    <h2>Jemerson</h2>
    <button onClick={()=>setTheme(theme==="dark"?"light":"dark")}>
      Tema
    </button>
  </nav>
 );
}
