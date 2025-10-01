import '../style/Section6.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const IslandSection = () => {
  ///Pour traduction
  const [t, i18n] = useTranslation("global");
  
  ///Detail de chaque lieu à decouvrir
  const islands = [
    {
      name: t("header.Sect5_archipel_titre1"),
      image: '/image/Nosy_be.jpg',
      description: t("header.Sect5_archipel_description1"),
    },
    {
      name: t("header.Sect5_archipel_titre2"),
      image: '/image/Nosy_iranja_2.jpg',
      description: t("header.Sect5_archipel_description2"),
    },
    {
      name: t("header.Sect5_archipel_titre3"),
      image: '/image/Nosy_antsoha.png',
      description: t("header.Sect5_archipel_description3"),
    },
    {
      name: t("header.Sect5_archipel_titre4"),
      image: '/image/Nosy_komba.png',
      description: t("header.Sect5_archipel_description4"),
    },
    {
      name: t("header.Sect5_archipel_titre5"),
      image: '/image/Nosy_tanikely.PNG',
      description: t("header.Sect5_archipel_description5"),
    },
    {
      name: t("header.Sect5_archipel_titre6"),
      image: '/image/Nosy_sakatia.png',
      description: t("header.Sect5_archipel_description6"),
    },
    {
      name: t("header.Sect5_archipel_titre7"),
      image: '/image/Lokobe_reserve1.png',
      description: t("header.Sect5_archipel_description7"),
    },
  ];

    /****************Section pour la découverte du lieu **********/
  return (
    <section className="container my-5" id="decouvert">
      <h2 className="text-center mb-5 section-title">
        <FontAwesomeIcon icon={faUmbrellaBeach} className='icon'/> {t("header.Sect5_titre")}
      </h2>
      {islands.map((island, index) => (
        <div className={`row align-items-center mb-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`} key={index}>
          <div className="col-md-5 mb-3">
            <img src={island.image} alt={island.name} className="img-fluid island-image shadow-sm rounded" />
          </div>
          <div className="col-md-7">
            <div className="island-description p-3 shadow-sm rounded bg-white">
              <h3 className="mb-3">{island.name}</h3>
              <p>{island.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default IslandSection;
