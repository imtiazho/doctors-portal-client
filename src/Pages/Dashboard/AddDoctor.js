import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../Home/Shared/Loading";

const AddDoctor = () => {
  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery(["serveces"], () =>
    fetch("http://localhost:5000/allServices").then((res) => res.json())
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imagesStorageKey = "47525efe69e4554af8476259fe5ef0b5";

  if (isLoading) {
    return <Loading></Loading>;
  } else if (error) {
    toast.error("An Error is occurred");
  }

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imagesStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const docotor = {
            name: data?.name,
            email: data?.email,
            specialty: data?.specialty,
            img: image,
          };
          fetch("http://localhost:5000/doctor", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(docotor),
          })
            .then((response) => response.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Add Doctor");
                reset();
              } else {
                toast.error("Some went wrong");
              }
            });
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl">Add a Docotr</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Provide a valid email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs mb-2">
          <label className="label">
            <span className="label-text">Specialization</span>
          </label>

          <select
            {...register("specialty")}
            className="select select-bordered w-full max-w-xs"
          >
            {services.map((service) => (
              <option key={service.name} value={service.name}>
                {" "}
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-600">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn max-w-xs w-full text-white"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
