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
import moment from 'moment'
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;



const InfoData = () => {
 const { user } = useSelector((state) => state.auth);

const currentDate = moment().format('DD-MM-YYYY')
const date = new Date();
const current_time = date.getHours() + ":" + " " + date.getMinutes()  + ":" + " " + date.getSeconds();
const today = current_time + "  " + currentDate;

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
  

//audit trail
const handleAuditTrails = async() => {
  const actor = user.userName;
  const action = 'Admin Confirm';
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

const handleAuditTrail = async() => {
  const actor = user.userName;
  const action = 'Admin View Detail';
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

const handleAudits = async() => {
  const actor = user.userName;
  const action = 'Admin Nin Search Report';
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

const handleAudit = async() => {
  const actor = user.userName;
  const action = 'Admin Reporting';
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
            {user&&user.role ==="admin" &&(
                <CButton color="dark" style={{ border: "solid 2px yellow", marginLeft: '11px', borderRadius: '3px', width:"20%", height:"6vh", }}>
                <Link to="/base/ncraData/adminReporting" style={{ color: "yellow", textDecoration: "none", fontWeight: 700 }}
                 onClick={handleAudit}
                >
                    <MdPendingActions style={{ color: "yellow", fontSize: "30px" }}/>  Reporting
                </Link>
            </CButton>
            )}
           
               {user&&user.role ==="admin" &&(
                 <CButton color="dark" style={{ border: "solid 2px yellow", marginLeft: '2px', borderRadius: '3px', width:"20%", height:"6vh" }}>
                 <Link to="/base/ncraData/ninReporting" style={{ color: "yellow", textDecoration: "none", fontWeight: 700 }}
                  onClick={handleAudits}
                 >
                     <MdPendingActions style={{ color: "yellow", fontSize: "30px" }}/>  Nin Search
                 </Link>
             </CButton>
               )}
            
           {user&&user.role === "admin"&&(
            <CCol xs={12}>
              <CCard>
                 <CCardHeader>
                   <strong>SUBSCRIBER NCRA DATA TABLE</strong>
                 </CCardHeader>
                  <CCardBody>
                    <Table hover size="sm" responsive  id="info">
           <thead className="thead-dark" >
          <tr>
            <th >No</th>
            <th >FullName</th>
            <th >ID NO</th>
            <th >Nationality</th>
            <th>Status</th>
            <th>View Detail</th>
            <th>KYC Confirmed</th>
        
          </tr>
        </thead>
        <tbody>
          {ncraNinData.map((ncraNinData, index) => (
            <tr key={ncraNinData.id}>
              <td>{index + 1}</td>
              <td>{ncraNinData.fullname}</td>
              <td>{ncraNinData.id_number}</td>
              <td>{ncraNinData.nationality}</td>
              <td>{ncraNinData.confirm_status}</td>
              <td>
              <CButton style={{ marginRight: "4px", backgroundColor:"black", border:"2px solid yellow" }} id="editUsers">
                        <Link id="editUsers" style={{ textDecoration: "none", fontWeight: 700, color: 'white' }}
                            to={`/base/admin/infoData/get/${ncraNinData.id}`}
                            onClick={handleAuditTrail}

                         >
                         < BiEdit style={{ color: "yellow" }} />Details</Link>
                  </CButton>
              </td>
              <td>
                  <CButton style={{ marginRight: "4px", backgroundColor:"black", border:"2px solid yellow" }} id="myButton">
                        <Link id="editUsers" style={{ textDecoration: "none", fontWeight: 700, color: 'white' }}
                            to={`/base/ncraData/infoData/${ncraNinData.id}`}
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
