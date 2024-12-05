import MainContext from "components/MainContext";
import React, { useContext, useState } from "react";
import { MdDownload } from "react-icons/md";
import downloadMethod from "utils/downloadMethod";

const Download = () => {
  const { brands, selectedBrands } = useContext(MainContext);
  const [cssMethod, setCssMethod] = useState("");

  const handleChange = (e) => {
    const selectedFormat = e.target.value;
    setCssMethod(selectedFormat);
    handleDownload(selectedFormat);
  };

  const handleDownload = (selectedFormat) => {
    if (selectedBrands.length > 0) {
      const blob = new Blob([
        downloadMethod(selectedFormat, selectedBrands, brands),
      ]);
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `brands.${selectedFormat}`;
      a.click();

      URL.revokeObjectURL(url);
    }
  };
  return (
    <div className="download">
      {selectedBrands.length > 0 && (
        <select value={cssMethod} onChange={handleChange}>
          <option value={""}></option>
          <option value={"ase"}>ASE (Adobe)</option>
          <option value={"css"}>CSS</option>
          <option value={"scss"}>SCSS</option>
          <option value={"less"}>LESS</option>
          <option value={"stylus"}>Stylus</option>
        </select>
      )}

      <MdDownload
        style={{
          "--color": `${selectedBrands.length > 0 ? "#617e8a" : "#cbd5d8"} `,
        }}
      />
    </div>
  );
};

export default Download;
