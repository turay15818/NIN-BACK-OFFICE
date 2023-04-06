/* eslint-disable prettier/prettier */
import React, { useState, useEffect} from "react";
import { getMe } from "../../../features/authSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddUsers from "./AddUsers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
    CModalTitle,
    CModal,
    CModalHeader,
    CModalBody,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CButton
} from '@coreui/react'
import { FaUserPlus } from 'react-icons/fa';
// import { FiDelete } from 'react-icons/fi';
import { BiEdit } from 'react-icons/bi';
import { Table } from "react-bootstrap";
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
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;


const UsersList = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/dashboard");
        }
    }, [isError, navigate]);


    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:4366/users");
        setUsers(response.data);
    };

    // const deleteUser = async (userId) => {
    //     await axios.delete(`http://localhost:2552/users/${userId}`);
    //     getUsers();
    // };
    const [visibleLg, setVisibleLg] = useState(false)

//datatables
    
    $(document).ready(function () {
        setTimeout(function () {
            $('#userlist').DataTable(
                {
                    pagingType: 'full_numbers',
                    pageLength: 3,
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
                {user && user.role === 'admin' && (
                    <><CButton color="dark" onClick={() => setVisibleLg(!visibleLg)} style={{ fontWeight: 700,
                     width:"20%",
                      marginBottom:"10px",
                      marginLeft:"10px",
                      border:"2px solid yellow",
                      color:"yellow",
                      height:"10%"
                       }}><FaUserPlus style={{ color: "yellow", fontSize: "30px", marginRight: "20px" }} /> Add User</CButton>
                        <CModal visible={visibleLg} onClose={() => setVisibleLg(false)}>
                            <CModalHeader>
                                <CModalTitle>Add User</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <AddUsers />
                            </CModalBody>
                        </CModal>
                        

                       
                        </>



                )}
                
                {user&&user.role==="admin"&&(
                   <CButton color="dark" style={{ border: "solid 2px yellow", margin: '2px', borderRadius: '3px', width:"20%", height:"6vh" }}>
                   <Link to="/base/crud/resetPass" style={{ color: "yellow", textDecoration: "none", fontWeight: 700 }}>
                       <MdPendingActions style={{ color: "yellow", fontSize: "30px" }} />  Reset Password
                   </Link>
               </CButton>

                )}

                

                {user && user.role === 'admin' && (
                    <CCol xs={12}>
                        <CCard className="mb-4">
                            <CCardHeader>
                                <strong>Users Account</strong>
                            </CCardHeader>
                            <CCardBody>
                                <Table hover size="sm" responsive  className="table is-striped is-fullwidth" id="userlist" >
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Staff ID</th>
                                            <th>Name</th>
                                            <th>Phone No</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={user.id}>
                                               <td>{index + 1}</td>
                                               <td>{user.userIDD}</td>
                                               <td>{user.userName}</td>
                                               <td>{user.userPhone}</td>
                                               <td>{user.userEmail}</td>
                                               <td>{user.role}</td>
                                                <td>




                                                    <CButton style={{ marginRight: "4px", backgroundColor:"black", border:"2px solid yellow" }} id="editUsers">
                                                        <Link id="editUsers" style={{ textDecoration: "none", fontWeight: 700, color: 'white' }}
                                                            to={`/base/users/edit/${user.id}`}

                                                        >
                                                            < BiEdit style={{ color: "yellow" }} />Edit</Link>
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

            </CRow>
        </>
    )
}

export default UsersList;
