import "../App.css";
import { Link } from "react-router-dom";
import "./Haberlerimiz.css";
import haberler from "../data/haberler";

export default function Haberlerimiz() {
  const reversed = haberler.slice().reverse();
  const isSingle = reversed.length === 1;

  return (
    <div className="page haberler-page">
      <h1>Haberlerimiz</h1>

      <div className={`haberler-grid ${isSingle ? "single" : ""}`}>
        {reversed.map((h) => (
          <div className="haber-card" key={h.id}>
            <img src={h.foto} alt={h.baslik} className="haber-img" />

            <h2>{h.baslik}</h2>
            <p className="haber-aciklama">{h.aciklama}</p>
            <p className="haber-tarih">{h.tarih}</p>

            <Link to={`/haber/${h.id}`} className="haber-link">
              Devamını Oku →
            </Link>
          </div>
        ))}
      </div>

      {/* Tek haber varsa mesaj */}
      {isSingle && (
        <div className="no-more-news">
          📰 Yeni haberler çok yakında paylaşılacaktır.
        </div>
      )}
    </div>
  );
}

