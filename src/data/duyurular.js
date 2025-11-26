const base = process.env.PUBLIC_URL;

const duyurular = [
  {
    id: 1,
    baslik: "Yeni Dönem Üye Başvuruları",
    aciklama:
      "Kooperatifimize yeni dönem üye başvuruları belirlenen tarihler arasında alınacaktır.",
    tarih: "12 Şubat 2025",
    gorsel: `${base}/images/koop1.jpeg`,
  },
  {
    id: 2,
    baslik: "Genel Kurul Toplantısı",
    aciklama:
      "Kooperatifimizin olağan genel kurul toplantısı, gündem maddeleri doğrultusunda gerçekleştirilecektir.",
    tarih: "25 Ocak 2025",
    gorsel: null, // fotoğraf yok, istersen null
  },
  {
    id: 3,
    baslik: "Üretim Planlama Toplantısı",
    aciklama:
      "Yeni sezon ekim ve hasat planlaması için ortaklarımızla bilgilendirme toplantısı yapılacaktır.",
    tarih: "5 Ocak 2025",
    gorsel: null,
  },
];

export default duyurular;
