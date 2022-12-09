import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../Home/Shared/Loading";

const ManageDoctors = () => {
  const {
    isLoading,
    error,
    data: doctors,
    refetch,
  } = useQuery(["allDoctors"], () =>
    fetch("http://localhost:5000/doctors", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  } else if (error) {
    toast.error("An Error is occurred");
  }

  const deleteDoctor = (dEmail) => {
    fetch(`http://localhost:5000/doctors/${dEmail}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log(data);
          toast.success("Doctor delete successfully");
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avater</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((d, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                      <img src={d.img} />
                    </div>
                  </div>
                </td>
                <td>{d.name}</td>
                <td>{d.specialty}</td>
                <td>
                  <button
                    onClick={() => deleteDoctor(d.email)}
                    className="btn btn-xs bg-red-600 text-white border-0"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
