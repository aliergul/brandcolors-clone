import React from "react";

const Menu = ({ handleModal }) => {
  return (
    <ul>
      <li>
        <a href>Suggest a Brand</a>
      </li>
      <li>
        <a href onClick={handleModal}>
          About BrandColors
        </a>
      </li>
    </ul>
  );
};

export default Menu;
