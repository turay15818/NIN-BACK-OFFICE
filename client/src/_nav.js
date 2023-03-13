import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilStar, cilUserFemale } from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'warning',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/base/crud/usersList',
    icon: <CIcon icon={cilUserFemale} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'NCRA NIN',
    to: '/base/ncraData/infoData',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
]

export default _nav
