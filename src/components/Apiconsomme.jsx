import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Section7.css';
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const [t, i18n] = useTranslation("global");
  const [temoignages, setTemoignages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nom, setNom] = useState("");
  const [commentaire, setCommentaire] = useState("");

//Recuperer la liste des temoignages enregistrer dans la base de données
  useEffect(() => {
    axios.get('http://localhost:8000/api/temoignages')
      .then(response => {
        setTemoignages(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur API :', error);
        setLoading(false);
      });
  }, []);

// Envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/temoignages", {
        nom: nom,
        commentaire: commentaire,
        dateTemoin: new Date().toISOString().split("T")[0], // ex: 2025-09-18
      });

      // Mise à jour immédiate de la liste
      setTemoignages([res.data, ...temoignages]);
      setNom("");
      setCommentaire("");
    } catch (err) {
      console.error("Erreur API POST:", err);
    }
  };

  //supprimer une temoignage
    const handleDelete = async (id) => {
    if (!window.confirm('Supprimer ce témoignage ?')) return;
    try {
      await axios.delete(`http://localhost:8000/api/temoignages/${id}`);
      // Met à jour l’état côté client
      setTemoignages(prev => prev.filter(t => t.id !== id));
    } catch (err) {
      console.error('Erreur suppression :', err);
    }
  };
  
    /*******************  Section pour les temoignage ************************************/
  return (
    <>
      <div class="temoignages-header">
        <h2>{t("header.Sect7_titre")}</h2>
        <p>{t("header.Sect7_sous_titre")}</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#temoignage">
          {t("header.Sect7_btn_avis")}
        </button>
      </div>

      <div class="modal fade" id="temoignage">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title ">Laisser votre avis ici!</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <form className="testimonial-form" onSubmit={handleSubmit}>
              <div class="modal-body">
                <label>{t("header.Sect7_vocabs_nom")}</label>
                <input type="text" placeholder="Votre nom" value={nom} onChange={(e) => setNom(e.target.value)} required className="form-control" />
                <label>{t("header.Sect7_vocabs_commentaire")}</label>
                <textarea placeholder="Votre témoignage" value={commentaire} onChange={(e) => setCommentaire(e.target.value)} required  className="form-control"  />
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal"> {t("header.Sect7_btn_envoyer")} </button>
              </div>
            </form>
          </div>
        </div>
      </div>


      {loading ? (
        <p>Chargement des témoignages...</p>
      ) : temoignages.length === 0 ? (
        <p>Aucun témoignage pour le moment.</p>
      ) : (
        
        <section  className="Temoignage" id="temoigne">
          {temoignages.map((t) => (
            <div className="tem" key={t.id}>
              <label>{new Date(t.dateTemoin).toLocaleDateString()}</label>
              <p>"{t.commentaire}"</p>
              <i>{t.nom}</i>
              <button
                className="btn btn-danger btn-sm mt-2"
                onClick={() => handleDelete(t.id)}
              >
                Supprimer
              </button>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Testimonials;
