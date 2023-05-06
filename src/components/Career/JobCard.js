import React from 'react'
import './career.css'
import H3 from '../Texts/H3'
import H2 from '../Texts/H2'
import { getSocialsIcon } from '../../utils/getSocialsIcon'

export const JobCard = ({ employee, setSubject }) => {



    return (
        <>

            <div role='presentation' onClick={() => setSubject(employee.role)} onKeyDown={() => setSubject(employee.role)} className='job-card'>
                <img className='profile-image' src={employee.profile.fields.file.url} alt={employee.profile.fields.file.fileName} />
                <H2>{employee.name}</H2>
                <H3>{employee.role}</H3>

                {!!employee.social &&
                    <ul className='employee-socials'>
                        {employee.socials.map(url => {
                            const social = getSocialsIcon(url)
                            return (
                                <li key={social.url} >
                                    <a target='_blank' href={social.url} rel='noreferrer'>
                                        <i className={social.icon}></i>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                }
            </div>

        </>
    )
}
