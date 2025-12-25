const base = process.env.PUBLIC_URL;

const haberler = [
  {
    id: 1,
    kategori: "Haberler",
    baslik: "ÖRNEK HABER Kooperatifimiz Yeni Sezon Üretim Planını Açıkladı",
    aciklama:
      "Bu yıl üretim kapasitemizi artırarak yerel üreticiye daha fazla destek sağlamayı hedefliyoruz.",
    detay:
      "Kooperatifimiz bu yıl üretim kapasitesini artırmak adına çeşitli yatırımlar gerçekleştirmiştir. Üyelerimize daha fazla destek sunmayı hedefliyoruz. Bu kapsamda yeni depolama alanları, modern üretim araçları ve eğitim programları devreye alınacaktır.",
    tarih: "10 Ocak 2025",
    foto: `${base}/haber1.jpg`,
  },
  {
    id: 2,
    kategori: "Haberler",
    baslik: "ÖRNEK HABER Kocayayla’da Organik Ürün Tanıtım Günü Düzenlendi",
    aciklama:
      "Yerel halk ve üreticilerin yoğun katılımıyla gerçekleşen etkinlikte organik ürünler tanıtıldı.",
    detay:
      "Organik ürün üretimini teşvik eden etkinlikte birçok üreticimiz stant açarak kendi ürünlerini tanıttı. Büyük ilgi gören etkinlikte kooperatif olarak bölge ekonomisine destek olacak projelerimizi tanıttık.",
    tarih: "22 Aralık 2024",
    foto: `${base}/haber2.jpg`,
  },
  {
    id: 3,
    kategori: "Haberler",
    baslik: "ÖRNEK HABER Kooperatif Üyeleri İçin Eğitim Programı Başladı",
    aciklama:
      "Tarım teknolojileri, sürdürülebilir üretim ve kooperatifçilik üzerine eğitimler veriliyor.",
    detay:
      "Sürdürülebilir tarım, modern üretim teknikleri ve kooperatif yönetimi üzerine kapsamlı eğitimler verilmeye başlanmıştır. Üyelerimizin katılımı ücretsizdir.",
    tarih: "15 Kasım 2024",
    foto: `${base}/haber3.jpeg`,
  },

  {
    id: 4,
    kategori: "Haberler",
    baslik: "2025 Yılı Çanakkale İli Birinci Derece Tarımsal Örgüt Belgeleri Sahiplerini Buldu",
    aciklama:
      "S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi Bakanlığımız tarafından yapılan değerlendirmeler sonucunda 1. Derece Tarımsal Örgüt Belgesi almaya hak kazandı",
    detay:
      "İl Müdürümüz Ergün Demirhan beraberinde İl Müdür Yardımcımız Ahmet Kılınç, İlçe Müdürümüz Belma Türe ve Hayvan Sağlığı ve Yetiştiriciliği Şube Müdürü Erkan Erdoğmuş ile Çan İlçesi Süt Üreticileri Birliği ve Kocayayla Köyü Tarımsal Kalkınma Kooperatifini ziyaret ederek  1.Derece Tarımsal Örgüt Belgelerini teslim etti, başarı dileklerini iletti. 🗓️Belgenin  Geçerlilik Süresi: 1 Ocak 2026 - 31 Aralık 2026",
    tarih: "19 Aralık 2025",
    foto: `${base}/haber4.jpeg`,
  },
];

export default haberler;
