import { useState } from "react";
import "./Galeri.css";

export default function Galeri() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    process.env.PUBLIC_URL + "/galeri/1.jpeg",
    process.env.PUBLIC_URL + "/galeri/2.jpeg"
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
            <img src={img} alt={`Galeri ${i + 1}`} />
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
