import { useReducer } from "react";

const Day18 = () => {
  /**
   * - Costom useState
   */
  const useCustomState = (initialval) => {
    const reducer = (state, action) => {
      console.log("state, action", state, action);

      if (typeof action === "function") {
        return action(state);
      }
      return action;
    };
    const [state, dispatch] = useReducer(reducer, initialval);

    const setState = (newValue) => {
      return dispatch(newValue);
    };

    return [state, setState];
  };

  const [count, setCount] = useCustomState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Day 18 = Implementing useState with useReducer</h2>

      <p>{count}</p>
      <button onClick={handleClick}>Increament</button>
    </div>
  );
};

export default Day18;
