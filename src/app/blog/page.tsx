import Layout from "../components/layout/layout";
import Image from "next/image";
import { FaBook } from "react-icons/fa";

const Portfolio = () => {
  return (
    <Layout>
      <main className="layout__content">
        <section className="content__page content__blog">
          <header className="blog__header">
            <h1 className="blog__title">Blog</h1>
          </header>

          <section className="blog__articles">
            <article className="articles__article">
              <div className="article__top">
                <div className="article__category">Desarrollo</div>
                <a href="#" className="article__image-link">
                  <div className="article__mask">
                    <Image
                      className="article__image"
                      src="/img/certificado-1.png"
                      alt="Blog"
                      width={120}
                      height={80}
                    ></Image>
                  </div>
                  <div className="article__logo">
                    
                    <i className="article__icon fa-solid fa-book">
                    <FaBook />
                    </i>
                  </div>
                </a>
              </div>
              <div className="article__bottom">
                <time dateTime="2024-08-30" className="article__date">
                  30/08/2024
                </time>
                <a href="#" className="article__link">
                  <h2 className="article__title"> Como aprender a programar</h2>
                </a>
              </div>
            </article>

            <article className="articles__article">
              <div className="article__top">
                <div className="article__category">EMprendimiento</div>
                <a href="#" className="article__image-link">
                  <div className="article__mask">
                    <Image
                      className="article__image"
                      src="/img/certificado-1.png"
                      alt="Blog"
                      width={120}
                      height={80}
                    ></Image>
                  </div>
                  <div className="article__logo">
                    <i className="article__icon fa-solid fa-book">
                    <FaBook />
                    </i>
                  </div>
                </a>
              </div>
              <div className="article__bottom">
                <time dateTime="2024-08-30" className="article__date">
                  30/08/2024
                </time>
                <a href="#" className="article__link">
                  <h2 className="article__title">
                    COmo empezar tu propia empresa
                  </h2>
                </a>
              </div>
            </article>

            <article className="articles__article">
              <div className="article__top">
                <div className="article__category">Gestion de proyectos</div>
                <a href="#" className="article__image-link">
                  <div className="article__mask">
                    <Image
                      className="article__image"
                      src="/img/certificado-1.png"
                      alt="Blog"
                      width={120}
                      height={80}
                    ></Image>
                  </div>
                  <div className="article__logo">
                    <i className="article__icon fa-solid fa-book">
                    <FaBook />
                    </i>
                  </div>
                </a>
              </div>
              <div className="article__bottom">
                <time dateTime="2024-08-30" className="article__date">
                  30/08/2024
                </time>
                <a href="#" className="article__link">
                  <h2 className="article__title">
                    Como dirigir de manera eficiente un proyecto de software
                  </h2>
                </a>
              </div>
            </article>

            <article className="articles__article">
              <div className="article__top">
                <div className="article__category">
                  Maquetacion de paginas web
                </div>
                <a href="#" className="article__image-link">
                  <div className="article__mask">
                    <Image
                      className="article__image"
                      src="/img/certificado-1.png"
                      alt="Blog"
                      width={120}
                      height={80}
                    ></Image>
                  </div>
                  <div className="article__logo">
                    <i className="article__icon fa-solid fa-book">
                      <FaBook />
                    </i>
                  </div>
                </a>
              </div>
              <div className="article__bottom">
                <time dateTime="2024-08-30" className="article__date">
                  30/08/2024
                </time>
                <a href="#" className="article__link">
                  <h2 className="article__title">
                    Aprende a dise;ar sitios web
                  </h2>
                </a>
              </div>
            </article>
          </section>
        </section>
      </main>
    </Layout>
  );
};
export default Portfolio;
