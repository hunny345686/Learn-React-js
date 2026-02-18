import { useState } from "react";
import Form from "./components/FormHook";
import ZodForm from "./components/zodForm";

const Day12 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Day 12 react From Normal</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignContent: "center",
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
            placeholder="Name.."
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            id="age"
            placeholder="age.."
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="pass">Name</label>
          <input
            type="text"
            name="password"
            id="pass"
            placeholder="Password.."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div>
        <Form />
      </div>

      <div>
        <ZodForm />
      </div>
    </div>
  );
};

export default Day12;
