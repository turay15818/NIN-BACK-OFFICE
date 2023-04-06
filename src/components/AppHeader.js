/* eslint-disable prettier/prettier */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'
import { LogOut, reset } from '../features/authSlice'
import { useNavigate } from 'react-router-dom'
import { RiLogoutCircleLine } from 'react-icons/ri'

const AppHeader = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut())
    dispatch(reset());
    navigate("/");
    };

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="ms-3">
          <CButton onClick={logout} style={{ marginLeft: '5px', background: 'black', border:"2px solid yellow" }}>
            {' '}
            <RiLogoutCircleLine /> Logout{' '}
          </CButton>
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
    </CHeader>
  )
}

export default AppHeader
