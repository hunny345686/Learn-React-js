import { useReducer } from "react";

const initialVal = {
  count: 0,
  history: [],
};

// Reducer function

const reducer = (state, action) => {
  switch (action.type) {
    case "ince":
      return {
        count: state.count + 1,
        history: [...state.history, state.count + 1],
      };

    case "dec":
      return {
        count: state.count - 1,
        history: [...state.history, state.count - 1],
      };
    case "reset":
      return {
        count: 0,
        history: [...state.history, 0],
      };
    case "by10":
      return {
        count: action.value,
        history: [...state.history, action.value],
      };
    default:
      return state;
  }
};
const Day14 = () => {
  const [state, dispatch] = useReducer(reducer, initialVal);
  // =================== Using useState Hook We have multiple Actiins There
  // const [count, setCount] = useState(0);
  // const [history, setHistory] = useState([]);

  // const handleIncrement = () => {
  //   setCount(count + 1);
  //   setHistory([...history, count + 1]);
  // };
  // const handleDecrement = () => {
  //   setCount(count - 1);
  //   setHistory([...history, count - 1]);
  // };
  // const handleReset = () => {
  //   setCount(0);
  //   setHistory([...history, 0]);
  // };
  // const handleBy10 = (no) => {
  //   setCount(count + no);
  //   setHistory([...history, count + no]);
  // };

  // Using use Reducer Hook

  return (
    <div>
      <h2>Day 14 useReduces</h2>

      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "ince" })}>Increment</button>
      <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "by10", value: 10 })}>
        set to 10
      </button>

      <p>History: {state.history.join(",")}</p>
    </div>
  );
};

export default Day14;
