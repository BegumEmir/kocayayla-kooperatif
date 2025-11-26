import { useState } from "react";
import ortaklar from "../data/ortaklar";
import "./Ortaklar.css";

export default function Ortaklarimiz() {
  const [arama, setArama] = useState("");

  // Arama filtreleme
  const filtreliOrtaklar = ortaklar.filter(
    (o) =>
      o.ad.toLowerCase().includes(arama.toLowerCase()) ||
      o.no.includes(arama)
  );

  return (
    <div className="page ortaklar-page">
      <h1>Ortaklarımız</h1>

      <p className="ortaklar-desc">
        Kooperatifimize katkı sağlayan tüm ortaklarımızın listesi aşağıda yer almaktadır.
      </p>

      {/* ARAMA KUTUSU */}
      <input
        type="text"
        className="ortak-arama-input"
        placeholder="Ortak no veya ad soyad ile ara..."
        value={arama}
        onChange={(e) => setArama(e.target.value)}
      />

      <div className="ortaklar-list">
        {filtreliOrtaklar.map((kisi) => (
          <div className="ortak-item" key={kisi.no}>
            <span className="ortak-no">{kisi.no}</span>
            <span className="ortak-ad">{kisi.ad}</span>
          </div>
        ))}

        {filtreliOrtaklar.length === 0 && (
          <p style={{ padding: "20px", color: "#777" }}>Sonuç bulunamadı.</p>
        )}
      </div>
    </div>
  );
}
