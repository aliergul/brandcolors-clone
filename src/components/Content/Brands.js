import MainContext from "components/MainContext";
import React, { useContext, useEffect } from "react";
import getContrast from "utils/colorContrast";
import { MdDone } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";
import ClipboardButton from "react-clipboard.js";
import BrandsFooter from "./BrandsFooter";
import { useParams } from "react-router-dom";

const Brands = ({ brand }) => {
  const { slugs } = useParams();
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(MainContext);

  const handleSelect = () => {
    if (selectedBrands?.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const handleCopy = (color) => {
    setCopied(color);
  };

  useEffect(() => {
    setSelectedBrands(slugs ? slugs?.split(",") : []);
  }, []); //eslint-disable-line

  return (
    <div className="brands-main">
      <div
        className={`brand-items ${
          selectedBrands?.includes(brand.slug) ? "selected" : ""
        }`}
      >
        <span onClick={handleSelect} className="brand-titles">
          {selectedBrands?.includes(brand.slug) && (
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
      {selectedBrands?.includes(brand.slug) && <BrandsFooter brand={brand} />}
    </div>
  );
};

export default Brands;
