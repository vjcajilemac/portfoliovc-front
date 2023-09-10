import type { ReactElement } from "react";
import Layout from "../components/layout/layout";
import type { NextPageWithLayout } from "../pages/_app";
import Image from "next/image";
import "../../app/scroll.css";
import {
  FaChalkboardTeacher,
  FaClock,
  FaCode,
  FaHeart,
  FaHtml5,
  FaQuoteRight,
  FaStar,
  FaTerminal,
  FaTimes,
  FaTimesCircle,
} from "react-icons/fa";

const AbputMe = () => {
  return (
    <Layout>
      <main className="layout__content">
        <section className="content__page content__about">
          <header className="about__header">
            <h2 className="about__title">
              Sobre <span className="title__color">mi</span>
            </h2>
          </header>
          <section className="about__personal-info">
            <article className="personal-info__bio">
              <p className="personal-info_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis officiis placeat error accusamus repudiandae. Rem,
                praesentium? Soluta excepturi cumque doloremque molestias,
                laboriosam aspernatur quibusdam unde dolores nulla autem nam
                veritatis. adas
              </p>
            </article>
            <div className="personal-info__data">
              <ul className="personal-info__list">
                <li className="personal-info__option">
                  <span className="personal-info__title">Edad </span>
                  <span className="personal-info__value">27</span>
                </li>
                <li className="personal-info__option">
                  <span className="personal-info__title">Pais </span>
                  <span className="personal-info__value">Ecuador</span>
                </li>
                <li className="personal-info__option">
                  <span className="personal-info__title">Direccion </span>
                  <span className="personal-info__value">
                    Mejia, Aloag, B. Miravalle
                  </span>
                </li>
                <li className="personal-info__option">
                  <span className="personal-info__title">Email </span>
                  <span className="personal-info__value">
                    vjcajilema@gmail.com
                  </span>
                </li>
                <li className="personal-info__option">
                  <span className="personal-info__title">Telefono </span>
                  <span className="personal-info__value">+593 997582580</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="about__services">
            <header className="services__header">
              <h2 className="services__title">
                Lo que <span className="title__color">hago</span>
              </h2>
            </header>
            <div className="services__container">
              <article className="services__service">
                <div className="service__icon">
                  <FaCode />
                </div>
                <div className="service__content">
                  <h3 className="service__title">Programacion</h3>
                  <p className="service__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet laboriosam recusandae voluptate dolorum iure a
                    cupiditate velit nisi atque optio hic facere quia vero at
                    deleniti, eius dignissimos, minus sed.
                  </p>
                </div>
              </article>

              <article className="services__service">
                <div className="service__icon">
                  <FaChalkboardTeacher />
                </div>
                <div className="service__content">
                  <h3 className="service__title">Formacion</h3>
                  <p className="service__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet laboriosam recusandae voluptate dolorum iure a
                    cupiditate velit nisi atque optio hic facere quia vero at
                    deleniti, eius dignissimos, minus sed.
                  </p>
                </div>
              </article>
              <article className="services__service">
                <div className="service__icon">
                  <FaHtml5 />
                </div>
                <div className="service__content">
                  <h3 className="service__title">Desarrollo Web</h3>
                  <p className="service__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet laboriosam recusandae voluptate dolorum iure a
                    cupiditate velit nisi atque optio hic facere quia vero at
                    deleniti, eius dignissimos, minus sed.
                  </p>
                </div>
              </article>
              <article className="services__service">
                <div className="service__icon">
                  <FaTerminal />
                </div>
                <div className="service__content">
                  <h4 className="service__title">Administracion</h4>
                  <p className="service__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet laboriosam recusandae voluptate dolorum iure a
                    cupiditate velit nisi atque optio hic facere quia vero at
                    deleniti, eius dignissimos, minus sed.
                  </p>
                </div>
              </article>
            </div>
          </section>
          <section className="about__reviews">
            <header className="reviews__header">
              <h2 className="reviews__title">Reseñas</h2>
            </header>
            <div className="reviews__container">
              <article className="reviews__review">
                <div className="review__img">
                  <Image
                    src="/img/testimonio1.jpg"
                    alt="testimonial"
                    width={100}
                    height={100}
                    className="review__image"
                  />
                </div>
                <div className="review__description">
                  <p className="review__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum molestiae quasi velit sed veritatis, a beatae
                    inventore obcaecati illum accusantium quas, numquam est.
                    Iure qui amet velit quis deleniti beatae?
                  </p>
                </div>
                <div className="review__author">
                  <div className="review__author-info">
                    <h3 className="review___name">Ana Lopez</h3>
                    <h5 className="review__company">Developers SA</h5>
                  </div>
                  <div className="review__author-icon">
                    <FaQuoteRight />
                  </div>
                </div>
              </article>
              <article className="reviews__review">
                <div className="review__img">
                  <Image
                    src="/img/testimonio2.jpg"
                    alt="testimonial"
                    width={100}
                    height={100}
                    className="review__image"
                  />
                </div>
                <div className="review__description">
                  <p className="review__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum molestiae quasi velit sed veritatis, a beatae
                    inventore obcaecati illum accusantium quas, numquam est.
                    Iure qui amet velit quis deleniti beatae?
                  </p>
                </div>
                <div className="review__author">
                  <div className="review__author-info">
                    <h3 className="review___name">Ruben Martinez</h3>
                    <h5 className="review__company">FullStack SA</h5>
                  </div>
                  <div className="review__author-icon">
                    <FaQuoteRight />
                  </div>
                </div>
              </article>
            </div>
          </section>
          <section className="about__clients">
            <header className="clients__header">
              <h2 className="clients__title">Clientes</h2>
            </header>
            <div className="clients__container">
              <article className="clients__item">
                <a href="#" className="clients__link">
                  <Image
                    src="/img/cliente-1.png"
                    alt="client"
                    width={100}
                    height={100}
                    className="clients__image"
                  />
                </a>
              </article>
              <article className="clients__item">
                <a href="#" className="clients__link">
                  <Image
                    src="/img/cliente-2.png"
                    alt="client"
                    width={100}
                    height={100}
                    className="clients__image"
                  />
                </a>
              </article>
              <article className="clients__item">
                <a href="#" className="clients__link">
                  <Image
                    src="/img/cliente-3.png"
                    alt="client"
                    width={100}
                    height={100}
                    className="clients__image"
                  />
                </a>
              </article>
              <article className="clients__item">
                <a href="#" className="clients__link">
                  <Image
                    src="/img/cliente-4.png"
                    alt="client"
                    width={100}
                    height={100}
                    className="clients__image"
                  />
                </a>
              </article>
              <article className="clients__item">
                <a href="#" className="clients__link">
                  <Image
                    src="/img/cliente-5.png"
                    alt="client"
                    width={100}
                    height={100}
                    className="clients__image"
                  />
                </a>
              </article>
            </div>
          </section>
          <section className="about__prices">
            <header className="prices__header">
              <h2 className="prices__title">Precios</h2>
            </header>
            <div className="prices__container">
              <article className="prices__box">
                <div className="prices__subtitle">
                  <span className="prices__text">Normal</span>
                </div>
                <div className="prices__price">
                  <span className="prices__number">$20</span>
                  <small className="prices__advice">Al mes</small>
                </div>
                <div className="prices__buy">
                  <a href="#" className="prices__btn">
                    Prubea Gratis
                  </a>
                </div>
                <div className="prices__reward">Curso desarrolo web</div>
                <div className="prices__reward">Acceso apreguntas</div>
                <div className="prices__reward">
                  Certificado de finalizacion
                </div>
              </article>
              <article className="prices__box">
                <div className="prices__subtitle">
                  <span className="prices__text">Premium</span>
                </div>
                <div className="prices__price">
                  <span className="prices__number">$50</span>
                  <small className="prices__advice">Al mes</small>
                </div>
                <div className="prices__buy">
                  <a href="#" className="prices__btn">
                    Prubea Gratis
                  </a>
                </div>
                <div className="prices__reward">5 Cursos desarrolo web</div>
                <div className="prices__reward">
                  Acceso apreguntas - prioritario
                </div>
                <div className="prices__reward">
                  Certificado de finalizacion
                </div>
              </article>
            </div>
          </section>
          <section className="about__extra">
            <header className="extra__header">
              <h2 className="extra__title">
                Informacion <span className="title__color">Extra</span>
              </h2>
            </header>
            <div className="extra__container">
              <article className="extra__info">
                <div className="extra__icon">
                  <FaHeart />
                </div>
                <h4 className="extra__subtitle">Alumnos contentos</h4>
                <span className="extra__quantity">375 000</span>
              </article>
              <article className="extra__info">
                <div className="extra__icon">
                  <FaClock />
                </div>
                <h4 className="extra__subtitle">Horas de contenido</h4>
                <span className="extra__quantity">8500</span>
              </article>
              <article className="extra__info">
                <div className="extra__icon">
                  <FaStar />
                </div>
                <h4 className="extra__subtitle">Puntuacion</h4>
                <span className="extra__quantity">10</span>
              </article>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
};
export default AbputMe;
