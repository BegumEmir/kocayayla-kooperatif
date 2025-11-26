import "./Kurul.css";

export default function DenetimKurulu() {
  const denetim = [
    { ad: "Hasan Yılmaz", gorev: "Denetim Kurulu Başkanı" },
    { ad: "Zeynep Er", gorev: "Üye" },
    { ad: "Kemal Doğan", gorev: "Üye" },
  ];

  return (
    <div className="page kurul-page">
      <h1>Denetim Kurulu</h1>
      <p className="kurul-desc">
        Kooperatif faaliyetlerinin doğru ve şeffaf yürütülmesini sağlayan denetim kurulu üyeleri aşağıdadır.
      </p>

      <div className="kurul-grid">
        {denetim.map((kisi, i) => (
          <div className="kurul-card" key={i}>
            <span className="kurul-ad">{kisi.ad}</span>
            <span className="kurul-gorev">{kisi.gorev}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
