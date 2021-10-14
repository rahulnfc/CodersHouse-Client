import React from "react";
import { Modal } from "rsuite";
import ImagePost from "../AddPost/ImagePost/ImagePost";

const ModalComp = (props) => {
  const { open, handleClose, title, children } = props;
  return (
    <div className="modal-container">
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
          <ImagePost />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalComp;
