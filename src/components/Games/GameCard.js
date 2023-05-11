import React, { useState } from 'react'
import H3 from '../Texts/H3'
import H4 from '../Texts/H4'
import './games.css'
import ModalDialog from '../Modal/ModalDialog'
import H1 from '../Texts/H1'
import RichTextStyleElement from '../RichTextStyleElement/RichTextStyleElement'

const GameCard = ({ game }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClickOutsideModal = (event) => {
        event.stopPropagation()
        setIsOpen(prev => !prev)
    }



    return (
        <div role='presentation' onClick={() => setIsOpen(true)} onKeyDown={() => setIsOpen(true)} style={{ backgroundImage: `url(${game.url.fields.file.url}?w=400&h=400&fit=fill&f=center)` }} className='game-card'>
            <div className='text-wrapper'>
                <H3>{game.title}</H3>
                <H4>{game.infoText}</H4>
            </div>
            <ModalDialog onRequestClose={handleClickOutsideModal} isOpen={isOpen}>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <H1>{game.title}</H1>
                    <H3>{game.infoText}</H3>
                    <RichTextStyleElement isBorder>{game.detailedText}</RichTextStyleElement>
                </div>
            </ModalDialog>
        </div >
    )
}

export default GameCard