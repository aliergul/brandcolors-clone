import React from "react";
import { GrSearch } from "react-icons/gr";

const Header = () => {
  return (
    <div className="search">
      <div className="icon">
        <GrSearch />
      </div>
      <input placeholder="Search Brands" />
    </div>
  );
};

export default Header;
