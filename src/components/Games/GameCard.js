import React, { useState } from 'react'
import H3 from '../Texts/H3'
import H4 from '../Texts/H4'
import './games.css'
import ModalDialog from '../Modal/ModalDialog'

const GameCard = ({ game }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClickOutsideModal = (event) => {
        event.stopPropagation()
        setIsOpen(prev => !prev)
    }


    return (
        <div role='presentation' onClick={() => setIsOpen(true)} onKeyDown={() => setIsOpen(true)} style={{ backgroundImage: `url(${game.url.fields.file.url})` }} className='game-card'>
            <div className='text-wrapper'>
                <H3>{game.title}</H3>
                <H4>{game.infoText}</H4>
            </div>
            <ModalDialog onRequestClose={handleClickOutsideModal} isOpen={isOpen}>HEJ</ModalDialog>
        </div >
    )
}

export default GameCard