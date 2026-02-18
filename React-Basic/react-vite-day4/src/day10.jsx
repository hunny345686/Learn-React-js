import { useRef, useState } from "react";
// One way to do it assign variable out side of your function
// let intervel = null;

const Day10 = () => {
  const [time, setTime] = useState(0);
  const intervel = useRef(null);
  const handleStart = () => {
    if (intervel.current != null) {
      return;
    }
    // console.log("Outside");
    intervel.current = setInterval(() => {
      // console.log("inside");
      setTime((prev) => prev + 1);
      // console.log(time);
    }, 1000);
  };

  const handleStop = () => {
    clearTimeout(intervel.current);
  };
  const handleReset = () => {
    clearTimeout(intervel.current);
    setTime(0);
    intervel.current = null;
  };
  const handleResume = () => {
    handleStart();
  };
  return (
    <div>
      <h2>Day 10 useRaf</h2>
      <h3>Stopwatch: {time}</h3>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleResume}>Resume</button>
      </div>
    </div>
  );
};

export default Day10;
