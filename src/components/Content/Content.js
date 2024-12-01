import React, { useState } from "react";
import Header from "./Header";
import Brands from "./Brands";
import brandsData from "data/brands.json";

const Content = () => {
  const brandsArray = [];
  Object.keys(brandsData).map((key) => brandsArray.push(brandsData[key]));
  const [brands, setBrands] = useState(brandsArray);
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
