import "./Ortaklarimiz.css";

export default function Ortaklarimiz() {
  return (
    <div className="page ortaklar-page">
      <h1>Ortaklarımız</h1>

      <section className="ortaklar-stats">
        <div className="stat-card">
          <span className="stat-number">179</span>
          <span className="stat-label">Ortak</span>
        </div>

        <div className="stat-card">
          <span className="stat-number">78</span>
          <span className="stat-label">Aktif Ortak</span>
        </div>
      </section>


      {/* Üst Bilgi */}
      <section className="ortaklar-ozet">
        <p>
          Kooperatifimiz, Kocayayla Köyü’nde tarım ve hayvancılıkla uğraşan
          üreticilerin gönüllü katılımıyla faaliyet göstermektedir. Bugün
          kooperatifimiz bünyesinde <strong>179 ortağımız</strong> ve{" "}
          <strong>78 aktif ortak</strong> bulunmaktadır.
        </p>

        <p>
          Ortaklarımız, kooperatifimizin sunduğu hizmetlerden eşit ve adil
          şekilde yararlanmakta; üretim, tedarik ve hizmet süreçlerine katılım
          sağlayarak kooperatifimizin gelişimine katkıda bulunmaktadır.
          Üretici gücünü birleştiren bu yapı sayesinde hem bireysel hem de
          toplu fayda hedeflenmektedir.
        </p>
      </section>

      {/* KOOPBİS */}
      <section className="koopbis-section">
        <h2>KOOPBİS (Kooperatif Bilgi Sistemi)</h2>

        <p>
          KOOPBİS (Kooperatif Bilgi Sistemi), Ticaret Bakanlığı tarafından
          oluşturulan ve Türkiye genelindeki kooperatiflere ait bilgilerin
          kayıt altına alındığı resmi bir dijital sistemdir.
        </p>

        <p>
          Bu sistem aracılığıyla kooperatiflerin ortaklık yapıları, yönetim ve
          denetim kurulları, faaliyet bilgileri ve resmi kayıtları merkezi
          olarak takip edilmektedir. KOOPBİS, kooperatiflerde şeffaflığın
          artırılmasını ve güncel bilgilerin düzenli olarak tutulmasını
          amaçlamaktadır.
        </p>

        <p>
          Kooperatifimiz de KOOPBİS sistemine kayıtlı olup, resmi bilgileri bu
          sistem üzerinden takip edilebilmektedir.
        </p>

        <a
          href="https://koopbis.ticaret.gov.tr"
          target="_blank"
          rel="noopener noreferrer"
          className="koopbis-link"
        >
          KOOPBİS sistemine git →
        </a>
      </section>
      <section className="ortak-avantajlar">
        <h2>Ortak Olmanın Avantajları</h2>

        <div className="avantaj-grid">
          <div className="avantaj-card">
            <h3>Girdi Maliyetlerinde Avantaj</h3>
            <p>
              Yem, un ve diğer temel girdiler kooperatif aracılığıyla daha uygun
              koşullarla temin edilir.
            </p>
          </div>

          <div className="avantaj-card">
            <h3>Ürünlerin Değerinde Satışı</h3>
            <p>
              Süt ve diğer ürünler toplu şekilde değerlendirilerek üreticimizin
              emeğinin karşılığı korunur.
            </p>
          </div>

          <div className="avantaj-card">
            <h3>Makine ve Hizmet Desteği</h3>
            <p>
              Traktör, kepçe, balya ve değirmen gibi hizmetlerden ortaklar eşit ve
              planlı şekilde faydalanır.
            </p>
          </div>

          <div className="avantaj-card">
            <h3>Dayanışma ve Güven</h3>
            <p>
              Kooperatif çatısı altında üreticiler arası dayanışma güçlenir,
              sürdürülebilir üretim desteklenir.
            </p>
          </div>
        </div>
      </section>
      <section className="ortak-cta">
        <h2>Ortak Olmak İsteyenler İçin</h2>
        <p>
          Kooperatifimize ortak olmak isteyen üreticilerimiz, başvuru süreci ve
          ortaklık şartları hakkında detaylı bilgi almak için bizimle iletişime
          geçebilirler. Başvurular ilgili mevzuat ve kooperatif ana sözleşmesi
          kapsamında değerlendirilmektedir.
        </p>

        <p className="ortak-cta-note">
          Güncel ortaklık bilgileri ve resmi kayıtlar KOOPBİS sistemi üzerinden
          takip edilmektedir.
        </p>
      </section>


    </div>
  );
}
