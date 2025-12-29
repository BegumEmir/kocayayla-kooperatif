import "./Faaliyetler.css";

export default function Faaliyetler() {
  return (
    <div className="page faaliyet-page">

      {/* Hero */}
      <section className="faaliyet-hero">
        <h1>Faaliyetlerimiz</h1>
        <p>
          Kooperatifimiz, üyelerimizin üretim süreçlerini kolaylaştırmak ve
          maliyetlerini azaltmak amacıyla tarım ve hayvancılığın farklı
          alanlarında hizmet vermektedir. Temel hedefimiz; ortaklarımızın
          ihtiyaçlarını zamanında, güvenilir ve uygun koşullarla karşılamaktır.
        </p>
      </section>

      {/* Kartlar */}
      <section className="faaliyet-grid">

        {/* Süt */}
        <div className="faaliyet-card">
          <div className="faaliyet-img-wrapper">
            <img
              src={process.env.PUBLIC_URL + "/galeri/süt-toplama-arabası.jpeg"}
              alt="Süt toplama ve soğutma hizmeti"
            />
          </div>
          <h2>🥛 Süt Toplama ve Soğutma Hizmeti</h2>
          <p>
            Kooperatifimiz, üyelerimizden düzenli olarak süt toplamakta ve modern
            süt tanklarında hijyenik koşullarda soğutarak muhafaza etmektedir.
            Soğutulan sütler, kalite standartlarına uygun şekilde satışa
            sunularak üyelerimizin emeğinin değer kazanması sağlanmaktadır.
          </p>
        </div>

        {/* Yem */}
        <div className="faaliyet-card">
          <div className="faaliyet-img-wrapper icon-only">🌾</div>
          <h2>🌾 Yem Temini ve Satışı</h2>
          <p>
            Hayvancılıkla uğraşan üyelerimizin yem ihtiyacını karşılamak amacıyla
            kooperatifimiz tarafından toplu yem alımı yapılmaktadır. Temin edilen
            yemler, uygun fiyatlarla üyelerimize sunularak üretim maliyetlerinin
            düşürülmesine katkı sağlanmaktadır.
          </p>
        </div>

        {/* Un */}
        <div className="faaliyet-card">
          <div className="faaliyet-img-wrapper icon-only">🌾</div>
          <h2>🌾 Un Temini</h2>
          <p>
            Kooperatifimiz tarafından her pazar günü müstahsillerimizin evlerine
            un dağıtımı ücretsiz olarak yapılmaktadır.
          </p>
        </div>

        {/* Değirmen */}
        <div className="faaliyet-card">
          <div className="faaliyet-img-wrapper">
            <img
              src={process.env.PUBLIC_URL + "/galeri/değirmen.jpeg"}
              alt="Kooperatif değirmen hizmeti"
            />
          </div>
          <h2>⚙️ Değirmen Hizmeti</h2>
          <p>
            Kooperatif bünyesinde bulunan değirmende, üyelerimiz arpalarını
            getirerek arpa ezmesi haline dönüştürebilmektedir.
          </p>
        </div>

        {/* Kepçe */}
        <div className="faaliyet-card">
          <div className="faaliyet-img-wrapper">
            <img
              src={process.env.PUBLIC_URL + "/galeri/kepçe.jpeg"}
              alt="Tarımsal makine ve kepçe hizmetleri"
            />
          </div>
          <h2>🚜 Tarımsal Makine ve Kepçe Hizmetleri</h2>
          <p>
            Kooperatifimizin sahip olduğu traktör, kepçe ve beko loder ile
            üyelerimizin tarımsal faaliyetlerinde ihtiyaç duydukları makine
            hizmetleri karşılanmaktadır.
          </p>
        </div>

        {/* Balya */}
        <div className="faaliyet-card">
          <div className="faaliyet-img-wrapper icon-only">🌾</div>
          <h2>🌾 Balya Bağlama Hizmeti</h2>
          <p>
            Kooperatifimizin balya makinesi ile yaz döneminde üyelerimizin balya
            bağlama ihtiyaçları karşılanmaktadır.
          </p>
        </div>

      </section>

      {/* Callout */}
      <section className="faaliyet-callout">
        <h2>Birlikte Daha Güçlüyüz</h2>
        <p>
          Kooperatifimiz, sahip olduğu imkanlar ve sunduğu hizmetlerle
          üyelerimizin yanında olmaya, üretimi desteklemeye ve kırsal kalkınmaya
          katkı sağlamaya devam etmektedir.
        </p>
      </section>
    </div>
  );
}
