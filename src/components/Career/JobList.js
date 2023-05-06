import React from 'react'
import { JobCard } from './JobCard'
import './career.css'


const JobList = ({ employees, setSubject }) => {
    return (
        <div className='career-list'>
            {employees.items.map(employee => <JobCard setSubject={setSubject} key={employee.fields.name} employee={employee.fields} />)}
        </div>
    )
}

export default JobList