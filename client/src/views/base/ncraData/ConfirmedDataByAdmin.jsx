/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {
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
import UsersConfirm from "../users/UsersConfirm";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;



const ConfirmedDataByAdmin = () => {
    const { user } = useSelector((state) => state.auth);

    const [dataByConfirmed, setDataByConfirmed] = useState([]);

  useEffect(() => {
    getDataByConfirmed();
    
  }, []);

  const getDataByConfirmed = async () => {
    const response = await axios.get("http://localhost:4366/dataByConfirmed");
    setDataByConfirmed(response.data);
  };

  //datatables
    
  $(document).ready(function () {
    setTimeout(function () {
        $('#confirm').DataTable(
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
                   <strong>SUBSCRIBER CONFIRMED TABLE</strong>
                 </CCardHeader>
                  <CCardBody>
                    <Table hover size="sm" responsive  id="confirm">
           <thead className="thead-dark">
          <tr>
            <th >No</th>
            <th >Subscriber</th>
            <th >Date</th>
            <th >DOB</th>
            <th >FullName</th>
            <th >Gender</th>
            <th >ID NO</th>
            <th >ID Type</th>
            <th >Nationality</th>
            <th >Address</th>
            <th>KYC Confirmed</th>
            <th>User Name</th>
            <th>Confirmed Date</th>
            
          </tr>
        </thead>
        <tbody>
          {dataByConfirmed.map((dataByConfirmed, index) => (
            <tr key={dataByConfirmed.id}>
              <td>{index + 1}</td>
              <td>{dataByConfirmed.confirm_by_subscriber}</td>
              <td>{dataByConfirmed.date_created}</td>
              <td>{dataByConfirmed.dateofbirth}</td>
              <td>{dataByConfirmed.fullname}</td>
              <td>{dataByConfirmed.gender}</td>
              <td>{dataByConfirmed.id_number}</td>
              <td>{dataByConfirmed.id_type}</td>
              <td>{dataByConfirmed.nationality}</td>
              <td>{dataByConfirmed.permanent_residential_address}</td>
              <td>{dataByConfirmed.confirm_status}</td>
              <td>{dataByConfirmed.confirmBy_kyc}</td>
              <td>{dataByConfirmed.confirmDate}</td>
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
                <UsersConfirm/>
            )}
        </div>
          
        </CRow>
        </>
    );
};

export default ConfirmedDataByAdmin;
