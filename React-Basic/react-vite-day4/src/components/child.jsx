import GrandChild from "./grandChild";

export default function Child() {
  console.log("Child");

  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild />
    </div>
  );
}
