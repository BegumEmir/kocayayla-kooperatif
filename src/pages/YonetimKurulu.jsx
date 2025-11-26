import "./Kurul.css";

export default function YonetimKurulu() {
  const yonetim = [
    { ad: "Ahmet Demir", gorev: "Yönetim Kurulu Başkanı" },
    { ad: "Mehmet Arslan", gorev: "Başkan Yardımcısı" },
    { ad: "Ayşe Yıldız", gorev: "Üye" },
    { ad: "Fatma Kaya", gorev: "Üye" },
    { ad: "Mustafa Çelik", gorev: "Üye" },
  ];

  return (
    <div className="page kurul-page">
      <h1>Yönetim Kurulu</h1>
      <p className="kurul-desc">
        Kooperatifimizin yönetim kurulu, köyümüzün kalkınma hedefleri doğrultusunda seçilmiş temsilcilerden oluşmaktadır.
      </p>

      <div className="kurul-grid">
        {yonetim.map((kisi, i) => (
          <div className="kurul-card" key={i}>
            <span className="kurul-ad">{kisi.ad}</span>
            <span className="kurul-gorev">{kisi.gorev}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
