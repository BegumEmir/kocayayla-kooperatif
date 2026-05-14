import "../App.css";
import { Link } from "react-router-dom";
import "./Haberlerimiz.css";
import haberler from "../data/haberler";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Haberlerimiz() {
  useDocumentTitle("Haberler | S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi");

  const reversed = haberler.slice().reverse();
  const isSingle = reversed.length === 1;

  return (
    <div className="page haberler-page">
      <h1>Haberlerimiz</h1>

      <div className={`haberler-grid ${isSingle ? "single" : ""}`}>
        {reversed.map((h) => (
          <div className="haber-card" key={h.id}>
            {h.medya?.[0] && (
              h.medya[0].type === "foto" ? (
                <img src={h.medya[0].src} alt={h.baslik} className="haber-img" />
              ) : (
                <video
                  src={`${h.medya[0].src}#t=0.001`}
                  className="haber-img"
                  muted
                  playsInline
                  preload="metadata"
                />
              )
            )}

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

