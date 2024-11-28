import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from './pages/Auth/Register'
import Flow from './pages/Auth/Flow'
import Adminpanel from './pages/Adminpanel'
import Addcourse from './components/Admin/Addcourse'
import Studentdetails from './components/Admin/Studentdetails'
import Coursedetails from './components/Admin/Coursedetails'
import Universitydetails from './components/Admin/Universitydetails'
import Otpverification from './pages/Otpverification'
import About from "./components/about/About";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/universityregister" element={<Register uniregister />} />
        <Route path="/studentregister" element={<Register />} />
        <Route path="/flow" element={<Flow />} />
        <Route path="/admin" element={<Adminpanel />} />
        <Route path="/addcourse" element={<Addcourse />} />
        <Route path="/studentdetails" element={<Studentdetails />} />
        <Route path="/universitydetails" element={<Universitydetails />} />
        <Route path="/coursedetails" element={<Coursedetails />} />
        <Route path="/otp" element={<Otpverification />} />
      </Routes>
    </>
  );
}

export default App;
