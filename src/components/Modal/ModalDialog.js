import React from 'react'
import Modal from 'react-modal';
import './modalDialog.css'
import Button from '../Button/Button';


Modal.setAppElement('#___gatsby');

const ModalDialog = ({ isOpen, onRequestClose, children }) => {


    return (
        <Modal
            className='styled-modal'
            onRequestClose={onRequestClose}
            isOpen={isOpen}
        >
            <span onClick={onRequestClose} className='modal-cross-close'>+</span>
            {children}
            <div className='modal-button'>
                <Button onClick={onRequestClose}>Close</Button>
            </div>
        </Modal>
    )
}

export default ModalDialog