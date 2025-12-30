import "./YonetimKurulu.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function YonetimKurulu() {
  useDocumentTitle("Yönetim Kurulumuz | S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi");
  return (
    <div className="page yonetim-page">
      <h1>Yönetim Kurulu</h1>

      <p className="yonetim-desc">
        Yönetim Kurulumuz, kooperatifimizin amaçları doğrultusunda faaliyetlerin
        planlanması, yürütülmesi ve geliştirilmesinden sorumludur. Ortaklarımızın
        menfaatlerini gözeterek şeffaf, katılımcı ve sürdürülebilir bir yönetim
        anlayışıyla görev yapmaktadır.
      </p>


      <div className="yonetim-grid">

        <div className="yonetim-card">
          <div className="yonetim-img">
            <img
              src={process.env.PUBLIC_URL + "/galeri/baskan.jpeg"}
              alt="Yönetim Kurulu Başkanı"
            />
          </div>
          <h3>İsa Özmen</h3>
          <p>Yönetim Kurulu Başkanı</p>
        </div>

        <div className="yonetim-card">
          <div className="yonetim-img">
            <img
              src={process.env.PUBLIC_URL + "/galeri/başkan-yardımcısı.jpeg"}
              alt="Başkan Yardımcısı"
            />
          </div>
          <h3>Mehmet Ali Bayırdelen</h3>
          <p>Başkan Yardımcısı</p>
        </div>

        <div className="yonetim-card">
          {/*<div className="yonetim-img icon-only">👤</div>*/}
          <div className="yonetim-img">
            <img
              src={process.env.PUBLIC_URL + "/galeri/sayman.jpeg"}
              alt="Muhasip Üye"
            />
          </div>
          <h3>İsmail Tüzgen</h3>
          <p>Muhasip Üye</p>
        </div>

      </div>
    </div>
  );
}
