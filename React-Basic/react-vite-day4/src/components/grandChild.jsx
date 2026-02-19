import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function GrandChild() {
  const { count, setCount } = useContext(CounterContext);
  console.log("GrandChild");

  /**
     *- If i want to give the count to sibling component need to lift up this state
       return 
     */
  //   const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Component GrandChild</h2>

      <p> Counter in GrandChild</p>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>Incremant</button>
    </div>
  );
}
