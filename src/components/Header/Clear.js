import MainContext from "components/MainContext";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";

const Clear = () => {
  const { selectedBrands, setSelectedBrands } = useContext(MainContext);
  return (
    <div>
      <RxCross2
        style={{
          "--color": `${selectedBrands?.length > 0 ? "#617e8a" : "#cbd5d8"} `,
        }}
        onClick={() => setSelectedBrands([])}
      />
    </div>
  );
};

export default Clear;
