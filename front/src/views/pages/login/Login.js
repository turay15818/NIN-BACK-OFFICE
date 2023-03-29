import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (userEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(userEmail)
  }

  const validatePassword = (userPassword) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return passwordRegex.test(userPassword)
  }

  const handleLogin = (event) => {
    event.preventDefault()
    if (!validateEmail(userEmail)) {
      setError('Invalid email')
    } else if (!validatePassword(userPassword)) {
      setError('Invalid password')
    } else {
      // make API call to log in user
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleLogin}>
                    <h1 className="text-center">Login</h1>
                    <p className="text-medium-emphasis text-center">Sign In to your account</p>
                    {error && <p>{error}</p>}
                    <CInputGroup className="mb-3">
                      <CInputGroupText style={{ color: 'yellow', backgroundColor: 'black' }}>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        // required
                        id="email"
                        className="input"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        type="email"
                        placeholder="email"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText style={{ color: 'yellow', backgroundColor: 'black' }}>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        required
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <hr />
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          type="submit"
                          color="dark"
                          className="px-4"
                          style={{
                            border: '2px solid yellow',
                            color: 'yellow',
                          }}
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
