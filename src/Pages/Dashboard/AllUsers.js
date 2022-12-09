import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../Home/Shared/Loading";
import UserRow from "./UserRow";

const AllUsers = () => {
  const { isLoading, error, data, refetch } = useQuery(["allUsers"], () =>
    fetch(`http://localhost:5000/allUsers`, {
      method: "GET",
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
  return (
    <div className="overflow-x-auto mt-4 mr-4">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <UserRow
              refetch={refetch}
              key={user._id}
              user={user}
              index={index}
            ></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
