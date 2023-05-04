import Layout from '../../components/Layout/Layout'
import React from 'react'
import { fetchTeamMembers } from '../../utils/contentfulConnector'
import Loader from '../../components/Loader/Loader'
import CareerList from '../../components/Career/CareerList'
import PageHeader from '../../components/PageHeader/PageHeader'

const Career = () => {

    const [employees, setEmployees] = React.useState()

    const items = fetchTeamMembers()

    React.useEffect(() => {
        items.then(r => setEmployees(r))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    if (!employees) return <Loader />

    return (
        <Layout>
            <PageHeader title={'Career'} description={'This is where you find all our talented members of F rogsong studios!'} />
            <CareerList employees={employees}></CareerList>
        </Layout>
    )
}

export default Career