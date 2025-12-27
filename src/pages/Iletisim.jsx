import { useState } from "react";
import "./Iletisim.css";

export default function Iletisim() {
  const [form, setForm] = useState({
    ad: "",
    email: "",
    konu: "",
    mesaj: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.ad.trim()) newErrors.ad = "Ad soyad zorunludur.";
    if (!form.konu.trim()) newErrors.konu = "Konu zorunludur.";
    if (!form.mesaj.trim()) newErrors.mesaj = "Mesaj boş bırakılamaz.";

    if (!form.email.trim()) {
      newErrors.email = "E-posta zorunludur.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);

      setForm({
        ad: "",
        email: "",
        konu: "",
        mesaj: "",
      });

      setTimeout(() => setSuccess(false), 2000);
    }
  };

  return (
    <div className="page iletisim-page">
      <h1>İletişim</h1>
      <p className="iletisim-desc">
        Bizimle iletişime geçmek için aşağıdaki formu doldurabilir veya konumumuzu harita üzerinden görüntüleyebilirsiniz.
      </p>

      {success && <div className="success-notify">✔ Mesajınız başarıyla gönderildi!</div>}

      <div className="iletisim-container">

        {/* Sol Bilgiler */}
        <div className="iletisim-info">
          <h2>İletişim Bilgileri</h2>

          <p><strong>Adres:</strong><br /> Kocayayla Köyü, Çanakkale</p>
          <p><strong>Telefon:</strong><br /> 0 (554) 495 74 86</p>
          <p><strong>E-posta:</strong><br /> info@kocayaylakoop.org</p>

          <div className="info-box-green">
            Kooperatifimiz hakkında bilgi almak veya iletişime geçmek için formu kullanabilirsiniz.
          </div>

          {/* Google Maps */}
          <div className="harita-kutu">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5802.73514653294!2d26.984421644550427!3d40.08884588597666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b13080e6199241%3A0xc3b79c5e7c0aa78e!2sKocayayla%2C%2017402%20Kocayayla%2F%C3%87an%2F%C3%87anakkale!5e1!3m2!1str!2str!4v1763846581857!5m2!1str!2str"
              loading="lazy"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>

        {/* Form */}
        {/*
        <div className="iletisim-form">
          
          <h2>Bize Yazın</h2>

          <form onSubmit={handleSubmit}>

            <label>Ad Soyad</label>
            <input
              name="ad"
              type="text"
              value={form.ad}
              onChange={handleChange}
              placeholder="Adınız Soyadınız"
            />
            {errors.ad && <p className="error-msg">{errors.ad}</p>}

            <label>E-posta</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ornek@mail.com"
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}

            <label>Konu</label>
            <input
              name="konu"
              type="text"
              value={form.konu}
              onChange={handleChange}
              placeholder="Konu başlığı"
            />
            {errors.konu && <p className="error-msg">{errors.konu}</p>}

            <label>Mesajınız</label>
            <textarea
              name="mesaj"
              rows="5"
              value={form.mesaj}
              onChange={handleChange}
              placeholder="Mesajınızı buraya yazın..."
            />
            {errors.mesaj && <p className="error-msg">{errors.mesaj}</p>}

            <button type="submit">Gönder</button>
          </form>
          
        </div>
        */}
      </div>
    </div>
  );
}
