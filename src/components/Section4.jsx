import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import FsLightbox from 'fslightbox-react';
import { useTranslation } from 'react-i18next';
import '../style/Section4.css';

/*********image pour le galerie******** */
const images = [
  { src: '/image/Nosy_be_gallery (1).jpg', alt: 'Nosy Iranja' },
  { src: '/image/Nosy_be_gallery (2).jpg', alt: 'Nosy Komba' },
  { src: '/image/Nosy_be_gallery (3).jpg', alt: 'Nosy Tanikely' },
  { src: '/image/Nosy_be_gallery (4).jpg', alt: 'Lokobe' },
  { src: '/image/Nosy_be_gallery (5).jpg', alt: 'Lokobe' },
  { src: '/image/Nosy_be_gallery (6).jpg', alt: 'Lokobe' },
  { src: '/image/Nosy_be_gallery (7).jpg', alt: 'Lokobe' },
  { src: '/image/Nosy_be_gallery (8).jpg', alt: 'Lokobe' },
  { src: '/image/Nosy_be_gallery (9).jpg', alt: 'Lokobe' },
  { src: '/image/Nosy_be_gallery (10).jpg', alt: 'Lokobe' },
  { src: '/image/Nosy_be_gallery (11).jpg', alt: 'Lokobe' },
  { src: '/image/Nosy_be_gallery (12).jpg', alt: 'Lokobe' },
  { src: '/image/Nosy_be_gallery (13).jpg', alt: 'Lokobe' },
  { src: '/image/Nosy_be_gallery (14).jpg', alt: 'Lokobe' },
  { src: '/image/Nosy_be_gallery (15).jpg', alt: 'Lokobe' },
  { src: '/image/Nosy_be_gallery (16).jpg', alt: 'Lokobe' },
];

const GallerySlider = () => {
  ////Traduction
  const [t, i18n] = useTranslation("global");

  ///Pour le défilement automatique de l'image
  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };

    /**********Section Galerie ******************/
  return (
    <>
      <center>
        <div className='Image-block' id='gallery'>
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div className="slider-image-container" key={idx}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="slider-image"
                  onClick={() => { setSlideIndex(idx); setToggler(!toggler); }}
                />
                <div>
                </div>
              </div>
            ))}
          </Slider>
          <FsLightbox
            toggler={toggler}
            sources={images.map(img => img.src)}
            slide={slideIndex + 1} // FsLightbox commence à 1
          />
        </div>
        <div class="aption">
          <h3> {t("header.Sect6_gallery_titre")}</h3>
          <p> {t("header.Sect6_gallery_soustitre")}</p>
        </div>
      </center>
    </>
  );
};

export default GallerySlider;