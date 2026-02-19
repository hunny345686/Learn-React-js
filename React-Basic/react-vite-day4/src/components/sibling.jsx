import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function Sibling() {
  const { count } = useContext(CounterContext);

  console.log("Sibling");

  return (
    <div>
      <h2>Sibling Component</h2>
      <p>This Sibling Count {count}</p>
    </div>
  );
}
