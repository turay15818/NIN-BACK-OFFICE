/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {
    CButton,
    CCol,
    CRow,
    CCard,
    CCardHeader,
    CCardBody,

} from '@coreui/react'
import { useSelector } from "react-redux";
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
import UsersReject from "../users/UsersReject";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;



const ViewDataRejectedByAdmin = () => {
    const { user } = useSelector((state) => state.auth);

    const [dataByRejected, setDataByRejected] = useState([]);

  useEffect(() => {
    getDataByRejected();
    
  }, []);

  const getDataByRejected = async () => {
    const response = await axios.get("http://localhost:4366/dataByRejected");
    setDataByRejected(response.data);
    // console.log(response)
  };

  $(document).ready(function () {
    setTimeout(function () {
        $('#table').DataTable(
            {
                pagingType: 'full_numbers',
                pageLength: 5,
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
        <>
        <CRow>
            
           {user&&user.role === "admin"&&(
            <CCol xs={12}>
              <CCard>
                 <CCardHeader>
                   <strong>SUBSCRIBER REJECTED TABLE</strong>
                 </CCardHeader>
                  <CCardBody>
                    <Table hover size="sm" responsive  id="table">
           <thead className="thead-dark" id="table">
          <tr>
            <th >No</th>
            <th >Subscriber</th>
            <th >Date Created</th>
            <th >DOB</th>
            <th >FullName</th>
            <th >Gender</th>
            <th >ID NO</th>
            <th >ID Type</th>
            <th >Nationality</th>
            <th >Address</th>
            <th>KYC Confirmed</th>
            <th>User Name</th>
            <th>confirm Date</th>
            
          </tr>
        </thead>
        <tbody>
          {dataByRejected.map((dataByRejected, index) => (
            <tr key={dataByRejected.id}>
              <td>{index + 1}</td>
              <td>{dataByRejected.confirm_by_subscriber}</td>
              <td>{dataByRejected.date_created}</td>
              <td>{dataByRejected.dateofbirth}</td>
              <td>{dataByRejected.fullname}</td>
              <td>{dataByRejected.gender}</td>
              <td>{dataByRejected.id_number}</td>
              <td>{dataByRejected.id_type}</td>
              <td>{dataByRejected.nationality}</td>
              <td>{dataByRejected.permanent_residential_address}</td>
              <td>{dataByRejected.confirm_status}</td>
              <td>{dataByRejected.confirmBy_kyc}</td>
              <td>{dataByRejected.confirmDate}</td>
            </tr>
          ))}
        </tbody>
       </Table>
       </CCardBody>
       </CCard>
        </CCol>

        )}

        <div>
            {user&&user.role ==="user"&&(
                <UsersReject/>
            )}
        </div>
          
        </CRow>
        </>
    );
};

export default ViewDataRejectedByAdmin;
