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
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;



const AdminReporting = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [ninSearch, setNinSearch] = useState([])


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
                  <CCol md={5} style={{ marginTop: '-370px' }}>
                      <CCardGroup>
                          <CCard className="p-4">
                              <CCardBody>
                                  <CForm onSubmit={handleSubmit}>
                                      <p className="text-medium-emphasis text-center">
                                          Report
                                      </p>

                                      <label htmlFor="end-date-picker">Start Date</label>
                                       <ReactDatetime
                                            input={true}
                                             timeFormat={"HH:mm:ss"}
                                             dateFormat={"YYYY-MM-DD"}
                                             value={startDate}
                                             onChange={(moment) => setStartDate(moment)}
                                            />

                                         
                                         <label htmlFor="end-date-picker">End Date</label>
                                         <ReactDatetime
                                            input={true}
                                             timeFormat={"HH:mm:ss"}
                                             dateFormat={"YYYY-MM-DD"}
                                             value={endDate}
                                             onChange={(moment) => setEndDate(moment)}
                                             placeholder="end date"
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
      </div><CRow>

                  <CCol xs={14}  style={{ marginTop: '-380px' }}>
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
