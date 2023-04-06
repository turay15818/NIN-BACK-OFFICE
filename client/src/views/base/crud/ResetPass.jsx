/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
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
import {cilUser } from '@coreui/icons'
import moment from 'moment'
import { useSelector } from "react-redux";

const ResetPass = () => {

  const [userEmail, setUserEmail] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);


  const currentDate = moment().format('DD-MM-YYYY')
  const date = new Date();
  const current_time = date.getHours() + ":" + " " + date.getMinutes() + ":" + " " + date.getSeconds();
  const today = current_time + "  " + currentDate;

  const SendResetLink = async (e) => {
      e.preventDefault();
      try {
          await axios.post("http://localhost:4366/forgotPassword/", {
            userEmail: userEmail,

          });
          const actor = user.userName; 
          const action = 'Reset Password Form';
          const performedDate = today;
          await axios.post('http://localhost:4366/auditTrail', { 
          actor, 
          action, 
          performedDate,
          });
          navigate("/base/crud/usersList");
      } catch (error) {
          if (error.response) {
              setMessage(error.response.data.message);
          }
      }
  };



  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center login-page">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5} style={{ marginTop: '-300px' }}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={SendResetLink}>
                    <h5 className="title is-2" style={{ textAlign: "center" }}>Reset Password</h5>
                    <p className="text-medium-emphasis" style={{ textAlign: "center", fontWeight:"bold" }}>Enter your Email</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        required
                        id="email"
                        className="input"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        type="email"
                        // label="Email address"
                        placeholder="name@example.com"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={8}>
                        <hr />

                        <div className="d-grid gap-1">
                          <CButton id="forgetpassword" style={{ backgroundColor: '#000000', border: 'solid 2px yellow' }} type="submit">Send Email</CButton>
                        </div>

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

export default ResetPass;
