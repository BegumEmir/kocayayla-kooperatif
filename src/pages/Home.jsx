import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Duyurular.css";
import haberler from "../data/haberler";
import duyurular from "../data/duyurular";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


export default function Home() {
const base = process.env.PUBLIC_URL;  

  const sonDuyurular = duyurular.slice().reverse().slice(0, 3);
  const sonHaberler = haberler.slice().reverse().slice(0, 3);

  const [openId, setOpenId] = useState(
    sonDuyurular.length > 0 ? sonDuyurular[0].id : null
  );

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* HERO */}
      <div className="home-hero">
        <div className="home-hero-left">
          <img src={process.env.PUBLIC_URL + "/galeri/yatay-manzara.jpeg"} alt="Kocayayla köyü manzarası" />
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
          {/* BAŞKANIN MESAJI */}
          <section className="home-president">
            <div className="home-president-inner">

              <div className="president-text">
                <h2>Kooperatif Başkanımızdan Mesaj</h2>
                <p>
                  Kooperatifimizin kuruluşundan bugüne kadar geçen süreci,
                  hedeflerimizi ve üreticilerimiz için yürüttüğümüz çalışmaları
                  başkanımızdan dinleyebilirsiniz.
                </p>
              </div>
              
              <div className="president-video">
                {/*
                <video controls poster={process.env.PUBLIC_URL + "/baskan.jpeg"}>
                  <source
                    src={process.env.PUBLIC_URL + "/galeri/baskan-mesaji.mp4"}
                    type="video/mp4"
                  />
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
                */}
                
                {/* YouTube kullanacaksan bunu aç, yukarıdakini kapat */}
                
                <iframe
                  src="https://www.youtube.com/embed/ctksvoYBpWs"
                  title="Kooperatif Başkanımızdan Mesaj"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
              </div>
              <div className="president-links">
                <Link to="/kurumsal/baskanlar" className="baskanlar-link">
                  Başkanlarımızı Tanıyın →
                </Link>
              </div>

            </div>
          </section>

          
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

              {/* FOTOĞRAF VARSA GÖSTER */}
              {d.gorsel && (
                <img
                  src={d.gorsel}
                  alt={d.baslik}
                  className="duyuru-home-img"
                />
              )}
            </div>
          </div>
        ))}

        <Link className="list-link all-link" to="/medya/duyurularimiz">
          Tüm duyurular →
        </Link>
      </div>

      {/* GALERİ */}
      <section className="home-gallery">
        <div className="home-gallery-header">
          <h2>Galeriden Kareler</h2>
          <Link to="/medya/galeri" className="gallery-link">
            Tüm galeriyi gör →
          </Link>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[
            `${base}/galeri/ekibimiz.jpeg`,
            `${base}/galeri/süt-toplama-merkezi-ekip-fotosu.jpeg`,
            `${base}/galeri/yönetim-ekibi.jpeg`,
            `${base}/galeri/yem-ezme-tesisi-ekip-fotosu.jpeg`,
            `${base}/galeri/kepçe.jpeg`,
            `${base}/galeri/değirmen.jpeg`,
            `${base}/galeri/süt-toplama-arabası.jpeg`,
          ].map((src, i) => (
            <SwiperSlide key={i}>
              <div className="gallery-slide">
                <img src={src} alt="Kooperatif Galeri" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


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
