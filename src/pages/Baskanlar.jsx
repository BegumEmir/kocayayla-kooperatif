import "./Baskanlar.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Baskanlar() {
  useDocumentTitle("Başkanlarımız | S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi");
  return (
    <div className="page baskanlar-page">
      <h1>Kooperatif Başkanlarımız</h1>

      {/* Mevcut Başkan */}
      <section className="mevcut-baskan">
        <h2>Mevcut Başkanımız</h2>

        <div className="baskan-card">
          <img
            src="/galeri/baskan-foto.jpeg"
            alt="Kooperatif Başkanı"
            className="baskan-foto"
          />

          <div className="baskan-bilgi">
            <h3>İsa Özmen</h3>
            <p className="baskan-unvan">Kooperatif Başkanı</p>
            <p className="baskan-donem">Görev Dönemi: 2024 Mart 7 – Devam Ediyor</p>

            <p className="baskan-aciklama">
              Kooperatif Başkanımız, üretici odaklı yaklaşım ile kooperatifimizin
              kurumsal yapısının güçlendirilmesi, ortaklarımızın ekonomik ve
              sosyal kalkınmasının desteklenmesi amacıyla çalışmalarını
              sürdürmektedir.
            </p>
          </div>
        </div>
      </section>

        <section className="baskanlar-gecmis">
        <h3>Görev Yapmış Başkanlarımız</h3>

        <ul className="baskanlar-liste">
            <li>
            <span className="isim">Hasan Ünlü</span>
            </li>

            <li>
            <span className="isim">Metin Kızıltepe</span>
            </li>

            <li>
            <span className="isim">Vayit Tüzgen</span>
            <span className="etiket">(Merhum)</span>
            </li>

            <li>
            <span className="isim">Osman Deniz</span>
            </li>

            <li>
            <span className="isim">Ömer Zözer</span>
            </li>
        </ul>
        </section>


    </div>
  );
}
