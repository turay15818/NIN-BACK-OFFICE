import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://orangel.sl" target="_blank" rel="noopener noreferrer">
          NIN BACK-OFFICE
        </a>
        <span className="ms-1">&copy; 2023 ITN.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://orangel.sl" target="_blank" rel="noopener noreferrer">
          Orange Sl
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
