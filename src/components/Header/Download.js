import MainContext from "components/MainContext";
import React, { useContext } from "react";
import { MdDownload } from "react-icons/md";

const Download = () => {
  const { selectedBrands } = useContext(MainContext);

  return (
    <div className="download">
      <MdDownload
        style={{
          "--color": `${selectedBrands.length > 0 ? "#617e8a" : "#cbd5d8"} `,
        }}
      />
    </div>
  );
};

export default Download;
