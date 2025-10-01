import { useState, useEffect } from "react";
import "../style/Section2.css";
import { useTranslation } from "react-i18next";

export default function Section2() {
  //Pour le changement
  const [t] = useTranslation("global");

  //Les images qui défilent
  const images = [
    "/image/Nosy_be_guide1.png",
    "/image/Nosy_be_guide2.jpg",
    "/image/Nosy_be_guide3.jpg",
    "/image/Nosy_be_guide4.jpg",
    "/image/Nosy_be_guide5.jpg",
  ];

  //Fonction pour le défilement des images
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

    /*********Section appropos************** */
  return (
    <section id="Apropos">
      <div className="apropos-container"> 
        <div className="slider">
          {images.map((img, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>

        <div className="apropos-content">
          <h2>{t("header.Sect2_titre")}</h2>
          <p>{t("header.Sect2_paragraphe1")}</p>
          <p>{t("header.Sect2_paragraphe2")}</p>
          <p>{t("header.Sect2_paragraphe3")}</p>
          <p>{t("header.Sect2_paragraphe4")}</p>
          <button className="btn btn-outline-primary">{t("header.btn_contactez-moi")}</button>
        </div>
      </div>
    </section>
  );
}
