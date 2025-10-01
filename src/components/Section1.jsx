import "../style/Section1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Section1() {
  //Pour le changement de langue
  const [t] = useTranslation("global");

    /************* Section pour l'accueil dans le site ***************/
  return (
  <section className="hero-section" id="Accueil">
    <div className="hero-overlay"></div>

    <div className="hero-content container">
      <h1 className="hero-title">{t("header.Sect1_titre")}</h1>
      <p className="hero-subtitle">{t("header.Sect1_soustitre")}</p>
      <div className="hero-buttons">
        <a href="#location" className="btn btn-outline-light me-3">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
          {t("header.btn_localiser")}
        </a>
        <a href="#contact" className="btn btn-primary">
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          {t("header.btn_contactez-moi")}
        </a>
      </div>
    </div>
  </section>
  );
}
