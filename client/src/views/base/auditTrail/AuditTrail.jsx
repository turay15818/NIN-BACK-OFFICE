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

const AuditTrail = () =>{

    const [auditTrail, setAuditTrail] = useState([])

    useEffect(() =>{
        getAuditTrail()
    },[]);

    const getAuditTrail = async() =>{
        const response = await axios.get('http://localhost:4366/auditTrail')
        setAuditTrail(response.data)
    }

    $(document).ready(function () {
        setTimeout(function () {
            $('#trail').DataTable(
                {
                    pagingType: 'full_numbers',
                    pageLength: 20,
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
    
    return(
        <>
        <CRow>
            
            <CCol xs={12}>
              <CCard>
                 <CCardHeader>
                   <strong>Audit Trail List</strong>
                 </CCardHeader>
                  <CCardBody>
                    <Table hover size="sm" responsive  id="trail">
           <thead className="thead-dark">
          <tr>
            <th >No</th>
            <th >Staff Name</th>
            <th >Action Performed</th>
            <th >Date</th>
            
            
          </tr>
        </thead>
        <tbody>
          {auditTrail.map((auditTrail, index) => (
            <tr key={auditTrail.id}>
              <td>{index + 1}</td>
              <td>{auditTrail.actor}</td>
              <td>{auditTrail.action}</td>
              <td>{auditTrail.performedDate}</td>
            </tr>
          ))}
        </tbody>
       </Table>
       </CCardBody>
       </CCard>
        </CCol>

       
        </CRow>
        </>
    )

}
export default AuditTrail;