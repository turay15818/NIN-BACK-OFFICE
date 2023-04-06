import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span> NIN BACK-OFFICE</span>
        <span className="ms-1">&copy; 2023</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <span>ORANGE SL</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
