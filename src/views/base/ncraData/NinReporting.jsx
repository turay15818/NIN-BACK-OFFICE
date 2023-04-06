/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CCardHeader,
    CRow,
    CFormInput,
  } from '@coreui/react'
import ReactDatetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import 'datatables.net-buttons/js/buttons.flash.min.js'
import * as jzip from 'jszip';
import 'pdfmake';
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { MdPendingActions } from 'react-icons/md';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;



const NinReporting = () => {
  const [userId, setUserId] = useState('')
  const [ninSearchh, setNinSearchh] = useState([])
  const { user } = useSelector((state) => state.auth);


//   useEffect(() => {
//     const fetchNinSearch = async () => {
//       const result = await axios.post(
//         'http://localhost:4366/ninSearchh',
//       )
//       setNinSearch(result.data)
//     }
//     fetchNinSearch()
//   }, [startDate, endDate])
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post( 'http://localhost:4366/ninSearchh', {
             userId:userId
    })
    setNinSearchh(response.data)
  }

  $(document).ready(function () {
    setTimeout(function () {
        $('#report').DataTable(
            {
                pagingType: 'full_numbers',
                pageLength: 4,
                processing: true,
                dom: 'Bfrtip',
                destroy: true,
                buttons: ['copy', 'csv', 'excel', 'pdf', 'print'
                ]
            }
        );
    },
        1000
    );
});
  


  return (
    <><div className="bg-light min-vh-100 d-flex flex-row align-items-center login-page">
          <CContainer>
              <CRow className="justify-content-center">
              {user&&user.role ==="admin" &&(
                             <CButton color="dark" style={{ border: "solid 2px yellow", margin: '2px', borderRadius: '3px', width:"20%", height:"6vh" }}>
                             <Link to="/base/ncraData/infoData" style={{ color: "yellow", textDecoration: "none", fontWeight: 700 }}>
                            <MdPendingActions style={{ color: "yellow", fontSize: "30px" }} />  Back
                           </Link>
                             </CButton>
                             )}
                  <CCol md={5} style={{ marginTop: '-370px' }}>
                      <CCardGroup>
                          <CCard className="p-4">
                              <CCardBody>
                                  <CForm onSubmit={handleSubmit}>
                                      <p className="text-medium-emphasis text-center">
                                         NIN Search Reporting
                                      </p>
                                     <CFormInput
                                        value={userId}
                                        onChange={(e) => setUserId(e.target.value)}
                                        placeholder="start date and time"
                                        required
                                        type="text"
                                        className="input"
                                        id="startdate"
                                        label="Nin Search"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                      <CRow>
                                          <CCol xs={8}>
                                              <hr />

                                              <div className="d-grid gap-2">
                                                  <CButton
                                                      id="login"
                                                      style={{ backgroundColor: 'black', border: 'solid 2px yellow' }}
                                                      type="submit"
                                                  >
                                                      Submit
                                                  </CButton>
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
      <CRow>

                  
                  <CCol xs={14}  style={{ marginTop: '-380px' }}>
                      <CCard>
                          <CCardHeader>
                              <strong>Report</strong>
                          </CCardHeader>
                          <CCardBody>
                              <Table hover size="sm" id="reports" responsive >
                                  <thead className="thead-dark">
                                      <tr>
                                          <th>No</th>
                                          <th>conf Customer</th>
                                          <th>Date Created</th>
                                          <th>DOB</th>
                                          <th>FullName</th>
                                          <th>Gender</th>
                                          <th>IDNO</th>
                                          <th>IDType</th>
                                          <th>Nationality</th>
                                          <th>Per Resident</th>
                                          <th>Status</th>
                                          <th>Name</th>
                                          <th>Date</th>

                                      </tr>
                                  </thead>
                                  <tbody>
                                      {ninSearchh.map((ninSearchh, index) => (
                                          <tr key={ninSearchh.id}>
                                              <td>{index + 1}</td>
                                              <td>{ninSearchh.confirmnininfo_by_customer}</td>
                                              <td>{ninSearchh.date_created}</td>
                                              <td>{ninSearchh.dateofbirth}</td>
                                              <td>{ninSearchh.fullname}</td>
                                              <td>{ninSearchh.gender}</td>
                                              <td>{ninSearchh.id_number}</td>
                                              <td>{ninSearchh.id_type}</td>
                                              <td>{ninSearchh.nationality}</td>
                                              <td>{ninSearchh.permanent_residential_address}</td>
                                              <td>{ninSearchh.confirm}</td>
                                              <td>{ninSearchh.confirmName}</td>
                                              <td>{ninSearchh.confirmDate}</td>

                                          </tr>
                                      ))}
                                  </tbody>
                              </Table>
                          </CCardBody>
                      </CCard>
                  </CCol>
          </CRow></>
  )
}
export default NinReporting
