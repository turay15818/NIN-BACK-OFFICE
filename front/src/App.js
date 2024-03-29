import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import UpdateResetPass from './views/pages/login/UpdateResetPass'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Login Page" element={<Login />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
            <Route
              exact
              path="/updateResetPass/:token"
              name="Login Page"
              element={<UpdateResetPass />}
            />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
