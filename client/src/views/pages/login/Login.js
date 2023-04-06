import React, { useState, useEffect } from 'react'
import { LoginUser, reset } from '../../../features/authSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
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
import axios from 'axios'
import moment from 'moment'

const Login = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth)

  const currentDate = moment().format('DD-MM-YYYY')
  const date = new Date()
  const current_time =
    date.getHours() + ':' + ' ' + date.getMinutes() + ':' + ' ' + date.getSeconds()
  const today = current_time + '  ' + currentDate

  useEffect(() => {
    if (user || isSuccess) {
      navigate('/dashboard')
    }
    dispatch(reset())
  }, [user, isSuccess, dispatch, navigate])

  const Auth = async (e) => {
    e.preventDefault()
    dispatch(LoginUser({ userEmail, userPassword }))
    const actor = user.userName
    const action = 'login'
    const performedDate = today
    await axios.post('http://localhost:4366/auditTrail', {
      actor,
      action,
      performedDate,
    })
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={Auth}>
                    <h1 className="text-center">Login</h1>
                    <p className="text-medium-emphasis text-center">Sign In to your account</p>
                    {isError && <p>{message}</p>}
                    <CInputGroup className="mb-3">
                      <CInputGroupText style={{ color: 'yellow', backgroundColor: 'black' }}>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        required
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
                        id="password"
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
                          id="login"
                          type="submit"
                          color="dark"
                          className="px-4"
                          style={{
                            border: '2px solid yellow',
                            color: 'yellow',
                          }}
                        >
                          {isLoading ? 'Loading...' : 'Login'}
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
