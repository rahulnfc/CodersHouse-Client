import React, { useState } from 'react'
import { Button, ButtonToolbar, Loader, Modal } from 'rsuite';
import PlaceholderParagraph from 'rsuite/esm/Placeholder/PlaceholderParagraph';

const ModalComp = () => {
    const [open, setOpen] = useState(false);
    const [rows, setRows] = React.useState(0);
    const [size, setSize] = useState();
    const handleOpen = value => {
        setSize(value);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleEntered = () => {
        setTimeout(() => setRows(80), 2000);
    };

    return (
        <div className="modal-container">
            <ButtonToolbar>
                <Button size="sm" onClick={() => handleOpen('sm')} appearance="primary">
                    Open
                </Button>
            </ButtonToolbar>
            <Modal
                size={size}
                open={open}
                onClose={handleClose}
                onEntered={handleEntered}
            >
                <Modal.Header>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {rows ? (
                        <PlaceholderParagraph />
                    ) : (
                        <div style={{ textAlign: 'center' }}>
                            <Loader size="md" />
                        </div>
                    )}
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
    );
};

export default ModalComp;