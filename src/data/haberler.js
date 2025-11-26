const base = process.env.PUBLIC_URL;

const haberler = [
  {
    id: 1,
    kategori: "Haberler",
    baslik: "Kooperatifimiz Yeni Sezon Üretim Planını Açıkladı",
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
    baslik: "Kocayayla’da Organik Ürün Tanıtım Günü Düzenlendi",
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
    baslik: "Kooperatif Üyeleri İçin Eğitim Programı Başladı",
    aciklama:
      "Tarım teknolojileri, sürdürülebilir üretim ve kooperatifçilik üzerine eğitimler veriliyor.",
    detay:
      "Sürdürülebilir tarım, modern üretim teknikleri ve kooperatif yönetimi üzerine kapsamlı eğitimler verilmeye başlanmıştır. Üyelerimizin katılımı ücretsizdir.",
    tarih: "15 Kasım 2024",
    foto: `${base}/haber3.jpeg`,
  },
];

export default haberler;
