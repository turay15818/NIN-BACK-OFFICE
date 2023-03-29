/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await axios.get('http://localhost:4366/users')
    setUsers(response.data)
  }

  const [nin, setNin] = useState([]);

  useEffect(() => {
    getNin();
  }, []);

  const getNin = async () => {
    const response = await axios.get("http://localhost:4366/nin");
    setNin(response.data);
    console.log(response)
  };


  const [dataByRejected, setDataByRejected] = useState([]);

  useEffect(() => {
    getDataByRejected();
  }, []);

  const getDataByRejected = async () => {
    const response = await axios.get("http://localhost:4366/dataByRejected");
    setDataByRejected(response.data);
    // console.log(response)
  };

  const [dataByConfirmed, setDataByConfirmed] = useState([]);

  useEffect(() => {
    getDataByConfirmed();
  }, []);

  const getDataByConfirmed = async () => {
    const response = await axios.get("http://localhost:4366/dataByConfirmed");
    setDataByConfirmed(response.data);
    // console.log(response)
  };

  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="dark"
          value={
            <>
              {users.length}

              <span className="fs-6 fw-normal">
                ({users.length}% <CIcon icon={cilArrowTop} />)
              </span>
              <img
                src="https://www.svgrepo.com/show/41634/24-hours.svg"
                alt=""
                style={{ width: '60px', marginLeft: '15px', marginTop: '5px' }}
              />
            </>
          }
          title="All Users"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
            </CDropdown>
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="dark"
          value={
            <>
              {dataByConfirmed.length}

              <span className="fs-6 fw-normal">
                ({dataByConfirmed.length}% <CIcon icon={cilArrowTop} />)
              </span>
              <img
                src="https://www.svgrepo.com/show/41634/24-hours.svg"
                alt=""
                style={{ width: '60px', marginLeft: '15px', marginTop: '5px' }}
              />
            </>
          }
          title="NCRA CONFIRM DATA"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
            </CDropdown>
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="dark"
          value={
            <>
              {nin.length}

              <span className="fs-6 fw-normal">
                ({nin.length}% <CIcon icon={cilArrowTop} />)
              </span>
              <img
                src="https://www.svgrepo.com/show/41634/24-hours.svg"
                alt=""
                style={{ width: '60px', marginLeft: '15px', marginTop: '5px' }}
              />
            </>
          }
          title="NCRA NIN DATA"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
            </CDropdown>
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="dark"
          value={
            <>
              {dataByRejected.length}

              <span className="fs-6 fw-normal">
                ({dataByRejected.length}% <CIcon icon={cilArrowTop} />)
              </span>
              <img
                src="https://www.svgrepo.com/show/41634/24-hours.svg"
                alt=""
                style={{ width: '60px', marginLeft: '15px', marginTop: '5px' }}
              />
            </>
          }
          title="NCRA DATA REJECTED"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
            </CDropdown>
          }
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
