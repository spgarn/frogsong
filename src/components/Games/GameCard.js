import React, { useState } from 'react'
import H3 from '../Texts/H3'
import H4 from '../Texts/H4'
import './games.css'
import ModalDialog from '../Modal/ModalDialog'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from "@contentful/rich-text-types";

const GameCard = ({ game }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClickOutsideModal = (event) => {
        event.stopPropagation()
        setIsOpen(prev => !prev)
    }

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                return (<img style={{ width: '50%', height: 'auto', borderRadius: '12px' }} src={node.data.target.fields.file.url} alt={node.data.target.fields.file.fileName}
                />)
            }
        }
    }

    return (
        <div role='presentation' onClick={() => setIsOpen(true)} onKeyDown={() => setIsOpen(true)} style={{ backgroundImage: `url(${game.url.fields.file.url})` }} className='game-card'>
            <div className='text-wrapper'>
                <H3>{game.title}</H3>
                <H4>{game.infoText}</H4>
            </div>
            <ModalDialog onRequestClose={handleClickOutsideModal} isOpen={isOpen}>
                <div >
                    <H3 style={{ textAlign: 'center' }}>{game.title}</H3>
                    <H4 style={{ textAlign: 'center' }}>{game.infoText}</H4>
                    <div>{documentToReactComponents(game.detailedText, options)}</div>
                </div>
            </ModalDialog>
        </div >
    )
}

export default GameCard