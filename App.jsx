import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
export default function App(){
 const [theme,setTheme]=useState("dark");
 return (
  <div className={theme}>
    <Navbar theme={theme} setTheme={setTheme} />
    <Hero />
    <Features />
  </div>
 );
}