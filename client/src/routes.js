import React from 'react'
import ViewDetails from './views/base/admin/ViewDetails'
import AuditTrail from './views/base/auditTrail/AuditTrail'
import ResetPass from './views/base/crud/ResetPass'
import UpdateUsers from './views/base/crud/UpdateUsers'
import UsersList from './views/base/crud/UsersList'
import AdminReporting from './views/base/ncraData/AdminReporting'
import ConfirmedDataByAdmin from './views/base/ncraData/ConfirmedDataByAdmin'
import InfoData from './views/base/ncraData/InfoData'
import NinReporting from './views/base/ncraData/NinReporting'
import UpdateForm from './views/base/ncraData/UpdateForm'
import ViewDataRejectedByAdmin from './views/base/ncraData/ViewDataRejectedByAdmin'
import UsersConfirm from './views/base/users/UsersConfirm'
import UsersNcraNin from './views/base/users/UsersNcraNin'
import UsersReject from './views/base/users/UsersReject'
import UserUpdateForm from './views/base/users/UserUpdateForm'
import ViewDetail from './views/base/users/ViewDetail'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
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
  { path: '/base/users/infoData/userReject', name: 'NCRA NIN REJECT TABLE', element: UsersReject },
  { path: '/base/users/userNcraNin/:id', name: 'Update NCRA Table', element: UserUpdateForm },
  { path: '/base/users/userNcraNin/get/:id', name: 'Update NCRA Table', element: ViewDetail },
  { path: '/base/ncraData/adminReporting', name: 'Reporting NCRA Table', element: AdminReporting },
  { path: '/base/ncraData/ninReporting', name: 'Nin Search NCRA Table', element: NinReporting },
  { path: '/base/admin/infoData/get/:id', name: 'Update NCRA NIN', element: ViewDetails },
  { path: '/base/auditTrail/auditTrail', name: 'Audit Traile', element: AuditTrail },
]

export default routes
