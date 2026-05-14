const base = process.env.PUBLIC_URL;

const haberler = [
  {
    id: 1,
    kategori: "Haberler",
    baslik: "2025 Yılı Çanakkale İli Birinci Derece Tarımsal Örgüt Belgeleri Sahiplerini Buldu",
    aciklama:
      "S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi Bakanlığımız tarafından yapılan değerlendirmeler sonucunda 1. Derece Tarımsal Örgüt Belgesi almaya hak kazandı.",
    detay:
      `S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi Bakanlığımız tarafından yapılan değerlendirmeler sonucunda 1. Derece Tarımsal Örgüt Belgesi almaya hak kazandı.
      İl Müdürümüz Ergün Demirhan beraberinde İl Müdür Yardımcımız Ahmet Kılınç, İlçe Müdürümüz Belma Türe ve Hayvan Sağlığı ve Yetiştiriciliği Şube Müdürü Erkan Erdoğmuş ile Çan İlçesi Süt Üreticileri Birliği ve Kocayayla Köyü Tarımsal Kalkınma Kooperatifini ziyaret ederek  1.Derece Tarımsal Örgüt Belgelerini teslim etti, başarı dileklerini iletti.
      🗓️Belgenin  Geçerlilik Süresi: 1 Ocak 2026 - 31 Aralık 2026`,
    tarih: "19 Aralık 2025",
    medya: [
      { type: "foto", src: `${base}/galeri/haber-belge.jpeg` },
    ],
  },

  {
    id: 2,
    kategori: "Haberler",
    baslik: "Birinci Derece Tarımsal Örgüt Üyesi Olmanın Avantajlarını Keşfedin",
    aciklama:
      "Tarımda güç birliği yapmak artık çok daha kazançlı. Birinci Derece Tarımsal Örgüt statüsüne sahip olduğunuzda, temel desteklere ilave olarak birçok nakdi destek ve indirimden faydalanabilirsiniz.",
    detay: `Birinci Derece Tarımsal Örgüt Üyesi Olmanın Avantajlarını Keşfedin

      Tarımda güç birliği yapmak artık çok daha kazançlı. "Birinci Derece Tarımsal Örgüt" statüsüne sahip olduğunuzda, temel desteklere ilave olarak birçok nakdi destek ve indirimden faydalanabilirsiniz.

      💰 Hayvancılıkta Ek Destek Ödemeleri:
      🐄 Büyükbaş Hayvancılık: Buzağı başına +280 TL, malak başına ise +560 TL ilave destek.
      🥩 Besilik Sığır: İlave +500 TL destek.
      🐑 Küçükbaş Hayvancılık: Kuzu ve oğlak başına +60 TL ek ödeme.
      🐝 Arıcılık: 100 arılı kovan için +2.800 TL ilave destek.
      🥛 Çiğ Süt: Litre başına +40 kuruş ilave prim.

      💳 Finansal Avantajlar ve İndirimler:
      🏦 Ziraat Bankası Kredileri: %10 faiz indirimi.
      🛡️ TARSİM: Tarım sigortalarında %5 indirim fırsatı.

      🧑🏻‍🌾 Üretiminize değer katmak için örgütlü tarımın gücüne dahil olun 🌱✨`,
    tarih: "30 Aralık 2025",
    medya: [
      { type: "video", src: `${base}/galeri/birinci-derece-koop.mp4` },
    ],
  },

  {
    id: 3,
    kategori: "Haberler",
    baslik: "Başkanımızdan Yeni Yıl Mesajı",
    aciklama:
      "2026 yılının tüm üreticilerimize hayırlı ve bol kazançlar getirmesini temenni ediyor, sağlık huzur mutluluk getirmesini diliyorum.",
    detay: `2026 yılının tüm üreticilerimize hayırlı ve bol kazançlar getirmesini temenni ediyor, sağlık huzur mutluluk getirmesini diliyorum.`,
    tarih: "31 Aralık 2025",
    medya: [
      { type: "foto", src: `${base}/galeri/baskan-yakın-cekim.jpeg` },
    ],
  },

  {
    id: 4,
    kategori: "Haberler",
    baslik: "Olağan Genel Kurul Toplantımızı Gerçekleştirdik",
    aciklama:
      "Kooperatifimizin 2025 yılı Olağan Genel Kurul toplantısını 24 Mart 2026 tarihinde Kocayayla Köyü İlköğretim Okulunda gerçekleştirdik.",
    detay: `Kooperatifimizin 2025 yılı Olağan Genel Kurul toplantısını 24 Mart 2026 tarihinde Kocayayla Köyü İlköğretim Okulunda gerçekleştirdik.`,
    tarih: "25 Mart 2026",
    medya: [
      { type: "foto", src: `${base}/galeri/genel-kurul.jpeg` },
    ],
  },

  {
    id: 5,
    kategori: "Haberler",
    baslik: "Üyelerimizin Gücüyle 2026'da da İlerliyoruz",
    aciklama:
      "2026 yılında da üyelerimizin desteğiyle büyümeye devam ediyoruz. Bu yıl birinci derece tarımsal kooperatif statüsüne kavuştuk, resmi web sitemizi hayata geçirdik; 2 tonluk süt tankımız, yangın söndürme tankerimiz ve yeni traktör kepçemizle köyümüze hizmet etmeye devam ediyoruz.",
    detay: `2026 yılında da üyelerimizin desteğiyle büyümeye devam ediyoruz. Bu yıl birinci derece tarımsal kooperatif statüsüne kavuştuk, resmi web sitemizi hayata geçirdik; 2 tonluk süt tankımız, yangın söndürme tankerimiz ve yeni traktör kepçemizle köyümüze hizmet etmeye devam ediyoruz.`,
    tarih: "14 Mayıs 2026",
    medya: [
      { type: "video", src: `${base}/galeri/kocayayla2026.mp4` },
      { type: "foto", src: `${base}/galeri/2-ton-sut-tanki.jpeg` },
      { type: "foto", src: `${base}/galeri/sut-tankeri-yandan.jpeg` },
      { type: "foto", src: `${base}/galeri/yangin-sondurme-tankeri.jpeg` },
      { type: "foto", src: `${base}/galeri/yeni-kepce-toplu-foto.jpeg` },
      { type: "foto", src: `${base}/galeri/yeni-kepçe-gece.jpeg` },
      { type: "foto", src: `${base}/galeri/yeni-kepce-toplu-gece.jpeg` },
      { type: "video", src: `${base}/galeri/yeni-kepce.mp4` },
    ],
  },

];

export default haberler;
