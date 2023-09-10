"use client";
import useSWR from "swr";
import "./reset.css";
import "./layout.css";
/*import Navbar from "./navbar";
import Footer from "./footer";*/
import Image from "next/image";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaBook,
  FaEnvelope,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Layout({ children }: any) {
  /*const { data, error } = useSWR("/api/navigation");

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;*/

  console.log("sad");
  return (
    <>
      <div className="layout">
        {/*barra lateral - indo user*/}
        <aside className="layout__aside">
          <section className="aside__user-info">
            {/*Info general */}
            <div className="user-info__general">
              <div className="user-info__container-image">
                <Image
                  src="/img/default-user.jpg"
                  width="150"
                  height="150"
                  className="user-info__image"
                  alt="Profile Image"
                />
              </div>
              <h2 className="user-info__name">Victor Cajilema</h2>
              <h4 className="user-info__job">Ingeniero en software</h4>
            </div>

            {/*Menu layout menu - user-info__menu*/}
            <nav className="layout__menu">
              <ul className="menu__list">
                <li className="menu__option_">
                  <a href="index.html" className="menu__link">
                    <div className="menu__icon">
                      <FaHome />
                    </div>

                    <span className="menu__overlay">Home</span>
                  </a>
                </li>
                <li className="menu__option_">
                  <a href="index.html" className="menu__link">
                    <div className="menu__icon">
                      <FaUser />
                    </div>

                    <span className="menu__overlay">Sobre mi</span>
                  </a>
                </li>
                <li className="menu__option_">
                  <a href="index.html" className="menu__link">
                    <div className="menu__icon">
                      <FaGraduationCap />
                    </div>
                    <span className="menu__overlay">Estudios</span>
                  </a>
                </li>
                <li className="menu__option_">
                  <a href="index.html" className="menu__link">
                    <div className="menu__icon">
                      <FaBriefcase />
                    </div>
                    <span className="menu__overlay">Portafolio</span>
                  </a>
                </li>
                <li className="menu__option_">
                  <a href="index.html" className="menu__link">
                    <div className="menu__icon">
                      <FaBook />
                    </div>
                    <span className="menu__overlay">Blog</span>
                  </a>
                </li>
                <li className="menu__option_">
                  <a href="index.html" className="menu__link">
                    <div className="menu__icon">
                      <FaEnvelope />
                    </div>
                    <span className="menu__overlay">Contactos</span>
                  </a>
                </li>
              </ul>
            </nav>

            {/*social network */}
            <div className="user-info__user-links">
              <ul className="user-links__social">
                <li className="social__option">
                  <a href="#" className="social__link">
                    <i className="social__icon">
                      <FaYoutube color="white" />
                    </i>
                  </a>
                </li>
                <li className="social__option">
                  <a href="#" className="social__link">
                    <i className="social__icon">
                      <FaLinkedin color="white" />
                    </i>
                  </a>
                </li>
                <li className="social__option">
                  <a href="#" className="social__link">
                    <i className="social__icon">
                      <FaInstagram color="white" />
                    </i>
                  </a>
                </li>
              </ul>
            </div>

            {/*CV button */}
            <div className="user-info__buttons">
              <a href="#" className="user-info__btn">
                Descargar CV
              </a>
            </div>

            {/*Footer*/}
            <footer className="user-info__footer">
              &copy; 2024 Victor Cajilema
            </footer>
          </section>
        </aside>
        <main className="layout__content">{children}</main>
      </div>
    </>
  );
}
/*
<Navbar links={data.links} />
      <main>{children}</main>
      <Footer />

      */
