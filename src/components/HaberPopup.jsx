import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import haberler from "../data/haberler";
import "./HaberPopup.css";

const STORAGE_KEY = "haberPopupGizlenme";

export default function HaberPopup() {
  const [visible, setVisible] = useState(false);

  const sonHaber = haberler[haberler.length - 1];

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    if (localStorage.getItem(STORAGE_KEY) !== today) {
      setVisible(true);
    }
  }, []);

  const kapat = () => setVisible(false);

  const bugunGosterme = () => {
    const today = new Date().toISOString().slice(0, 10);
    localStorage.setItem(STORAGE_KEY, today);
    setVisible(false);
  };

  if (!visible || !sonHaber) return null;

  return (
    <div className="haber-popup-overlay" onClick={kapat}>
      <div className="haber-popup" onClick={(e) => e.stopPropagation()}>
        <button className="haber-popup-kapat" onClick={kapat} aria-label="Kapat">
          ✕
        </button>

        <div className="haber-popup-etiket">Son Haber</div>
        <h2 className="haber-popup-baslik">{sonHaber.baslik}</h2>
        <p className="haber-popup-aciklama">{sonHaber.aciklama}</p>

        <div className="haber-popup-butonlar">
          <Link to={`/haber/${sonHaber.id}`} className="haber-popup-oku" onClick={kapat}>
            Haberi Oku →
          </Link>
          <button className="haber-popup-bugun" onClick={bugunGosterme}>
            Bugün bir daha gösterme
          </button>
        </div>
      </div>
    </div>
  );
}
