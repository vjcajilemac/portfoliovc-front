import type { ReactElement } from "react";
import Layout from "../components/layout/layout";
import Image from "next/image";
import "../../app/scroll.css";


const Curriculum = () => {
  return (
    <Layout>
      <main className="layout__content">
        <section className="content__page content__resume">
          <header className="resume__header">
            <h2 className="resume__title">Curriculum</h2>

          </header>
          <div className="resume__container">
            <section className="resume__left">
              <header className="resume__subheader">
                <h2 className="resume_subtitle">
                  Formacion
                </h2>
              </header>

              <div className="resume__timelines">
                <article className="timelines__timeline">
                  <header className="timeline__header">
                    <h4 className="timeline__year">2010</h4>
                    <span className="timeline__company">Universidad De Las Fuerzas Armadas ESPE</span>
                  </header>
                  <div className="timeline__divider"></div>

                  <div className="timeline__description">
                    <h3 className="timeline__title">Ingenieria en Software</h3>
                    <p className="timeline__text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias reiciendis, omnis sunt ratione nemo aperiam magnam. Deleniti, odio reiciendis perspiciatis expedita rem aliquam natus quidem necessitatibus doloribus asperiores quasi fuga. </p>
                  </div>
                </article>
                <article className="timelines__timeline">
                  <header className="timeline__header">
                    <h4 className="timeline__year">2024</h4>
                    <span className="timeline__company">Udemy</span>
                  </header>
                  <div className="timeline__divider"></div>

                  <div className="timeline__description">
                    <h3 className="timeline__title">Maquetado CSS</h3>
                    <span className="timeline__text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias reiciendis, omnis sunt ratione nemo aperiam magnam. Deleniti, odio reiciendis perspiciatis expedita rem aliquam natus quidem necessitatibus doloribus asperiores quasi fuga. </span>
                  </div>
                </article>

              </div>

              <header className="resume__subheader">
                <h2 className="resume_subtitle">
                  Experiencia
                </h2>
              </header>
              <div className="resume__timelines">
                <article className="timelines__timeline">
                  <header className="timeline__header">
                    <h4 className="timeline__year">2020 - 2022</h4>
                    <span className="timeline__company">Pulpo</span>
                  </header>
                  <div className="timeline__divider"></div>

                  <div className="timeline__description">
                    <h3 className="timeline__title">Desarrollador fullstack</h3>
                    <span className="timeline__text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias reiciendis, omnis sunt ratione nemo aperiam magnam. Deleniti, odio reiciendis perspiciatis expedita rem aliquam natus quidem necessitatibus doloribus asperiores quasi fuga. </span>
                  </div>
                </article>
                <article className="timelines__timeline">
                  <header className="timeline__header">
                    <h4 className="timeline__year">2023</h4>
                    <span className="timeline__company">Cogarol</span>
                  </header>
                  <div className="timeline__divider"></div>

                  <div className="timeline__description">
                    <h3 className="timeline__title">Ingeniero en software</h3>
                    <span className="timeline__text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias reiciendis, omnis sunt ratione nemo aperiam magnam. Deleniti, odio reiciendis perspiciatis expedita rem aliquam natus quidem necessitatibus doloribus asperiores quasi fuga. </span>
                  </div>
                </article>

              </div>

            </section>
            <section className="resume__right">
              <header className="resume__subheader">
                <h2 className="resume__subtitle">
                  Habilidades de <span className="subtitle__color">diseño</span> 
                </h2>
              </header>
              <div className="resume__skills">
                <article className="skills__title">
                  <h4 className="skills__text">Diseño web</h4>
                  <span className="skills__number">15%</span>
                </article>
                <div className="skills__progressbar">
                  <div className="skills__percentage skills__percentage--p1"></div>
                </div>


                <article className="skills__title">
                  <h4 className="skills__text">Diseño responsive</h4>
                  <span className="skills__number">75%</span>
                </article>
                <div className="skills__progressbar">
                  <div className="skills__percentage skills__percentage--p2"></div>
                </div>
              </div>


              <header className="resume__subheader">
                <h2 className="resume__subtitle">
                  Habilidades de <span className="subtitle__color">codigo</span>
                </h2>
              </header>
              <div className="resume__skills">
                <article className="skills__title">
                  <h4 className="skills__text">HTML</h4>
                  <span className="skills__number">85%</span>
                </article>
                <div className="skills__progressbar">
                  <div className="skills__percentage skills__percentage--p3"></div>
                </div>


                <article className="skills__title">
                  <h4 className="skills__text">Javascript</h4>
                  <span className="skills__number">75%</span>
                </article>
                <div className="skills__progressbar">
                  <div className="skills__percentage skills__percentage--p4"></div>
                </div>
              </div>

              <header className="resume__subheader">
                <h2 className="resume__subtitle">
                  Areas De Conocimientos
                </h2>
              </header>

              <div className="resume__knowledges">
                <ul className="knowledges__list">
                  <li className="knowledges__option">Programacion</li>
                  <li className="knowledges__option">Elicitacion</li>
                  <li className="knowledges__option">CI - CD</li>

                </ul>

              </div>

            </section>

          </div>
          <div className="resume__certificates">
            <header className="resume__subheader">
              <h2 className="resume__subtitle" >Certificados</h2>
            </header>
            <section className="certificates__container">

              <article className="certificates__certificate">
                <div className="certificate__logo">
                  <Image
                  className="certificate__image"
                    src="/img/certificado-1.png"
                    alt="Udemy"
                    width={100}
                    height={70}
                  />
                </div>
                <div className="certificate__content">
                  <h4 className="certificate__title"> Master Css</h4>
                  <span className="certificate__id">12125555</span>
                  <span className="certificate__date">20 Julio 2023</span>
                </div>
              </article>

              <article className="certificates__certificate">
                <div className="certificate__logo">
                  <Image
                  className="certificate__image"
                    src="/img/certificado-1.png"
                    alt="Udemy"
                    width={100}
                    height={70}
                  />
                </div>
                <div className="certificate__content">
                  <h4 className="certificate__title"> React js de 0 a experto</h4>
                  <span className="certificate__id">5556556565</span>
                  <span className="certificate__date">20 Julio 2024</span>
                </div>
              </article>
            </section>

          </div>
        </section>
      </main>
    </Layout>
  );
};
export default Curriculum;