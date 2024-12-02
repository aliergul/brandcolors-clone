import React from "react";
import getContrast from "utils/colorContrast";

const Brands = ({ brand, textColor }) => {
  return (
    <div className="brand-items">
      <span className="brand-titles">{brand.title}</span>
      <div className="brand-colors">
        {brand.colors.map((color, i) => (
          <span
            key={i}
            style={{
              "--bgColor": `#${color}`,
              "--textColor": `${getContrast(color)}`,
            }}
          >
            {color}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Brands;
