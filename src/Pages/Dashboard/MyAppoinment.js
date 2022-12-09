import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppoinment = () => {
  const [myAppointment, setMyAppointment] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/booking?patientEmail=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        setMyAppointment(data);
      });
  }, [user.email, navigate]);
  return (
    <div>
      <div className="overflow-x-auto mt-4 mr-4">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Dtae</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {myAppointment.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{a.patient}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatmentName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinment;
