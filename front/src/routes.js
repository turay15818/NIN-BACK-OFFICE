import React from 'react'
import ResetPass from './views/base/crud/ResetPass'
import UpdateUsers from './views/base/crud/UpdateUsers'
import UsersList from './views/base/crud/UsersList'
import AdminReporting from './views/base/ncraData/AdminReporting'
import ConfirmedDataByAdmin from './views/base/ncraData/ConfirmedDataByAdmin'
import InfoData from './views/base/ncraData/InfoData'
import UpdateForm from './views/base/ncraData/UpdateForm'
import ViewDataRejectedByAdmin from './views/base/ncraData/ViewDataRejectedByAdmin'
import UsersConfirm from './views/base/users/UsersConfirm'
import UsersNcraNin from './views/base/users/UsersNcraNin'
import UsersReject from './views/base/users/UsersReject'
import UserUpdateForm from './views/base/users/UserUpdateForm'

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
  {
    path: '/base/ncraData/confirmedDataByAdmin',
    name: 'NCRA CONFIRM NIN',
    element: ConfirmedDataByAdmin,
  },
  {
    path: '/base/ncraData/viewDataRejectedByAdmin',
    name: 'NCRA REJECT NIN',
    element: ViewDataRejectedByAdmin,
  },
  { path: '/base/crud/usersList', name: 'Users', element: UsersList },
  { path: '/base/crud/resetPass', name: 'Users', element: ResetPass },
  { path: '/base/users/edit/:id', name: 'Tables', element: UpdateUsers },
  { path: '/base/ncraData/infoData/:id', name: 'Update NCRA Table', element: UpdateForm },
  { path: '/base/users/userNcraNin', name: 'NCRA NIN TABLE', element: UsersNcraNin },
  { path: '/base/users/usersConfirm', name: 'NCRA NIN CONFIRM TABLE', element: UsersConfirm },
  { path: '/base/users/infoData/:id', name: 'NCRA NIN REJECT TABLE', element: UsersReject },
  { path: '/base/users/userNcraNin/:id', name: 'Update NCRA Table', element: UserUpdateForm },
  { path: '/base/ncraData/adminReporting', name: 'Update NCRA Table', element: AdminReporting },
]

export default routes
