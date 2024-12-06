import Header from "components/Header/Header";
import MainContext from "components/MainContext";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Brands from "./Brands";
import brandsData from "data/brands.json";

const URLCollection = () => {
  const { slugs } = useParams();
  const { setSelectedBrands } = useContext(MainContext);
  const [slugsData, setSlugsData] = [slugs.split(",")]; //eslint-disable-line
  const newBrands = [];

  Object.keys(brandsData).forEach((key) => {
    const brand = brandsData[key];
    if (slugsData.includes(brand.slug)) {
      newBrands.push(brand);
    }
  });

  useEffect(() => {
    setSelectedBrands(slugsData);
  }, []); //eslint-disable-line

  return (
    <main className="content">
      <header className="header">
        <Header isCollection={true} />
      </header>
      <section className="brands">
        {newBrands.map((brand, i) => (
          <LazyLoad key={brand.slug} once={true} placeholder="Loading...">
            <Brands key={i} brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
};

export default URLCollection;
