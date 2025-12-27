import "./DenetimKurulu.css";

export default function DenetimKurulu() {
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
          <h3>Ad Soyad</h3>
          <p>Denetim Kurulu Başkanı</p>
        </div>

        <div className="denetim-card">
          <div className="denetim-icon">👤</div>
          <h3>Ad Soyad</h3>
          <p>Denetim Kurulu Üyesi</p>
        </div>

        <div className="denetim-card">
          <div className="denetim-icon">👤</div>
          <h3>Ad Soyad</h3>
          <p>Denetim Kurulu Üyesi</p>
        </div>

      </div>
    </div>
  );
}
