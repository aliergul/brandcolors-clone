import MainContext from "components/MainContext";
import React, { useContext } from "react";
import { GrSearch } from "react-icons/gr";

const Header = () => {
  const { search, setSearch } = useContext(MainContext);

  return (
    <div className="search">
      <div className="icon">
        <GrSearch />
      </div>
      <input
        placeholder="Search Brands"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Header;
