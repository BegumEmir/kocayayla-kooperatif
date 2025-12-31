import { useState } from "react";
import "./Galeri.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Galeri() {
  useDocumentTitle("Galeri | S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi");
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    process.env.PUBLIC_URL + "/galeri/ekibimiz.jpeg",
    process.env.PUBLIC_URL + "/galeri/süt-toplama-merkezi-ekip-fotosu.jpeg",
    process.env.PUBLIC_URL + "/galeri/yönetim-ekibi.jpeg",
    process.env.PUBLIC_URL + "/galeri/yem-ezme-tesisi-ekip-fotosu.jpeg",
    process.env.PUBLIC_URL + "/galeri/kepçe.jpeg",
    process.env.PUBLIC_URL + "/galeri/değirmen.jpeg",
    process.env.PUBLIC_URL + "/galeri/çalışan-kepçe.jpeg",
    process.env.PUBLIC_URL + "/galeri/cami-yukardan.jpeg",
    process.env.PUBLIC_URL + "/galeri/camii.png",
    process.env.PUBLIC_URL + "/galeri/haber-belge.jpeg",
    process.env.PUBLIC_URL + "/galeri/il-tarım-toplu-foto-belge.jpeg",
    process.env.PUBLIC_URL + "/galeri/il-tarım-toplu-foto-yem-ezme-tesisi.jpeg",
    process.env.PUBLIC_URL + "/galeri/il-tarım-toplu-süt-toplama-merkezi.jpeg",
    process.env.PUBLIC_URL + "/galeri/manzara-ağaç.jpeg",
    process.env.PUBLIC_URL + "/galeri/manzara-dikey.jpeg",
    process.env.PUBLIC_URL + "/galeri/manzara.jpeg",
    process.env.PUBLIC_URL + "/galeri/süt-soğutma-deposu-il-tarım.jpeg",
    process.env.PUBLIC_URL + "/galeri/yatay-manzara.jpeg"
  ];

  return (
    <div className="page galeri-page">
      <h1>Galeri</h1>
      <p className="galeri-desc">
        Kooperatifimizden kareleri görmek için fotoğraf galerimize göz atabilirsiniz.
      </p>

      {/* GRID */}
      <div className="galeri-grid">
        {images.map((img, i) => (
          <div className="galeri-item" key={i} onClick={() => setSelectedImage(img)}>
            <img src={img} alt={`Kooperatifimizden Kareler ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="galeri-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Büyük Görsel" className="modal-img" />
        </div>
      )}
    </div>
  );
}
