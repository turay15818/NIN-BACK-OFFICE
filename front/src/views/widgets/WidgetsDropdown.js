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
    </CRow>
  )
}

export default WidgetsDropdown
