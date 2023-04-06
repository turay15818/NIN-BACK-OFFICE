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
import moment from 'moment'
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;



const AdminReporting = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [ninSearch, setNinSearch] = useState([])
  const { user } = useSelector((state) => state.auth);


  
  const currentDate = moment().format('DD-MM-YYYY')
  const date = new Date();
  const current_time = date.getHours() + ":" + " " + date.getMinutes() + ":" + " " + date.getSeconds();
  const today = current_time + "  " + currentDate;
 


  useEffect(() => {
    const fetchNinSearch = async () => {
      const result = await axios.post(
        'http://localhost:4366/ninSearch',
      )
      setNinSearch(result.data)
    }
    fetchNinSearch()
  }, [startDate, endDate])
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post( 'http://localhost:4366/ninSearch', {
             startDate:startDate,
             endDate:endDate
    })
    setNinSearch(response.data)
    const actor = user.userName; 
    const action = 'Admin Search Reporting';
    const performedDate = today;
    await axios.post('http://localhost:4366/auditTrail', { 
      actor, 
      action, 
      performedDate,
    });
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
                  <CCol md={5} style={{ marginTop: '-360px' }}>


                  <CButton color="dark" style={{ border: "solid 2px yellow", margin: '2px', borderRadius: '3px', width:"20%", height:"6vh" }}>
                             <Link to="/base/ncraData/infoData" style={{ color: "yellow", textDecoration: "none", fontWeight: 700 }}>
                            Go Back
                           </Link>
                    </CButton>
            
                      <CCardGroup>
                          <CCard className="p-4">
                              <CCardBody>
                                  <CForm onSubmit={handleSubmit}>
                                      <p className="text-medium-emphasis text-center">
                                          Report
                                      </p>

                                      <label htmlFor="end-date-picker">Start Date</label>
                                       <ReactDatetime
                                            id="startdate"
                                            input={true}
                                             timeFormat={"HH:mm:ss"}
                                             dateFormat={"YYYY-MM-DD"}
                                             value={startDate}
                                             onChange={(moment) => setStartDate(moment)}
                                            /> 

                                         
                                         <label htmlFor="end-date-picker">End Date</label>
                                         <ReactDatetime
                                            id="enddate"
                                            input={true}
                                             timeFormat={"HH:mm:ss"}
                                             dateFormat={"YYYY-MM-DD"}
                                             value={endDate}
                                             onChange={(moment) => setEndDate(moment)}
                                             placeholder="end date"
                                            />
                                     {/* <CFormInput
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        placeholder="start date and time"
                                        required
                                        type="text"
                                        className="input"
                                        id="startdate"
                                        label="start date"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />

                                    <CFormInput
                                        className="input"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        placeholder="end date and time"
                                        type="text"
                                        id="enddate"
                                        label="end date"
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                      */}
                                         
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
      </div><CRow>

                  <CCol xs={14}  style={{ marginTop: '-350px' }}>
                      <CCard>
                          <CCardHeader>
                              <strong>Report</strong>
                          </CCardHeader>
                          <CCardBody>
                              <Table hover size="sm" responsive id="reports">
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
                                      {ninSearch.map((ninSearch, index) => (
                                          <tr key={ninSearch.id}>
                                              <td>{index + 1}</td>
                                              <td>{ninSearch.confirmnininfo_by_customer}</td>
                                              <td>{ninSearch.date_created}</td>
                                              <td>{ninSearch.dateofbirth}</td>
                                              <td>{ninSearch.fullname}</td>
                                              <td>{ninSearch.gender}</td>
                                              <td>{ninSearch.id_number}</td>
                                              <td>{ninSearch.id_type}</td>
                                              <td>{ninSearch.nationality}</td>
                                              <td>{ninSearch.permanent_residential_address}</td>
                                              <td>{ninSearch.confirm}</td>
                                              <td>{ninSearch.confirmName}</td>
                                              <td>{ninSearch.confirmDate}</td>

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
export default AdminReporting
