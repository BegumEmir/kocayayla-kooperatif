import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import haberler from "../data/haberler";
import "./HaberDetay.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function HaberDetay() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  const haber = haberler.find((h) => String(h.id) === String(id));

  // ✅ Hook HER ZAMAN çağrılıyor
  useDocumentTitle(
    haber
      ? `${haber.baslik} | S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi`
      : "Haber Bulunamadı | S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi"
  );

  if (!haber) {
    return (
      <div className="page">
        <h2>Haber bulunamadı.</h2>
        <Link to="/medya/haberlerimiz">← Haberler sayfasına dön</Link>
      </div>
    );
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page haber-detay-page">
      <div className="haber-detay-card">
        <nav className="haber-breadcrumb">
          <Link to="/">Ana Sayfa</Link>
          <span>›</span>
          <Link to="/medya/haberlerimiz">Haberlerimiz</Link>
          <span>›</span>
          <span className="aktif">{haber.baslik}</span>
        </nav>

        <header className="haber-detay-header">
          <span className="haber-kategori-pill">{haber.kategori}</span>
          <h1>{haber.baslik}</h1>

          <div className="haber-meta-row">
            <span className="haber-tarih">
              <span className="ikon">📅</span> {haber.tarih}
            </span>

            <button className="copy-link-btn" onClick={copyLink}>
              {copied ? "✔ Bağlantı kopyalandı" : "🔗 Bağlantıyı kopyala"}
            </button>
          </div>
        </header>

        <figure className="haber-detay-image-wrapper">
          <img src={haber.foto} alt={haber.baslik} className="haber-detay-img" />
        </figure>

        <article className="haber-detay-body">
          {haber.detay.split("\n").map((satir, index) => (
            <p key={index}>{satir}</p>
          ))}
        </article>


        <div className="haber-detay-footer">
          <Link to="/medya/haberlerimiz" className="haber-back-link">
            ← Tüm haberlere dön
          </Link>
        </div>
      </div>
    </div>
  );
}
