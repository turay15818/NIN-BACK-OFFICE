/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';
// import { FaUserPlus } from 'react-icons/fa';
import {
    CButtonGroup,
    CButton,
    CCol,
    CRow,
    CModalTitle,
    CModal,
    CModalHeader,
    CModalBody,
    CCard,
    CCardHeader,
    CCardBody,

} from '@coreui/react'
import { useDispatch, useSelector } from "react-redux";



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

  

  

 
 

  

   


    return (
        <>
        <CRow>
            
           {user&&user.role === "admin"&&(
            <CCol xs={12}>
              <CCard>
                 <CCardHeader>
                   <strong>Users Request List</strong>
                 </CCardHeader>
                  <CCardBody>
                    <Table hover size="sm" responsive  id="table">
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
              
            </tr>
          ))}
        </tbody>
       </Table>
       </CCardBody>
       </CCard>
        </CCol>

        )}
          
        </CRow>
        </>
    );
};

export default InfoData;
