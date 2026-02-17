import { useState } from "react";

export default function Dya6() {
  const [conter, setCounter] = useState(0);
  const [arry, setAaay] = useState([10, 20, 30]);

  const [foodItem, setfoodItem] = useState(["apple", "mango", "banana"]);

  //   const a = [10, 20, 30];
  //   const x = a.push(40);

  //   console.log(a); // [10,20,30,40]
  //   console.log(x); // 4   ← returned value

  function hendlePush() {
    // arry.push(40);
    setAaay((prev) => [...prev, 40]);
  }

  const handleAddFood = () => {
    // setfoodItem([...foodItem, "graps"]); // need to give key as inx also but you need to add itme from end then only it will be good
    setfoodItem(["graps", ...foodItem]); // need to give key as item not index
  };
  return (
    <div>
      <h2>Dya 6</h2>
      {arry}
      <button onClick={hendlePush}>PushData</button>

      <h3>{conter}</h3>
      <button onClick={() => setCounter(conter + 1)}>Increment</button>
      <button onClick={() => setCounter(conter - 1)}>Decreament</button>

      <ul>
        {foodItem.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}
