/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getMe } from "../../../features/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
    CModalBody,
    CModalTitle,
    CModalHeader,
    CModal,
    CCol,
    CButton,
    CForm,
    CContainer,
    CRow,
    CFormInput,
    CFormSelect,
    CCardGroup,
    CCard,
    CCardBody
} from '@coreui/react'
import moment from 'moment'



const UpdateUsers = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/");
        }
    }, [isError, navigate]);





    const [userIDD, setUserIDD] = useState("");
    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");
    const { id } = useParams();

    const currentDate = moment().format('DD-MM-YYYY')
    const date = new Date();
    const current_time = date.getHours() + ":" + " " + date.getMinutes() + ":" + " " + date.getSeconds();
    const today = current_time + "  " + currentDate;

    useEffect(() => {
        const getUserById = async () => {
            try {
                const response = await axios.get(`http://localhost:4366/users/${id}`);
                setUserIDD(response.data.userIDD);
                setUserName(response.data.userName);
                setUserPhone(response.data.userPhone);
                setUserEmail(response.data.userEmail)
                setRole(response.data.role);
               
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getUserById();
    }, [id]);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:4366/users/${id}`,{
                userIDD: userIDD,
                userName:  userName,
                userPhone: userPhone,
                userEmail:userEmail,
                userPassword: userPassword,
                confPassword: confPassword,
                role: role,
            });
            const actor = user.userName; 
            const action = 'Update Users';
            const performedDate = today;
            await axios.post('http://localhost:4366/auditTrail', { 
            actor, 
            action, 
            performedDate,
            });
            navigate("/base/userList");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    
    return (


<div className="bg-light min-vh-100 d-flex flex-row align-items-center ">
<CContainer>

    

  <CRow className="justify-content-center"  >
    <CCol md={5} >
      <CCardGroup>
        <CCard className="p-4">
          <CCardBody>
            <CForm onSubmit={updateUser}>
              <h5 className="title is-2" style={{ textAlign: "center" }}>Update Users</h5>
               {isError&& <p>{msg}</p>}
       
                                    <CFormInput
                                        className="input"
                                        value={userIDD}
                                        onChange={(e) => setUserIDD(e.target.value)}
                                        placeholder="staffid"
                                        type="text"
                                        id="idd"
                                        label="Staff ID"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />

             
       
                                    <CFormInput
                                        required
                                        id="name"
                                        className="input"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        type="text"
                                        label="Name"
                                        placeholder="fullname"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />

             
                                    <CFormInput
                                        required
                                        id="Phone"
                                        minLength={9}
                                        type="number"
                                        className="input"
                                        value={userPhone}
                                        onChange={(e) => setUserPhone(e.target.value)}
                                        placeholder="23278211110"
                                        label="Phone No"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />

        
                                    <CFormInput
                                        required
                                        id="email"
                                        minLength={8}
                                        type="email"
                                        className="input"
                                        value={userEmail}
                                        onChange={(e) => setUserEmail(e.target.value)}
                                        placeholder="name@gmail.com"
                                        label="Email"
                                        aria-describedby="exampleFormControlInput"
                                    />

        
            
                                    <CFormInput
                                        required
                                        id="Password"
                                        minLength={8}
                                        type="password"
                                        className="input"
                                        value={userPassword}
                                        onChange={(e) => setUserPassword(e.target.value)}
                                        placeholder="******"
                                        label="Password"
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
                                        label="Confirm Password"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />

                                    <CFormSelect aria-label="Default select example"
                                       value={role}
                                       onChange={(e) => setRole(e.target.value)}
                                       style={{marginTop:'10px'}}
                                    >
                                            <option value="">Select</option>
                                            <option value="admin" id="director">Admin</option>
                                            <option value="user" id="user">User</option>
                                    </CFormSelect>

                                    
   

              <CRow>
                <CCol xs={6}>
                  <hr />

                  <div className="d-grid gap-2">
                    <CButton id="updateusers" style={{ backgroundColor: 'black', border: 'solid 2px yellow' }} type="submit">Submit</CButton>
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

    );
};

export default UpdateUsers;


