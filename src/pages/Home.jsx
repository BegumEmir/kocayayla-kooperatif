import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Duyurular.css";
import haberler from "../data/haberler";
import duyurular from "../data/duyurular";

export default function Home() {
  const sonDuyurular = duyurular.slice(0, 2);
  const sonHaberler = haberler.slice(0, 2);

  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* HERO */}
      <div className="home-hero">
        <div className="home-hero-left">
          <img src="/hero.png" alt="Kocayayla köyü manzarası" />
        </div>

        <div className="home-hero-right">
          <h1>Kooperatifimize Hoş Geldiniz</h1>
          <p>
            Kocayayla Köyü'nün doğal üretim gücünü bir araya getiren,
            dayanışmayı ve tarımsal kalkınmayı esas alan kooperatifimizle tanışın.
          </p>

          <div className="hero-buttons">
            <Link to="/kurumsal/hakkimizda" className="hero-btn primary">
              Kurumsal Kimliğimiz
            </Link>
            <Link to="/faaliyetler" className="hero-btn secondary">
              Faaliyetlerimiz
            </Link>
            <Link to="/kurumsal/ortaklarimiz" className="hero-btn secondary">
              Ortaklarımız
            </Link>
          </div>
        </div>
      </div>

      {/* DUYURULAR */}
      <h2 className="home-section-title">Duyurular</h2>

      <div className="home-list duyurular-home">
        {sonDuyurular.map((d) => (
          <div
            key={d.id}
            className={`duyuru-item-home ${openId === d.id ? "open" : ""}`}
          >
            <button
              className="duyuru-header-home"
              onClick={() => toggle(d.id)}
            >
              <div className="duyuru-header-row">
                <h3>{d.baslik}</h3>

                <span
                  className={`chevron ${openId === d.id ? "rotate" : ""}`}
                >
                  ▼
                </span>
              </div>

              <div className="duyuru-tarih">{d.tarih}</div>
            </button>

            <div className="duyuru-icerik-home">
              <p>{d.aciklama}</p>
            </div>
          </div>
        ))}

        <Link className="list-link all-link" to="/medya/duyurularimiz">
          Tüm duyurular →
        </Link>
      </div>

      {/* HABERLER */}
      <section className="home-section">
        <h2 className="home-section-title">Haberler</h2>

        <div className="home-list">
          {sonHaberler.map((h) => (
            <div className="list-item" key={h.id}>
              <h3 className="list-title">{h.baslik}</h3>
              <p className="list-date">{h.tarih}</p>
              <p className="list-excerpt">{h.aciklama}</p>

              <Link className="list-all-link inline" to={`/haber/${h.id}`}>
                Haberi Görüntüle →
              </Link>
            </div>
          ))}

          <Link to="/medya/haberlerimiz" className="list-all-link">
            Tüm haberler →
          </Link>
        </div>
      </section>
    </>
  );
}
