import { useState } from "react";

const Day15 = () => {
  const [count, setCount] = useState(0);
  /**
   * 1 Phase => Trigger
   * 2 Phase => Render
   * 3 Phane => Commit
   */
  console.log("Render phase => Component Rendring with count", count);

  const handleClik = () => {
    // console.log("Count Increament Befor ", count);
    // setCount(count + 1);
    // console.log("Trigring Phase => After SetCount Count is", count);

    setCount(count + 1);
    console.log("After setCount(count + 1 ", count);

    setCount(count + 5);
    console.log("After setCount(count + 5 ", count);

    setCount(count + 10);
    console.log("After setCount(count + 10 ", count);

    setTimeout(() => {
      setCount(count + 15);
      console.log("After 2min SetTimeout count is ", count);
    }, 2000);
  };
  return (
    <div>
      <h2>Day 15 State as a Snapshot </h2>

      <p>The Count is : {count}</p>

      <button onClick={handleClik}>Increament</button>
    </div>
  );
};

export default Day15;
