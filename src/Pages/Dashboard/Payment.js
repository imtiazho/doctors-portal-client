import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Home/Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51MDbv7Gyqqc5eggDIjN3eXzEhjWjxNHrPdiLE8n75hg9FOcTNNyyWmtUl1WYK2oXMc3YoIpRv1j9UQsYhFw6TnQL00bwgLh6jh");

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const {
    isLoading,
    error,
    data: appoinment,
    refetch,
  } = useQuery(["booking", id], () =>
    fetch(url, {
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
    <div>
      <h2 className="text-3xl">Please Pay for {id}</h2>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <h2 className="card-title">Pay for {appoinment.treatmentName}</h2>
          <p>
            We will see you on {appoinment.date} at {appoinment.slot}
          </p>
          <p>Please pay ${appoinment.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appoinment={appoinment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
