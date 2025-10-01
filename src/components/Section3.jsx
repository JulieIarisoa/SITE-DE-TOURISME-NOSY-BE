import React, { useState, useEffect } from 'react';
import '../style/Section3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faClock, faPiggyBank, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function Section3() {
  //Pour le traduction de langue
  const [t] = useTranslation("global");
  
  //details des offres (6 offres)
  const tours = [
    {
      title: t("header.Sect3_titre_offre1"),
      details: t("header.Sect3_decription_offre1"),
      duration: t("header.Secr3_vocab_durée")+ ':' +t("header.Sect3_duration_1jour"),
      schedule:  t("header.Secr3_vocab_depart") + ': 08h00 - ' +t("header.Secr3_vocab_retour") + ' : 15h00',
      price: t("header.Secr3_vocab_prix")+' : 50€',
      programme: (
        <div className="container-fluid p-3">
          <div className="row g-3 align-items-start">
            {/* Texte au-dessus de l’image */}
            <div className="col-12 text-center mb-3">
              <h3 className="text-success">🌴 N°1 – EXCURSION À NOSY IRANJA</h3>
              <p className="fst-italic"><strong>Excursion d'une journée complète</strong></p>
            </div>

            {/* Image + prix */}
            <div className="col-12 col-lg-5">
              <img src="image/Nosy_iranja.jpg" className="img-fluid rounded shadow-sm mb-2" alt="Nosy Iranja"/>
              
              <ul className="list-unstyled ms-3">
                <li className=" fs-5 text-success text-body text-center">💶 {t("header.Secr3_vocab_prix")}</li>
                <li>{t("header.Sect3_prix_enfant_offre1")}</li>
                <li>{t("header.Sect3_prix_parent_offre1")}</li>
              </ul>
              
            </div>

            
            {/* Programme détaillé */}
            <div className="col-12 col-lg-7">
              <h5 className="mt-0 text-primary text-center">🕐 Programme du jour:</h5>
              <ul className="list-unstyled ms-3">
                <li>{t("header.Sect3_programme_offre1_programme1")}</li>
                <li>{t("header.Sect3_programme_offre1_programme2")}</li>
                <li>{t("header.Sect3_programme_offre1_programme3")}</li>
                <li>{t("header.Sect3_programme_offre1_programme4")}</li>
                <li>{t("header.Sect3_programme_offre1_programme5")}</li>
                <li>{t("header.Sect3_programme_offre1_programme6")}</li>
                <li>{t("header.Sect3_programme_offre1_programme7")}</li>
                <li>{t("header.Sect3_programme_offre1_programme8")}</li>
              </ul>

              <h5 className="mt-3 text-primary">{t("header.Sect3_vocabs_inclus")}</h5>
              <ul className="list-unstyled ms-3">
                <li>{t("header.Sect3_inclus_offre1")}</li>
              </ul>
            </div>
          </div>
        </div>

      )
    },
    {
      title: t("header.Sect3_titre_offre2"),
      details: t("header.Sect3_decription_offre2"),
      duration: t("header.Secr3_vocab_durée")+ ':' +t("header.Sect3_duration_1jour"),
      schedule:  t("header.Secr3_vocab_depart") + ': 08h00 - ' +t("header.Secr3_vocab_retour") + ' : 15h30',
      price: t("header.Secr3_vocab_prix")+' : 60€',
      programme: (
        <div className="container-fluid p-3">
          <div className="row g-3 align-items-start">
            {/* Texte au-dessus de l’image */}
            <div className="col-12 text-center mb-3">
              <h3 className="text-success">🌴 N°2 – LES 3 ÎLES</h3>
              <p className="fst-italic"><strong>Excursion d'une journée complète</strong></p>
            </div>

            {/* Image + prix */}
            <div className="col-12 col-lg-5 mb-3">
              <img src="image/Trois_iles.jpg" className="img-fluid rounded shadow-sm mb-2" alt="Nosy 3 Îles" />
              
              <ul className="list-unstyled ms-3">
                <li className=" fs-5 text-success text-body text-center">💶 {t("header.Secr3_vocab_prix")}</li>
                <li>{t("header.Sect3_prix_enfant_offre2")}</li>
                <li>{t("header.Sect3_prix_parent_offre2")}</li>
              </ul>
              
              <h5 className="mt-3 text-primary">{t("header.Sect3_vocabs_inclus")}</h5>
              <ul className="list-unstyled ms-3">
                <li>{t("header.Sect3_inclus_offre2")}</li>
              </ul>
            </div>

            {/* Programme détaillé */}
            <div className="col-12 col-lg-7">
              <h5 className="text-primary">🕐 Programme du jour :</h5>
              <ul className="list-unstyled ms-3">
                <li>{t("header.Sect3_programme_offre2_programme1")}</li>
                <li>{t("header.Sect3_programme_offre2_programme2")}</li>
                <li>{t("header.Sect3_programme_offre2_programme3")}</li>
                <li>{t("header.Sect3_programme_offre2_programme4")}</li>
                <li>{t("header.Sect3_programme_offre2_programme5")}</li>
                <li>{t("header.Sect3_programme_offre2_programme6")}</li>
                <li>{t("header.Sect3_programme_offre2_programme7")}</li>
                <li>{t("header.Sect3_programme_offre2_programme8")}</li>
              </ul>

            </div>
          </div>
        </div>

      )      
    },
    {
      title: t("header.Sect3_titre_offre3"),
      details: t("header.Sect3_decription_offre3"),
      duration: t("header.Secr3_vocab_durée")+ ':' +t("header.Sect3_duration_1jour"),
      schedule:  t("header.Secr3_vocab_depart") + ': 06h30 ou 08h30 - ' +t("header.Secr3_vocab_retour") + ' : 16h30',
      price: t("header.Secr3_vocab_prix")+' : 70€',
      programme: (
        <div className="container-fluid p-3">
          <div className="row g-3 align-items-start">
            {/* Texte au-dessus de l’image */}
            <div className="col-12 text-center mb-3">
              <h3 className="text-success">🌴 N°3 – EXPÉDITION À MADAGASCAR</h3>
              <p className="fst-italic"><strong>Excursion d'une journée</strong></p>
            </div>

            {/* Image + prix */}
            <div className="col-12 col-lg-5 text-center mb-3">
              <img src="image/Madagascar_grand_ile.PNG" className="img-fluid rounded shadow-sm mb-2" alt="Expédition Madagascar" />
              
              <ul className="list-unstyled ms-3">
                <li className=" fs-5 text-success text-body text-center">💶 {t("header.Secr3_vocab_prix")}</li>
                <li>{t("header.Sect3_prix_enfant_offre3")}</li>
                <li>{t("header.Sect3_prix_parent_offre3")}</li>
              </ul>
              
            </div>

            {/* Programme détaillé */}
            <div className="col-12 col-lg-7">
              <h5 className="text-primary">🕐 Programme :</h5>
              <ul className="list-unstyled ms-3">
                <li>{t("header.Sect3_programme_offre3_programme1")}</li>
                <li>{t("header.Sect3_programme_offre3_programme2")}</li>
                <li>{t("header.Sect3_programme_offre3_programme3")}</li>
                <li>{t("header.Sect3_programme_offre3_programme4")}</li>
                <li>{t("header.Sect3_programme_offre3_programme5")}</li>
              </ul>

              <h5 className="text-success mt-3">✅ Inclus :</h5>
              <ul className="list-unstyled ms-3">
                <li>{t("header.Sect3_inclus_offre3")}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: t("header.Sect3_titre_offre4"),
      details: t("header.Sect3_decription_offre4"),
      duration: t("header.Secr3_vocab_durée")+ ':' +t("header.Sect3_duration_1jour"),
      schedule:  t("header.Secr3_vocab_depart") + ': 08h00 - ' +t("header.Secr3_vocab_retour") + ' : 16h30',
      price: t("header.Secr3_vocab_prix")+' : 55€',programme: (
        <div className="container-fluid p-3">
          <div className="row g-3 align-items-start">
            {/* Titre et description */}
            <div className="col-12 text-center mb-3">
              <h3 className="text-success">🌴 N°4 – VISITE DE L’ÎLE NOSY BE</h3>
              <p className="fst-italic"><strong>Excursion d'une journée complète</strong></p>
            </div>

            {/* Image + prix */}
            <div className="col-12 col-lg-5 text-center mb-3">
              <img src="image/Nosy_be_hell_ville.jpg" className="img-fluid rounded shadow-sm mb-2" alt="Nosy Be" />
              
              <ul className="list-unstyled ms-3">
                <li className=" fs-5 text-success text-body text-center">💶 {t("header.Secr3_vocab_prix")}</li>
                <li>{t("header.Sect3_prix_enfant_offre3")}</li>
                <li>{t("header.Sect3_prix_parent_offre3")}</li>
              </ul>
            </div>

            {/* Programme détaillé */}
            <div className="col-12 col-lg-7">
              <h5 className="text-primary">🕐 Programme :</h5>
              <ul className="list-unstyled ms-3">
                <li>{t("header.Sect3_programme_offre4_programme1")}</li>
                <li>{t("header.Sect3_programme_offre4_programme2")}</li>
                <li>{t("header.Sect3_programme_offre4_programme3")}</li>
                <li>{t("header.Sect3_programme_offre4_programme4")}</li>
                <li>{t("header.Sect3_programme_offre4_programme5")}</li>
                <li>{t("header.Sect3_programme_offre4_programme6")}</li>
              </ul>

              <h5 className="text-success mt-3">✅ Inclus :</h5>
              <ul className="list-unstyled ms-3">
                <li>{t("header.Sect3_inclus_offre4")}</li>
              </ul>
            </div>
          </div>
        </div>

      )
    },
    {
      title: t("header.Sect3_titre_offre5"),
      details: t("header.Sect3_decription_offre5"),
      duration: t("header.Secr3_vocab_durée")+ ':' +t("header.Sect3_duration_1/2jour"),
      schedule:  t("header.Secr3_vocab_depart") + ': 08h00 - ' +t("header.Secr3_vocab_retour") + ' : 11h30',
      price: t("header.Secr3_vocab_prix")+' : 45€',programme: (
        <div className="container-fluid p-3">
          <div className="row g-3 align-items-start">
            {/* Titre et description */}
            <div className="col-12 text-center mb-3">
              <h3 className="text-success">🌿 N°5 – RÉSERVE DE LOKOBE</h3>
              <p className="fst-italic"><strong>Demi-journée</strong></p>
            </div>

            {/* Image + prix */}
            <div className="col-12 col-lg-5 text-center mb-3">
              <img src="image/Lokobe_reserve.png" className="img-fluid rounded shadow-sm mb-2" alt="Lokobe" />
              
              <ul className="list-unstyled ms-3">
                <li className=" fs-5 text-success text-body text-center">💶 {t("header.Secr3_vocab_prix")}</li>
                <li>{t("header.Sect3_prix_enfant_offre5")}</li>
                <li>{t("header.Sect3_prix_parent_offre5")}</li>
              </ul>
            </div>

            {/* Programme détaillé */}
            <div className="col-12 col-lg-7">
              <h5 className="text-primary">🕐 Programme :</h5>
              <ul className="list-unstyled ms-3">
                <li>{t("header.Sect3_programme_offre5_programme1")}</li>
                <li>{t("header.Sect3_programme_offre5_programme2")}</li>
                <li>{t("header.Sect3_programme_offre5_programme3")}</li>
                <li>{t("header.Sect3_programme_offre5_programme4")}</li>
              </ul>

              <h5 className="text-success mt-3">✅ Inclus :</h5>
              <ul className="list-unstyled ms-3">
                <li>{t("header.Sect3_inclus_offre5")}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: t("header.Sect3_titre_offre6"),
      details: t("header.Sect3_decription_offre6"),
      duration: t("header.Secr3_vocab_durée")+ ':' +t("header.Sect3_duration_1jour"),
      schedule: t("header.Secr3_vocab_depart") + ': 08h00 - ' +t("header.Secr3_vocab_retour") + ' : 16h30',
      price: t("header.Secr3_vocab_prix")+' : 65€',
      programme: (
        <div className="container-fluid p-3">
          <div className="row g-3 align-items-start">
            {/* Titre et description */}
            <div className="col-12 text-center mb-3">
              <h3 className="text-success">🐢 N°6 – SNORKELING À NOSY SAKATIA</h3>
              <p className="fst-italic"><strong>Demi-journée</strong></p>
            </div>

            {/* Image + prix */}
            <div className="col-12 col-lg-5 text-center mb-3">
              <img src="image/Nosy_sakatia.png" className="img-fluid rounded shadow-sm mb-2" alt="Snorkeling" />
              
              <ul className="list-unstyled ms-3">
                <li className=" fs-5 text-success text-body text-center">💶 {t("header.Secr3_vocab_prix")}</li>
                <li>{t("header.Sect3_prix_enfant_offre6")}</li>
                <li>{t("header.Sect3_prix_parent_offre6")}</li>
              </ul>
            </div>

            {/* Inclus */}
            <div className="col-12 col-lg-7">
              <h5 className="text-success">✅ Inclus :</h5>
              <ul className="list-unstyled ms-3">
                <li>{t("header.Sect3_inclus_offre6")}</li>
              </ul>
            </div>
          </div>
        </div>

      )
    },
  ];

  const [selectedTour, setSelectedTour] = useState(null);

  const openPopup = (index) => setSelectedTour(tours[index]);
  const closePopup = () => setSelectedTour(null);

  // Bloquer le scroll quand la popup d'un offre est ouverte
  useEffect(() => {
    if (selectedTour) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedTour]);

    /*********Section pour les offres ******************** */
  return (
    <section className='container' id='offre'>
      <h2 id='offre_titre'>
        <FontAwesomeIcon icon={faTags} className='icon'/> {t("header.btn_offres")}
      </h2>

      <div className='offres'>
        {tours.map((tour, index) => (
          <div className="box-popup" key={index}>
            <h2>{tour.title}</h2>
            <p>{tour.details}</p>
            <p><FontAwesomeIcon icon={faHourglassHalf} className='icon'/> {tour.duration}</p>
            <p><FontAwesomeIcon icon={faClock} className='icon'/> {tour.schedule}</p>
            <p><FontAwesomeIcon icon={faPiggyBank} className='icon'/> {tour.price}</p>
            <button onClick={() => openPopup(index)} className="btn btn-outline-primary">
              {t("header.btn_detail_program")}
            </button>
          </div>
        ))}
      </div>

      {selectedTour && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>×</button>
            {selectedTour.programme}
          </div>
        </div>
      )}
    </section>
  );
}

export default Section3;