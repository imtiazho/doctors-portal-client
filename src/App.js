import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NavBar from "./Pages/Home/Shared/NavBar";
import Login from "./Pages/Login/Login";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Register from "./Pages/Home/Register/Register";
import RequirAuth from "./RequirAuth/RequirAuth";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppoinment from "./Pages/Dashboard/MyAppoinment";
import Review from "./Pages/Dashboard/Review";
import AllUsers from "./Pages/Dashboard/AllUsers";
import RequirAdmin from "./Pages/Login/RequireAdmin";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/appointment"
          element={
            <RequirAuth>
              <Appoinment></Appoinment>
            </RequirAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequirAuth>
              <Dashboard></Dashboard>
            </RequirAuth>
          }
        >
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route
            path="users"
            element={
              <RequirAdmin>
                <AllUsers></AllUsers>
              </RequirAdmin>
            }
          ></Route>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
