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
import moment from 'moment'
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



const UsersNcraNin = () => {
    const { user } = useSelector((state) => state.auth);



  

    const [ncraNinData, setNcraNinData] = useState([]);

  useEffect(() => {
    getNcraNinData();
    const intervalId = setInterval(() => {
      window.location.reload();
    }, 603000); // refresh every 10 minutes
  
    return () => clearInterval(intervalId);
  }, []);

  const getNcraNinData = async () => {
    const response = await axios.get("http://localhost:4366/ncraNinData");
    setNcraNinData(response.data);
    console.log(response)
  };

  

  //datatable
  $(document).ready(function () {
    setTimeout(function () {
        $('#info').DataTable(
            {
                pagingType: 'full_numbers',
                pageLength: 3,
                processing: true,
                destroy: true,
            }
        );
    },
        1000
    );
});

const currentDate = moment().format('DD-MM-YYYY')
const date = new Date();
const current_time = date.getHours() + ":" + " " + date.getMinutes();
const today = current_time + "  " + currentDate;



const makeStyles = (confirm) => {
  if (confirm === 'confirmed') {
    return {
      button: {
       disabled: true, // enable button
      },
    }
  } else if (confirm === 'Rejected') {
    return {
      button: {
        disabled: true, // disable button
      },
    }
  } 
}

//audit trail
const handleAuditTrail = async() => {
  const actor = user.userName;
  const action = 'View Detail NCRA NIN';
  const performedDate = today;
  
  await axios.post('http://localhost:4366/auditTrail', { 
    actor, 
    action, 
    performedDate,
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

const handleAuditTrails = async() => {
  const actor = user.userName;
  const action = 'Confirm Button';
  const performedDate = today;
  
  await axios.post('http://localhost:4366/auditTrail', { 
    actor, 
    action, 
    performedDate,
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

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
                   <strong className="text-center">SUBSCRIBER NCRA DATA TABLE</strong><br/>
                   <strong className="text-center">Please Ensure that you view the detail first before you can confirm</strong>
                 </CCardHeader>
                  <CCardBody>
                    <Table hover size="sm" responsive  id="info">
           <thead className="thead-dark" >
          <tr>
            <th >No</th>
            <th >FullName</th>
            <th >ID Type</th>
            <th >Nationality</th>
            <th>Status</th>
            <th>Reason</th>
            <th>View Details</th>
            <th>KYC Confirmed</th>
            
          </tr>
        </thead>
        <tbody>
          {ncraNinData.map((ncraNinData, index) => (
            <tr key={ncraNinData.id}>
              <td>{index + 1}</td>
              <td>{ncraNinData.fullname}</td>
              <td>{ncraNinData.id_type}</td>
              <td>{ncraNinData.nationality}</td>
              <td >{ncraNinData.confirm}</td>
              <td >{ncraNinData.revisedReason}</td>
              <td>
              <CButton style={{ marginRight: "4px", backgroundColor:"black", border:"2px solid yellow" }}id="editUsers">
                        <Link id="editUsers" style={{ textDecoration: "none", fontWeight: 700, color: 'white' }}
                            to={`/base/users/userNcraNin/get/${ncraNinData.id}`}
                            onClick={handleAuditTrail}
                         >
                         < BiEdit style={{ color: "yellow" }} />Details</Link>
                  </CButton>
              </td>
              <td>
                  <CButton disabled={makeStyles(ncraNinData.confirm)} style={{ marginRight: "4px", backgroundColor:"black", border:"2px solid yellow" }} id="editUsers">
                        <Link id="editUsers" style={{ textDecoration: "none", fontWeight: 700, color: 'white' }}
                            to={`/base/users/userNcraNin/${ncraNinData.id}`}
                            onClick={handleAuditTrails}

                         >
                         < BiEdit style={{ color: "yellow" }} />Confirm</Link>
                  </CButton>
                 
              </td>
            
              
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

export default UsersNcraNin;
