import React from 'react'
import { Sidebar, } from 'flowbite-react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <>
    <div className="w-fit">
  <Sidebar aria-label="Default sidebar example" >
    <Sidebar.Items className='bg-gray-200 shadow-md shadow-black/200 fixed h-full left-0 top-0 w-[200px] p-5'>
      <Sidebar.ItemGroup>
        <Sidebar.Item
        >
          <Link to="/dashboard">Dashboard</Link>
        </Sidebar.Item>
        <Sidebar.Item
          labelColor="alternative"
        >
         <Link to="/approved" >Approved</Link>
        </Sidebar.Item>
        <Sidebar.Item
          //icon={HiInbox}
        >
          <Link to="/pending" >Pending</Link>
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
         //icon={HiUser}
        >
          Reject
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
         // icon={HiShoppingBag}
        >
          Users
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
         // icon={HiArrowSmRight}
        >
          Add new user
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
        //  icon={HiTable}
        >
          Logout
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
</div>
    </>
  )
}

export default SideNav