import "./DenetimKurulu.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function DenetimKurulu() {
  useDocumentTitle("Denetim Kurulumuz | S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi");
  return (
    <div className="page denetim-page">
      <h1>Denetim Kurulu</h1>

      <p className="denetim-desc">
        Denetim Kurulumuz, kooperatifimizin mali ve idari faaliyetlerini
        mevzuat çerçevesinde inceleyerek şeffaf ve güvenilir bir yönetim
        anlayışının sürdürülmesine katkı sağlamaktadır.
      </p>

      <div className="denetim-grid">

        <div className="denetim-card">
          <div className="denetim-icon">👤</div>
          <h3>İlhan Koçuk</h3>
          <p>Denetim Kurulu Üyesi</p>
        </div>

      </div>
    </div>
  );
}
