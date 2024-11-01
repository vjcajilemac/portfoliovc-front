import Layout from "../components/layout/layout";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";

const Portfolio = () => {
  return (
    <Layout>
      <main className="layout__content">
        <section className="content__page content__portfolio">
          <header className="portfolio__header">
            <h1 className="portfolio__title">Portafolio</h1>
          </header>
          <nav className="portfolio__navbar">
            <ul className="portfolio__menu">
              <li className="portfolio__option portfolio__option--active">
                <a href="#" className="portfolio__link">
                  Todo
                </a>
              </li>

              <li className="portfolio__option">
                <a href="#" className="portfolio__link">
                  Cursos
                </a>
              </li>

              <li className="portfolio__option">
                <a href="#" className="portfolio__link">
                  Web
                </a>
              </li>

              <li className="portfolio__option">
                <a href="#" className="portfolio__link">
                  Redes
                </a>
              </li>
            </ul>
          </nav>
          <section className="portfolio__gallery">
            <figure className="gallery__item">
              <div className="gallery__container-image">
                <a href="#" className="gallery__link">
                  <Image
                    className="gallery__image"
                    src="/img/certificado-1.png"
                    alt="gallery"
                    width={100}
                    height={70}
                  />
                  <figcaption className="gallery__title">
                    Aplicacion de compra y venta de ropa
                  </figcaption>
                  <i className="gallery__icon fa-solid fa-video-camera">
                  <FaCamera />
                  </i>
                 
                  <span className="gallery__category">Proyectos</span>
                </a>
              </div>
            </figure>

            <figure className="gallery__item">
              <div className="gallery__container-image">
                <a href="#" className="gallery__link">
                  <Image
                    className="gallery__image"
                    src="/img/certificado-1.png"
                    alt="gallery"
                    width={100}
                    height={70}
                  />
                  <figcaption className="gallery__title">
                    Aplicacion de call center
                  </figcaption>
                  <i className="gallery__icon fa-solid fa-video-camera">
                  <FaCamera />
                  </i>
                  <span className="gallery__category">Proyectos</span>
                </a>
              </div>
            </figure>

            <figure className="gallery__item">
              <div className="gallery__container-image">
                <a href="#" className="gallery__link">
                  <Image
                    className="gallery__image"
                    src="/img/certificado-1.png"
                    alt="gallery"
                    width={100}
                    height={70}
                  />
                  <figcaption className="gallery__title">
                    Aplicacion para clinica
                  </figcaption>
                  <i className="gallery__icon fa-solid fa-video-camera">
                  <FaCamera />
                  </i>
                  
                  <span className="gallery__category">Proyectos</span>
                </a>
              </div>
            </figure>

            <figure className="gallery__item">
              <div className="gallery__container-image">
                <a href="#" className="gallery__link">
                  <Image
                    className="gallery__image"
                    src="/img/certificado-1.png"
                    alt="gallery"
                    width={100}
                    height={70}
                  />
                  <figcaption className="gallery__title">
                    Aplicacion de reserva de canchas deportivas
                  </figcaption>
                  <i className="gallery__icon fa-solid fa-video-camera">
                  <FaCamera />
                  </i>
                  <span className="gallery__category">Proyectos</span>
                </a>
              </div>
            </figure>

            <figure className="gallery__item">
              <div className="gallery__container-image">
                <a href="#" className="gallery__link">
                  <Image
                    className="gallery__image"
                    src="/img/certificado-1.png"
                    alt="gallery"
                    width={100}
                    height={70}
                  />
                  <figcaption className="gallery__title">
                    Aplicacion de tracking
                  </figcaption>
                  <i className="gallery__icon fa-solid fa-video-camera">
                  <FaCamera />
                  </i>
                  <span className="gallery__category">Proyectos</span>
                </a>
              </div>
            </figure>
          </section>
        </section>
      </main>
    </Layout>
  );
};
export default Portfolio;
