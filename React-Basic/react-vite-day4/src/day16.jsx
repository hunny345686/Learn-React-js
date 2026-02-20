import { useState } from "react";

const Day16 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(false);

  console.log("Render phase => Component Rendring with count");

  const handleClik = () => {
    // setCount((prev) => {
    //   console.log("first Updated Function prev Count = ", prev);
    //   return prev + 1;
    // });

    // setCount((prev) => {
    //   console.log("2nd Updated Function prev Count = ", prev);
    //   return prev + 5;
    // });

    // setCount((prev) => {
    //   console.log("3red Updated Function prev Count = ", prev);
    //   return prev + 10;
    // });

    // React Batches Updates

    setCount((prev) => {
      return prev + 1;
    });

    setCount((prev) => {
      return prev + 5;
    });

    setCount((prev) => {
      return prev + 10;
    });

    setName("Updated Name");
    setIsActive(true);
  };
  return (
    <div>
      <h2>Day 15 setState using Previous State </h2>

      <p>The Count is : {count}</p>

      <p>{name}</p>
      <p>Active : {isActive ? "Yes" : "No"}</p>

      <button onClick={handleClik}>Update ALL Ttree</button>
    </div>
  );
};

export default Day16;
