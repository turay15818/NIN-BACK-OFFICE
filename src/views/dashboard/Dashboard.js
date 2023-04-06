/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
import axios from 'axios'
import { useSelector } from "react-redux";
import UsersDashboard from '../base/users/UsersDashboard'
import Chart from '../base/admin/Chart'

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  //USERS
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await axios.get('http://localhost:4366/users')
    setUsers(response.data)
  }

  //NCRA NIN
  const [nin, setNin] = useState([]);

  useEffect(() => {
    getNin();
  }, []);

  const getNin = async () => {
    const response = await axios.get("http://localhost:4366/nin");
    setNin(response.data);
    console.log(response)
  };

//REJECTED 
  const [dataByRejected, setDataByRejected] = useState([]);

  useEffect(() => {
    getDataByRejected();
  }, []);

  const getDataByRejected = async () => {
    const response = await axios.get("http://localhost:4366/dataByRejected");
    setDataByRejected(response.data);
    // console.log(response)
  };


  //CONFIRM
  const [dataByConfirmed, setDataByConfirmed] = useState([]);

  useEffect(() => {
    getDataByConfirmed();
  }, []);

  const getDataByConfirmed = async () => {
    const response = await axios.get("http://localhost:4366/dataByConfirmed");
    setDataByConfirmed(response.data);
    // console.log(response)
  };

  const progressGroupExample2 = [
    { title: 'USERS', icon: cilUser, value: users.length/100 },
    { title: 'NCRA NIN DATA', icon: cilUserFemale, value:nin.length/100 },
    { title: 'NCRA NIN CONFIRM', icon: cilUserFemale, value: dataByConfirmed.length/100 },
    { title: 'NCRA NIN REJECT', icon: cilUserFemale, value: dataByRejected.length/100 },
  ]

  return (
    <>
     {user&&user.role ==="user"&&(
      <UsersDashboard/>
    )}
    {user&&user.role ==="admin"&&(
          <><WidgetsDropdown />
           <div>
            <Chart/>
          </div>
          <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>BASIC {' & '}ADMIN INFO </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs={12} md={12} xl={12} >

                    <hr className="mt-0" />

                    {progressGroupExample2.map((item, index) => (
                      <div className="progress-group mb-4" key={index}>
                        <div className="progress-group-header">
                          <CIcon className="me-2" icon={item.icon} size="lg" />
                          <span>{item.title}</span>
                          <span className="ms-auto fw-semibold">{item.value}%</span>
                        </div>
                        <div className="progress-group-bars">
                          <CProgress thin color="warning" value={item.value} />
                        </div>
                      </div>
                    ))}

                  </CCol>
                </CRow>

                <br />

                <CTable align="middle" className="mb-0 border" hover responsive>
                  <CTableHead color="light">
                    <CTableRow>
                      <CTableHeaderCell className="text-center">
                        <CIcon icon={cilPeople} />
                      </CTableHeaderCell>
                      <CTableHeaderCell>USERS</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">NCRA NIN</CTableHeaderCell>
                      <CTableHeaderCell>NCRA NIN CONFIRM</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">NCRA NIN REJECT</CTableHeaderCell>

                    </CTableRow>
                  </CTableHead>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow></>
    )}
   
     
    </>
  )
}

export default Dashboard
