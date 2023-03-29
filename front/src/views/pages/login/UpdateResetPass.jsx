/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import {useSelector } from 'react-redux'
import {
    CModalBody,
    CModalTitle,
    CModalHeader,
    CModal,
    CCardGroup,
    CCard,
    CCol,
    CButton,
    CForm,
    CContainer,
    CRow,
    CFormInput,
} from '@coreui/react'

const UpdateResetPass = () => {
    const [userPassword, setUserPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [message, setMessage] = useState('');
    const { token } = useParams();
    const { isError} = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userPassword !== confPassword) {
            setMessage('Passwords do not match');
            return;
        }

    axios.post(`http://localhost:4366/reset-password/${token}`, {
      userPassword,
        confPassword,
        
    })
    .then((res) => {
        setMessage(res.data.message);
    })
    .catch((err) => {
        console.log(err);
    });
    }
    return (

<div className="min-vh-100 d-flex flex-row align-items-center"
style={{
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}
>
<CContainer >
  <CRow className="justify-content-center">
    <CCol md={4}>
      <CCardGroup>
        <CCard className="p-4">
        <h4 className="has-text-centered" style={{fontSize:'15px', textAlign:"center", color:"#ff6600"}}>{message}</h4>
          <CForm onSubmit={handleSubmit} className="box" style={{ width: "100%" }}>
            <h4 className="title is-4" style={{ textAlign: "center", fontWeight:' 800', fontSize:'15px' }}>Update your New Password</h4>
            <CFormInput
              required
              id="email"
              className="input"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              type="password"
              label="Password"
              placeholder="Password"
              aria-describedby="exampleFormControlInputHelpInline"
            />
            <CFormInput
              required
              id="confPassword"
              minLength={8}
              type="password"
              className="input"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              placeholder="******"
              label="confirm Password"
              aria-describedby="exampleFormControlInputHelpInline"
            />

            <hr />

            <div className="d-grid gap-2">
              <CButton id="login" style={{ backgroundColor: 'black', border: 'solid 2px yellow' }} type="submit">Update Password</CButton>
            </div>
          </CForm>
        </CCard>
      </CCardGroup>
    </CCol>
  </CRow>
</CContainer>
</div>
    );
};

export default UpdateResetPass;





