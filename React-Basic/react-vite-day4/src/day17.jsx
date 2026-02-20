import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ince": {
      let newState = state + 1;
      return newState;
    }
    case "dece":
      return (state = state - 1);
    case "reset":
      return [(state = 0)];
    case "ADD10":
      return (state = state + action.val);
    default:
      return state;
  }
};

const Day17 = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>Day 17 = useReducer Hook</h2>

      <p>{state}</p>
      <button onClick={() => dispatch({ type: "ince" })}>Increment</button>
      <button onClick={() => dispatch({ type: "dece" })}>Decretamen</button>
      <button onClick={() => dispatch({ type: "reset" })}>rest</button>
      <button onClick={() => dispatch({ type: "ADD10", val: 10 })}>
        Add 10
      </button>
    </div>
  );
};

export default Day17;
