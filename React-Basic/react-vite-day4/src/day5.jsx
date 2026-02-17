import { useEffect, useRef, useState } from "react";

const Day5 = () => {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(true);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  //   const ref = useRef(time);

  //   ref.current = time;
  useEffect(() => {
    // if (!show) return;
    const time = setInterval(() => {
      console.log("hi");
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [show]);

  useEffect(() => {
    async function getUser() {
      const fc = new AbortController();
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        signal: fc.signal,
      });
      const result = await res.json();
      setUser(result[0].name);
      // Clean up
      return () => {
        fc.abort();
      };
    }
    getUser();
  }, []);

  function handleShowHide() {
    setShow(!show);
  }

  return (
    <div>
      <h2>Use Effect </h2>
      {user}

      <h2>Time: {show && time}</h2>

      <button onClick={handleShowHide}>{show ? "hide" : "Show"}</button>
    </div>
  );
};

export default Day5;
