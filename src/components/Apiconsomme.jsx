import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Section7.css";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const [t] = useTranslation("global");
  const [temoignages, setTemoignages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nom, setNom] = useState("");
  const [commentaire, setCommentaire] = useState("");

  const API = (import.meta.env.VITE_API_URL || "https://back-tourisme-production.up.railway.app/").replace(/\/?$/, "/");

  // 🔹 Récupération des témoignages
  useEffect(() => {
    const fetchTemoins = async () => {
      try {
        const response = await axios.get(`${API}temoin`);
        setTemoignages(response.data);
      } catch (error) {
        console.error("Erreur API :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTemoins();
  }, [API]);

  // 🔹 Envoi du témoignage
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API}temoin/insert`,
        { nom, commentaire },
        { headers: { "Content-Type": "application/json" } }
      );

      // ✅ Rafraîchir localement
      setTemoignages([response.data, ...temoignages]);
      setNom("");
      setCommentaire("");

      // ✅ Fermer le modal proprement
      const modal = document.getElementById("temoignage");
      const bootstrapModal = window.bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) bootstrapModal.hide();

    } catch (err) {
      console.error("Erreur API POST:", err);
    }
  };

  // 🔹 Suppression
  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer ce témoignage ?")) return;
    try {
      await axios.delete(`${API}temoin/delete/${id}`);
      setTemoignages((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Erreur suppression :", err);
    }
  };

  return (
    <>
      {/* ✅ En-tête */}
      <div className="temoignages-header text-center my-5">
        <h2 className="fw-bold text-primary">{t("header.Sect7_titre")}</h2>
        <p className="text-muted mb-3">{t("header.Sect7_sous_titre")}</p>
        <button
          type="button"
          className="btn btn-primary px-4 py-2 rounded-pill"
          data-bs-toggle="modal"
          data-bs-target="#temoignage"
        >
          {t("header.Sect7_btn_avis")}
        </button>
      </div>

      {/* ✅ Modal Bootstrap */}
      <div className="modal fade" id="temoignage" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4">
            <div className="modal-header border-0">
              <h4 className="modal-title text-primary">Laisser votre avis</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <form className="testimonial-form" onSubmit={handleSubmit}>
              <div className="modal-body">
                <label className="fw-semibold">{t("header.Sect7_vocabs_nom")}</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                  className="form-control rounded-pill mb-3"
                />

                <label className="fw-semibold">{t("header.Sect7_vocabs_commentaire")}</label>
                <textarea
                  placeholder="Votre témoignage..."
                  value={commentaire}
                  onChange={(e) => setCommentaire(e.target.value)}
                  required
                  className="form-control rounded-3"
                  rows="4"
                />
              </div>

              <div className="modal-footer border-0">
                <button type="submit" className="btn btn-primary w-100 rounded-pill" data-bs-dismiss="modal">
                  {t("header.Sect7_btn_envoyer")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Liste des témoignages */}
      {loading ? (
        <p className="text-center text-muted">Chargement des témoignages...</p>
      ) : temoignages.length === 0 ? (
        <p className="text-center text-muted">Aucun témoignage pour le moment.</p>
      ) : (
        <section className="Temoignage  py-4" id="temoigne">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {temoignages.map((t) => (
              <div className="col" key={t.id}>
                <div className="card border-0 shadow-sm rounded-4 h-100 p-3 position-relative">
                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-2"
                    onClick={() => handleDelete(t.id)}
                  ></button>
                  <div className="card-body">
                    <p className="fst-italic text-secondary">“{t.commentaire}”</p>
                    <h6 className="fw-bold text-primary mt-2">{t.nom}</h6>
                    <small className="text-muted">
                      {t.date_temoin
                        ? new Date(t.date_temoin).toLocaleDateString()
                        : ""}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;
