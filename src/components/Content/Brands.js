import MainContext from "components/MainContext";
import React, { useContext } from "react";
import getContrast from "utils/colorContrast";
import { MdDone } from "react-icons/md";

const Brands = ({ brand }) => {
  const { selectedBrands, setSelectedBrands } = useContext(MainContext);

  const handleSelect = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  return (
    <div
      className={`brand-items ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
    >
      <span onClick={handleSelect} className="brand-titles">
        {selectedBrands.includes(brand.slug) && (
          <MdDone className="done-icon" />
        )}
        {brand.title}
      </span>
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
