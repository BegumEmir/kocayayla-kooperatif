import "./Faaliyetler.css";


export default function Faaliyetler() {
  return (
    <div className="page faaliyet-page">

      {/* Hero / Üst Başlık */}
      <section className="faaliyet-hero">
        <h1>Faaliyetlerimiz</h1>
        <p>
          Kooperatifimiz, üyelerimizin üretim süreçlerini kolaylaştırmak ve maliyetlerini azaltmak amacıyla tarım ve hayvancılığın farklı alanlarında hizmet vermektedir. Temel hedefimiz; ortaklarımızın ihtiyaçlarını zamanında, güvenilir ve uygun koşullarla karşılamaktır.
        </p>
      </section>

      {/* Faaliyet Kartları */}
      <section className="faaliyet-grid">
        
        <div className="faaliyet-card">
          <h2>🥛 Süt Toplama ve Soğutma Hizmeti</h2>
          <p>
            Kooperatifimiz, üyelerimizden düzenli olarak süt toplamakta ve modern süt tanklarında hijyenik koşullarda soğutarak muhafaza etmektedir. Soğutulan sütler, kalite standartlarına uygun şekilde satışa sunularak üyelerimizin emeğinin değer kazanması sağlanmaktadır.
          </p>
        </div>

        <div className="faaliyet-card">
          <h2>🌾 Yem Temini ve Satışı</h2>
          <p>
            Hayvancılıkla uğraşan üyelerimizin yem ihtiyacını karşılamak amacıyla kooperatifimiz tarafından toplu yem alımı yapılmaktadır. Temin edilen yemler, uygun fiyatlarla üyelerimize sunularak üretim maliyetlerinin düşürülmesine katkı sağlanmaktadır.
          </p>
        </div>

        <div className="faaliyet-card">
          <h2>🌾 Un Temini</h2>
          <p>
            Kooperatifimiz, üyelerimizin un ihtiyacını karşılamak için güvenilir tedarikçilerden un temin etmekte ve üyelerine satışını gerçekleştirmektedir. Böylece temel gıda ihtiyaçlarının kooperatif güvencesiyle karşılanması amaçlanmaktadır.
          </p>
        </div>

        <div className="faaliyet-card">
          <h2>⚙️ Değirmen Hizmeti</h2>
          <p>
            Kooperatif bünyesinde bulunan değirmende, üyelerimiz arpalarını getirerek arpa ezmesi haline dönüştürebilmektedir. Bu hizmet sayesinde hem hayvan beslemede hem de üretimde ihtiyaç duyulan ürünler pratik bir şekilde elde edilmektedir.
          </p>
        </div>

        <div className="faaliyet-card">
          <h2>🚜 Tarımsal Makine ve Kepçe Hizmetleri</h2>
          <p>
            Kooperatifimizin sahip olduğu traktör, kepçe ve beko loder ile üyelerimizin tarımsal faaliyetlerinde ihtiyaç duydukları makine hizmetleri karşılanmaktadır. Arazi düzenleme, yükleme ve benzeri işler kooperatif desteğiyle gerçekleştirilmektedir.
          </p>
        </div>

        <div className="faaliyet-card">
          <h2>🌾 Balya Bağlama Hizmeti</h2>
          <p>
            Üreticiler arası dayanışmayı teşvik ederek tecrübe paylaşımını
            artırıyoruz ve kırsal kalkınma bilincini güçlendiriyoruz.
          </p>
        </div>

      </section>

      {/* Kapanış Mesajı */}
      <section className="faaliyet-callout">
        <h2>Birlikte Daha Güçlüyüz</h2>
        <p>
          Kooperatifimiz, sahip olduğu imkanlar ve sunduğu hizmetlerle üyelerimizin yanında olmaya, üretimi desteklemeye ve kırsal kalkınmaya katkı sağlamaya devam etmektedir.
        </p>
      </section>
    </div>
  );
}
