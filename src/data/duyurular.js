const base = process.env.PUBLIC_URL;

const duyurular = [
  {
    id: 1,
    baslik: "Yeni Dönem Üye Başvuruları",
    aciklama:
      "Kooperatifimize yeni dönem üye başvuruları belirlenen tarihler arasında alınacaktır.",
    tarih: "5 Ocak 2025",
    //gorsel: `${base}/images/haber4.jpeg`,
  },
  {
    id: 2,
    baslik: "Genel Kurul Toplantısı",
    aciklama:
      "Kooperatifimizin olağan genel kurul toplantısı, gündem maddeleri doğrultusunda gerçekleştirilecektir.",
    tarih: "15 Ocak 2025",
    gorsel: null, // fotoğraf yok, istersen null
  },
];

export default duyurular;
