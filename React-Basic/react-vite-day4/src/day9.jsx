import React, { useState } from "react";

const Day9 = React.memo(({ fn }) => {
  console.log("Day 9 component is rendring ");
  const [ping, setPing] = useState("");

  const data = { name: "Prem", age: 20 };

  const handleClik = () => {
    // const hello = fn();
    setPing(fn());
  };
  return (
    <div>
      <h2>Day 9</h2>
      <p>
        {ping}My name is {data.name} and age is {data.age}
      </p>
      <button onClick={handleClik}>Ping Hello</button>
    </div>
  );
});

export default Day9;
