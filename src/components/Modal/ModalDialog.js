import React from 'react'
import Modal from 'react-modal';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     },
// };

Modal.setAppElement('#___gatsby');

const ModalDialog = ({ isOpen, onRequestClose, children }) => {

    return (
        <Modal
            onRequestClose={onRequestClose}
            isOpen={isOpen}
            contentLabel="Example Modal"
        >{children}</Modal>
    )
}

export default ModalDialog