import MainContext from "components/MainContext";
import React, { useContext } from "react";
import { GrSearch } from "react-icons/gr";
import Download from "./Download";
import Clear from "./Clear";
import Link from "./Link";
import Collection from "./Collection";
import AllBrands from "./AllBrands";

const Header = () => {
  const { search, setSearch, selectedBrands } = useContext(MainContext);

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
      <div className={`tools ${selectedBrands.length > 0 ? "selected" : ""}`}>
        <Download />
        <Link />
        <Clear />
        <Collection />
        <AllBrands />
      </div>
    </div>
  );
};

export default Header;
