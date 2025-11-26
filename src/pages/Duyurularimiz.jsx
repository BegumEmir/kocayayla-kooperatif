import { useState } from "react";
import "../App.css";
import "./Duyurular.css";
import duyurular from "../data/duyurular";

export default function Duyurularimiz() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="page duyurular-page">
      <h1>Duyurularımız</h1>
      <p className="duyurular-desc">
        Kooperatif faaliyetlerimiz, toplantılarımız ve önemli bilgilendirmeleri
        buradan takip edebilirsiniz.
      </p>

      <div className="duyurular-list">
        {duyurular.map((d) => (
          <div
            key={d.id}
            className={`duyuru-box ${openId === d.id ? "open" : ""}`}
            onClick={() => toggle(d.id)}
          >
            {/* BAŞLIK */}
            <div className="duyuru-header">
              <h2>{d.baslik}</h2>
              <span className={`chevron ${openId === d.id ? "rotate" : ""}`}>
                ▼
              </span>
            </div>

            {/* AÇILAN BÖLÜM */}
            <div className="duyuru-content">
              <p className="duyuru-tarih">{d.tarih}</p>
              <p className="duyuru-text">{d.aciklama}</p>

              {d.gorsel && (
                <img src={d.gorsel} alt="" className="duyuru-img" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
