import { CounterProvider } from "./components/CounterContext";
import Parent from "./components/Parent";

const Day13 = () => {
  console.log("Day13");
  return (
    <div>
      <h2>Day 13 Prop Drilling / lifting state up</h2>
      {/* <Parent count={count} setCount={setCount} /> */} // Prop Drilling
      issue
      <CounterProvider>
        <Parent />
      </CounterProvider>
    </div>
  );
};

export default Day13;
