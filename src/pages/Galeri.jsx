import { useState } from "react";
import "./Galeri.css";
import useDocumentTitle from "../hooks/useDocumentTitle";
import galeriItems from "../data/galeri";

export default function Galeri() {
  useDocumentTitle("Galeri | S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi");
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <div className="page galeri-page">
      <h1>Galeri</h1>
      <p className="galeri-desc">
        Kooperatifimizden kareleri görmek için fotoğraf ve video galerimize göz atabilirsiniz.
      </p>

      <div className="galeri-grid">
        {galeriItems.slice().reverse().map((item, i) => (
          <div className="galeri-item" key={i} onClick={() => setSelectedMedia(item)}>
            {item.type === "foto" ? (
              <img src={item.src} alt={`Kooperatifimizden Kareler ${i + 1}`} />
            ) : (
              <div className="galeri-video-thumb">
                <video src={`${item.src}#t=0.001`} muted playsInline preload="metadata" />
                <span className="galeri-play-icon">▶</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedMedia && (
        <div className="galeri-modal" onClick={() => setSelectedMedia(null)}>
          {selectedMedia.type === "foto" ? (
            <img src={selectedMedia.src} alt="Büyük Görsel" className="modal-img" />
          ) : (
            <video
              src={selectedMedia.src}
              className="modal-video"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}

    </div>
  );
}
