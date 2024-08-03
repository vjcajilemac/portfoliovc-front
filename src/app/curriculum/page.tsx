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

const Curriculum = () => {
  return (
      <Layout>
          <main className="layout__content">
              <section className="content__page content__resume">
                  <header className="resume__header">
                      <h2 className="Resume__title">Estudios</h2>

                  </header>
                  <div className="resume__container">
                      <section className="resume__left">
                          <header className="resume__subheader">
                              <h2 className="resume_subtitle">
                                  Formacion
                              </h2>
                          </header>

                          <div className="resume__timelines">
                              <article className="timelines__items">
                                  <header className="timeline__header">
                                      <h4 className="timeline__year">2010</h4>
                                      <span className="timeline__company">Universidad De Las Fuerzas Armadas ESPE</span>
                                  </header>
                                  <div className="timeline__divider"></div>

                                  <div className="timeline__description">
                                      <h3 className="timeline__title">Ingenieria en Software</h3>
                                      <span className="timeline__desciption"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias reiciendis, omnis sunt ratione nemo aperiam magnam. Deleniti, odio reiciendis perspiciatis expedita rem aliquam natus quidem necessitatibus doloribus asperiores quasi fuga. </span>
                                  </div>
                              </article>
                              <article className="timelines__items">
                                  <header className="timeline__header">
                                      <h4 className="timeline__year">2024</h4>
                                      <span className="timeline__company">Udemy</span>
                                  </header>
                                  <div className="timeline__divider"></div>

                                  <div className="timeline__description">
                                      <h3 className="timeline__title">Maquetado CSS</h3>
                                      <span className="timeline__desciption"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias reiciendis, omnis sunt ratione nemo aperiam magnam. Deleniti, odio reiciendis perspiciatis expedita rem aliquam natus quidem necessitatibus doloribus asperiores quasi fuga. </span>
                                  </div>
                              </article>

                          </div>

                          <header className="resume__subheader">
                              <h2 className="resume_subtitle">
                                  Experiencia
                              </h2>
                          </header>
                          <div className="resume__timelines">
                              <article className="timelines__items">
                                  <header className="timeline__header">
                                      <h4 className="timeline__year">2020 - 2022</h4>
                                      <span className="timeline__company">Pulpo</span>
                                  </header>
                                  <div className="timeline__divider"></div>

                                  <div className="timeline__description">
                                      <h3 className="timeline__title">Desarrollador fullstack</h3>
                                      <span className="timeline__desciption"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias reiciendis, omnis sunt ratione nemo aperiam magnam. Deleniti, odio reiciendis perspiciatis expedita rem aliquam natus quidem necessitatibus doloribus asperiores quasi fuga. </span>
                                  </div>
                              </article>
                              <article className="timelines__items">
                                  <header className="timeline__header">
                                      <h4 className="timeline__year">2023</h4>
                                      <span className="timeline__company">Cogarol</span>
                                  </header>
                                  <div className="timeline__divider"></div>

                                  <div className="timeline__description">
                                      <h3 className="timeline__title">Ingeniero en software</h3>
                                      <span className="timeline__desciption"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias reiciendis, omnis sunt ratione nemo aperiam magnam. Deleniti, odio reiciendis perspiciatis expedita rem aliquam natus quidem necessitatibus doloribus asperiores quasi fuga. </span>
                                  </div>
                              </article>

                          </div>

                      </section>
                      <section className="resume__right">
                          <header className="resume__subheader">
                              <h2 className="resume__subtitle">

                                  Habilidades de diseño
                              </h2>
                          </header>
                          <div className="resume__skills">
                              <article className="skills__title">
                                  <h4 className="skills__text">Diseño web</h4>
                                  <span className="skills__number">15%</span>
                              </article>
                              <div className="skills__progressbar">
                                  <div className="skills__percentage"></div>
                              </div>


                              <article className="skills__title">
                                  <h4 className="skills__text">Diseño responsive</h4>
                                  <span className="skills__number">75%</span>
                              </article>
                              <div className="skills__progressbar">
                                  <div className="skills__percentage"></div>
                              </div>
                          </div>


                          <header className="resume__subheader">
                              <h2 className="resume__subtitle">
                                  Habilidades de codigo
                              </h2>
                          </header>
                          <div className="resume__skills">
                              <article className="skills__title">
                                  <h4 className="skills__text">HTML</h4>
                                  <span className="skills__number">85%</span>
                              </article>
                              <div className="skills__progressbar">
                                  <div className="skills__percentage"></div>
                              </div>


                              <article className="skills__title">
                                  <h4 className="skills__text">Javascript</h4>
                                  <span className="skills__number">75%</span>
                              </article>
                              <div className="skills__progressbar">
                                  <div className="skills__percentage"></div>
                              </div>
                          </div>
                      </section>

                  </div>
              </section>
          </main>
      </Layout>
  );
};
export default Curriculum;