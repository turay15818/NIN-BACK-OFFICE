import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    change: changeState, // add your reducer function here
  },
})

export default store
