import { useRef, useState } from "react";

const FocusInput = () => {
  const input = useRef(null);

  const handleFocusInput = () => {
    input.current.focus();
  };
  return (
    <div>
      <h2>Focus Input</h2>
      <input type="text" ref={input} />
      <button onClick={handleFocusInput}>Input Focus</button>
    </div>
  );
};
const Day20 = () => {
  const [time, setTime] = useState(0);

  const id = useRef(null);

  // let id = null => For cleartimeout it will not work due to reranding the component
  const start = () => {
    // const id = setInterval(() => { => Can not do it willnot accessible in Stop function
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(id.current);
  };
  return (
    <div>
      <h2>Day 19 Refs and useRef hook</h2>
      <p>Time: {time}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>

      <br />
      <br />
      <FocusInput />
    </div>
  );
};

export default Day20;
