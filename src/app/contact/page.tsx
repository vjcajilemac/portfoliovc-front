"use client"; // Asegura que el componente se renderiza en el cliente
import Layout from "../components/layout/layout";
import Image from "next/image";
import {
  FaBook,
  FaCheck,
  FaCheckCircle,
  FaCircle,
  FaEnvelope,
  FaLocationArrow,
  FaMap,
  FaPhone,
  FaSearchLocation,
} from "react-icons/fa";
import React, { useState, useEffect } from "react";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  
  const handleMapLoad = () => {
    setLoading(false);
    loading ? console.log("true") : console.log("false");
  };
  useEffect(() => {
    const handleLoad = () => setLoading(false);
    // Escuchar el evento load del window
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);
  return (
    <Layout>
      <main className="layout__content">
        <section className="content__page content__contact">
          <header className="contact__header">
            <h1 className="contact__title">Contacto</h1>
          </header>

          <div className="contact__container">
            <section className="contact__info">
              <div className="contact__data">
                <i className="contact__icon fa-solid fa-location-dot">
                  <FaMap />
                </i>
                <h2 className="contact__subtitle"> Ecuador, Aloag</h2>
              </div>

              <div className="contact__data">
                <i className="contact__icon fa-solid fa-location-dot">
                  <FaPhone />
                </i>
                <h2 className="contact__subtitle">0997582580</h2>
              </div>

              <div className="contact__data">
                <i className="contact__icon fa-solid fa-location-dot">
                  <FaEnvelope />
                </i>
                <h2 className="contact__subtitle">vjcajilema@gmail.com</h2>
              </div>

              <div className="contact__data">
                <i className="contact__icon fa-solid fa-location-dot">
                  <FaCheckCircle />
                </i>
                <h2 className="contact__subtitle">Ingeniero en software</h2>
              </div>
            </section>

            <section className="contact__form-box">
            
              <div className="contact__map">
                <iframe
                  className="contact__iframe"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4744.711336466747!2d-78.46426598776334!3d-0.11158274016899292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58fe535159c2f%3A0xd0fceaee2bfe6549!2sParque!5e0!3m2!1ses!2sec!4v1730513093402!5m2!1ses!2sec"
                  width="300"
                  height="250"
                  loading="lazy"
                 
                 
                ></iframe>
              </div>
              <header className="contact__form-header">
                <h3 className="form-header_title">
                  ¿Como puedo <span className="subtitle__color">ayudarte</span>?
                </h3>
              </header>

              <form className="contact__form">
                <div className="form__container">
                  <section className="form__left">
                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        name="name"
                        required
                        placeholder="Nombre"
                      />
                      <label htmlFor="name" className="form__label">
                        Nombre
                      </label>
                    </div>

                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        name="email"
                        required
                        placeholder="Email"
                      />
                      <label htmlFor="email" className="form__label">
                        email
                      </label>
                    </div>

                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        name="subject"
                        required
                        placeholder="Asunto"
                      />
                      <label htmlFor="subject" className="form__label">
                        Asunto
                      </label>
                    </div>
                  </section>

                  <section className="form__right">
                    <div className="form__group form__group--textarea">
                      <textarea
                        className="form__input form__input--textarea"
                        name="message"
                        required
                        placeholder="Mensaje"
                      ></textarea>
                      <label htmlFor="message" className="form__label">
                        Mensaje
                      </label>
                    </div>
                  </section>
                </div>
                <input
                  type="submit"
                  className="form__button"
                  value="Enviar mensaje"
                />
              </form>
            </section>
          </div>
        </section>
      </main>
    </Layout>
  );
};
export default Portfolio;
