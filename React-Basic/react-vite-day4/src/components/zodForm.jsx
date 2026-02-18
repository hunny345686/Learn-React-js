import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import z from "zod";
const ZodForm = () => {
  const formSchema = z.object({
    name: z.string().min(3, "name min Lenght 3").max(10, "name max Lenght 10"),
    age: z.coerce.number().min(10, "min age 10").max(24, "max age 24"),
    password: z
      .string()
      .min(4, "password min Lenght 4")
      .max(6, "password max Lenght 6"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const formSubmit = (data) => {
    console.log("hell", data);
  };
  return (
    <div>
      <h2>React Hook Form with ZOD Validation</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
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
        {errors?.age && <p style={{ color: "red" }}>{errors?.age?.message}</p>}
        <div>
          <label htmlFor="pass">Name</label>
          <input
            type="text"
            id="pass"
            {...register("password")}
            placeholder="Password.."
          />
          {errors?.password && (
            <p style={{ color: "red" }}>{errors?.password?.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ZodForm;
