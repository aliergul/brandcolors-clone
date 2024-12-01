import React from "react";

const Brands = ({ brand }) => {
  return (
    <div className="brand-items">
      <span className="brand-titles">{brand.title}</span>
      <div className="brand-colors">
        {brand.colors.map((color) => (
          <span style={{ "--bgColor": `#${color}` }}>{color}</span>
        ))}
      </div>
    </div>
  );
};

export default Brands;
