/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";
import axios from 'axios'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import {CChartBar,} from '@coreui/react-chartjs'


const Chart = () => {

  const { user } = useSelector((state) => state.auth);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

//Users API

const [users, setUsers] = useState([]);

useEffect(() => {
    getUsers();
}, []);

const getUsers = async () => {
  const response = await axios.get("http://localhost:4366/users");
  setUsers(response.data);
};

//NCRA NIN API
const [ncraNinData, setNcraNinData] = useState([]);

useEffect(() => {
  getNcraNinData();
}, []);

const getNcraNinData = async () => {
  const response = await axios.get("http://localhost:4366/ncraNinData");
  setNcraNinData(response.data);
  console.log(response)
};



//Confirm chart bar
const [recountConfirm, setRecountConfirm] = useState([]);

useEffect(() => {
    getRecountConfirm();
}, []);

const getRecountConfirm = async () => {
  const response = await axios.get("http://localhost:4366/recountConfirm");
  setRecountConfirm(response.data);
};


//Rejected Chart bar
const [recountReject, setRecountReject] = useState([]);

useEffect(() => {
    getRecountReject();
}, []);

const getRecountReject = async () => {
  const response = await axios.get("http://localhost:4366/recountReject");
  setRecountReject(response.data);
};


//Pending chart bar
const [recountPending, setRecountPending] = useState([]);

useEffect(() => {
    getRecountPending();
}, []);

const getRecountPending = async () => {
  const response = await axios.get("http://localhost:4366/recountPending");
  setRecountPending(response.data);
};



  useEffect(() =>{
    const intervalId = setInterval(() => {
      window.location.reload();
    }, 603000); // refresh every 10 minutes 3 seconds
  
    return () => clearInterval(intervalId);
  },[])

  return (
    <>
      <CCard className="mb-4">
      </CCard>


      {user&&user.role ==="admin"&&(
      <CRow>
        <CCol xs={12}>

        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>NCRA NIN CHART</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: ['Users', 'NCRA NIN'],
                  datasets: [
                    {
                      label: 'NCRA NIN',
                      backgroundColor: ['black', '#ff6600'],
                      data: [`${users.length}`,`${ncraNinData.length}`],
                    },
                  ],
                }}
                labels="app"
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>KYC CONFIRM CHART</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: ['Confirmed', 'Rejected', 'Pending'],
                  datasets: [
                    {
                      label: 'NCRA NIN',
                      backgroundColor: ['#ff6600', 'warning', '#243763'],
                      data: [`${recountConfirm.length}`, `${recountReject.length}`, `${recountPending.length}`],
                    },
                  ],
                }}
                labels="months"
              />
            </CCardBody>
          </CCard>
        </CCol>
      

      </CRow>
      )}


    </>
  )
}

export default Chart
