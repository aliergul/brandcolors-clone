import React from "react";
import { NavLink } from "react-router-dom";

const BrandsFooter = ({ brand }) => {
  const dateFormat = (dateString) => {
    const [datePart] = dateString.split(" ");
    const [year, month, day] = datePart.split("-");
    return `${year}/${month}/${day}`;
  };

  return (
    <div className="brand-footer">
      <span>Updated {dateFormat(brand?.modified)}</span>

      {brand?.brand_url && (
        <a target="_blank" href={brand?.brand_url} rel="noreferrer">
          Brand URL
        </a>
      )}

      {brand?.source_url && (
        <a target="_blank" href={brand?.source_url} rel="noreferrer">
          Source URL
        </a>
      )}

      <NavLink className="return-all-brands" to={`/b/${brand.slug}`} end>
        Permalink
      </NavLink>
    </div>
  );
};

export default BrandsFooter;
