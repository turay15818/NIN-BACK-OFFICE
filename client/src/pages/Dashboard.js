import React from 'react'
import SideNav from '../dashboard/sidebar/SideNav'
import Statistics from '../dashboard/Statistics/Statistics'

const Dashboard = () => {
  return (
   <>
   <div className="flex">
   <SideNav/>
   <Statistics/>
   </div>
   </>
  )
}

export default Dashboard