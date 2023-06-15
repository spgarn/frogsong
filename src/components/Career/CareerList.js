import React from 'react'
import { CareerCard } from './CareerCard'
import './career.css'
import Card from '../Card/Card'
import Icon from '../Icon/Icon'


const CareerList = ({ employees,title,description }) => {

    return (
        <Card title={title} description={description} className='career-list' style={{gap:'40px'}}>
            <Icon classname={'fa fa-users fa-2x'}></Icon>
            {employees?.items.map(employee => <CareerCard key={employee.fields.name} employee={employee.fields} />)}
        </Card>
    )
}

export default CareerList