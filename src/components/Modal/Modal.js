import React from 'react';
import { Button } from 'rsuite';
import PlaceholderParagraph from 'rsuite/esm/Placeholder/PlaceholderParagraph';

const Modal = (props) => {
    const { open, handleClose, title, children } = props;
    return (
        <div className="modal-container">
            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PlaceholderParagraph />
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Modal
