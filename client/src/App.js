//Components
import Login from "./auths/login/Login";
import Singup from "./auths/signup/Singup";
import Dashboard from "./pages/Dashboard";
import Approved from "./dashboard/component/Approved";
import Pending from "./dashboard/component/Pending";

//Router
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/approved" element={<Approved />} />
        <Route path="/pending" element={<Pending />} />
      </Routes>
    </>
  );
}

export default App;
