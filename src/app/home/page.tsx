import type { ReactElement } from "react";
import Layout from "../components/layout/layout";
import type { NextPageWithLayout } from "../pages/_app";

const Home = () => {
  return (
    <Layout>
      <main className="layout__content">
        <section className="content__page">
          <h1 className="page__name">Victor Cajilema</h1>
          <h2 className="page__job"> Desarrollador WEB</h2>
        </section>
      </main>
    </Layout>
  );
};
export default Home;
