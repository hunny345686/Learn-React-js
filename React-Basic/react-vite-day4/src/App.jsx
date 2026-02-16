import { useState } from "react";
// import { createRoot } from "react-dom/client";
import "./App.css";
// Way to rerender on click
// let count = 0;
// function handleIncreament() {
//   count++;
//   createRoot(document.getElementById("root")).render(<App />);
// }
function App() {
  //  === Without UseState

  // let count = 0;
  //     const handleIncreament = () => {
  //       count++;
  //       const para = document.querySelector("p");
  //       para.innerText = count;
  //       console.log(count);
  //     };

  // With useState
  // let [count, setCount] = useState(0);
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    // count++;

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={handleIncreament}>Increament</button>
    </div>
  );
}

export default App;
