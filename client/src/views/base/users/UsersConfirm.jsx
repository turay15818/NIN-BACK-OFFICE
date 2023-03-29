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
import { BiEdit } from 'react-icons/bi';
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
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;



const UsersConfirm = () => {
    const { user } = useSelector((state) => state.auth);

    const [dataByConfirmed, setDataByConfirmed] = useState([]);

  useEffect(() => {
    getDataByConfirmed();
    const intervalId = setInterval(() => {
      window.location.reload();
    }, 603000); // refresh every 5 minutes
  
    return () => clearInterval(intervalId);
  }, []);

  const getDataByConfirmed = async () => {
    const response = await axios.get("http://localhost:4366/dataByConfirmed");
    setDataByConfirmed(response.data);
    // console.log(response)
  };

  //datatables
    
  $(document).ready(function () {
    setTimeout(function () {
        $('#confirm').DataTable(
            {
                pagingType: 'full_numbers',
                pageLength: 5,
                processing: true,
                destroy: true,
            }
        );
    },
        1000
    );
});


//Session auto logout after inactivity
useEffect(() => {
  const intervalId = setInterval(() => {
    axios.get('/ping')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, 5 * 60 * 1000); // 5 minutes in milliseconds

  return () => clearInterval(intervalId);
}, []);


    return (
        <>
        <CRow>
            
        
            <CCol xs={12}>
              <CCard>
                 <CCardHeader>
                   <strong>Confirm NiN</strong>
                 </CCardHeader>
                  <CCardBody>
                    <Table hover size="sm" responsive  id="confirm">
           <thead className="thead-dark">
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
            <th>ApprovedBy</th>
            
            
          </tr>
        </thead>
        <tbody>
          {dataByConfirmed.map((dataByConfirmed, index) => (
            <tr key={dataByConfirmed.id}>
              <td>{index + 1}</td>
              <td>{dataByConfirmed.confirmnininfo_by_customer}</td>
              <td>{dataByConfirmed.date_created}</td>
              <td>{dataByConfirmed.dateofbirth}</td>
              <td>{dataByConfirmed.fullname}</td>
              <td>{dataByConfirmed.gender}</td>
              <td>{dataByConfirmed.id_number}</td>
              <td>{dataByConfirmed.id_type}</td>
              <td>{dataByConfirmed.nationality}</td>
              <td>{dataByConfirmed.permanent_residential_address}</td>
              <td>{dataByConfirmed.confirm}</td>
             
            </tr>
          ))}
        </tbody>
       </Table>
       </CCardBody>
       </CCard>
        </CCol>

          
        </CRow>
        </>
    );
};

export default UsersConfirm;
