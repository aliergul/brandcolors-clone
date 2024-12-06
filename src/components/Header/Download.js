import Dropdown from "components/Dropdown";
import MainContext from "components/MainContext";
import React, { useContext, useEffect, useState } from "react";
import downloadMethod from "utils/downloadMethod";

const Download = () => {
  const { brands, selectedBrands } = useContext(MainContext);
  const [cssMethod, setCssMethod] = useState("");
  const [skipCount, setSkipCount] = useState(true);

  const handleDownload = () => {
    if (selectedBrands.length > 0) {
      const blob = new Blob([
        downloadMethod(cssMethod, selectedBrands, brands),
      ]);
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `brands.${cssMethod}`;
      a.click();

      URL.revokeObjectURL(url);
    }
  };

  useEffect(() => {
    if (skipCount) {
      setSkipCount(false);
    }
    if (!skipCount) {
      handleDownload();
    }
  }, [cssMethod]); //eslint-disable-line

  return (
    <div className="download">
      <Dropdown selectedBrands={selectedBrands} setCssMethod={setCssMethod} />
    </div>
  );
};

export default Download;
