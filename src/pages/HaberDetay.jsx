// src/pages/HaberDetay.jsx
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import "./HaberDetay.css";

export default function HaberDetay() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  // Burayı istersen ayrı bir data dosyasına da taşıyabilirsin
  const haberler = [
    {
      id: "1",
      kategori: "Haberler",
      baslik: "Kooperatifimiz Yeni Sezon Üretim Planını Açıkladı",
      detay:
        "Kooperatifimiz bu yıl üretim kapasitesini artırmak adına çeşitli yatırımlar gerçekleştirmiştir. Üyelerimize daha fazla destek sunmayı hedefliyoruz. Bu kapsamda yeni depolama alanları, modern üretim araçları ve eğitim programları devreye alınacaktır.",
      tarih: "10 Ocak 2025",
      foto: "/haber1.jpg",
    },
    {
      id: "2",
      kategori: "Haberler",
      baslik: "Kocayayla’da Organik Ürün Tanıtım Günü Düzenlendi",
      detay:
        "Organik ürün üretimini teşvik eden etkinlikte birçok üreticimiz stant açarak kendi ürünlerini tanıttı. Büyük ilgi gören etkinlikte kooperatif olarak bölge ekonomisine destek olacak projelerimizi tanıttık.",
      tarih: "22 Aralık 2024",
      foto: "/haber2.jpg",
    },
    {
      id: "3",
      kategori: "Haberler",
      baslik: "Kooperatif Üyeleri İçin Eğitim Programı Başladı",
      detay:
        "Sürdürülebilir tarım, modern üretim teknikleri ve kooperatif yönetimi üzerine kapsamlı eğitimler verilmeye başlanmıştır. Üyelerimizin katılımı ücretsizdir.",
      tarih: "15 Kasım 2024",
      foto: "/haber3.jpg",
    },
  ];

  const haber = haberler.find((h) => h.id === id);

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
        {/* Breadcrumb */}
        <nav className="haber-breadcrumb">
          <Link to="/">Ana Sayfa</Link>
          <span>›</span>
          <Link to="/medya/haberlerimiz">Haberlerimiz</Link>
          <span>›</span>
          <span className="aktif">{haber.baslik}</span>
        </nav>

        {/* Üst başlık alanı */}
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

        {/* Görsel */}
        <figure className="haber-detay-image-wrapper">
          <img src={haber.foto} alt={haber.baslik} className="haber-detay-img" />
        </figure>

        {/* Metin */}
        <article className="haber-detay-body">
          <p>{haber.detay}</p>
        </article>

        {/* Alt alan / geri dön */}
        <div className="haber-detay-footer">
          <Link to="/medya/haberlerimiz" className="haber-back-link">
            ← Tüm haberlere dön
          </Link>
        </div>
      </div>
    </div>
  );
}
