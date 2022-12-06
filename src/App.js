import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NavBar from "./Pages/Home/Shared/NavBar";
import Login from "./Pages/Login/Login";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Register from "./Pages/Home/Register/Register";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/appointment" element={<Appoinment></Appoinment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
