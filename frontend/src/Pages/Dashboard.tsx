import React from 'react'
import Sidebar from '../Components/Sidebar';
import Card from '../Components/Card';

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='main-container grid grid-cols-5'>
        <div className='sidebar-container col-span-1 mr-4'>
            <Sidebar/>
        </div>
        <div className='flex space-x-4 py-4'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Dashboard