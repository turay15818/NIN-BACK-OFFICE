import React from 'react'
import ResetPass from './views/base/crud/ResetPass'
import UpdateUsers from './views/base/crud/UpdateUsers'
import UsersList from './views/base/crud/UsersList'
import InfoData from './views/base/ncraData/InfoData'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Base
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/base/ncraData/infoData', name: 'NCRA NIN', element: InfoData },
  { path: '/base/crud/usersList', name: 'Users', element: UsersList },
  { path: '/base/crud/resetPass', name: 'Users', element: ResetPass },
  { path: '/base/users/edit/:id', name: 'Tables', element: UpdateUsers },
]

export default routes
