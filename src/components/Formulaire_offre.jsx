import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faTrash,
  faBoxOpen,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

const Offre = () => {
  const [offres, setOffres] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    id: null,
    titre: "",
    description: "",
    duree: "",
    prix_enfant: "",
    prix_adult: "",
    programme_detail: "",
    inclus: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchOffres();
  }, []);

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

  const handleAdd = () => {
    setFormData({
      id: null,
      titre: "",
      description: "",
      duree: "",
      prix_enfant: "",
      prix_adult: "",
      programme_detail: "",
      inclus: "",
    });
    setIsEditing(false);
    setShowModal(true);
  };

  const handleEdit = (offre) => {
    setFormData(offre);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(
          `https://back-tourisme-production.up.railway.app/offre/update/${formData.id}/`,
          formData
        );
        setOffres((prev) =>
          prev.map((item) =>
            item.id === formData.id ? { ...formData } : item
          )
        );
      } else {
        const res = await axios.post(
          "https://back-tourisme-production.up.railway.app/offre/insert/",
          formData
        );
        setOffres((prev) => [res.data, ...prev]);
      }
      setShowModal(false);
    } catch (err) {
      console.error("Erreur lors de l’envoi :", err);
    }
  };

  const handleDelete = async (id) => {
  if (!window.confirm("Voulez-vous vraiment supprimer cette offre ?")) return;

  try {
    await axios.delete(`https://back-tourisme-production.up.railway.app/offre/delete/${id}/`);
    await fetchOffres(); // 👈 recharge automatiquement les données depuis l’API
  } catch (error) {
    console.error("Erreur suppression :", error);
    alert("Erreur lors de la suppression !");
  }
};




  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-primary fw-bold">
        <FontAwesomeIcon icon={faBoxOpen} className="me-2" />
        Gestion des Offres
      </h2>

      <div className="d-flex justify-content-end mb-3">
        <Button
          variant="success"
          className="d-flex align-items-center gap-2 shadow-sm rounded-pill"
          onClick={handleAdd}
        >
          <FontAwesomeIcon icon={faCirclePlus} />
          <span>Nouvelle Offre</span>
        </Button>
      </div>

      {loading ? (
        <p>Chargement...</p>
      ) : offres.length === 0 ? (
        <p>Aucune offre enregistrée.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover table-striped align-middle shadow-sm rounded">
            <thead className="table-primary text-center">
              <tr>
                <th>ID</th>
                <th>Titre</th>
                <th>Description</th>
                <th>Durée</th>
                <th>Prix Enfant</th>
                <th>Prix Adulte</th>
                <th>Programme</th>
                <th>Inclus</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {offres.map((offre) => (
                <tr key={offre.id}>
                  <td>{offre.id}</td>
                  <td className="fw-semibold text-primary">{offre.titre}</td>
                  <td>{offre.description}</td>
                  <td>{offre.duree}</td>
                  <td>{offre.prix_enfant} Ar</td>
                  <td>{offre.prix_adult} Ar</td>
                  <td>{offre.programme_detail}</td>
                  <td>{offre.inclus}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      <Button
                        variant="outline-warning"
                        size="sm"
                        className="rounded-circle"
                        title="Modifier"
                        onClick={() => handleEdit(offre)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="rounded-circle"
                        title="Supprimer"
                        onClick={() => handleDelete(offre.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal Bootstrap */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton className="bg-primary text-white">
            <Modal.Title>
              <FontAwesomeIcon
                icon={isEditing ? faEdit : faPlus}
                className="me-2"
              />
              {isEditing ? "Modifier l'offre" : "Ajouter une offre"}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                value={formData.titre}
                onChange={(e) =>
                  setFormData({ ...formData, titre: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Durée</Form.Label>
              <Form.Control
                type="text"
                value={formData.duree}
                onChange={(e) =>
                  setFormData({ ...formData, duree: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Prix Enfant</Form.Label>
              <Form.Control
                type="number"
                value={formData.prix_enfant}
                onChange={(e) =>
                  setFormData({ ...formData, prix_enfant: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Prix Adulte</Form.Label>
              <Form.Control
                type="number"
                value={formData.prix_adult}
                onChange={(e) =>
                  setFormData({ ...formData, prix_adult: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Détails du programme</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={formData.programme_detail}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    programme_detail: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Inclus</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={formData.inclus}
                onChange={(e) =>
                  setFormData({ ...formData, inclus: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer className="bg-light">
            <Button
              variant="secondary"
              onClick={() => setShowModal(false)}
              className="rounded-pill"
            >
              Annuler
            </Button>
            <Button variant="primary" type="submit" className="rounded-pill">
              {isEditing ? (
                <>
                  <FontAwesomeIcon icon={faEdit} className="me-2" />
                  Mettre à jour
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Ajouter
                </>
              )}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default Offre;
