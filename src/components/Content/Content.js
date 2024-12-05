import React, { useContext } from "react";
import Header from "../Header/Header";
import Brands from "./Brands";
import MainContext from "components/MainContext";
import LazyLoad from "react-lazyload";

const Content = () => {
  const { brands } = useContext(MainContext);
  return (
    <main className="content">
      <header className="header">
        <Header />
      </header>
      <section className="brands">
        {brands.map((brand, i) => (
          <LazyLoad key={brand.slug} once={true} placeholder="Loading...">
            <Brands key={i} brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
};

export default Content;
