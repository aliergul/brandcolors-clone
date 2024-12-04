import MainContext from "components/MainContext";
import React, { useContext } from "react";
import getContrast from "utils/colorContrast";
import { MdDone } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";
import ClipboardButton from "react-clipboard.js";

const Brands = ({ brand }) => {
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(MainContext);

  const handleSelect = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const handleCopy = (color) => {
    setCopied(color);
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
          <ClipboardButton
            key={i}
            component="span"
            data-clipboard-text={color}
            style={{
              "--bgColor": `#${color}`,
              "--textColor": `${getContrast(color)}`,
            }}
            onSuccess={() => handleCopy(color)}
          >
            <MdOutlineContentCopy style={{ width: 24, height: 24 }} />#{color}
          </ClipboardButton>
        ))}
      </div>
    </div>
  );
};

export default Brands;
