//Components
import Login from "./auths/login/Login";
import Singup from "./auths/signup/Singup";
import Dashboard from "./pages/Dashboard";

//Router
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
