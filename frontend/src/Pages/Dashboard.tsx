import React from 'react'
import Sidebar from '../Components/Sidebar'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='main-container grid grid-cols-5'>
        <div className='sidebar-container col-span-1'>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Dashboard