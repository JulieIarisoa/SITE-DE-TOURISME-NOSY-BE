import '../style/Section5.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function Location() {
  ///Pour traduction
  const [t, i18n] = useTranslation("global");

    /****************************Section pour la localisation **********/
  return (
    <section id="location" className="location-section">
      <h2><FontAwesomeIcon icon={faGlobe} className='icon'/>{t("header.Sect4_titre")}</h2>
      <p>{t("header.Sect4_sous_titre")}</p>
      <div className="map-container">
      <iframe
        title="Carte Nosy Be"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5039440042664!2d48.20194987478054!3d-13.395296888696408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x222f83a158ce514f%3A0xf05ab748f303f256!2sNosy%20Be%2C%20Madagascar!5e0!3m2!1sfr!2sfr!4v1692873307291!5m2!1sfr!2sfr"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default Location;
