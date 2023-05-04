import React from 'react'
import Modal from 'react-modal';
import './modalDialog.css'


Modal.setAppElement('#___gatsby');

const ModalDialog = ({ isOpen, onRequestClose, children }) => {

    return (
        <Modal
            className='styled-modal'
            onRequestClose={onRequestClose}
            isOpen={isOpen}
            contentLabel="Example Modal"
        >{children}</Modal>
    )
}

export default ModalDialog