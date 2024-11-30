import React, { useState } from "react";
import InfoModal from "./InfoModal";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <a>
            Brand<b>Colors</b>
          </a>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a onClick={handleModal}>About BrandColors</a>
            </li>
          </ul>
        </nav>
      </aside>
      <InfoModal open={isModalOpen} handleModal={handleModal} />
    </>
  );
};

export default Sidebar;
