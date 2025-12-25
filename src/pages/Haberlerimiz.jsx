import "../App.css";
import { Link } from "react-router-dom";
import "./Haberlerimiz.css";
import haberler from "../data/haberler";


export default function Haberlerimiz() {
  return (
    <div className="page haberler-page">
      <h1>Haberlerimiz</h1>

      <div className="haberler-grid">
        {haberler.slice().reverse().map((h) => (
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
    </div>
  );
}
