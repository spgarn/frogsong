import React from 'react'
import { CareerCard } from './CareerCard'
import './career.css'


const CareerList = ({ employees }) => {
    return (
        <div className='career-list'>
            {employees.items.map(employee => <CareerCard key={employee.fields.name} employee={employee.fields} />)}
        </div>
    )
}

export default CareerList