import { useState } from "react";

const Counter = ({ item }) => {
  const [conut, setCount] = useState(0);

  const inrc = () => {
    setCount(conut + 1);
  };
  return (
    <div>
      <div>
        <h5>ALPHABETS = {item}</h5>

        <p>Conting No {conut}</p>
        <button onClick={inrc}>Increamnet</button>
      </div>
    </div>
  );
};

export default function Dya7() {
  const [alphabet, setAlphabet] = useState(["A", "B", "C"]);

  const handleAddAlphabet = () => {
    setAlphabet((prev) => ["D", ...prev]);
  };

  return (
    <div>
      <button onClick={handleAddAlphabet}>Add Food</button>
      <div style={{ display: "flex", alignContent: "center", gap: "40px" }}>
        {alphabet.map((item) => (
          // <Counter item={item} /> it will be a issue if will not use Key over theer
          <Counter key={item} item={item} />
        ))}
      </div>
    </div>
  );
}
