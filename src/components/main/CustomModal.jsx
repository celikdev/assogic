import React from "react";
import Modal from "react-modal";

const CustomModal = ({ children, isOpen }) => {
  const customStyles = {
    overlay: {
      position: "fixed",
      backgroundColor: "rgba(0, 0, 0, 0.80)",
    },
    content: {
      top: "50%",
      borderRadius: 20,
      width: "30%",
      height: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgb(229,231,235)",
    },
  };

  Modal.setAppElement("#root");

  return (
    <Modal style={customStyles} isOpen={isOpen}>
      {children}
    </Modal>
  );
};

export default CustomModal;
