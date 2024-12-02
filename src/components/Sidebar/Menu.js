import React from "react";

const Menu = ({ handleModal }) => {
  return (
    <ul>
      <li>
        <a href="true">Suggest a Brand</a>
      </li>
      <li>
        <a href="true" onClick={handleModal}>
          About BrandColors
        </a>
      </li>
    </ul>
  );
};

export default Menu;
