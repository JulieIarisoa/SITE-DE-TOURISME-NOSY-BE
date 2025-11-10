import React, { useState, useEffect } from 'react';
import '../style/Section3.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faClock, faPiggyBank, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function Section3() {
  const [t] = useTranslation("global");

  // 🧩 Offres depuis la base
  const [offres, setOffres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTour, setSelectedTour] = useState(null);

  // 🟢 Récupération des données depuis l’API
  useEffect(() => {
    const fetchOffres = async () => {
      try {
        const res = await axios.get("https://back-tourisme-production.up.railway.app/offre");
        setOffres(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur de chargement :", error);
        setLoading(false);
      }
    };
    fetchOffres();
  }, []);

  // 🧭 Ouvrir/Fermer popup
  const openPopup = (offre) => setSelectedTour(offre);
  const closePopup = () => setSelectedTour(null);

  // 🔒 Bloquer le scroll quand popup ouverte
  useEffect(() => {
    document.body.style.overflow = selectedTour ? 'hidden' : '';
  }, [selectedTour]);

  // 🧱 Affichage
  return (
    <section className='container' id='offre'>
      <h2 id='offre_titre'>
        <FontAwesomeIcon icon={faTags} className='icon' /> {t("header.btn_offres")}
      </h2>

      {loading ? (
        <p className="text-center text-secondary">Chargement des offres...</p>
      ) : (
        <div className='offres'>
          {offres.map((offre, index) => (
            <div className="box-popup" key={index}>
              <h2>{offre.titre}</h2>
              <p>{offre.description}</p>
              <p><FontAwesomeIcon icon={faHourglassHalf} className='icon' /> {t("header.Secr3_vocab_durée")} : {offre.duree}</p>
              <p><FontAwesomeIcon icon={faClock} className='icon' /> {t("header.Secr3_vocab_depart")} : 08h00</p>
              <p>
                <FontAwesomeIcon icon={faPiggyBank} className='icon' />{" "}
                {t("header.Secr3_vocab_prix")} :
                {" "}
                {offre.prix_adult
                  ? `${offre.prix_adult} Ar`
                  : "Non défini"}
              </p>

              <button
                onClick={() => openPopup(offre)}
                className="btn btn-outline-primary"
              >
                {t("header.btn_detail_program")}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 🪟 Popup détails de l’offre */}
      {selectedTour && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>×</button>

            <div className="container-fluid p-3">
              <div className="row g-3 align-items-start">
                {/* Titre */}
                <div className="col-12 text-center mb-3">
                  <h3 className="text-success">🌴 {selectedTour.titre}</h3>
                  <p className="fst-italic"><strong>{selectedTour.duree}</strong></p>
                </div>

                {/* Image (optionnelle si tu en ajoutes dans la base plus tard) */}
                <div className="col-12 col-lg-5 text-center mb-3">
                  <img
                    src="image/default_offre.jpg"
                    className="img-fluid rounded shadow-sm mb-2"
                    alt={selectedTour.titre}
                  />
                  <ul className="list-unstyled ms-3">
                    <li className="fs-5 text-success text-body text-center">
                      💶 {t("header.Secr3_vocab_prix")}
                    </li>
                    <li>Enfant : {selectedTour.prix_enfant} Ar</li>
                    <li>Adulte : {selectedTour.prix_adult} Ar</li>
                  </ul>
                </div>

                {/* Programme détaillé */}
                <div className="col-12 col-lg-7">
                  <h5 className="text-primary text-center">🕐 Programme du jour :</h5>
                  <p className="ms-3">{selectedTour.programme_detail}</p>

                  <h5 className="text-success mt-3">✅ Inclus :</h5>
                  <p className="ms-3">{selectedTour.inclus}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Section3;
