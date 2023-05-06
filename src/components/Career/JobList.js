import React from 'react'
import { JobCard } from './JobCard'
import './career.css'


const JobList = ({ jobs, setSubject }) => {

    return (
        <div className='career-list'>
            {jobs?.items.map((job, id) => <JobCard setSubject={setSubject} key={id} job={job.fields} />)}
        </div>
    )
}

export default JobList