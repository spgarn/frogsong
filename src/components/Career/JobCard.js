import React, { useState } from 'react'
import './career.css'
import H3 from '../Texts/H3'
import H2 from '../Texts/H2'
import H4 from '../Texts/H4'
import ModalDialog from '../Modal/ModalDialog'
import RichTextStyleElement from '../RichTextStyleElement/RichTextStyleElement'

export const JobCard = ({ job, setSubject }) => {

    const [isOpenJobInfo, setIsOpenJobInfo] = useState(false)

    const handleClickOutsideModal = (event) => {
        event.stopPropagation()
        setIsOpenJobInfo(prev => !prev)
    }

    return (
        <>

            <div role='presentation' onClick={() => setSubject(job.position)} onKeyDown={() => setSubject(job.position)} className='job-card'>
                <img className='profile-image' src={job.image.fields.file.url} alt={job.image.fields.file.fileName} />
                <H2>{job.position}</H2>
                <H3>{job.area}</H3>
                <H4>{job.location}</H4>
                <H4 onClick={() => setIsOpenJobInfo(!isOpenJobInfo)} style={{ textDecoration: 'underline' }}>More info</H4>

                <ModalDialog onRequestClose={handleClickOutsideModal} isOpen={isOpenJobInfo}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <RichTextStyleElement>{job.jobDescription}</RichTextStyleElement>
                    </div>
                </ModalDialog>
            </div>

        </>
    )
}
