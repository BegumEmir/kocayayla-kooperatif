import "./Hakkimizda.css";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";


export default function Hakkimizda() {
  useDocumentTitle("Kurumsal Kimliğimiz | Kocayayla Kooperatifi");

  return (
    <div className="page hakkimizda-page">
      {/* Üst kısım: Başlık + kısa özet */}
      <section className="hakkimizda-hero">
        <div className="hakkimizda-hero-text">
          <h1>Kurumsal Kimliğimiz</h1>
          <h2>Hakkımızda</h2>
          <p>
          S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi, Kocayayla Köyü’nde tarım ve hayvancılıkla uğraşan üreticilerin ekonomik ve sosyal olarak güçlenmesini sağlamak amacıyla kurulmuştur. Kooperatifimiz, ortaklarımızın üretim faaliyetlerini desteklemek, maliyetlerini azaltmak ve sürdürülebilir bir üretim yapısı oluşturmak hedefiyle faaliyetlerini sürdürmektedir.
          </p>
          <p>
          Kooperatifimiz, 2004 yılında 7 üreticimizin bir araya gelmesiyle kurulmuştur. Kuruluşumuzda emeği geçen kurucu ortaklarımız; Hüsrev Damar, Hasan Ünlü, Osman Özmen, Reyhan Uysal, İbrahim Öz, Yakup Alkan ve Metin Kızıltepe’dir. 
          </p> 
          <p>
            Kuruluşumuzdan bu yana, dayanışma ve ortaklık anlayışıyla hareket ederek üyelerimizin ihtiyaçlarını karşılamaya yönelik hizmetler sunmaktayız. Süt toplama ve soğutma, yem ve un temini, tarımsal makine hizmetleri gibi alanlarda sağladığımız desteklerle üreticilerimizin yanında olmaya devam ediyoruz. 
          </p>
          <p>
            Kooperatifimizde 2004 yılından bu yana görev yapan başkanlarımız sırasıyla Hasan Ünlü, Metin Kızıltepe, Vayit Tüzgen (Merhum), Osman Deniz, Ömer Zözer ve İsa Özmen olmuştur. Bugüne kadar görev alan tüm başkanlarımıza ve yöneticilerimize kooperatifimize sundukları katkılardan dolayı teşekkür ediyor, merhum başkanımızı rahmetle anıyoruz.
          </p> 
          <p>
            Kooperatifimiz, yerel üretimi destekleyen, güvenilir ve şeffaf bir yönetim anlayışını benimsemektedir. Ortaklarımızın emeğinin değer bulması, üretimin sürdürülebilir hale gelmesi ve kırsal kalkınmaya katkı sağlanması temel önceliklerimiz arasındadır. Bugün olduğu gibi gelecekte de, üyelerimizle birlikte büyüyen, gelişen ve bölge ekonomisine katkı sunan bir kooperatif olma hedefiyle çalışmalarımızı sürdürmekteyiz.
          </p>
        </div>

        {/* Görsel alan – şimdilik placeholder, sonra foto koyarsın */}
        <div className="hakkimizda-hero-image">
          <div className="hakkimizda-hero-placeholder">
            <img src={process.env.PUBLIC_URL + "/galeri/süt-toplama-merkezi-ekip-fotosu.jpeg"} alt="Kooperatif Fotoğrafı" />
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
            <h3>Girdi Temini ve Destek</h3>
            <p>
              Yem,yem katkı maddeleri, un, pancar küspesi, arpa fleke, mısır fleke ve un gibi temel girdilerin temininde ortak
              hareket ederek üreticilerimize maliyet avantajı sağlamayı
              hedefliyoruz.
            </p>
          </div>
          <Link to="/faaliyetler" className="see-more">
            Tüm faaliyetlerimizi inceleyin →
          </Link>
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
