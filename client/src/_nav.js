import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilStar,
  cilUserFemale,
  cilTask,
  cilBackspace,
  cilAirplay,
  CNavGroup,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'DASHBOARD',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'NCRA NIN',
    to: '/base/ncraData/infoData',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'CONFIRMED NIN',
    to: '/base/ncraData/confirmedDataByAdmin',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'REJECTED NIN',
    to: '/base/ncraData/viewDataRejectedByAdmin',
    icon: <CIcon icon={cilBackspace} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'USERS',
    to: '/base/crud/usersList',
    icon: <CIcon icon={cilUserFemale} customClassName="nav-icon" />,
  },
]

export default _nav
