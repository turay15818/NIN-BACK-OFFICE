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
  CInputGroup,
  CFormSelect,
  CFormInput,
  CRow,
} from '@coreui/react'
import { useDispatch, useSelector } from "react-redux";

const EditNcraConfirm = () => {
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
    const current_time = date.getHours() + ":" + " " + date.getMinutes() + ":" + " " + date.getSeconds();
    const today = current_time + "  " + currentDate;
   
   

    const [confirm, setConfirm] = useState('');
    var [confirmName, setConfirmName] = useState(`${user.userName}`);
   var [confirmDate, setConfirmDate] = useState(`${today}`);
    const [msg, setMsg] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const getNinById = async () => {
          try {
            const response = await axios.get(
              `http://localhost:4366/nin/${id}`
            );
            
            setConfirm(response.data.confirm);
            setConfirmName(response.data.confirmName);
            setConfirmDate(response.data.confirmDate);
       
    
    
          } catch (error) {
            if (error.response) {
              setMsg(error.response.data.msg);
            }
          }
        };
        getNinById();
      }, [id]);
    
      const updateRequest = async (e) => {
        e.preventDefault();
        try {
          await axios.patch(`http://localhost:4366/nin/${id}`, {
            confirm: confirm,
            confirmName: confirmName,
            confirmDate: confirmDate,
          });
          const actor = user.userName; 
          const action = 'updated NIN request';
          const performedDate = today;
          await axios.post('http://localhost:4366/auditTrail', { 
            actor, 
            action, 
            performedDate,
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
                  <CForm onSubmit={updateRequest}>
                    <h5 className="title is-2" style={{ textAlign: "center" }}>Update Request</h5>
                    <p className="text-medium-emphasis" style={{ textAlign: "center" }}>By Approve or Reject</p>
                    {isError&& <p>{msg}</p>}
                    <CFormInput
                      type="text"
                      value={user.userName}
                      onChange={(e)=> setConfirmName(e.target.value)}
                      placeholder="Your Name"
                      autoComplete="text"
                   
                      /><br/><br/>
                    <CInputGroup className="mb-3">
                    <CFormSelect 
                        aria-label="Default select example"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                         >
                          <option>select menu</option>
                          <option value="confirmed">Approved</option>
                          <option value="Rejected">Rejected</option>
                          <option value="Pending">Revised</option>
                                
                    </CFormSelect>
                    </CInputGroup>
                    <CFormInput
                      type="text"
                      value={today}
                      onChange={(e)=> setConfirmDate(e.target.value)}
                      placeholder="Your Name"
                      autoComplete="text"
                   
                      />
                     
                    <CRow>
                      <CCol xs={6}>
                        <hr />

                        <div className="d-grid gap-2">
                          <CButton id="login" style={{ backgroundColor: '#ff6600', border: 'solid 2px #ff6600' }} type="submit">Submit</CButton>
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

export default EditNcraConfirm;




