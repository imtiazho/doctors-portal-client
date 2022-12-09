import React from "react";
import { toast } from "react-hot-toast";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Faild to make admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.result.modifiedCount > 0) {
          refetch();
          toast.success("Sucesfully make admin");
        }

        // console.log(data);
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            className="btn btn-xs bg-green-600 text-white border-0"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs bg-red-600 text-white border-0">
          Delete User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
