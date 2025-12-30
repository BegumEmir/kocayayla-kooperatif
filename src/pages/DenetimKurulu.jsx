import "./DenetimKurulu.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function DenetimKurulu() {
  useDocumentTitle("Denetim Kurulumuz | Kocayayla Kooperatifi");
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
          <h3>Yıldıray Liman</h3>
          <p>Denetim Kurulu Başkanı</p>
        </div>

        <div className="denetim-card">
          <div className="denetim-icon">👤</div>
          <h3>Mestan Sapan</h3>
          <p>Denetim Kurulu Üyesi</p>
        </div>

        <div className="denetim-card">
          <div className="denetim-icon">👤</div>
          <h3>Hasan Can</h3>
          <p>Denetim Kurulu Üyesi</p>
        </div>

      </div>
    </div>
  );
}
