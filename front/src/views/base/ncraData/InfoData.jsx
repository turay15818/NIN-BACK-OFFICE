/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';
// import { FaUserPlus } from 'react-icons/fa';
import {
    CButton,
    CCol,
    CRow,
    CCard,
    CCardHeader,
    CCardBody,

} from '@coreui/react'
import { BiEdit } from 'react-icons/bi';
import { useSelector } from "react-redux";
import { MdPendingActions } from 'react-icons/md';
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
import UsersNcraNin from "../users/UsersNcraNin";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;



const InfoData = () => {
    const { user } = useSelector((state) => state.auth);

    const [nin, setNin] = useState([]);

  useEffect(() => {
    getNin();
  }, []);

  const getNin = async () => {
    const response = await axios.get("http://localhost:4366/nin");
    setNin(response.data);
    console.log(response)
  };

  
  $(document).ready(function () {
    setTimeout(function () {
        $('#info').DataTable(
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
        <>
        <CRow>

        <CButton color="dark" style={{ border: "solid 2px yellow", margin: '2px', borderRadius: '3px', width:"20%", height:"6vh" }}>
                   <Link to="/base/ncraData/adminReporting" style={{ color: "yellow", textDecoration: "none", fontWeight: 700 }}>
                       <MdPendingActions style={{ color: "yellow", fontSize: "30px" }} />  Reporting
                   </Link>
               </CButton>
            
           {user&&user.role === "admin"&&(
            <CCol xs={12}>
              <CCard>
                 <CCardHeader>
                   <strong>Users Request List</strong>
                 </CCardHeader>
                  <CCardBody>
                    <Table hover size="sm" responsive  id="info">
           <thead className="thead-dark" >
          <tr>
            <th >No</th>
            <th >conf Customer</th>
            <th >Date Created</th>
            <th >DOB</th>
            <th >FullName</th>
            <th >Gender</th>
            <th >ID NO</th>
            <th >ID Type</th>
            <th >Nationality</th>
            <th >Per Resident</th>
            <th>Status</th>
        
          </tr>
        </thead>
        <tbody>
          {nin.map((nin, index) => (
            <tr key={nin.id}>
              <td>{index + 1}</td>
              <td>{nin.confirmnininfo_by_customer}</td>
              <td>{nin.date_created}</td>
              <td>{nin.dateofbirth}</td>
              <td>{nin.fullname}</td>
              <td>{nin.gender}</td>
              <td>{nin.id_number}</td>
              <td>{nin.id_type}</td>
              <td>{nin.nationality}</td>
              <td>{nin.permanent_residential_address}</td>
              <td>{nin.confirm}</td>
              
            </tr>
          ))}
        </tbody>
       </Table>
       </CCardBody>
       </CCard>
        </CCol>

        )}
          
          <div>
            {user&&user.role ==="user" &&(
                <UsersNcraNin/>
            )}
          </div>
        </CRow>
        </>
    );
};

export default InfoData;
