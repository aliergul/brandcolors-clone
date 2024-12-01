import React from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

const InfoModal = ({ open, handleModal }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={handleModal}
      ariaHideApp={false}
      className="info-modal"
      overlayClassName="info-modal-overlay"
    >
      <button className="modal-close-btn" onClick={handleModal}>
        <GrClose />
      </button>
      <h3>About BrandColors</h3>
      <p>
        BrandColors was created by <b>DesignBombs</b>. The goal was to create a
        helpful reference for the brand color codes that are needed most often.
      </p>
      <p>
        It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
        Tuts+, and over <b>2 million pageviews</b>. There are now over{" "}
        <b>600 brands</b> with <b>1600 colors</b> and the collection is always
        growing.
      </p>
    </Modal>
  );
};

export default InfoModal;
