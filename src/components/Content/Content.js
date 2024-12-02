import React, { useContext } from "react";
import Header from "./Header";
import Brands from "./Brands";
import MainContext from "components/MainContext";

const Content = () => {
  const { brands } = useContext(MainContext);
  return (
    <main className="content">
      <header className="header">
        <Header />
      </header>
      <section className="brands">
        {brands.map((brand, i) => (
          <Brands key={i} brand={brand} />
        ))}
      </section>
    </main>
  );
};

export default Content;
