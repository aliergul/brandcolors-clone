import React, { useState } from "react";
import InfoModal from "../InfoModal";
import Title from "./Title";
import Description from "./Description";
import Menu from "./Menu";
import Promo from "./Promo";
import SocialMedia from "./SocialMedia";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <Title />
        </div>
        <div className="description">
          <Description />
        </div>
        <nav className="menu">
          <Menu handleModal={handleModal} />
        </nav>
        <div className="promo">
          <Promo />
        </div>
        <div className="social-media">
          <SocialMedia />
        </div>
      </aside>
      <InfoModal open={isModalOpen} handleModal={handleModal} />
    </>
  );
};

export default Sidebar;
