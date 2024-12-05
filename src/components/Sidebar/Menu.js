import React from "react";

const Menu = ({ handleModal }) => {
  return (
    <ul>
      <li>
        <span>Suggest a Brand</span>
      </li>
      <li>
        <span onClick={handleModal}>About BrandColors</span>
      </li>
    </ul>
  );
};

export default Menu;
