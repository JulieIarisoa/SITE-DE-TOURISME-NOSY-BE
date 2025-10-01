import { useTranslation } from "react-i18next";
import "../style/NavBar.css";

export default function Navbar() {
  //Pour la traduction du langue
  const [t, i18n] = useTranslation("global");
  const changeLang = (lang) => i18n.changeLanguage(lang);

  // pour le boutton de changement de lange
  const languages = [
    { code: "pl", label: t("header.btn_polonais") },
    { code: "fr", label: t("header.btn_français") },
    { code: "en", label: t("header.btn_anglais") },
  ];

    /************* Navbar du site  ************/
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-glass fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="image/Nosy_be_logo.jpg" id="logo" alt="Logo Nosy Be" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
          aria-controls="mynavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#Accueil">
                <span aria-hidden="true" className="fas fa-home me-1" /> 
                {t("header.btn_accueil")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Apropos">
                <span aria-hidden="true" className="fas fa-user me-1" />
                {t("header.btn_apropos")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#offre">
                <span aria-hidden="true" className="fas fa-tags me-1" />
                {t("header.btn_offres")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#decouvert">
                <span aria-hidden="true" className="fas fa-compass me-1" />
                {t("header.btn_decouvrir")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                <span aria-hidden="true" className="fas fa-images me-1" />
                {t("header.btn_galerie")}
              </a>
            </li>
          </ul>

          {/* Dropdown de langue */}
          <div className="dropdown me-3">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="langDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {t("header.btn_traduction")}
            </button>
            <ul className="dropdown-menu" aria-labelledby="langDropdown">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    className="dropdown-item"
                    onClick={() => changeLang(lang.code)}
                  >
                    {lang.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button className="btn btn-outline-light" type="button">
            {t("header.btn_contact")}
          </button>
        </div>
      </div>
    </nav>
  );
}
