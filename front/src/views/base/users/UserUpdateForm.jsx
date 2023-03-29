/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,  useParams } from "react-router-dom";
import moment from "moment";
import { getMe } from "../../../features/authSlice";
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
  CFormSelect,
  
  CRow,
} from '@coreui/react'
import { useDispatch, useSelector } from "react-redux";

const UserUpdateForm = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/base/ncraData/infoData");
        }
    }, [isError, navigate]);

    const currentDate = moment().format('DD-MM-YYYY')
    const date = new Date();
    const current_time = date.getHours() + ":" + " " + date.getMinutes();
    const today = current_time + "  " + currentDate;
    const staff = user && user.userName


    const [confirmName, setConfirmName] = useState(`${staff}`);
    const [confirm, setConfirm] = useState("");
    const [confirmDate, setConfirmDate] = useState(`${today}`);
    const [msg, setMsg] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const getNinById = async () => {
          try {
            const response = await axios.get(
              `http://localhost:4366/nin/${id}`
            );
            
            setConfirmName(response.data.confirmName);
            setConfirm(response.data.confirm);
            setConfirmDate(response.data.confirmDate);
       
    
    
          } catch (error) {
            if (error.response) {
              setMsg(error.response.data.msg);
            }
          }
        };
        getNinById();
      }, [id]);
    
      const updateNin = async (e) => {
        e.preventDefault();
        try {
          await axios.patch(`http://localhost:4366/nin/${id}`, {
           
           
          confirmName:confirmName,
          confirm:confirm,
          confirmDate:confirmDate
            
          });
          navigate("/base/ncraData/infoData");
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      };
    return (
       
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center login-page">
      <CContainer>
        <CRow className="justify-content-center"  >
          <CCol md={5} style={{marginTop:'-100px'}}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={updateNin}>
                    <h5 className="title is-2" style={{ textAlign: "center" }}>Update Request</h5>
                    <p className="text-medium-emphasis" style={{ textAlign: "center" }}>By Approve or Reject</p>
                    {isError && <p>{msg}</p>}
                      <CFormInput
                      hidden
                      type="text"
                      value={staff}
                      onChange={(e)=> setConfirmName(e.target.value)}
                      placeholder="Your Name"
                      autoComplete="text"
                   
                      /><br/><br/>
                   
                   
                    <CInputGroup className="mb-3">
                   
                      <CFormSelect aria-label="Default select example"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                          
                                 
                         >
                            <option>Confirm Status</option>
                            <option value="confirmed">Approved</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Pending">Pending</option>
                                
                      </CFormSelect>
                    </CInputGroup>
                    <CFormInput
                      hidden
                      type="text"
                      value={today}
                      onChange={(e) =>setConfirmDate(e.target.value)}
                      placeholder="Password"
                    
                      />

                    <CRow>
                      <CCol xs={6}>
                        <hr />

                        <div className="d-grid gap-2">
                          <CButton id="login" style={{ backgroundColor: 'black', border: 'solid 2px yellow' }} type="submit">Submit</CButton>
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

export default UserUpdateForm;




