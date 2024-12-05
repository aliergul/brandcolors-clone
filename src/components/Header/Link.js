import MainContext from "components/MainContext";
import React, { useContext } from "react";
import { IoMdLink } from "react-icons/io";

const Link = () => {
  const { selectedBrands } = useContext(MainContext);

  const handleLink = () => {
    prompt(
      "Here's the URL to share",
      `http://localhost:3000/c/${selectedBrands.join(",")}`
    );
  };

  return (
    <div>
      <IoMdLink
        onClick={() => selectedBrands?.length > 0 && handleLink()}
        style={{
          "--color": `${selectedBrands.length > 0 ? "#617e8a" : "#cbd5d8"} `,
        }}
      />
    </div>
  );
};

export default Link;
