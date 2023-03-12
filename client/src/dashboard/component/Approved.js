/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Table, Checkbox } from 'flowbite-react'
import SideNav from '../sidebar/SideNav'

const approvedData = [{
    id: 1,
    checked: true,
    fullName: 'Mohamed Kamara',
    DOB: '2000-04-10',
    gender: 'Male',
    idNumber: 12345,
    idType: "Driver's License"
},

{
    id: 2,
    checked: true,
    fullName: 'Salim Jalloh',
    DOB: '1994-10-10',
    gender: 'Male',
    idNumber: 67891,
    idType: 'ID Card'
},

{
    id: 3,
    checked: true,
    fullName: 'Hamira S Sesay',
    DOB: '2002-12-05',
    gender: 'Female',
    idNumber: 29813,
    idType: "Voter's ID"
}
]

const Approved = () => {
  return (
    <div className='flex'>

    <SideNav />

   <div className='w-full mr-9 mt-9'>
   <Table hoverable={true} className="p-5 rounded-2xl shadow-md shadow-black/200 ">
  <Table.Head>
    <Table.HeadCell className="!p-4">
      CONFIRM
    </Table.HeadCell>
    <Table.HeadCell>
      FULL NAME
    </Table.HeadCell>
    <Table.HeadCell>
      DOB
    </Table.HeadCell>
    <Table.HeadCell>
      Gender
    </Table.HeadCell>
    <Table.HeadCell>
      ID NUMBER
    </Table.HeadCell>
    <Table.HeadCell>
      ID TYPE
    </Table.HeadCell>
    <Table.HeadCell>
      Action
    </Table.HeadCell>
    <Table.HeadCell>
      <span className="sr-only">
        View
      </span>
    </Table.HeadCell>
  </Table.Head>
  
  {
    approvedData.map((aData) => (
        <Table.Body className="divide-y" key={aData.id}>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="!p-4">
        {aData.checked}
        <Checkbox checked={aData.checked} />
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {aData.fullName}
      </Table.Cell>
      <Table.Cell>
      {aData.DOB}
      </Table.Cell>
      <Table.Cell>
      {aData.gender}
      </Table.Cell>
      <Table.Cell>
      {aData.idNumber}
      </Table.Cell>
      <Table.Cell>
      {aData.idType}
      </Table.Cell>
      <Table.Cell>
        <a
          href="#"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View
        </a>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
    ))
  }
</Table>
   </div>
    </div>
  )
}

export default Approved