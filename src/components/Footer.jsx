import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* SOL BLOK – KOOPERATİF BİLGİ */}
        <div className="footer-section">
          <h3 className="footer-title">Kocayayla Tarımsal Kalkınma Kooperatifi</h3>
          <p className="footer-text">
            Doğal üretim, dayanışma ve köyümüzün kalkınması için hizmet veriyoruz.
          </p>

          <p className="footer-info">
            📍 <strong>Adres:</strong> Kocayayla Köyü, Çan / Çanakkale
          </p>

          <p className="footer-info">
            ☎ <strong>Telefon:</strong> 0 (554) 495 74 86
          </p>

          <p className="footer-info">
            ✉ <strong>E-posta:</strong> kocayaylakooperatifi@gmail.com
          </p>
        </div>

        {/* ORTA BLOK – HIZLI MENÜLER */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Hızlı Erişim</h4>
          <ul className="footer-links">
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/kurumsal/hakkimizda">Hakkımızda</Link></li>
            <li><Link to="/kurumsal/ortaklarimiz">Ortaklarımız</Link></li>
            <li><Link to="/faaliyetler">Faaliyetler</Link></li>
            <li><Link to="/medya/haberlerimiz">Haberler</Link></li>
            <li><Link to="/medya/duyurularimiz">Duyurular</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
          </ul>
        </div>

        {/* SAĞ BLOK – HARİTA */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Konum</h4>

          <iframe
            title="Kocayayla Harita"
            className="footer-map"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5802.73514653294!2d26.984421644550427!3d40.08884588597666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b13080e6199241%3A0xc3b79c5e7c0aa78e!2sKocayayla%2C%2017402%20Kocayayla%2F%C3%87an%2F%C3%87anakkale!5e1!3m2!1str!2str!4v1763846581857!5m2!1str!2str"
          ></iframe>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Kocayayla Kooperatifi – Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}
