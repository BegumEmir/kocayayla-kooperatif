import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOpenDropdown(null);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        {/* SOL: Logo */}
        <div className="navbar-logo">
          S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi
        </div>

        {/* SAĞ: Menü (masaüstünde görünür - mobilde gizli) */}
        <ul className="navbar-links desktop-menu">
          <li><Link to="/">Ana Sayfa</Link></li>

          <li className="dropdown">
            <button className="dropdown-toggle">Kurumsal ▾</button>
            <ul className="dropdown-menu">
              <li><Link to="/kurumsal/hakkimizda">Hakkımızda</Link></li>
              <li><Link to="/kurumsal/yonetim-kurulu">Yönetim Kurulu</Link></li>
              <li><Link to="/kurumsal/denetim-kurulu">Denetim Kurulu</Link></li>
              <li><Link to="/kurumsal/ortaklarimiz">Ortaklarımız</Link></li>
            </ul>
          </li>

          <li><Link to="/faaliyetler">Faaliyetler</Link></li>


          <li className="dropdown">
            <button className="dropdown-toggle">Medya Odası ▾</button>
            <ul className="dropdown-menu">
              <li><Link to="/medya/haberlerimiz">Haberlerimiz</Link></li>
              <li><Link to="/medya/duyurularimiz">Duyurularımız</Link></li>
              <li><Link to="/medya/galeri">Galeri</Link></li>
            </ul>
          </li>

          <li><Link to="/iletisim">İletişim</Link></li>
        </ul>

        {/* SAĞ: Hamburger (mobilde görünür - masaüstünde gizli) */}
        <button className="hamburger" onClick={toggleMenu}>☰</button>
      </div>

      {/* Mobil menü */}
      <ul className={`navbar-links mobile-menu ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeAll}>Ana Sayfa</Link></li>

        <li className="dropdown">
          <button className="dropdown-toggle" onClick={() => toggleDropdown("kurumsal")}>Kurumsal ▾</button>
          <ul className={`dropdown-menu ${openDropdown === "kurumsal" ? "show" : ""}`}>
            <li><Link to="/kurumsal/hakkimizda" onClick={closeAll}>Hakkımızda</Link></li>
            <li><Link to="/kurumsal/yonetim-kurulu" onClick={closeAll}>Yönetim Kurulu</Link></li>
            <li><Link to="/kurumsal/denetim-kurulu" onClick={closeAll}>Denetim Kurulu</Link></li>
            <li><Link to="/kurumsal/ortaklarimiz" onClick={closeAll}>Ortaklarımız</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/faaliyetler" onClick={closeAll}>
            Faaliyetler
          </Link>
        </li>


        <li className="dropdown">
          <button className="dropdown-toggle" onClick={() => toggleDropdown("medya")}>Medya Odası ▾</button>
          <ul className={`dropdown-menu ${openDropdown === "medya" ? "show" : ""}`}>
            <li><Link to="/medya/haberlerimiz" onClick={closeAll}>Haberlerimiz</Link></li>
            <li><Link to="/medya/duyurularimiz" onClick={closeAll}>Duyurularımız</Link></li>
            <li><Link to="/medya/galeri" onClick={closeAll}>Galeri</Link></li>
          </ul>
        </li>

        <li><Link to="/iletisim" onClick={closeAll}>İletişim</Link></li>
      </ul>
    </nav>
  );
}
