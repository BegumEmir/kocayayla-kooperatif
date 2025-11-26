import "./Hakkimizda.css";

export default function Hakkimizda() {
  return (
    <div className="page hakkimizda-page">
      {/* Üst kısım: Başlık + kısa özet */}
      <section className="hakkimizda-hero">
        <div className="hakkimizda-hero-text">
          <h1>Hakkımızda</h1>
          <p>
            S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi olarak,
            köyümüzün doğal üretim gücünü bir araya getirerek kırsal kalkınmayı,
            üreticilerimizin refahını ve sürdürülebilir tarımı destekliyoruz.
          </p>
          <p>
            Kooperatifimiz; toprağa, üretime ve dayanışma kültürüne inanan
            üreticilerin bir araya gelmesiyle kurulmuş; şeffaflık, güven ve
            birliktelik ilkeleriyle faaliyet göstermektedir.
          </p>
        </div>

        {/* Görsel alan – şimdilik placeholder, sonra foto koyarsın */}
        <div className="hakkimizda-hero-image">
          <div className="hakkimizda-hero-placeholder">
            <img src={process.env.PUBLIC_URL + "/images/koop1.jpeg"} alt="Kooperatif Fotoğrafı" />
          </div>
        </div>
      </section>

      {/* Misyon - Vizyon */}
      <section className="hv-grid">
        <div className="hv-card">
          <h2>Misyonumuz</h2>
          <p>
            Köylümüzün ürettiği ürünlerin katma değerini artırmak, üreticilerimize
            eğitim ve teknik destek sağlamak, doğal ve sağlıklı üretimi
            teşvik ederek Kocayayla&apos;nın tarımsal potansiyelini en üst
            seviyeye taşımak.
          </p>
        </div>

        <div className="hv-card">
          <h2>Vizyonumuz</h2>
          <p>
            Kocayayla&apos;yı bölgesinin öncü tarımsal üretim merkezlerinden biri
            haline getirmek ve güvenilir, kaliteli üretim anlayışıyla Türkiye&apos;de
            örnek gösterilen bir kooperatif olmak.
          </p>
        </div>
      </section>

      {/* Değerler */}
      <section className="values-section">
        <h2>Değerlerimiz</h2>
        <p>
          Tüm çalışmalarımızı, ortaklarımız ve köyümüz için benimsediğimiz temel
          değerler üzerine inşa ediyoruz:
        </p>
        <div className="values-tags">
          <span>Dürüstlük</span>
          <span>Dayanışma</span>
          <span>Sürdürülebilirlik</span>
          <span>Şeffaflık</span>
          <span>Güvenilirlik</span>
          <span>Toplumsal Fayda</span>
        </div>
      </section>

      {/* Zaman Çizelgesi */}
      <section className="timeline-section">
        <h2>Kooperatifimizin Yolculuğu</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Kuruluş</h3>
              <p>
                Köy üreticilerimizin bir araya gelmesiyle kooperatifimiz resmi
                olarak kuruldu ve ilk ortaklarımızla faaliyetlerimize başladık.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Üretimde Birliktelik</h3>
              <p>
                Ortak alım, ortak planlama ve toplu üretim modelleriyle
                maliyetlerimizi düşürüp ürünlerimizin kalitesini artırdık.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Pazar Ağının Geliştirilmesi</h3>
              <p>
                Ürünlerimizin daha geniş kitlelere ulaşması için yeni pazar
                kanalları, iş birlikleri ve tanıtım çalışmaları yürütmeye
                başladık.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faaliyet Alanları */}
      <section className="activities-section">
        <h2>Faaliyet Alanlarımız</h2>
        <div className="activities-grid">
          <div className="activity-card">
            <h3>Ortak Üretim ve Planlama</h3>
            <p>
              Kooperatif çatısı altında üretim planlaması yaparak hem verimi
              artırıyor hem de ürün sürekliliğini sağlıyoruz.
            </p>
          </div>
          <div className="activity-card">
            <h3>Eğitim ve Danışmanlık</h3>
            <p>
              Üreticilerimiz için tarımsal teknikler, verimlilik, kooperatifçilik
              ve pazarlama gibi konularda bilgilendirme çalışmaları yürütüyoruz.
            </p>
          </div>
          <div className="activity-card">
            <h3>Pazarlama ve Tanıtım</h3>
            <p>
              Yerel ve bölgesel pazarlarda kooperatif ürünlerimizin bilinirliğini
              artırmak için markalaşma ve tanıtım faaliyetleri yapıyoruz.
            </p>
          </div>
          <div className="activity-card">
            <h3>Girdi Temini ve Destek</h3>
            <p>
              Tohum, gübre ve ekipman gibi temel girdilerin temininde ortak
              hareket ederek üreticilerimize maliyet avantajı sağlamayı
              hedefliyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Kapanış metni */}
      <section className="callout-section">
        <h2>Birlikte Güçlüyüz</h2>
        <p>
          Kocayayla Köyü&apos;nün geleceğini, toprağına sahip çıkan üreticilerimizle
          birlikte şekillendiriyoruz. Kooperatifimize dair daha fazla bilgi
          almak, ortaklık süreçleri hakkında detay öğrenmek veya iş birliği
          teklifinde bulunmak için bizimle her zaman iletişime geçebilirsiniz.
        </p>
      </section>
    </div>
  );
}
