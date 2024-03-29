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
  CFormTextarea
} from '@coreui/react'
import { useDispatch, useSelector } from "react-redux";

const UpdateForm = () => {
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
   
   

    const [confirm_status, setConfirm_status] = useState('');
    var [confirmBy_kyc, setConfirmBy_status] = useState(`${user&&user.userName}`);
   var [confirmDate, setConfirmDate] = useState(`${today}`);
   var [revisedReason, setRevisedReason] = useState("");
    const [msg, setMsg] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const getNinById = async () => {
          try {
            const response = await axios.get(
              `http://localhost:4366/ncra_nin_data/${id}`
            );
            
            setConfirm_status(response.data.confirm_status);
            setConfirmBy_status(response.data.confirmBy_kyc);
            setConfirmDate(response.data.confirmDate);
            setRevisedReason(response.data.revisedReason)
       
    
    
          } catch (error) {
            if (error.response) {
              setMsg(error.response.data.msg);
            }
          }
        };
        getNinById();
      }, [id]);
    

      //update request
      const updateRequest = async (e) => {
        e.preventDefault();
        try {
          await axios.patch(`http://localhost:4366/ncra_nin_data/${id}`, {
            confirm_status: confirm_status,
            confirmBy_kyc: confirmBy_kyc =(`${user&&user.userName}`),
            confirmDate: confirmDate =(`${today}`),
            revisedReason:revisedReason
          });
    
          const actor = user.userName; 
          const action =` Admin ${user.userName} update NCRA NIN request`;
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
                      type="hidden"
                      value={user&&user.userName}
                      onChange={(e)=> setConfirmBy_status(e.target.value)}
                      placeholder="Your Name"
                      autoComplete="text"
                   
                      /><br/><br/>
                    <CInputGroup className="mb-3">
                    <CFormSelect 
                        aria-label="Default select example"
                        value={confirm_status}
                        onChange={(e) => setConfirm_status(e.target.value)}
                         >
                          <option>select menu</option>
                          <option value="confirmed">ApprovedBy</option>
                          <option value="Rejected">RejectedBy</option>
                          <option value="Pending">RevisedBy</option>
                                
                    </CFormSelect>
                    </CInputGroup>
                    <CFormInput
                      type="hidden"
                      value={today}
                      onChange={(e)=> setConfirmDate(e.target.value)}
                      placeholder="Your Name"
                      autoComplete="text"
                   
                      />
                      <CFormTextarea
                         id="floatingTextarea"
                         floatingLabel="Comments"
                         placeholder="Reason "
                         value={revisedReason}
                         onChange={(e) =>setRevisedReason(e.target.value)}
                     ></CFormTextarea>
                     
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

export default UpdateForm;




