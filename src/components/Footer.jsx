import React from 'react';
import '../style/Footer.css'
import { useTranslation } from 'react-i18next';

function Footer() {
  const [t, i18n] = useTranslation("global");
  return (
    /********** Footer du site **********/
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column about">
          <h3>{t("header.Footer_sous_titre1")}</h3>
          <p>{t("header.Footer_appropos_description")}</p>
        </div>

        <div className="footer-column links">
          <h3>{t("header.Footer_sous_titre2")}</h3>
          <ul>
            <li><a href="#Accueil">{t("header.Footer_link_accueil")}</a></li>
            <li><a href="#Apropos">{t("header.Footer_link_apropos")}</a></li>
            <li><a href="#offre">{t("header.Footer_link_excursion")}</a></li>
            <li><a href="#location">{t("header.Footer_link_localisation")}</a></li>
            <li><a href="#decouvert">{t("header.Footer_link_decouvrir")}</a></li>
            <li><a href="#gallery">{t("header.Footer_link_galerie")}</a></li>
            <li><a href="#temoigne">{t("header.Footer_link_temoignage")}</a></li>
            <li><a href="#contact">{t("header.Footer_link_contact")}</a></li>
          </ul>
        </div>

        <div className="footer-column contact">
          <h3>{t("header.Footer_sous_titre3")}</h3>
          <p><i className="fas fa-map-marker-alt"></i> {t("header.Footer_contact_addresse")}</p>
          <p><i className="fas fa-phone"></i> {t("header.Footer_contact_tel")}</p>
          <p><i className="fas fa-envelope"></i> {t("header.Footer_contact_email")}</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-column message">
          <h3>{t("header.Footer_sous_titre4")}</h3>
          <label>{t("header.Footer_vocabs_nom")}</label><br />
          <input type='text' className="form-control"/><br />
          <label>{t("header.Footer_vocabs_commentaire")}</label><br />
          <textarea className="form-control"/><br />
          <input type='submit' value={t("header.Footer_btn_envoyer")} className='btn btn-primary'/>
        </div>

      </div>

      <div className="footer-bottom">
        <p>{t("header.Footer_fin")}</p>
      </div>
    </footer>
  );
}

export default Footer;
