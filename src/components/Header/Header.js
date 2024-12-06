import MainContext from "components/MainContext";
import React, { useContext } from "react";
import { GrSearch } from "react-icons/gr";
import Download from "./Download";
import Clear from "./Clear";
import Link from "./Link";
import Collection from "./Collection";
import AllBrands from "./AllBrands";
import { FaArrowLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Header = ({ isCollection = false }) => {
  const { search, setSearch, selectedBrands } = useContext(MainContext);

  return (
    <div className="search">
      {!isCollection ? (
        <>
          <div className="icon">
            <GrSearch />
          </div>
          <input
            placeholder="Search Brands"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </>
      ) : (
        <NavLink className="return-all-brands" to="/" end>
          <FaArrowLeft />
          All Brands
        </NavLink>
      )}

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
