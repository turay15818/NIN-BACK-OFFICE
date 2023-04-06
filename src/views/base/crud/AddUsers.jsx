/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";
import {
    CCol,
    CButton,
    CForm,
    CContainer,
    CRow,
    CFormInput,
    CFormSelect
} from '@coreui/react'
import { useDispatch, useSelector } from "react-redux";

const AddUsers = () => {
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
   

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4366/users", {
              userIDD: userIDD,
              userName:  userName,
              userPhone: userPhone,
              userEmail:userEmail,
              userPassword: userPassword,
              confPassword: confPassword,
              role: role,   
            });
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };
    return (
        <CRow>


            <CCol xs={12}>

                <CContainer sm>
                    <div className="container text-left">
                        <div className="row">
                            <div className="">

                                <CForm onSubmit={saveUser}>
                                    {isError && <p>{msg}</p>}
                                    <CFormInput
                                        value={userIDD}
                                        onChange={(e) => setUserIDD(e.target.value)}
                                        placeholder="OSL_20ITN_190"
                                        required
                                        type="text"
                                        className="input"
                                        id="idd"
                                        label="Staff ID"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />

                                    <CFormInput
                                        className="input"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        label="Staff Name"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />

                                    <CFormInput
                                        required
                                        id="phoneNumber"
                                        minLength={8}
                                        maxLength={13}
                                        type="number"
                                        className="input"
                                        value={userPhone}
                                        onChange={(e) => setUserPhone(e.target.value)}
                                        placeholder="23279366751"
                                        label="Phone Number"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />


                                    <CFormInput
                                        required
                                        id="email"
                                        className="input"
                                        value={userEmail}
                                        onChange={(e) => setUserEmail(e.target.value)}
                                        type="email"
                                        label="Email"
                                        placeholder="name@gmail.com"

                                    />
                                  
    
                                    <CFormInput
                                        required
                                        id="password"
                                        className="input"
                                        value={userPassword}
                                        onChange={(e) => setUserPassword(e.target.value)}
                                        type="password"
                                        label="Password"
                                        placeholder="Enoch!@222F"
                                        aria-describedby=""
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

                                    <hr />
                                    <div className="d-grid gap-2">
                                        <CButton  type="submit" id="addusers" style={{ marginRight: "4px", backgroundColor:"black", border:"2px solid yellow" }}>Save User</CButton>
                                    </div>

                                </CForm>

                            </div>
                        </div>
                    </div>

                </CContainer>

            </CCol>
        </CRow>
    );
};

export default AddUsers;




