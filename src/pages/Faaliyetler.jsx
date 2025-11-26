import "./Faaliyetler.css";


export default function Faaliyetler() {
  return (
    <div className="page faaliyet-page">

      {/* Hero / Üst Başlık */}
      <section className="faaliyet-hero">
        <h1>Faaliyetlerimiz</h1>
        <p>
          Kooperatif olarak üreticilerimizi desteklemek, tarımda verimi artırmak,
          pazarlama süreçlerini güçlendirmek ve köy ekonomisini geliştirmek adına
          birçok farklı alanda faaliyet yürütüyoruz.
        </p>
      </section>

      {/* Faaliyet Kartları */}
      <section className="faaliyet-grid">
        
        <div className="faaliyet-card">
          <h2>Ortak Üretim Planlaması</h2>
          <p>
            Üreticilerimizin sezonluk üretim planlarını koordine ederek ürün
            sürekliliğini ve kalite standardını sağlıyoruz.
          </p>
        </div>

        <div className="faaliyet-card">
          <h2>Eğitim ve Bilgilendirme</h2>
          <p>
            Tarımsal üretimde modern yöntemler, organik tarım uygulamaları,
            verimlilik ve kooperatif bilinci üzerine eğitimler düzenliyoruz.
          </p>
        </div>

        <div className="faaliyet-card">
          <h2>Ortak Girdi Temini</h2>
          <p>
            Tohum, gübre, yem, ilaç ve diğer tarım girdilerini toplu
            alımlarla temin ederek maliyet avantajı oluşturuyoruz.
          </p>
        </div>

        <div className="faaliyet-card">
          <h2>Pazarlama ve Satış</h2>
          <p>
            Ürünlerimizin yerel ve bölgesel pazarlarda daha geniş bir kitleye
            ulaşmasını sağlayacak satış, tanıtım ve markalaşma çalışmaları
            yürütüyoruz.
          </p>
        </div>

        <div className="faaliyet-card">
          <h2>Ürün İşleme ve Depolama</h2>
          <p>
            Ürünlerin saklama süresini uzatmak ve kaliteyi korumak için
            depolama çözümleri ve işleme destekleri sağlıyoruz.
          </p>
        </div>

        <div className="faaliyet-card">
          <h2>Kooperatif Dayanışması</h2>
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
          Kooperatif olarak köyümüzün üretim gücünü artırmak ve sürdürülebilir bir
          gelecek oluşturmak için faaliyet alanlarımızı her yıl geliştiriyor ve
          büyütüyoruz.
        </p>
      </section>
    </div>
  );
}
