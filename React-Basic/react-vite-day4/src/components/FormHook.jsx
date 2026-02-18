import React from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log("hell", data);
  };
  return (
    <div>
      <h2>React Hook Form</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Name is requred",
            })}
            placeholder="Name.."
          />
          {errors?.name && (
            <p style={{ color: "red" }}>{errors?.name?.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            {...register("age")}
            id="age"
            placeholder="age.."
          />
        </div>
        <div>
          <label htmlFor="pass">Name</label>
          <input
            type="text"
            id="pass"
            {...register("password")}
            placeholder="Password.."
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
