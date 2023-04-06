/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams,useNavigate, Link } from "react-router-dom";
import {
    CCard,
    CListGroup,
    CListGroupItem,
    CCardHeader,
    CCol,
    CContainer,
    CRow,
    CButton,
} from '@coreui/react'
import { getMe } from "../../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdPendingActions } from 'react-icons/md';



const ViewDetail = () => {
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





    const [confirmnininfo_by_customer, setConfirmation_by_customer] = useState([]);
    const [date_created, setDate_created] = useState([]);
    const [dateofbirth, setDateofbirth] = useState([]);
    const [fullname, setFullname] = useState([]);
    const [gender, setGender] = useState([]);
    const [id_number, setId_number] = useState([]);
    const [id_type, setId_type] = useState([]);
    const [nationality, setNationality] = useState([]);
    const [permanent_residential_address, setPermanent_residential_address] = useState([]);
    const [confirm, setConfirm] = useState([]);


    const [msg, setMsg] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const getNinById = async () => {
            try {
                const response = await axios.get(`http://localhost:4366/nin/${id}`);
                setConfirmation_by_customer(response.data.confirmnininfo_by_customer);
                setDate_created(response.data.date_created);
                setDateofbirth(response.data.dateofbirth);
                setFullname(response.data.fullname);
                setGender(response.data.gender);
                setId_number(response.data.id_number);
                setId_type(response.data.id_type);
                setNationality(response.data.nationality);
                setPermanent_residential_address(response.data.permanent_residential_address);
                setConfirm(response.data.confirm);
                console.log(response)
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
            
        };
        getNinById();
    }, [id]);


    
    const cent={
        paddingLeft:'100px',
        fontSize:'15px',
        marginTop:'60px',
        color:'#ff6600',
        paddingTop:'80px',
        border:'none'
    }



    const det ={
        fontSize:'15px'
    }

    return (



        <CRow>
            <CCol xs={12}>
                <CContainer sm>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                            {user&&user.role ==="user" &&(
                             <CButton color="dark" style={{ border: "solid 2px yellow", margin: '2px', borderRadius: '3px', width:"20%", height:"6vh" }}>
                             <Link to="/base/users/userNcraNin" style={{ color: "yellow", textDecoration: "none", fontWeight: 700 }}>
                            <MdPendingActions style={{ color: "yellow", fontSize: "30px" }} />  Back
                           </Link>
                             </CButton>
                             )}
            
                                <CCard style={{ width: '35rem', }}>
                                    <CCardHeader style={{ textAlign: "center", fontSize:'20px' }}>Orange Sierra Leone</CCardHeader>
                                    <h5 style={{ textAlign: "center" }}>NIN NCRA DETAIL</h5>
                                    {isError&&<p>{msg}</p>}
                                    <CListGroup flush>
                                        <CListGroupItem style={{  }}>
                                            <div>
                                               <h4  style={{marginTop:'30px'}}><span style={cent}>Confirmnininfo_by_customer:</span><span style={det}>{" " + " " + confirmnininfo_by_customer}</span> </h4>
                                            </div>
                                        </CListGroupItem>

                                        <CListGroupItem>
                                            <div>
                                             <h4  style={{marginTop:'10px'}}><span style={cent}>Date_created:</span><span style={det}>{" " + " " + date_created}</span> </h4>
                                            </div>
                                        </CListGroupItem>


                                        <CListGroupItem>
                                          <div>
                                             <h4  style={{marginTop:'10px'}}><span style={cent}>Fullname:</span><span style={det}> {" " + " " + fullname}</span> </h4>
                                           </div>
                                        </CListGroupItem>


                                        <CListGroupItem>
                                        <div>
                                           <h4  style={{marginTop:'10px'}}><span style={cent}>Dateofbirth:</span> <span style={det}>{" " + " " + dateofbirth}</span>  </h4>
                                        </div>
                                        </CListGroupItem>

                                        <CListGroupItem>
                                        <div>
                                           <h4  style={{marginTop:'10px'}}><span style={cent}>Gender:</span> <span style={det}> {" " + " " + gender}</span> </h4>
                                        </div>
                                        </CListGroupItem>

                                        <CListGroupItem>
                                        <div>
                                           <h4 style={{marginTop:'10px'}}><span style={cent}>Id_number:</span> <span style={det}>{" " + " " + id_number}</span>  </h4>
                                        </div>
                                        </CListGroupItem>

                                        
                                        <CListGroupItem>
                                        <div>
                                            <h4 style={{marginTop:'10px'}} ><span style={cent}>Nationality:</span> <span style={det}>{" " + " " + nationality}</span> </h4>
                                        </div>
                                        </CListGroupItem>

                                        
                                        <CListGroupItem>
                                        <div>
                                          <h4 style={{marginTop:'10px'}} ><span style={cent}>Id_type:</span> <span style={det}>  {" " + " " + id_type}</span></h4>
                                         </div> 
                                       </CListGroupItem>

                                        
                                        <CListGroupItem>
                                        <div>
                                           <h4 style={{marginTop:'10px'}}><span style={cent}>Permanent_residential_address:</span> <span style={det}> {" " + " " + permanent_residential_address}</span> </h4>
                                        </div>
                                        </CListGroupItem>

                                        
                                        <CListGroupItem>
                                        <div>
                                           <h4 style={{marginTop:'10px'}}><span style={cent}>Confirm:</span> <span style={det}>{" " + " " + confirm}</span>  </h4>
                                        </div>
                                        </CListGroupItem>
                                     
                                    </CListGroup>
                                </CCard>


                            </div>
                        </div>
                    </div>
                </CContainer>
            </CCol>
        </CRow>
    )
};

export default ViewDetail;
