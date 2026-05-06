"use client";
import { useLang } from "./LangContext";

export default function Navbar() {
  const { lang, toggle } = useLang();
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#" className="nav-brand">YD</a>
        <div className="nav-links">
          <a href="#expertise" className="nav-link">{lang === "fr" ? "Profil" : "Profile"}</a>
          <a href="#experience" className="nav-link">{lang === "fr" ? "Expérience" : "Experience"}</a>
          <a href="#formation" className="nav-link">{lang === "fr" ? "Formation" : "Education"}</a>
          <a href="#passions" className="nav-link">Passions</a>
          <button className="lang-toggle" onClick={toggle}>{lang === "fr" ? "EN" : "FR"}</button>
          <a href="mailto:yazid.djoudad@hotmail.com" className="nav-cta">Contact</a>
        </div>
      </div>
    </nav>
  );
}
