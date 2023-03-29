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



  

    const [nin, setNin] = useState([]);

  useEffect(() => {
    getNin();
    const intervalId = setInterval(() => {
      window.location.reload();
    }, 603000); // refresh every 5 minutes
  
    return () => clearInterval(intervalId);
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
                   <strong className="text-center">Data From NCRA NIN</strong><br/>
                   <strong className="text-center">Please Ensure that you view the detail first before you can confirm</strong>
                 </CCardHeader>
                  <CCardBody>
                    <Table hover size="sm" responsive  id="info">
           <thead className="thead-dark" >
          <tr>
            <th >No</th>
            <th >FullName</th>
            <th >Gender</th>
            <th >ID Type</th>
            <th >Nationality</th>
            <th >Resident</th>
            <th>Status</th>
            <th>Confirm</th>
            <th>View</th>
            
          </tr>
        </thead>
        <tbody>
          {nin.map((nin, index) => (
            <tr key={nin.id}>
              <td>{index + 1}</td>
              <td>{nin.fullname}</td>
              <td>{nin.gender}</td>
              <td>{nin.id_type}</td>
              <td>{nin.nationality}</td>
              <td>{nin.permanent_residential_address}</td>
              <td >{nin.confirm}</td>
              <td>
              <CButton style={{ marginRight: "4px", backgroundColor:"black", border:"2px solid yellow" }}id="editUsers">
                        <Link id="editUsers" style={{ textDecoration: "none", fontWeight: 700, color: 'white' }}
                            to={`/base/users/userNcraNin/get/${nin.id}`}
                            onClick={handleAuditTrail}
                         >
                         < BiEdit style={{ color: "yellow" }} />ViewDetail</Link>
                  </CButton>
              </td>
              <td>
                  <CButton disabled={makeStyles(nin.confirm)} style={{ marginRight: "4px", backgroundColor:"black", border:"2px solid yellow" }} id="editUsers">
                        <Link id="editUsers" style={{ textDecoration: "none", fontWeight: 700, color: 'white' }}
                            to={`/base/users/userNcraNin/${nin.id}`}
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
