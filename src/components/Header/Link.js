import MainContext from "components/MainContext";
import React, { useContext } from "react";
import { IoMdLink } from "react-icons/io";

const Link = () => {
  const { selectedBrands } = useContext(MainContext);
  return (
    <div>
      <IoMdLink
        style={{
          "--color": `${selectedBrands.length > 0 ? "#617e8a" : "#cbd5d8"} `,
        }}
      />
    </div>
  );
};

export default Link;
