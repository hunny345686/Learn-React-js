import Child from "./child";
import Sibling from "./sibling";

export default function Parent() {
  console.log("Parent");

  return (
    <div>
      <h2>Parent Component</h2>
      {/* <Child count={count} setCount={setCount} /> // This Prope Driling Parent 
      and child just pass the Props to there child componet*/}
      <Child />
      <Sibling />
    </div>
  );
}
