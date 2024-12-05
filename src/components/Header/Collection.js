import MainContext from "components/MainContext";
import React, { useContext } from "react";

const Collection = () => {
  const { selectedBrands } = useContext(MainContext);

  return (
    <div className="collection">
      {selectedBrands?.length > 0 ? (
        <span className="filled-collection">
          {selectedBrands?.length} brand
          {selectedBrands?.length === 1 ? "" : "s"} collected
        </span>
      ) : (
        <span className="empty-collection">0 brands collected</span>
      )}
    </div>
  );
};

export default Collection;
